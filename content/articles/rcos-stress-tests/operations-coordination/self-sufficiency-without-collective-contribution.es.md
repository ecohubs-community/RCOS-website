---
id: d2f7a4e9
title: Autosuficiencia sin contribución colectiva
summary: Cuando todos disfrutan de los bienes comunes pero casi nadie los mantiene.
parentId: a9e4c65d
order: 3
severity: high
stage:
  - growth
  - mature
layers:
  - 1
  - 5
  - 3
invariants:
  - '1.3'
  - '3.3'
  - '5.3'
remediationReady: true
tags:
  - Contribución y compromiso
  - Severidad alta
symptoms:
  - >-
    El mismo puñado de personas organiza cada jornada de trabajo, reunión y
    reparación.
  - >-
    Las llamadas a colaborar en tareas compartidas reciben un cálido acuerdo,
    pero pocas personas aparecen realmente.
  - >-
    Las personas miembras son muy capaces en sus propias parcelas, pero rara vez
    aparecen en los proyectos colectivos.
  - >-
    "Alguien debería realmente…" se dice a menudo; "yo lo haré" se dice rara
    vez.
  - No queda claro qué se espera realmente que aporte cada miembra.
preventsWith:
  - rcos-templates/layer-1/membership-agreement
  - rcos-templates/layer-5/role-registry
  - rcos-templates/layer-3/internal-economy-protocol
  - rcos-templates/layer-1/onboarding-protocol
cascade:
  - test: >-
      rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
    relation: enables
    note: >-
      Cuando solo unas pocas personas comprometidas sostienen el trabajo
      colectivo, acumulan una influencia informal y sin rendición de cuentas
      sobre cómo opera la comunidad.
  - test: rcos-stress-tests/operations-coordination/invisible-care-labor-burnout
    relation: feeds
    note: >-
      El núcleo cada vez más pequeño absorbe cada vez más trabajo no compensado
      — la imagen espejo de esta prueba: si hay muy pocas personas implicadas,
      quienes sí lo están quedan sobrecargadas.
related:
  - rcos-stress-tests/economy-resources/outsourced-labor-bypassing-contribution
lang: es
sourceHash: 47f76c03
---

