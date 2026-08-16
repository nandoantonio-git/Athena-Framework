# InfoPopover — histórico de auditoria

Espelha o conteúdo removido de `stories/organisms/InfoPopover.mdx` em 2026-08-16. Node Figma: `1421:18504`.

## Status

🔧 corrigido em 2026-08-11 (auditoria fixed-point, Regra 11) — Figma-confirmado, nó `1421:18504`, descrição verbatim: *"Popover de informação, aparece ao usuário ficar com o mouse em cima de X por determinado tempo."* Duas variantes Figma-confirmadas (`content=Metadata`|`StorageInfo`), campos literais: "Criado", "Modificado", "Dimensões", "Etiquetas" / "AL: Armazenamento de longo prazo", "AC: Armazenamento corrente" (nesta ordem — Figma-confirmado).

A auditoria anterior nunca tinha rodado o protocolo real (Regra 11) neste componente — 4 achados corrigidos nesta US: (1) fundo era um retângulo sólido com borda, faltava o shape de "balão de fala" (rabicho + material Liquid Glass) confirmado no Figma como asset SVG próprio, agora usado via `src/assets/illustrations/info-popover-{metadata,storage}-bg.svg`; (2) faltavam as 2 linhas divisórias entre Criado/Modificado/Dimensões; (3) texto em `text-xs`/`text-sm` (12/14px) em vez do `Type/Body/XS` real (10px, `text-[0.625rem]`); (4) variante `storage-info` tinha a ordem AC/AL invertida e um valor dinâmico inventado (`— {label}`) anexado a cada linha, sem correspondência no Figma — removido, a variante agora só renderiza os 2 rótulos estáticos confirmados.

Re-verificado em 2026-08-12 (US-026, 3ª passada de ponto-fixo): `get_design_context` refeito do zero + screenshot Playwright fresco — os 4 achados acima conferidos um a um: balão com rabicho presente, 2 divisórias presentes, texto a 10px (`text-[0.625rem]`) em todo o conteúdo, ordem AL→AC correta e sem valor inventado. Também reconfirmado: copy literal "Hoje,15:00" (sem espaço, story `Metadata`) e "Etiquetar..." (Figma confirma esse texto sempre presente, não é lista dinâmica de tags) batem exatamente com o nó. Nenhuma regressão, nenhuma divergência nova.

## Composição

Peça isolada — não compõe outros atoms/molecules documentados.

## Conflito de variantes (Regra 1)

Não aplicável — sem botão de ação.

## Estados e fluid interface (Regra 8)

Aparece "ao usuário ficar com o mouse em cima por determinado tempo" (Figma-confirmado) — comportamento de hover-delay não implementado nesta story (é conteúdo estático posicionado via `role="tooltip"`; o trigger de hover/delay é responsabilidade do componente pai que o invoca, fora do escopo desta peça). **reduced-motion**: não documentado no Figma; sem animação própria nesta implementação.

## Material Liquid Glass

Usa o material Liquid Glass (Regra 10) — fundo `white/70%` + duas sombras (`Effect/Shadow`), exportado como asset real do Figma (shape de balão de fala com rabicho), não reimplementado isoladamente. Ver `Tokens/Materials`.

## Terminologia

"AC"/"AL" são abreviações Figma-confirmadas, não presentes na lista aprovada nem na proibida da Regra 5 — abreviações internas de rótulo, não prosa de produto.
