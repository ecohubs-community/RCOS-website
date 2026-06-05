---
id: f1c3d8b5
title: Deriva de misión por propósitos en competencia
summary: Cuando la comunidad intenta ser todo y ya no puede priorizar nada.
parentId: 45625035
order: 2
severity: medium
stage:
  - growth
  - mature
layers:
  - 0
invariants:
  - '0.1'
  - '0.2'
remediationReady: true
tags:
  - 'Layer 0: Scope'
  - Medium severity
symptoms:
  - >-
    Las personas miembro darían respuestas genuinamente distintas a "¿para qué
    sirve principalmente esta comunidad?"
  - Se siguen añadiendo nuevos proyectos y direcciones; ninguno se abandona.
  - >-
    Las prioridades chocan de forma irreconciliable — ingresos vs. ecología vs.
    práctica — sin manera de arbitrar.
  - >-
    Las decisiones se estancan porque no hay un sentido compartido de qué
    importa más.
  - >-
    Se forman facciones en torno a distintas visiones de lo que realmente es la
    comunidad.
preventsWith:
  - rcos-templates/layer-0/purpose-charter
  - rcos-templates/layer-0/scope-declaration
  - rcos-templates/layer-0/identity-constraints-register
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: feeds
    note: >-
      Los conflictos irreconciliables de propósito son demasiado grandes para
      plantearse, así que todo el grupo aprende a evitarlos.
  - test: rcos-stress-tests/governance-power/informal-clique-decision-making
    relation: enables
    note: >-
      Se forman facciones en torno a visiones en competencia y empiezan a
      decidir entre ellas.
related:
  - rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test
lang: es
sourceHash: '62006333'
---

> **Gravedad:** Media — lenta y corrosiva: no rompe la comunidad, disuelve su foco.
> **Dónde golpea:** Etapas de crecimiento y madurez, a medida que se acumulan ambiciones y miembros.
> **¿Ya lo estás viviendo?** Salta a [Si ya está ocurriendo](#si-ya-está-ocurriendo).

### ¿Te suena familiar?

Empezó con una idea clara, y luego creció — una eco-granja, y también un retiro, y también un espacio artístico, y también un motor de ingresos, y también una escuela. Cada añadido era valioso, así que nunca se rechazó nada. Ahora, cuando dos de esos propósitos tiran en direcciones opuestas — el proyecto de ingresos quiere el terreno que necesita el bosque comestible — no hay forma de decidir, porque la comunidad nunca acordó qué propósito va primero. La gente no pelea porque discrepe en los valores; pelea porque cada quien es leal a una versión distinta, e igualmente real, de para qué sirve este lugar.

### Señales de que esto te está pasando

- Las personas miembro darían respuestas genuinamente distintas a "¿para qué sirve principalmente esta comunidad?"
- Se siguen añadiendo nuevos proyectos y direcciones; ninguno se abandona.
- Las prioridades chocan de forma irreconciliable — ingresos vs. ecología vs. práctica — sin manera de arbitrar.
- Las decisiones se estancan porque no hay un sentido compartido de qué importa más.
- Se forman facciones en torno a distintas visiones de lo que realmente es la comunidad.

**Esto _no_ es lo mismo que** una comunidad con un propósito claro servido por varias actividades. La señal reveladora es *propósitos primarios en competencia sin prioridad declarada* — de modo que las disyuntivas no tienen respuesta basada en principios y cada facción tiene "razón".

### Por qué ocurre

Decir sí a cada meta valiosa se siente generoso e inclusivo, así que las comunidades acumulan propósitos más rápido de lo que los retiran. Pero cuando dos propósitos entran en conflicto — y tarde o temprano lo harán — no hay manera de elegir sin un propósito primario declarado que los ordene. El resultado es parálisis y faccionalismo: cada grupo optimiza para un sentido distinto, e igualmente legítimo, de "para qué estamos", y ninguna decisión puede satisfacerlos a todos.

<details data-kind="rationale">
<summary>La prueba de estrés formal (para auditores)</summary>

**Modo de fallo** — La comunidad sostiene múltiples propósitos primarios en competencia sin prioridad declarada.

**Capas involucradas** — Capa 0 (Identidad y Alcance)

**Invariantes relevantes**

* 0.1 Un único propósito primario
* 0.2 Alcance gobernado explícito

**Condición de prueba** — Dos propósitos declarados entran en conflicto y no hay base de principios para resolver la disyuntiva.

**Comportamiento esperado de RCOS** — Un único propósito primario ordena a todos los demás; las disyuntivas se resuelven por referencia a él.

**Criterios de aprobación** — Los conflictos de propósito tienen una resolución basada en principios.

**Criterios de fallo** — Las prioridades son irreconciliables y faccionales.

</details>

### ¿Qué tan madura está tu comunidad en esto?

Aprobado/suspendido es demasiado tosco para la vida real — la mayoría de las comunidades está a medio camino. Encuentra tu peldaño, y luego apunta al siguiente.

| Nivel | Cómo se ve |
|---|---|
| **L0 — Implícito** | Múltiples propósitos coexisten sin orden; los conflictos no tienen resolución basada en principios. |
| **L1 — Nombrado** | El grupo ve la deriva pero no ha declarado un propósito primario. |
| **L2 — Documentado** | Una [Carta de Propósito](/articles/rcos-templates/layer-0/purpose-charter) nombra un único propósito primario; las demás metas son explícitamente secundarias. |
| **L3 — Aplicado y ensayado** | Las disyuntivas se resuelven por referencia al propósito primario; las nuevas direcciones se contrastan con él. |

La mayoría de comunidades que se reconocen aquí están en **L0 o L1**. El objetivo no es la perfección — es subir un peldaño.

### Cómo lo previene RCOS

RCOS requiere un único propósito primario que pueda desempatar:

- **[Carta de Propósito](/articles/rcos-templates/layer-0/purpose-charter)** — declara el único propósito primario que ordena a todos los demás.
- **[Declaración de Alcance](/articles/rcos-templates/layer-0/scope-declaration)** — establece qué está dentro y fuera del alcance, para que las incorporaciones sean deliberadas.
- **[Registro de Restricciones de Identidad](/articles/rcos-templates/layer-0/identity-constraints-register)** — define qué es y qué no es la comunidad.

Consulta también la especificación: [Capa 0 — Definición de Propósito](/articles/rcos-core/v0-1/layer-0-identity-scope#21-purpose-definition) y [Declaración de Alcance](/articles/rcos-core/v0-1/layer-0-identity-scope#22-scope-declaration).

### Si ya está ocurriendo

Si has derivado hacia demasiados propósitos, reordena en lugar de amputar:

1. **Saca a la luz las respuestas reales.** Pide a cada persona que escriba en privado cuál cree que es el propósito primario; la dispersión es el diagnóstico.
2. **Declara un propósito primario.** Puedes conservar las metas secundarias — solo ordénalas por debajo de él.
3. **Úsalo para arbitrar el conflicto vivo** que motivó esto, y deja que eso siente el precedente.

### Qué tiende a desencadenar este fallo

- **[Normalización de la evitación del conflicto](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — los conflictos irreconciliables de propósito son demasiado grandes para plantearse, así que se evitan.
- **[Toma de decisiones por camarillas informales](/articles/rcos-stress-tests/governance-power/informal-clique-decision-making)** — se forman facciones en torno a visiones en competencia.

### Pruebas de estrés relacionadas

- **[Prueba de alcance ante violaciones de normas culturales](/articles/rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test)** — ambas son fallos de alcance: el propósito poco claro y el alcance gobernado poco claro viajan juntos.
