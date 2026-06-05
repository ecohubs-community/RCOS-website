---
id: d7a1f3e8
title: Tipo de decisión indefinido
summary: Cuando el grupo discute qué decidir antes de acordar cómo decidirlo.
parentId: 7f25f268
order: 3
severity: medium
stage:
  - forming
  - growth
  - mature
layers:
  - 2
invariants:
  - '2.1'
  - '2.2'
remediationReady: true
tags:
  - 'Capa 2: Gobernanza'
  - Severidad media
symptoms:
  - >-
    Las discusiones se estancan porque nadie acordó si esto es un consenso, una
    votación o una decisión delegada.
  - >-
    La misma decisión se reabre una y otra vez porque nunca quedó claro que
    realmente se hubiera decidido.
  - Quien plantea la pregunta primero controla efectivamente el resultado.
  - >-
    "Esperen, ¿estamos decidiendo esto ahora, y quién decide?" es una confusión
    recurrente.
  - >-
    Las reglas de decisión cambian implícitamente según el tema o quién esté en
    la sala.
preventsWith:
  - rcos-templates/layer-2/decision-matrix
  - rcos-templates/layer-2/governance-protocol
cascade:
  - test: rcos-stress-tests/governance-power/dominant-speakers-decision-spaces
    relation: enables
    note: >-
      Sin un mecanismo acordado, el tiempo al hablar y el encuadre deciden los
      resultados por defecto.
  - test: rcos-stress-tests/governance-power/informal-clique-decision-making
    relation: enables
    note: >-
      El tipo de decisión indefinido permite que los resultados deriven hacia
      quien planteó la pregunta primero.
related:
  - rcos-stress-tests/governance-power/dominant-speakers-decision-spaces
lang: es
sourceHash: c8cfa224
---

