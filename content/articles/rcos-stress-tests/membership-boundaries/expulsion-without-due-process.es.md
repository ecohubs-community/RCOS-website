---
id: a1d4e7c2
title: Expulsión sin debido proceso
summary: >-
  Cuando se puede expulsar a un miembro sin proceso, sin apelación y sin
  registro.
parentId: 45625035
order: 1
severity: high
stage:
  - growth
  - mature
layers:
  - 1
  - 4
invariants:
  - '1.4'
  - '1.2'
  - '4.3'
remediationReady: true
tags:
  - 'Capa 1: Membresía'
  - Severidad alta
symptoms:
  - >-
    Se expulsó a un miembro (o se le presionó para que se fuera) sin un proceso
    definido.
  - >-
    La expulsión ocurrió por consenso informal, una votación repentina o presión
    social — no por un procedimiento escrito.
  - 'No hubo oportunidad de responder, ni motivos declarados, ni apelación.'
  - >-
    La gente no tiene claro quién tiene realmente la autoridad para expulsar a
    alguien.
  - >-
    Después de que sucedió, otros se preguntaron en silencio si podrían ser los
    siguientes.
preventsWith:
  - rcos-templates/layer-1/exit-protocol
  - rcos-templates/layer-4/accountability-protocol
  - rcos-templates/layer-1/membership-state-registry
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: enables
    note: >-
      Cuando la expulsión no tiene debido proceso, los miembros aprenden que
      disentir es peligroso y dejan de plantear cosas.
related:
  - rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test
  - rcos-stress-tests/conflict-accountability/punishment-before-repair
lang: es
sourceHash: 23ab475a
---

