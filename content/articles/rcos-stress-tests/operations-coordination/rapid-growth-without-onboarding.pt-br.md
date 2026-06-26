---
id: 9d3e6a24
title: Crescimento Rápido sem Integração
summary: >-
  Quando a comunidade cresce mais rápido do que consegue integrar qualquer
  pessoa.
parentId: a9e4c65d
order: 2
severity: high
stage:
  - growth
layers:
  - 1
  - 5
invariants:
  - '1.1'
  - '5.2'
remediationReady: true
tags:
  - 'Camada 1: Membresia'
  - Severidade alta
symptoms:
  - A comunidade está crescendo mais rápido do que consegue integrar pessoas.
  - >-
    Novos membros ganham acesso e direitos sem um processo de entrada claro ou
    período probatório.
  - >-
    Os recém-chegados não conhecem as normas, a história ou como as decisões são
    tomadas — e não é tarefa de ninguém ensiná-los.
  - '"Quem de fato decidiu deixá-los entrar?" é difícil de responder.'
  - >-
    A cultura parece estar se diluindo ou se fragmentando à medida que os
    números aumentam.
preventsWith:
  - rcos-templates/layer-1/onboarding-protocol
  - rcos-templates/layer-1/membership-agreement
  - rcos-templates/layer-1/membership-state-registry
cascade:
  - test: rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test
    relation: enables
    note: >-
      Recém-chegados que nunca aprenderam as normas colidem com elas,
      desencadeando uma aplicação improvisada.
  - test: >-
      rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
    relation: feeds
    note: 'No caos da integração, algumas poucas pessoas seguram tudo informalmente.'
related:
  - >-
    rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution
lang: pt-br
sourceHash: 465078de
---

> **Severidade:** Alta — dilui cultura e governança silenciosamente, por acúmulo e não por decisão.
> **Onde aperta:** Na fase de crescimento, especialmente após uma onda de interesse ou atenção.
> **Já vivendo isso?** Pule para [Se já está acontecendo](#if-its-already-happening).

### Soa familiar?

O interesse está bombando. As pessoas querem entrar, e dizer sim parece maravilhoso — parece que tudo está funcionando. Novos rostos chegam, recebem chaves, logins e direito a voto, e entram no chat. Mas não existe um processo real de entrada, nenhum período probatório, ninguém cuja tarefa seja conduzi-los pela história, pelas normas, pela forma como as decisões realmente são tomadas. Um ano depois, a comunidade está com o dobro do tamanho e, de algum modo, menos ela mesma: a cultura compartilhada se afinou, e ninguém consegue dizer exatamente quando isso aconteceu.

### Sinais de que isso está acontecendo com você

- A comunidade está crescendo mais rápido do que consegue integrar pessoas.
- Novos membros ganham acesso e direitos sem um processo de entrada claro ou período probatório.
- Os recém-chegados não conhecem as normas, a história ou como as decisões são tomadas — e não é tarefa de ninguém ensiná-los.
- "Quem de fato decidiu deixá-los entrar?" é difícil de responder.
- A cultura parece estar se diluindo ou se fragmentando à medida que os números aumentam.

**Isso _não_ é o mesmo que** um crescimento rápido intencional e bem provido de recursos, com um pipeline real de integração. O sinal é *direitos sem processo* — as pessoas viram membros simplesmente aparecendo, e a integração fica por conta do acaso.

### Por que acontece

O crescimento parece sucesso, então as comunidades dizem sim mais rápido do que conseguem absorver. Sem um processo formal de entrada, a membresia se torna implícita — ninguém consegue dizer exatamente quem está dentro nem por quê — e sem integração, o conhecimento operacional e cultural nunca é transmitido. O resultado é uma diluição silenciosa: governança e cultura se desgastam não por nenhuma decisão, mas pelo acúmulo constante de membros não integrados.

<details data-kind="rationale">
<summary>O teste de estresse formal (para auditores)</summary>

**Modo de Falha** — Novos membros entram sem integração ou período probatório.

**Camadas Envolvidas** — Camada 1 (Membresia), Camada 5 (Operações)

**Invariantes Relevantes**

* 1.1 Nenhuma membresia implícita
* 5.2 O conhecimento operacional é documentado

**Condição do Teste** — Membros ganham direitos sem um processo formal de entrada.

**Comportamento Esperado do RCOS** — Integração e período probatório obrigatórios são aplicados.

**Critério de Aprovação** — O status de membresia é explícito em todos os momentos.

**Critério de Reprovação** — Cultura e governança se diluem silenciosamente.

</details>

### Quão madura é a sua comunidade nisso?

Aprovado/reprovado é grosseiro demais para a vida real — a maioria das comunidades está em algum ponto intermediário. Encontre o seu degrau e mire o próximo.

| Nível | Como se parece |
|---|---|
| **L0 — Implícito** | As pessoas viram membros simplesmente aparecendo; nenhum processo de entrada, nenhuma integração. |
| **L1 — Nomeado** | O grupo percebe a diluição, mas ainda não construiu um pipeline de entrada / período probatório. |
| **L2 — Documentado** | Um processo definido de [integração e período probatório](/articles/rcos-templates/layer-1/onboarding-protocol) controla o acesso à membresia; os estados são acompanhados em um [registro](/articles/rcos-templates/layer-1/membership-state-registry). |
| **L3 — Aplicado e ensaiado** | O status de membresia é explícito em todos os momentos; cada recém-chegado passa pela integração; a taxa de crescimento é compatível com a capacidade de integração. |

A maioria das comunidades que se reconhece aqui está em **L0 ou L1**. O objetivo não é a perfeição — é subir um degrau.

### Como o RCOS previne isso

O RCOS faz com que os direitos sigam a integração, não a chegada:

- **[Protocolo de Integração](/articles/rcos-templates/layer-1/onboarding-protocol)** — um caminho obrigatório de entrada e período probatório para que cultura e conhecimento realmente sejam transmitidos.
- **[Acordo de Membresia](/articles/rcos-templates/layer-1/membership-agreement)** — torne os termos da membresia explícitos na entrada.
- **[Registro de Estados de Membresia](/articles/rcos-templates/layer-1/membership-state-registry)** — sempre saiba quem está em período de teste, é membro pleno ou já saiu.

Veja também a especificação: [Camada 1 — Entrada e Integração](/articles/rcos-core/v0-1/layer-1-membership-system#32-entry-and-onboarding) e [Estados de Membresia](/articles/rcos-core/v0-1/layer-1-membership-system#31-membership-states).

### Se já está acontecendo

Se o crescimento já ultrapassou a integração, freie a entrada e faça a reposição retroativa:

1. **Pause ou desacelere a entrada** até que exista um caminho de integração — o limite real é a capacidade de integração, não o entusiasmo.
2. **Defina os estados de membresia agora** e coloque cada pessoa em um deles; a ambiguidade é a falha central.
3. **Faça integração retroativa para quem entrou recentemente** — transmita as normas e o conhecimento operacional que perderam.
4. **Fique de olho na cascata** — crescimento não integrado gera choques de normas não declaradas e lacunas de poder invisível.

### O que essa falha tende a desencadear

- **[Teste de Escopo de Violação de Norma Cultural](/articles/rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test)** — recém-chegados que nunca aprenderam as normas colidem com elas.
- **[Poder Invisível via Responsabilidades](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — no caos, algumas poucas pessoas seguram tudo informalmente.

### Testes de estresse relacionados

- **[Autossuficiência sem Contribuição Coletiva](/articles/rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution)** — membros não integrados nunca aprendem que o comum é deles para cuidar.
