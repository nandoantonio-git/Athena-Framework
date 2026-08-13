# Kandrive Design System

Documentação Storybook local do Kandrive Design System (Kandrive = SaaS de
armazenamento frio/longo-prazo sobre AWS S3 Glacier). Stack: React +
TypeScript + Tailwind CSS v4 + shadcn/ui (Radix + CVA).

## Desenvolvimento

```bash
npm install
npm run storybook       # Storybook em http://localhost:6006
```

## Verificação

```bash
npx tsc --noEmit         # typecheck
npm run build-storybook  # build estático (storybook-static/)
```

## Estrutura

- `stories/atoms`, `stories/molecules`, `stories/organisms` — stories CSF3 +
  MDX por componente, organizadas por camada atômica.
- `stories/tokens` — documentação MDX dos tokens de design (cor, tipografia,
  espaçamento, material).
- `docs/figma-inventory.md` — inventário da página Figma "✏️Design Pattern"
  (US-002). **Pendente**: nunca foi gerado por falta de `fileKey`/URL do
  arquivo Figma — ver bloqueio de urgência alta em `docs/conflicts.md`.
- `docs/conflicts.md` — log de conflitos entre o Figma e as decisões de
  design já travadas.
- `docs/checkpoints.md` — checkpoint por camada atômica documentada.
- `docs/terminology-audit.md` — auditoria final de terminologia de UI
  (US-007).

## Deploy (Vercel)

O `vercel.json` já aponta o build para o Storybook estático:

```json
{
  "buildCommand": "npm run build-storybook",
  "outputDirectory": "storybook-static"
}
```

Basta importar este diretório (`design-system/`) como root do projeto na
Vercel — nenhuma configuração adicional é necessária.