> **Severidad:** Media — rara vez es dramática, pero hace que cada decisión sea cuestionable y lenta.
> **Dónde duele:** En cualquier etapa; es un lastre silencioso para un grupo que por lo demás funciona.
> **¿Ya estás viviendo esto?** Salta a [Si ya está ocurriendo](#si-ya-está-ocurriendo).

### ¿Te suena familiar?

Surge una pregunta y el grupo se lanza directo a ella: opiniones, argumentos, una larga discusión. Una hora después, no está claro si se decidió algo, quién tenía la autoridad para decidirlo, o si un suave "bueno, supongo que haremos eso" cuenta como definitivo. Al mes siguiente el mismo tema reaparece como si la primera conversación nunca hubiera ocurrido. El problema nunca fue el *contenido*. Es que nadie acordó, por adelantado, *qué tipo* de decisión era esta y cómo se resolvería.

### Señales de que esto te está pasando

- Las discusiones se estancan porque nadie acordó si esto es un consenso, una votación o una decisión delegada.
- La misma decisión se reabre una y otra vez porque nunca quedó claro que realmente se hubiera decidido.
- Quien plantea la pregunta primero controla efectivamente el resultado.
- "Esperen, ¿estamos decidiendo esto ahora, y quién decide?" es una confusión recurrente.
- Las reglas de decisión cambian implícitamente según el tema o quién esté en la sala.

**Esto _no_ es lo mismo que** usar deliberadamente mecanismos distintos para clases distintas de decisiones — eso es saludable, *si se declara*. La señal es que el *tipo* de decisión — quién decide, con qué mecanismo y si es definitivo — está indefinido en el momento de decidir, así que se improvisa cada vez.

### Por qué pasa

Los grupos saltan directo al contenido ("¿qué hacemos con X?") sin antes acordar el tipo ("¿es esto nuestro para decidir, con qué regla, y es definitivo?"). Saltarse ese paso significa que el encuadre más fuerte gana, las decisiones se sienten ilegítimas para cualquiera que no haya compartido ese encuadre, y todo queda re-litigable — porque nada fue nunca formalmente *una decisión* en primer lugar.

<details data-kind="rationale">
<summary>El test de estrés formal (para auditores)</summary>

**Modo de fallo** — Las decisiones se debaten sin acordar antes su tipo y mecanismo.

**Capas involucradas** — Capa 2 (Gobernanza)

**Invariantes relevantes**

* 2.1 El tipo de decisión precede al contenido de la decisión
* 2.2 La autoridad DEBE ser explícita

**Condición de prueba** — Las decisiones se toman sin un tipo declarado, por lo que el mecanismo y la autoridad se improvisan cada vez.

**Comportamiento esperado de RCOS** — El tipo de cada decisión (mecanismo + autoridad + carácter definitivo) se establece antes de debatir su contenido.

**Criterios de aprobación** — Las decisiones nombran su tipo por adelantado y no se reabren silenciosamente.

**Criterios de fallo** — El tipo de decisión se improvisa, por lo que el encuadre determina el resultado.

</details>

### ¿Qué tan madura es tu comunidad en esto?

Aprobado/reprobado es demasiado tajante para la vida real — la mayoría de las comunidades están a medio camino. Encuentra tu peldaño y luego apunta al siguiente.

| Nivel | Cómo se ve |
|---|---|
| **L0 — Implícito** | El tipo de decisión se improvisa cada vez; el encuadre decide el resultado. |
| **L1 — Nombrado** | El grupo nota la confusión pero no ha mapeado los tipos de decisión a mecanismos. |
| **L2 — Documentado** | Una [Matriz de Decisiones](/articles/rcos-templates/layer-2/decision-matrix) asigna a cada clase de decisión un tipo, un mecanismo y quién decide — resuelto antes del contenido. |
| **L3 — Aplicado y ensayado** | Cada decisión significativa nombra su tipo por adelantado; las decisiones son definitivas y no se reabren silenciosamente. |

La mayoría de las comunidades que se reconocen aquí están en **L0 o L1**. El objetivo no es la perfección — es subir un peldaño.

### Cómo lo previene RCOS

RCOS fuerza el tipo antes del contenido:

- **[Matriz de Decisiones](/articles/rcos-templates/layer-2/decision-matrix)** — mapea clases de decisión a su mecanismo y autoridad, para que el tipo esté decidido de antemano.
- **[Protocolo de Gobernanza](/articles/rcos-templates/layer-2/governance-protocol)** — convierte "nombrar primero el tipo de decisión" en una regla permanente del funcionamiento del grupo.

Consulta también la especificación: [Capa 2 — Tipos de Decisión](/articles/rcos-core/v0-1/layer-2-governance-decision-logic#41-decision-types) y [Matriz de Decisiones](/articles/rcos-core/v0-1/layer-2-governance-decision-logic#44-decision-matrix).

### Si ya está ocurriendo

Si las decisiones se siguen disolviendo y reformulando, resuelve primero el tipo:

1. **Antes de la próxima decisión disputada, acuerda su tipo** — quién decide, con qué regla y si es definitiva.
2. **Construye una matriz de decisiones rápida a partir de decisiones reales recientes;** las ambiguas afloran rápido.
3. **Deja de re-litigar** — registra las decisiones con su tipo, para que "ya decidimos esto" sea verificable.

### Qué tiende a desencadenar este fallo

- **[Hablantes Dominantes en Espacios de Decisión](/articles/rcos-stress-tests/governance-power/dominant-speakers-decision-spaces)** — sin un mecanismo acordado, el tiempo al hablar y el encuadre deciden los resultados.
- **[Toma de Decisiones por Camarillas Informales](/articles/rcos-stress-tests/governance-power/informal-clique-decision-making)** — el tipo indefinido permite que las decisiones deriven hacia quien las planteó primero.

### Tests de estrés relacionados

- **[Hablantes Dominantes en Espacios de Decisión](/articles/rcos-stress-tests/governance-power/dominant-speakers-decision-spaces)** — el mismo mecanismo ausente, expresado como quién-habla-más en lugar de quién-encuadra-primero.
