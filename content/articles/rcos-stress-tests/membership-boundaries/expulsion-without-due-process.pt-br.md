---
id: a1d4e7c2
title: Expulsão Sem Devido Processo
summary: 'Quando um membro pode ser expulso sem processo, sem recurso e sem registro.'
parentId: 45625035
order: 1
severity: high
stage:
  - growth
  - mature
layers:
  - 1
  - 4
invariants:
  - '1.4'
  - '1.2'
  - '4.3'
remediationReady: true
tags:
  - 'Camada 1: Membresia'
  - Severidade alta
symptoms:
  - Um membro foi removido (ou pressionado a sair) sem nenhum processo definido.
  - >-
    A remoção aconteceu por consenso informal, uma votação súbita ou pressão
    social — não por um procedimento escrito.
  - 'Não houve oportunidade de resposta, nem fundamentos declarados, nem recurso.'
  - >-
    As pessoas não têm certeza de quem realmente tem autoridade para expulsar
    alguém.
  - >-
    Depois que aconteceu, outras pessoas silenciosamente se perguntaram se
    poderiam ser as próximas.
preventsWith:
  - rcos-templates/layer-1/exit-protocol
  - rcos-templates/layer-4/accountability-protocol
  - rcos-templates/layer-1/membership-state-registry
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: enables
    note: >-
      Quando a remoção não tem devido processo, os membros aprendem que
      discordar é perigoso e param de levantar questões.
related:
  - rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test
  - rcos-stress-tests/conflict-accountability/punishment-before-repair
lang: pt-br
sourceHash: 23ab475a
---

