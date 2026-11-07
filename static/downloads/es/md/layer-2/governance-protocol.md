**RCOS — Sistema Operativo de Comunidad Regenerativa**

# Protocolo de Gobernanza

- **Generado:** 2026-11-06
- **Fuente (versión más reciente):** [https://rcos.ecohubs.community/es/articles/rcos-templates/layer-2/governance-protocol](https://rcos.ecohubs.community/es/articles/rcos-templates/layer-2/governance-protocol)
- **Todas las plantillas RCOS:** [https://rcos.ecohubs.community/es/articles/rcos-templates](https://rcos.ecohubs.community/es/articles/rcos-templates)

---
- **Capa:** 2 — Gobernanza y Lógica de Decisión
- **Estado:** Plantilla — adaptar para tu comunidad
- **Referencia RCOS:** [§4.5](https://rcos.ecohubs.community/es/standard/core/0.1/layer-2-governance-decision-logic#4.5), [§4.6](https://rcos.ecohubs.community/es/standard/core/0.1/layer-2-governance-decision-logic#4.6), [§4.7](https://rcos.ecohubs.community/es/standard/core/0.1/layer-2-governance-decision-logic#4.7)

> Define el ciclo de vida completo de una decisión colectiva — desde la presentación de la propuesta hasta la documentación y la apelación.

---

## Presentación de Propuestas

*Cláusulas RCOS: [4.5.1](https://rcos.ecohubs.community/es/standard/core/0.1/layer-2-governance-decision-logic#4.5.1), [4.5.2](https://rcos.ecohubs.community/es/standard/core/0.1/layer-2-governance-decision-logic#4.5.2)*

- _<Decisiones operativas — gestionadas por el titular del rol correspondiente según el Registro de Roles; no se requiere propuesta.>_
- _<Decisiones estratégicas y constitucionales — quién puede presentarlas y en qué plataforma.>_
- _<Campos obligatorios de la propuesta: resumen, capas y artefactos afectados, tipo de decisión, justificación, riesgos y mitigaciones, plan de reversión, fecha de entrada en vigor propuesta.>_
- _<El tipo de decisión lo declara quien propone; por defecto se asigna el tipo de mayor impacto si no está claro.>_
- _<Reglas de retirada — cuándo se puede retirar una propuesta y cómo.>_

## Revisión y Deliberación

*Cláusulas RCOS: [4.5.1](https://rcos.ecohubs.community/es/standard/core/0.1/layer-2-governance-decision-logic#4.5.1), [4.5.2](https://rcos.ecohubs.community/es/standard/core/0.1/layer-2-governance-decision-logic#4.5.2)*

- _<Dónde se lleva a cabo la deliberación (foro, chat, reunión).>_
- _<Período mínimo de deliberación antes de abrir votación — Estratégica.>_
- _<Período mínimo de deliberación antes de abrir votación — Constitucional.>_
- _<Expectativa de que los miembros planteen inquietudes durante la deliberación para evitar la necesidad de revotaciones.>_

## Ejecución de la Decisión

*Cláusulas RCOS: [4.5.1](https://rcos.ecohubs.community/es/standard/core/0.1/layer-2-governance-decision-logic#4.5.1), [4.5.2](https://rcos.ecohubs.community/es/standard/core/0.1/layer-2-governance-decision-logic#4.5.2), [4.5.4](https://rcos.ecohubs.community/es/standard/core/0.1/layer-2-governance-decision-logic#4.5.4)*

- _<Al aprobarse: cómo se archiva la propuesta; artefactos afectados actualizados; entrada en el historial de versiones registrada.>_
- _<Al rechazarse: dónde se archiva la propuesta.>_
- _<Plazo para la ejecución después de que concluye una votación.>_

## Documentación y Publicación

*Cláusulas RCOS: [4.5.2](https://rcos.ecohubs.community/es/standard/core/0.1/layer-2-governance-decision-logic#4.5.2), [4.5.4](https://rcos.ecohubs.community/es/standard/core/0.1/layer-2-governance-decision-logic#4.5.4)*

- _<Todas las propuestas aprobadas y rechazadas se archivan dentro de los X días posteriores al cierre de la votación.>_
- _<El artefacto de votación (p. ej., enlace de Snapshot) sirve como registro de decisión.>_
- _<El historial de versiones (Capa 6) se actualiza con cada propuesta aprobada.>_

## Apelación y Revisión

*Cláusulas RCOS: [4.5.2](https://rcos.ecohubs.community/es/standard/core/0.1/layer-2-governance-decision-logic#4.5.2), [4.6.2](https://rcos.ecohubs.community/es/standard/core/0.1/layer-2-governance-decision-logic#4.6.2)*

- _<Quién puede solicitar una revotación y cómo.>_
- _<Requisito de objeción razonada — una consideración no abordada en la deliberación original.>_
- _<La revotación utiliza el mismo mecanismo y umbral que la original.>_
- _<Tratamiento de solicitudes de revotación reiteradas y frívolas.>_

## Conflicto entre Decisiones

*Cláusulas RCOS: [4.5.3](https://rcos.ecohubs.community/es/standard/core/0.1/layer-2-governance-decision-logic#4.5.3)*

- _<Precedencia: Constitucional > Estratégica > Operativa.>_
- _<Conflictos del mismo tipo: la más reciente prevalece, salvo que la anterior haya bloqueado explícitamente cambios futuros.>_
- _<Dónde se plantean los conflictos y cómo se resuelven.>_

## Salvaguardas y Modos de Fallo

*Cláusulas RCOS: [4.6.1](https://rcos.ecohubs.community/es/standard/core/0.1/layer-2-governance-decision-logic#4.6.1), [4.6.2](https://rcos.ecohubs.community/es/standard/core/0.1/layer-2-governance-decision-logic#4.6.2), [4.6.3](https://rcos.ecohubs.community/es/standard/core/0.1/layer-2-governance-decision-logic#4.6.3)*

- **Concentración de poder:** _<cómo el protocolo previene la autoridad unilateral más allá del ámbito operativo.>_
- **Vetos informales:** _<regla de que solo las objeciones escritas y razonadas presentadas a través del proceso definido tienen peso.>_
- **Captura de decisiones:** _<regla sobre quórum y apertura de la votación.>_
- **Atrincheramiento de fundadores/roles:** _<regla de que ningún rol otorga autoridad permanente; los fundadores no tienen autoridad de gobernanza especial más allá de su estado de membresía.>_
- **Impugnación sin represalias:** _<referencia a las disposiciones anti-represalias de la Capa 4.>_
- **Disparador por fallos persistentes:** _<p. ej., tres o más fallos de gobernanza en X meses activan una revisión Constitucional.>_

---

## Registro de Ratificación

- **Adoptado:** <AAAA-MM-DD>
- **Tipo de decisión:** Constitucional
- **Versión:** <versión>
- **Registro de decisión:** <enlace al registro de decisión>
