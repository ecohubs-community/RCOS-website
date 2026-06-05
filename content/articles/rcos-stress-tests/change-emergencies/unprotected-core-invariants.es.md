---
id: b6d1a3e9
title: Invariantes centrales desprotegidas
summary: >-
  Cuando las promesas fundacionales pueden deshacerse con una sola votación
  ordinaria.
parentId: 6acde7a7
order: 1
severity: high
stage:
  - growth
  - mature
layers:
  - 0
  - 6
invariants:
  - '0.4'
  - '6.1'
remediationReady: true
tags:
  - 'Layer 0: Scope'
  - High severity
symptoms:
  - >-
    Los compromisos fundacionales de la comunidad (la tierra permanece como bien
    común, sin un líder único) pueden cambiarse por mayoría simple.
  - No existe distinción entre reglas cotidianas y reglas constitucionales.
  - >-
    Una mayoría transitoria podría reescribir el núcleo de la comunidad en una
    sola reunión.
  - No existe una lista de las cosas que se supone que son inmutables.
  - >-
    La gente asume que los principios fundacionales están a salvo, pero nada los
    protege estructuralmente.
preventsWith:
  - rcos-templates/layer-0/invariants-register
  - rcos-templates/layer-6/change-protocol
  - rcos-templates/layer-2/governance-protocol
cascade:
  - test: >-
      rcos-stress-tests/economy-resources/commons-privatization-through-land-sales
    relation: enables
    note: >-
      Si la protección de los bienes comunes es modificable como cualquier otra
      regla, puede eliminarse por votación bajo presión.
  - test: rcos-stress-tests/governance-power/founder-informal-veto
    relation: enables
    note: >-
      Una estructura desprotegida permite que una autoridad informal remodele
      las reglas a su medida.
related:
  - rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent
lang: es
sourceHash: e54af999
---

