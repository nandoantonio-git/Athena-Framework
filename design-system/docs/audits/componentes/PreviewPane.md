# PreviewPane — histórico de auditoria

Espelha o conteúdo removido de `stories/organisms/PreviewPane.mdx` em 2026-08-16. Node Figma: `1421:19405`.

## Status

🔧 corrigido em 2026-08-13 (US-026, pass12). Figma-confirmado, nó `1421:19405`, descrição verbatim: *"Painel de visualização dos detalhes dos arquivos, apenas disponível no formato de visualização em coluna."* Campos do grid de metadados ("Proprietário", "Criado", "Formato", "Tamanho", "Localização") e botões ("Salvar", "Compartilhar") Figma-confirmados literalmente. `molecule/thumbnail-large` re-verificado: continua corretamente consumido (não regrediu para placeholder).

Correção pass12: releitura fresca confirmou que a pílula neutra da seção "Etiquetas" é literalmente "Recentes" e que os ícones de fechar, salvar e compartilhar vêm dos assets Figma `clear`, `bookmark_border` e `atom/Icon/Share`. A story usava "Global" e ícones `lucide-react`; corrigido para os literais/assets Figma-confirmados já presentes no repositório.

## 2 correções nesta 3ª passada (checklist elemento-a-elemento contra `get_design_context` fresco no nó `1421:19405`)

1. **Linha "Formato" invertida**: a nota anterior desta página (US-013) afirmava que `FileTypeLabel` (ponto colorido + texto) pertencia à linha "Formato" do grid de metadados. Releitura real mostra o oposto — a linha "Formato" no Figma é texto puro (`text-[13px]`, mesmo tratamento das linhas "Proprietário"/"Criado"/"Tamanho", sem ponto/badge). `FileTypeLabel` removido dessa linha; agora é `{file.format}` puro.
2. **Seção "Etiquetas" sem diferenciação de estilo**: o Figma real tem 2 instâncias de `atom/badge/TypeLabel` na seção "Etiquetas" — uma pílula neutra (`Type=Tag_Global,Style=Neutral`, borda + fundo cinza claro) e uma pílula vermelha preenchida (`Type=Tag,Style=Alert`, rótulo "Urgente", token `--brand-feedback-danger-default` `#bc3426`, mesmo do `DangerTypeLabel` já existente no design system mas nunca antes usado aqui). A implementação anterior renderizava todas as tags com o mesmo chip neutro cinza, perdendo a distinção visual. Corrigido: prop `tags` agora aceita `string | { label: string; danger?: boolean }`; tags `danger` usam `DangerTypeLabel` (pílula vermelha preenchida), as demais usam a pílula neutra (com borda adicionada para bater mais perto do Figma). Story `Default` atualizada para `tags: ["Recentes", { label: "Urgente", danger: true }]`, reproduzindo literalmente as 2 instâncias do nó real.

**Tensão com a Regra 8 do protocolo de auditoria** ("danger = `#bc3426` texto-only, nunca fundo vermelho preenchido"): o Figma real desta seção usa fundo vermelho preenchido para o badge "Urgente" — mesma tensão já existente para `DangerTypeLabel`/`atom/PushButton isDestructive` (construído em US anterior citando o Figma como fonte), não resolvida aqui (Regra 9 — implementado literal ao que o Figma mostra, ambiguidade fica para decisão humana).

## Composição (Regra 10)

`molecule/thumbnail-large` (`1421:19570`, descrição: *"thumbnail/pre-visualização do arquivo selecionado no painel detalhes"*) — corrigido em US-026: era representado por um placeholder textual (`Pré-visualização`) mesmo depois de o molecule real já estar implementado com assets exportados nó-a-nó (`ThumbnailLarge`, ver `Molecules/ThumbnailLarge.mdx`); `PreviewPane` agora consome o componente de verdade em vez de duplicar um placeholder genérico, mapeando `file.format` para o eixo `fileType` (`image`|`document`) do molecule.

Correção da 3ª passada (US-026) substitui a nota de US-013 abaixo, mantida como histórico: US-013 tinha promovido `FileTypeLabel` para a linha "Formato" — na verdade invertido, ver "Status" acima. `FileTypeLabel` não é usado neste organism (seu vocabulário fixo por tipo de arquivo `Image`/`Documentos`/`Videos`/`Outros` não serve às tags livres de "Etiquetas", e a linha "Formato" é texto puro no Figma). A seção "Etiquetas" usa `DangerTypeLabel` (variante `danger`) + pílula neutra inline, ver "Status" acima.

## Conflito de variantes (Regra 1)

"Salvar"/"Compartilhar" são botões simples (`<button>`), não `atom/PushButton` — no Figma ambos usam o mesmo tratamento visual secundário (`Icon`+label, sem chrome preenchido), diferente do `PushButton` padrão; implementados como elementos próprios para preservar esse tratamento sem forçar um terceiro `variant` no `PushButton` sem uso repetido confirmado em outro organism (critério usado para adicionar `variant="neutral"`, ver `PushButton.mdx`). Nenhum `button/primary`|`secondary`|`destructive` como componente separado.

## Estados e fluid interface (Regra 8)

| Estado | Implementado |
| --- | --- |
| Default | ✅ |
| Sem tags | ✅ seção "Etiquetas" omitida quando `tags=[]` |
| Disabled/Loading/Error | Não documentado no Figma |

**reduced-motion**: não documentado no Figma; sem animação própria.

## Material Liquid Glass

Container usa `bg-effect-glass-white-70` — ver `Tokens/Materials` (Regra 10).

## Terminologia

Nenhum termo proibido; "Urgente" é conteúdo de exemplo de tag, não texto fixo de produto.
