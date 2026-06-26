---
id: 2c71be9d
title: Módulos RCOS
parentId: null
order: 3
lang: pt-br
sourceHash: a43538c6
---

## Módulos

Os módulos são extensões opcionais e específicas de domínio para o RCOS Core. Eles permitem que comunidades adicionem estrutura onde necessário, sem sobrecarregar o sistema central nem impor uniformidade em contextos diferentes.

O RCOS é intencionalmente mínimo em seu núcleo. Os módulos existem para apoiar a diversidade de propósito, escala, ecologia, cultura e prática, preservando ao mesmo tempo uma base estrutural compartilhada.

### O que os módulos são

Módulos são:
- Extensões opcionais ao RCOS Core
- Adotados e documentados explicitamente
- Delimitados a domínios ou práticas específicas
- Compatíveis com a conformidade RCOS
- Projetados para serem componíveis e removíveis

Um módulo pode introduzir:
- Regras ou restrições adicionais
- Novos artefatos ou registros
- Papéis especializados ou domínios de decisão
- Salvaguardas ou invariantes adicionais dentro de seu escopo

### O que os módulos não são

Módulos não são:
- Obrigatórios para a conformidade com o RCOS-Core
- Expectativas ou normas implícitas
- Camadas de governança ocultas
- Boas práticas universais
- Substitutos para as camadas do RCOS Core

Se um módulo não for adotado explicitamente, NÃO DEVE ser presumido que ele se aplica.

### Relação com o RCOS Core

Os módulos:
- NÃO DEVEM contradizer o propósito, escopo ou invariantes da Camada 0
- DEVEM respeitar as restrições de governança definidas na Camada 2
- DEVEM integrar-se aos artefatos e mecanismos de decisão existentes
- PODEM estender ou especializar regras nas Camadas 3–6 dentro de seu escopo declarado

Módulos não podem sobrepor invariantes centrais. Quando um módulo introduz regras mais rígidas, essas regras se aplicam apenas dentro do domínio declarado do módulo.

### Para quem são os módulos

Os módulos destinam-se a:
- Comunidades com necessidades operacionais ou ecológicas específicas
- Projetos que exigem estrutura adicional em um domínio
- Comunidades em diferentes estágios de maturidade
- Grupos que experimentam dentro de condições seguras e delimitadas

Os módulos permitem que:
- Comunidades pequenas permaneçam simples
- Comunidades complexas adicionem estrutura gradualmente
- Comunidades diversas continuem interoperáveis

### Quando aplicar módulos

Um módulo DEVERIA ser considerado quando:
- Um domínio se torna crítico para a sobrevivência ou identidade da comunidade
- Práticas informais começam a gerar ambiguidade ou desequilíbrio de poder
- Conflitos repetidos surgem em uma área específica
- Sistemas externos (jurídicos, ecológicos, financeiros) introduzem risco
- A comunidade ganha capacidade e estabilidade para sustentar mais estrutura

Um módulo NÃO DEVERIA ser aplicado:
- Para compensar falhas de governança central não resolvidas
- Para impor valores sem consentimento explícito
- Como substituto para a resolução de conflitos
- Quando a comunidade não tem capacidade para mantê-lo

### Como os módulos são aplicados

Para aplicar um módulo, uma comunidade DEVE:
- Adotar o módulo explicitamente por meio de uma decisão autorizada
- Declarar o escopo e as interfaces do módulo
- Criar ou adotar os artefatos exigidos
- Atribuir responsabilidade pela manutenção e pela titularidade
- Documentar como o módulo interage com as regras existentes

Os módulos PODEM ser:
- Limitados no tempo
- Experimentais
- Adotados gradualmente
- Parcialmente implementados, se definidos explicitamente

### Ciclo de vida do módulo

Os módulos seguem as mesmas regras de evolução do núcleo:
- Adoção por meio de governança formal
- Versionamento e documentação
- Revisão periódica
- Modificação ou remoção por meio de processos de mudança definidos

Um módulo PODE ser removido se:
- Seu domínio deixar de ser relevante
- Introduzir sobrecarga desproporcional
- Entrar em conflito com regras centrais atualizadas
- A comunidade optar explicitamente por simplificar

### Princípio de design

Os módulos existem para responder a uma única pergunta:

> "Onde precisamos de mais estrutura do que o núcleo oferece — e por quê?"

Eles permitem que as comunidades cresçam **em capacidade sem crescer em caos**, mantendo o RCOS Core estável, mínimo e interoperável.
