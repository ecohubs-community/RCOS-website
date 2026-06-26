---
id: 6gcf15u
title: Tomada de Decisão por Panelinha Informal
summary: >-
  Quando as decisões reais acontecem antes da reunião, entre as mesmas poucas
  pessoas.
parentId: 7f25f268
order: 2
severity: high
stage:
  - growth
  - mature
layers:
  - 2
  - 1
invariants:
  - '2.4'
  - '1.1'
remediationReady: true
tags:
  - 'Camada 2: Governança'
  - Severidade alta
symptoms:
  - As decisões parecem "já tomadas" quando chegam ao grupo todo.
  - >-
    Um subgrupo recorrente (a mesa da cozinha, um grupo de mensagens, os
    "originais") molda os resultados.
  - >-
    Há poucos ou nenhum registro de decisões; você não consegue reconstruir como
    as coisas foram decididas.
  - >-
    Membros mais novos ou periféricos sentem uma linha clara entre quem está
    dentro e quem está fora.
  - >-
    "A gente já falou sobre isso" encerra discussões que nunca aconteceram
    formalmente.
preventsWith:
  - rcos-templates/layer-2/decision-matrix
  - rcos-templates/layer-2/governance-protocol
  - rcos-templates/layer-5/meeting-templates
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: enables
    note: >-
      Um grupo de fora aprende rapidamente a não desafiar o grupo de dentro, e a
      evitação vira a norma.
  - test: rcos-stress-tests/governance-power/founder-informal-veto
    relation: feeds
    note: >-
      A panelinha normalmente se forma em torno de uma autoridade informal cujas
      preferências ela executa.
related:
  - rcos-stress-tests/governance-power/dominant-speakers-decision-spaces
lang: pt-br
sourceHash: d8227bca
---

