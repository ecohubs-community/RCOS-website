---
id: 6gcf15u
title: Toma de decisiones por camarilla informal
summary: >-
  Cuando las decisiones reales ocurren antes de la reunión, entre las mismas
  pocas personas.
parentId: 7f25f268
order: 2
severity: high
stage:
  - growth
  - mature
layers:
  - 2
  - 1
invariants:
  - '2.4'
  - '1.1'
remediationReady: true
tags:
  - 'Layer 2: Governance'
  - High severity
symptoms:
  - Las decisiones parecen "ya tomadas" cuando llegan al grupo entero.
  - >-
    Un subgrupo recurrente (la mesa de la cocina, un hilo de chat, los
    "originales") da forma a los resultados.
  - >-
    Hay pocos o ningún registro de decisiones; no puedes reconstruir cómo se
    decidieron las cosas.
  - >-
    Los miembros más nuevos o periféricos sienten una clara línea entre el grupo
    interno y el externo.
  - '"Ya hablamos de eso" cierra discusiones que nunca ocurrieron formalmente.'
preventsWith:
  - rcos-templates/layer-2/decision-matrix
  - rcos-templates/layer-2/governance-protocol
  - rcos-templates/layer-5/meeting-templates
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: enables
    note: >-
      Un grupo externo aprende rápido a no desafiar al grupo interno, y la
      evitación se vuelve la norma.
  - test: rcos-stress-tests/governance-power/founder-informal-veto
    relation: feeds
    note: >-
      La camarilla suele formarse en torno a una autoridad informal cuyas
      preferencias ejecuta.
related:
  - rcos-stress-tests/governance-power/dominant-speakers-decision-spaces
lang: es
sourceHash: d8227bca
---

