---
id: 9d3e6a24
title: Crecimiento rápido sin proceso de integración
summary: Cuando la comunidad crece más rápido de lo que puede integrar a nadie.
parentId: a9e4c65d
order: 2
severity: high
stage:
  - growth
layers:
  - 1
  - 5
invariants:
  - '1.1'
  - '5.2'
remediationReady: true
tags:
  - 'Capa 1: Membresía'
  - Severidad alta
symptoms:
  - La comunidad crece más rápido de lo que puede integrar a las personas.
  - >-
    Los nuevos miembros obtienen acceso y derechos sin un proceso de entrada o
    periodo de prueba claro.
  - >-
    Los recién llegados no conocen las normas, la historia ni cómo se toman las
    decisiones — y no es tarea de nadie enseñarles.
  - '"¿Quién decidió realmente dejarlos entrar?" es difícil de responder.'
  - La cultura parece diluirse o fragmentarse a medida que aumentan los números.
preventsWith:
  - rcos-templates/layer-1/onboarding-protocol
  - rcos-templates/layer-1/membership-agreement
  - rcos-templates/layer-1/membership-state-registry
cascade:
  - test: rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test
    relation: enables
    note: >-
      Los recién llegados que nunca aprendieron las normas chocan con ellas,
      desencadenando una aplicación improvisada.
  - test: >-
      rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
    relation: feeds
    note: >-
      En el caos de la integración, unas pocas personas mantienen todo unido de
      manera informal.
related:
  - >-
    rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution
lang: es
sourceHash: 465078de
---

> **Severidad:** Alta — diluye la cultura y la gobernanza de forma silenciosa, por acumulación más que por decisión.
> **Dónde duele:** La etapa de crecimiento, especialmente tras una oleada de interés o atención.
> **¿Ya lo estás viviendo?** Salta a [Si ya está ocurriendo](#si-ya-está-ocurriendo).

### ¿Te suena familiar?

El interés está en auge. La gente quiere entrar, y decir que sí se siente maravilloso — parece que todo funciona. Llegan caras nuevas, reciben llaves, contraseñas y voto, y se unen al chat. Pero no hay un proceso real de entrada, ni periodo de prueba, ni nadie cuya tarea sea guiarles por la historia, las normas, la forma en que realmente se toman las decisiones. Un año después la comunidad es el doble de grande y, de algún modo, menos ella misma: la cultura compartida se ha adelgazado, y nadie sabe muy bien cuándo ocurrió.

### Señales de que esto te está pasando

- La comunidad crece más rápido de lo que puede integrar a las personas.
- Los nuevos miembros obtienen acceso y derechos sin un proceso de entrada o periodo de prueba claro.
- Los recién llegados no conocen las normas, la historia ni cómo se toman las decisiones — y no es tarea de nadie enseñarles.
- "¿Quién decidió realmente dejarlos entrar?" es difícil de responder.
- La cultura parece diluirse o fragmentarse a medida que aumentan los números.

**Esto _no_ es lo mismo que** un crecimiento rápido intencional y bien dotado de recursos con un verdadero canal de integración. La señal reveladora es *derechos sin proceso* — las personas se convierten en miembros simplemente por aparecer, y la integración se deja al azar.

### Por qué ocurre

El crecimiento se siente como éxito, así que las comunidades dicen que sí más rápido de lo que pueden absorber. Sin un proceso formal de entrada, la membresía se vuelve implícita — nadie puede decir exactamente quién está dentro ni por qué — y sin integración, el conocimiento operativo y cultural nunca se transfiere. El resultado es una dilución silenciosa: la gobernanza y la cultura se erosionan no por ninguna decisión, sino por la acumulación constante de miembros sin integrar.

<details data-kind="rationale">
<summary>La prueba de estrés formal (para auditores)</summary>

**Modo de fallo** — Nuevos miembros se incorporan sin integración ni periodo de prueba.

**Capas implicadas** — Capa 1 (Membresía), Capa 5 (Operaciones)

**Invariantes relevantes**

* 1.1 Sin membresía implícita
* 5.2 El conocimiento operativo está documentado

**Condición de la prueba** — Los miembros obtienen derechos sin un proceso formal de entrada.

**Comportamiento RCOS esperado** — Se aplican obligatoriamente la integración y el periodo de prueba.

**Criterios de aprobación** — El estatus de membresía es explícito en todo momento.

**Criterios de fallo** — La cultura y la gobernanza se diluyen silenciosamente.

</details>

### ¿Qué tan madura es tu comunidad en esto?

Aprobado/suspenso es demasiado tosco para la vida real — la mayoría de las comunidades están a medio camino. Encuentra tu peldaño, y luego apunta al siguiente.

| Nivel | Cómo se ve |
|---|---|
| **L0 — Implícito** | Las personas se convierten en miembros simplemente por aparecer; sin proceso de entrada, sin integración. |
| **L1 — Nombrado** | El grupo percibe la dilución pero no ha construido un canal de entrada / periodo de prueba. |
| **L2 — Documentado** | Un proceso definido de [integración y periodo de prueba](/articles/rcos-templates/layer-1/onboarding-protocol) regula la membresía; los estados se rastrean en un [registro](/articles/rcos-templates/layer-1/membership-state-registry). |
| **L3 — Aplicado y ensayado** | El estatus de membresía es explícito en todo momento; cada recién llegado pasa por la integración; el ritmo de crecimiento se ajusta a la capacidad de integración. |

La mayoría de las comunidades que se reconocen aquí están en **L0 o L1**. El objetivo no es la perfección — es subir un peldaño.

### Cómo RCOS lo previene

RCOS hace que los derechos sigan a la integración, no a la llegada:

- **[Protocolo de integración](/articles/rcos-templates/layer-1/onboarding-protocol)** — una ruta obligatoria de entrada y periodo de prueba para que la cultura y el conocimiento realmente se transfieran.
- **[Acuerdo de membresía](/articles/rcos-templates/layer-1/membership-agreement)** — hace explícitos los términos de la membresía en la entrada.
- **[Registro de estados de membresía](/articles/rcos-templates/layer-1/membership-state-registry)** — siempre sabes quién está en prueba, en pleno derecho o ha salido.

Consulta también la especificación: [Capa 1 — Entrada e integración](/articles/rcos-core/v0-1/layer-1-membership-system#32-entry-and-onboarding) y [Estados de membresía](/articles/rcos-core/v0-1/layer-1-membership-system#31-membership-states).

### Si ya está ocurriendo

Si el crecimiento ya ha superado a la integración, frena la entrada y recupera el terreno perdido:

1. **Pausa o ralentiza la entrada** hasta que exista una ruta de integración — la capacidad de integración, no el entusiasmo, es el verdadero límite.
2. **Define los estados de membresía ahora** y coloca a todos en uno; la ambigüedad es el fallo central.
3. **Recupera la integración de quienes se incorporaron recientemente** — transfiere las normas y el conocimiento operativo que se perdieron.
4. **Vigila la cascada** — el crecimiento sin integración genera choques con normas no declaradas y vacíos de poder invisible.

### Qué tiende a desencadenar este fallo

- **[Prueba de alcance ante violación de normas culturales](/articles/rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test)** — los recién llegados que nunca aprendieron las normas chocan con ellas.
- **[Poder invisible a través de las responsabilidades](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — en el caos, unas pocas personas mantienen todo unido de manera informal.

### Pruebas de estrés relacionadas

- **[Autosuficiencia sin contribución colectiva](/articles/rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution)** — los miembros no integrados nunca aprenden que el bien común es suyo para mantener.
