---
id: 6acbe9a7
title: RCOS-Stresstests
parentId: null
order: 7
lang: de
sourceHash: e05e86e3
---

## Was die Stresstests sind

RCOS-Stresstests sind **reale Versagensszenarien** — Situationen, die Gemeinschaften tatsächlich erlebt haben — formalisiert als Testfälle, denen die RCOS-Spezifikation standhalten muss. Jeder Test beschreibt einen konkreten Versagensmodus, die Schichten, die er berührt, die Invarianten, die er beansprucht, und die strukturelle Antwort, die RCOS erwartet.

Ein Stresstest beantwortet eine einzige Frage:

> *Wenn dies einer Gemeinschaft passiert, die RCOS nutzt, würde das System es absorbieren — oder müsste das System umgangen werden?*

Wenn RCOS das Szenario ohne informelle Notlösungen überstehen kann, **besteht** der Test. Wenn nicht, **scheitert** er — und ein gescheiterter Test zeigt auf eine echte Lücke im Rahmenwerk, die künftige Versionen schließen müssen. Stresstests sind die Art, wie RCOS ehrlich bleibt: Die Spezifikation ist nur so stark wie die Versagensfälle, gegen die sie getestet wurde.

## Wie sie organisiert sind

Stresstests sind nach der Art des Versagens gruppiert, das sie untersuchen:

- **[Governance & Macht](/articles/rcos-stress-tests/governance-power?id=7f25f268)** — informelle Autorität, Gründer-Veto, dominante Sprecher:innen, verdeckte Cliquen.
- **[Konflikt & Verantwortlichkeit](/articles/rcos-stress-tests/conflict-accountability)** — Vermeidung, Vergeltung, unterdrückter Widerspruch.
- **[Kultur & Einfluss](/articles/rcos-stress-tests/culture-influence)** — charismatische Vereinnahmung, ideologische Drift, Gruppenzwang.
- **[Wirtschaft & Ressourcen](/articles/rcos-stress-tests/economy-resources)** — Privatisierung der Gemeingüter, unsichtbare Arbeit, Vermögensasymmetrie.
- **[Mitgliedschaft & Grenzen](/articles/rcos-stress-tests/membership-boundaries)** — unklare Austrittsrechte, verdeckte Auswahlverfahren, Verhärtung der Innengruppe.
- **[Betrieb & Koordination](/articles/rcos-stress-tests/operations-coordination)** — stilles Ausbrennen, Rollenverwirrung, fehlende Übergaben.
- **[Wandel & Notfälle](/articles/rcos-stress-tests/change-emergencies)** — Notfallregeln, die klammheimlich dauerhaft werden, ungeregelte Kurswechsel.

Jeder Test ist so geschrieben, dass er **wiedererkannt, nicht nur gelesen** wird. Er beginnt mit den gelebten Anzeichen des Versagens, erklärt, warum es geschieht, ordnet dich auf einer Reifeskala von *implizit* bis *eingeübt* ein und verweist auf die genauen RCOS-Strukturen, die es verhindern — mit getrennten Wegen für die **Vorbeugung** und für die **Stabilisierung, wenn es bereits geschieht**. Die ursprüngliche Bestanden/Gescheitert-Spezifikation bleibt in jedem Test erhalten, in einem Panel für Prüfer:innen. Die [Abdeckungsmatrix](#coverage-heading) weiter unten zeigt, welche RCOS-Invariante jeder Test beansprucht.

## Wie du sie nutzt

- Als **Designprüfung** — lies sie, bevor du eine Gemeinschaft gründest, um vorauszusehen, was schiefgehen kann.
- Als **Audit-Werkzeug** — gehe sie mit einer bestehenden Gruppe durch und bemerke, für welche Szenarien ihr keine Antwort habt.
- Als **Konflikthilfe** — wenn etwas zerbricht, finde den passenden Test und folge dem erwarteten Verhalten, statt zu improvisieren.
- Als **gemeinsames Vokabular**, um Versagensmuster zu benennen, ohne Einzelne zu beschuldigen.

## Werkzeuge

Zwei Begleitwerkzeuge machen die Bibliothek leichter handhabbar:

- **[Selbsteinschätzung](/articles/rcos-stress-tests/self-assessment)** — hake die Warnzeichen ab, die dir vertraut vorkommen, und sieh, welchen Stresstests deine Gemeinschaft am nächsten ist, sortiert nach Dringlichkeit, jeweils verlinkt mit den Strukturen, die sie verhindern. Alles bleibt in deinem Browser.
- **[Moderationsleitfaden](/articles/rcos-stress-tests/facilitation-worksheet)** — wie du einen Stresstest als Gruppensitzung durchführst: eine Schritt-für-Schritt-Vorlage, die jeden Test in ein 60–90-minütiges Gespräch verwandelt, das mit einem konkreten nächsten Schritt endet.

## Was diese Tests nicht leisten können

RCOS ist ein **strukturelles** Rahmenwerk, und diese Tests erben seine Grenzen. Sie offen auszusprechen, gehört zur Ehrlichkeit:

- **Sie machen den Umgang explizit; sie übernehmen ihn nicht.** Ein Test kann dir sagen, dass ein Konflikt in einen definierten Prozess eintreten muss — er kann das schwere Gespräch nicht für dich führen oder den Mut, die Sorgfalt und den guten Willen liefern, die dieser Prozess braucht, um wirklich zu funktionieren.
- **Sie heilen keine Menschen.** Struktur kann verhindern, dass Schaden ignoriert oder verdeckt wird, aber sie löst kein Trauma, baut kein zerbrochenes Vertrauen wieder auf und ersetzt keine Mediation, Therapie oder Zeit. RCOS schafft Raum für diese Arbeit; es ist diese Arbeit nicht.
- **Sie erzeugen keine Beziehungen.** Kein Protokoll schafft Wärme, Chemie oder Zugehörigkeit. Die Tests können diese Dinge vor struktureller Erosion schützen, aber eine Gemeinschaft muss immer noch wirklich zusammenleben wollen.
- **Bestehen ist nicht das Ziel; Ehrlichkeit ist es.** Eine Gemeinschaft kann auf dem Papier jeden Test erfüllen und trotzdem ein schwieriger Ort zum Leben sein, oder mehrere nicht bestehen und trotzdem florieren. Die Tests sind ein Spiegel für strukturelles Risiko, kein Gesundheitszeugnis.
- **Sie beschreiben Muster, nicht eure Besonderheiten.** Jeder Test ist eine Zusammenstellung aus vielen realen Versagensfällen. Sich in einem wiederzuerkennen, ist der Anfang eines Gesprächs, keine Diagnose — euer Kontext entscheidet, was tatsächlich zu tun ist.

Nutze sie für das eine, worin sie wirklich gut sind: das Implizite explizit machen, bevor es euch teuer zu stehen kommt.

## Einen Stresstest beitragen

Die Bibliothek wächst, indem sie reale Erfahrung aufnimmt. **Wenn deine Gemeinschaft ein strukturelles Versagen durchlebt hat, das hier noch nicht abgedeckt ist, freuen wir uns darüber.** [Nimm Kontakt auf](https://ecohubs.community/contact) mit der Situation — was passiert ist, welche Schichten beteiligt waren, wie es (nicht) gelöst wurde — und wir werden erwägen, sie als neuen Stresstest aufzunehmen. Reale Versagensfälle machen RCOS stärker.
