---
id: 4ffa600f
title: 8. Camada 6 — Evolução e Adaptação
parentId: e6de7a5d
order: 80
lang: pt-br
sourceHash: 1329c3d9
---

A Camada 6 define como o sistema evolui sem entrar em colapso.  
Seu propósito é garantir que a mudança seja deliberada, restringida, reversível quando apropriado e produza aprendizados em vez de danos ocultos. A evolução sob o RCOS é tratada como um processo governado, não como improvisação.

## 8.1 Mecanismos de Mudança

8.1.1 A comunidade DEVE definir mecanismos explícitos de mudança para modificar, adicionar, suspender ou remover regras, papéis, artefatos ou estruturas de decisão.

8.1.2 Os mecanismos de mudança DEVEM distinguir explicitamente entre:
- Mudanças permanentes de regras  
- Experimentos com prazo definido, conforme descrito na Seção 8.3  

8.1.3 Toda mudança proposta DEVE especificar, no mínimo:
- O(s) artefato(s), camada(s) e seção(ões) afetados  
- O tipo de decisão e o caminho decisório autorizado, conforme definido na Camada 2  
- O efeito pretendido, o escopo e os riscos conhecidos  
- A data de vigência e qualquer período de transição  
- Os requisitos de migração para papéis, acordos ou registros existentes  

8.1.4 Mudanças que afetem o propósito, o escopo, os invariantes ou as restrições de identidade da Camada 0 DEVEM ser classificadas como mudanças constitucionais e DEVEM seguir o mecanismo de decisão constitucional.

8.1.5 A comunidade DEVE definir mecanismos explícitos de revisão para as mudanças adotadas, incluindo como as mudanças são avaliadas, revisadas ou revertidas quando produzem dano, instabilidade ou concentração não intencional de poder.

## 8.2 Versionamento e Autoridade

8.2.1 Todas as mudanças adotadas DEVEM ser versionadas e rastreáveis.

8.2.2 A comunidade DEVE manter um **Histórico de Versões** que registre, no mínimo:
- Identificador da versão  
- Data de adoção e data de vigência  
- Referência ao registro da decisão (autoridade, mecanismo, limiar)  
- Resumo das mudanças  
- Notas de migração e restrições de compatibilidade (se houver)  

8.2.3 A qualquer momento, a comunidade DEVE ser capaz de determinar inequivocamente:
- Qual versão está atualmente em vigor  
- Quais artefatos são autoritativos para fins de conformidade  

8.2.4 As regras substituídas DEVEM permanecer acessíveis para fins de auditabilidade, aprendizado e resolução de disputas, juntamente com as datas durante as quais estiveram em vigor.

8.2.5 Nenhuma mudança de regra informal, não documentada ou "subentendida" PODE ser considerada válida.

## 8.3 Experimentos

8.3.1 A comunidade PODE adotar experimentos como desvios, extensões ou pilotos explicitamente com prazo definido e reversíveis, destinados ao aprendizado.

8.3.2 Todo experimento DEVE definir, no mínimo:
- Escopo (o que é alterado e o que explicitamente não é alterado)  
- Duração e pontos de revisão  
- Critérios de sucesso e fracasso  
- Condições de reversão e processo de reversão  
- Caminho decisório autorizado para iniciar, estender, modificar ou encerrar o experimento  

8.3.3 Os experimentos NÃO DEVEM sobrepor-se aos invariantes da Camada 0 e NÃO DEVEM contornar as restrições de governança definidas na Camada 2.

8.3.4 Os experimentos DEVEM ser explicitamente rotulados como experimentais em todos os artefatos afetados e DEVEM incluir uma data de expiração não prorrogável, a menos que sejam renovados por meio de uma decisão autorizada.

8.3.5 Se um experimento introduzir risco de segurança, coerção ou dano sustentado, a comunidade DEVE suspender ou encerrar o experimento imediatamente por meio de uma ação protetiva, seguida de revisão posterior.

## 8.4 Captura de Aprendizado e Feedback

