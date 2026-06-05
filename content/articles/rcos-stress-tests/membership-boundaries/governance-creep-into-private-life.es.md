---
id: a9e2f4c7
title: La gobernanza se cuela en la vida privada
summary: 'Cuando la comunidad no declara una esfera privada, termina gobernándolo todo.'
parentId: 45625035
order: 3
severity: medium
stage:
  - growth
  - mature
layers:
  - 0
  - 1
invariants:
  - '0.3'
  - '0.2'
remediationReady: true
tags:
  - 'Layer 0: Scope'
  - Medium severity
symptoms:
  - >-
    Las normas comunitarias alcanzan decisiones personales — dieta, relaciones,
    crianza, creencias, tiempo libre.
  - >-
    No hay una línea declarada entre lo que la comunidad gobierna y lo que no le
    incumbe a nadie.
  - >-
    Las personas miembro se sienten observadas, o se autocensuran en decisiones
    privadas para mantener una buena posición.
  - >-
    "¿De verdad eso le incumbe a la comunidad?" se pregunta pero nunca se
    resuelve.
  - El desacuerdo en un asunto personal se trata como deslealtad al grupo.
preventsWith:
  - rcos-templates/layer-0/scope-declaration
  - rcos-templates/layer-0/identity-constraints-register
  - rcos-templates/layer-1/membership-agreement
cascade:
  - test: rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test
    relation: enables
    note: >-
      Sin una esfera fuera del alcance, cualquier decisión personal puede
      convertirse en una norma exigible.
  - test: rcos-stress-tests/culture-influence/charismatic-spiritual-authority
    relation: enables
    note: >-
      Una comunidad totalizante es terreno fértil para una autoridad moral
      incuestionable.
related:
  - rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test
lang: es
sourceHash: 33f14866
---

