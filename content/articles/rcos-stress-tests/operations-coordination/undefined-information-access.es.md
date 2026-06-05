---
id: e4b2c6a9
title: Acceso a la Información Indefinido
summary: 'Cuando quién-puede-ver-qué lo decide a quién conoces, no una regla.'
parentId: a9e4c65d
order: 4
severity: medium
stage:
  - growth
  - mature
layers:
  - 5
invariants:
  - '5.4'
  - '5.2'
remediationReady: true
tags:
  - 'Layer 5: Operations'
  - Medium severity
symptoms:
  - >-
    Algunos miembros están "al tanto" de decisiones, finanzas o planes; otros se
    enteran tarde o nunca.
  - >-
    No hay regla sobre qué es abierto para los miembros, qué es privado y quién
    puede acceder a qué.
  - >-
    La información sensible de los miembros se gestiona informalmente, sin
    límites acordados.
  - >-
    Las personas recién llegadas no encuentran los documentos, la historia o el
    contexto que necesitan.
  - El acceso a cuentas y registros clave depende de relaciones personales.
preventsWith:
  - rcos-templates/layer-5/operations-manual
  - rcos-templates/layer-5/meeting-templates
cascade:
  - test: rcos-stress-tests/governance-power/informal-clique-decision-making
    relation: enables
    note: >-
      La asimetría de información es el sustrato en torno al cual se forma un
      grupo cerrado.
  - test: >-
      rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
    relation: enables
    note: >-
      Quien posee los registros posee silenciosamente poder sobre lo que otros
      pueden hacer.
related:
  - >-
    rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
lang: es
sourceHash: 6ee1cc5b
---

> **Severidad:** Media — rara vez es una crisis por sí sola, pero construye silenciosamente grupos cerrados y fragilidad.
> **Dónde golpea:** Etapas de crecimiento y madurez, a medida que los registros y canales se multiplican.
> **¿Ya lo estás viviendo?** Salta a [Si ya está ocurriendo](#si-ya-está-ocurriendo).

### ¿Te suena familiar?

Algunas personas siempre parecen enterarse primero — del plan, de la situación del presupuesto, de lo que se discutió. Otras se enteran de las decisiones después de tomadas, o tropiezan con documentos importantes por casualidad. No hay política sobre nada de eso; el acceso simplemente creció orgánicamente, de persona en persona, de canal en canal. Las personas recién llegadas no pueden encontrar la historia que necesitan, la información sensible sobre los miembros circula informalmente, y "estar al tanto" se ha convertido silenciosamente en una señal de quién realmente pertenece.

### Señales de que esto te está pasando

- Algunos miembros están "al tanto"; otros se enteran tarde o nunca.
- No hay regla sobre qué es abierto para los miembros, qué es privado y quién puede acceder a qué.
- La información sensible de los miembros se gestiona informalmente, sin límites acordados.
- Las personas recién llegadas no encuentran los documentos, la historia o el contexto que necesitan.
- El acceso a cuentas y registros clave depende de relaciones personales.

**Esto _no_ es lo mismo que** tener límites de privacidad explícitos y acordados — algunas cosas *deberían* ser privadas. La señal es que el acceso es *no declarado y desigual*: determinado informalmente, de modo que la información se vuelve una moneda silenciosa de pertenencia.

### Por qué ocurre

El acceso a la información rara vez se diseña; se acumula. La gente comparte con quien confía, guarda las cosas donde le resulta conveniente, y el resultado es un mapa invisible de quién-sabe-qué que sigue la proximidad social en lugar del rol. Esa asimetría endurece grupos cerrados, deja varadas a las personas recién llegadas, y vuelve frágil el conocimiento crítico — guardado en unas cuantas bandejas de entrada y memorias en vez de en algún lugar localizable.

<details data-kind="rationale">
<summary>La prueba de estrés formal (para auditores)</summary>

**Modo de Fallo** — Quién puede acceder a qué información es informal y desigual.

**Capas Involucradas** — Capa 5 (Operaciones)

**Invariantes Relevantes**

* 5.4 Las reglas de acceso a la información son explícitas
* 5.2 El conocimiento operativo está documentado

**Condición de Prueba** — Los límites de transparencia y privacidad están indefinidos; el acceso depende de las relaciones.

**Comportamiento Esperado de RCOS** — Los valores predeterminados de transparencia, los límites de privacidad y el acceso por rol están explícitamente definidos; los registros son localizables.

**Criterios de Aprobación** — El acceso sigue reglas declaradas, no la proximidad social.

**Criterios de Fallo** — La información es una moneda de pertenencia.

</details>

### ¿Qué tan madura es tu comunidad en esto?

Aprobado/reprobado es demasiado tosco para la vida real — la mayoría de las comunidades están a medio camino. Encuentra tu peldaño y luego apunta al siguiente.

| Nivel | Cómo se ve |
|---|---|
| **L0 — Implícito** | El acceso es informal y desigual; estar "al tanto" depende de relaciones. |
| **L1 — Nombrado** | El grupo percibe la asimetría pero no ha definido reglas de acceso. |
| **L2 — Documentado** | Un [Manual de Operaciones](/articles/rcos-templates/layer-5/operations-manual) define los valores predeterminados de transparencia, los límites de privacidad y quién puede acceder a qué. |
| **L3 — Aplicado y ensayado** | El acceso sigue reglas declaradas; los registros son localizables; los límites de privacidad son explícitos y respetados. |

La mayoría de las comunidades que se reconocen aquí están en **L0 o L1**. La meta no es la perfección — es subir un peldaño.

### Cómo RCOS previene esto

RCOS convierte el acceso a la información en una regla declarada, no en un hecho social:

- **[Manual de Operaciones](/articles/rcos-templates/layer-5/operations-manual)** — define los valores predeterminados de transparencia, los límites de privacidad y el acceso por rol.
- **[Plantillas de Reuniones](/articles/rcos-templates/layer-5/meeting-templates)** — registra las decisiones donde todos los miembros puedan encontrarlas, no en canales privados.

Consulta también la especificación: [Capa 5 — Documentación y Flujo de Información](/articles/rcos-core/v0-1/layer-5-operations-coordination#73-documentation-and-information-flow).

### Si ya está ocurriendo

Si el acceso creció por accidente, vuelve a trazarlo a propósito:

1. **Mapea qué existe y quién puede alcanzarlo** — las brechas se vuelven obvias rápido.
2. **Establece valores predeterminados:** qué es abierto a todos los miembros, qué es privado y quién administra el acceso.
3. **Mueve los registros críticos a almacenamiento compartido y accesible por rol** para que el conocimiento no esté atado a relaciones.
4. **Vigila la cascada** — la asimetría de información es como se forman los grupos cerrados y el poder invisible.

### Qué tiende a desencadenar este fallo

- **[Toma de Decisiones por Grupos Informales](/articles/rcos-stress-tests/governance-power/informal-clique-decision-making)** — la asimetría de información es el sustrato de un grupo cerrado.
- **[Poder Invisible vía Responsabilidades](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — quien posee los registros posee poder silencioso.

### Pruebas de estrés relacionadas

- **[Poder Invisible vía Responsabilidades](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — el conocimiento no documentado y el acceso indefinido son dos caras de la misma concentración.
