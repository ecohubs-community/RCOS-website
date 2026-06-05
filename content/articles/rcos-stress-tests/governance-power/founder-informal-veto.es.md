---
id: 9e4c3b21
title: Veto informal del fundador
summary: >-
  Cuando el "no" silencioso del fundador sigue mandando, aunque nada en el papel
  se lo otorgue.
parentId: 7f25f268
order: 1
severity: high
stage:
  - forming
  - growth
  - mature
layers:
  - 2
  - 0
invariants:
  - '2.2'
  - '2.3'
remediationReady: true
tags:
  - 'Layer 2: Governance'
  - High severity
symptoms:
  - >-
    Técnicamente las decisiones las toma el grupo, pero nada avanza si el
    fundador no lo aprueba.
  - >-
    La gente consulta las ideas con el fundador antes de plantearlas
    formalmente.
  - '"En realidad es su proyecto" es un sentir común que nadie cuestiona.'
  - >-
    El proceso formal existe en el papel, pero en la práctica se anula
    silenciosamente.
  - >-
    Ningún documento establece qué puede y qué no puede decidir el fundador por
    su cuenta.
preventsWith:
  - rcos-templates/layer-2/authority-registry
  - rcos-templates/layer-2/decision-matrix
  - rcos-templates/layer-2/governance-protocol
cascade:
  - test: rcos-stress-tests/culture-influence/charismatic-spiritual-authority
    relation: enables
    note: >-
      Unbounded founder influence shades into charisma standing in for
      governance.
  - test: rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent
    relation: enables
    note: >-
      An informal authority becomes the one who bypasses the rules under
      pressure.
  - test: rcos-stress-tests/governance-power/informal-clique-decision-making
    relation: enables
    note: The founder's inner circle becomes the real decision body.
related:
  - rcos-stress-tests/governance-power/dominant-speakers-decision-spaces
lang: es
sourceHash: 52fea020
---

