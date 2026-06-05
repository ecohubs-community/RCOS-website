---
id: 7b1c4e02
title: Trabajo externalizado que elude la contribución
summary: Cuando el dinero compra silenciosamente una salida de la vida comunitaria.
parentId: cbd2804b
order: 1
severity: medium
stage:
  - growth
  - mature
layers:
  - 3
  - 1
  - 4
invariants:
  - '1.3'
  - '3.3'
  - '4.1'
remediationReady: true
tags:
  - 'Capa 3: Economía'
  - Severidad media
symptoms:
  - >-
    Un miembro más adinerado paga a personas externas para cubrir su parte del
    trabajo comunal.
  - >-
    Existen requisitos de contribución, pero se satisfacen silenciosamente con
    dinero.
  - Crece el resentimiento entre quienes aparecen y quienes firman cheques.
  - No hay regla acordada sobre si el dinero puede sustituir a la participación.
  - >-
    El esfuerzo y la riqueza se vuelven intercambiables sin que nadie haya
    decidido que así debería ser.
preventsWith:
  - rcos-templates/layer-3/internal-economy-protocol
  - rcos-templates/layer-1/membership-agreement
  - rcos-templates/layer-4/accountability-protocol
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: feeds
    note: >-
      El resentimiento entre participación y pago es exactamente el tipo de
      conflicto que se evita hasta que se endurece en líneas de clase.
related:
  - >-
    rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution
  - rcos-stress-tests/economy-resources/commons-privatization-through-land-sales
lang: es
sourceHash: eb16b79a
---

