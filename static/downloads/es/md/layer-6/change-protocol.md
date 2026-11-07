**RCOS — Sistema Operativo de Comunidad Regenerativa**

# Protocolo de Cambios

- **Generado:** 2026-11-06
- **Fuente (versión más reciente):** [https://rcos.ecohubs.community/es/articles/rcos-templates/layer-6/change-protocol](https://rcos.ecohubs.community/es/articles/rcos-templates/layer-6/change-protocol)
- **Todas las plantillas RCOS:** [https://rcos.ecohubs.community/es/articles/rcos-templates](https://rcos.ecohubs.community/es/articles/rcos-templates)

---
- **Capa:** 6 — Evolución y Adaptación
- **Estado:** Plantilla — adaptar para tu comunidad
- **Referencia RCOS:** [§8.1](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.1), [§8.5](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.5), [§8.6](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.6)

> Define cómo cambian las reglas de la comunidad: cómo se propone, clasifica, revisa, adopta o rechaza, implementa y revierte un cambio — además de las vías estrechas para cambios de emergencia y experimentos.

---

## Cómo se proponen los cambios

*Cláusulas RCOS: [8.1.1](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.1.1), [8.1.3](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.1.3), [8.6.3](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.6.3), [8.8.1](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.8.1)*

_<Cualquier Miembro Pleno puede proponer un cambio a cualquier artefacto RCOS. Indica el canal de envío.>_ Cada propuesta DEBE incluir:

- _<Resumen del cambio.>_
- _<Capas y artefactos afectados (con enlaces).>_
- _<Tipo de decisión (Operativa / Estratégica / Constitucional).>_
- _<Justificación.>_
- _<Riesgos y mitigaciones.>_
- _<Plan de reversión.>_
- _<Fecha de entrada en vigor propuesta.>_

## Cómo se clasifican las propuestas

*Cláusulas RCOS: [8.1.2](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.1.2), [8.1.4](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.1.4), [8.6.3](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.6.3)*

- **Operativa:** _<correcciones de redacción, formato, actualizaciones menores de contenido; sin votación requerida; ejecutada por el rol responsable dentro de los límites delegados.>_
- **Estratégica:** _<cambios en el contenido de las Capas 1–5 que afectan derechos de miembros, procesos o estructuras.>_
- **Constitucional:** _<cambios en la Capa 0 (propósito, alcance, invariantes) o en el propio sistema de gobernanza (Capa 2).>_

> Si la clasificación no está clara, se aplica por defecto el tipo de mayor impacto.

## Revisión y deliberación

*Cláusulas RCOS: [8.1.2](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.1.2), [8.6.3](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.6.3), [8.7.1](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.7.1)*

- **Operativa:** _<sin deliberación requerida.>_
- **Estratégica:** _<mínimo X días de deliberación; lugar de deliberación.>_
- **Constitucional:** _<mínimo Y días de deliberación; Z días de periodo de ratificación tras la aprobación de la votación.>_

## Adopción y publicación

*Cláusulas RCOS: [8.2.1](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.2.1), [8.2.2](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.2.2), [8.2.5](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.2.5), [8.6.3](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.6.3)*

Cuando una propuesta se aprueba:

1. _<El archivo de la propuesta se mueve al archivo de propuestas aprobadas en un plazo de X días.>_
2. _<Los artefactos afectados se actualizan en un plazo de X días.>_
3. _<Se añade una entrada en el historial de versiones.>_
4. _<Se actualizan los campos de estado en los artefactos afectados.>_

## Rechazo

*Cláusulas RCOS: [8.2.2](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.2.2), [8.2.4](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.2.4), [8.6.3](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.6.3)*

Cuando una propuesta es rechazada:

1. _<El archivo de la propuesta se mueve al archivo de propuestas rechazadas en un plazo de X días.>_
2. _<No se realizan cambios en los artefactos.>_
3. _<Se aplica el mecanismo de re-votación si surge nueva información (según la Matriz de Decisión, Capa 2).>_

## Transición y migración

*Cláusulas RCOS: [8.5.1](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.5.1), [8.5.2](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.5.2), [8.6.3](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.6.3)*

Cuando un cambio de regla afecta roles, acuerdos o registros existentes:

- _<Los titulares de roles existentes son notificados antes de que el cambio entre en vigor.>_
- _<Los derechos de los miembros existentes no pueden reducirse sin consentimiento o una votación Constitucional.>_
- _<Los registros anteriores al cambio no se alteran retroactivamente a menos que sea parte explícita de la propuesta.>_
- _<Se puede definir un periodo de transición en la propia propuesta.>_

## Reversión

*Cláusulas RCOS: [8.1.5](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.1.5), [8.5.1](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.5.1), [8.6.3](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.6.3)*

_<Cualquier decisión aprobada puede revertirse mediante el mismo proceso que la original. Cualquier Miembro Pleno puede activar una re-votación presentando una objeción razonada por escrito que no fue considerada durante la deliberación original. La reversión utiliza el mismo tipo de decisión que la original.>_

## Cambios de emergencia

*Cláusulas RCOS: [8.5.3](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.5.3), [8.6.3](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.6.3)*

Un cambio operativo de emergencia puede ser realizado por _<rol>_ solo si se cumplen todas las condiciones siguientes:

1. _<Se requiere acción inmediata para prevenir un daño a la seguridad o un fallo de plataforma.>_
2. _<No se puede convocar una votación de Miembros Plenos a tiempo.>_
3. _<El cambio no anula un invariante de la Capa 0.>_

Los cambios de emergencia DEBEN:

- _<Ser comunicados a todos los Miembros Plenos en un plazo de X horas.>_
- _<Ser revisados en la siguiente reunión comunitaria.>_
- _<Ser ratificados mediante el tipo de decisión correspondiente en un plazo de Y días, o revertidos automáticamente.>_

## Experimentos

*Cláusulas RCOS: [8.3.1](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.3.1), [8.3.2](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.3.2), [8.3.3](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.3.3), [8.3.4](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.3.4), [8.3.5](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.3.5), [8.7.3](https://rcos.ecohubs.community/es/standard/core/0.1/layer-6-evolution-adaptation#8.7.3)*

_<Cualquier Miembro Pleno puede proponer un experimento con duración limitada mediante decisión Estratégica. Consulta la Plantilla de Experimento para los campos requeridos.>_

- _<Los experimentos expiran automáticamente al final de su duración definida a menos que se renueven explícitamente mediante una nueva propuesta.>_
- _<Todos los artefactos afectados por un experimento DEBEN estar explícitamente etiquetados como experimentales durante su vigencia.>_
- _<Suspensión de seguridad: si un experimento introduce un riesgo de seguridad creíble, coerción o daño sostenido, se puede invocar una suspensión de emergencia conforme a los Cambios de emergencia descritos arriba.>_
- _<Los resultados y aprendizajes se registran en el Registro de Aprendizajes.>_

---

## Registro de ratificación

- **Adoptado:** <AAAA-MM-DD>
- **Tipo de decisión:** Constitucional
- **Versión:** <versión>
- **Registro de decisión:** <enlace al registro de decisión>
