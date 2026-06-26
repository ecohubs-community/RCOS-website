---
id: d7a1f3e8
title: Tipo de Decisão Indefinido
summary: Quando o grupo discute o que decidir antes de combinar como decidir.
parentId: 7f25f268
order: 3
severity: medium
stage:
  - forming
  - growth
  - mature
layers:
  - 2
invariants:
  - '2.1'
  - '2.2'
remediationReady: true
tags:
  - 'Layer 2: Governance'
  - Medium severity
symptoms:
  - >-
    As discussões empacam porque ninguém combinou se isso é um consenso, uma
    votação ou uma decisão delegada.
  - >-
    A mesma decisão é reaberta porque nunca ficou claro que ela tinha sido
    realmente decidida.
  - 'Quem enquadra a pergunta primeiro controla, na prática, o resultado.'
  - >-
    "Espera, a gente está decidindo isso agora, e quem decide?" é uma confusão
    recorrente.
  - >-
    As regras de decisão mudam implicitamente dependendo do tema ou de quem está
    na sala.
preventsWith:
  - rcos-templates/layer-2/decision-matrix
  - rcos-templates/layer-2/governance-protocol
cascade:
  - test: rcos-stress-tests/governance-power/dominant-speakers-decision-spaces
    relation: enables
    note: >-
      Sem um mecanismo combinado, tempo de fala e enquadramento decidem os
      resultados por padrão.
  - test: rcos-stress-tests/governance-power/informal-clique-decision-making
    relation: enables
    note: >-
      Tipo de decisão indefinido deixa os resultados derivarem para quem
      enquadrou a pergunta primeiro.
related:
  - rcos-stress-tests/governance-power/dominant-speakers-decision-spaces
lang: pt-br
sourceHash: c8cfa224
---