> **Severidade:** Alta — uma das formas mais comuns pelas quais comunidades se fraturam, e a mais difícil de reparar depois que acontece.
> **Onde aperta:** Estágios de crescimento e maturidade, quando aparece o primeiro membro genuinamente difícil.
> **Já está vivendo isso?** Pule para [Se já está acontecendo](#if-its-already-happening).

### Soa familiar?

Alguém se tornou um problema real — disruptivo, prejudicial, impossível — e, no fim, foi embora. Não por meio de nenhum procedimento, porque não havia um: aconteceu por uma reunião tensa, uma votação súbita de mãos levantadas, ou um lento congelamento social até que a pessoa saiu por conta própria. Talvez tenha sido até o desfecho certo. Mas não havia acusação declarada, nem chance de resposta, nem recurso — e silenciosamente, todos que assistiram arquivaram o conhecimento de que a comunidade pode fazer uma pessoa desaparecer, e não há regras sobre quando.

### Sinais de que isso está acontecendo com você

- Um membro foi removido (ou pressionado a sair) sem nenhum processo definido.
- A remoção aconteceu por consenso informal, uma votação súbita ou pressão social.
- Não houve oportunidade de resposta, nem fundamentos declarados, nem recurso.
- As pessoas não têm certeza de quem realmente tem autoridade para expulsar alguém.
- Depois que aconteceu, outras pessoas silenciosamente se perguntaram se poderiam ser as próximas.

**Isso _não_ é o mesmo que** aplicar um processo documentado de saída forçada — com fundamentos, uma audiência e um recurso — a uma situação genuinamente intolerável. O sinal revelador é *remoção sem nenhum devido processo predefinido*: o desfecho vem primeiro, e a justificativa vem depois, se vier.

### Por que acontece

Comunidades evitam construir procedimentos de expulsão porque esperam nunca precisar deles — planejar para isso parece mórbido, até mesmo desleal. Então, quando um membro finalmente se torna intolerável, o grupo improvisa sob estresse: pressão, uma votação apressada, um congelamento silencioso. Sem devido processo, a expulsão se torna arbitrária e geradora de medo, e a linha entre "tivemos que" e "quisemos" desaparece — para a pessoa removida e para todos que estão assistindo.

<details data-kind="rationale">
<summary>O teste de estresse formal (para auditores)</summary>

**Modo de Falha** — Um membro é removido sem um processo predefinido e documentado.

**Camadas Envolvidas** — Camada 1 (Membresia), Camada 4 (Conflito)

**Invariantes Relevantes**

* 1.4 Devido processo para saída forçada
* 1.2 Entrada e saída são sempre possíveis
* 4.3 Reparação precede punição

**Condição do Teste** — Um membro é expulso ou pressionado a sair sem fundamentos, audiência ou recurso.

**Comportamento RCOS Esperado** — A saída forçada segue um processo predefinido: fundamentos declarados, uma chance de responder e um caminho de recurso; a reparação é tentada antes da remoção.

**Critérios de Aprovação** — Qualquer remoção é rastreável a fundamentos documentados e ao devido processo.

**Critérios de Reprovação** — A remoção é arbitrária, informal e não recorrível.

</details>

### Qual é o nível de maturidade da sua comunidade nisso?

Aprovado/reprovado é grosseiro demais para a vida real — a maioria das comunidades está em algum ponto intermediário. Encontre seu degrau e mire no próximo.

| Nível | Como se parece |
|---|---|
| **L0 — Implícito** | A remoção é possível, mas indefinida; acontece por pressão ou votação súbita. |
| **L1 — Nomeado** | O grupo sabe que não tem processo de expulsão, mas ainda não construiu um. |
| **L2 — Documentado** | Existe um processo de saída forçada — fundamentos, notificação, audiência e recurso — em um [Protocolo de Saída](/articles/rcos-templates/layer-1/exit-protocol). |
| **L3 — Aplicado e ensaiado** | Qualquer remoção segue o devido processo; foi aplicado de forma justa pelo menos uma vez, incluindo uma chance real de resposta. |

A maioria das comunidades que se reconhece aqui está em **L0 ou L1**. O objetivo não é a perfeição — é subir um degrau.

### Como o RCOS previne isso

O RCOS exige que a decisão mais difícil de membresia seja a mais procedimental:

- **[Protocolo de Saída](/articles/rcos-templates/layer-1/exit-protocol)** — defina fundamentos, notificação, audiência e recurso para saída forçada *antes* de precisar.
- **[Protocolo de Accountability](/articles/rcos-templates/layer-4/accountability-protocol)** — um caminho que prioriza a reparação, para que a remoção seja o último recurso, não o primeiro reflexo.
- **[Registro de Estado de Membresia](/articles/rcos-templates/layer-1/membership-state-registry)** — torne a suspensão ou remoção uma mudança de estado explícita e registrada, não um humor.

Veja também a especificação: [Camada 1 — Saída e Separação](/articles/rcos-core/v0-1/layer-1-membership-system#36-exit-and-separation) e [Camada 4 — Sanções, Reparação e Separação](/articles/rcos-core/v0-1/layer-4-conflict-repair-accountability#64-sanctions-repair-and-separation).

### Se já está acontecendo

Uma remoção acabou de acontecer ou está em andamento. Desacelere e restaure a legitimidade:

1. **Pause uma remoção em andamento.** Uma saída irreversível sem nenhum processo é o perigo.
2. **Declare os fundamentos por escrito** e dê à pessoa uma chance real de responder.
3. **Defina o processo agora e aplique-o** — oferecer um recurso retroativamente já repara a legitimidade para todos que estão assistindo.
4. **Observe a cascata** — a expulsão arbitrária ensina a comunidade inteira a se autocensurar.

### O que essa falha tende a desencadear

- **[Normalização da Evitação de Conflitos](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — se falar pode te tirar do grupo, as pessoas param de falar.

### Testes de estresse relacionados

- **[Punição Antes da Reparação](/articles/rcos-stress-tests/conflict-accountability/punishment-before-repair)** — o reflexo punitivo que transforma a accountability em expulsão, para começar.
- **[Teste de Escopo de Violação de Norma Cultural](/articles/rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test)** — uma quebra de norma não declarada é frequentemente o que desencadeia a pressa em expulsar.
