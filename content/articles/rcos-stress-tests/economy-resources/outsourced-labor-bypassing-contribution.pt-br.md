---
id: 7b1c4e02
title: Trabalho Terceirizado Contornando a Contribuição
summary: Quando o dinheiro silenciosamente compra uma saída da vida comunitária.
parentId: cbd2804b
order: 1
severity: medium
stage:
  - growth
  - mature
layers:
  - 3
  - 1
  - 4
invariants:
  - '1.3'
  - '3.3'
  - '4.1'
remediationReady: true
tags:
  - 'Layer 3: Economy'
  - Medium severity
symptoms:
  - >-
    Um membro mais abastado paga terceiros para cobrir sua parte do trabalho
    comunitário.
  - >-
    Existem exigências de contribuição, mas são silenciosamente satisfeitas com
    dinheiro.
  - Ressentimento está crescendo entre quem aparece e quem assina cheques.
  - Não há regra acordada sobre se dinheiro pode substituir a participação.
  - >-
    Esforço e riqueza estão se tornando intercambiáveis sem que ninguém tenha
    decidido que deveriam ser.
preventsWith:
  - rcos-templates/layer-3/internal-economy-protocol
  - rcos-templates/layer-1/membership-agreement
  - rcos-templates/layer-4/accountability-protocol
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: feeds
    note: >-
      O ressentimento entre participação e pagamento é exatamente o tipo de
      conflito que é evitado até endurecer em linhas de classe.
related:
  - >-
    rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution
  - rcos-stress-tests/economy-resources/commons-privatization-through-land-sales
lang: pt-br
sourceHash: eb16b79a
---

