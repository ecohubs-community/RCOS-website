---
id: 6acbe9a7
title: Pruebas de Estrés de RCOS
parentId: null
order: 7
lang: es
sourceHash: e05e86e3
---

## Qué son las Pruebas de Estrés

Las Pruebas de Estrés de RCOS son **escenarios de fallo del mundo real** — situaciones que las comunidades han vivido realmente — formalizadas como casos de prueba que la especificación RCOS debe soportar. Cada prueba describe un modo concreto de fallo, las capas que toca, los invariantes que pone bajo presión y la respuesta estructural que RCOS espera.

Una prueba de estrés responde a una sola pregunta:

> *Si esto le sucediera a una comunidad usando RCOS, ¿absorbería el sistema la situación — o habría que eludir el sistema?*

Si RCOS puede sobrevivir al escenario sin arreglos informales, la prueba **se aprueba**. Si no puede, la prueba **falla** — y una prueba fallida señala una brecha real en el marco que las versiones futuras deben cerrar. Las pruebas de estrés son la forma en que RCOS se mantiene honesto: la especificación es solo tan sólida como los fallos contra los que ha sido probada.

## Cómo están organizadas

Las pruebas de estrés se agrupan según el tipo de fallo que examinan:

- **[Gobernanza y Poder](/articles/rcos-stress-tests/governance-power?id=7f25f268)** — autoridad informal, veto fundacional, oradores dominantes, camarillas ocultas.
- **[Conflicto y Responsabilidad](/articles/rcos-stress-tests/conflict-accountability)** — evitación, represalias, disidencia reprimida.
- **[Cultura e Influencia](/articles/rcos-stress-tests/culture-influence)** — captura carismática, deriva ideológica, presión de grupo.
- **[Economía y Recursos](/articles/rcos-stress-tests/economy-resources)** — privatización de los bienes comunes, trabajo invisible, asimetría de riqueza.
- **[Membresía y Límites](/articles/rcos-stress-tests/membership-boundaries)** — derechos de salida poco claros, evaluación oculta, osificación del grupo interno.
- **[Operaciones y Coordinación](/articles/rcos-stress-tests/operations-coordination)** — agotamiento silencioso, confusión de roles, traspasos ausentes.
- **[Cambio y Emergencias](/articles/rcos-stress-tests/change-emergencies)** — reglas de emergencia que se vuelven permanentes en silencio, giros sin gobernanza.

Cada prueba está escrita para ser **reconocida, no solo leída**. Comienza con las señales vividas del fallo, explica por qué ocurre, te sitúa en una escala de madurez desde *implícito* hasta *ensayado*, y señala las estructuras exactas de RCOS que lo previenen — con rutas separadas para **prevenirlo** y para **estabilizarlo cuando ya está ocurriendo**. La especificación original de aprobar/fallar se conserva dentro de cada prueba, en un panel para auditores. La [matriz de cobertura](#coverage-heading) más abajo muestra qué invariante de RCOS ejercita cada prueba.

## Cómo usarlas

- Como **verificación de diseño** — léelas antes de fundar una comunidad para anticipar lo que puede salir mal.
- Como **herramienta de auditoría** — recórrelas con un grupo existente y observa qué escenarios no tienen respuesta.
- Como **ayuda en el conflicto** — cuando algo se rompe, encuentra la prueba relevante y sigue el comportamiento esperado en lugar de improvisar.
- Como **vocabulario compartido** para nombrar patrones de fallo sin culpar a individuos.

## Herramientas

Dos herramientas complementarias hacen que la biblioteca sea más fácil de aplicar:

- **[Autoevaluación](/articles/rcos-stress-tests/self-assessment)** — marca las señales de advertencia que te resulten familiares y ve a qué pruebas de estrés se acerca más tu comunidad, clasificadas por qué tan apremiantes son, cada una enlazada a las estructuras que la previenen. Todo permanece en tu navegador.
- **[Guía de Facilitación](/articles/rcos-stress-tests/facilitation-worksheet)** — cómo ejecutar una prueba de estrés como sesión grupal: una hoja de trabajo paso a paso que convierte cualquier prueba en una conversación de 60–90 minutos que termina en un próximo paso concreto.

## Lo que estas pruebas no pueden hacer

RCOS es un marco **estructural**, y estas pruebas heredan sus límites. Enunciarlos claramente es parte de mantenerse honesto:

- **Hacen explícito el manejo; no hacen el manejo por ti.** Una prueba puede decirte que un conflicto debe entrar en un proceso definido — no puede tener la conversación difícil por ti, ni aportar el valor, el cuidado y la buena voluntad que ese proceso necesita para funcionar de verdad.
- **No sanan a las personas.** La estructura puede impedir que el daño sea ignorado u ocultado, pero no resuelve el trauma, no reconstruye la confianza rota, ni sustituye la mediación, la terapia o el tiempo. RCOS deja espacio para ese trabajo; no es ese trabajo.
- **No fabrican relaciones.** Ningún protocolo crea calidez, química o pertenencia. Las pruebas pueden proteger esas cosas de la erosión estructural, pero una comunidad aún tiene que querer genuinamente vivir junta.
- **Aprobar no es el objetivo; la honestidad sí.** Una comunidad puede cumplir cada prueba sobre el papel y aun así ser un lugar difícil para vivir, o fallar varias y aun así estar prosperando. Las pruebas son un espejo del riesgo estructural, no un certificado de salud.
- **Describen patrones, no tus particularidades.** Cada prueba es un compuesto de muchos fallos reales. Reconocerte en una es el inicio de una conversación, no un diagnóstico — tu contexto decide qué hacer realmente.

Úsalas para lo único en lo que son genuinamente buenas: hacer explícito lo implícito, antes de que te cueste.

## Contribuir con una Prueba de Estrés

La biblioteca crece absorbiendo experiencia real. **Si tu comunidad ha vivido un fallo estructural que aún no está cubierto aquí, lo recibimos con gusto.** [Ponte en contacto](https://ecohubs.community/contact) con la situación — qué ocurrió, qué capas estuvieron involucradas, cómo se resolvió (o no) — y consideraremos añadirlo como una nueva prueba de estrés. Los fallos reales hacen a RCOS más fuerte.