> **Severidade:** Alta — a autoridade migra para fora dos registros, onde não pode ser vista nem revisada.
> **Onde dói:** Nos estágios de crescimento e maturidade, à medida que a confiança e os canais paralelos se aprofundam.
> **Já está vivendo isso?** Pule para [Se já está acontecendo](#se-ja-esta-acontecendo).

### Soa familiar?

Quando uma questão chega ao grupo todo, ela já tem uma resposta. O mesmo punhado de pessoas — as fundadoras, as que moram mais perto, as do grupo de mensagens da madrugada — já conversou sobre o assunto, e a reunião é, na verdade, apenas uma ratificação. Nada foi decidido em uma sala enfumaçada de propósito. É só mais rápido resolver as coisas entre as pessoas com quem você já conversa. Mas todo mundo fora desse círculo sente a linha, e o registro de *como* qualquer coisa foi decidida simplesmente não existe.

### Sinais de que isso está acontecendo com você

- As decisões parecem "já tomadas" quando chegam ao grupo todo.
- Um subgrupo recorrente molda resultados fora de qualquer processo formal.
- Há poucos ou nenhum registro de decisões; você não consegue reconstruir como as coisas foram decididas.
- Membros mais novos ou periféricos sentem uma linha clara entre quem está dentro e quem está fora.
- "A gente já falou sobre isso" encerra discussões que nunca aconteceram formalmente.

**Isso _não_ é a mesma coisa que** um grupo de trabalho delegado com um mandato documentado. O sinal revelador é que *a autoridade migrou para fora dos registros* — os resultados surgem sem nenhum mecanismo rastreável, e a participação no círculo decisório nunca foi declarada.

### Por que isso acontece

À medida que a confiança se forma, as pessoas que mais conversam fora das reuniões começam a resolver as coisas informalmente — é mais rápido e parece natural. Mas decisões tomadas fora dos registros não podem ser revisadas, e o limite do círculo decisório nunca é declarado, então o poder se concentra silenciosamente em um grupo de dentro que ninguém nomeou formalmente e que ninguém pode formalmente responsabilizar.

<details data-kind="rationale">
<summary>O teste de estresse formal (para auditores)</summary>

**Modo de Falha** — As decisões migram para subgrupos informais.

**Camadas Envolvidas** — Camada 2 (Governança), Camada 1 (Adesão)

**Invariantes Relevantes**

* 2.4 As decisões são revisáveis
* 1.1 Não há adesão implícita

**Condição do Teste** — Resultados surgem sem registros formais de decisão.

**Comportamento RCOS Esperado** — Decisões tomadas fora dos canais formais são inválidas.

**Critérios de Aprovação** — A autoridade permanece legível e revisável.

**Critérios de Reprovação** — O poder migra para fora dos registros.

</details>

### Quão madura é a sua comunidade nesse aspecto?

Aprovado/reprovado é uma medida grosseira demais para a vida real — a maioria das comunidades está em algum ponto intermediário. Encontre o seu degrau e mire no próximo.

| Nível | Como é na prática |
|---|---|
| **L0 — Implícito** | As decisões reais acontecem em subgrupos informais; o processo formal as ratifica depois do fato. |
| **L1 — Nomeado** | O grupo percebe uma dinâmica de panelinha, mas não exigiu que as decisões fossem registradas. |
| **L2 — Documentado** | Uma [matriz de decisões](/articles/rcos-templates/layer-2/decision-matrix) define o que precisa ser decidido por canais formais e registrados; resultados fora desses canais são inválidos. |
| **L3 — Aplicado e ensaiado** | As decisões são legíveis e revisáveis; resoluções informais são rotineiramente trazidas de volta ao registro. |

A maioria das comunidades que se reconhece aqui está em **L0 ou L1**. O objetivo não é a perfeição — é subir um degrau.

### Como o RCOS previne isso

O RCOS mantém a autoridade legível ao exigir que as decisões fiquem registradas:

- **[Matriz de Decisões](/articles/rcos-templates/layer-2/decision-matrix)** — defina quais decisões exigem um processo formal e registrado.
- **[Protocolo de Governança](/articles/rcos-templates/layer-2/governance-protocol)** — torne explicitamente inválidas as decisões tomadas fora dos canais formais.
- **[Modelos de Reunião](/articles/rcos-templates/layer-5/meeting-templates)** — registre decisões para que a autoridade permaneça revisável, não lembrada.

Veja também a especificação: [Camada 2 — Matriz de Decisões](/articles/rcos-core/v0-1/layer-2-governance-decision-logic#44-decision-matrix) e [Camada 5 — Documentação e Fluxo de Informação](/articles/rcos-core/v0-1/layer-5-operations-coordination#73-documentation-and-information-flow).

### Se já está acontecendo

Você não precisa romper amizades — você precisa trazer as decisões de volta para o registro:

1. **Exija um registro de decisão.** Nada conta como decidido a menos que esteja escrito onde todo mundo pode ver.
2. **Revele o lugar real.** Mova a conversa decisória de verdade para um canal aberto e com ata.
3. **Nomeie o mandato.** Se um subgrupo deve decidir algumas coisas, dê a ele um mandato explícito e delimitado; caso contrário, dissolva sua autoridade informal.
4. **Observe a cascata** — o governo da panelinha corrói a clareza da adesão e ensina o grupo de fora a parar de falar.

### O que essa falha tende a desencadear

- **[Normalização da Evitação de Conflito](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — um grupo de fora aprende rapidamente a não desafiar o grupo de dentro.
- **[Veto Informal do Fundador](/articles/rcos-stress-tests/governance-power/founder-informal-veto)** — a panelinha normalmente se forma em torno de uma autoridade informal e executa suas preferências.

### Testes de estresse relacionados

- **[Falantes Dominantes em Espaços de Decisão](/articles/rcos-stress-tests/governance-power/dominant-speakers-decision-spaces)** — a versão dentro da reunião do mesmo desvio de autoridade para fora dos mecanismos acordados.