8.4.1 Falhas importantes, adaptações, reversões e aprendizados sistêmicos DEVEM ser documentados.

8.4.2 A captura de aprendizado DEVE incluir, no mínimo:
- O que ocorreu e por que isso importou  
- Quais camadas, regras ou artefatos estiveram envolvidos  
- O que foi alterado, tentado ou interrompido  
- Quais sinais, evidências ou limiares desencadearam a ação  

8.4.3 Os registros de aprendizado DEVEM ser acessíveis de acordo com as regras de acesso à informação da Camada 5.

8.4.4 Padrões repetidos de falha DEVEM acionar uma revisão estrutural em vez de culpabilização individual.

## 8.5 Segurança e Reversibilidade da Mudança

8.5.1 O sistema DEVE preferir mudanças reversíveis a mudanças irreversíveis, quando possível.

8.5.2 Mudanças irreversíveis ou de alto impacto DEVEM incluir:
- Períodos prolongados de deliberação ou revisão  
- Limiares de decisão mais elevados, quando apropriado  
- Reconhecimento explícito de risco  

8.5.3 Mudanças emergenciais PODEM ser permitidas apenas onde explicitamente definidas, DEVEM ter prazo definido, NÃO DEVEM sobrepor-se aos invariantes da Camada 0 e DEVEM passar por revisão posterior obrigatória e ratificação ou reversão.

## 8.6 Artefatos

8.6.1 Os seguintes artefatos são obrigatórios para a conformidade com a Camada 6:
- Protocolo de Mudança  
- Histórico de Versões  
- Registro de Aprendizados  

8.6.2 Os artefatos da Camada 6 DEVEM ser:
- Explícitos e inequívocos  
- Versionados  
- Acessíveis a todos os membros, com proteções de privacidade claramente delimitadas  
- Adotados por meio de um processo de governança autorizado  

8.6.3 O Protocolo de Mudança DEVE definir, no mínimo:
- Como as mudanças são propostas, revisadas, adotadas, publicadas e rejeitadas  
- Como as propostas são classificadas por tipo de decisão  
- O conteúdo obrigatório das propostas de mudança  
- As expectativas de transição, migração e descontinuação  
- Os mecanismos de revisão, alteração e reversão  
- As disposições para mudanças emergenciais, incluindo limites estritos de tempo e revisão obrigatória  

8.6.4 O Histórico de Versões DEVE definir:
- A estrutura autoritativa dos identificadores de versão e dos registros de mudanças  
- Como as versões substituídas são retidas e acessadas  
- Como a versão atualmente ativa é determinada  

8.6.5 O Registro de Aprendizados DEVE definir:
- O que constitui um evento passível de aprendizado  
- O formato de documentação e a responsabilidade pela documentação  
- A cadência de revisão e síntese  

## 8.7 Invariantes da Camada

8.7.1 A mudança DEVE ser possível, porém restringida; nenhuma mudança PODE ser instantânea, implícita ou não revisável.

8.7.2 Todas as mudanças adotadas DEVEM ser versionadas, documentadas e rastreáveis.

8.7.3 Os experimentos DEVEM ter prazo definido, ser explicitamente rotulados e reversíveis.

8.7.4 Falhas importantes e adaptações DEVEM ser capturadas como aprendizado compartilhado, e não apagadas ou ocultadas.

## 8.8 Regras de Explicitude

8.8.1 Os seguintes pontos DEVEM ser explícitos:
- Como as regras mudam e quem decide  
- Os processos de versionamento, autoridade e revisão  
- O escopo, a duração e as condições de reversão dos experimentos  
- As condições e os limites das mudanças emergenciais  

8.8.2 Os seguintes pontos PODEM ser explícitos:
- Frequência e cadência de revisão  
- Cláusulas de encerramento  
- Métodos de feedback e percepção  

8.8.3 Os seguintes pontos DEVEM permanecer opcionais e fora do escopo:
- Ritmo de inovação  
- Atitudes culturais em relação ao risco dentro dos limites definidos
