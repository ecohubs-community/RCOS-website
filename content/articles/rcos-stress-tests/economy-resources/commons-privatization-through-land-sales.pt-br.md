---
id: 1afbg1a7
title: Privatização dos Bens Comuns pela Venda de Terras
summary: >-
  Quando vender a terra aos membros silenciosamente torna impossível sair da
  comunidade de forma justa.
parentId: cbd2804b
order: 0
severity: high
stage:
  - growth
  - mature
layers:
  - 0
  - 3
  - 1
invariants:
  - '0.2'
  - '3.2'
  - '1.2'
remediationReady: true
tags:
  - 'Layer 3: Economy'
  - High severity
symptoms:
  - >-
    A comunidade está considerando (ou já começou) vender lotes ou unidades para
    membros individuais.
  - '"É mais simples se cada um for dono do seu pedaço" está ganhando força.'
  - >-
    Não existe regra escrita sobre revenda, avaliação de saída ou o que
    permanece como bem comum.
  - >-
    Membros que contribuíram financeiramente não conseguem sair sem perder
    dinheiro ou direitos.
  - >-
    Invariantes declaradas sobre a terra comum silenciosamente entram em
    conflito com o que está realmente acontecendo.
preventsWith:
  - rcos-templates/layer-3/treasury-ruleset
  - rcos-templates/layer-3/internal-economy-protocol
  - rcos-templates/layer-1/exit-protocol
  - rcos-templates/layer-0/invariants-register
cascade:
  - test: >-
      rcos-stress-tests/economy-resources/outsourced-labor-bypassing-contribution
    relation: enables
    note: >-
      Once members privately own their piece, treating shared obligations as
      optional follows naturally.
related:
  - rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent
lang: pt-br
sourceHash: b6dc6124
---

