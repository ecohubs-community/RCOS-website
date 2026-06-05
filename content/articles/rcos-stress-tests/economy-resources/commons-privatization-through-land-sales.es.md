---
id: 1afbg1a7
title: Privatización de los comunes mediante venta de tierras
summary: >-
  Cuando vender la tierra a los miembros vuelve, silenciosamente, imposible
  salir de la comunidad de forma justa.
parentId: cbd2804b
order: 0
severity: high
stage:
  - growth
  - mature
layers:
  - 0
  - 3
  - 1
invariants:
  - '0.2'
  - '3.2'
  - '1.2'
remediationReady: true
tags:
  - 'Layer 3: Economy'
  - High severity
symptoms:
  - >-
    La comunidad está considerando (o ha comenzado) vender parcelas o unidades a
    miembros individuales.
  - '"Es más sencillo si cada quien posee su parte" gana adeptos.'
  - >-
    No hay regla escrita sobre reventa, valoración de salida o qué permanece
    como comunes.
  - Quienes aportaron no pueden irse sin perder dinero o derechos.
  - >-
    Los invariantes declarados sobre la tierra común entran en conflicto
    silencioso con lo que realmente ocurre.
preventsWith:
  - rcos-templates/layer-3/treasury-ruleset
  - rcos-templates/layer-3/internal-economy-protocol
  - rcos-templates/layer-1/exit-protocol
  - rcos-templates/layer-0/invariants-register
cascade:
  - test: >-
      rcos-stress-tests/economy-resources/outsourced-labor-bypassing-contribution
    relation: enables
    note: >-
      Una vez que los miembros poseen privadamente su parte, tratar las
      obligaciones compartidas como opcionales se vuelve algo natural.
related:
  - rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent
lang: es
sourceHash: b6dc6124
---

