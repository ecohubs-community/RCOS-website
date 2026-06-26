---
id: 4563b1af
title: 4. Camada 2 — Governança e Lógica de Decisão
parentId: e6de7a5d
order: 40
lang: pt-br
sourceHash: 3bd40d24
---

A Camada 2 define como as decisões coletivas são tomadas, quem está autorizado a tomá-las e como a autoridade é restringida. A governança no RCOS é projetada para tornar o poder explícito, delimitado, revisável e reversível.

## 4.1 Tipos de Decisão

4.1.1 Todas as decisões coletivas DEVEM ser classificadas em exatamente um dos seguintes tipos de decisão:
- Decisões Operacionais
- Decisões Estratégicas
- Decisões Constitucionais

4.1.2 Decisões Operacionais dizem respeito ao funcionamento e à execução do dia a dia dentro das regras existentes.

4.1.3 Decisões Estratégicas dizem respeito à direção de longo prazo, à alocação de recursos significativos ou à criação/remoção de grandes estruturas.

4.1.4 Decisões Constitucionais dizem respeito a mudanças nos invariantes da Camada 0, no propósito, no escopo ou no próprio sistema de governança.

4.1.5 Se uma decisão não puder ser classificada com clareza, ela DEVE recair, por padrão, no tipo de decisão de maior impacto.

## 4.2 Mecanismos de Decisão

4.2.1 Cada tipo de decisão DEVE ter um mecanismo de tomada de decisão explicitamente definido.

4.2.2 Os mecanismos de decisão PODEM incluir, entre outros:
- Tomada de decisão por consentimento
- Votação por maioria simples
- Votação por maioria qualificada
- Autoridade delegada
- Atribuição aleatória ou rotativa

4.2.3 Os mecanismos de decisão DEVEM especificar:
- Participantes elegíveis
- Limiares de decisão
- Condições de bloqueio ou veto, se houver
- Restrições de tempo

4.2.4 Nenhum mecanismo de decisão informal ou ad hoc PODE ser usado para decisões coletivas.

## 4.3 Limites de Autoridade

4.3.1 Toda autoridade DEVE ser atribuída a papéis, círculos ou órgãos explicitamente definidos.

4.3.2 As atribuições de autoridade DEVEM incluir:
- Escopo da autoridade
- Limites da autoridade
- Duração ou mandato, quando aplicável

4.3.3 Nenhum indivíduo ou órgão PODE exercer autoridade fora do seu escopo explicitamente atribuído.

4.3.4 A autoridade NÃO DEVE derivar de carisma, antiguidade, propriedade ou influência informal.

4.3.5 A autoridade temporária ou de emergência DEVE ser explicitamente definida, limitada no tempo e sujeita a revisão.

## 4.4 Matriz de Decisão

4.4.1 A comunidade DEVE manter uma Matriz de Decisão como artefato central de governança.

4.4.2 A Matriz de Decisão DEVE mapear, no mínimo:
- Tipo de decisão
- Domínio da decisão
- Papel ou órgão autorizado
- Mecanismo de decisão
- Limiar de aprovação
- Caminho de escalonamento

4.4.3 A Matriz de Decisão DEVE estar publicamente acessível a todos os membros.

4.4.4 Decisões tomadas fora da Matriz de Decisão DEVEM ser consideradas inválidas.

## 4.5 Protocolo de Governança

4.5.1 A comunidade DEVE definir um Protocolo de Governança que descreva o ciclo de vida completo de uma decisão.

4.5.2 O Protocolo de Governança DEVE incluir:
- Requisitos para submissão de propostas
- Processo de análise e deliberação
- Execução da decisão
- Documentação e publicação
- Mecanismos de recurso e revisão

4.5.3 O Protocolo de Governança DEVE definir como os conflitos entre decisões são resolvidos.

4.5.4 Todas as ações de governança DEVEM ser documentadas de acordo com as regras de documentação da Camada 5.

## 4.6 Salvaguardas e Modos de Falha

4.6.1 O sistema de governança DEVE incluir salvaguardas contra:
- Concentração de poder de decisão
- Vetos informais
- Captura de decisões por subgrupos
- Entrincheiramento de fundadores ou de papéis

4.6.2 Os mecanismos de governança DEVEM permitir contestação e revisão sem retaliação.

4.6.3 Falhas persistentes de governança DEVEM acionar uma revisão formal ou um processo constitucional.

## 4.7 Artefatos

4.7.1 Os seguintes artefatos são obrigatórios para conformidade com a Camada 2:
- Matriz de Decisão
- Protocolo de Governança
- Registro de Autoridade

4.7.2 Os artefatos da Camada 2 DEVEM ser:
- Explícitos e inequívocos
- Versionados
- Acessíveis a todos os membros

4.7.3 A ausência, ambiguidade ou violação sistemática dos artefatos da Camada 2 DEVE resultar na perda da conformidade com o RCOS-Core.
