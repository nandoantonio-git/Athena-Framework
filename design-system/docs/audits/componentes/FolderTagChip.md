# FolderTagChip — histórico de auditoria

Espelha o conteúdo removido de `stories/molecules/FolderTagChip.mdx` em 2026-08-16. Node Figma: `celule/chip/folder-tag`, `1421:19040`.

## Status

🔧 corrigido em auditoria Regra 11 (US-026) · ⚠️ gap aberto —
urgência média (comportamento pixel-a-pixel de `isExpanded` não
confirmado, ver `docs/conflicts.md`) — reconciliado em 2026-08-09 contra
`design-system/docs/figma-inventory.md` (achados críticos #5/#6, leitura
real via Figma MCP). Substitui a versão anterior desta página (🧩 Inferido,
escrita sem acesso ao Figma).

## Achado da auditoria Regra 11 (2026-08-11)

`get_design_context` não
retorna nenhuma borda em nenhum dos 4 estados — a borda
(`border-zinc-200`/`hover:border-zinc-300`/`data-[selected]:border-brand-teal`)
era um elemento inventado, removida. Cores trocadas pelos tokens
Figma-confirmados exatos: `Selected`/`Pressed` → `bg-brand-teal-light`
(`var(--brand-primary-light,#c8dce3)`) + `text-brand-teal-dark`
(`var(--brand-primary-dark,#1a5e6e)`), no lugar de `bg-brand-teal/10`/
`text-brand-teal` (`#007e96`, token errado). `Hover` agora muda o
`background` (`bg-zinc-200`) em vez da borda, batendo com o Figma (só
`background` varia entre estados, nunca borda).

## Achado novo, não corrigido (ambíguo)

No estado `Default`
(`isExpanded=false`), o export Figma mostra o chip sem o ícone de pasta
nem o rótulo visível (só um ícone utilitário à direita, sem nome
semântico) — bem diferente da composição usada em todos os estados da
implementação atual (ícone de pasta + rótulo sempre visíveis, variando só
o truncamento). Não alterado porque o significado exato do estado
"colapsado" não é claramente confirmável a partir do Figma sozinho (Regra
9) — mudar por inferência arriscaria uma UX pior (chip sem conteúdo
visível por padrão). Fica registrado para decisão humana.

## Reverificado em auditoria de ponto-fixo (3ª passada, 2026-08-12)

Novo
`get_design_context` no nó `1421:19040` retorna byte-a-byte o mesmo código
já documentado — no ramo `isDefaultAndNotIsExpanded` (`state="Default"`,
`isExpanded=false`), o texto "Pessoal" continua `opacity-0` e o ícone de
pasta (`Frame`/`isIsExpandedAndIsIdleOrHoverOrPressed`) continua com classe
condicional `opacity-0`, restando visível apenas o `AtomIconBase` à direita
— **o achado ainda reproduz exatamente**, confirmado com screenshot Storybook
fresco (`Default`/`Removable`/`Disabled`/`Expanded`/`Selected`, todos
mostrando ícone de pasta + rótulo sempre visíveis). Continua não resolvido
por decisão (ambíguo, Regra 9) — decisão humana pendente.

## Figma (Figma-confirmado)

`get_design_context` no nó `1421:19040` retorna descrição verbatim: *"Chip
de tag de pasta com estado expansível. Props: isExpanded (bool), State
(Default/Hover/Selected). Usa tokens Spacing/SM, Radius/Pill."*

## Gaps conhecidos (Regra 7) — reconciliados

1. **`opacity:0` residual — confirmado e localizado.** No estado
   `Default`/não-expandido, um texto **"Pessoal"** fica renderizado com
   `opacity:0` (leftover de edição, Figma-confirmado via `get_design_context`).
   **Não reproduzido** no componente abaixo — o chip não exibe nenhum texto
   oculto/residual. Gap de limpeza do arquivo fonte, logado em
   `docs/conflicts.md` (urgência baixa), não uma funcionalidade a implementar.