> **Gravedad:** Alta — uno de los pocos fallos que puede terminar el proyecto estructuralmente, y a menudo de forma irreversible.
> **Dónde golpea:** Etapas de crecimiento y madurez, normalmente bajo presión financiera.
> **¿Ya lo estás viviendo?** Salta a [Si ya está sucediendo](#si-ya-está-sucediendo).

### ¿Te suena familiar?

El dinero escasea, o un miembro quiere la seguridad de *poseer* realmente su hogar, y alguien dice lo que suena sensato: sería más sencillo si cada uno comprara su propia parcela. Resuelve el problema de caja. Parece justo. Y silenciosamente, con ese paso pragmático, la tierra que se suponía debía mantenerse en común empieza a convertirse en propiedad privada — y la promesa de que cualquiera puede entrar, y cualquiera puede irse, sin quedar atrapado financieramente, empieza a disolverse.

### Señales de que esto te está pasando

- La comunidad está considerando (o ha comenzado) vender parcelas o unidades a miembros individuales.
- "Es más sencillo si cada quien posee su parte" gana adeptos.
- No hay regla escrita sobre reventa, valoración de salida o qué permanece como comunes.
- Quienes aportaron no pueden irse sin perder dinero o derechos.
- Los invariantes declarados sobre la tierra común entran en conflicto silencioso con lo que realmente ocurre.

**Esto _no_ es lo mismo que** un modelo de tenencia mixta deliberadamente diseñado, con límites comunes/privados explícitos y acordados de antemano y términos de salida claros. El indicio revelador es *una privatización que contradice los invariantes declarados por la propia comunidad*, decidida ad hoc, sin reglas de reventa y salida ya establecidas.

### Por qué ocurre

La tierra es el activo más grande y la presión más difícil de resistir — la propiedad individual se siente más segura, la financiación es más fácil, y una venta resuelve hoy una necesidad de caja a corto plazo. Pero una vez que los comunes se convierten en privados mediante acción informal, los derechos de salida y las protecciones constitucionales se erosionan, y el cambio suele ser irreversible. Esta es una de las pocas pruebas de estrés en las que fallar puede terminar estructuralmente con la comunidad.

<details data-kind="rationale">
<summary>La prueba de estrés formal (para auditores)</summary>

**Modo de fallo** — La comunidad vende tierra a los miembros, socavando las reglas de salida y constitucionales.

**Capas involucradas** — Capa 0 (Alcance e Invariantes), Capa 3 (Economía), Capa 1 (Membresía)

**Invariantes relevantes**

* 0.2 Alcance gobernado explícito
* 3.2 Protección de los comunes
* 1.2 La salida DEBE ser posible

**Condición de prueba** — Los cambios en la titularidad de los activos contradicen los invariantes declarados; los miembros no pueden salir sin perder derechos o propiedad.

**Comportamiento RCOS esperado** — Las ventas DEBEN ser bloqueadas o regidas por reglas declaradas de antemano; las condiciones de salida y reventa DEBEN existir *antes* de cualquier transferencia.

**Criterio de aprobación** — El estatus de los comunes y los derechos de salida permanecen intactos.

**Criterio de fallo** — La comunidad se vuelve estructuralmente imposible de abandonar.

</details>

### ¿Qué tan madura es tu comunidad en esto?

Aprobado/reprobado es demasiado tajante para la vida real — la mayoría de las comunidades están a medio camino. Encuentra tu peldaño y apunta al siguiente.

| Nivel | Cómo se ve |
|---|---|
| **L0 — Implícito** | Los límites entre comunes y privado se asumen, no se escriben; las ventas ad hoc son posibles. |
| **L1 — Nombrado** | El grupo reconoce el riesgo pero no tiene regla vinculante que proteja los comunes o regule la salida. |
| **L2 — Documentado** | El estatus de comunes, las condiciones de reventa y la valoración de salida están escritos y ratificados *antes* de cualquier transferencia. |
| **L3 — Aplicado y ensayado** | Cualquier venta es bloqueada o regida por reglas declaradas de antemano; la salida siempre es posible sin perder derechos; la protección ha sobrevivido a una prueba real de presión financiera. |

La mayoría de las comunidades que se reconocen aquí están en **L0 o L1**. La meta no es la perfección — es subir un peldaño.

### Cómo RCOS previene esto

RCOS protege los comunes y la salida *antes* de que llegue la presión:

- **[Reglamento de tesorería](/articles/rcos-templates/layer-3/treasury-ruleset)** + **[Protocolo de economía interna](/articles/rcos-templates/layer-3/internal-economy-protocol)** — declara qué es comunes y qué es privado, y protege los comunes de la privatización informal.
- **[Protocolo de salida](/articles/rcos-templates/layer-1/exit-protocol)** — garantiza que las condiciones de salida y reventa existan antes de que alguien transfiera algo, para que nadie quede atrapado.
- **[Registro de invariantes](/articles/rcos-templates/layer-0/invariants-register)** — registra la protección de los comunes como un invariante protegido que no puede ser modificado silenciosamente.
- Ejemplo trabajado: la salvaguarda **[Anti-privatización de los comunes de tierra](/articles/safeguards/land-commons-anti-privatization)**.

Consulta también la especificación: [Capa 3 — Recursos comunes vs privados](/articles/rcos-core/v0-1/layer-3-economic-resource-system#51-commons-vs-private-resources) y [Capa 1 — Salida y separación](/articles/rcos-core/v0-1/layer-1-membership-system#36-exit-and-separation).

### Si ya está sucediendo

Como la privatización suele ser irreversible, actúa con cuidado y rapidez:

1. **Congela movimientos irreversibles.** Pausa cualquier venta pendiente hasta que existan reglas — la irreversibilidad es el peligro central.
2. **Reafirma el invariante.** Confirma por escrito qué es comunes y no puede ser privatizado por acción unilateral o informal.
3. **Escribe los términos de salida y reventa antes de cualquier transferencia,** para que nadie quede atrapado y los comunes sobrevivan a una partida.
4. **Si ya ha habido ventas,** busca asesoría legal para reconstruir la posibilidad de salida y delimitar lo que quede de los comunes.

### Qué tiende a desencadenar este fallo

- **[Trabajo externalizado que esquiva la contribución](/articles/rcos-stress-tests/economy-resources/outsourced-labor-bypassing-contribution)** — una vez que la tierra es de propiedad privada, los miembros pueden tratar las obligaciones compartidas como opcionales y pagar para librarse de ellas.

### Pruebas de estrés relacionadas

- **[Precedente de elusión de reglas por emergencia](/articles/rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent)** — una crisis financiera "urgente" es la tapadera clásica para una venta apresurada.
