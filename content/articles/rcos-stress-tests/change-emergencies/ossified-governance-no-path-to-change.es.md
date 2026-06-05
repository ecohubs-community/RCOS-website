---
id: c8f4b2d1
title: Gobernanza osificada sin un camino para cambiar
summary: 'Cuando nada puede cambiar, el cambio ocurre marchándose.'
parentId: 6acde7a7
order: 2
severity: medium
stage:
  - mature
layers:
  - 6
invariants:
  - '6.1'
  - '6.2'
remediationReady: true
tags:
  - 'Layer 6: Evolution'
  - Medium severity
symptoms:
  - >-
    Las reglas originales se tratan como fijas; no hay un proceso legítimo para
    revisarlas.
  - >-
    "Así lo establecieron los fundadores" cierra la mayoría de las
    conversaciones de reforma.
  - >-
    Las personas frustradas presionan por el cambio amenazando con irse, o
    simplemente se van.
  - >-
    Las propuestas para adaptarse mueren por falta de cualquier mecanismo para
    considerarlas.
  - >-
    La comunidad está visiblemente desfasada respecto a sus propias necesidades
    actuales.
preventsWith:
  - rcos-templates/layer-6/change-protocol
  - rcos-templates/layer-6/version-history
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: enables
    note: >-
      Sin un camino legítimo para el cambio, la frustración no tiene a dónde ir
      más que a la clandestinidad.
  - test: rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent
    relation: feeds
    note: >-
      Cuando el cambio normal es imposible, la gente espera a que una crisis
      fuerce lo que no pudo proponer.
related:
  - rcos-stress-tests/change-emergencies/unprotected-core-invariants
lang: es
sourceHash: ba4439dd
---

> **Severidad:** Media — declive lento más que colapso: la comunidad se calcifica y pierde miembros.
> **Dónde golpea:** La etapa madura, a menudo tras un período inicial de rotación que las personas fundadoras sobrecompensaron.
> **¿Ya estás viviendo esto?** Salta a [Si ya está sucediendo](#si-ya-está-sucediendo).

### ¿Te suena familiar?

La comunidad estableció sus reglas hace años, y ahora son sagradas. Cuando alguien sugiere que la estructura ya no encaja — el formato de las reuniones, los niveles de membresía, cómo funciona el dinero — la conversación choca contra un muro: "así lo establecieron los fundadores". No existe un proceso real para proponer un cambio, así que la presión no tiene a dónde ir. Las personas que quieren que la comunidad evolucione no tienen oportunidad de defender su postura; simplemente se van en silencio, o amenazan con hacerlo, y el lugar se desfasa cada vez más de quienes realmente lo habitan.

### Señales de que esto te está pasando

- Las reglas originales se tratan como fijas; no hay un proceso legítimo para revisarlas.
- "Así lo establecieron los fundadores" cierra la mayoría de las conversaciones de reforma.
- Las personas frustradas presionan por el cambio amenazando con irse, o simplemente se van.
- Las propuestas para adaptarse mueren por falta de cualquier mecanismo para considerarlas.
- La comunidad está visiblemente desfasada respecto a sus propias necesidades actuales.

**Esto _no_ es lo mismo que** proteger deliberadamente los invariantes centrales (eso es saludable — ver [Invariantes centrales desprotegidos](/articles/rcos-stress-tests/change-emergencies/unprotected-core-invariants) para el fallo *opuesto*). La señal es que *todo* está congelado, sin un camino restringido para cambiar nada — de modo que la adaptación legítima se vuelve imposible.

### Por qué ocurre

Tras un período temprano de rotación, las comunidades a menudo sobrecompensan hacia la rigidez — la estabilidad se siente segura, y reabrir las reglas se siente peligroso. Pero un sistema sin un mecanismo legítimo de cambio no puede adaptarse a nuevos miembros, nuevas condiciones, ni a sus propios errores. La presión por el cambio no desaparece; se enruta alrededor del sistema en forma de salidas, bifurcaciones e incumplimiento silencioso de las reglas.

<details data-kind="rationale">
<summary>La prueba de estrés formal (para auditores)</summary>

**Modo de fallo** — No existe un mecanismo legítimo y restringido para cambiar las reglas.

**Capas implicadas** — Capa 6 (Evolución)

**Invariantes relevantes**

* 6.1 El cambio es posible pero restringido
* 6.2 Los cambios están versionados

**Condición de prueba** — Los miembros no pueden proponer ni adoptar cambios en las reglas a través de ningún proceso definido.

**Comportamiento esperado de RCOS** — Un mecanismo de cambio restringido permite que las reglas se propongan, revisen, modifiquen y versionen.

**Criterios de aprobación** — El sistema puede adaptarse mediante un proceso legítimo.

**Criterios de fallo** — El cambio sólo ocurre por salida, bifurcación o incumplimiento de las reglas.

</details>

### ¿Qué tan madura está tu comunidad en esto?

Aprobado/reprobado es demasiado tosco para la vida real — la mayoría de las comunidades están a medio camino. Encuentra tu peldaño, y luego apunta al siguiente.

| Nivel | Cómo se ve |
|---|---|
| **L0 — Implícito** | No hay un camino legítimo para el cambio; las reglas están congeladas y la reforma ocurre por salida. |
| **L1 — Nombrado** | El grupo admite que no puede adaptarse pero no ha construido un mecanismo de cambio. |
| **L2 — Documentado** | Un [Protocolo de Cambio](/articles/rcos-templates/layer-6/change-protocol) define cómo se pueden proponer, revisar y modificar las reglas — posible pero restringido. |
| **L3 — Aplicado y ensayado** | El cambio ocurre a través del proceso; el sistema se ha adaptado al menos una vez sin crisis ni cisma. |

La mayoría de las comunidades que se reconocen aquí están en **L0 o L1**. La meta no es la perfección — es subir un peldaño.

### Cómo lo previene RCOS

RCOS hace que el cambio sea posible *y* acotado — ni congelado ni caótico:

- **[Protocolo de Cambio](/articles/rcos-templates/layer-6/change-protocol)** — define un camino restringido y legítimo para proponer y adoptar cambios.
- **[Historial de versiones](/articles/rcos-templates/layer-6/version-history)** — rastrea cómo evolucionan las reglas, de modo que el cambio sea visible y acotado en lugar de temido.

Ver también la especificación: [Capa 6 — Mecanismos de cambio](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#81-change-mechanisms) y [Versionado y autoridad](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#82-versioning-and-authority).

### Si ya está sucediendo

Si las reglas están congeladas, abre un canal seguro antes de que más personas se vayan:

1. **Abre un canal para el cambio** — un proceso de propuestas, aunque sea mínimo.
2. **Haz pasar por él una adaptación pendiente** como prueba de concepto.
3. **Distingue los invariantes protegidos** (deliberadamente difíciles de cambiar) de todo lo demás (modificable mediante proceso), para que "eso no se puede cambiar" deje de aplicarse a todo.

### Qué tiende a desencadenar este fallo

- **[Normalización de la evitación de conflictos](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — sin un camino legítimo para el cambio, la frustración pasa a la clandestinidad.
- **[Precedente de elusión de reglas por emergencia](/articles/rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent)** — cuando el cambio normal es imposible, la gente espera a que una crisis lo fuerce.

### Pruebas de estrés relacionadas

- **[Invariantes centrales desprotegidos](/articles/rcos-stress-tests/change-emergencies/unprotected-core-invariants)** — el desequilibrio opuesto: aquí nada puede cambiar; allí todo puede, incluso los cimientos.
