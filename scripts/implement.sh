#!/usr/bin/env bash
# implement.sh — execução imperativa de uma story via provider
# Chamado pelo ralph.sh com PROVIDER, PRD_PATH e REPO_PATH já setados.
set -euo pipefail

PRD="${PRD_PATH:-scripts/prd.json}"
REPO="${REPO_PATH:-/workspace}"
PROVIDER="${PROVIDER:-codex}"

cd "$REPO"

while true; do
  STORY_ID=$(python3 -c "
import json
with open('$PRD') as f:
    prd = json.load(f)
pending = [s for s in prd['userStories'] if not s.get('passes', False) and not s.get('skipped', False)]
print(pending[0]['id'] if pending else 'DONE')
")

  if [ "$STORY_ID" = "DONE" ]; then
    echo "Todas as stories implementadas!"
    break
  fi

  PROMPT=$(python3 -c "
import json
with open('$PRD') as f:
    prd = json.load(f)
s = next(s for s in prd['userStories'] if s['id'] == '$STORY_ID')
criteria = '\n'.join(f'- {c}' for c in s['acceptanceCriteria'])
notes = s.get('notes', '')
print(f\"Implemente a story {s['id']}: {s['title']}\n\nDescricao:\n{s['description']}\n\nCriterios de aceite:\n{criteria}\n\nNotas tecnicas:\n{notes}\n\nApos implementar, confirme cada criterio cumprido.\")
")

  echo "=========================================="
  echo "Implementando: $STORY_ID (provider: $PROVIDER)"
  echo "=========================================="

  OUTPUT_FILE="/tmp/last_message_${STORY_ID}.txt"

  case "$PROVIDER" in
    codex)
      echo "$PROMPT" | codex exec \
        -s danger-full-access \
        -m gpt-5.5 \
        -C "$REPO" \
        --output-last-message "$OUTPUT_FILE" \
        - 2>&1
      ;;
    gemini)
      gemini --yolo -p "$PROMPT" 2>&1 | tail -500 > "$OUTPUT_FILE" || true
      ;;
    claude)
      claude -p "$PROMPT" 2>&1 > "$OUTPUT_FILE" || true
      ;;
    *)
      echo "Provider desconhecido: $PROVIDER" >&2
      exit 1
      ;;
  esac

  echo ""
  echo "--- Output ---"
  cat "$OUTPUT_FILE" 2>/dev/null || echo "(sem output)"
  echo ""

  python3 -c "
import json
with open('$PRD') as f:
    prd = json.load(f)
for s in prd['userStories']:
    if s['id'] == '$STORY_ID':
        s['passes'] = True
with open('$PRD', 'w') as f:
    json.dump(prd, f, indent=2, ensure_ascii=False)
print('Marcado como completo: $STORY_ID')
"

  sleep 2
done
