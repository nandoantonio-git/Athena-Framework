# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

Two things layered together:

1. **Athena Framework** (repo root) — a reusable scaffold for autonomous LLM-driven development ("Ralph loop"). Infra lives in `scripts/`, `skills/`, `memory/`, `loops/`, `AGENTS.md`. Do not touch `src/`, `data/`, `models/`, `notebooks/` — these are an unused generic Python/ML scaffold, not part of the active project.
2. **kandrive-design-system** (`design-system/`) — the actual project being built by the framework: a self-contained Node/React app documenting the Storybook design system for Kandrive, a cold/long-term storage SaaS built on AWS S3 Glacier. This is where nearly all real work happens.

`AGENTS.md` at the repo root is the generated "constitution" for the design-system project — domain rules, locked design decisions, Figma source-of-truth data, and terminology rules (written in Portuguese, the project's working language). **Read `AGENTS.md` before making any design-system change** — it is authoritative over anything inferred from code, and violations must be logged to `design-system/docs/conflicts.md` rather than resolved unilaterally.

## Commands

All design-system commands run from `design-system/` (it has its own `package.json`, independent of the repo root):

```bash
cd design-system
npm install
npm run dev              # Vite dev server
npm run storybook        # Storybook at http://localhost:6006
npx tsc --noEmit         # typecheck (primary gate)
npm run build-storybook  # static build to storybook-static/ (also part of the gate)
npm run lint             # oxlint
npm run build             # tsc -b && vite build
```

The project-wide validation gate (`scripts/gate.sh`, invoked by the Ralph loop) runs, for TypeScript targets:
```bash
(cd design-system && npx tsc --noEmit)
(cd design-system && npm run build-storybook)
```
Gate type is pinned in `scripts/.gate-config` (currently `typescript`); `bash scripts/gate.sh <file_or_dir>` runs it manually.

There is no separate unit test runner wired into the gate — `@storybook/addon-vitest`/Playwright are present as devDependencies but validation currently relies on typecheck + Storybook build succeeding, plus the Figma-vs-screenshot verification protocol below.

## Ralph loop mechanics (repo root)

`bash scripts/ralph.sh` drives autonomous implementation: reads `scripts/prd.json`, takes the first user story with `passes: false`, builds a prompt from `AGENTS.md`, delegates to an LLM provider (`scripts/implement.sh`), then runs `scripts/gate.sh`. On success the story flips to `passes: true` and the loop advances.

- Provider fallback order: Codex → Gemini → Claude (`scripts/.current-provider` tracks the active one). A story failing `MAX_ATTEMPTS_PER_STORY` (default 5) consecutive times is marked `passes: true, skipped: true` and the loop moves on (circuit breaker).
- `scripts/prd.json` is the backlog; edit via the `/ralph` skill (converts a PRD into this format) rather than by hand when generating new stories. Every story's acceptance criteria must end with `"Typecheck passes"`.
- Skill learning loop: `memory/recorder.py` records session trajectories → `loops/distill.sh` distills 3+ good sessions into a candidate skill under `skills/pending/` → human review promotes it to `skills/active/` (auto-injected into every session) or discards it. `loops/compact.sh` regenerates a leaner `AGENTS.md` when it grows past `WORD_THRESHOLD` words.
- Progress/state: `jq '.userStories[] | {id, title, passes}' scripts/prd.json`, `tail -f scripts/run.log`, `scripts/audit/` (per-story implementation reports).

Full mechanics, env vars, and directory layout are documented in the root `README.md` — read it for anything not covered above.

## design-system architecture

Stack: React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui (Radix primitives + CVA), Storybook 10 (CSF3 + MDX), Vite 8. Deployed to Vercel as a static Storybook build (`vercel.json`: `build-storybook` → `storybook-static/`).

- `src/components/{atoms,celules,molecules,organisms,ui}/` — component implementations, kebab-case filenames. `celules` is a real, intentional layer between atoms and molecules (not a typo, not folded into either) — see `AGENTS.md`.
- `stories/{atoms,celules,molecules,organisms}/` — one `.stories.tsx` (CSF3) + one `.mdx` per component, mirroring `src/components/`. `stories/tokens/` holds MDX-only design token docs (`Colors`, `Typography`, `Spacing`, `Materials`, `unused`).
- `docs/` — living project docs: `figma-inventory.md` (Figma page inventory), `conflicts.md` (Figma-vs-locked-decision conflict log), `checkpoints.md` (per-layer checkpoints), `terminology-audit.md`, `audits/` (dated audit reports — check for the most recent one before starting new work; a later audit can invalidate an earlier "clean" verdict).

### Mandatory verification protocol before marking any component verified/aligned (AGENTS.md Regra 11)

This exists because a shallow audit previously let real bugs (invented buttons/bars, wrong icons, wrong colors) ship. Before marking a component done:
1. Call Figma `get_design_context` on the component's real node — never rely solely on `get_metadata` or a prior/stale read.
2. Take a real rendered screenshot via Playwright (`http://localhost:6006/iframe.html?id=<story-id>&viewMode=story`) — never assume correctness from reading code.
3. Enumerate every visible element from the Figma response (icons, text, color, spacing, background, borders) and check each one individually against the rendered screenshot — not a holistic "looks right" pass.
4. Never invent an element (button, progress bar, text, icon) not confirmed in Figma. If not clearly confirmable, mark it 🧩 *Inferido* (inferred) or omit it.

Always distinguish "Figma-confirmado" from "inferido" in docs; never present an inference as fact.

### Locked design decisions (see AGENTS.md for full text and update history — these change; AGENTS.md is the source of truth)

- Single button component: `atom/PushButton`. No `button/primary`/`secondary`/`destructive` variants — flag any as a CONFLICT rather than implementing.
- Color tokens: semantic names only (`cor/categoria/papel/valor-semântico`), never implementation-leaking names.
- Brand colors are Figma-sourced and have changed from earlier values — check `AGENTS.md` Regra 3 for current hex values before hardcoding any brand/danger color.
- Typography: Figtree, Major Third (1.25) scale; 16px floor for reading/primary-action text (body, button/input labels, links); sub-16px only for genuinely decorative/secondary microtext (badge, tag, caption, timestamp), never below ~11px, always in `rem`.
- Terminology is context-sensitive and partly forbidden: e.g. "Liberar Espaço" is approved only on Storage/Plan-settings pages; the Sidebar must use "Gerir Espaço" for the same concept. "Limpar Espaço", "freezer", "congelado", "frio", "camada", "elegível", "CTA" are forbidden as visible UI text. Check `AGENTS.md` Regra 5 before writing any user-facing copy.
- The "Liquid Glass" material is a single spec documented in `stories/tokens/Materials.mdx`; components using it reference that doc rather than reimplementing the spec locally.

Any Figma finding that contradicts a locked decision is a **conflict to log in `docs/conflicts.md`**, not something to silently resolve by picking one side.