2. **Variante `isExpanded` — na verdade EXISTE no Figma.** Contrariando a
   suposição anterior desta página (herdada de `AGENTS.md` Regra 7, escrita
   sem acesso ao Figma), o componente Figma real **tem** a prop booleana
   `isExpanded`. Implementada abaixo como `isExpanded` — o comportamento
   visual exato de "expandido" não tem descrição própria além do booleano,
   então a implementação (remove truncamento do rótulo, mantém o botão de
   remover sempre visível) é 🧩 **inferida**, não Figma-confirmada em nível
   de pixel. Reconciliação registrada em `docs/conflicts.md`.
3. **Eixo `State=Selected` — novo, não estava em nenhuma versão anterior.**
   Figma-confirmado como parte do enum `State`. Implementado como prop
   `selected`; estilo visual (`border-brand-teal`/`bg-brand-teal/10`) é 🧩
   inferido — usa a cor de marca travada (Regra 3) como realce, não extraído
   variante-a-variante do Figma.

## Estados (Regra 8)

| Estado | Implementado | Fonte |
| --- | --- | --- |
| Default | ✅ `bg-zinc-100`, sem borda (corrigido) | ✅ Figma-confirmado (enum `State`) — aproximação Zinc de `neutral-surface-background` |
| Hover | ✅ `hover:bg-zinc-200` (corrigido de `hover:border-zinc-300`) | ✅ Figma-confirmado — aproximação Zinc de `neutral-surface-subtle` |
| Selected | ✅ prop `selected` → `data-[selected]:bg-brand-teal-light data-[selected]:text-brand-teal-dark` (corrigido, tokens exatos) | ✅ Figma-confirmado, hex exato (`#c8dce3`/`#1a5e6e`) |
| Active/Pressed | ✅ `motion-safe:active:scale-95` no botão de remover | 🧩 Inferido — mesmo padrão de feedback de `PushButton`, sem eixo próprio no Figma |
| Disabled | ✅ prop `disabled` → `data-[disabled]:opacity-50 data-[disabled]:pointer-events-none` | 🧩 Inferido — sem eixo `Disabled` confirmado neste componente |
| Loading | ❌ Não aplicável | Chip não representa uma operação assíncrona própria |
| Error | ❌ Não aplicável | Chip não valida input — não há estado de erro a comunicar |

## Fluid interface (Regra 8)

- **Feedback no press**: sim — o botão de remover aplica
  `active:scale-95` imediato ao `:active`.
- **Interruptibilidade**: sim, por construção — transições CSS nativas
  (`transition-colors`), revertem a partir do valor atual na tela.
- **Transições partem do valor atual**: sim, mesma razão acima.
- **reduced-motion**: 🧩 Inferido/implementado defensivamente —
  `motion-safe:active:scale-95` (o efeito de escala só é aplicado fora de
  `prefers-reduced-motion: reduce`), mesmo padrão de `PushButton`. **Não
  documentado no Figma** — nenhuma variável/nota de `reduced-motion`
  encontrada no nó consultado (Regra 8).

## Material Liquid Glass

Não aplicável — preenchimento sólido neutro, mesma base de `Tokens/Colors`,
sem uso do material "Liquid Glass". Não confirmado no Figma se alguma
variante do chip usa esse material; se confirmado futuramente, a spec deve
vir de `Tokens/Materials`, nunca reimplementada aqui (Regra 10).

## Terminologia

Rótulo de exemplo ("Contratos 2026") é um nome de pasta livre, não um termo
da lista travada — não se aplica a checagem de terminologia de UI aqui (o
componente exibe conteúdo do usuário, não texto fixo de produto).

## Tipografia (Regra 4)

Rótulo do chip usa `text-sm` (14px), acima do piso de exceção de 11px
definido para `Type/Tag` (corrigido de 8px para 11px em 2026-08-10, US-011 —
ver `stories/tokens/Typography.mdx`). Não precisou de alteração nesta US.

## Fidelidade code-level

Componente 100% reproduzível em código — ícones via `lucide-react`
(`FolderIcon`/`XIcon`), sem vetores customizados. Fallback de imagem
estática não se aplica.
