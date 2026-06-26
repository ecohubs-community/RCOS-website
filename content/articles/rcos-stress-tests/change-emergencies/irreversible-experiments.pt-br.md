---
id: d2a7e9f3
title: Experimentos Irreversíveis
summary: Quando "vamos só tentar" não tem como voltar atrás se der errado.
parentId: 6acde7a7
order: 3
severity: medium
stage:
  - growth
  - mature
layers:
  - 6
invariants:
  - '6.3'
  - '6.4'
remediationReady: true
tags:
  - 'Camada 6: Evolução'
  - Severidade média
symptoms:
  - >-
    Uma grande mudança foi adotada como "experimento", mas não tem um rollback
    definido.
  - >-
    "Vamos tentar e ver no que dá" era o plano inteiro; ninguém definiu
    critérios de sucesso ou uma data final.
  - >-
    Tentar a novidade exigiu passos irreversíveis (ativos vendidos, papel
    dissolvido, estrutura jurídica alterada).
  - >-
    Quando os experimentos não funcionam, a comunidade fica presa a eles mesmo
    assim.
  - 'Não há registro do que foi tentado, por quê e o que aconteceu.'
preventsWith:
  - rcos-templates/layer-6/experiment-template
  - rcos-templates/layer-6/change-protocol
  - rcos-templates/layer-6/learning-log
cascade:
  - test: >-
      rcos-stress-tests/economy-resources/commons-privatization-through-land-sales
    relation: enables
    note: >-
      Vender terra como experimento é o irreversível mais caro de todos,
      disfarçado de baixo risco.
related:
  - rcos-stress-tests/change-emergencies/institutional-amnesia
  - rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent
lang: pt-br
sourceHash: 5718088d
---

> **Severidade:** Média — o dano é limitado a cada mudança, mas cada uma pode ser permanente.
> **Onde aperta:** Estágios de crescimento e maduro, quando a comunidade tem coragem de tentar coisas grandes.
> **Já está vivendo isso?** Pule para [Se já está acontecendo](#se-ja-esta-acontecendo).

### Soa familiar?

Alguém propôs uma grande mudança — um novo modelo de governança, uma construção importante, reestruturar como funciona a participação — e enquadrou como um experimento. "Vamos só tentar e ver no que dá." Essa abertura pareceu saudável, então o grupo seguiu em frente. Mas tentar significou dar passos que não podem ser desfeitos: um ativo vendido, um papel dissolvido, uma estrutura jurídica alterada. Agora não está indo bem, e não existe saída do tipo "ver no que dá", porque nunca houve um plano de rollback — e ninguém escreveu como seria o sucesso.

### Sinais de que isso está acontecendo com você

- Uma grande mudança foi adotada como "experimento", mas não tem um rollback definido.
- "Vamos tentar e ver no que dá" era o plano inteiro; ninguém definiu critérios de sucesso ou uma data final.
- Tentar a novidade exigiu passos irreversíveis.
- Quando os experimentos não funcionam, a comunidade fica presa a eles mesmo assim.
- Não há registro do que foi tentado, por quê e o que aconteceu.

**Isso _não_ é o mesmo que** um experimento genuíno com critérios, prazo limitado e plano de rollback. O sinal é *irreversibilidade disfarçada de experimentação* — a linguagem do "só estamos tentando" sem a segurança de poder desfazer.

### Por que acontece

Chamar uma mudança de "experimento" reduz a resistência — soa de baixo risco e mente aberta, então as pessoas concordam mais facilmente. Mas se a mudança não pode realmente ser revertida, o enquadramento é um falso conforto: a comunidade se compromete com algo do qual não pode voltar atrás, e como nenhum critério ou aprendizado foi definido, ela nem consegue saber se o experimento funcionou. A palavra faz a persuasão; a irreversibilidade faz o estrago.

<details data-kind="rationale">
<summary>O teste de estresse formal (para auditores)</summary>

**Modo de Falha** — Mudanças irreversíveis são adotadas sob o enquadramento de "experimentos" reversíveis.

**Camadas Envolvidas** — Camada 6 (Evolução)

**Invariantes Relevantes**

* 6.3 Experimentos são reversíveis
* 6.4 Aprendizado é capturado

**Condição do Teste** — Uma mudança chamada de experimento não tem rollback, critérios de sucesso ou prazo limitado.

**Comportamento Esperado do RCOS** — Experimentos carregam critérios, prazo limitado e plano de reversibilidade; mudanças irreversíveis passam pelo processo completo de mudança.

**Critério de Aprovação** — Experimentos podem ser genuinamente desfeitos e são revisados em relação aos critérios.

**Critério de Reprovação** — "Experimentos" são permanentes e não avaliados.

</details>

### Quão madura é sua comunidade nisso?

Aprovado/reprovado é grosseiro demais para a vida real — a maioria das comunidades está em algum lugar no meio. Encontre seu degrau e mire o próximo.

| Nível | Como se parece |
|---|---|
| **N0 — Implícito** | "Experimentos" são adotados sem critérios, prazo ou rollback. |
| **N1 — Nomeado** | O grupo quer experimentar com segurança, mas não definiu como. |
| **N2 — Documentado** | Um [Modelo de Experimento](/articles/rcos-templates/layer-6/experiment-template) exige critérios de sucesso, prazo limitado e plano de rollback. |
| **N3 — Aplicado e ensaiado** | Os experimentos são genuinamente reversíveis e com prazo limitado; pelo menos um foi executado, revisado e, com base em evidências, ou revertido ou adotado. |

A maioria das comunidades que se reconhece aqui está em **N0 ou N1**. O objetivo não é a perfeição — é subir um degrau.

### Como o RCOS previne isso

O RCOS mantém "experimento" honesto — e mantém movimentos irreversíveis fora dessa categoria:

- **[Modelo de Experimento](/articles/rcos-templates/layer-6/experiment-template)** — exija critérios, prazo limitado e plano de rollback antes de tentar.
- **[Protocolo de Mudança](/articles/rcos-templates/layer-6/change-protocol)** — encaminhe mudanças irreversíveis pelo processo completo, não pela via do experimento.
- **[Registro de Aprendizado](/articles/rcos-templates/layer-6/learning-log)** — capture o que foi tentado e o que aconteceu, para que o experimento ensine algo.

Veja também a especificação: [Camada 6 — Experimentos](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#83-experiments) e [Segurança e Reversibilidade de Mudanças](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#85-change-safety-and-reversibility).

### Se já está acontecendo

Se "experimentos" silenciosamente se tornaram permanentes, classifique-os pela reversibilidade:

1. **Verifique se os experimentos atuais têm uma saída real** — quais você consegue realmente desfazer?
2. **Adicione critérios e uma data de revisão** a tudo que ainda está em andamento.
3. **Pare de chamar movimentos irreversíveis de experimentos** — passe-os pelo processo completo de mudança para que recebam o escrutínio que merecem.

### O que essa falha tende a desencadear

- **[Privatização dos Bens Comuns por Venda de Terras](/articles/rcos-stress-tests/economy-resources/commons-privatization-through-land-sales)** — vender terra "como experimento" é o movimento irreversível mais caro de todos.

### Testes de estresse relacionados

- **[Amnésia Institucional](/articles/rcos-stress-tests/change-emergencies/institutional-amnesia)** — sem aprendizado capturado, até um experimento reversível não ensina nada.
- **[Precedente de Bypass de Regras em Emergências](/articles/rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent)** — ambos deixam grandes mudanças passarem sob um rótulo tranquilizador.
