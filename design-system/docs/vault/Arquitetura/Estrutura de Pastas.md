---
tags: [arquitetura]
---

# Estrutura de Pastas

```text
Athena-Framework/                    # raiz — scaffold Ralph Loop
├── AGENTS.md                        # constituição do agente
├── scripts/prd.json                 # backlog — ver [[Backlog (User Stories)]]
├── scripts/gate.sh                  # validação
├── skills/, memory/, loops/         # skill learning do Ralph
│
└── design-system/                   # kandrive-design-system — o projeto real
    ├── package.json, tsconfig.json, vite.config.ts
    ├── .storybook/
    │   ├── main.ts                  # config, staticDirs, managerHead
    │   ├── manager.ts                # tema da casca do Storybook (marca Kandrive)
    │   └── preview.tsx               # tema dos docs, imports globais
    ├── vercel.json                  # buildCommand/outputDirectory
    │
    ├── src/components/
    │   ├── atoms/                   # 29 componentes
    │   ├── celules/                 # 10 — camada real entre atom e molecule
    │   ├── molecules/               # 22
    │   ├── organisms/               # 23
    │   ├── tokens/                  # ColorSwatch/ColorPalette (paleta visual)
    │   └── ui/                      # primitivos shadcn (não usados diretamente pelo produto)
    │
    ├── stories/
    │   ├── atoms/, celules/, molecules/, organisms/   # 1 .stories.tsx + 1 .mdx por componente
    │   └── tokens/                  # Colors.mdx, Typography.mdx, Spacing.mdx, Materials.mdx, unused.mdx
    │
    ├── src/assets/
    │   ├── icons/                   # SVGs reais exportados do Figma
    │   ├── logo/                    # kandrive-logo.svg (lockup), kandrive-mark.svg (selo)
    │   └── illustrations/           # SVGs compostos (ex. select-state-check.svg)
    │
    ├── public/
    │   ├── favicon.svg              # selo Kandrive (não o raio padrão do Vite)
    │   └── kandrive-logo.svg, kandrive-mark.svg   # servidos via staticDirs pro Storybook
    │
    └── docs/
        ├── figma-inventory.md       # inventário da página Figma
        ├── conflicts.md             # log de conflitos Figma × regras travadas
        ├── checkpoints.md           # checkpoint por camada/passada de auditoria
        ├── terminology-audit.md
        ├── audits/                  # relatórios datados (US-026, pass1…pass20)
        └── vault/                   # este vault do Obsidian
```

## Convenção de nome de arquivo

`kebab-case` pro código-fonte (`push-button.tsx`), `PascalCase` pras stories/docs (`PushButton.stories.tsx`, `PushButton.mdx`) — espelhando 1:1 o nome do componente.

## `celules` não é typo

É uma camada real e intencional entre atoms e molecules — nome vem literalmente do Figma (`celule/...`), não uma categoria inventada. Ver [[Camadas Atômicas]].

## Ver também

- [[Stack Técnica]]
- [[Camadas Atômicas]]
