---
id: f12d5320
title: 9. Seções Não Normativas
parentId: e6de7a5d
order: 90
lang: pt-br
sourceHash: f8f55d53
---

As seções deste capítulo são **informativas**, não normativas.  
Elas não definem requisitos de conformidade, mas oferecem orientação, contexto, exemplos e apoio ao aprendizado para comunidades, implementadores, auditores e mantenedores do padrão.

Nada nesta seção pode anular ou enfraquecer requisitos definidos nas Camadas 0–6.

## 9.1 Módulos Opcionais

9.1.1 Módulos Opcionais são extensões específicas de domínio que se constroem sobre o RCOS-Core sem modificar suas camadas obrigatórias.

9.1.2 Módulos Opcionais DEVEM:
- Declarar quais camadas do RCOS eles estendem ou das quais dependem  
- Declarar explicitamente quaisquer papéis, regras ou artefatos adicionais que introduzem  
- NÃO DEVE anular ou contradizer invariantes da Camada 0 ou requisitos do RCOS-Core  

9.1.3 Módulos Opcionais PODEM definir:
- Práticas específicas de domínio  
- Restrições ou padrões adicionais  
- Padrões especializados de governança ou operacionais  

9.1.4 Domínios típicos de Módulos Opcionais PODEM incluir, mas não se limitam a:
- Permacultura e manejo regenerativo da terra  
- Sistemas educacionais alternativos ou baseados na comunidade  
- Práticas de saúde, cuidado e bem-estar  
- Práticas culturais ou espirituais  
- Especializações econômicas (por exemplo, cooperativas, fundos fundiários, crédito mútuo)  

9.1.5 A adoção de Módulos Opcionais DEVE seguir os mecanismos de mudança definidos na Camada 6.

9.1.6 Uma comunidade PODE estar em conformidade com o RCOS-Core sem adotar nenhum Módulo Opcional.

## 9.2 Implementações de Referência

9.2.1 Uma Implementação de Referência é uma comunidade do mundo real que documenta publicamente como aplica o RCOS-Core.

9.2.2 Implementações de Referência são **descritivas**, não prescritivas.  
Elas ilustram como o RCOS pode ser instanciado, não como deve ser instanciado.

9.2.3 Uma comunidade PODE se declarar uma Implementação de Referência do RCOS somente se ela:
- Está em conformidade com o RCOS-Core  
- Documenta publicamente seus artefatos das Camadas 0–6  
- Indica claramente desvios, experimentos ou extensões  

9.2.4 A documentação da Implementação de Referência DEVERIA incluir:
- Contexto e escala (tamanho, localização, propósito)  
- Quais Módulos Opcionais são adotados  
- Desafios e falhas conhecidos  
- Histórico de evolução e adaptações significativas  

9.2.5 Implementações de Referência NÃO DEVEM ser tratadas como interpretações oficiais do padrão.

## 9.3 Modos de Falha Conhecidos

9.3.1 Modos de Falha Conhecidos documentam padrões recorrentes de colapso observados em comunidades reais.

9.3.2 Modos de Falha são **sinais informativos**, não critérios de conformidade.

9.3.3 Modos de Falha PODEM incluir, mas não se limitam a:
- Acumulação informal de poder  
- Dominância de fundadores ou proprietários de terras  
- Dependência de trabalho invisível ou marcado por gênero  
- Paralisia de governança ou sobrecarga de reuniões  
- Bloqueio de saída ou coerção sutil  
- Captura econômica por meio de dívida ou controle de ativos  
- Evitação de conflitos levando à fragmentação silenciosa  

9.3.4 O propósito de documentar Modos de Falha é:
- Apoiar testes de estresse das estruturas do RCOS  
- Melhorar decisões de design  
- Permitir detecção precoce em comunidades ativas  

9.3.5 A documentação dos Modos de Falha DEVERIA referenciar quais camadas do RCOS pretendem mitigar o padrão.
