# IconBase — histórico de auditoria

Espelha o conteúdo removido de `stories/atoms/IconBase.mdx` em 2026-08-15. Node Figma: `1421:17820`.

## Reverificado na 3ª passada de auditoria de ponto-fixo (US-026, 2026-08-12)

Protocolo completo da Regra 11 reaplicado do zero — nenhuma divergência nova além do já corrigido em 2026-08-11.

## Corrigido em auditoria US-026 (2026-08-11)

Releitura via `get_design_context` no nó `1421:17820` mostrou descrição Figma verbatim **diferente** da documentada antes: *"icone utilizado para expandir e colapsar a sidebar"* (não "usado como sub-componente de `celule/chip/folder-tag`", leitura anterior desatualizada/incorreta). O componente também não renderizava o glifo real — a story usava um ícone `lucide-react` (`FolderIcon`) arbitrário como default, e o átomo exigia a prop `icon` sem fallback. Corrigido: `icon-base.tsx` agora tem o vetor real exportado do Figma como default; a prop `icon` continua opcional para reuso em outros contextos.

## Estados — detalhe Figma

`state` Figma-confirmado: `Idle`|`Default` — nenhuma descrição encontrada distinguindo os dois nomes (gap, Regra 9), tratados como o mesmo repouso visual.

## Fluid interface (Regra 8)

Só troca de cor via `transition-colors` no eixo `isHoverOn`. Interruptível por construção (CSS nativo). Nenhuma nota de `reduced-motion` no Figma.

## Reuso recomendado (decisão em aberto, fora do escopo original)

`molecule/chip-folder-tag` usa `FolderIcon`/`XIcon` diretamente, sem passar por `IconBase` — como o glifo Figma-confirmado deste átomo é o ícone de sidebar (não um glifo de pasta), a ideia original de "trocar a referência do chip para `IconBase`" não se aplica mais do jeito que estava documentado. Fica como decisão em aberto se o chip deve continuar com ícones próprios ou se `IconBase` deveria virar um wrapper puramente estrutural (sem glifo fixo) para casos assim.

## Fidelidade code-level

Glifo próprio (`src/assets/icons/IconBaseGlyph.svg`) exportado do Figma via `download_assets` — reproduz o vetor real, não uma aproximação por nome/significado.
