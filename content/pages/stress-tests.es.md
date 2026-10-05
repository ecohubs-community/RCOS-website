---
id: 6acbe9a7
title: Pruebas de Estrés de RCOS
parentId: null
order: 7
lang: es
sourceHash: fed16d4b
---

## Qué son las Pruebas de Estrés

Las Pruebas de Estrés de RCOS son **escenarios de fallo del mundo real** — situaciones que las comunidades han vivido realmente — formalizadas como casos de prueba que la especificación RCOS debe soportar. Cada prueba describe un modo concreto de fallo, las capas que toca, los invariantes que pone bajo presión y la respuesta estructural que RCOS espera.

Una prueba de estrés responde a una sola pregunta:

> *Si esto le sucediera a una comunidad usando RCOS, ¿absorbería el sistema la situación — o habría que eludir el sistema?*

Si RCOS puede sobrevivir al escenario sin arreglos informales, la prueba **se aprueba**. Si no puede, la prueba **falla** — y una prueba fallida señala una brecha real en el marco que las versiones futuras deben cerrar. Las pruebas de estrés son la forma en que RCOS se mantiene honesto: la especificación es solo tan sólida como los fallos contra los que ha sido probada.

## Cómo usarlas

- Como **verificación de diseño** — léelas antes de fundar una comunidad para anticipar lo que puede salir mal.
- Como **herramienta de auditoría** — recórrelas con un grupo existente y observa qué escenarios no tienen respuesta.
- Como **ayuda en el conflicto** — cuando algo se rompe, encuentra la prueba relevante y sigue el comportamiento esperado en lugar de improvisar.
- Como **vocabulario compartido** para nombrar patrones de fallo sin culpar a individuos.

## Herramientas

Dos herramientas complementarias hacen que la biblioteca sea más fácil de aplicar:

- **[Autoevaluación](/toolkit/self-assessment)** — marca las señales de advertencia que te resulten familiares y ve a qué pruebas de estrés se acerca más tu comunidad, clasificadas por qué tan apremiantes son, cada una enlazada a las estructuras que la previenen. Todo permanece en tu navegador.
- **[Guía de Facilitación](/toolkit/facilitation-worksheet)** — cómo ejecutar una prueba de estrés como sesión grupal: una hoja de trabajo paso a paso que convierte cualquier prueba en una conversación de 60–90 minutos que termina en un próximo paso concreto.

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