> **Severidad:** Media — corrosiva más que catastrófica, pero estratifica silenciosamente a la comunidad.
> **Dónde golpea:** Etapas de crecimiento y madurez, una vez que la riqueza de los miembros empieza a divergir.
> **¿Ya estás viviendo esto?** Salta a [Si ya está ocurriendo](#si-ya-está-ocurriendo).

### ¿Te suena familiar?

La comunidad espera que todo el mundo arrime el hombro en el trabajo compartido — las jornadas de construcción, la cosecha, las reparaciones. Un miembro, más ocupado o más adinerado que el resto, empieza a pagar a un contratista para cubrir su parte. Es eficiente. El trabajo se sigue haciendo. Pero quienes aparecen con sus propias manos empiezan a notar que, para algunos miembros, la pertenencia es algo que simplemente se puede comprar, y un resentimiento silencioso empieza a separar a quienes participan de quienes pagan.

### Señales de que esto te está pasando

- Un miembro más adinerado paga a personas externas para cubrir su parte del trabajo comunal.
- Existen requisitos de contribución, pero se satisfacen silenciosamente con dinero.
- Crece el resentimiento entre quienes aparecen y quienes firman cheques.
- No hay regla acordada sobre si el dinero puede sustituir a la participación.
- El esfuerzo y la riqueza se vuelven intercambiables sin que nadie haya decidido que así debería ser.

**Esto _no_ es lo mismo que** una comunidad que ha acordado explícitamente que el dinero puede sustituir al trabajo (una equivalencia declarada). La señal es *elusión sin acuerdo* — existen expectativas de contribución, pero la riqueza las anula silenciosamente.

### Por qué ocurre

Cuando se espera contribución pero su relación con el dinero queda sin definir, quienes pueden pagar lo harán — es racional y fácil. Sin abordarlo, convierte la riqueza en una exención de la vida comunitaria, estratificando silenciosamente a los miembros entre quienes participan y quienes compran su salida, y corroyendo la simetría derechos–obligaciones sobre la que se supone que descansa la pertenencia.

<details data-kind="rationale">
<summary>La prueba de estrés formal (para auditores)</summary>

**Modo de fallo** — Un miembro evita la contribución y contrata trabajo externo en su lugar.

**Capas involucradas** — Capa 3 (Economía), Capa 1 (Membresía), Capa 4 (Rendición de cuentas)

**Invariantes relevantes**

* 1.3 Simetría derechos–obligaciones
* 3.3 El reconocimiento de la contribución es explícito
* 4.1 El conflicto DEBE ser gestionado

**Condición de prueba** — Existen expectativas de contribución, pero se eluden mediante dinero.

**Comportamiento esperado de RCOS** — Determinar si la externalización está permitida; aplicar reglas de equivalencia o activar un proceso de rendición de cuentas.

**Criterios de aprobación** — La lógica de contribución se aplica de forma coherente.

**Criterios de fallo** — La riqueza reemplaza a la participación sin acuerdo.

</details>

### ¿Qué tan madura es tu comunidad en esto?

Aprobado/suspenso es demasiado tajante para la vida real — la mayoría de las comunidades están a medio camino. Encuentra tu peldaño y apunta al siguiente.

| Nivel | Cómo se ve |
|---|---|
| **L0 — Implícito** | Si el dinero puede reemplazar a la participación está sin definir; la gente compra su salida silenciosamente. |
| **L1 — Nombrado** | La tensión está reconocida pero no existe regla de equivalencia ni vía de rendición de cuentas. |
| **L2 — Documentado** | El [Protocolo de Economía Interna](/articles/rcos-templates/layer-3/internal-economy-protocol) establece si y cómo el dinero sustituye al trabajo; el [Acuerdo de Membresía](/articles/rcos-templates/layer-1/membership-agreement) vincula obligaciones con derechos. |
| **L3 — Aplicado y ensayado** | La lógica de contribución se aplica de forma coherente; una elusión activa la regla de equivalencia acordada o un proceso de rendición de cuentas — y lo ha hecho. |

La mayoría de las comunidades que se reconocen aquí están en **L0 o L1**. El objetivo no es la perfección — es subir un peldaño.

### Cómo RCOS previene esto

RCOS obliga a la comunidad a *decidir* la relación dinero–trabajo en lugar de dejarla por defecto:

- **[Protocolo de Economía Interna](/articles/rcos-templates/layer-3/internal-economy-protocol)** — decide explícitamente si el dinero puede sustituir al trabajo, y con qué equivalencia.
- **[Acuerdo de Membresía](/articles/rcos-templates/layer-1/membership-agreement)** — vincula las obligaciones de contribución con los derechos de membresía, para que la participación no sea opcional-por-riqueza.
- **[Protocolo de Rendición de Cuentas](/articles/rcos-templates/layer-4/accountability-protocol)** — una vía definida para cuando se eluden las expectativas.

Véase también la especificación: [Capa 3 — Reconocimiento de la Contribución](/articles/rcos-core/v0-1/layer-3-economic-resource-system#52-contribution-recognition) y [Capa 1 — Derechos y Obligaciones](/articles/rcos-core/v0-1/layer-1-membership-system#34-rights-and-obligations).

### Si ya está ocurriendo

Decide la regla antes de que el resentimiento se convierta en una línea de clase:

1. **Nombra el vacío normativo.** Decidan juntos si la externalización está permitida en absoluto — y en qué términos.
2. **Establece una equivalencia (o prohíbe la sustitución)** para que la respuesta sea coherente, no negociada caso por caso.
3. **Aborda el resentimiento directamente** mediante la vía de rendición de cuentas o conflicto antes de que se endurezca.

### Qué tiende a desencadenar este fallo

- **[Normalización de la evitación del conflicto](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — el resentimiento entre participación y pago es exactamente el tipo de conflicto que un grupo evita hasta que se vuelve estructural.

### Pruebas de estrés relacionadas

- **[Autosuficiencia sin contribución colectiva](/articles/rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution)** — la prima del desentendimiento: aquí la gente compra su salida de la contribución, allá simplemente se desentiende.
- **[Privatización de los comunes mediante venta de tierras](/articles/rcos-stress-tests/economy-resources/commons-privatization-through-land-sales)** — el mismo desacoplamiento entre riqueza y obligación compartida, a nivel de la tierra.
