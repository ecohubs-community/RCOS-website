---
id: d2f7a4e9
title: Autossuficiência sem contribuição coletiva
summary: 'Quando todo mundo desfruta do bem comum, mas quase ninguém o mantém.'
parentId: a9e4c65d
order: 3
severity: high
stage:
  - growth
  - mature
layers:
  - 1
  - 5
  - 3
invariants:
  - '1.3'
  - '3.3'
  - '5.3'
remediationReady: true
tags:
  - Contribution & engagement
  - High severity
symptoms:
  - 'As mesmas poucas pessoas organizam cada mutirão, reunião e reparo.'
  - >-
    Chamados para ajudar em tarefas coletivas recebem concordância calorosa, mas
    pouca gente realmente aparece.
  - >-
    Os membros são altamente capazes em seus próprios lotes, mas raramente
    aparecem em projetos coletivos.
  - >-
    "Alguém realmente deveria…" é dito com frequência; "Eu vou" é dito
    raramente.
  - 'Não está claro o que se espera, de fato, que cada membro contribua.'
preventsWith:
  - rcos-templates/layer-1/membership-agreement
  - rcos-templates/layer-5/role-registry
  - rcos-templates/layer-3/internal-economy-protocol
  - rcos-templates/layer-1/onboarding-protocol
cascade:
  - test: >-
      rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
    relation: enables
    note: >-
      Quando apenas uns poucos comprometidos tocam o trabalho coletivo, eles
      acumulam influência informal e sem prestação de contas sobre o
      funcionamento da comunidade.
  - test: rcos-stress-tests/operations-coordination/invisible-care-labor-burnout
    relation: feeds
    note: >-
      O núcleo encolhido absorve cada vez mais trabalho não remunerado — a
      imagem espelhada deste teste: poucos engajados significa que quem está
      sobrecarregado.
related:
  - rcos-stress-tests/economy-resources/outsourced-labor-bypassing-contribution
lang: pt-br
sourceHash: 47f76c03
---

