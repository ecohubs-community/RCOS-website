---
id: 8c2d5f13
title: Agotamiento por trabajo de cuidado invisible
summary: >-
  Cuando la comunidad funciona gracias al cuidado no remunerado de unas pocas
  personas silenciosamente agotadas.
parentId: a9e4c65d
order: 0
severity: high
stage:
  - growth
  - mature
layers:
  - 3
  - 5
invariants:
  - '3.3'
  - '5.3'
remediationReady: true
tags:
  - 'Capa 5: Operaciones'
  - Severidad alta
symptoms:
  - >-
    Una o dos personas sostienen la vida emocional de la comunidad — y están
    agotadas.
  - >-
    El trabajo de cuidado (hacer seguimiento, mediar, acoger, recibir a quienes
    llegan) es esencial pero invisible y no compensado.
  - 'Si una persona concreta se marchara, el tejido social se rompería.'
  - >-
    Este trabajo nunca aparece en ningún rol, presupuesto ni sistema de
    reconocimiento.
  - 'Quienes lo hacen están silenciosamente resentidas, o a punto de irse.'
preventsWith:
  - rcos-templates/layer-5/role-registry
  - rcos-templates/layer-3/internal-economy-protocol
  - rcos-templates/layer-5/operations-manual
cascade:
  - test: >-
      rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
    relation: enables
    note: >-
      La persona sin la que la comunidad no puede funcionar se vuelve
      estructuralmente indispensable e incuestionable.
related:
  - >-
    rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution
lang: es
sourceHash: 89ca71da
---

> **Severidad:** Alta — invisible hasta que la persona que lo carga se quema o se va, y entonces se vuelve existencial.
> **Dónde golpea:** Etapas de crecimiento y madurez, cuando ya se ha acumulado carga relacional.
> **¿Ya lo estás viviendo?** Salta a [Si ya está ocurriendo](#si-ya-está-ocurriendo).

### ¿Te suena familiar?

Hay una persona — quizá dos — que silenciosamente sostienen todo. Notan cuando alguien lo está pasando mal, suavizan los conflictos, organizan las cenas, recuerdan los cumpleaños, acogen a quienes llegan. Nada de eso está en su descripción de tareas, porque no hay descripción de tareas. La comunidad se siente cálida y conectada, y casi nadie se da cuenta de que esa calidez la están generando un par de personas que están con el tanque vacío — hasta que una de ellas, finalmente agotada, da un paso atrás o se va, y todo el tejido social se rompe.

### Señales de que te está pasando

- Una o dos personas sostienen la vida emocional de la comunidad — y están agotadas.
- El trabajo de cuidado es esencial pero invisible y no compensado.
- Si una persona concreta se marchara, el tejido social se rompería.
- Este trabajo nunca aparece en ningún rol, presupuesto ni sistema de reconocimiento.
- Quienes lo hacen están silenciosamente resentidas, o a punto de irse.

**Esto _no_ es lo mismo que** personas que dan libremente cuidado que encuentran significativo. La señal reveladora es la *dependencia estructural* — la comunidad se rompería sin un trabajo invisible que nadie nombró, delimitó ni reconoció.

### Por qué ocurre

El trabajo de cuidado y emocional es fácil de no-ver precisamente porque previene problemas en lugar de producir resultados visibles. Como rara vez se nombra o se reconoce, se acumula sobre quien está más en sintonía — normalmente las mismas pocas personas — hasta que se queman. La dependencia es estructural incluso cuando la entrega es voluntaria: el sistema depende de ello, pero el sistema nunca lo reconoce.

<details data-kind="rationale">
<summary>El test de estrés formal (para auditores)</summary>

**Modo de fallo** — Ciertos miembros cargan con un trabajo emocional o de cuidado desproporcionado.

**Capas implicadas** — Capa 3 (Economía), Capa 5 (Operaciones)

**Invariantes relevantes**

* 3.3 El reconocimiento de la contribución es explícito
* 5.3 El tiempo y la atención son recursos finitos

**Condición de prueba** — El trabajo de cuidado es esencial pero no está documentado ni compensado.

**Comportamiento esperado de RCOS** — El trabajo de cuidado se reconoce, se reduce o se redistribuye.

**Criterios de aprobación** — Sin dependencia estructural del trabajo invisible.

**Criterios de fallo** — El agotamiento se normaliza.

</details>

### ¿Cuán madura es tu comunidad en esto?

El aprobado/suspenso es demasiado tajante para la vida real — la mayoría de comunidades están a medio camino. Encuentra tu peldaño, y luego apunta al siguiente.

| Nivel | Cómo se ve |
|---|---|
| **L0 — Implícito** | El trabajo de cuidado es invisible, no nombrado, y lo cargan unas pocas personas por defecto. |
| **L1 — Nombrado** | El grupo reconoce que ciertas personas están sobrecargadas pero no ha reconocido ni redistribuido el trabajo. |
| **L2 — Documentado** | Las responsabilidades de cuidado son [roles](/articles/rcos-templates/layer-5/role-registry) nombrados, reconocidos como contribución, y delimitados por límites de carga. |
| **L3 — Aplicado y ensayado** | Sin dependencia estructural del trabajo invisible; el trabajo de cuidado se reconoce, se delimita y se rota; los límites de capacidad se respetan. |

La mayoría de comunidades que se reconocen aquí están en **L0 o L1**. El objetivo no es la perfección — es subir un peldaño.

### Cómo RCOS previene esto

RCOS hace que el trabajo invisible sea visible, delimitado y compartido:

- **[Registro de roles](/articles/rcos-templates/layer-5/role-registry)** — nombra las responsabilidades de cuidado y relacionales como roles reales, con rotación y límites.
- **[Protocolo de economía interna](/articles/rcos-templates/layer-3/internal-economy-protocol)** — reconoce el cuidado como contribución, para que sea visible y valorado en lugar de darse por supuesto.
- **[Manual de operaciones](/articles/rcos-templates/layer-5/operations-manual)** — delimita la carga de trabajo para que el trabajo esencial no recaiga silenciosamente sobre una sola persona.

Consulta también la especificación: [Capa 5 — Límites de carga de trabajo y capacidad](/articles/rcos-core/v0-1/layer-5-operations-coordination#74-workload-and-capacity-boundaries) y [Capa 3 — Reconocimiento de la contribución](/articles/rcos-core/v0-1/layer-3-economic-resource-system#52-contribution-recognition).

### Si ya está ocurriendo

Si tu comunidad funciona con los últimos restos de energía de alguien, actúa antes de que se vaya:

1. **Hazlo visible.** Lista el trabajo de cuidado que realmente está ocurriendo y quién lo hace. Nombrarlo es la mitad del arreglo.
2. **Reconócelo ya.** Valóralo explícitamente como contribución; el trabajo no visto es lo que quema a la gente.
3. **Redistribuye y delimita.** Rota los roles y fija límites de capacidad antes de que la persona clave llegue a su límite.
4. **Vigila la cascada** — la persona cuidadora indispensable también está acumulando poder invisible y una salida impulsada por el agotamiento.

### Qué tiende a desencadenar este fallo

- **[Poder invisible vía responsabilidades](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — la persona sin la que la comunidad no puede funcionar se vuelve estructuralmente indispensable e incuestionable.

### Tests de estrés relacionados

- **[Autosuficiencia sin contribución colectiva](/articles/rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution)** — la imagen especular: cuando la mayoría de miembros se desconectan, las pocas que sí se implican son las que se queman.
