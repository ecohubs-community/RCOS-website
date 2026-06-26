---
id: 69b4c289
title: 10. Conformidade e Auditoria
parentId: e6de7a5d
order: 100
lang: pt-br
sourceHash: 49f7b7e9
---

Este capítulo define como a conformidade com o RCOS-Core é avaliada e mantida.

## 10.1 Lista de Verificação de Conformidade

10.1.1 A conformidade com o RCOS-Core é binária: uma comunidade está em conformidade ou em não conformidade.

10.1.2 A conformidade DEVE ser avaliada por camada (Camadas 0–6).

10.1.3 Para cada camada, a Lista de Verificação de Conformidade DEVE verificar:
- Presença de artefatos obrigatórios
- Explicitude e acessibilidade das regras requeridas
- Adoção por meio de processos de governança autorizados

10.1.4 Conformidade parcial ou "intenção de conformidade" NÃO DEVE ser considerada conformidade.

10.1.5 Módulos Opcionais NÃO DEVEM ser incluídos na avaliação de conformidade com o RCOS-Core.

## 10.2 Casos de Teste

10.2.1 Casos de Teste são cenários estruturados usados para validar se os mecanismos do RCOS se comportam conforme o pretendido.

10.2.2 Casos de Teste PODEM ser:
- Cenários hipotéticos
- Falhas históricas de comunidades
- Testes de estresse simulados

10.2.3 Casos de Teste DEVERIAM cobrir, no mínimo:
- Tentativas de concentração de poder
- Cenários de saída e separação
- Impasse de governança
- Tentativas de captura econômica
- Conflitos críticos para a segurança

10.2.4 Casos de Teste são informativos, mas DEVERIAM ser usados durante auditorias, integração de novos membros e revisões periódicas.

## 10.3 Não Conformidade

10.3.1 Uma comunidade DEVE ser considerada em não conformidade se:
- Qualquer artefato obrigatório estiver faltando
- As invariantes da Camada 0 forem violadas
- Decisões forem tomadas repetidamente fora das estruturas de governança autorizadas
- A saída estiver bloqueada ou restringida informalmente

10.3.2 A não conformidade DEVE ser explicitamente reconhecida assim que detectada.

10.3.3 Uma comunidade PODE recuperar a conformidade somente por meio de:
- Ação corretiva
- Adoção formal de artefatos faltantes ou corrigidos
- Documentação da remediação

10.3.4 Alegações de conformidade com o RCOS DEVEM ser retiradas durante períodos de não conformidade conhecida.
