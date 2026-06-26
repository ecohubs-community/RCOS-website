---
id: b6d1a3e9
title: Invariantes Centrais Desprotegidas
summary: >-
  Quando as promessas fundadoras podem ser desfeitas por uma única votação
  comum.
parentId: 6acde7a7
order: 1
severity: high
stage:
  - growth
  - mature
layers:
  - 0
  - 6
invariants:
  - '0.4'
  - '6.1'
remediationReady: true
tags:
  - 'Layer 0: Scope'
  - High severity
symptoms:
  - >-
    Os compromissos fundadores da comunidade (a terra permanece como bem comum,
    sem líder único) podem ser alterados por uma maioria simples comum.
  - Não há distinção entre regras do dia a dia e regras constitucionais.
  - >-
    Uma maioria transitória poderia reescrever o núcleo da comunidade em uma
    única reunião.
  - Não existe uma lista das coisas que deveriam ser inalteráveis.
  - >-
    As pessoas presumem que os princípios fundadores estão seguros, mas nada os
    protege estruturalmente.
preventsWith:
  - rcos-templates/layer-0/invariants-register
  - rcos-templates/layer-6/change-protocol
  - rcos-templates/layer-2/governance-protocol
cascade:
  - test: >-
      rcos-stress-tests/economy-resources/commons-privatization-through-land-sales
    relation: enables
    note: >-
      Se a proteção dos bens comuns for emendável como qualquer regra, ela pode
      ser votada para fora sob pressão.
  - test: rcos-stress-tests/governance-power/founder-informal-veto
    relation: enables
    note: >-
      Uma estrutura desprotegida permite que uma autoridade informal remodele as
      regras para se adequarem a si mesma.
related:
  - rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent
lang: pt-br
sourceHash: e54af999
---

