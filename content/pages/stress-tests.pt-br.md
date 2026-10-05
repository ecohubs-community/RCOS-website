---
id: 6acbe9a7
title: Testes de Estresse do RCOS
parentId: null
order: 7
lang: pt-br
sourceHash: fed16d4b
---

## O que são os Testes de Estresse

Os Testes de Estresse do RCOS são **cenários reais de falha** — situações que comunidades realmente viveram — formalizados como casos de teste que a especificação RCOS precisa suportar. Cada teste descreve um modo concreto de falha, as camadas que ele toca, os invariantes que ele estressa e a resposta estrutural que o RCOS espera.

Um teste de estresse responde a uma única pergunta:

> *Se isso acontecesse em uma comunidade usando RCOS, o sistema absorveria — ou o sistema teria que ser contornado?*

Se o RCOS conseguir sobreviver ao cenário sem correções informais, o teste **passa**. Se não conseguir, o teste **falha** — e um teste que falha aponta para uma lacuna real no framework que versões futuras precisam fechar. Os testes de estresse são como o RCOS se mantém honesto: a especificação só é tão forte quanto as falhas contra as quais foi testada.

## Como Usá-los

- Como um **check de design** — leia antes de fundar uma comunidade para antecipar o que pode dar errado.
- Como uma **ferramenta de auditoria** — percorra-os com um grupo existente e perceba para quais cenários você não tem resposta.
- Como um **apoio em conflitos** — quando algo quebra, encontre o teste relevante e siga o comportamento esperado em vez de improvisar.
- Como um **vocabulário compartilhado** para nomear padrões de falha sem culpar indivíduos.

## Ferramentas

Duas ferramentas complementares tornam a biblioteca mais fácil de aplicar:

- **[Autoavaliação](/toolkit/self-assessment)** — marque os sinais de alerta que parecem familiares e veja de quais testes de estresse sua comunidade está mais próxima, ordenados por urgência, cada um vinculado às estruturas que o previnem. Tudo fica no seu navegador.
- **[Guia de Facilitação](/toolkit/facilitation-worksheet)** — como conduzir um teste de estresse como sessão em grupo: uma planilha passo a passo que transforma qualquer teste em uma conversa de 60 a 90 minutos que termina com um próximo passo concreto.

## O que Esses Testes Não Conseguem Fazer

O RCOS é um framework **estrutural**, e esses testes herdam seus limites. Declará-los abertamente faz parte de manter a honestidade:

- **Eles tornam o manejo explícito; eles não fazem o manejo.** Um teste pode dizer que o conflito precisa entrar em um processo definido — mas não pode ter a conversa difícil por você, nem fornecer a coragem, o cuidado e a boa vontade que esse processo precisa para realmente funcionar.
- **Eles não curam pessoas.** A estrutura pode impedir que o dano seja ignorado ou escondido, mas não resolve trauma, não reconstrói confiança rompida, nem substitui mediação, terapia ou tempo. O RCOS abre espaço para esse trabalho; ele não é esse trabalho.
- **Eles não fabricam relacionamentos.** Nenhum protocolo cria calor humano, química ou pertencimento. Os testes podem proteger essas coisas da erosão estrutural, mas uma comunidade ainda precisa querer genuinamente viver junto.
- **Passar não é o objetivo; honestidade é.** Uma comunidade pode satisfazer todos os testes no papel e ainda assim ser um lugar difícil para viver, ou falhar em vários e ainda assim estar prosperando. Os testes são um espelho para risco estrutural, não um certificado de saúde.
- **Eles descrevem padrões, não suas especificidades.** Cada teste é um composto de muitas falhas reais. Se reconhecer em algum é o início de uma conversa, não um diagnóstico — seu contexto decide o que de fato fazer.

Use-os para aquilo em que são genuinamente bons: tornar o implícito explícito, antes que isso te custe caro.

## Contribuindo com um Teste de Estresse

A biblioteca cresce ao absorver experiência real. **Se sua comunidade viveu uma falha estrutural que ainda não está coberta aqui, ela é bem-vinda.** [Entre em contato](https://ecohubs.community/contact) com a situação — o que aconteceu, quais camadas estavam envolvidas, como foi (ou não foi) resolvida — e consideraremos adicioná-la como um novo teste de estresse. Falhas reais tornam o RCOS mais forte.
