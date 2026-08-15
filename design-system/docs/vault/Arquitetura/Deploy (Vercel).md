---
tags: [arquitetura]
---

# Deploy (Vercel)

O Storybook é publicado como **build estático** no Vercel.

```json
// design-system/vercel.json
{
  "buildCommand": "npm run build-storybook",
  "outputDirectory": "storybook-static"
}
```

## Projeto

- Nome: `kandrive-design-system`
- Escopo: `fernando-antonios-projects` (conta pessoal)
- Repositório GitHub: `nandoantonio-git/Athena-Framework` — **monorepo**, então o deploy via GitHub precisa de **Root Directory = `design-system`** nas configurações do projeto Vercel.

## Dois caminhos de deploy

1. **CLI (`vercel --prod`)** — sobe o estado atual do disco, funciona sem commit. Sujeito à cota de upload da conta free (`api-upload-free`, ~5000 requests/dia) — com muitos arquivos pequenos (ícones SVG, .mdx) essa cota estoura rápido se a CLI reenviar tudo em retries.
2. **Integração GitHub (dashboard)** — importar o repo em vercel.com/new, apontar Root Directory pra `design-system`, e todo push no `main` dispara deploy sozinho. Não esbarra na cota de upload da CLI, mas só reflete o que está **commitado e empurrado**.

## Status conhecido

Na sessão de 2026-08-15, o deploy via CLI bateu no limite de cota (`Too many requests - try again in 24 hours`) depois do projeto já ter sido criado/linkado (`vercel link`). Ver [[Sessão 2026-08-15]] pro estado exato de onde isso ficou.