> **Severidad:** Alta — la constitución se vuelve teatro si una sola persona puede anularla en silencio.
> **Dónde golpea:** En cualquier etapa, pero con más fuerza en los años de liderazgo fundacional, antes de que la autoridad esté acotada.
> **¿Ya lo estás viviendo?** Salta a [Si ya está ocurriendo](#si-ya-está-ocurriendo).

### ¿Te suena familiar?

Tienen procesos. Tienen votaciones. Y aun así todo el mundo sabe que si el fundador no está contento, la cosa no sucede. Nadie lo llama un veto — el fundador casi nunca tiene que decir que no, porque la gente consulta las ideas por adelantado, suaviza las propuestas o las abandona antes de que lleguen a la sala. La gobernanza es real en el papel y no pesa en la práctica, porque la preferencia de una persona supera en silencio a todo lo demás.

### Señales de que esto te está pasando

- Técnicamente las decisiones las toma el grupo, pero nada avanza si el fundador no lo aprueba.
- La gente consulta las ideas con el fundador antes de plantearlas formalmente.
- "En realidad es su proyecto" es un sentir común que nadie cuestiona.
- El proceso formal existe en el papel, pero en la práctica se anula silenciosamente.
- Ningún documento establece qué puede y qué no puede decidir el fundador por su cuenta.

**Esto _no_ es lo mismo que** un fundador que ocupa un rol explícito y documentado con autoridad definida. La señal es un veto *real pero no escrito* — un poder que todo el mundo siente y que ninguna regla otorga.

### Por qué ocurre

Los fundadores cargan con la visión, la historia y la mayoría de las relaciones, así que sus preferencias mantienen un peso desproporcionado mucho después de que existe una gobernanza formal. Si ese peso nunca se acota por escrito, el grupo se autocensura a su alrededor: el fundador rara vez tiene que ejercer un veto porque nadie le fuerza nunca a decir sí. El carisma y la gratitud superan en silencio a la constitución — hasta el día en que entran en conflicto, y la constitución pierde.

<details data-kind="rationale">
<summary>La prueba de estrés formal (para auditores)</summary>

**Modo de fallo** — El fundador conserva un veto de facto a pesar de los procesos formales.

**Capas implicadas** — Capa 2 (Gobernanza), Capa 0 (Invariantes)

**Invariantes relevantes**

* 2.2 La autoridad DEBE ser explícita
* 2.3 Las reglas constitucionales prevalecen sobre los individuos

**Condición de prueba** — El fundador anula informalmente las decisiones.

**Comportamiento esperado del RCOS** — La autoridad del fundador DEBE formalizarse o eliminarse; las decisiones siguen una matriz de decisión acordada.

**Criterio de aprobación** — El poder del fundador está acotado y documentado.

**Criterio de fallo** — El carisma sustituye a la gobernanza.

</details>

### ¿Qué tan madura está tu comunidad en esto?

Aprobado/suspendido es demasiado tajante para la vida real — la mayoría de las comunidades están a medio camino. Encuentra tu peldaño y apunta al siguiente.

| Nivel | Cómo se ve |
|---|---|
| **L0 — Implícito** | El veto informal del fundador es real y tácito; el proceso es teatro a su alrededor. |
| **L1 — Nombrado** | El grupo admite que el fundador tiene un poder desmedido, pero no lo ha acotado. |
| **L2 — Documentado** | La autoridad del fundador está escrita en un [Registro de Autoridad](/articles/rcos-templates/layer-2/authority-registry) y una [Matriz de Decisión](/articles/rcos-templates/layer-2/decision-matrix) — alcance explícito, límites explícitos. |
| **L3 — Aplicado y ensayado** | Las decisiones siguen la matriz; el rol del fundador está acotado y es revisable, y ha resistido frente a una decisión con la que no estaba de acuerdo. |

La mayoría de las comunidades que se reconocen aquí están en **L0 o L1**. La meta no es la perfección — es subir un peldaño.

### Cómo lo previene RCOS

RCOS hace explícita toda autoridad, incluida la del fundador:

- **[Registro de Autoridad](/articles/rcos-templates/layer-2/authority-registry)** — escribe exactamente qué autoridad tiene cada rol (incluido el fundador) y qué no tiene.
- **[Matriz de Decisión](/articles/rcos-templates/layer-2/decision-matrix)** — vincula las decisiones a un mecanismo acordado para que nadie las anule informalmente.
- **[Protocolo de Gobernanza](/articles/rcos-templates/layer-2/governance-protocol)** — establece que las reglas constitucionales prevalecen sobre cualquier individuo.

Consulta también la especificación: [Capa 2 — Límites de Autoridad](/articles/rcos-core/v0-1/layer-2-governance-decision-logic#43-authority-boundaries).

### Si ya está ocurriendo

No puedes acotar un poder que no quieres nombrar. Triaje:

1. **Nombra la autoridad real** — pon por escrito honestamente el poder de facto del fundador y decidan juntos qué parte de ese poder es legítima.
2. **Acótalo** — conviértelo en un rol explícito y delimitado (o elimínalo), con límites y una vía de revisión.
3. **Pruébalo** con una decisión de bajo riesgo que al fundador le disguste un poco, para demostrar que el proceso realmente se sostiene.
4. **Vigila la cascada** — el poder informal del fundador es la semilla del gobierno de camarilla, del carisma-como-gobernanza y del bypass de emergencia.

### Qué tiende a desencadenar este fallo

- **[Autoridad Espiritual Carismática](/articles/rcos-stress-tests/culture-influence/charismatic-spiritual-authority)** — la influencia ilimitada del fundador deriva en carisma que sustituye a la gobernanza.
- **[Precedente de Bypass de Reglas en Emergencias](/articles/rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent)** — una autoridad informal es justamente quien "temporalmente" salta las reglas en una crisis.
- **[Toma de Decisiones por Camarilla Informal](/articles/rcos-stress-tests/governance-power/informal-clique-decision-making)** — el círculo íntimo del fundador se convierte en el verdadero órgano de decisión.

### Pruebas de estrés relacionadas

- **[Voces Dominantes en los Espacios de Decisión](/articles/rcos-stress-tests/governance-power/dominant-speakers-decision-spaces)** — la misma influencia no escrita, expresada a través del tiempo de palabra en las reuniones.
