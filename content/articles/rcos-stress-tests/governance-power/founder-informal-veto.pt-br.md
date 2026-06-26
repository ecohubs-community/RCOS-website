---
id: 9e4c3b21
title: Veto Informal do Fundador
summary: >-
  Quando o "não" silencioso do fundador ainda manda, mesmo sem nada no papel que
  lhe conceda esse poder.
parentId: 7f25f268
order: 1
severity: high
stage:
  - forming
  - growth
  - mature
layers:
  - 2
  - 0
invariants:
  - '2.2'
  - '2.3'
remediationReady: true
tags:
  - 'Camada 2: Governança'
  - Severidade alta
symptoms:
  - >-
    As decisões são tecnicamente tomadas pelo grupo, mas nada avança se o
    fundador desaprovar.
  - >-
    As pessoas consultam o fundador informalmente antes de levar ideias ao
    processo formal.
  - >-
    "No fundo, é o projeto dele(a)" é um sentimento comum e que ninguém
    contesta.
  - >-
    O processo formal existe no papel, mas é silenciosamente sobreposto na
    prática.
  - >-
    Nenhum documento define o que o fundador pode e o que não pode decidir
    sozinho.
preventsWith:
  - rcos-templates/layer-2/authority-registry
  - rcos-templates/layer-2/decision-matrix
  - rcos-templates/layer-2/governance-protocol
cascade:
  - test: rcos-stress-tests/culture-influence/charismatic-spiritual-authority
    relation: enables
    note: >-
      A influência ilimitada do fundador desliza para o carisma assumindo o
      lugar da governança.
  - test: rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent
    relation: enables
    note: >-
      Uma autoridade informal vira aquela pessoa que contorna as regras sob
      pressão.
  - test: rcos-stress-tests/governance-power/informal-clique-decision-making
    relation: enables
    note: O círculo íntimo do fundador se torna o verdadeiro corpo decisor.
related:
  - rcos-stress-tests/governance-power/dominant-speakers-decision-spaces
lang: pt-br
sourceHash: 52fea020
---

