---
id: c2d42a76
title: Apêndice C — Resumo da Implementação de Referência
parentId: e6de7a5d
order: 140
lang: pt-br
sourceHash: e8faac9d
---

Este apêndice define uma **estrutura de documentação recomendada** para comunidades que desejam se apresentar como Implementações de Referência do RCOS. O objetivo é tornar a adoção auditável, comparável e passível de aprendizado, sem implicar endosso.

## C.1 Contexto da Comunidade

- Nome e localização
- Tamanho e escala (ex.: 12 membros; 3 domicílios; 25 hectares)
- Propósito principal (Camada 0)
- Data de fundação e data de adoção do RCOS (se diferente)
- Forma(s) jurídica(s) relevante(s) (se houver)
- Ponto de contato público

## C.2 Visão Geral da Adoção do RCOS

- Versão do RCOS-Core em uso
- Referência ao registro da decisão de adoção (autoridade, mecanismo, data)
- Resumo dos Módulos Opcionais adotados (se houver), incluindo:
  - Nome e escopo do módulo
  - Data de adoção
  - Link para a especificação do módulo
  - Dependências de camada declaradas

## C.3 Resumo Camada por Camada

Para cada camada (0–6):
- Artefatos implementados (com links)
- Desvios ou adaptações (com links)
- Desafios conhecidos e modos de falha encontrados

Formato recomendado:

| Camada | Artefatos obrigatórios implementados | Link(s) público(s) | Versão/data | Notas |
|---:|---|---|---|---|
| 0 | Carta de Propósito; Declaração de Escopo; Registro de Invariantes | [placeholder] | v0.3 / 2026-01-01 | Propósito estável; invariantes revisadas trimestralmente |
| 1 | Acordo de Associação; Protocolo de Integração; Protocolo de Saída e Separação; Registro de Estado de Associação | [placeholder] | v1.1 / 2026-02-15 | Período de experiência é de 3 meses |
| 2 | Matriz de Decisão; Protocolo de Governança; Registro de Autoridade | [placeholder] | v0.8 / 2026-03-10 | Consentimento para operações, votação para estratégico |
| 3 | Protocolo de Economia Interna; Regulamento da Tesouraria | [placeholder] | v0.5 / 2026-03-20 | Relatórios mensais de tesouraria publicados |
| 4 | Escada de Resolução de Conflitos; Protocolo de Responsabilização | [placeholder] | v0.6 / 2026-04-01 | Política antirretaliação incluída |
| 5 | Manual de Operações; Registro de Papéis; Modelos de Reunião | [placeholder] | v0.4 / 2026-04-15 | Carga de reuniões limitada a 4h/semana |
| 6 | Protocolo de Mudança; Histórico de Versões; Diário de Aprendizado | [placeholder] | v0.2 / 2026-05-01 | Experimentos expiram a menos que sejam renovados |

## C.4 Governança e Evolução

- Mecanismos de decisão em uso (com trecho da Matriz de Decisão ou link)
- Histórico de mudanças e experimentos (com links para registros de mudança)
- Principais aprendizados e falhas (com links para entradas do Diário de Aprendizado)
- Registro de desvios (recomendado):

| Item | Camada(s) | Tipo | Status | Início | Revisão/Fim | Link |
|---|---|---|---|---|---|---|
| Teste de facilitação rotativa | 5 | Experimento | Ativo | 2026-06-01 | 2026-08-01 | [placeholder] |
| Exceção de transparência da tesouraria (segurança) | 3/4 | Permanente | Ativo | 2026-04-10 | Revisão anual | [placeholder] |


## C.5 Declaração de Conformidade
- Status atual de conformidade: Em conformidade / Não conforme / Desconhecido
- Data da última autoauditoria ou auditoria externa
- Método de auditoria (autoauditoria vs externa)
- Períodos conhecidos de não conformidade (se houver) e resumo da correção
- Links de evidências (recomendado):

| Evidência | Data | Link |
|---|---:|---|
| Resultado da checklist camada por camada | 2026-07-01 | [placeholder] |
| Notas/achados da auditoria | 2026-07-01 | [placeholder] |
| Log de correções | 2026-07-15 | [placeholder] |
- Períodos conhecidos de não conformidade (se houver)  

## C.6 Transparência Pública
- Índice de artefatos públicos (recomendado):

| Artefato | Camada | Link público | Versão/data | Notas |
|---|---:|---|---:|---|
| Carta de Propósito | 0 | [placeholder] | 2026-01-01 | |
| Matriz de Decisão | 2 | [placeholder] | 2026-03-10 | |
| Relatórios de tesouraria | 3 | [placeholder] | 2026-06-30 | mensais |
| Diário de Aprendizado | 6 | [placeholder] | 2026-06-15 | redações sinalizadas |

- Canal de contato ou consulta
- Declaração explícita do que é privado vs público, e por quê
- Link para a versão atual do RCOS-Core utilizada e o changelog
- Canal de contato ou consulta  

---

## Nota Informativa

Implementações de Referência são instrumentos de aprendizado, não endossos.
