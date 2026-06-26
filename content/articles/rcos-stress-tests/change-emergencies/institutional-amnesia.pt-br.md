---
id: e5c1b8a4
title: Amnésia Institucional
summary: Quando a comunidade fica reaprendendo as mesmas lições do jeito difícil.
parentId: 6acde7a7
order: 4
severity: medium
stage:
  - growth
  - mature
layers:
  - 6
  - 5
invariants:
  - '6.4'
  - '5.2'
remediationReady: true
tags:
  - 'Layer 6: Evolution'
  - Medium severity
symptoms:
  - >-
    Os mesmos conflitos, projetos fracassados ou problemas de integração
    continuam se repetindo.
  - >-
    O motivo das decisões passadas se perdeu; ninguém consegue reconstruir o
    raciocínio.
  - >-
    A memória institucional vive na cabeça de algumas pessoas veteranas — e vai
    embora quando elas saem.
  - Membros novos repetem erros que a comunidade já cometeu anos atrás.
  - 'Não existe registro de decisões, experimentos ou lições aprendidas.'
preventsWith:
  - rcos-templates/layer-6/learning-log
  - rcos-templates/layer-6/version-history
  - rcos-templates/layer-5/operations-manual
cascade:
  - test: rcos-stress-tests/operations-coordination/rapid-growth-without-onboarding
    relation: feeds
    note: >-
      Sem conhecimento registrado, as pessoas recém-chegadas não conseguem ser
      colocadas a par e repetem os erros antigos.
  - test: >-
      rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
    relation: feeds
    note: >-
      Quando o conhecimento vive só na cabeça das pessoas, essas pessoas se
      tornam indispensáveis.
related:
  - rcos-stress-tests/change-emergencies/irreversible-experiments
lang: pt-br
sourceHash: 92f00fba
---

> **Severidade:** Média — nunca urgente, sempre acumulando: a comunidade paga o preço cheio por cada lição, repetidamente.
> **Onde aperta:** Estágios de crescimento e maturidade, e com mais força sempre que alguém veterano sai.
> **Já vivendo isso?** Pule para [Se já está acontecendo](#if-its-already-happening).

### Soa familiar?

Esse conflito parece familiar — porque a comunidade teve quase exatamente o mesmo há três anos, e lidou com ele, e aprendeu algo, e depois esqueceu. O projeto que acabou de fracassar fracassou do mesmo jeito que o anterior. Membros novos batem nas mesmas paredes que as pessoas fundadoras bateram e resolveram há muito tempo. Ninguém anotou nada disso, então a única memória que a comunidade tem vive na cabeça de algumas pessoas veteranas — e toda vez que uma delas vai embora, um pedaço de conhecimento conquistado a duras penas sai junto.

### Sinais de que isso está acontecendo com você

- Os mesmos conflitos, projetos fracassados ou problemas de integração continuam se repetindo.
- O motivo das decisões passadas se perdeu; ninguém consegue reconstruir o raciocínio.
- A memória institucional vive na cabeça de algumas pessoas veteranas — e vai embora quando elas saem.
- Membros novos repetem erros que a comunidade já cometeu anos atrás.
- Não existe registro de decisões, experimentos ou lições aprendidas.

**Isso _não_ é o mesmo que** escolher não documentar coisas triviais. O sinal é que *decisões, conflitos e experimentos significativos não deixam nenhum registro recuperável* — então a comunidade não consegue aprender com a própria história, só revivê-la.

### Por que acontece

Registrar aprendizados é pouco glamoroso e sempre parece menos urgente que a próxima tarefa, então nunca acontece de verdade. Mas uma comunidade que não registra suas decisões e resultados não tem memória além das pessoas com mais tempo de casa. Ela paga o preço cheio por cada lição, várias e várias vezes, e perde sua história no momento em que essas pessoas seguem em frente — o que, eventualmente, todas fazem.

<details data-kind="rationale">
<summary>O teste de estresse formal (para auditores)</summary>

**Modo de Falha** — Decisões, conflitos e experimentos não deixam aprendizado registrado.

**Camadas Envolvidas** — Camada 6 (Evolução), Camada 5 (Operações)

**Invariantes Relevantes**

* 6.4 O aprendizado é registrado
* 5.2 O conhecimento operacional é documentado

**Condição do Teste** — Decisões e resultados significativos não são registrados, e o raciocínio é irrecuperável.

**Comportamento RCOS Esperado** — Aprendizados e decisões são registrados em uma forma durável e recuperável, e consultados ao longo do tempo.

**Critérios de Aprovação** — Lições passadas são recuperáveis e comprovadamente previnem repetições.

**Critérios de Reprovação** — A comunidade repete os próprios erros.

</details>

### Quão madura é sua comunidade nesse aspecto?

Aprovado/reprovado é grosseiro demais para a vida real — a maioria das comunidades está em algum ponto intermediário. Encontre seu degrau e mire no próximo.

| Nível | Como se parece |
|---|---|
| **L0 — Implícito** | Nada é registrado; a memória é oral e vive na cabeça de algumas pessoas. |
| **L1 — Nomeado** | O grupo sabe que repete erros, mas ainda não começou a registrar. |
| **L2 — Documentado** | Um [Registro de Aprendizados](/articles/rcos-templates/layer-6/learning-log) e registros de decisão capturam decisões, conflitos e resultados significativos. |
| **L3 — Aplicado e ensaiado** | O aprendizado é registrado rotineiramente *e realmente consultado*; uma lição passada comprovadamente evitou uma repetição. |

A maioria das comunidades que se reconhece aqui está em **L0 ou L1**. A meta não é a perfeição — é subir um degrau.

### Como o RCOS previne isso

O RCOS dá à comunidade uma memória que sobrevive aos seus membros:

- **[Registro de Aprendizados](/articles/rcos-templates/layer-6/learning-log)** — registre decisões, experimentos, conflitos e o que foi aprendido.
- **[Histórico de Versões](/articles/rcos-templates/layer-6/version-history)** — registre como e por que as regras mudaram ao longo do tempo.
- **[Manual de Operações](/articles/rcos-templates/layer-5/operations-manual)** — mantenha o conhecimento operacional fora das cabeças individuais.

Veja também a especificação: [Camada 6 — Captura de Aprendizado e Feedback](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#84-learning-and-feedback-capture) e [Camada 5 — Documentação e Fluxo de Informação](/articles/rcos-core/v0-1/layer-5-operations-coordination#73-documentation-and-information-flow).

### Se já está acontecendo

Se a comunidade fica revivendo seu passado, comece uma memória agora:

1. **Comece um registro de aprendizados hoje** — mesmo um documento corrido é melhor que a memória.
2. **Capture retroativamente as grandes lições** que as pessoas veteranas carregam, antes que elas saiam.
3. **Torne um registro rápido de decisão uma etapa padrão,** para que o raciocínio fique recuperável depois.

### O que essa falha tende a desencadear

- **[Crescimento Rápido sem Integração](/articles/rcos-stress-tests/operations-coordination/rapid-growth-without-onboarding)** — sem conhecimento registrado, as pessoas recém-chegadas não conseguem ser colocadas a par.
- **[Poder Invisível via Responsabilidades](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — quando o conhecimento vive só na cabeça das pessoas, essas pessoas se tornam indispensáveis.

### Testes de estresse relacionados

- **[Experimentos Irreversíveis](/articles/rcos-stress-tests/change-emergencies/irreversible-experiments)** — aprendizado não registrado é o que faz com que experimentos — reversíveis ou não — não ensinem nada.
