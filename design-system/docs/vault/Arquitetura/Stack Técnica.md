---
tags: [arquitetura]
---

# Stack Técnica

O `design-system/` é um app Node autocontido (próprio `package.json`, independente da raiz do [[Athena Framework]]).

| Camada | Tecnologia |
| --- | --- |
| UI | React 19 + TypeScript |
| Estilo | Tailwind CSS v4 + shadcn/ui (Radix primitives + CVA) |
| Documentação | Storybook 10 (CSF3 + MDX) |
| Build | Vite 8 |
| Deploy | Vercel, build estático — ver [[Deploy (Vercel)]] |
| Fonte | Figtree (variable), via `@fontsource-variable/figtree` |
| Ícones | SVGs reais exportados do Figma (`atom/Icon`), não `lucide-react` como padrão — ver [[Regra 9 - Figma-confirmado vs Inferido]] |

## Comandos

Todos rodam de dentro de `design-system/`:

```bash
npm install
npm run dev              # Vite dev server
npm run storybook        # Storybook em localhost:6006 (ou porta configurada)
npx tsc --noEmit         # typecheck — gate primário
npm run build-storybook  # build estático em storybook-static/ — também faz parte do gate
npm run lint             # oxlint
npm run build            # tsc -b && vite build
```

## Não confundir com o scaffold da raiz

A raiz do Athena Framework tem seu próprio `requirements.txt`/Python — **não é usado por este projeto**. Todo o trabalho real é TypeScript dentro de `design-system/`.

## Ver também

- [[Estrutura de Pastas]]
- [[Camadas Atômicas]]
