# ActionPill — histórico de auditoria

Espelha o conteúdo removido de `stories/molecules/ActionPill.mdx` em 2026-08-16. Node Figma: `molecule/action-pill`, `1421:19027`.

## Status

🆕 undocumented-until-now — não existia código nem story antes desta US. Listado no inventário real (`docs/figma-inventory.md`, elementos soltos no canvas) com descrição Figma verbatim coletada nesta US.

## Reverificado em auditoria de ponto-fixo (12ª passada, 2026-08-13)

`get_design_context` fresco no nó `1421:19027` + screenshot Storybook comparados elemento-a-elemento. Os 3 ícones (Help/"?", Settings/gear, SpatialAudioOff/conta), fundo Liquid Glass e estado `Disabled` (opacity-50) permanecem alinhados. Achado material desta retomada: o Figma fixa o container em 104px, mas a implementação ainda usava `w-fit` e media 116px no iframe Playwright. Corrigido para `w-[104px]`, mantendo o grupo de ícones centralizado.

## Figma (Figma-confirmado)

`get_design_context` no nó `1421:19027` retorna descrição verbatim:
*"pilula de botoes de ação principais, presente no header"*. Eixo de
variante confirmado: `state` (`Default`\|`Disabled`).

> ⚠️ **Corrigido em 2026-08-11 após achado do usuário — auditoria anterior
> não seguia a Regra 11.** A leitura de US-005 (abaixo, riscada) tratou os 3
> slots de ícone como "artefato de export" (2× Settings duplicado) e reduziu
> a demo pra 2 ícones — sem nunca comparar contra um screenshot renderizado.
> Repetindo `get_design_context` com `skillNames=figma-design-to-code` +
> conferindo o screenshot Figma elemento-a-elemento (protocolo Regra 11):
> os 3 ícones são **distintos e reais**, só com nomes de layer enganosos
> (drift comum de instância trocada sem renomear): um ícone "?" (ajuda/help,
> layer nomeado `atom/Icon/Settings` mas o path é um círculo de ajuda — novo
> glifo `Help`, extraído via `download_assets` e normalizado em
> `src/assets/icons/Help.svg`), o gear real (`atom/Icon/Settings`, path
> correto) e um ícone de conta/pessoa (layer nomeado `atom/Icon/SpatialAudioOff`
> mas o path já cadastrado em `src/assets/icons/SpatialAudioOff.svg` desenha
> uma silhueta de conta — reaproveitado, sem necessidade de novo asset). A
> demo agora usa os 3: Help + Settings + SpatialAudioOff(conta).
>
> ~~O export retornou 3 slots de ícone (2× `atom/Icon/Settings` + 1×
> `atom/Icon/SpatialAudioOff`, um deles aninhado de forma incomum dentro de
> outro grupo) — 🧩 inferido como artefato de export (provável instância
> duplicada/aninhada, não 3 ações distintas confirmadas por nome). Em vez de
> fixar esse conjunto exato como fato (violaria a Regra 9), o componente
> implementado expõe uma API genérica `actions: { name, label, onClick }[]`
> reutilizando `atom/Icon` — a Storybook demo usa 2 ações (Settings +
> SpatialAudioOff), removendo a duplicata aparente.~~

A API continua genérica (`actions: { name, label, onClick }[]`, reutilizando
`atom/Icon`) — só a composição-exemplo da story mudou para bater com o
Figma real.

## Material Liquid Glass

Fundo usa duas camadas confirmadas via `get_design_context`/`get_variable_defs`:
`var(--effect-glass-white-70)` (`#ffffffb2`, "Fill + Shadow") sobreposta por
`var(--effect-glass-surface-light)` (`#fafafa99`, "Glass Effect") — ambas
Figma-confirmadas em `stories/tokens/Materials.mdx`. `backdrop-blur-md` é 🧩
inferido como aproximação do parâmetro nativo `GLASS`/frost do Figma — spec
completa não reimplementada aqui (Regra 10).

## Estados (Regra 8)

| Estado | Implementado | Fonte |
| --- | --- | --- |
| Default | ✅ | ✅ Figma-confirmado (enum `state`) |
| Disabled | ✅ prop `disabled` → `data-[disabled]:opacity-50 data-[disabled]:pointer-events-none` | ✅ Figma-confirmado como variante existente (`h-[36px] opacity-50` no export) |
| Hover | ✅ `hover:text-brand-teal` por botão | 🧩 Inferido — sem eixo `Hover` próprio confirmado neste component set |
| Focus | ✅ `focus-visible:ring-3 focus-visible:ring-brand-teal/50` | 🧩 Inferido — convenção do design system, não extraída do Figma |
| Loading/Error | ❌ Não aplicável | Pílula de navegação/ação direta, sem operação assíncrona nem validação própria |

## Fluid interface (Regra 8)

- **Feedback no press**: parcial — troca de cor do ícone no `:hover`/`:focus-visible`;
  não há feedback de `:active` distinto confirmado no Figma nem implementado
  (gap, não inventado).
- **reduced-motion**: **não documentado no Figma** — nenhuma variável
  encontrada no nó consultado (Regra 8); a única transição é de cor, não
  afetada por `prefers-reduced-motion`.

## Terminologia

Não renderiza texto próprio — `label` de cada ação é `aria-label` apenas
(acessibilidade), não texto visível. Sem termo da lista travada aplicável.

## Fidelidade code-level

Ícones via `atom/Icon` (já documentado). Sem vetor customizado próprio.
Fallback de imagem estática não se aplica.
