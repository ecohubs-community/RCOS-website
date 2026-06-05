---
id: e5c1b8a4
title: Amnesia institucional
summary: Cuando la comunidad sigue reaprendiendo las mismas lecciones por las malas.
parentId: 6acde7a7
order: 4
severity: medium
stage:
  - growth
  - mature
layers:
  - 6
  - 5
invariants:
  - '6.4'
  - '5.2'
remediationReady: true
tags:
  - 'Layer 6: Evolution'
  - Medium severity
symptoms:
  - >-
    Los mismos conflictos, proyectos fallidos o problemas de incorporación se
    repiten una y otra vez.
  - >-
    Se pierde el porqué de las decisiones pasadas; nadie puede reconstruir el
    razonamiento.
  - >-
    La memoria institucional vive en la cabeza de unas pocas personas veteranas
    — y se va cuando ellas se van.
  - Las personas nuevas repiten errores que la comunidad ya cometió hace años.
  - 'No hay registro de decisiones, experimentos ni lecciones aprendidas.'
preventsWith:
  - rcos-templates/layer-6/learning-log
  - rcos-templates/layer-6/version-history
  - rcos-templates/layer-5/operations-manual
cascade:
  - test: rcos-stress-tests/operations-coordination/rapid-growth-without-onboarding
    relation: feeds
    note: >-
      Sin conocimiento capturado, no se puede poner al día a quienes llegan y
      repiten errores antiguos.
  - test: >-
      rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
    relation: feeds
    note: >-
      Cuando el conocimiento vive solo en cabezas, esas cabezas se vuelven
      imprescindibles.
related:
  - rcos-stress-tests/change-emergencies/irreversible-experiments
lang: es
sourceHash: 92f00fba
---

> **Gravedad:** Media — nunca urgente, siempre acumulativa: la comunidad paga el precio completo por cada lección, una y otra vez.
> **Dónde aprieta:** En las etapas de crecimiento y madurez, y con más fuerza cada vez que se va alguien con mucho recorrido.
> **¿Ya lo estás viviendo?** Salta a [Si ya está ocurriendo](#si-ya-está-ocurriendo).

### ¿Te suena?

Este conflicto se siente conocido — porque la comunidad tuvo casi exactamente el mismo hace tres años, lo manejó, aprendió algo, y luego lo olvidó. El proyecto que acaba de fracasar fracasó de la misma forma que el anterior. Las personas nuevas chocan con los mismos muros con los que chocaron quienes fundaron la comunidad y que ya resolvieron hace mucho. Nadie escribió nada de esto, así que la única memoria que tiene la comunidad vive en la cabeza de unas pocas personas veteranas — y cada vez que una de ellas se va, un trozo de conocimiento conseguido con esfuerzo se va con ella.

### Señales de que te está pasando

- Los mismos conflictos, proyectos fallidos o problemas de incorporación se repiten una y otra vez.
- Se pierde el porqué de las decisiones pasadas; nadie puede reconstruir el razonamiento.
- La memoria institucional vive en la cabeza de unas pocas personas veteranas — y se va cuando ellas se van.
- Las personas nuevas repiten errores que la comunidad ya cometió hace años.
- No hay registro de decisiones, experimentos ni lecciones aprendidas.

**Esto _no_ es lo mismo que** decidir no documentar cosas triviales. La señal es que *las decisiones, conflictos y experimentos significativos no dejan ningún registro recuperable* — así que la comunidad no puede aprender de su propia historia, solo revivirla.

### Por qué ocurre

Capturar el aprendizaje es poco glamuroso y siempre parece menos urgente que la siguiente tarea, así que nunca termina de pasar. Pero una comunidad que no registra sus decisiones y resultados no tiene memoria más allá de sus miembros más antiguos. Paga el precio completo por cada lección una y otra vez, y pierde su historia en el momento en que esas personas se marchan — lo cual, tarde o temprano, hacen todas.

<details data-kind="rationale">
<summary>La prueba de estrés formal (para auditores)</summary>

**Modo de fallo** — Las decisiones, conflictos y experimentos no dejan ningún aprendizaje capturado.

**Capas implicadas** — Capa 6 (Evolución), Capa 5 (Operaciones)

**Invariantes relevantes**

* 6.4 El aprendizaje se captura
* 5.2 El conocimiento operativo está documentado

**Condición de prueba** — Las decisiones y resultados significativos no se registran, y el razonamiento es irrecuperable.

**Comportamiento RCOS esperado** — El aprendizaje y las decisiones se capturan en una forma duradera y recuperable, y se consultan a lo largo del tiempo.

**Criterios de aprobación** — Las lecciones pasadas son recuperables y previenen demostrablemente repeticiones.

**Criterios de fallo** — La comunidad repite sus propios errores.

</details>

### ¿Qué tan madura es tu comunidad en esto?

Aprobado/suspenso es demasiado tosco para la vida real — la mayoría de las comunidades están a medio camino. Encuentra tu escalón y apunta al siguiente.

| Nivel | Cómo se ve |
|---|---|
| **L0 — Implícito** | No se captura nada; la memoria es oral y vive en unas pocas cabezas. |
| **L1 — Nombrado** | El grupo sabe que repite errores pero no ha empezado a registrar. |
| **L2 — Documentado** | Un [Registro de aprendizaje](/articles/rcos-templates/layer-6/learning-log) y los registros de decisiones capturan decisiones, conflictos y resultados significativos. |
| **L3 — Aplicado y ensayado** | El aprendizaje se captura de forma rutinaria *y se consulta de verdad*; una lección pasada ha prevenido demostrablemente una repetición. |

La mayoría de comunidades que se reconocen aquí están en **L0 o L1**. La meta no es la perfección — es subir un escalón.

### Cómo lo previene RCOS

RCOS le da a la comunidad una memoria que sobrevive a sus miembros:

- **[Registro de aprendizaje](/articles/rcos-templates/layer-6/learning-log)** — captura decisiones, experimentos, conflictos y lo que se aprendió.
- **[Historial de versiones](/articles/rcos-templates/layer-6/version-history)** — registra cómo y por qué cambiaron las reglas con el tiempo.
- **[Manual de operaciones](/articles/rcos-templates/layer-5/operations-manual)** — mantén el conocimiento operativo fuera de cabezas individuales.

Mira también la especificación: [Capa 6 — Captura de aprendizaje y retroalimentación](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#84-learning-and-feedback-capture) y [Capa 5 — Documentación y flujo de información](/articles/rcos-core/v0-1/layer-5-operations-coordination#73-documentation-and-information-flow).

### Si ya está ocurriendo

Si la comunidad sigue reviviendo su pasado, empieza una memoria ahora:

1. **Empieza hoy un registro de aprendizaje** — incluso un documento en marcha le gana a la memoria.
2. **Captura hacia atrás las grandes lecciones** que llevan las personas veteranas, antes de que se vayan.
3. **Convierte un breve registro de decisión en un paso estándar,** para que el razonamiento siga siendo recuperable más tarde.

### Qué tiende a desencadenar este fallo

- **[Crecimiento rápido sin incorporación](/articles/rcos-stress-tests/operations-coordination/rapid-growth-without-onboarding)** — sin conocimiento capturado, no se puede poner al día a quienes llegan.
- **[Poder invisible a través de las responsabilidades](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — cuando el conocimiento vive solo en cabezas, esas cabezas se vuelven imprescindibles.

### Pruebas de estrés relacionadas

- **[Experimentos irreversibles](/articles/rcos-stress-tests/change-emergencies/irreversible-experiments)** — el aprendizaje no capturado es lo que hace que los experimentos — reversibles o no — no enseñen nada.
