---
id: aac2e91b
title: Salvaguardas
parentId: null
order: 6
lang: pt-br
sourceHash: '80540912'
---

## Salvaguardas

Salvaguardas são módulos opcionais e não normativos projetados para proteger comunidades contra **modos de falha conhecidos de alto risco** que repetidamente causam colapso, captura ou dano irreversível.

Diferentemente das camadas centrais do RCOS, salvaguardas **não são exigidas para conformidade**. Elas são adotadas intencionalmente quando uma comunidade reconhece que um domínio de risco específico se aplica ao seu contexto.

Salvaguardas existem porque algumas falhas:
- ocorrem com pouca frequência, mas de forma catastrófica,
- atravessam múltiplas camadas do sistema,
- não podem ser reparadas uma vez desencadeadas,
- são frequentemente subestimadas até que seja tarde demais.

### O que as salvaguardas são

Salvaguardas são:
- Complementos opcionais ao RCOS Core
- Explícitas e documentadas
- Defensivas por design
- Focadas em restrição, não em otimização
- Ativadas por meio de adoção formal

Salvaguardas tipicamente:
- Introduzem restrições adicionais
- Exigem artefatos novos ou modificados
- Endurecem regras de saída, transferência ou autoridade
- Reduzem a flexibilidade em troca de resiliência

### O que as salvaguardas não são

Salvaguardas não são:
- Posições morais obrigatórias
- Prescrições culturais ou ideológicas
- Substitutas para governança ou processos de conflito
- Normas informais ou "regras subentendidas"

Se uma salvaguarda não for explicitamente adotada, NÃO DEVE ser presumido que ela se aplique.

### Quando as salvaguardas são apropriadas

Uma salvaguarda é apropriada quando:
- Uma falha seria irreversível (por exemplo, perda de terra, captura legal)
- O impacto abrange múltiplas camadas (governança, economia, associação)
- A saída se tornaria impossível ou punitiva
- Poder ou ativos poderiam se concentrar silenciosamente
- Sistemas legais ou financeiros externos interagem com a comunidade

### Exemplos de domínios de salvaguarda

Domínios comuns de salvaguarda incluem:
- Antiprivatização de terras e bens comuns
- Restrições ao poder de fundadores ou investidores
- Limitações a capital e dívida externos
- Proteção e segurança de crianças
- Contenção de poderes emergenciais
- Proteção de sucessão e dissolução

### Relação com os artefatos

Salvaguardas **não são artefatos em si mesmas**.

No entanto, quando adotada, uma salvaguarda PODE:
- Exigir novos artefatos
- Modificar artefatos existentes
- Adicionar restrições aos invariantes da Camada 0
- Introduzir casos de teste adicionais para conformidade

Esses artefatos derivados só são exigidos **enquanto a salvaguarda estiver ativa**.

### Princípio de design

Salvaguardas existem para responder claramente a uma pergunta:

> "O que é tão perigoso aqui que devemos nos limitar antecipadamente?"

Elas trocam opcionalidade por sobrevivência.

Recomenda-se que as comunidades adotem salvaguardas antecipadamente, em vez de retroativamente, pois a maioria das salvaguardas perde efetividade uma vez que um modo de falha já tenha começado.
