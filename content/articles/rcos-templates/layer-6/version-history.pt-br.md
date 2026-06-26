---
id: 4c8e6d5b
title: Histórico de Versões
parentId: e676f693
order: 1
lang: pt-br
sourceHash: abe5a1e4
---

- **Camada:** 6 — Evolução e Adaptação
- **Status:** Modelo — adapte para sua comunidade; atualizado a cada mudança adotada
- **Referência RCOS:** [§8.2](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#82-versioning-and-authority), [§8.6](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#86-artifacts)

> O registro autoritativo legível por humanos de todas as mudanças adotadas na implementação RCOS da sua comunidade. A versão atualmente ativa é a entrada mais recente no topo deste arquivo. Regras substituídas permanecem acessíveis via controle de versão.

---

## Formato da Entrada

*Cláusulas RCOS: [8.2.1](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#82-versioning-and-authority), [8.2.2](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#82-versioning-and-authority), [8.2.3](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#82-versioning-and-authority), [8.2.4](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#82-versioning-and-authority), [8.2.5](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#82-versioning-and-authority), [8.6.4](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#86-artifacts), [8.7.2](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#87-layer-invariants)*

<details data-kind="rationale">
<summary>Por que registrar cada mudança adotada?</summary>

Uma governança que não consegue apontar "o que mudou, quando e por quê" é indistinguível de uma governança ditada por quem fala mais alto. Um único livro-razão apenas-acréscimo de mudanças adotadas — com as versões substituídas preservadas no controle de versão — torna o estado atual das regras inequívoco e dá aos membros, auditores e futuros administradores uma forma de reconstruir o caminho que nos trouxe até aqui.

</details>

<details data-kind="instructions">
<summary>Como preencher isto</summary>

Use o modelo de entrada abaixo para cada mudança adotada. Novas entradas são adicionadas acima da mais recente. Não edite entradas históricas — correções são registradas como novas entradas.

</details>

```markdown
## <versão> — <Título curto>

- **Data de vigência:** <AAAA-MM-DD>
- **Registro de decisão:** <link para o registro de decisão>
- **Tipo de decisão:** <Operacional / Estratégica / Constitucional>
- **Mecanismo:** <mecanismo de votação / autoridade delegada>
- **Resumo:** <uma a três sentenças descrevendo o que mudou.>
- **Camadas afetadas:** <ex.: Camada 2, Camada 5>
- **Artefatos alterados:** <lista de artefatos>
- **Notas de migração:** <quaisquer regras de transição; "nenhuma" se não aplicável>
```

---

## Versão Atual: v0.0 — Repositório Inicializado

- **Data de vigência:** <AAAA-MM-DD>
- **Registro de decisão:** N/A — estrutura inicial
- **Tipo de decisão:** N/A
- **Mecanismo:** N/A
- **Resumo:** Modelos inicializados. Todos os artefatos são modelos — nenhuma regra foi adotada ainda.
- **Camadas afetadas:** Todas (apenas estrutura inicial)
- **Artefatos alterados:** Todos os arquivos criados como modelos
- **Notas de migração:** Nenhuma — estado inicial

---

_Novas entradas são adicionadas acima desta linha._