> **Severidad:** Alta — la autoridad migra fuera del registro, donde no se la puede ver ni revisar.
> **Dónde aprieta:** Etapas de crecimiento y madurez, a medida que la confianza y los canales paralelos se profundizan.
> **¿Ya vives esto?** Salta a [Si ya está ocurriendo](#si-ya-está-ocurriendo).

### ¿Te suena familiar?

Cuando una pregunta llega al grupo entero, ya tiene respuesta. El mismo puñado de personas — los fundadores, los que viven más cerca, los del hilo de chat nocturno — ya lo han hablado, y la reunión es en realidad una mera ratificación. Nada se decidió a propósito en una sala llena de humo. Es simplemente más rápido resolver las cosas entre la gente con la que ya hablas. Pero todos los que están fuera de ese círculo pueden sentir la línea, y el registro de *cómo* se decidió cualquier cosa sencillamente no existe.

### Señales de que esto te está pasando

- Las decisiones parecen "ya tomadas" cuando llegan al grupo entero.
- Un subgrupo recurrente da forma a los resultados fuera de cualquier proceso formal.
- Hay pocos o ningún registro de decisiones; no puedes reconstruir cómo se decidieron las cosas.
- Los miembros más nuevos o periféricos sienten una clara línea entre el grupo interno y el externo.
- "Ya hablamos de eso" cierra discusiones que nunca ocurrieron formalmente.

**Esto _no_ es lo mismo que** un grupo de trabajo delegado con un mandato documentado. La señal reveladora es que *la autoridad migró fuera del registro* — los resultados surgen sin un mecanismo rastreable, y la pertenencia al círculo decisor nunca fue declarada.

### Por qué ocurre

A medida que se forma la confianza, las personas que más hablan fuera de las reuniones empiezan a resolver cosas informalmente — es más rápido y se siente natural. Pero las decisiones tomadas fuera del registro no se pueden revisar, y los límites del círculo decisor nunca se declaran, así que el poder se concentra silenciosamente en un grupo interno que nadie nombró formalmente y al que nadie puede pedir cuentas formalmente.

<details data-kind="rationale">
<summary>La prueba de estrés formal (para auditores)</summary>

**Modo de Fallo** — Las decisiones se desplazan a subgrupos informales.

**Capas Involucradas** — Capa 2 (Gobernanza), Capa 1 (Membresía)

**Invariantes Relevantes**

* 2.4 Las decisiones son revisables
* 1.1 No hay membresía implícita

**Condición de Prueba** — Los resultados emergen sin registros formales de decisión.

**Comportamiento RCOS Esperado** — Las decisiones tomadas fuera de los canales formales son inválidas.

**Criterio de Aprobación** — La autoridad permanece legible y revisable.

**Criterio de Fallo** — El poder migra fuera del registro.

</details>

### ¿Qué tan madura es tu comunidad en esto?

Aprobar/reprobar es demasiado tosco para la vida real — la mayoría de las comunidades están a medio camino. Encuentra tu peldaño y apunta al siguiente.

| Nivel | Cómo se ve |
|---|---|
| **L0 — Implícito** | Las decisiones reales ocurren en subgrupos informales; el proceso formal las ratifica después de los hechos. |
| **L1 — Nombrado** | El grupo percibe una dinámica de camarilla pero no ha exigido que las decisiones queden en el registro. |
| **L2 — Documentado** | Una [matriz de decisiones](/articles/rcos-templates/layer-2/decision-matrix) define qué debe decidirse por canales formales y registrados; los resultados fuera de canal son inválidos. |
| **L3 — Aplicado y ensayado** | Las decisiones son legibles y revisables; las resoluciones informales se traen rutinariamente de vuelta al registro. |

La mayoría de las comunidades que se reconocen aquí están en **L0 o L1**. El objetivo no es la perfección — es subir un peldaño.

### Cómo RCOS lo previene

RCOS mantiene la autoridad legible exigiendo que las decisiones queden en el registro:

- **[Matriz de Decisiones](/articles/rcos-templates/layer-2/decision-matrix)** — define qué decisiones requieren un proceso formal y registrado.
- **[Protocolo de Gobernanza](/articles/rcos-templates/layer-2/governance-protocol)** — declara explícitamente inválidas las decisiones tomadas fuera de los canales formales.
- **[Plantillas de Reuniones](/articles/rcos-templates/layer-5/meeting-templates)** — registra las decisiones para que la autoridad siga siendo revisable, no recordada.

Ver también la especificación: [Capa 2 — Matriz de Decisiones](/articles/rcos-core/v0-1/layer-2-governance-decision-logic#44-decision-matrix) y [Capa 5 — Documentación y Flujo de Información](/articles/rcos-core/v0-1/layer-5-operations-coordination#73-documentation-and-information-flow).

### Si ya está ocurriendo

No tienes que romper amistades — tienes que traer las decisiones de vuelta al registro:

1. **Exige un registro de decisión.** Nada cuenta como decidido a menos que esté escrito donde todos puedan verlo.
2. **Saca a la luz el lugar real.** Lleva la conversación decisoria real a un canal abierto y con actas.
3. **Nombra el mandato.** Si un subgrupo debe decidir algunas cosas, dale un mandato explícito y delimitado; de lo contrario, disuelve su autoridad informal.
4. **Vigila la cascada** — el gobierno por camarilla corroe la claridad de la membresía y enseña al grupo externo a dejar de hablar.

### Qué tiende a desencadenar este fallo

- **[Normalización de la evitación del conflicto](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — un grupo externo aprende rápido a no desafiar al grupo interno.
- **[Veto informal del fundador](/articles/rcos-stress-tests/governance-power/founder-informal-veto)** — la camarilla suele formarse en torno a, y ejecutar las preferencias de, una autoridad informal.

### Pruebas de estrés relacionadas

- **[Oradores dominantes en los espacios de decisión](/articles/rcos-stress-tests/governance-power/dominant-speakers-decision-spaces)** — la versión dentro de la reunión de la misma deriva de la autoridad fuera de los mecanismos acordados.
