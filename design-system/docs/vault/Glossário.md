---
tags: [referência]
---

# Glossário

Terminologia do domínio Kandrive — ver [[Regra 5 - Terminologia]] pra regra completa e contexto de cada termo.

## Aprovados

| Termo | Onde usar |
| --- | --- |
| Acesso rápido | Categoria de armazenamento de curto prazo |
| Longo prazo | Categoria de armazenamento arquivado |
| Guardar | Ação **específica** de mover arquivos pro longo prazo. Ex.: "Guardar é a ação de mover um arquivo do acesso rápido para o longo prazo." (FAQ real, `faq-info-card-collapsed.tsx`) |
| Arquivar | Pattern **geral** de organização/agrupamento de arquivos — processo mais amplo, do qual "Guardar" é uma ação específica. **Nunca sinônimo de "Guardar"** — ver [[Regra 5 - Terminologia]] |
| Pronto para guardar | Status de arquivo elegível pra arquivamento |
| Ver duplicados | Ação de detecção de duplicados |
| Gerir Espaço | Termo aprovado **só na [[Sidebar]]** |
| Liberar Espaço | Termo aprovado **só em Armazenamento/Config. de Plano** |
| Comprar Espaço | Botão de upgrade de plano, `organism/storage-sidebar` (Figma-confirmado, node `1421:19167`) |

## Proibidos como texto visível

`freezer` · `congelado` · `frio` · `camada` (rótulo de UI) · `elegível` (rótulo de UI) · `Limpar Espaço` · `CTA`

## Domínio do produto

**Kandrive** — SaaS de armazenamento frio/longo-prazo sobre AWS S3 Glacier.

**Modo Livre** — fluxo de organização por canvas interativo (nós arrastáveis de filtro/operação/resultado). Ver [[OrganizeFreeModeCanvas]].

**Template de organização** — regras salvas que definem como arquivos são organizados automaticamente (Cronológico/Por projeto/Por tipo/Modo livre).

**Ponto-fixo (fixed-point)** — protocolo de auditoria que repete até uma passada inteira não achar nenhuma divergência nova. Ver [[Regra 11 - Protocolo de Verificação]].

## Ver também

- [[Regra 5 - Terminologia]]
- [[Kandrive Design System]]