> **Severidade:** Alta — uma das poucas falhas que pode encerrar o projeto estruturalmente, e muitas vezes de forma irreversível.
> **Onde aperta:** Estágios de crescimento e maturidade, geralmente sob pressão financeira.
> **Já está vivendo isso?** Pule para [Se já está acontecendo](#if-its-already-happening).

### Soa familiar?

O dinheiro está apertado, ou um membro quer a segurança de realmente *ser dono* da sua casa, e alguém diz aquela coisa que parece sensata: seria mais simples se cada um comprasse seu próprio lote. Isso resolve o problema de caixa. Parece justo. E silenciosamente, com esse único passo pragmático, a terra que deveria ser mantida em comum começa a se converter em propriedade privada — e a promessa de que qualquer pessoa pode entrar, e qualquer pessoa pode sair, sem ficar financeiramente presa, começa a se dissolver.

### Sinais de que isso está acontecendo com você

- A comunidade está considerando (ou já começou) vender lotes ou unidades para membros individuais.
- "É mais simples se cada um for dono do seu pedaço" está ganhando força.
- Não existe regra escrita sobre revenda, avaliação de saída ou o que permanece como bem comum.
- Membros que contribuíram financeiramente não conseguem sair sem perder dinheiro ou direitos.
- Invariantes declaradas sobre a terra comum silenciosamente entram em conflito com o que está realmente acontecendo.

**Isto _não é_ o mesmo que** um modelo de posse mista deliberadamente projetado, com fronteiras explícitas e pré-acordadas entre bens comuns/privados e termos de saída. O sinal é *a privatização que contradiz as próprias invariantes declaradas da comunidade*, decidida de forma ad hoc, sem regras de revenda e saída já estabelecidas.

### Por que isso acontece

A terra é o maior ativo e a pressão mais difícil de resistir — a propriedade individual parece mais segura, o financiamento é mais fácil, e uma venda resolve hoje uma necessidade de caixa de curto prazo. Mas, uma vez que os bens comuns se tornam privados por meio de ação informal, os direitos de saída e as proteções constitucionais se desgastam, e a mudança geralmente é irreversível. Este é um dos poucos testes de estresse em que falhar pode encerrar estruturalmente a comunidade.

<details data-kind="rationale">
<summary>O teste de estresse formal (para auditores)</summary>

**Modo de Falha** — A comunidade vende terras para membros, comprometendo as regras de saída e constitucionais.

**Camadas Envolvidas** — Camada 0 (Escopo e Invariantes), Camada 3 (Economia), Camada 1 (Associação)

**Invariantes Relevantes**

* 0.2 Escopo governado explícito
* 3.2 Proteção dos bens comuns
* 1.2 A saída DEVE ser possível

**Condição do Teste** — Mudanças na propriedade de ativos contradizem invariantes declaradas; membros não conseguem sair sem perder direitos ou propriedade.

**Comportamento RCOS Esperado** — Vendas DEVEM ser bloqueadas ou governadas por regras pré-declaradas; condições de saída e revenda DEVEM existir *antes* da transferência.

**Critérios de Aprovação** — O status de bem comum e os direitos de saída permanecem intactos.

**Critérios de Falha** — A comunidade torna-se estruturalmente impossível de sair.

</details>

### Quão madura está sua comunidade nesse aspecto?

Aprovado/reprovado é grosseiro demais para a vida real — a maioria das comunidades está em algum ponto intermediário. Encontre o seu degrau e mire no próximo.

| Nível | Como se parece |
|---|---|
| **L0 — Implícito** | Fronteiras entre bens comuns e privados são presumidas, não escritas; vendas ad hoc são possíveis. |
| **L1 — Nomeado** | O grupo reconhece o risco, mas não tem regra vinculante protegendo os bens comuns ou governando a saída. |
| **L2 — Documentado** | Status de bem comum, condições de revenda e avaliação de saída estão escritos e ratificados *antes* de qualquer transferência. |
| **L3 — Aplicado e ensaiado** | Qualquer venda é bloqueada ou governada por regras pré-declaradas; a saída é sempre possível sem perder direitos; a proteção sobreviveu a um teste real de pressão financeira. |

A maioria das comunidades que se reconhece aqui está em **L0 ou L1**. O objetivo não é a perfeição — é subir um degrau.

### Como o RCOS previne isso

O RCOS protege os bens comuns e a saída *antes* que a pressão chegue:

- **[Regulamento da Tesouraria](/articles/rcos-templates/layer-3/treasury-ruleset)** + **[Protocolo de Economia Interna](/articles/rcos-templates/layer-3/internal-economy-protocol)** — declaram o que é bem comum versus privado e protegem os bens comuns da privatização informal.
- **[Protocolo de Saída](/articles/rcos-templates/layer-1/exit-protocol)** — garante que os termos de saída e revenda existam antes que alguém transfira qualquer coisa, para que ninguém fique preso.
- **[Registro de Invariantes](/articles/rcos-templates/layer-0/invariants-register)** — registra a proteção dos bens comuns como uma invariante protegida que não pode ser silenciosamente alterada.
- Exemplo trabalhado: a salvaguarda **[Anti-Privatização dos Bens Comuns de Terra](/articles/safeguards/land-commons-anti-privatization)**.

Veja também a especificação: [Camada 3 — Bens Comuns vs Recursos Privados](/articles/rcos-core/v0-1/layer-3-economic-resource-system#51-commons-vs-private-resources) e [Camada 1 — Saída e Separação](/articles/rcos-core/v0-1/layer-1-membership-system#36-exit-and-separation).

### Se já está acontecendo

Como a privatização é frequentemente irreversível, aja com cuidado e rapidez:

1. **Congele movimentos irreversíveis.** Pause qualquer venda pendente até que regras existam — a irreversibilidade é todo o perigo.
2. **Reafirme a invariante.** Confirme por escrito o que é bem comum e não pode ser privatizado por ação unilateral ou informal.
3. **Escreva os termos de saída e revenda antes de qualquer transferência,** para que ninguém fique preso e os bens comuns sobrevivam a uma partida.
4. **Se vendas já aconteceram,** busque ajuda jurídica para reconstruir a possibilidade de saída e cercar o que resta de bens comuns.

### O que essa falha tende a desencadear

- **[Trabalho Terceirizado Burlando a Contribuição](/articles/rcos-stress-tests/economy-resources/outsourced-labor-bypassing-contribution)** — uma vez que a terra é de propriedade privada, os membros podem tratar obrigações compartilhadas como opcionais e comprar sua saída delas.

### Testes de estresse relacionados

- **[Precedente de Burla de Regras em Emergência](/articles/rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent)** — uma crise financeira "urgente" é a cobertura clássica para uma venda apressada.
