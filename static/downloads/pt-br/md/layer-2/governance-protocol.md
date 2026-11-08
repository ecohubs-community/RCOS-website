**RCOS — Sistema Operacional de Comunidade Regenerativa**

# Protocolo de Governança

- **Gerado em:** 2026-11-06
- **Fonte (versão mais recente):** [https://rcos.ecohubs.community/pt-br/articles/rcos-templates/layer-2/governance-protocol](https://rcos.ecohubs.community/pt-br/articles/rcos-templates/layer-2/governance-protocol)
- **Todos os modelos RCOS:** [https://rcos.ecohubs.community/pt-br/articles/rcos-templates](https://rcos.ecohubs.community/pt-br/articles/rcos-templates)

---
- **Camada:** 2 — Governança e Lógica de Decisão
- **Status:** Modelo — adapte para sua comunidade
- **Referência RCOS:** [§4.5](https://rcos.ecohubs.community/pt-br/standard/core/0.1/layer-2-governance-decision-logic#4.5), [§4.6](https://rcos.ecohubs.community/pt-br/standard/core/0.1/layer-2-governance-decision-logic#4.6), [§4.7](https://rcos.ecohubs.community/pt-br/standard/core/0.1/layer-2-governance-decision-logic#4.7)

> Define o ciclo de vida completo de uma decisão coletiva — desde a submissão da proposta até a documentação e o recurso.

---

## Submissão de Propostas

*Cláusulas RCOS: [4.5.1](https://rcos.ecohubs.community/pt-br/standard/core/0.1/layer-2-governance-decision-logic#4.5.1), [4.5.2](https://rcos.ecohubs.community/pt-br/standard/core/0.1/layer-2-governance-decision-logic#4.5.2)*

- _<Decisões operacionais — tratadas pela pessoa responsável pelo papel correspondente, conforme o Registro de Papéis; não exigem proposta.>_
- _<Decisões estratégicas e constitucionais — quem pode submeter e em qual plataforma.>_
- _<Campos obrigatórios da proposta: resumo, camadas e artefatos afetados, tipo de decisão, justificativa, riscos e mitigações, plano de reversão, data efetiva proposta.>_
- _<O tipo de decisão é declarado pela pessoa proponente; em caso de dúvida, assume-se o tipo de maior impacto.>_
- _<Regras de retirada — quando uma proposta pode ser retirada e como.>_

## Análise e Deliberação

*Cláusulas RCOS: [4.5.1](https://rcos.ecohubs.community/pt-br/standard/core/0.1/layer-2-governance-decision-logic#4.5.1), [4.5.2](https://rcos.ecohubs.community/pt-br/standard/core/0.1/layer-2-governance-decision-logic#4.5.2)*

- _<Onde a deliberação acontece (fórum, chat, reunião).>_
- _<Período mínimo de deliberação antes da abertura da votação — Estratégica.>_
- _<Período mínimo de deliberação antes da abertura da votação — Constitucional.>_
- _<Expectativa de que as pessoas membras levantem preocupações durante a deliberação para evitar a necessidade de nova votação.>_

## Execução da Decisão

*Cláusulas RCOS: [4.5.1](https://rcos.ecohubs.community/pt-br/standard/core/0.1/layer-2-governance-decision-logic#4.5.1), [4.5.2](https://rcos.ecohubs.community/pt-br/standard/core/0.1/layer-2-governance-decision-logic#4.5.2), [4.5.4](https://rcos.ecohubs.community/pt-br/standard/core/0.1/layer-2-governance-decision-logic#4.5.4)*

- _<Em caso de aprovação: como a proposta é arquivada; artefatos afetados atualizados; entrada no histórico de versões.>_
- _<Em caso de rejeição: onde a proposta é arquivada.>_
- _<Prazo limite para execução após o encerramento da votação.>_

## Documentação e Publicação

*Cláusulas RCOS: [4.5.2](https://rcos.ecohubs.community/pt-br/standard/core/0.1/layer-2-governance-decision-logic#4.5.2), [4.5.4](https://rcos.ecohubs.community/pt-br/standard/core/0.1/layer-2-governance-decision-logic#4.5.4)*

- _<Todas as propostas aprovadas e rejeitadas são arquivadas em até X dias após o encerramento da votação.>_
- _<O artefato da votação (por exemplo, link do Snapshot) serve como registro de decisão.>_
- _<O histórico de versões (Camada 6) é atualizado a cada proposta aprovada.>_

## Recurso e Revisão

*Cláusulas RCOS: [4.5.2](https://rcos.ecohubs.community/pt-br/standard/core/0.1/layer-2-governance-decision-logic#4.5.2), [4.6.2](https://rcos.ecohubs.community/pt-br/standard/core/0.1/layer-2-governance-decision-logic#4.6.2)*

- _<Quem pode acionar uma nova votação e como.>_
- _<Exigência de objeção fundamentada — uma consideração não tratada na deliberação original.>_
- _<A nova votação usa o mesmo mecanismo e limiar da original.>_
- _<Tratamento de pedidos repetidos e frívolos de nova votação.>_

## Conflito Entre Decisões

*Cláusulas RCOS: [4.5.3](https://rcos.ecohubs.community/pt-br/standard/core/0.1/layer-2-governance-decision-logic#4.5.3)*

- _<Precedência: Constitucional > Estratégica > Operacional.>_
- _<Conflitos no mesmo tipo: a mais recente prevalece, salvo se a anterior travou explicitamente mudanças futuras.>_
- _<Onde os conflitos aparecem e como são resolvidos.>_

## Salvaguardas e Modos de Falha

*Cláusulas RCOS: [4.6.1](https://rcos.ecohubs.community/pt-br/standard/core/0.1/layer-2-governance-decision-logic#4.6.1), [4.6.2](https://rcos.ecohubs.community/pt-br/standard/core/0.1/layer-2-governance-decision-logic#4.6.2), [4.6.3](https://rcos.ecohubs.community/pt-br/standard/core/0.1/layer-2-governance-decision-logic#4.6.3)*

- **Concentração de poder:** _<como o protocolo impede autoridade unilateral acima do escopo operacional.>_
- **Vetos informais:** _<regra de que apenas objeções escritas e fundamentadas, submetidas pelo processo definido, têm peso.>_
- **Captura da decisão:** _<regra sobre quórum e abertura da votação.>_
- **Perpetuação de fundadores/papéis:** _<regra de que nenhum papel concede autoridade permanente; pessoas fundadoras não detêm autoridade especial de governança além de seu estado de membresia.>_
- **Contestação sem retaliação:** _<referência às disposições antirretaliação da Camada 4.>_
- **Gatilho de falha persistente:** _<por exemplo, três ou mais falhas de governança em X meses acionam uma revisão constitucional.>_

---

## Registro de Ratificação

- **Adotado em:** <AAAA-MM-DD>
- **Tipo de decisão:** Constitucional
- **Versão:** <versão>
- **Registro de decisão:** <link para o registro de decisão>