> **Severidade:** Alta — raramente é uma crise em um único dia, mas uma erosão lenta que paralisa a comunidade e silenciosamente esgota os poucos que a carregam.
> **Onde aperta:** Geralmente quando a novidade fundadora se esvai — nos estágios de crescimento e maturidade — embora as sementes sejam plantadas na entrada.
> **Já está vivendo isso?** Pule para [Se já está acontecendo](#se-ja-esta-acontecendo).

### Soa familiar?

Todo mundo aqui vive bem. As pessoas cuidam de suas próprias hortas, consertam suas próprias casas, vivem de forma leve e capaz. Os valores compartilhados são reais — todo mundo *acredita* no bem comum, na floresta de alimentos, na visão coletiva. E, ainda assim, o mutirão tem sempre as mesmas seis pessoas de sempre. A reunião para planejar a estação tem pouca presença. A infraestrutura compartilhada se degrada lentamente, não porque alguém se opõe, mas porque mantê-la não é tarefa de ninguém em particular. A comunidade é cheia de gente autossuficiente e está lentamente passando fome de esforço coletivo.

### Sinais de que isso está acontecendo com você

- As mesmas poucas pessoas organizam cada mutirão, reunião e reparo.
- Chamados para ajudar em tarefas coletivas recebem concordância calorosa, mas pouca gente realmente aparece.
- Os membros são altamente capazes em seus próprios lotes, mas raramente aparecem em projetos coletivos.
- "Alguém realmente deveria…" é dito com frequência; "Eu vou" é dito raramente.
- Não está claro o que se espera, de fato, que cada membro contribua — e ninguém quer perguntar.

**Isto _não_ é o mesmo que** uma comunidade que *deliberadamente* minimizou as obrigações compartilhadas — digamos, um projeto de co-housing que, por desenho, compartilha apenas terra e infraestrutura. A pista aqui é uma **lacuna entre os objetivos compartilhados declarados e a contribuição real**: pessoas que dizem querer um bem comum próspero, mas não o sustentam com recursos. Baixo comprometimento *por desenho* é uma escolha válida; baixo comprometimento *apesar da ambição compartilhada* é a falha.

### Por que acontece

Pessoas autossuficientes conseguem atender à maioria das próprias necessidades, então o impulso cotidiano de contribuir coletivamente é fraco — o bem comum parece um pano de fundo, não uma responsabilidade. Quando as expectativas de contribuição nunca são explicitadas, o bem comum se torna um *bem gratuito*: todos consomem, ninguém é obrigado a manter, e a conservação cai silenciosamente sobre quem mais se importa. *Valores* compartilhados fazem todo mundo se sentir alinhado, o que mascara a ausência de *compromisso* compartilhado. Como nada é, de fato, devido, a contribuição roda em humor e boa vontade — e boa vontade não escala nem sobrevive a uma estação ruim.

<details data-kind="rationale">
<summary>O teste de estresse formal (para auditores)</summary>

**Modo de Falha** — Os membros vivem de forma sustentável e desfrutam do bem comum, mas raramente contribuem para responsabilidades compartilhadas ou objetivos coletivos. Valores compartilhados existem, mas compromisso compartilhado não.

**Camadas Envolvidas** — Camada 1 (Associação), Camada 5 (Operações), Camada 3 (Economia)

**Invariantes Relevantes**

* 1.3 Simetria direitos–obrigações
* 3.3 O reconhecimento da contribuição é explícito
* 5.3 Tempo e atenção são recursos finitos

**Condição de Teste** — Os membros se beneficiam do bem comum e do estilo de vida compartilhado enquanto o trabalho coletivo fica sem ser feito; as expectativas de contribuição são fracas, não declaradas ou deixadas à boa vontade; o mesmo pequeno núcleo sustenta e desenvolve a comunidade enquanto a maioria se desengaja.

**Comportamento Esperado do RCOS** — As expectativas de contribuição são explicitadas e vinculadas aos direitos de associação; as responsabilidades coletivas são vinculadas a papéis e rastreadas; a não-contribuição persistente aciona uma revisão definida.

**Critérios de Aprovação** — As responsabilidades compartilhadas se sustentam sem depender de uma minoria comprometida, e os direitos e obrigações permanecem simétricos entre os membros.

**Critérios de Reprovação** — Os benefícios se desacoplam da contribuição; a manutenção depende de um núcleo encolhido até paralisar ou colapsar.

</details>

### Quão madura está a sua comunidade nisso?

Aprovado/Reprovado é grosseiro demais para a vida real — a maioria das comunidades está em algum ponto intermediário. Encontre seu degrau e mire no próximo.

| Nível | Como se parece |
|---|---|
| **L0 — Implícito** | Presume-se que a contribuição "acontece naturalmente". Ninguém declara o que se espera, e uns poucos silenciosos carregam o resto. |
| **L1 — Nomeado** | O grupo admite abertamente que o engajamento é desigual e fala sobre isso, mas as expectativas permanecem informais e não aplicadas. |
| **L2 — Documentado** | As expectativas de contribuição estão escritas no [Acordo de Associação](/articles/rcos-templates/layer-1/membership-agreement), e o trabalho coletivo recorrente existe como papéis nomeados. Os membros sabem com o que se comprometeram. |
| **L3 — Aplicado e ensaiado** | A contribuição é rastreada e reconhecida; a carga é visivelmente compartilhada e reequilibrada ao longo do tempo; a não-contribuição persistente aciona uma revisão definida em vez de ressentimento silencioso. |

A maioria das comunidades que se reconhece neste teste fica em **L0 ou L1**. O objetivo não é perfeição — é subir um degrau.

### Como o RCOS previne isso

O RCOS substitui "esperamos que as pessoas colaborem" por compromisso explícito e simétrico. Construa estes **antes** que o desengajamento se torne a norma:

- **[Acordo de Associação](/articles/rcos-templates/layer-1/membership-agreement)** — vincule expectativas concretas de contribuição aos direitos de associação, para que desfrutar do bem comum e mantê-lo façam parte do mesmo acordo (Invariante 1.3, [direitos e obrigações](/articles/rcos-core/v0-1/layer-1-membership-system#34-rights-and-obligations)).
- **[Registro de Papéis](/articles/rcos-templates/layer-5/role-registry)** — transforme o trabalho coletivo recorrente em papéis nomeados e com donos, em vez de deixá-lo para quem perceber.
- **[Protocolo de Economia Interna](/articles/rcos-templates/layer-3/internal-economy-protocol)** — defina o que conta como contribuição e reconheça isso (créditos, reputação), de modo que a participação seja visível e valorizada ([reconhecimento de contribuição](/articles/rcos-core/v0-1/layer-3-economic-resource-system#52-contribution-recognition)).
- **[Protocolo de Acolhimento](/articles/rcos-templates/layer-1/onboarding-protocol)** — estabeleça a norma de contribuição na entrada, antes que o padrão de desengajamento tenha chance de se formar.

### Se já está acontecendo

Se o bem comum já está rodando em um núcleo encolhido, você não pode "prevenir" isso — você reequilibra. Triagem, em ordem:

1. **Torne a carga visível.** Faça uma auditoria rápida de contribuição: quem está, de fato, carregando o trabalho coletivo agora? O objetivo não é culpar — são dados compartilhados que encerram a ficção polida de que todos colaboram igualmente.
2. **Converta dependências frágeis em papéis.** Comece pelo que quebra se uma pessoa sai e dê a isso um [papel](/articles/rcos-templates/layer-5/role-registry) nomeado, com um suplente.
3. **Renegocie expectativas abertamente, com consentimento.** Adicione expectativas explícitas de contribuição ao [Acordo de Associação](/articles/rcos-templates/layer-1/membership-agreement) daqui para frente — um acordo transparente vence o ressentimento silencioso.
4. **Reconheça a contribuição existente em alto e bom som.** As pessoas se reengajam quando o esforço é *visto*; um [Protocolo de Economia Interna](/articles/rcos-templates/layer-3/internal-economy-protocol) torna esse reconhecimento sistemático em vez de dependente de gratidão.
5. **Observe a cascata** (abaixo) — seu núcleo comprometido já está a caminho do esgotamento e de um poder informal acidental.

### O que essa falha tende a desencadear

O engajamento coletivo fraco raramente fica contido. Ele produz silenciosamente duas falhas a jusante:

- **[Poder Invisível via Responsabilidades](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — quando apenas uns poucos comprometidos tocam o trabalho coletivo, eles acumulam influência informal e sem prestação de contas sobre o funcionamento da comunidade.
- **[Esgotamento por Trabalho de Cuidado Invisível](/articles/rcos-stress-tests/operations-coordination/invisible-care-labor-burnout)** — a imagem espelhada deste teste: poucos engajados significa que o núcleo encolhido absorve cada vez mais trabalho não remunerado até se esgotar.

### Testes de estresse relacionados

- **[Trabalho Terceirizado Contornando a Contribuição](/articles/rcos-stress-tests/economy-resources/outsourced-labor-bypassing-contribution)** — o primo monetário: as expectativas de contribuição existem, mas são contornadas pela contratação externa, enquanto aqui são contornadas pelo desengajamento. O mesmo elo quebrado entre benefício e contribuição.
