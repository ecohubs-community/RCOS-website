---
id: 45a25135
title: Prueba de alcance de violación de norma cultural
summary: Cuando una norma no escrita se castiga como si fuera una regla escrita.
parentId: 45625035
order: 0
severity: medium
stage:
  - forming
  - growth
  - mature
layers:
  - 0
  - 1
  - 4
invariants:
  - '0.2'
  - '1.1'
  - '4.4'
remediationReady: true
tags:
  - 'Layer 0: Scope'
  - Medium severity
symptoms:
  - >-
    Un miembro rompe una norma fuerte no escrita (p. ej. comer carne en una
    comunidad identificada como vegana) y la respuesta es emocional e
    improvisada.
  - >-
    No está claro si la norma es una regla vinculante o una preferencia
    compartida.
  - >-
    La intensidad de la aplicación depende de quién esté molesto, no de ninguna
    regla escrita.
  - >-
    La gente asume que "todos saben" la norma, pero nunca se declaró como
    condición de pertenencia.
  - >-
    Las reacciones van desde la exclusión hasta la presión para irse, sin debido
    proceso.
preventsWith:
  - rcos-templates/layer-0/scope-declaration
  - rcos-templates/layer-1/membership-agreement
  - rcos-templates/layer-0/identity-constraints-register
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: feeds
    note: >-
      La aplicación arbitraria y emocional enseña a los miembros a ocultar
      comportamientos en lugar de sacarlos a la luz.
related:
  - rcos-stress-tests/culture-influence/charismatic-spiritual-authority
lang: es
sourceHash: 08d99a95
---

