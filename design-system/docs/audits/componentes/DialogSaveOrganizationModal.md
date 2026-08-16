# DialogSaveOrganizationModal — histórico de auditoria

Espelha o conteúdo removido de `stories/organisms/DialogSaveOrganizationModal.mdx` em 2026-08-16. Node Figma: `1421:18576`.

## Status

✅ aligned — Figma-confirmado, nó `1421:18576`, descrição verbatim: *"Utilize para selecionar o formato do template de organização ao clicar o card desejado."* Título "Escolher método de organização" e subtítulo Figma-confirmados literalmente. Os 4 cards (`molecule/template-card`, `1421:19695`, descrição: *"Cards de seleção do formato de template de organização"*) usam eyebrows/títulos/descrições Figma-confirmados literalmente: DATA/Cronológico, PROJETO/Por projeto, TIPO/Por tipo de arquivo, MODO LIVRE/Modo livre. Re-verificado 2026-08-12 (passe 3, ponto-fixo): moldura tracejada do card "Modo livre" confirmada presente e correta (só ao redor do ícone, `size-24 border-2 border-dashed`, não do card inteiro — nunca foi essa a leitura do nó); nenhuma divergência nova encontrada.

## Corrigido em 2026-08-11 (Regra 11, auditoria US-026)

Releitura de `get_design_context` no nó `1421:18576` encontrou 2 divergências reais de texto e um erro de alinhamento não pegos pela auditoria anterior — (1) a descrição do card "Cronológico" estava incorreta/trocada ("Bom para entender o que ocupa espaço.", cópia do card "Por tipo de arquivo") em vez do texto Figma-confirmado "Ideal para memórias antigas e acervo histórico."; (2) a descrição do card "Por tipo de arquivo" estava truncada (faltava a segunda frase Figma-confirmada "Bom para entender o que ocupa espaço."); (3) título/descrição de todos os 4 cards usavam `text-center`, mas o nó Figma confirma alinhamento à esquerda (`items-start` nos containers de texto) — só o eyebrow (badge DATA/PROJETO/etc.) é centralizado. Os 3 pontos corrigidos em `dialog-save-organization-modal.tsx`.

## Composição (Regra 10)

`atom/PushButton` — "Cancelar" (`variant="neutral"`) / "Continuar" (`variant="primary"`), reaproveitado de `Atoms/PushButton`. Cards são renderizados diretamente (lista fixa Figma-confirmada); `molecule/template-card` não foi promovido a componente próprio nesta US por só aparecer nesta composição — reavaliar se reaparecer em outro organism.

## Conflito de variantes (Regra 1)

Verificado: "Cancelar"/"Continuar" usam a mesma prop `variant` do `PushButton` (Style=Bordered Neutral/Colored do Figma) — nenhum `button/primary`|`secondary`|`destructive` separado. Este modal pertence ao fluxo ao vivo "Organização" (referenciado nas telas `Organização` do Figma, seção Pages) — verificado sem termo proibido.

## Estados e fluid interface (Regra 8)

| Estado | Implementado |
| --- | --- |
| Default/Selected | ✅ prop `selected` + `aria-pressed`, destaque `border-brand-teal` |
| Hover | ✅ `hover:border-brand-teal` nos cards |
| Disabled/Loading/Error | Não aplicável a esta tela — seleção síncrona |

**reduced-motion**: não documentado no Figma; `transition-colors` nativo nos cards (interruptível por construção).

## Material Liquid Glass

O container do modal usa `bg-effect-glass-white-70` + `backdrop-blur-md` — ver `Tokens/Materials` (Regra 10), confirmado no código-fonte do nó (`Glass Effect` layer com `effect-glass-white-70`).

## Terminologia

Nenhum termo proibido (Regra 5) encontrado nos 4 cards, título, subtítulo ou botões.
