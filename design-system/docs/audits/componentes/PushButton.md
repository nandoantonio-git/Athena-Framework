# PushButton — histórico de auditoria

Espelha o conteúdo removido de `stories/atoms/PushButton.mdx` em 2026-08-15. Node Figma: component set `atom/PushButton` (`1421:17302`, 738×743, 84 variantes).

## Status

✅ aligned (estrutura) · ⚠️ gap de engenharia aberto — urgência baixa (estados `Loading`/`Error` e eixo `Active Window` sem correspondência no Figma, ver seção "Estados" abaixo e `docs/conflicts.md`) — reconciliado em 2026-08-09 contra `design-system/docs/figma-inventory.md` (US-002, leitura real via Figma MCP). Substitui a versão anterior desta página, que era 100% inferida por falta de acesso ao Figma.

## Reverificado em 2026-08-12 (US-026, 3ª passada de auditoria de ponto-fixo)

`get_design_context` refeito do zero no component set completo (`1421:17302`); label do Figma segue literal `text-[10px]` em todas as variantes amostradas (não 14px como registrado antes), mas a decisão deliberada de subir para `text-base`/16px (piso de acessibilidade, Regra 4) permanece válida e intacta no código — sem regressão.

## Figma (Figma-confirmado)

Descrição verbatim: *"lista de botoes utilizaveis"*. Eixos de variante: `Style` × `On` × `State` × `Active Window` × `isIconOn` × `isDestructive`.

## Conflito de variantes (Regra 1) — resolvido: não é conflito

O `Style` de `atom/PushButton` inclui tratamentos internamente equivalentes a primary/secondary/destructive:

| `Style` | Descrição Figma verbatim | Fonte |
| --- | --- | --- |
| `Bordered Colored` | "botão padrão positivo/enfase" | ✅ Figma-confirmado |
| `Bordered Neutral` (`isDestructive=False`) | "botão padrão neutro" | ✅ Figma-confirmado |
| `Bordered Neutral` (`isDestructive=True`) | "Botao de funcao destrutiva" | ✅ Figma-confirmado · ✅ implementado 2026-08-10 (prop `isDestructive`) |
| `Borderless` / `Borderless (Bezel shows On)` / `Default` / `Bordered Secondary` / `Bordered Destructive` | sem descrição própria | 🧩 Inferido (nomes sugerem tratamentos borderless/base/secundário) |