> **Severidad:** Media — corroe el sentido de pertenencia; impulsa una autocensura silenciosa y, con el tiempo, salidas de la comunidad.
> **Dónde duele:** Etapas de crecimiento y madurez, en comunidades con una identidad compartida fuerte.
> **¿Ya lo estás viviendo?** Salta a [Si ya está pasando](#si-ya-está-pasando).

### ¿Te suena familiar?

Los valores compartidos son reales y buenos — y, poco a poco, se han expandido hasta cubrir casi todo. Lo que comes, con quién sales, cómo crías a tus hijos, en qué crees, cómo pasas una tarde libre: de algún modo, todo se ha convertido en asunto de opinión comunitaria. Nadie decidió gobernar la vida privada de las personas miembro; simplemente fue creciendo hacia afuera, una norma bienintencionada tras otra. Ahora la gente se edita en silencio para mantener una buena posición, y la pregunta "¿de verdad eso le incumbe a la comunidad?" queda flotando en el aire, formulada pero nunca respondida.

### Señales de que te está pasando

- Las normas comunitarias alcanzan decisiones personales — dieta, relaciones, crianza, creencias, tiempo libre.
- No hay una línea declarada entre lo que la comunidad gobierna y lo que no le incumbe a nadie.
- Las personas miembro se sienten observadas, o se autocensuran en decisiones privadas para mantener una buena posición.
- "¿De verdad eso le incumbe a la comunidad?" se pregunta pero nunca se resuelve.
- El desacuerdo en un asunto personal se trata como deslealtad al grupo.

**Esto _no_ es lo mismo que** una práctica compartida profunda pero acotada en la que las personas miembro entraron explícitamente. La señal reveladora es la *ausencia de cualquier espacio declarado como no gobernado* — así, la gobernanza puede expandirse hacia la vida privada sin límite, porque nada dice que no pueda.

### Por qué ocurre

Los valores compartidos fuertes hacen que casi cualquier cosa parezca asunto de la comunidad, y sin un límite explícito de "esto no se gobierna", el alcance se va extendiendo hacia afuera por defecto. Cada pequeña extensión es bienintencionada; sumadas, producen un entorno totalizante sin yo privado que quede — lo cual cría resentimiento silencioso, autocensura y ese tipo de salida en la que alguien simplemente necesita respirar.

<details data-kind="rationale">
<summary>La prueba de estrés formal (para auditores)</summary>

**Modo de fallo** — La gobernanza se expande hacia la vida privada de las personas miembro sin un límite declarado.

**Capas involucradas** — Capa 0 (Identidad y Alcance), Capa 1 (Membresía)

**Invariantes relevantes**

* 0.3 Espacio no gobernado declarado
* 0.2 Alcance gobernado explícito

**Condición de prueba** — Los asuntos personales están sujetos a normas comunitarias sin una esfera fuera del alcance declarada.

**Comportamiento RCOS esperado** — Se declara explícitamente un espacio no gobernado; los asuntos fuera de él no pueden desencadenar sanción.

**Criterios de aprobación** — La gobernanza se mantiene dentro del alcance declarado; se protege una esfera privada.

**Criterios de fallo** — El alcance se cuela sin límite en la vida privada.

</details>

### ¿Qué tan madura está tu comunidad en esto?

Aprobado/reprobado es demasiado contundente para la vida real — la mayoría de las comunidades está a medio camino. Encuentra tu peldaño y apunta al siguiente.

| Nivel | Cómo se ve |
|---|---|
| **L0 — Implícito** | No hay esfera privada declarada; las normas se expanden hacia la vida personal sin control. |
| **L1 — Nombrado** | El grupo nota el exceso pero no ha trazado un límite no gobernado. |
| **L2 — Documentado** | Una [Declaración de Alcance](/articles/rcos-templates/layer-0/scope-declaration) nombra explícitamente lo que está fuera del alcance — la esfera privada protegida. |
| **L3 — Aplicado y ensayado** | La gobernanza se mantiene dentro del alcance declarado; los asuntos personales fuera de él no pueden desencadenar sanción; esto se ha sostenido en un caso real. |

La mayoría de las comunidades que se reconocen aquí están en **L0 o L1**. La meta no es la perfección — es subir un peldaño.

### Cómo RCOS lo previene

RCOS exige declarar lo que la comunidad *no* gobierna:

- **[Declaración de Alcance](/articles/rcos-templates/layer-0/scope-declaration)** — declara explícitamente lo que la comunidad NO gobierna (invariante 0.3).
- **[Registro de Restricciones de Identidad](/articles/rcos-templates/layer-0/identity-constraints-register)** — acota el alcance de la comunidad sobre la vida de las personas miembro.
- **[Acuerdo de Membresía](/articles/rcos-templates/layer-1/membership-agreement)** — explicita la práctica compartida en la que se entró, y todo lo demás queda privado por defecto.

Consulta también la especificación: [Capa 0 — Declaración de Alcance](/articles/rcos-core/v0-1/layer-0-identity-scope#22-scope-declaration) e [Restricciones de Identidad](/articles/rcos-core/v0-1/layer-0-identity-scope#24-identity-constraints).

### Si ya está pasando

Si la gobernanza se ha colado en la vida privada, vuelve a trazar la línea:

1. **Nombra el exceso.** Lista dónde han llegado las normas a la vida personal.
2. **Declara una esfera no gobernada.** Escribe qué es explícitamente asunto de nadie.
3. **Vuelve a delimitar la aplicación** para que los asuntos personales fuera de la línea no puedan afectar la posición de alguien.

### Qué tiende a desencadenar este fallo

- **[Prueba de alcance ante violación de normas culturales](/articles/rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test)** — sin una esfera fuera del alcance, cualquier decisión personal puede convertirse en una norma exigible.
- **[Autoridad espiritual carismática](/articles/rcos-stress-tests/culture-influence/charismatic-spiritual-authority)** — una comunidad totalizante es terreno fértil para una autoridad moral incuestionable.

### Pruebas de estrés relacionadas

- **[Prueba de alcance ante violación de normas culturales](/articles/rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test)** — el evento de aplicación; esta prueba es el límite ausente que lo hace posible.