> **Gravidade:** Média — corrosivo em vez de catastrófico, mas estratifica silenciosamente a comunidade.
> **Onde dói:** Estágios de crescimento e maturidade, assim que a riqueza dos membros começa a divergir.
> **Já está vivendo isso?** Pule para [Se já está acontecendo](#if-its-already-happening).

### Soa familiar?

A comunidade espera que todos ajudem no trabalho compartilhado — os mutirões de construção, a colheita, os reparos. Um membro, mais ocupado ou mais abastado que os demais, começa a pagar um empreiteiro para cobrir sua parte. É eficiente. O trabalho ainda é feito. Mas as pessoas que aparecem com as próprias mãos começam a notar que, para alguns membros, pertencer é algo que se pode simplesmente comprar, e um ressentimento silencioso começa a separar quem participa de quem paga.

### Sinais de que isso está acontecendo com você

- Um membro mais abastado paga terceiros para cobrir sua parte do trabalho comunitário.
- Existem exigências de contribuição, mas são silenciosamente satisfeitas com dinheiro.
- Ressentimento está crescendo entre quem aparece e quem assina cheques.
- Não há regra acordada sobre se dinheiro pode substituir a participação.
- Esforço e riqueza estão se tornando intercambiáveis sem que ninguém tenha decidido que deveriam ser.

**Isso _não_ é o mesmo que** uma comunidade que acordou explicitamente que dinheiro pode substituir o trabalho (uma equivalência declarada). O indício é *contornar sem acordo* — existem expectativas de contribuição, mas a riqueza as substitui silenciosamente.

### Por que isso acontece

Quando a contribuição é esperada, mas sua relação com o dinheiro fica indefinida, as pessoas que podem pagar irão pagar — é racional e fácil. Sem ser tratado, isso converte riqueza em uma isenção da vida comunitária, estratificando silenciosamente os membros entre os que participam e os que compram sua saída, e corroendo a simetria entre direitos e obrigações sobre a qual a participação deveria se apoiar.

<details data-kind="rationale">
<summary>O teste de estresse formal (para auditores)</summary>

**Modo de Falha** — Um membro evita contribuir e contrata mão de obra externa em seu lugar.

**Camadas Envolvidas** — Camada 3 (Economia), Camada 1 (Participação), Camada 4 (Responsabilização)

**Invariantes Relevantes**

* 1.3 Simetria entre direitos e obrigações
* 3.3 Reconhecimento da contribuição é explícito
* 4.1 Conflito DEVE ser tratado

**Condição do Teste** — Existem expectativas de contribuição, mas são contornadas via dinheiro.

**Comportamento Esperado do RCOS** — Determinar se a terceirização é permitida; aplicar regras de equivalência ou acionar um processo de responsabilização.

**Critérios de Aprovação** — A lógica de contribuição é aplicada consistentemente.

**Critérios de Reprovação** — Riqueza substitui participação sem acordo.

</details>

### Quão madura é sua comunidade nisso?

Aprovado/reprovado é simples demais para a vida real — a maioria das comunidades está em algum ponto intermediário. Encontre seu degrau e mire no próximo.

| Nível | Como se parece |
|---|---|
| **L0 — Implícito** | Não está definido se dinheiro pode substituir a participação; as pessoas silenciosamente compram sua saída. |
| **L1 — Nomeado** | A tensão é reconhecida, mas não existe regra de equivalência ou caminho de responsabilização. |
| **L2 — Documentado** | O [Protocolo de Economia Interna](/articles/rcos-templates/layer-3/internal-economy-protocol) declara se e como o dinheiro substitui o trabalho; o [Acordo de Participação](/articles/rcos-templates/layer-1/membership-agreement) vincula obrigações a direitos. |
| **L3 — Aplicado e ensaiado** | A lógica de contribuição é aplicada consistentemente; um desvio aciona a regra de equivalência acordada ou um processo de responsabilização — e já acionou. |

A maioria das comunidades que se reconhece aqui está em **L0 ou L1**. O objetivo não é a perfeição — é subir um degrau.

### Como o RCOS previne isso

O RCOS força a comunidade a *decidir* a relação entre dinheiro e trabalho em vez de deixá-la no modo padrão:

- **[Protocolo de Economia Interna](/articles/rcos-templates/layer-3/internal-economy-protocol)** — decida explicitamente se o dinheiro pode substituir o trabalho e em que equivalência.
- **[Acordo de Participação](/articles/rcos-templates/layer-1/membership-agreement)** — vincule as obrigações de contribuição aos direitos de participação, para que participar não seja opcional-por-riqueza.
- **[Protocolo de Responsabilização](/articles/rcos-templates/layer-4/accountability-protocol)** — um caminho definido para quando as expectativas são contornadas.

Veja também a especificação: [Camada 3 — Reconhecimento da Contribuição](/articles/rcos-core/v0-1/layer-3-economic-resource-system#52-contribution-recognition) e [Camada 1 — Direitos e Obrigações](/articles/rcos-core/v0-1/layer-1-membership-system#34-rights-and-obligations).

### Se já está acontecendo

Decida a regra antes que o ressentimento se torne uma linha de classe:

1. **Nomeie a lacuna na regra.** Decidam, em conjunto, se a terceirização é permitida — e em que termos.
2. **Estabeleça uma equivalência (ou proíba a substituição)** para que a resposta seja consistente, não negociada caso a caso.
3. **Aborde o ressentimento diretamente** pelo caminho da responsabilização ou do conflito antes que endureça.

### O que essa falha tende a desencadear

- **[Normalização da Evitação de Conflitos](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — o ressentimento entre participação e pagamento é exatamente o tipo de conflito que um grupo evita até virar algo estrutural.

### Testes de estresse relacionados

- **[Autossuficiência Sem Contribuição Coletiva](/articles/rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution)** — o primo do desengajamento: aqui as pessoas compram sua saída da contribuição, lá elas simplesmente optam por não participar.
- **[Privatização dos Bens Comuns por Meio de Vendas de Terras](/articles/rcos-stress-tests/economy-resources/commons-privatization-through-land-sales)** — o mesmo desacoplamento entre riqueza e obrigação compartilhada, no nível da terra.
