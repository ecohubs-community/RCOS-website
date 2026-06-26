---
id: 45a25135
title: 'Teste de escopo: violação de norma cultural'
summary: Quando uma norma não escrita é punida como se fosse uma regra escrita.
parentId: 45625035
order: 0
severity: medium
stage:
  - forming
  - growth
  - mature
layers:
  - 0
  - 1
  - 4
invariants:
  - '0.2'
  - '1.1'
  - '4.4'
remediationReady: true
tags:
  - 'Layer 0: Scope'
  - Medium severity
symptoms:
  - >-
    Um membro quebra uma norma não escrita forte (por exemplo, comer carne em
    uma comunidade que se identifica como vegana) e a resposta é emocional e
    improvisada.
  - >-
    Não está claro se a norma é uma regra vinculante ou uma preferência
    compartilhada.
  - >-
    A intensidade da aplicação depende de quem ficou chateado, não de qualquer
    regra escrita.
  - >-
    As pessoas presumem que "todo mundo sabe" da norma, mas ela nunca foi
    declarada como condição de associação.
  - 'As reações vão do ostracismo à pressão para sair, sem devido processo.'
preventsWith:
  - rcos-templates/layer-0/scope-declaration
  - rcos-templates/layer-1/membership-agreement
  - rcos-templates/layer-0/identity-constraints-register
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: feeds
    note: >-
      A aplicação arbitrária e emocional ensina os membros a esconder
      comportamentos em vez de trazê-los à tona.
related:
  - rcos-stress-tests/culture-influence/charismatic-spiritual-authority
lang: pt-br
sourceHash: 08d99a95
---

> **Severidade:** Média — raramente fatal, mas produz os conflitos mais duros e pessoais.
> **Onde aperta:** Em qualquer estágio; mais forte em comunidades com uma identidade compartilhada poderosa.
> **Já está vivendo isso?** Pule para [Se já está acontecendo](#se-ja-esta-acontecendo).

### Soa familiar?

A comunidade tem uma identidade forte — vegana, sóbria, silenciosa antes do meio-dia, seja o que for — e todo mundo "simplesmente sabe" da norma. Aí alguém a quebra. De repente há uma intensidade no ar difícil de nomear: isso é uma violação de regra, ou só algo que incomodou as pessoas? A resposta é rápida e emocional, as consequências variam dependendo de quem ficou mais ofendido, e ninguém consegue apontar onde, exatamente, essa norma foi escrita como condição para estar aqui.

### Sinais de que isso está acontecendo com você

- Um membro quebra uma norma não escrita forte e a resposta é emocional e improvisada.
- Não está claro se a norma é uma regra vinculante ou uma preferência compartilhada.
- A intensidade da aplicação depende de quem está chateado, não de qualquer regra escrita.
- As pessoas presumem que "todo mundo sabe" da norma, mas ela nunca foi declarada como condição de associação.
- As reações vão do ostracismo à pressão para sair, sem devido processo.

**Isto _não_ é o mesmo que** aplicar uma invariante explicitamente declarada ou uma condição de associação. O sinal revelador é *aplicar uma norma que nunca foi escrita como governada* — punição sem base explícita em uma regra.

### Por que acontece

Culturas compartilhadas fortes geram normas não escritas poderosas. Quando algo parece obviamente errado, o grupo aplica como se fosse lei — mas se a norma nunca foi declarada como uma invariante central ou uma condição de associação, essa aplicação é não governada: arbitrária, emocionalmente movida e impossível de recorrer. O dano não é a norma em si; é punir as pessoas com base em regras que formalmente não existem.

<details data-kind="rationale">
<summary>O teste de estresse formal (para auditores)</summary>

**Modo de falha** — Um membro viola uma norma cultural forte (por exemplo, comer carne em uma comunidade vegana).

**Camadas envolvidas** — Camada 0 (Propósito e Escopo), Camada 1 (Associação), Camada 4 (Conflito)

**Invariantes relevantes**

* 0.2 Escopo governado explícito
* 1.1 Sem regras implícitas de associação
* 4.4 Segurança prevalece sobre participação

**Condição de teste** — Ocorre uma violação de norma e a resposta de aplicação é pouco clara ou emocionalmente movida.

**Comportamento esperado do RCOS** — Determinar se a regra é uma invariante central, uma condição de associação ou uma preferência fora de escopo; aplicar o devido processo somente se ela for explicitamente governada.

**Critérios de aprovação** — A resposta se alinha estritamente com o escopo declarado e as regras de associação.

**Critérios de reprovação** — Punição ou exclusão sem uma base explícita em regra.

</details>

### Quão madura é sua comunidade neste ponto?

Aprovado/reprovado é binário demais para a vida real — a maioria das comunidades está em algum lugar no meio. Encontre seu degrau e mire no próximo.

| Nível | Como se parece |
|---|---|
| **L0 — Implícito** | Normas fortes são aplicadas por sensação; ninguém declarou o que de fato é governado. |
| **L1 — Nomeado** | O grupo percebe que algumas normas não são escritas, mas ainda não separou regra de preferência. |
| **L2 — Documentado** | Uma [Declaração de Escopo](/articles/rcos-templates/layer-0/scope-declaration) distingue invariantes centrais, condições de associação e preferências fora de escopo; o devido processo se aplica somente a regras governadas. |
| **L3 — Aplicado e ensaiado** | As respostas seguem o escopo declarado; uma preferência não escrita não pode disparar punição; isso já foi testado em uma violação real. |

A maioria das comunidades que se reconhece aqui está em **L0 ou L1**. O objetivo não é perfeição — é subir um degrau.

### Como o RCOS previne isso

O RCOS faz a comunidade decidir *o que ela de fato governa* antes de aplicar:

- **[Declaração de Escopo](/articles/rcos-templates/layer-0/scope-declaration)** — classifique cada norma importante como invariante central, condição de associação ou preferência fora de escopo.
- **[Acordo de Associação](/articles/rcos-templates/layer-1/membership-agreement)** — torne as condições comportamentais vinculantes explícitas na entrada, para que ninguém seja punido de surpresa.
- **[Registro de Restrições de Identidade](/articles/rcos-templates/layer-0/identity-constraints-register)** — declare o que a identidade da comunidade governa e o que não governa.

Veja também a especificação: [Camada 0 — Declaração de Escopo](/articles/rcos-core/v0-1/layer-0-identity-scope#22-scope-declaration) e [Camada 1 — Direitos e Obrigações](/articles/rcos-core/v0-1/layer-1-membership-system#34-rights-and-obligations).

### Se já está acontecendo

Uma violação acabou de ocorrer e a resposta está acalorada. Desacelere:

1. **Pause a aplicação.** Separe "estamos chateados" de "uma regra governada foi quebrada".
2. **Classifique a norma.** É uma invariante declarada, uma condição de associação ou uma preferência não declarada?
3. **Aplique o devido processo somente se for governada.** Se não for, a lição é *declará-la daqui pra frente* (ou não), nunca punir retroativamente.
4. **Decida para o futuro.** Se a comunidade quer que essa norma seja vinculante, escreva-a como uma condição de associação explícita.

### O que essa falha tende a desencadear

- **[Normalização da Evitação de Conflito](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — a aplicação arbitrária e emocional ensina os membros a esconder comportamentos em vez de trazê-los à tona.

### Testes de estresse relacionados

- **[Autoridade Espiritual Carismática](/articles/rcos-stress-tests/culture-influence/charismatic-spiritual-authority)** — figuras reverenciadas costumam ser aquelas cujas preferências acabam aplicadas como normas não declaradas.