> **Severidad:** Media — rara vez es fatal, pero produce los conflictos más duros y personales.
> **Dónde golpea:** Cualquier etapa; más fuerte en comunidades con una identidad compartida poderosa.
> **¿Ya lo estás viviendo?** Salta a [Si ya está ocurriendo](#si-ya-está-ocurriendo).

### ¿Te suena familiar?

La comunidad tiene una identidad fuerte — vegana, sobria, en silencio antes del mediodía, lo que sea — y todos "simplemente saben" la norma. Entonces alguien la rompe. De repente hay una intensidad en el aire difícil de nombrar: ¿es esto una violación de regla, o solo algo que molestó a la gente? La respuesta es rápida y emocional, las consecuencias varían según quién esté más ofendido, y nadie puede señalar dónde, exactamente, esta norma fue alguna vez escrita como condición para estar aquí.

### Señales de que esto te está pasando

- Un miembro rompe una norma fuerte no escrita y la respuesta es emocional e improvisada.
- No está claro si la norma es una regla vinculante o una preferencia compartida.
- La intensidad de la aplicación depende de quién esté molesto, no de ninguna regla escrita.
- La gente asume que "todos saben" la norma, pero nunca se declaró como condición de pertenencia.
- Las reacciones van desde la exclusión hasta la presión para irse, sin debido proceso.

**Esto _no_ es lo mismo que** aplicar un invariante o condición de pertenencia explícitamente declarada. La señal reveladora es *la aplicación de una norma que nunca fue escrita como gobernada* — castigo sin una base de regla explícita.

### Por qué ocurre

Las culturas compartidas fuertes generan normas no escritas poderosas. Cuando algo se siente obviamente mal, el grupo lo aplica como si fuera ley — pero si la norma nunca se declaró como invariante central o condición de pertenencia, esa aplicación es no gobernada: arbitraria, impulsada emocionalmente e imposible de apelar. El daño no es la norma en sí; es castigar a la gente por reglas que no existen formalmente.

<details data-kind="rationale">
<summary>La prueba de estrés formal (para auditores)</summary>

**Modo de falla** — Un miembro viola una norma cultural fuerte (p. ej. comer carne en una comunidad vegana).

**Capas involucradas** — Capa 0 (Propósito y Alcance), Capa 1 (Pertenencia), Capa 4 (Conflicto)

**Invariantes relevantes**

* 0.2 Alcance gobernado explícito
* 1.1 Sin reglas implícitas de pertenencia
* 4.4 La seguridad anula la participación

**Condición de prueba** — Ocurre una violación de norma y la respuesta de aplicación es poco clara o impulsada emocionalmente.

**Comportamiento esperado de RCOS** — Determinar si la regla es un invariante central, una condición de pertenencia o una preferencia fuera de alcance; aplicar debido proceso solo si está explícitamente gobernada.

**Criterios de aprobación** — La respuesta se alinea estrictamente con el alcance declarado y las reglas de pertenencia.

**Criterios de falla** — Castigo o exclusión sin una base de regla explícita.

</details>

### ¿Qué tan madura es tu comunidad en esto?

Aprobado/reprobado es demasiado tajante para la vida real — la mayoría de las comunidades están a medio camino. Encuentra tu peldaño, luego apunta al siguiente.

| Nivel | Cómo se ve |
|---|---|
| **L0 — Implícito** | Las normas fuertes se aplican por sentimiento; nadie ha declarado qué se gobierna realmente. |
| **L1 — Nombrado** | El grupo se da cuenta de que algunas normas no están escritas, pero no ha separado regla de preferencia. |
| **L2 — Documentado** | Una [Declaración de Alcance](/articles/rcos-templates/layer-0/scope-declaration) distingue invariantes centrales, condiciones de pertenencia y preferencias fuera de alcance; el debido proceso se aplica solo a reglas gobernadas. |
| **L3 — Aplicado y ensayado** | Las respuestas siguen el alcance declarado; una preferencia no escrita no puede desencadenar castigo; esto ha sido probado en una violación real. |

La mayoría de las comunidades que se reconocen aquí están en **L0 o L1**. La meta no es la perfección — es subir un peldaño.

### Cómo RCOS previene esto

RCOS hace que la comunidad decida *qué gobierna realmente* antes de aplicar:

- **[Declaración de Alcance](/articles/rcos-templates/layer-0/scope-declaration)** — clasifica cada norma importante como invariante central, condición de pertenencia o preferencia fuera de alcance.
- **[Acuerdo de Pertenencia](/articles/rcos-templates/layer-1/membership-agreement)** — haz explícitas las condiciones conductuales vinculantes al ingreso, para que nadie sea castigado por sorpresa.
- **[Registro de Restricciones de Identidad](/articles/rcos-templates/layer-0/identity-constraints-register)** — declara qué gobierna y qué no gobierna la identidad de la comunidad.

Ver también la especificación: [Capa 0 — Declaración de Alcance](/articles/rcos-core/v0-1/layer-0-identity-scope#22-scope-declaration) y [Capa 1 — Derechos y Obligaciones](/articles/rcos-core/v0-1/layer-1-membership-system#34-rights-and-obligations).

### Si ya está ocurriendo

Acaba de ocurrir una violación y la respuesta está caldeada. Frénala:

1. **Pausa la aplicación.** Separa "estamos molestos" de "se rompió una regla gobernada".
2. **Clasifica la norma.** ¿Es un invariante declarado, una condición de pertenencia o una preferencia no declarada?
3. **Aplica debido proceso solo si está gobernada.** Si no lo está, la lección es *declararla de aquí en adelante* (o no), nunca castigar retroactivamente.
4. **Decide hacia adelante.** Si la comunidad quiere que esta norma sea vinculante, escríbela como una condición de pertenencia explícita.

### Qué tiende a desencadenar esta falla

- **[Normalización de la Evitación de Conflictos](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — la aplicación arbitraria y emocional enseña a los miembros a ocultar comportamientos en lugar de sacarlos a la luz.

### Pruebas de estrés relacionadas

- **[Autoridad Espiritual Carismática](/articles/rcos-stress-tests/culture-influence/charismatic-spiritual-authority)** — las figuras veneradas suelen ser aquellas cuyas preferencias se aplican como normas no declaradas.
