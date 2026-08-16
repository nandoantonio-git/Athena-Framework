# FirstUploadSymbol — histórico de auditoria

Espelha o conteúdo removido de `stories/atoms/FirstUploadSymbol.mdx` em 2026-08-15. Node Figma: `1454:20974`.

## Status

✅ aligned (estrutura) — Figma-confirmado (US-013, releitura pontual de 2026-08-10). Descrição verbatim: "símbolo de upload para o kickoff inicial do usuário na plataforma."

## Corrigido em auditoria US-026 (2026-08-11)

O glifo estava a `size-16` (64px, 24% do diâmetro) — `get_design_context` confirma `aspect-[12/12] left-[33.9%] right-[34.27%]`, ou seja ~85px (32% do diâmetro de 267px). Corrigido para `size-[85px]`.

## Reverificado na 3ª passada de auditoria de ponto-fixo (US-026, 2026-08-12)

Node re-lido do zero via `get_design_context` (obrigatório por ter sido editado pelo usuário no Figma em 2026-08-10) — descrição verbatim e composição permanecem idênticas ao já documentado; nenhuma divergência nova.

## Fidelidade code-level (gap documentado, Regra 8/9)

O círculo de fundo é exportado pelo Figma como asset de imagem, não como forma vetorial com cor/gradiente inline. A implementação reproduz a estrutura confirmada no screenshot Figma e na releitura US-026 pass13. O asset exato segue documentado como gap de fidelidade pixel-a-pixel por não estar incorporado ao código como imagem exportada.