> **Severidad:** Alta — rara vez es una crisis en un día concreto, pero sí una erosión lenta que estanca a la comunidad y agota silenciosamente a las pocas personas que la sostienen.
> **Dónde aprieta:** Normalmente cuando se desvanece la novedad fundacional — las etapas de crecimiento y madurez — aunque la semilla se planta al entrar.
> **¿Ya lo estás viviendo?** Salta a [Si ya está ocurriendo](#si-ya-está-ocurriendo).

### ¿Te suena?

Aquí todo el mundo vive bien. Las personas cuidan sus propios huertos, arreglan sus propias casas, viven con ligereza y solvencia. Los valores compartidos son reales — todo el mundo *cree* en los bienes comunes, en el bosque comestible, en la visión colectiva. Y sin embargo, la jornada de trabajo siempre tiene las mismas seis personas. La reunión para planificar la temporada está poco concurrida. La infraestructura compartida se degrada poco a poco, no porque nadie se oponga, sino porque mantenerla no es tarea de nadie en particular. La comunidad está llena de personas autosuficientes y se está muriendo de hambre, lentamente, por falta de esfuerzo colectivo.

### Señales de que te está pasando

- El mismo puñado de personas organiza cada jornada de trabajo, reunión y reparación.
- Las llamadas a colaborar en tareas compartidas reciben un cálido acuerdo, pero pocas personas aparecen realmente.
- Las personas miembras son muy capaces en sus propias parcelas, pero rara vez aparecen en los proyectos colectivos.
- "Alguien debería realmente…" se dice a menudo; "yo lo haré" se dice rara vez.
- No queda claro qué se espera realmente que aporte cada miembra — y nadie quiere preguntar.

**Esto _no_ es lo mismo que** una comunidad que ha minimizado *deliberadamente* las obligaciones compartidas — por ejemplo, un proyecto de co-housing que por diseño solo comparte el terreno y la infraestructura. La señal aquí es una **brecha entre los objetivos compartidos declarados y la contribución real**: gente que dice querer unos bienes comunes prósperos pero no los dota de recursos. Bajo compromiso *por diseño* es una elección válida; bajo compromiso *a pesar de una ambición compartida* es el fallo.

### Por qué ocurre

Las personas autosuficientes pueden cubrir la mayor parte de sus necesidades por sí mismas, así que el tirón cotidiano hacia la contribución colectiva es débil — los bienes comunes se sienten como un telón de fondo, no como una responsabilidad. Cuando las expectativas de contribución nunca se hacen explícitas, los bienes comunes se convierten en un *bien gratuito*: todo el mundo los consume, nadie está obligado a mantenerlos, y el cuidado recae silenciosamente sobre quien más le importa. Los *valores* compartidos hacen que todo el mundo se sienta alineado, lo que enmascara la ausencia de *compromiso* compartido. Como en realidad no se debe nada, la contribución funciona a base de humor y buena voluntad — y la buena voluntad no escala ni sobrevive a una mala temporada.

<details data-kind="rationale">
<summary>La prueba de estrés formal (para auditoras)</summary>

**Modo de fallo** — Las personas miembras viven de forma sostenible y disfrutan de los bienes comunes, pero rara vez contribuyen a las responsabilidades compartidas o a los objetivos colectivos. Existen valores compartidos, pero no compromiso compartido.

**Capas implicadas** — Capa 1 (Membresía), Capa 5 (Operaciones), Capa 3 (Economía)

**Invariantes relevantes**

* 1.3 Simetría entre derechos y obligaciones
* 3.3 El reconocimiento de la contribución es explícito
* 5.3 El tiempo y la atención son recursos finitos

**Condición de prueba** — Las personas miembras se benefician de los bienes comunes y del estilo de vida compartido mientras el trabajo colectivo queda sin hacer; las expectativas de contribución son débiles, no están declaradas o se dejan en manos de la buena voluntad; el mismo pequeño núcleo sostiene y desarrolla la comunidad mientras la mayoría se desentiende.

**Comportamiento esperado del RCOS** — Las expectativas de contribución se hacen explícitas y se vinculan a los derechos de membresía; las responsabilidades colectivas están vinculadas a roles y se hacen seguibles; la falta de contribución persistente activa una revisión definida.

**Criterio de aprobación** — Las responsabilidades compartidas se sostienen sin depender de una minoría comprometida, y derechos y obligaciones permanecen simétricos entre las personas miembras.

**Criterio de fallo** — Los beneficios se desacoplan de la contribución; el mantenimiento depende de un núcleo cada vez más pequeño hasta que se estanca o colapsa.

</details>

### ¿Qué tan madura es tu comunidad en esto?

El aprobado/suspenso es demasiado tosco para la vida real — la mayoría de las comunidades están a medio camino. Encuentra tu peldaño y luego apunta al siguiente.

| Nivel | Cómo se ve |
|---|---|
| **L0 — Implícito** | Se asume que la contribución "ocurrirá de forma natural". Nadie declara lo que se espera, y unas pocas personas calladas cargan con el resto. |
| **L1 — Nombrado** | El grupo admite abiertamente que el compromiso es desigual y habla de ello, pero las expectativas siguen siendo informales y sin aplicación. |
| **L2 — Documentado** | Las expectativas de contribución están escritas en el [Acuerdo de Membresía](/articles/rcos-templates/layer-1/membership-agreement), y el trabajo colectivo recurrente existe como roles con nombre. Las personas miembras saben a qué se han comprometido. |
| **L3 — Aplicado y ensayado** | La contribución se sigue y se reconoce; la carga se comparte y se reequilibra visiblemente a lo largo del tiempo; la falta de contribución persistente activa una revisión definida en lugar de un resentimiento silencioso. |

La mayoría de las comunidades que se reconocen en esta prueba están en **L0 o L1**. El objetivo no es la perfección — es subir un peldaño.

### Cómo lo previene el RCOS

El RCOS sustituye el "esperamos que la gente arrime el hombro" por un compromiso explícito y simétrico. Construye estas piezas **antes** de que el desentendimiento se convierta en norma:

- **[Acuerdo de Membresía](/articles/rcos-templates/layer-1/membership-agreement)** — vincula expectativas concretas de contribución a los derechos de membresía, para que disfrutar de los bienes comunes y mantenerlos formen parte del mismo trato (Invariante 1.3, [derechos y obligaciones](/articles/rcos-core/v0-1/layer-1-membership-system#34-rights-and-obligations)).
- **[Registro de Roles](/articles/rcos-templates/layer-5/role-registry)** — convierte el trabajo colectivo recurrente en roles con nombre y dueña, en lugar de dejarlo en manos de quien se dé cuenta.
- **[Protocolo de Economía Interna](/articles/rcos-templates/layer-3/internal-economy-protocol)** — define qué cuenta como contribución y reconócelo (créditos, reputación), para que la participación sea visible y valorada ([reconocimiento de la contribución](/articles/rcos-core/v0-1/layer-3-economic-resource-system#52-contribution-recognition)).
- **[Protocolo de Acogida](/articles/rcos-templates/layer-1/onboarding-protocol)** — establece la norma de contribución desde la entrada, antes de que el patrón de desentendimiento tenga ocasión de formarse.

### Si ya está ocurriendo

Si los bienes comunes ya funcionan sobre un núcleo cada vez más pequeño, no puedes "prevenir" esto — tienes que reequilibrarlo. Triaje, en este orden:

1. **Haz visible la carga.** Haz una auditoría rápida de contribución: ¿quién está sosteniendo realmente el trabajo colectivo ahora mismo? El objetivo no es señalar culpas — son datos compartidos que terminan con la cortés ficción de que todo el mundo arrima el hombro por igual.
2. **Convierte las dependencias frágiles en roles.** Empieza por lo que se rompería si una persona se va, y dale un [rol](/articles/rcos-templates/layer-5/role-registry) con nombre y suplencia.
3. **Renegocia las expectativas abiertamente, con consentimiento.** Añade expectativas explícitas de contribución al [Acuerdo de Membresía](/articles/rcos-templates/layer-1/membership-agreement) de cara al futuro — un acuerdo transparente es mejor que el resentimiento silencioso.
4. **Reconoce en voz alta la contribución existente.** Las personas vuelven a implicarse cuando el esfuerzo es *visto*; un [Protocolo de Economía Interna](/articles/rcos-templates/layer-3/internal-economy-protocol) hace ese reconocimiento sistemático en lugar de depender del agradecimiento.
5. **Vigila la cascada** (más abajo) — tu núcleo comprometido ya va camino del agotamiento y del poder informal accidental.

### Qué tiende a desencadenar este fallo

El compromiso colectivo débil rara vez se queda contenido. Produce silenciosamente dos fallos derivados:

- **[Poder invisible mediante responsabilidades](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — cuando solo unas pocas personas comprometidas sostienen el trabajo colectivo, acumulan una influencia informal y sin rendición de cuentas sobre cómo opera la comunidad.
- **[Agotamiento por trabajo de cuidados invisible](/articles/rcos-stress-tests/operations-coordination/invisible-care-labor-burnout)** — la imagen espejo de esta prueba: si hay muy pocas personas implicadas, el núcleo cada vez más pequeño absorbe cada vez más trabajo no compensado hasta agotarse.

### Pruebas de estrés relacionadas

- **[Trabajo externalizado eludiendo la contribución](/articles/rcos-stress-tests/economy-resources/outsourced-labor-bypassing-contribution)** — la prima monetaria: las expectativas de contribución existen, pero se eluden contratando fuera, mientras que aquí se eluden desentendiéndose. El mismo eslabón roto entre beneficio y contribución.
