---
id: 8c2d5f13
title: Burnout do Trabalho Invisível de Cuidado
summary: >-
  Quando a comunidade funciona graças ao cuidado não remunerado de uns poucos
  silenciosamente exaustos.
parentId: a9e4c65d
order: 0
severity: high
stage:
  - growth
  - mature
layers:
  - 3
  - 5
invariants:
  - '3.3'
  - '5.3'
remediationReady: true
tags:
  - 'Camada 5: Operações'
  - Severidade alta
symptoms:
  - >-
    Uma ou duas pessoas sustentam a vida emocional da comunidade — e estão
    exaustas.
  - >-
    O trabalho de cuidado (acolher, mediar, hospedar, receber recém-chegados) é
    essencial, mas invisível e não compensado.
  - 'Se uma pessoa específica saísse, o tecido social se romperia.'
  - >-
    Esse trabalho nunca aparece em nenhum papel, orçamento ou sistema de
    reconhecimento.
  - >-
    As pessoas que o realizam estão silenciosamente ressentidas, ou perto de
    partir.
preventsWith:
  - rcos-templates/layer-5/role-registry
  - rcos-templates/layer-3/internal-economy-protocol
  - rcos-templates/layer-5/operations-manual
cascade:
  - test: >-
      rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
    relation: enables
    note: >-
      A pessoa sem a qual a comunidade não consegue funcionar se torna
      estruturalmente indispensável e sem prestação de contas.
related:
  - >-
    rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution
lang: pt-br
sourceHash: 89ca71da
---

> **Severidade:** Alta — invisível até que a pessoa que carrega tudo entre em burnout ou parta, e então se torna existencial.
> **Onde ataca:** Estágios de crescimento e maturidade, depois que a carga relacional se acumulou.
> **Já está vivendo isso?** Pule para [Se já está acontecendo](#if-its-already-happening).

### Soa familiar?

Existe uma pessoa — talvez duas — que silenciosamente sustentam tudo. Elas percebem quando alguém está em dificuldade, suavizam os conflitos, hospedam os jantares, lembram dos aniversários, recebem os recém-chegados. Nada disso está na descrição do trabalho delas, porque não existe descrição de trabalho. A comunidade parece acolhedora e conectada, e quase ninguém percebe que esse calor está sendo gerado por algumas poucas pessoas que estão funcionando no vazio — até que uma delas, finalmente esgotada, dê um passo atrás ou parta, e todo o tecido social se rompa.

### Sinais de que isso está acontecendo com você

- Uma ou duas pessoas sustentam a vida emocional da comunidade — e estão exaustas.
- O trabalho de cuidado é essencial, mas invisível e não compensado.
- Se uma pessoa específica saísse, o tecido social se romperia.
- Esse trabalho nunca aparece em nenhum papel, orçamento ou sistema de reconhecimento.
- As pessoas que o realizam estão silenciosamente ressentidas, ou perto de partir.

**Isso _não_ é o mesmo que** pessoas oferecendo livremente um cuidado que consideram significativo. O sinal é a *dependência estrutural* — a comunidade quebraria sem trabalho invisível que ninguém nomeou, delimitou ou reconheceu.

### Por que acontece

O trabalho de cuidado e o trabalho emocional são fáceis de não-ver justamente porque previnem problemas em vez de produzir resultados visíveis. Como raramente é nomeado ou reconhecido, ele se acumula sobre quem é mais sensível — normalmente as mesmas poucas pessoas — até que entrem em burnout. A dependência é estrutural mesmo quando a entrega é voluntária: o sistema depende disso, mas o sistema nunca reconhece.

<details data-kind="rationale">
<summary>O teste de estresse formal (para auditores)</summary>

**Modo de Falha** — Certos membros carregam uma carga desproporcional de trabalho emocional ou de cuidado.

**Camadas Envolvidas** — Camada 3 (Economia), Camada 5 (Operações)

**Invariantes Relevantes**

* 3.3 O reconhecimento de contribuições é explícito
* 5.3 Tempo e atenção são recursos finitos

**Condição do Teste** — O trabalho de cuidado é essencial, mas não documentado e não compensado.

**Comportamento RCOS Esperado** — O trabalho de cuidado é reconhecido, reduzido ou redistribuído.

**Critérios de Aprovação** — Nenhuma dependência estrutural de trabalho invisível.

**Critérios de Reprovação** — O burnout é normalizado.

</details>

### Quão madura é sua comunidade nesse aspecto?

Aprovado/reprovado é binário demais para a vida real — a maioria das comunidades está em algum meio-termo. Encontre seu degrau e mire no próximo.

| Nível | Como se parece |
|---|---|
| **L0 — Implícito** | O trabalho de cuidado é invisível, sem nome, e é carregado por alguns poucos por padrão. |
| **L1 — Nomeado** | O grupo reconhece que certas pessoas estão sobrecarregadas, mas não reconheceu nem redistribuiu o trabalho. |
| **L2 — Documentado** | As responsabilidades de cuidado são [papéis](/articles/rcos-templates/layer-5/role-registry) nomeados, reconhecidos como contribuição e delimitados por limites de carga. |
| **L3 — Aplicado e ensaiado** | Nenhuma dependência estrutural de trabalho invisível; o trabalho de cuidado é reconhecido, delimitado e rotacionado; limites de capacidade são respeitados. |

A maioria das comunidades que se reconhecem aqui está em **L0 ou L1**. O objetivo não é a perfeição — é subir um degrau.

### Como o RCOS previne isso

O RCOS torna o trabalho invisível visível, delimitado e compartilhado:

- **[Registro de Papéis](/articles/rcos-templates/layer-5/role-registry)** — nomeie as responsabilidades de cuidado e relacionais como papéis reais, com rotação e limites.
- **[Protocolo de Economia Interna](/articles/rcos-templates/layer-3/internal-economy-protocol)** — reconheça o cuidado como contribuição, para que seja visível e valorizado em vez de presumido.
- **[Manual de Operações](/articles/rcos-templates/layer-5/operations-manual)** — delimite a carga de trabalho para que o trabalho essencial não recaia silenciosamente sobre uma única pessoa.

Veja também a especificação: [Camada 5 — Limites de Carga de Trabalho e Capacidade](/articles/rcos-core/v0-1/layer-5-operations-coordination#74-workload-and-capacity-boundaries) e [Camada 3 — Reconhecimento de Contribuições](/articles/rcos-core/v0-1/layer-3-economic-resource-system#52-contribution-recognition).

### Se já está acontecendo

Se sua comunidade está funcionando com base nas últimas forças de alguém, aja antes que essa pessoa parta:

1. **Torne visível.** Liste o trabalho de cuidado que de fato acontece e quem o faz. Nomear é metade da solução.
2. **Reconheça agora.** Valorize-o explicitamente como contribuição; é o trabalho invisível que esgota as pessoas.
3. **Redistribua e delimite.** Rotacione os papéis e estabeleça limites de capacidade antes que a pessoa-chave atinja seu limite.
4. **Observe a cascata** — a pessoa cuidadora indispensável também está acumulando poder invisível e uma saída motivada por burnout.

### O que essa falha tende a desencadear

- **[Poder Invisível via Responsabilidades](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — a pessoa sem a qual a comunidade não consegue funcionar se torna estruturalmente indispensável e sem prestação de contas.

### Testes de estresse relacionados

- **[Autossuficiência Sem Contribuição Coletiva](/articles/rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution)** — a imagem espelhada: quando a maioria dos membros se desengaja, os poucos que se engajam são os que entram em burnout.
