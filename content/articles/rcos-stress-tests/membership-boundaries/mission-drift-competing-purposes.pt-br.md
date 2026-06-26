---
id: f1c3d8b5
title: Desvio de Missão por Propósitos Concorrentes
summary: Quando a comunidade tenta ser tudo e já não consegue priorizar nada.
parentId: 45625035
order: 2
severity: medium
stage:
  - growth
  - mature
layers:
  - 0
invariants:
  - '0.1'
  - '0.2'
remediationReady: true
tags:
  - 'Layer 0: Scope'
  - Medium severity
symptoms:
  - >-
    Membros dariam respostas genuinamente diferentes para "para que serve esta
    comunidade, principalmente?"
  - Novos projetos e direções continuam sendo adicionados; nenhum é descartado.
  - >-
    Prioridades colidem de forma irreconciliável — renda vs. ecologia vs.
    prática — sem como arbitrar.
  - Decisões emperram porque não há um senso compartilhado do que importa mais.
  - >-
    Facções se formam em torno de visões diferentes sobre o que a comunidade
    realmente é.
preventsWith:
  - rcos-templates/layer-0/purpose-charter
  - rcos-templates/layer-0/scope-declaration
  - rcos-templates/layer-0/identity-constraints-register
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: feeds
    note: >-
      Conflitos de propósito irreconciliáveis são grandes demais para serem
      levantados, então o grupo inteiro aprende a evitá-los.
  - test: rcos-stress-tests/governance-power/informal-clique-decision-making
    relation: enables
    note: >-
      Facções se formam em torno de visões concorrentes e começam a decidir
      entre si.
related:
  - rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test
lang: pt-br
sourceHash: '62006333'
---

> **Severidade:** Média — lenta e corrosiva: não quebra a comunidade, dissolve seu foco.
> **Onde morde:** Estágios de crescimento e maturidade, conforme ambições e membros se acumulam.
> **Já vivendo isso?** Pule para [Se já está acontecendo](#se-ja-esta-acontecendo).

### Soa familiar?

Começou com uma ideia clara, e então cresceu — uma eco-fazenda, e também um retiro, e também um espaço de artes, e também uma fonte de renda, e também uma escola. Cada adição era válida, então nada nunca foi recusado. Agora, quando dois desses propósitos puxam em direções opostas — o projeto de renda quer o campo que a floresta de alimentos precisa — não há como decidir, porque a comunidade nunca concordou qual propósito vem primeiro. As pessoas não estão brigando porque discordam dos valores; estão brigando porque cada uma delas é leal a uma versão diferente, igualmente real, do que este lugar serve.

### Sinais de que isso está acontecendo com você

- Membros dariam respostas genuinamente diferentes para "para que serve esta comunidade, principalmente?"
- Novos projetos e direções continuam sendo adicionados; nenhum é descartado.
- Prioridades colidem de forma irreconciliável — renda vs. ecologia vs. prática — sem como arbitrar.
- Decisões emperram porque não há um senso compartilhado do que importa mais.
- Facções se formam em torno de visões diferentes sobre o que a comunidade realmente é.

**Isso _não_ é o mesmo que** uma comunidade com um propósito claro servido por várias atividades. O sinal revelador é *propósitos primários concorrentes sem prioridade declarada* — então os trade-offs não têm resposta baseada em princípios e cada facção está "certa".

### Por que acontece

Dizer sim a cada objetivo válido parece generoso e inclusivo, então as comunidades acumulam propósitos mais rápido do que os aposentam. Mas quando dois propósitos entram em conflito — e eventualmente entrarão — não há como escolher sem um propósito primário declarado para classificá-los. O resultado é paralisia e facciosismo: cada grupo otimiza para um senso diferente, igualmente legítimo, do "para que servimos", e nenhuma decisão consegue satisfazer todos.

<details data-kind="rationale">
<summary>O stress test formal (para auditores)</summary>

**Modo de Falha** — A comunidade mantém múltiplos propósitos primários concorrentes sem prioridade declarada.

**Camadas Envolvidas** — Camada 0 (Identidade e Escopo)

**Invariantes Relevantes**

* 0.1 Propósito primário único
* 0.2 Escopo governado explícito

**Condição de Teste** — Dois propósitos declarados entram em conflito e não há base de princípios para resolver o trade-off.

**Comportamento RCOS Esperado** — Um único propósito primário classifica todos os outros; trade-offs são resolvidos por referência a ele.

**Critérios de Aprovação** — Conflitos de propósito têm uma resolução baseada em princípios.

**Critérios de Reprovação** — Prioridades são irreconciliáveis e faccionais.

</details>

### Quão madura é sua comunidade nisso?

Aprovado/reprovado é grosseiro demais para a vida real — a maioria das comunidades está parcialmente no caminho. Encontre seu degrau, depois mire no próximo.

| Nível | Como se parece |
|---|---|
| **L0 — Implícito** | Múltiplos propósitos coexistem sem classificação; conflitos não têm resolução baseada em princípios. |
| **L1 — Nomeado** | O grupo vê o desvio mas não declarou um propósito primário. |
| **L2 — Documentado** | Uma [Carta de Propósito](/articles/rcos-templates/layer-0/purpose-charter) nomeia um único propósito primário; outros objetivos são explicitamente secundários. |
| **L3 — Aplicado e ensaiado** | Trade-offs são resolvidos por referência ao propósito primário; novas direções são testadas em relação a ele. |

A maioria das comunidades que se reconhece aqui está em **L0 ou L1**. O objetivo não é a perfeição — é subir um degrau.

### Como o RCOS previne isso

O RCOS exige um único propósito primário que possa desempatar:

- **[Carta de Propósito](/articles/rcos-templates/layer-0/purpose-charter)** — declare o único propósito primário que classifica todos os outros.
- **[Declaração de Escopo](/articles/rcos-templates/layer-0/scope-declaration)** — declare o que está dentro e fora de escopo, para que adições sejam deliberadas.
- **[Registro de Restrições de Identidade](/articles/rcos-templates/layer-0/identity-constraints-register)** — defina o que a comunidade é e o que não é.

Veja também a especificação: [Camada 0 — Definição de Propósito](/articles/rcos-core/v0-1/layer-0-identity-scope#21-purpose-definition) e [Declaração de Escopo](/articles/rcos-core/v0-1/layer-0-identity-scope#22-scope-declaration).

### Se já está acontecendo

Se você derivou para propósitos demais, reclassifique em vez de amputar:

1. **Traga as respostas reais à tona.** Peça que cada um escreva em privado qual acha que é o propósito primário; a dispersão é o diagnóstico.
2. **Declare um propósito primário.** Você pode manter os objetivos secundários — apenas classifique-os abaixo dele.
3. **Use-o para arbitrar o conflito em curso** que motivou isso, e deixe que isso defina o precedente.

### O que essa falha tende a desencadear

- **[Normalização da Evitação de Conflito](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — conflitos de propósito irreconciliáveis são grandes demais para serem levantados, então são evitados.
- **[Tomada de Decisão por Panelinha Informal](/articles/rcos-stress-tests/governance-power/informal-clique-decision-making)** — facções se formam em torno de visões concorrentes.

### Stress tests relacionados

- **[Teste de Escopo de Violação de Norma Cultural](/articles/rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test)** — ambos são falhas de escopo: propósito pouco claro e escopo governado pouco claro andam juntos.
