---
id: 1agdfya7
title: Precedente de eludir reglas en emergencias
summary: >-
  Cuando una excepción temporal por crisis se convierte silenciosamente en la
  regla permanente.
parentId: 6acde7a7
order: 0
severity: high
stage:
  - growth
  - mature
layers:
  - 2
  - 6
invariants:
  - '2.3'
  - '6.2'
remediationReady: true
tags:
  - 'Capa 2: Gobernanza'
  - Severidad alta
symptoms:
  - >-
    Durante una crisis, el proceso normal se suspendió "solo por ahora" — y
    nunca se reanudó por completo.
  - >-
    Una decisión tomada bajo urgencia se convirtió silenciosamente en la nueva
    estructura permanente.
  - >-
    Los poderes de emergencia nunca se definieron de antemano, por lo que su
    alcance y fecha de finalización son poco claros.
  - >-
    "No tuvimos tiempo de hacerlo bien" se está convirtiendo en una
    justificación recurrente.
  - >-
    No hay un registro que distinga las excepciones de emergencia de los cambios
    permanentes de reglas.
preventsWith:
  - rcos-templates/layer-6/change-protocol
  - rcos-templates/layer-2/governance-protocol
  - rcos-templates/layer-0/invariants-register
cascade:
  - test: rcos-stress-tests/governance-power/founder-informal-veto
    relation: feeds
    note: >-
      Quien ejerce el poder de emergencia de manera informal tiende a
      atrincherarlo una vez que pasa la crisis.
  - test: >-
      rcos-stress-tests/economy-resources/commons-privatization-through-land-sales
    relation: enables
    note: >-
      Una crisis financiera urgente es la cobertura clásica para una venta de
      tierras apresurada e irreversible.
related:
  - rcos-stress-tests/governance-power/founder-informal-veto
lang: es
sourceHash: b60f347c
---

