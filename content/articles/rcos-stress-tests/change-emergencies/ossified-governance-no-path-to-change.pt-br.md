---
id: c8f4b2d1
title: Governança Engessada Sem Caminho para Mudança
summary: 'Quando nada pode mudar, a mudança acontece por meio da saída.'
parentId: 6acde7a7
order: 2
severity: medium
stage:
  - mature
layers:
  - 6
invariants:
  - '6.1'
  - '6.2'
remediationReady: true
tags:
  - 'Layer 6: Evolution'
  - Medium severity
symptoms:
  - >-
    As regras originais são tratadas como fixas; não há processo legítimo para
    revisá-las.
  - >-
    "Foi assim que os fundadores estabeleceram" encerra a maioria das conversas
    sobre reforma.
  - >-
    Membros frustrados pressionam por mudança ameaçando sair, ou simplesmente
    saem.
  - >-
    Propostas de adaptação morrem por falta de qualquer mecanismo para
    considerá-las.
  - >-
    A comunidade está visivelmente fora de sintonia com suas próprias
    necessidades atuais.
preventsWith:
  - rcos-templates/layer-6/change-protocol
  - rcos-templates/layer-6/version-history
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: enables
    note: >-
      Sem caminho legítimo para a mudança, a frustração não tem para onde ir a
      não ser para a clandestinidade.
  - test: rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent
    relation: feeds
    note: >-
      Quando a mudança normal é impossível, as pessoas esperam por uma crise
      para forçar o que não conseguiam propor.
related:
  - rcos-stress-tests/change-emergencies/unprotected-core-invariants
lang: pt-br
sourceHash: ba4439dd
---

> **Severidade:** Média — declínio lento em vez de colapso: a comunidade calcifica e sangra membros.
> **Onde aperta:** No estágio maduro, frequentemente após um período inicial de rotatividade que os fundadores corrigiram em excesso.
> **Já está vivendo isso?** Pule para [Se já está acontecendo](#if-its-already-happening).

### Soa familiar?

A comunidade definiu suas regras há anos, e agora elas são sagradas. Sempre que alguém sugere que a estrutura não serve mais — o formato das reuniões, os níveis de membresia, o modo como o dinheiro funciona — a conversa bate numa parede: "foi assim que os fundadores estabeleceram". Não existe processo de fato para propor uma mudança, então não há para onde a pressão escoar. Quem quer que a comunidade evolua não consegue defender isso; simplesmente sai em silêncio, ou ameaça sair, e o lugar vai ficando cada vez mais fora de sintonia com as pessoas que de fato vivem nele.

### Sinais de que isso está acontecendo com você

- As regras originais são tratadas como fixas; não há processo legítimo para revisá-las.
- "Foi assim que os fundadores estabeleceram" encerra a maioria das conversas sobre reforma.
- Membros frustrados pressionam por mudança ameaçando sair, ou simplesmente saem.
- Propostas de adaptação morrem por falta de qualquer mecanismo para considerá-las.
- A comunidade está visivelmente fora de sintonia com suas próprias necessidades atuais.

**Isto _não_ é o mesmo que** proteger deliberadamente invariantes centrais (isso é saudável — veja [Invariantes Centrais Desprotegidos](/articles/rcos-stress-tests/change-emergencies/unprotected-core-invariants) para a falha *oposta*). O sinal é que *tudo* está congelado, sem caminho restrito para mudar qualquer coisa — então a adaptação legítima é impossível.

### Por que isso acontece

Após um período inicial de rotatividade, as comunidades frequentemente corrigem em excesso, indo para a rigidez — a estabilidade parece segura e reabrir as regras parece perigoso. Mas um sistema sem mecanismo legítimo de mudança não consegue se adaptar a novos membros, novas condições ou aos seus próprios erros. A pressão por mudança não desaparece; ela se desvia do sistema na forma de saídas, divisões e quebras silenciosas de regras.

<details data-kind="rationale">
<summary>O teste de estresse formal (para auditores)</summary>

**Modo de Falha** — Não existe mecanismo legítimo e restrito para alterar as regras.

**Camadas Envolvidas** — Camada 6 (Evolução)

**Invariantes Relevantes**

* 6.1 A mudança é possível, mas restrita
* 6.2 Mudanças são versionadas

**Condição de Teste** — Os membros não conseguem propor ou adotar mudanças de regras por meio de qualquer processo definido.

**Comportamento Esperado do RCOS** — Um mecanismo de mudança restrito permite que as regras sejam propostas, revisadas, revistas e versionadas.

**Critério de Aprovação** — O sistema consegue se adaptar por meio de um processo legítimo.

**Critério de Reprovação** — A mudança acontece apenas por saída, divisão ou quebra de regras.

</details>

### Quão madura está sua comunidade nisso?

Aprovado/reprovado é grosseiro demais para a vida real — a maioria das comunidades está num meio-termo. Encontre seu degrau e mire no próximo.

| Nível | Como parece |
|---|---|
| **L0 — Implícito** | Nenhum caminho legítimo para a mudança; as regras estão congeladas e a reforma acontece por saída. |
| **L1 — Nomeado** | O grupo admite que não consegue se adaptar, mas ainda não construiu um mecanismo de mudança. |
| **L2 — Documentado** | Um [Protocolo de Mudança](/articles/rcos-templates/layer-6/change-protocol) define como as regras podem ser propostas, revisadas e revistas — possível, mas restrito. |
| **L3 — Aplicado e ensaiado** | A mudança acontece por meio do processo; o sistema se adaptou pelo menos uma vez sem crise ou cisma. |

A maioria das comunidades que se reconhecem aqui está em **L0 ou L1**. O objetivo não é a perfeição — é subir um degrau.

### Como o RCOS previne isso

O RCOS torna a mudança possível *e* delimitada — nem congelada nem caótica:

- **[Protocolo de Mudança](/articles/rcos-templates/layer-6/change-protocol)** — defina um caminho legítimo e restrito para propor e adotar mudanças.
- **[Histórico de Versões](/articles/rcos-templates/layer-6/version-history)** — acompanhe como as regras evoluem, para que a mudança seja visível e delimitada em vez de temida.

Veja também a especificação: [Camada 6 — Mecanismos de Mudança](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#81-change-mechanisms) e [Versionamento e Autoridade](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#82-versioning-and-authority).

### Se já está acontecendo

Se as regras estão congeladas, abra um canal seguro antes que mais pessoas saiam:

1. **Abra um canal para a mudança** — um processo de proposta, mesmo que mínimo.
2. **Conduza uma adaptação atrasada por ele** como prova de conceito.
3. **Diferencie invariantes protegidas** (deliberadamente difíceis de mudar) de todo o resto (mutável por processo), para que "não podemos mudar isso" deixe de se aplicar a tudo.

### O que essa falha tende a desencadear

- **[Normalização da Evitação de Conflitos](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — sem caminho legítimo para a mudança, a frustração vai para a clandestinidade.
- **[Precedente de Bypass de Regras em Emergências](/articles/rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent)** — quando a mudança normal é impossível, as pessoas esperam uma crise para forçá-la.

### Testes de estresse relacionados

- **[Invariantes Centrais Desprotegidos](/articles/rcos-stress-tests/change-emergencies/unprotected-core-invariants)** — o desequilíbrio oposto: aqui nada pode mudar; lá, tudo pode, inclusive a base.