> **Severidad:** Alta — una de las formas más comunes en que se fracturan las comunidades, y la más difícil de reparar después.
> **Dónde aprieta:** Etapas de crecimiento y madurez, cuando aparece el primer miembro genuinamente difícil.
> **¿Ya estás viviendo esto?** Salta a [Si ya está ocurriendo](#si-ya-está-ocurriendo).

### ¿Te suena familiar?

Alguien se convirtió en un problema real — disruptivo, dañino, imposible — y al final ya no estaba. No fue mediante ningún procedimiento, porque no había ninguno: ocurrió a través de una reunión tensa, una votación repentina a mano alzada, o un lento congelamiento social hasta que se fue por su cuenta. Quizás hasta fue el resultado correcto. Pero no hubo cargos declarados, ni oportunidad de responder, ni apelación — y en silencio, todos los que lo presenciaron archivaron el conocimiento de que la comunidad puede hacer desaparecer a una persona, y no hay reglas sobre cuándo.

### Señales de que esto te está pasando

- Se expulsó a un miembro (o se le presionó para que se fuera) sin un proceso definido.
- La expulsión ocurrió por consenso informal, una votación repentina o presión social.
- No hubo oportunidad de responder, ni motivos declarados, ni apelación.
- La gente no tiene claro quién tiene realmente la autoridad para expulsar a alguien.
- Después de que sucedió, otros se preguntaron en silencio si podrían ser los siguientes.

**Esto _no_ es lo mismo que** aplicar un proceso de salida forzada documentado — con motivos, una audiencia y una apelación — a una situación genuinamente intolerable. La señal reveladora es *la expulsión sin debido proceso predefinido*: el resultado viene primero, y la justificación después, si es que llega.

### Por qué sucede

Las comunidades evitan construir procedimientos de expulsión porque esperan no necesitarlos nunca — planificar para ello se siente macabro, incluso desleal. Así que cuando un miembro finalmente se vuelve intolerable, el grupo improvisa bajo estrés: presión, una votación apresurada, un silencioso congelamiento. Sin debido proceso, la expulsión se vuelve arbitraria y generadora de miedo, y la línea entre "tuvimos que hacerlo" y "quisimos hacerlo" desaparece — para la persona expulsada, y para todos los que observan.

<details data-kind="rationale">
<summary>La prueba de estrés formal (para auditores)</summary>

**Modo de falla** — Se expulsa a un miembro sin un proceso predefinido y documentado.

**Capas involucradas** — Capa 1 (Membresía), Capa 4 (Conflicto)

**Invariantes relevantes**

* 1.4 Debido proceso para la salida forzada
* 1.2 La entrada y la salida son siempre posibles
* 4.3 La reparación precede al castigo

**Condición de prueba** — Se expulsa o se presiona a un miembro para que se vaya sin motivos, audiencia ni apelación.

**Comportamiento RCOS esperado** — La salida forzada sigue un proceso predefinido: motivos declarados, oportunidad de responder y vía de apelación; se intenta la reparación antes de la expulsión.

**Criterios de aprobación** — Cualquier expulsión es rastreable a motivos documentados y debido proceso.

**Criterios de falla** — La expulsión es arbitraria, informal e inapelable.

</details>

### ¿Qué tan madura es tu comunidad en esto?

Aprobar/reprobar es demasiado tajante para la vida real — la mayoría de las comunidades están a medio camino. Encuentra tu peldaño, luego apunta al siguiente.

| Nivel | Cómo se ve |
|---|---|
| **L0 — Implícito** | La expulsión es posible pero indefinida; ocurre por presión o una votación repentina. |
| **L1 — Nombrado** | El grupo sabe que no tiene un proceso de expulsión, pero no lo ha construido. |
| **L2 — Documentado** | Existe un proceso de salida forzada — motivos, notificación, audiencia y apelación — en un [Protocolo de Salida](/articles/rcos-templates/layer-1/exit-protocol). |
| **L3 — Aplicado y ensayado** | Cualquier expulsión sigue el debido proceso; se ha aplicado de manera justa al menos una vez, incluyendo una oportunidad real de responder. |

La mayoría de las comunidades que se reconocen aquí están en **L0 o L1**. La meta no es la perfección — es subir un peldaño.

### Cómo RCOS previene esto

RCOS exige que la decisión de membresía más difícil sea la más procedimental:

- **[Protocolo de Salida](/articles/rcos-templates/layer-1/exit-protocol)** — define motivos, notificación, audiencia y apelación para la salida forzada *antes* de necesitarla.
- **[Protocolo de Responsabilidad](/articles/rcos-templates/layer-4/accountability-protocol)** — una vía centrada en la reparación primero, para que la expulsión sea el último recurso, no el primer reflejo.
- **[Registro de Estado de Membresía](/articles/rcos-templates/layer-1/membership-state-registry)** — haz que la suspensión o expulsión sea un cambio de estado explícito y registrado, no un estado de ánimo.

Ver también la especificación: [Capa 1 — Salida y Separación](/articles/rcos-core/v0-1/layer-1-membership-system#36-exit-and-separation) y [Capa 4 — Sanciones, Reparación y Separación](/articles/rcos-core/v0-1/layer-4-conflict-repair-accountability#64-sanctions-repair-and-separation).

### Si ya está ocurriendo

Acaba de ocurrir una expulsión, o está en curso. Frénala y restaura la legitimidad:

1. **Pausa una expulsión en curso.** Una salida irreversible sin proceso es el peligro.
2. **Declara los motivos por escrito** y dale a la persona una oportunidad real de responder.
3. **Define el proceso ahora y aplícalo** — incluso ofrecer una apelación retroactivamente repara la legitimidad para todos los que observan.
4. **Vigila la cascada** — la expulsión arbitraria enseña a toda la comunidad a autocensurarse.

### Qué tiende a desencadenar esta falla

- **[Normalización de la evitación del conflicto](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — si hablar puede hacer que te expulsen, la gente deja de hablar.

### Pruebas de estrés relacionadas

- **[Castigo antes que reparación](/articles/rcos-stress-tests/conflict-accountability/punishment-before-repair)** — el reflejo punitivo que convierte la responsabilidad en expulsión en primer lugar.
- **[Prueba de alcance de violación de normas culturales](/articles/rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test)** — la transgresión de una norma no declarada es a menudo lo que desencadena la prisa por expulsar.