> **Severidade:** Alta — a constituição vira teatro se uma pessoa pode silenciosamente sobrepô-la.
> **Onde dói mais:** Em qualquer estágio, mas com mais força nos anos liderados pelo fundador, antes que a autoridade seja delimitada.
> **Já está vivendo isso?** Pule para [Se já está acontecendo](#if-its-already-happening).

### Soa familiar?

Você tem processos. Você tem votações. E mesmo assim todo mundo sabe que, se o fundador estiver insatisfeito, a coisa não acontece. Ninguém chama isso de veto — o fundador raramente precisa dizer "não", porque as pessoas pré-consultam ideias informalmente, suavizam propostas ou as abandonam antes que cheguem à sala. A governança é real no papel e sem peso na prática, porque a preferência de uma pessoa silenciosamente supera tudo isso.

### Sinais de que isso está acontecendo com você

- As decisões são tecnicamente tomadas pelo grupo, mas nada avança se o fundador desaprovar.
- As pessoas consultam o fundador informalmente antes de levar ideias ao processo formal.
- "No fundo, é o projeto dele(a)" é um sentimento comum e que ninguém contesta.
- O processo formal existe no papel, mas é silenciosamente sobreposto na prática.
- Nenhum documento define o que o fundador pode e o que não pode decidir sozinho.

**Isso _não_ é o mesmo que** um fundador ocupar um papel explícito e documentado, com autoridade definida. O sinal revelador é um veto que é *real, mas não escrito* — um poder que todo mundo sente e que nenhuma regra concede.

### Por que isso acontece

Os fundadores carregam a visão, a história e a maior parte dos relacionamentos, então suas preferências mantêm um peso desproporcional muito depois que a governança formal já existe. Se esse peso nunca é delimitado por escrito, o grupo se autocensura em torno dele: o fundador raramente precisa exercer um veto porque ninguém o força a um "sim". O carisma e a gratidão silenciosamente superam a constituição — até o dia em que entram em conflito, e a constituição perde.

<details data-kind="rationale">
<summary>O teste de estresse formal (para auditores)</summary>

**Modo de Falha** — O fundador retém um veto de fato apesar dos processos formais.

**Camadas Envolvidas** — Camada 2 (Governança), Camada 0 (Invariantes)

**Invariantes Relevantes**

* 2.2 A autoridade deve ser explícita
* 2.3 As regras constitucionais prevalecem sobre indivíduos

**Condição do Teste** — As decisões são sobrepostas informalmente pelo fundador.

**Comportamento Esperado do RCOS** — A autoridade do fundador deve ser formalizada ou removida; as decisões seguem uma matriz de decisão acordada.

**Critérios de Aprovação** — O poder do fundador é delimitado e documentado.

**Critérios de Reprovação** — O carisma substitui a governança.

</details>

### Qual é a maturidade da sua comunidade nisso?

Aprovado/reprovado é simplista demais para a vida real — a maioria das comunidades está em algum ponto intermediário. Encontre o seu degrau e mire no próximo.

| Nível | Como se parece |
|---|---|
| **L0 — Implícito** | O veto informal do fundador é real e não dito; o processo é teatro em torno dele. |
| **L1 — Nomeado** | O grupo admite que o fundador tem um poder desproporcional, mas ainda não o delimitou. |
| **L2 — Documentado** | A autoridade do fundador está escrita em um [Registro de Autoridade](/articles/rcos-templates/layer-2/authority-registry) e em uma [Matriz de Decisão](/articles/rcos-templates/layer-2/decision-matrix) — escopo explícito, limites explícitos. |
| **L3 — Aplicado e ensaiado** | As decisões seguem a matriz; o papel do fundador é delimitado e revisável, e já se manteve firme diante de uma decisão da qual ele discordou. |

A maioria das comunidades que se reconhece aqui está em **L0 ou L1**. O objetivo não é a perfeição — é subir um degrau.

### Como o RCOS previne isso

O RCOS torna explícita toda autoridade, incluindo a do fundador:

- **[Registro de Autoridade](/articles/rcos-templates/layer-2/authority-registry)** — registre por escrito exatamente qual autoridade cada papel (incluindo o fundador) detém e qual não detém.
- **[Matriz de Decisão](/articles/rcos-templates/layer-2/decision-matrix)** — vincule as decisões a um mecanismo acordado, para que ninguém as sobreponha informalmente.
- **[Protocolo de Governança](/articles/rcos-templates/layer-2/governance-protocol)** — estabeleça que as regras constitucionais prevalecem sobre qualquer indivíduo.

Veja também a especificação: [Camada 2 — Limites de Autoridade](/articles/rcos-core/v0-1/layer-2-governance-decision-logic#43-authority-boundaries).

### Se já está acontecendo

Você não pode delimitar um poder que não está disposto a nomear. Triagem:

1. **Nomeie a autoridade real** — coloque por escrito honestamente o poder de fato do fundador e, depois, decidam juntos qual parte dele é legítima.
2. **Delimite-o** — converta isso em um papel explícito e com escopo definido (ou remova-o), com limites e um caminho de revisão.
3. **Teste-o** em uma decisão de baixa importância da qual o fundador discorde levemente, para provar que o processo realmente se sustenta.
4. **Fique atento à cascata** — o poder informal do fundador é a semente do governo de panelinha, do carisma-como-governança e do contorno em emergências.

### O que esta falha tende a desencadear

- **[Autoridade Espiritual Carismática](/articles/rcos-stress-tests/culture-influence/charismatic-spiritual-authority)** — a influência ilimitada do fundador desliza para o carisma assumindo o lugar da governança.
- **[Precedente de Contorno das Regras em Emergências](/articles/rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent)** — uma autoridade informal é exatamente quem "temporariamente" contorna as regras em uma crise.
- **[Tomada de Decisão por Panelinha Informal](/articles/rcos-stress-tests/governance-power/informal-clique-decision-making)** — o círculo íntimo do fundador se torna o verdadeiro corpo decisor.

### Testes de estresse relacionados

- **[Falantes Dominantes em Espaços de Decisão](/articles/rcos-stress-tests/governance-power/dominant-speakers-decision-spaces)** — a mesma influência não escrita, expressa pelo tempo de fala nas reuniões.