Isso **não** é um CONFLICT: são todos props de variante de **um único** component set, não componentes `button/primary`/`secondary`/`destructive` separados — exatamente o que a Regra 1 exige estruturalmente (achado #12, `figma-inventory.md`).

**Atualizado na US-006**: o eixo `Style` ganhou a prop `variant` — `"primary"` (`Bordered Colored`, default) e `"neutral"` (`Bordered Neutral`, ex.: "Cancelar"). Motivo: os organisms desta US (modais reais de Guardar/Arquivar/Organizar — `DialogSave/OrganizationModal`, `Dialog/TemplateReviewModal`, `Save/LongTermFileStorage`, `ArchiveBrowserModal`, `cleanSpaceStorage`, `OrganizePanel/DropZone`) confirmam repetidamente o par "Cancelar" (`Bordered Neutral`) + "Continuar" (`Bordered Colored`) no rodapé — reimplementar esse par ad-hoc em cada organism violaria o critério de reuso (Regra 10). `Bordered Destructive`/`Borderless` (como valores próprios de `Style`) seguem não implementados — sem uso repetido confirmado que justifique o mesmo tratamento ainda.

**Atualizado em 2026-08-10**: o eixo `isDestructive` (booleano, combinado Figma-confirmado com `Style=Bordered Neutral`, descrição verbatim "Botao de funcao destrutiva") ganhou a prop `isDestructive`. Motivo: o botão "Liberar Espaço" (decisão humana de terminologia, ver `docs/conflicts.md` e Regra 5) é uma ação de impacto — liberar/remover dados guardados — e o Figma já discrimina essa função dentro do MESMO `atom/PushButton`, não como componente separado. Tratamento visual exato (tom de vermelho) não extraído pixel-a-pixel do Figma para essa combinação específica — 🧩 inferido a partir do token `destructive` já usado no projeto (`aria-invalid`). Antes de aplicar em `StorageSidebar`/`CleanSpaceStorage`, confirmar via Figma se a instância real desses botões usa `isDestructive=True` — não presumir.

Também confirmados: 5 outros átomos de ícone-botão com destino de clique independente do PushButton (achado #11) — `atom/DeleteButton`, `atom/PlusButton`, `atom/ActionButton/Confirm` (`ConfirmButton`), `atom/ClearButton`, `atom/KeepButton`. Documentados nesta mesma US, ver páginas próprias em `Atoms/`. Nenhum tem chrome de botão como o PushButton — não fragmentam a Regra 1, são peças de ação distintas.

## Estados — checklist Figma-vs-implementado

| Estado | Implementado | Fonte |
| --- | --- | --- |
| Default (`Idle`) | ✅ `bg-brand-teal` | ✅ Figma-confirmado (enum `State`) + 🔒 cor travada (Regra 3, ver ⚠️ conflict de valor em `Tokens/Colors`) |
| Hover | ✅ `hover:bg-brand-teal/90` | ✅ Figma-confirmado como estado existente; tom exato de hover não extraído variante-a-variante — 🧩 inferido |
| Active/Pressed (`Clicked`) | ✅ `active:bg-brand-teal/80` + `active:scale-[0.98]` | ✅ Figma-confirmado como estado existente; valores exatos 🧩 inferidos |
| Disabled | ✅ `disabled:opacity-50 disabled:pointer-events-none` | ✅ Figma-confirmado como estado existente; tratamento visual 🧩 inferido (convenção shadcn) |
| Loading | ✅ prop `loading`, spinner (`Loader2`) + `aria-busy` | ⚠️ **Gap** — não existe no enum `State` do Figma (só Idle/Hover/Clicked/Disabled, achado do inventário). Mantido como extensão de engenharia (necessidade real de produto para ações assíncronas como "Guardar"), nunca apresentado como Figma-confirmado |
| Error | ✅ via `aria-invalid` (`border-destructive` + `ring-destructive/20`) | ⚠️ **Gap** — mesma ressalva de Loading, extensão de engenharia sobre convenção já usada em `components/ui/button.tsx` |

Eixo `Active Window` (True/False, Figma-confirmado) sugere depender de foco de janela (padrão desktop/macOS) — **não implementado** (não confirmado como aplicável a uma app web; gap, ver `docs/conflicts.md`).

## Fluid interface (Regra 8)

- **Feedback no press**: sim — `active:scale-[0.98]` reduz a escala do botão no `:active`, imediato à interação do ponteiro.
- **Interruptibilidade**: sim, por construção — é uma transição CSS (`transition-all`) reagindo a pseudo-classe em tempo real; se o usuário soltar o botão antes da transição terminar, o navegador reverte a partir do valor atual na tela, não do início.
- **Transições partem do valor atual**: sim, mesma razão acima (CSS transitions nativas, não uma animação por keyframes com estado próprio).
- **reduced-motion**: `motion-safe:active:scale-[0.98]` (o efeito de escala só é aplicado fora de `prefers-reduced-motion: reduce`). **Não documentado no Figma** — nenhuma variável/nota de `reduced-motion` encontrada nos nós consultados (Regra 8); este é um fallback de boa prática, não uma confirmação de que a página Figma especifica esse comportamento.

## Material Liquid Glass

Não aplicável — `PushButton` usa preenchimento sólido (`cor/marca/primária/teal-base`), não o material "Liquid Glass". Nenhuma das 84 variantes confirmadas usa esse material.

## Terminologia — correção US-026 pass12

Labels de exemplo usam **"Guardar"**/**"Arquivar"** e o estado destrutivo usa **"Excluir"** (rótulo Figma-confirmado em `organism/cleanSpaceStorage` para ação destrutiva). Nenhum termo proibido (`freezer`, `congelado`, `frio`, `camada`, `elegível`, `Limpar Espaço`, `CTA`) aparece como texto visível. **Corrigido na US-026 pass12:** a story destrutiva do átomo usava "Liberar Espaço" fora dos contextos em que a Regra 5 aprova esse termo (Armazenamento/Config. de Plano); o exemplo genérico agora usa "Excluir".

## Tipografia (Regra 4) — correção de acessibilidade em 2026-08-10 (US-011)

O label do botão usa `text-base` (16px), **não** `Type/Button/MD` no valor Figma-confirmado (14px, `Tokens/Typography`). Sob a política de exceção de 16px definida em 2026-08-10, rótulo de botão é texto de ação primária, não microtexto decorativo — não se qualifica para a exceção, então a implementação sobe deliberadamente para o piso obrigatório em vez de seguir o valor Figma literal. Ver `stories/tokens/Typography.mdx` e `docs/conflicts.md` para o histórico da decisão. Sem impacto de layout observado no botão default (`h-10`, `px-4`) — folga suficiente para o tamanho maior de fonte.

**Gap conhecido, não resolvido nesta US:** vários organisms (`StorageSidebar`, `ArchiveBrowserModal`, `CleanSpaceStorage`, `OrganizePanelDropZone`, `OrganizeFreeModeCanvas`, `DialogSaveOrganizationModal`, `DialogTemplateReviewModal`, `SaveLongTermFileStorage`) instanciam `PushButton` em contextos compactos (`h-8`) e sobrescrevem o tamanho do label via `className` para `text-xs` (12px), reintroduzindo abaixo do átomo uma violação real da Regra 4 nesses rótulos de ação (Cancelar/Continuar/Excluir/etc.). Não corrigido nesta US porque cada um desses layouts foi reconciliado individualmente contra seu próprio nó Figma em USs anteriores (US-006/US-010) — subir o texto para 16px pode quebrar a largura/altura compacta pretendida em cada um, exigindo reconciliação Figma caso a caso, não uma troca cega de classe em 8 arquivos. Logado como novo achado em `docs/conflicts.md` (urgência alta) para decisão/priorização futura.

## Fidelidade code-level

Componente 100% reproduzível em código — sem vetores customizados ou efeito node-canvas. Fallback de imagem estática (critério de peças não reproduzíveis) não se aplica aqui.