> **Severidade:** Média — raramente é dramática, mas torna toda decisão contestável e lenta.
> **Onde dói:** Em qualquer estágio; é um peso silencioso num grupo que de resto funciona bem.
> **Já está vivendo isso?** Pule para [Se já está acontecendo](#if-its-already-happening).

### Soa familiar?

Surge uma pergunta e o grupo mergulha direto nela — opiniões, argumentos, uma longa discussão. Uma hora depois, não está claro se alguma coisa foi de fato decidida, quem tinha autoridade para decidir, ou se um silencioso "bom, acho que vamos fazer assim" conta como definitivo. No mês seguinte, o mesmo assunto reaparece como se a primeira conversa nunca tivesse acontecido. O problema nunca foi o *conteúdo*. É que ninguém combinou, antes de começar, que *tipo* de decisão era essa e como ela seria resolvida.

### Sinais de que isso está acontecendo com você

- As discussões empacam porque ninguém combinou se isso é um consenso, uma votação ou uma decisão delegada.
- A mesma decisão é reaberta porque nunca ficou claro que ela tinha sido realmente decidida.
- Quem enquadra a pergunta primeiro controla, na prática, o resultado.
- "Espera, a gente está decidindo isso agora, e quem decide?" é uma confusão recorrente.
- As regras de decisão mudam implicitamente dependendo do tema ou de quem está na sala.

**Isso _não_ é o mesmo que** usar deliberadamente mecanismos diferentes para classes diferentes de decisão — isso é saudável, *se for declarado*. O sintoma é que o *tipo* da decisão — quem decide, por qual mecanismo e se é definitiva — fica indefinido no momento de decidir, então é improvisado toda vez.

### Por que acontece

Os grupos pulam direto para o conteúdo ("o que a gente deveria fazer com X?") sem antes resolver o tipo ("isso é nosso para decidir, por qual regra, e é definitivo?"). Pular essa etapa significa que o enquadramento mais alto vence, as decisões parecem ilegítimas para quem não compartilhou aquele enquadramento e tudo continua passível de ser rediscutido — porque nada nunca foi formalmente *uma decisão* para começar.

<details data-kind="rationale">
<summary>O teste de estresse formal (para auditores)</summary>

**Modo de falha** — Decisões são debatidas sem antes acordar seu tipo e mecanismo.

**Camadas envolvidas** — Camada 2 (Governança)

**Invariantes relevantes**

* 2.1 O tipo de decisão precede o conteúdo da decisão
* 2.2 A autoridade DEVE ser explícita

**Condição de teste** — Decisões são tomadas sem um tipo declarado, então o mecanismo e a autoridade são improvisados toda vez.

**Comportamento RCOS esperado** — O tipo de cada decisão (mecanismo + autoridade + caráter definitivo) é definido antes de seu conteúdo ser debatido.

**Critério de aprovação** — As decisões nomeiam seu tipo de antemão e não são silenciosamente reabertas.

**Critério de reprovação** — O tipo de decisão é improvisado, então o enquadramento determina o resultado.

</details>

### Quão madura é sua comunidade nisso?

Aprovado/reprovado é grosseiro demais para a vida real — a maioria das comunidades está em algum lugar no meio. Encontre seu degrau e mire no próximo.

| Nível | Como se parece |
|---|---|
| **L0 — Implícito** | O tipo de decisão é improvisado toda vez; o enquadramento decide o resultado. |
| **L1 — Nomeado** | O grupo percebe a confusão, mas ainda não mapeou os tipos de decisão para mecanismos. |
| **L2 — Documentado** | Uma [Matriz de Decisão](/articles/rcos-templates/layer-2/decision-matrix) atribui a cada classe de decisão um tipo, um mecanismo e quem decide — resolvido antes do conteúdo. |
| **L3 — Aplicado e ensaiado** | Toda decisão significativa nomeia seu tipo de antemão; as decisões são definitivas e não são silenciosamente reabertas. |

A maioria das comunidades que se reconhece aqui está em **L0 ou L1**. O objetivo não é perfeição — é subir um degrau.

### Como o RCOS previne isso

O RCOS força o tipo antes do conteúdo:

- **[Matriz de Decisão](/articles/rcos-templates/layer-2/decision-matrix)** — mapeie classes de decisão para seu mecanismo e autoridade, de modo que o tipo seja pré-decidido.
- **[Protocolo de Governança](/articles/rcos-templates/layer-2/governance-protocol)** — torne "nomear o tipo de decisão primeiro" uma regra permanente de como o grupo funciona.

Veja também a especificação: [Camada 2 — Tipos de Decisão](/articles/rcos-core/v0-1/layer-2-governance-decision-logic#41-decision-types) e [Matriz de Decisão](/articles/rcos-core/v0-1/layer-2-governance-decision-logic#44-decision-matrix).

### Se já está acontecendo

Se as decisões continuam se dissolvendo e se reformando, resolva o tipo primeiro:

1. **Antes da próxima decisão contestada, combine seu tipo** — quem decide, por qual regra e se é definitiva.
2. **Monte uma matriz de decisão rápida a partir de decisões recentes reais;** as ambíguas aparecem rápido.
3. **Pare de rediscutir** — registre as decisões com seu tipo, para que "a gente já decidiu isso" seja verificável.

### O que essa falha tende a desencadear

- **[Falantes Dominantes em Espaços de Decisão](/articles/rcos-stress-tests/governance-power/dominant-speakers-decision-spaces)** — sem um mecanismo combinado, tempo de fala e enquadramento decidem os resultados.
- **[Tomada de Decisão por Panelinha Informal](/articles/rcos-stress-tests/governance-power/informal-clique-decision-making)** — tipo indefinido deixa as decisões derivarem para quem as enquadrou primeiro.

### Testes de estresse relacionados

- **[Falantes Dominantes em Espaços de Decisão](/articles/rcos-stress-tests/governance-power/dominant-speakers-decision-spaces)** — o mesmo mecanismo ausente, expresso como quem-fala-mais em vez de quem-enquadra-primeiro.
