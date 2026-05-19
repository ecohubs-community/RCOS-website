---
id: 6acbe9a7
title: RCOS-Stresstests
parentId: null
order: 7
lang: de
sourceHash: b8c7f795
---

## Was die Stresstests sind

RCOS-Stresstests sind **reale Ausfallszenarien** — Situationen, die Gemeinschaften tatsächlich erlebt haben — formalisiert als Testfälle, die die RCOS-Spezifikation aushalten muss. Jeder Test beschreibt einen konkreten Ausfallmodus, die Schichten, die er berührt, die Invarianten, die er belastet, und die strukturelle Antwort, die RCOS erwartet.

Ein Stresstest beantwortet eine einzige Frage:

> *Wenn dies einer Gemeinschaft passieren würde, die RCOS nutzt — würde das System es auffangen, oder müsste das System umgangen werden?*

Wenn RCOS das Szenario ohne informelle Notlösungen überstehen kann, **besteht** der Test. Wenn nicht, **scheitert** der Test — und ein gescheiterter Test weist auf eine echte Lücke im Rahmenwerk hin, die zukünftige Versionen schließen müssen. Stresstests sind die Art, wie RCOS ehrlich bleibt: Die Spezifikation ist nur so stark wie die Ausfälle, gegen die sie getestet wurde.

## Wie sie organisiert sind

Stresstests sind nach der Art des Ausfalls gruppiert, den sie prüfen:

- **[Governance & Macht](/articles/rcos-stress-tests/governance-power?id=7f25f268)** — informelle Autorität, Gründer-Veto, dominante Redner, versteckte Cliquen.
- **[Konflikt & Verantwortlichkeit](/articles/rcos-stress-tests/conflict-accountability)** — Vermeidung, Vergeltung, unterdrückte Kritik.
- **[Kultur & Einfluss](/articles/rcos-stress-tests/culture-influence)** — charismatische Vereinnahmung, ideologische Verschiebung, Gruppendruck.
- **[Wirtschaft & Ressourcen](/articles/rcos-stress-tests/economy-resources)** — Privatisierung von Gemeingütern, unsichtbare Arbeit, Vermögensasymmetrie.
- **[Mitgliedschaft & Grenzen](/articles/rcos-stress-tests/membership-boundaries)** — unklare Austrittsrechte, verdeckte Prüfung, Verkrustung der Kerngruppe.
- **[Betrieb & Koordination](/articles/rcos-stress-tests/operations-coordination)** — stilles Ausbrennen, Rollenverwirrung, fehlende Übergaben.
- **[Wandel & Notfälle](/articles/rcos-stress-tests/change-emergencies)** — Notfallregeln, die schleichend dauerhaft werden, unkontrollierte Kursänderungen.

Jeder einzelne Test folgt einem einheitlichen Format: **Ausfallmodus**, **Beteiligte Schichten**, **Relevante Invarianten**, **Testbedingung**, **Erwartetes RCOS-Verhalten** und **Bestanden / Gescheitert-Kriterien**.

## Wie du sie nutzt

- Als **Designprüfung** — lies sie, bevor du eine Gemeinschaft gründest, um vorherzusehen, was schiefgehen kann.
- Als **Audit-Werkzeug** — geh sie mit einer bestehenden Gruppe durch und bemerke, für welche Szenarien ihr keine Antwort habt.
- Als **Konflikthilfe** — wenn etwas zerbricht, finde den passenden Test und folge dem erwarteten Verhalten, anstatt zu improvisieren.
- Als **gemeinsames Vokabular**, um Ausfallmuster zu benennen, ohne einzelne Personen zu beschuldigen.

## Einen Stresstest beitragen

Die Bibliothek wächst, indem sie reale Erfahrung aufnimmt. **Wenn deine Gemeinschaft einen strukturellen Ausfall erlebt hat, der hier noch nicht abgedeckt ist, freuen wir uns darüber.** [Nimm Kontakt auf](https://ecohubs.community/contact) und schildere die Situation — was passiert ist, welche Schichten betroffen waren, wie es gelöst wurde (oder nicht) — und wir prüfen, ob wir ihn als neuen Stresstest aufnehmen. Reale Ausfälle machen RCOS stärker.
