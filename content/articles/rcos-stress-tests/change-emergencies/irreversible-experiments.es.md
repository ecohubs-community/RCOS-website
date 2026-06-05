---
id: d2a7e9f3
title: Experimentos Irreversibles
summary: Cuando "probémoslo y ya" no tiene vuelta atrás si fracasa.
parentId: 6acde7a7
order: 3
severity: medium
stage:
  - growth
  - mature
layers:
  - 6
invariants:
  - '6.3'
  - '6.4'
remediationReady: true
tags:
  - 'Layer 6: Evolution'
  - Medium severity
symptoms:
  - >-
    Se adoptó un cambio grande como "experimento" pero no tiene reversión
    definida.
  - >-
    "Probémoslo y veamos" era todo el plan; nadie estableció criterios de éxito
    ni fecha final.
  - >-
    Probar lo nuevo requirió pasos irreversibles (activos vendidos, un rol
    disuelto, estructura legal modificada).
  - >-
    Cuando los experimentos no funcionan, la comunidad se queda atrapada con
    ellos de todos modos.
  - 'No hay registro de lo que se intentó, por qué y qué pasó.'
preventsWith:
  - rcos-templates/layer-6/experiment-template
  - rcos-templates/layer-6/change-protocol
  - rcos-templates/layer-6/learning-log
cascade:
  - test: >-
      rcos-stress-tests/economy-resources/commons-privatization-through-land-sales
    relation: enables
    note: >-
      Vender la tierra como experimento es el irreversible más costoso,
      disfrazado de bajo riesgo.
related:
  - rcos-stress-tests/change-emergencies/institutional-amnesia
  - rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent
lang: es
sourceHash: 5718088d
---

> **Gravedad:** Media — el daño está acotado a cada cambio, pero cada uno puede ser permanente.
> **Dónde aprieta:** Etapas de crecimiento y madurez, cuando la comunidad se anima a intentar cosas grandes.
> **¿Ya estás viviendo esto?** Salta a [Si ya está pasando](#si-ya-está-pasando).

### ¿Te suena familiar?

Alguien propuso un cambio grande — un nuevo modelo de gobernanza, una construcción importante, reestructurar cómo funciona la membresía — y lo planteó como un experimento. "Probémoslo y veamos cómo va." Esa apertura se sintió saludable, así que el grupo siguió adelante. Pero probarlo implicó pasos que no se pueden deshacer: un activo vendido, un rol disuelto, una estructura legal modificada. Ahora no está saliendo bien, y no hay una salida tipo "ver cómo va", porque nunca hubo un plan de reversión — y nadie escribió cómo se suponía que se vería el éxito.

### Señales de que esto te está pasando

- Se adoptó un cambio grande como "experimento" pero no tiene reversión definida.
- "Probémoslo y veamos" era todo el plan; nadie estableció criterios de éxito ni fecha final.
- Probar lo nuevo requirió pasos irreversibles.
- Cuando los experimentos no funcionan, la comunidad se queda atrapada con ellos de todos modos.
- No hay registro de lo que se intentó, por qué y qué pasó.

**Esto _no_ es lo mismo que** un experimento genuino con criterios, un plazo definido y un plan de reversión. La señal es la *irreversibilidad disfrazada de experimentación* — el lenguaje del "solo probemos" sin la seguridad de poder deshacerlo.

### Por qué sucede

Llamar "experimento" a un cambio reduce la resistencia — suena de bajo riesgo y de mente abierta, así que la gente acepta más fácil. Pero si el cambio en realidad no puede revertirse, ese encuadre es un consuelo falso: la comunidad se compromete con algo de lo que no puede volverse atrás, y como no se fijaron criterios ni aprendizajes, ni siquiera puede saber si el experimento funcionó. La palabra hace el trabajo de persuadir; la irreversibilidad hace el daño.

<details data-kind="rationale">
<summary>La prueba de estrés formal (para auditores)</summary>

**Modo de Fallo** — Cambios irreversibles se adoptan bajo el encuadre de "experimentos" reversibles.

**Capas Involucradas** — Capa 6 (Evolución)

**Invariantes Relevantes**

* 6.3 Los experimentos son reversibles
* 6.4 El aprendizaje se captura

**Condición de Prueba** — Un cambio llamado experimento no tiene reversión, criterios de éxito ni plazo definido.

**Comportamiento RCOS Esperado** — Los experimentos llevan criterios, un plazo definido y un plan de reversibilidad; los cambios irreversibles pasan por el proceso completo de cambio.

**Criterios de Aprobación** — Los experimentos pueden deshacerse genuinamente y se revisan contra los criterios.

**Criterios de Fallo** — Los "experimentos" son permanentes y no evaluados.

</details>

### ¿Qué tan madura está tu comunidad en esto?

Aprobado/reprobado es demasiado tajante para la vida real — la mayoría de las comunidades están a medio camino. Encuentra tu peldaño y apunta al siguiente.

| Nivel | Cómo se ve |
|---|---|
| **L0 — Implícito** | Los "experimentos" se adoptan sin criterios, plazo ni reversión. |
| **L1 — Nombrado** | El grupo quiere experimentar de forma segura pero no ha definido cómo. |
| **L2 — Documentado** | Una [Plantilla de Experimento](/articles/rcos-templates/layer-6/experiment-template) requiere criterios de éxito, un plazo y un plan de reversión. |
| **L3 — Aplicado y ensayado** | Los experimentos son genuinamente reversibles y tienen plazos; al menos uno se ha ejecutado, revisado y o bien revertido o bien adoptado con base en evidencia. |

La mayoría de las comunidades que se reconocen aquí están en **L0 o L1**. La meta no es la perfección — es subir un peldaño.

### Cómo RCOS lo previene

RCOS mantiene honesto al "experimento" — y deja los movimientos irreversibles fuera de esa categoría:

- **[Plantilla de Experimento](/articles/rcos-templates/layer-6/experiment-template)** — exige criterios, un plazo y un plan de reversión antes de probar.
- **[Protocolo de Cambio](/articles/rcos-templates/layer-6/change-protocol)** — encamina los cambios irreversibles por el proceso completo, no por el carril de experimento.
- **[Registro de Aprendizajes](/articles/rcos-templates/layer-6/learning-log)** — captura lo que se probó y qué pasó, para que el experimento enseñe algo.

Consulta también la especificación: [Capa 6 — Experimentos](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#83-experiments) y [Seguridad y Reversibilidad del Cambio](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#85-change-safety-and-reversibility).

### Si ya está pasando

Si los "experimentos" se han vuelto permanentes en silencio, ordénalos por reversibilidad:

1. **Revisa los experimentos actuales en busca de una salida real** — ¿cuáles puedes realmente deshacer?
2. **Añade criterios y una fecha de revisión** a cualquiera que aún esté en marcha.
3. **Deja de llamar experimentos a los movimientos irreversibles** — pásalos por el proceso completo de cambio para que reciban el escrutinio que merecen.

### Qué tiende a desencadenar este fallo

- **[Privatización del Común mediante Ventas de Tierra](/articles/rcos-stress-tests/economy-resources/commons-privatization-through-land-sales)** — vender tierra "como experimento" es el movimiento irreversible más costoso de todos.

### Pruebas de estrés relacionadas

- **[Amnesia Institucional](/articles/rcos-stress-tests/change-emergencies/institutional-amnesia)** — sin aprendizajes capturados, incluso un experimento reversible no enseña nada.
- **[Precedente de Saltarse Reglas en Emergencias](/articles/rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent)** — ambos dejan pasar cambios grandes bajo una etiqueta tranquilizadora.