> **Severidad:** Alta — una mayoría transitoria puede desmantelar en una sola reunión aquello sobre lo que se fundó la comunidad.
> **Dónde duele:** En las etapas de crecimiento y madurez, a medida que la membresía rota y el consenso de quienes fundaron se va difuminando.
> **¿Ya lo estás viviendo?** Salta a [Si ya está ocurriendo](#si-ya-está-ocurriendo).

### ¿Te suena familiar?

La comunidad se construyó sobre unos pocos innegociables: la tierra se mantiene en común, no hay un único jefe, el lugar existe para X y no para obtener beneficios. Todo el mundo estaba de acuerdo, así que nadie se molestó nunca en hacer que esos compromisos fueran *más difíciles de cambiar* que el horario de las reuniones. Pasan los años, la membresía rota, llega una temporada estresante — y una noche, con la misma mayoría simple que se usa para elegir el color de la pintura, los cimientos mismos están sobre la mesa. Nada lo impide estructuralmente. Las promesas "permanentes" resultan ser exactamente tan duraderas como la próxima votación.

### Señales de que esto te está pasando

- Los compromisos fundacionales pueden cambiarse por mayoría simple.
- No existe distinción entre reglas cotidianas y reglas constitucionales.
- Una mayoría transitoria podría reescribir el núcleo de la comunidad en una sola reunión.
- No existe una lista de las cosas que se supone que son inmutables.
- La gente asume que los principios fundacionales están a salvo, pero nada los protege estructuralmente.

**Esto _no_ es lo mismo que** tener una vía deliberada y exigente de enmienda para las invariantes centrales — un listón muy alto es sano. La señal de alarma es que *los compromisos fundacionales no tienen protección especial*: son modificables exactamente igual que el horario de una reunión.

### Por qué ocurre

En los primeros días todo el mundo coincide en el núcleo, así que protegerlo parece innecesario — ¿para qué proteger lo que nadie tocaría? Pero la membresía cambia, los ánimos varían, y una mayoría futura bajo presión puede vaciar discretamente los cimientos que hicieron que la comunidad fuera lo que es. Sin invariantes protegidas, "permanente" no es más que una sensación, y los compromisos más importantes son los menos defendidos.

<details data-kind="rationale">
<summary>La prueba de estrés formal (para auditores)</summary>

**Modo de fallo** — Las invariantes fundacionales son modificables mediante un proceso ordinario.

**Capas involucradas** — Capa 0 (Identidad y Alcance), Capa 6 (Evolución)

**Invariantes relevantes**

* 0.4 Invariantes protegidas
* 6.1 El cambio es posible pero está restringido

**Condición de la prueba** — Los compromisos centrales pueden cambiarse mediante el mismo mecanismo que las decisiones cotidianas.

**Comportamiento esperado de RCOS** — Las invariantes protegidas están nombradas y conllevan un listón de enmienda alto y explícito, distinto del de las reglas ordinarias.

**Criterios de aprobación** — Las invariantes centrales no pueden cambiarse mediante un proceso ordinario.

**Criterios de fallo** — Una mayoría transitoria puede reescribir los cimientos.

</details>

### ¿Qué tan madura está tu comunidad en esto?

Aprobado/suspendido es una vara demasiado tosca para la vida real — la mayoría de las comunidades está a medio camino. Encuentra tu peldaño y apunta al siguiente.

| Nivel | Cómo se ve |
|---|---|
| **L0 — Implícito** | Las reglas centrales y las cotidianas son igualmente modificables; los cimientos no están protegidos. |
| **L1 — Nombrado** | El grupo sabe que algunas reglas deberían ser más difíciles de cambiar, pero no las ha separado. |
| **L2 — Documentado** | Un [Registro de Invariantes](/articles/rcos-templates/layer-0/invariants-register) nombra las invariantes protegidas con un listón de enmienda alto y explícito. |
| **L3 — Aplicado y ensayado** | Las invariantes centrales no pueden cambiarse mediante un proceso ordinario; la protección ha resistido un intento real de eludirla. |

La mayoría de las comunidades que se reconocen aquí están en **L0 o L1**. El objetivo no es la perfección — es subir un peldaño.

### Cómo RCOS previene esto

RCOS separa el cambio constitucional de las decisiones cotidianas:

- **[Registro de Invariantes](/articles/rcos-templates/layer-0/invariants-register)** — nombra las invariantes protegidas y el listón alto necesario para cambiarlas.
- **[Protocolo de Cambio](/articles/rcos-templates/layer-6/change-protocol)** — define una vía distinta y más exigente para los cambios constitucionales.
- **[Protocolo de Gobernanza](/articles/rcos-templates/layer-2/governance-protocol)** — mantén las reglas constitucionales por encima de las decisiones ordinarias.

Consulta también la especificación: [Capa 0 — Invariantes](/articles/rcos-core/v0-1/layer-0-identity-scope#23-invariants) y [Capa 6 — Versionado y Autoridad](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#82-versioning-and-authority).

### Si ya está ocurriendo

Si tus cimientos están desprotegidos, protégelos antes de que sean puestos a prueba:

1. **Haz una lista de las cosas que nunca deberían cambiar de forma silenciosa** — los cimientos reales.
2. **Establece un listón de enmienda alto** para ellas — supermayoría, un periodo de espera, una revisión — distinto del de las reglas cotidianas.
3. **Ratifica el registro** para que la propia protección quede asentada y no pueda eliminarse en silencio.

### Qué tiende a desencadenar este fallo

- **[Privatización de los bienes comunes mediante venta de tierras](/articles/rcos-stress-tests/economy-resources/commons-privatization-through-land-sales)** — si la protección de los bienes comunes es modificable, puede eliminarse por votación bajo presión.
- **[Veto informal de quienes fundaron](/articles/rcos-stress-tests/governance-power/founder-informal-veto)** — una estructura desprotegida permite que una autoridad informal remodele las reglas.

### Pruebas de estrés relacionadas

- **[Precedente de eludir reglas en emergencias](/articles/rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent)** — la otra forma en que se erosiona la constitución: no se enmienda abiertamente, sino que se elude bajo urgencia.
