#!/usr/bin/env python3
"""
recorder.py — grava trajectories de sessão no sessions.db
Substituto agnóstico do hermes_state.py para o loom-template.

Uso:
  python3 memory/recorder.py --init          # cria o banco
  python3 memory/recorder.py --start         # inicia uma sessão
  python3 memory/recorder.py --end           # finaliza sessão ativa
  python3 memory/recorder.py --signal good   # marca sessão com /good
  python3 memory/recorder.py --signal bad    # marca sessão com /bad
  python3 memory/recorder.py --list          # lista sessões recentes
  python3 memory/recorder.py --export        # exporta sessões boas como JSONL
"""

import argparse
import json
import sqlite3
import sys
import uuid
from datetime import datetime, timezone
from pathlib import Path

DB_PATH = Path(__file__).parent / "sessions.db"
STATE_FILE = Path(__file__).parent / ".active-session"


# ── Schema ────────────────────────────────────────────────────────────────────

SCHEMA = """
CREATE TABLE IF NOT EXISTS sessions (
    session_id      TEXT PRIMARY KEY,
    started_at      TEXT NOT NULL,
    ended_at        TEXT,
    quality_signal  TEXT,          -- 'good' | 'bad' | NULL
    provider_used   TEXT,          -- codex | gemini | claude
    skills_active   TEXT,          -- JSON array de skills carregadas
    agents_md_hash  TEXT,          -- hash do AGENTS.md nesta sessão
    notes           TEXT,          -- notas livres
    story_ids       TEXT           -- JSON array de US implementadas
);

CREATE TABLE IF NOT EXISTS messages (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id      TEXT NOT NULL,
    role            TEXT NOT NULL,   -- user | assistant | tool
    content         TEXT NOT NULL,
    timestamp       TEXT NOT NULL,
    FOREIGN KEY (session_id) REFERENCES sessions(session_id)
);

CREATE INDEX IF NOT EXISTS idx_sessions_quality ON sessions(quality_signal);
CREATE INDEX IF NOT EXISTS idx_sessions_started ON sessions(started_at);
CREATE INDEX IF NOT EXISTS idx_messages_session ON messages(session_id);
"""


def get_conn() -> sqlite3.Connection:
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    with get_conn() as conn:
        conn.executescript(SCHEMA)
    print(f"✓ sessions.db inicializado em {DB_PATH}")


# ── Sessão ────────────────────────────────────────────────────────────────────

def start_session() -> str:
    if STATE_FILE.exists():
        existing = STATE_FILE.read_text().strip()
        print(f"⚠ sessão ativa já existe: {existing}")
        return existing

    session_id = str(uuid.uuid4())[:8]
    now = datetime.now(timezone.utc).isoformat()

    # detecta provider atual do ralph loop
    provider = _detect_provider()
    # lista skills ativas
    skills = _list_active_skills()
    # hash do AGENTS.md
    agents_hash = _hash_agents_md()

    with get_conn() as conn:
        conn.execute(
            """INSERT INTO sessions
               (session_id, started_at, provider_used, skills_active, agents_md_hash)
               VALUES (?, ?, ?, ?, ?)""",
            (session_id, now, provider, json.dumps(skills), agents_hash),
        )

    STATE_FILE.write_text(session_id)
    print(f"✓ sessão iniciada: {session_id} ({now})")
    return session_id


def end_session():
    if not STATE_FILE.exists():
        print("⚠ nenhuma sessão ativa")
        return

    session_id = STATE_FILE.read_text().strip()
    now = datetime.now(timezone.utc).isoformat()

    with get_conn() as conn:
        conn.execute(
            "UPDATE sessions SET ended_at = ? WHERE session_id = ?",
            (now, session_id),
        )

    STATE_FILE.unlink()
    print(f"✓ sessão finalizada: {session_id}")