> **Gravidade:** Alta — uma maioria transitória pode desmontar em uma única reunião aquilo sobre o qual a comunidade foi fundada.
> **Onde aperta:** Nas fases de crescimento e maturidade, conforme a composição da comunidade se renova e o consenso fundador se dissipa.
> **Já está vivendo isso?** Pule para [Se já está acontecendo](#se-ja-esta-acontecendo).

### Soa familiar?

A comunidade foi construída sobre alguns inegociáveis — a terra é mantida em comum, não há um único chefe, o lugar existe para X e não para lucro. Todo mundo concordou, então ninguém nunca se deu ao trabalho de tornar esses compromissos *mais difíceis de mudar* do que o cronograma das reuniões. Os anos passam, a composição da comunidade muda, chega uma estação estressante — e numa noite qualquer, pela mesma maioria simples usada para escolher uma cor de tinta, a própria fundação está em pauta. Nada a impede estruturalmente. As promessas "permanentes" se mostram exatamente tão duráveis quanto a próxima votação.

### Sinais de que isso está acontecendo com você

- Compromissos fundadores podem ser alterados por uma maioria simples comum.
- Não há distinção entre regras do dia a dia e regras constitucionais.
- Uma maioria transitória poderia reescrever o núcleo da comunidade em uma única reunião.
- Não existe uma lista das coisas que deveriam ser inalteráveis.
- As pessoas presumem que os princípios fundadores estão seguros, mas nada os protege estruturalmente.

**Isto _não é_ o mesmo que** ter um caminho de emenda deliberado e difícil para as invariantes centrais — uma barreira bem alta é saudável. O sinal de alerta é que *os compromissos fundadores não têm proteção especial alguma*: são emendáveis exatamente como o horário de uma reunião.

### Por que isso acontece

Nos primeiros tempos, todo mundo concorda com o núcleo, então protegê-lo parece desnecessário — por que guardar aquilo em que ninguém mexeria? Mas a composição muda, os humores se alteram, e uma maioria futura sob pressão pode silenciosamente esvaziar a fundação que fez da comunidade o que ela é. Sem invariantes protegidas, "permanente" é apenas um sentimento, e os compromissos mais importantes são os menos defendidos.

<details data-kind="rationale">
<summary>O teste de estresse formal (para auditores)</summary>

**Modo de Falha** — Invariantes fundadoras são emendáveis por processo comum.

**Camadas Envolvidas** — Camada 0 (Identidade e Escopo), Camada 6 (Evolução)

**Invariantes Relevantes**

* 0.4 Invariantes protegidas
* 6.1 A mudança é possível, mas restrita

**Condição de Teste** — Os compromissos centrais podem ser alterados pelo mesmo mecanismo das decisões cotidianas.

**Comportamento Esperado do RCOS** — As invariantes protegidas são nomeadas e carregam uma barreira de emenda alta e explícita, distinta das regras comuns.

**Critérios de Aprovação** — As invariantes centrais não podem ser alteradas por processo comum.

**Critérios de Reprovação** — Uma maioria transitória pode reescrever a fundação.

</details>

### Quão madura é sua comunidade nisso?

Aprovado/reprovado é grosseiro demais para a vida real — a maioria das comunidades está em algum lugar no meio do caminho. Encontre seu degrau e mire no próximo.

| Nível | Como se parece |
|---|---|
| **L0 — Implícito** | As regras centrais e cotidianas são igualmente emendáveis; a fundação não está protegida. |
| **L1 — Nomeado** | O grupo sabe que algumas regras deveriam ser mais difíceis de mudar, mas ainda não as separou. |
| **L2 — Documentado** | Um [Registro de Invariantes](/articles/rcos-templates/layer-0/invariants-register) nomeia as invariantes protegidas com uma barreira de emenda alta e explícita. |
| **L3 — Aplicado e ensaiado** | As invariantes centrais não podem ser alteradas por processo comum; a proteção resistiu a uma tentativa real de contorná-la. |

A maioria das comunidades que se reconhece aqui está em **L0 ou L1**. O objetivo não é a perfeição — é subir um degrau.

### Como o RCOS previne isso

O RCOS separa a mudança constitucional das decisões cotidianas:

- **[Registro de Invariantes](/articles/rcos-templates/layer-0/invariants-register)** — nomeie as invariantes protegidas e a barreira alta exigida para mudá-las.
- **[Protocolo de Mudança](/articles/rcos-templates/layer-6/change-protocol)** — defina um caminho distinto e mais difícil para mudanças constitucionais.
- **[Protocolo de Governança](/articles/rcos-templates/layer-2/governance-protocol)** — mantenha as regras constitucionais acima das decisões comuns.

Veja também a especificação: [Camada 0 — Invariantes](/articles/rcos-core/v0-1/layer-0-identity-scope#23-invariants) e [Camada 6 — Versionamento e Autoridade](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#82-versioning-and-authority).

### Se já está acontecendo

Se sua fundação está desprotegida, proteja-a antes que seja testada:

1. **Liste as coisas que jamais devem mudar silenciosamente** — a fundação de verdade.
2. **Estabeleça uma barreira de emenda alta** para elas — supermaioria, um período de espera, uma revisão — distinta das regras cotidianas.
3. **Ratifique o registro** para que a própria proteção fique registrada e não possa ser silenciosamente removida.

### O que essa falha tende a desencadear

- **[Privatização dos Bens Comuns por Meio da Venda de Terras](/articles/rcos-stress-tests/economy-resources/commons-privatization-through-land-sales)** — se a proteção dos bens comuns for emendável, ela pode ser votada para fora sob pressão.
- **[Veto Informal do Fundador](/articles/rcos-stress-tests/governance-power/founder-informal-veto)** — uma estrutura desprotegida permite que uma autoridade informal remodele as regras.

### Testes de estresse relacionados

- **[Precedente de Contorno de Regra em Emergência](/articles/rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent)** — a outra forma pela qual a constituição se erode: não emendada abertamente, mas contornada sob urgência.