> **Severidad:** Alta — cada excepción no revisada es un precedente que erosiona la constitución.
> **Dónde golpea:** Etapas de crecimiento y madurez, cada vez que llega la primera crisis real.
> **¿Ya están viviendo esto?** Salta a [Si ya está sucediendo](#si-ya-está-sucediendo).

### ¿Te suena familiar?

Llegó una crisis real — un déficit de financiación, un problema de seguridad, una salida repentina — y no había tiempo para el proceso habitual, así que alguien simplemente decidió. Fue la decisión correcta en el momento. Pero la crisis pasó y las reglas normales nunca volvieron del todo. La decisión de emergencia sigue en vigor, nadie la revisó, y ahora "no tuvimos tiempo de hacerlo bien" empieza a explicar mucho de cómo funcionan las cosas. La excepción se está convirtiendo silenciosamente en la regla.

### Señales de que esto te está pasando

- Durante una crisis, el proceso normal se suspendió "solo por ahora" — y nunca se reanudó por completo.
- Una decisión tomada bajo urgencia se convirtió silenciosamente en la nueva estructura permanente.
- Los poderes de emergencia nunca se definieron de antemano, por lo que su alcance y fecha de finalización son poco claros.
- "No tuvimos tiempo de hacerlo bien" se está convirtiendo en una justificación recurrente.
- No hay un registro que distinga las excepciones de emergencia de los cambios permanentes de reglas.

**Esto _no_ es lo mismo que** invocar poderes de emergencia predefinidos, registrados y con tiempo limitado. La señal reveladora es *una excepción sin caducidad* — urgencia que alteró permanentemente la estructura sin revisión ni versionado.

### Por qué sucede

Las crisis exigen velocidad, y la velocidad justifica saltarse el proceso. Eso está bien si los poderes de emergencia están predefinidos y caducan — pero si no lo están, cada elusión sienta un precedente: la excepción se convierte en la regla, y los cambios "temporales" se osifican porque nada obliga a revisarlos. La urgencia se convierte en una anulación permanente de la constitución, un atajo aparentemente razonable a la vez.

<details data-kind="rationale">
<summary>La prueba de estrés formal (para auditores)</summary>

**Modo de fallo** — Las reglas se eluden "temporalmente" durante las crisis.

**Capas involucradas** — Capa 2 (Gobernanza), Capa 6 (Evolución)

**Invariantes relevantes**

* 2.3 Las reglas constitucionales superan a la urgencia
* 6.2 Los cambios están versionados

**Condición de prueba** — Las decisiones de emergencia alteran permanentemente la estructura sin revisión.

**Comportamiento RCOS esperado** — Los poderes de emergencia están predefinidos, registrados y tienen caducidad.

**Criterios de aprobación** — Las reglas normales se reanudan tras la crisis.

**Criterios de fallo** — La crisis se convierte en precedente.

</details>

### ¿Qué tan madura es tu comunidad en esto?

Aprobar/reprobar es demasiado tajante para la vida real — la mayoría de las comunidades están a medio camino. Encuentra tu escalón y apunta al siguiente.

| Nivel | Cómo se ve |
|---|---|
| **L0 — Implícito** | Las crisis suspenden las reglas ad hoc; las excepciones se vuelven permanentes en silencio. |
| **L1 — Nombrado** | El grupo sabe que usa en exceso la palabra "emergencia" pero no ha predefinido los poderes de emergencia. |
| **L2 — Documentado** | Los poderes de emergencia están predefinidos, delimitados, registrados y con caducidad; los cambios permanentes requieren revisión normal. |
| **L3 — Aplicado y ensayado** | Las reglas normales se reanudan demostrablemente tras la crisis; cada acción de emergencia se registra y se revisa; una crisis real lo ha puesto a prueba. |

La mayoría de las comunidades que se reconocen aquí están en **L0 o L1**. El objetivo no es la perfección — es subir un escalón.

### Cómo RCOS previene esto

RCOS te permite moverte rápido en una crisis *sin* perder la constitución:

- **[Protocolo de Cambio](/articles/rcos-templates/layer-6/change-protocol)** — define los poderes de emergencia con antelación: su alcance, quién los ostenta y una caducidad obligatoria.
- **[Protocolo de Gobernanza](/articles/rcos-templates/layer-2/governance-protocol)** — mantén las reglas constitucionales por encima de la urgencia.
- **[Registro de Invariantes](/articles/rcos-templates/layer-0/invariants-register)** — marca qué reglas no pueden eludirse nunca, ni siquiera en una crisis.

Ver también la especificación: [Capa 6 — Seguridad y Reversibilidad del Cambio](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#85-change-safety-and-reversibility) y [Capa 2 — Salvaguardas y Modos de Fallo](/articles/rcos-core/v0-1/layer-2-governance-decision-logic#46-safeguards-and-failure-modes).

### Si ya está sucediendo

Si las excepciones "temporales" se han acumulado, reconcilialas con la constitución:

1. **Audita las excepciones vigentes.** Enumera cada medida de emergencia que aún esté en vigor.
2. **Hacer caducar o ratificar cada una.** O déjala expirar, o pásala por el proceso normal como un cambio real y versionado.
3. **Predefine los poderes de emergencia ahora,** para que la próxima crisis tenga un camino acotado y registrado en lugar de un cheque en blanco.
4. **Vigila la cascada** — la elusión normalizada es la forma en que los fundadores se atrincheran y los bienes comunes se venden bajo presión.

### Qué tiende a desencadenar este fallo

- **[Veto Informal del Fundador](/articles/rcos-stress-tests/governance-power/founder-informal-veto)** — quien ejerce el poder de emergencia de manera informal tiende a atrincherarlo.
- **[Privatización de los Bienes Comunes mediante Venta de Tierras](/articles/rcos-stress-tests/economy-resources/commons-privatization-through-land-sales)** — una crisis financiera "urgente" es la cobertura clásica para una venta apresurada e irreversible.

### Pruebas de estrés relacionadas

- **[Veto Informal del Fundador](/articles/rcos-stress-tests/governance-power/founder-informal-veto)** — la versión de poder permanente de la misma erosión constitucional.