def set_quality_signal(signal: str):
    if signal not in ("good", "bad"):
        print(f"✗ sinal inválido: {signal}. Use 'good' ou 'bad'")
        sys.exit(1)

    if not STATE_FILE.exists():
        # busca sessão mais recente sem sinal
        with get_conn() as conn:
            row = conn.execute(
                """SELECT session_id FROM sessions
                   WHERE quality_signal IS NULL
                   ORDER BY started_at DESC LIMIT 1"""
            ).fetchone()
        if not row:
            print("⚠ nenhuma sessão sem sinal encontrada")
            return
        session_id = row["session_id"]
    else:
        session_id = STATE_FILE.read_text().strip()

    with get_conn() as conn:
        conn.execute(
            "UPDATE sessions SET quality_signal = ? WHERE session_id = ?",
            (signal, session_id),
        )

    icon = "✓" if signal == "good" else "✗"
    print(f"{icon} sessão {session_id} marcada como '{signal}'")


# ── Listagem e exportação ─────────────────────────────────────────────────────

def list_sessions(limit: int = 10):
    with get_conn() as conn:
        rows = conn.execute(
            """SELECT session_id, started_at, ended_at,
                      quality_signal, provider_used, skills_active
               FROM sessions
               ORDER BY started_at DESC
               LIMIT ?""",
            (limit,),
        ).fetchall()

    if not rows:
        print("nenhuma sessão encontrada")
        return

    print(f"{'ID':<10} {'início':<22} {'sinal':<6} {'provider':<8} skills")
    print("-" * 70)
    for r in rows:
        skills = json.loads(r["skills_active"] or "[]")
        skill_names = ", ".join(Path(s).stem for s in skills) or "—"
        signal = r["quality_signal"] or "?"
        provider = r["provider_used"] or "?"
        print(f"{r['session_id']:<10} {r['started_at'][:19]:<22} {signal:<6} {provider:<8} {skill_names}")


def export_good_sessions(output: str = "memory/trajectories.jsonl"):
    with get_conn() as conn:
        sessions = conn.execute(
            """SELECT s.*, GROUP_CONCAT(m.role || ':' || m.content, '|||') as messages_raw
               FROM sessions s
               LEFT JOIN messages m ON s.session_id = m.session_id
               WHERE s.quality_signal = 'good'
               GROUP BY s.session_id
               ORDER BY s.started_at DESC"""
        ).fetchall()

    if not sessions:
        print("nenhuma sessão 'good' para exportar")
        return

    Path(output).parent.mkdir(exist_ok=True)
    with open(output, "w") as f:
        for s in sessions:
            record = dict(s)
            # reconstrói mensagens
            if record.get("messages_raw"):
                msgs = []
                for m in record["messages_raw"].split("|||"):
                    if ":" in m:
                        role, content = m.split(":", 1)
                        msgs.append({"role": role, "content": content})
                record["messages"] = msgs
            del record["messages_raw"]
            f.write(json.dumps(record, ensure_ascii=False) + "\n")

    print(f"✓ {len(sessions)} sessões exportadas para {output}")


# ── Helpers ───────────────────────────────────────────────────────────────────

def _detect_provider() -> str:
    state_file = Path("scripts/.current-provider")
    if state_file.exists():
        return state_file.read_text().strip()
    return "unknown"


def _list_active_skills() -> list:
    skills_dir = Path("skills/active")
    if not skills_dir.exists():
        return []
    return [str(p) for p in skills_dir.glob("*.md")]


def _hash_agents_md() -> str:
    import hashlib
    agents = Path("AGENTS.md")
    if not agents.exists():
        return ""
    return hashlib.md5(agents.read_bytes()).hexdigest()[:8]


# ── CLI ───────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Loom trajectory recorder")
    parser.add_argument("--init", action="store_true", help="inicializa sessions.db")
    parser.add_argument("--start", action="store_true", help="inicia sessão")
    parser.add_argument("--end", action="store_true", help="finaliza sessão")
    parser.add_argument("--signal", choices=["good", "bad"], help="marca qualidade da sessão")
    parser.add_argument("--list", action="store_true", help="lista sessões recentes")
    parser.add_argument("--export", action="store_true", help="exporta sessões boas")
    parser.add_argument("--limit", type=int, default=10)
    args = parser.parse_args()

    if args.init:
        init_db()
    elif args.start:
        start_session()
    elif args.end:
        end_session()
    elif args.signal:
        set_quality_signal(args.signal)
    elif args.list:
        list_sessions(args.limit)
    elif args.export:
        export_good_sessions()
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
