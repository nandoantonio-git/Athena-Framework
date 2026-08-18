# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

**Athena Framework** — a reusable scaffold for autonomous LLM-driven development ("Ralph loop"). Infra lives in `scripts/`, `skills/`, `memory/`, `loops/`, `AGENTS.md`. `src/`, `data/`, `models/`, `notebooks/` are an unused generic Python/ML scaffold, not part of any active project.

This repo currently has **no active project wired up**. It previously hosted `kandrive-design-system` as `design-system/` — a self-contained Node/React app documenting the Storybook design system for Kandrive (cold/long-term storage SaaS on AWS S3 Glacier). That project was extracted into its own repository on 2026-08-18 (`git subtree`-style history split, full commit history preserved) at **https://github.com/nandoantonio-git/kandrive-design-system** — go there for that codebase, its `AGENTS.md`-equivalent domain rules, and Storybook docs. Nothing under this repo root should reference `design-system/` anymore; if you find a stale reference, it's leftover from before the split.

To start a new project with this scaffold, regenerate `AGENTS.md` via `init.sh` (see root `README.md`) rather than reusing the old kandrive-specific one — that file described a project that no longer lives here.

## Ralph loop mechanics (repo root)

`bash scripts/ralph.sh` drives autonomous implementation: reads `scripts/prd.json`, takes the first user story with `passes: false`, builds a prompt from `AGENTS.md`, delegates to an LLM provider (`scripts/implement.sh`), then runs `scripts/gate.sh`. On success the story flips to `passes: true` and the loop advances.

- Provider fallback order: Codex → Gemini → Claude (`scripts/.current-provider` tracks the active one). A story failing `MAX_ATTEMPTS_PER_STORY` (default 5) consecutive times is marked `passes: true, skipped: true` and the loop moves on (circuit breaker).
- `scripts/prd.json` is the backlog; edit via the `/ralph` skill (converts a PRD into this format) rather than by hand when generating new stories. Every story's acceptance criteria must end with `"Typecheck passes"`.
- Gate type is pinned in `scripts/.gate-config` (auto-detected by file extension when unset — see `scripts/gate.sh`); `bash scripts/gate.sh <file_or_dir>` runs it manually. The kandrive-era gate ran `tsc --noEmit` + `npm run build-storybook` from a `design-system/` subfolder — that's project-specific config that no longer applies here; a new project should set its own gate.
- Skill learning loop: `memory/recorder.py` records session trajectories → `loops/distill.sh` distills 3+ good sessions into a candidate skill under `skills/pending/` → human review promotes it to `skills/active/` (auto-injected into every session) or discards it. `loops/compact.sh` regenerates a leaner `AGENTS.md` when it grows past `WORD_THRESHOLD` words.
- Progress/state: `jq '.userStories[] | {id, title, passes}' scripts/prd.json`, `tail -f scripts/run.log`, `scripts/audit/` (per-story implementation reports).

Full mechanics, env vars, and directory layout are documented in the root `README.md` — read it for anything not covered above.
