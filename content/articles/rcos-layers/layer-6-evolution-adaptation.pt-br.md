---
id: 6e32b102
title: Camada 6 - Evolução e Adaptação
parentId: a7759be1
order: 0
lang: pt-br
sourceHash: 9e7d7a30
---

**Como o sistema muda sem entrar em colapso.**

### **Mecanismos de mudança**

* Propostas
* Experimentos
* Ciclos de revisão

### **Versionamento**

* Versões do protocolo
* Caminhos de migração

### **Captura de aprendizados**

* Retrospectivas
* Documentação de falhas

### **Artefatos**

* Protocolo de Mudança
* Histórico de Versões

### **Invariantes da Camada**

* **Invariante 6.1: A mudança é possível, mas restrita**
  Nenhum componente do sistema fica congelado para sempre, mas nenhuma mudança é instantânea.
* **Invariante 6.2: As mudanças são versionadas**
  Alterações de regras devem ser documentadas, datadas e rastreáveis.
* **Invariante 6.3: Os experimentos são reversíveis**
  Todos os experimentos devem definir escopo, duração e condições de reversão.
* **Invariante 6.4: O aprendizado é capturado**
  Falhas e adaptações significativas devem ser registradas e acessíveis.

### **Regras de Explicitude**

#### **DEVE ser explícito**

* Como as regras mudam
* Processo de versionamento e revisão
* Limites dos experimentos
* Mecanismos de reversão

**Por quê:** sistemas que não conseguem mudar ou apodrecem ou explodem.

#### **PODE ser explícito**

* Frequência de revisão
* Cláusulas de encerramento
* Métodos de coleta de feedback

#### **DEVE permanecer opcional**

* Ritmo de inovação
* Apetite ao risco (dentro dos limites)
