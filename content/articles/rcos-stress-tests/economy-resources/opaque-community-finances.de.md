---
id: c2e5b9d4
title: Undurchsichtige Gemeinschaftsfinanzen
summary: 'Wenn nur ein paar Leute wirklich wissen, wohin das Geld fließt.'
parentId: cbd2804b
order: 2
severity: high
stage:
  - growth
  - mature
layers:
  - 3
invariants:
  - '3.1'
  - '3.4'
remediationReady: true
tags:
  - 'Layer 3: Economy'
  - High severity
symptoms:
  - >-
    Nur ein oder zwei Personen kennen den tatsächlichen Stand der
    Gemeinschaftsfinanzen.
  - 'Es gibt keinen regelmäßigen, lesbaren Finanzbericht, den alle sehen können.'
  - '"Keine Sorge, das ist erledigt" ist die Antwort auf Geldfragen.'
  - >-
    Mitglieder können nicht erkennen, wofür sie gemeinsam bezahlt haben oder
    welche Rücklagen existieren.
  - Ausgabenentscheidungen passieren ohne sichtbare Budgets oder Grenzen.
preventsWith:
  - rcos-templates/layer-3/treasury-ruleset
  - rcos-templates/layer-3/internal-economy-protocol
cascade:
  - test: >-
      rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
    relation: enables
    note: 'Wer das Finanzbild hält, hält einen Hebel, den ihm niemand gewährt hat.'
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: feeds
    note: >-
      Misstrauen rund ums Geld schwärt gerade deshalb, weil es sich unangenehm
      anfühlt, es anzusprechen.
related:
  - rcos-stress-tests/economy-resources/commons-privatization-through-land-sales
lang: de
sourceHash: de61fda2
---

> **Schweregrad:** Hoch — Geld-Unklarheit zerstört Vertrauen schneller als offener Konflikt.
> **Wo es weh tut:** In der Wachstums- und Reifephase, sobald es eine Kasse gibt, die man nicht verstehen könnte.
> **Schon mittendrin?** Spring zu [Wenn es bereits passiert](#wenn-es-bereits-passiert).

### Kommt dir das bekannt vor?

Es fließt Geld durch die Gemeinschaft — Beiträge, ein gemeinsames Konto, Förderungen, ein Bau-Fonds — und ein oder zwei Leute verwalten es. Sie genießen Vertrauen und geben wahrscheinlich ehrlich ihr Bestes. Aber niemand sonst kann das Bild wirklich sehen: was reinkam, was rausging, was als Rücklage gehalten wird, was diese eine große Ausgabe letztes Jahr war. Wenn du fragst, lautet die Antwort beruhigend "ist alles erledigt". Und langsam wird die Lücke zwischen dem, was Mitglieder annehmen, und dem, was tatsächlich stimmt, zu einer leisen, tragenden Quelle von Unbehagen.

### Anzeichen, dass es dich gerade trifft

- Nur ein oder zwei Personen kennen den tatsächlichen Stand der Gemeinschaftsfinanzen.
- Es gibt keinen regelmäßigen, lesbaren Finanzbericht, den alle sehen können.
- "Keine Sorge, das ist erledigt" ist die Antwort auf Geldfragen.
- Mitglieder können nicht erkennen, wofür sie gemeinsam bezahlt haben oder welche Rücklagen existieren.
- Ausgabenentscheidungen passieren ohne sichtbare Budgets oder Grenzen.

**Das ist _nicht_ dasselbe wie** bestimmte sensible Posten durch eine ausdrückliche, vereinbarte Ausnahme privat zu halten. Das Verräterische ist: Finanzflüsse sind *standardmäßig* undurchsichtig — Sichtbarkeit hängt davon ab, im richtigen Kreis zu sein, nicht von einer Regel.

### Warum es passiert

Geld transparent zu machen ist mühsam und lässt sich leicht "denen überlassen, die gut mit Zahlen sind". Aber Undurchsichtigkeit konzentriert leise Macht: wer das Finanzbild hält, hält Hebel, und der Abstand zwischen dem, was Mitglieder annehmen, und dem, was real ist, wird zu einer langsam wirkenden Vertrauensbombe. Wie die Spezifikation es ausdrückt: Geld plus Mehrdeutigkeit zerstört Vertrauen schneller als Konflikt.

<details data-kind="rationale">
<summary>Der formale Stresstest (für Prüfer:innen)</summary>

**Fehlermodus** — Gemeinsame Finanzflüsse sind für die meisten Mitglieder standardmäßig unsichtbar.

**Beteiligte Schichten** — Schicht 3 (Ökonomie)

**Relevante Invarianten**

* 3.1 Wirtschaftliche Transparenz als Standard
* 3.4 Keine unbegrenzte Akkumulation interner Macht

**Testbedingung** — Kassenstand, Einnahmen und Ausgaben sind nur wenigen bekannt, ohne regelmäßige Berichterstattung.

**Erwartetes RCOS-Verhalten** — Finanzflüsse sind für Mitglieder standardmäßig transparent, mit begrenzten ausdrücklichen Ausnahmen; Ausgabenbefugnisse und -grenzen sind sichtbar.

**Bestehenskriterium** — Mitglieder können gemeinsame Ressourcen, Flüsse und Verpflichtungen einsehen.

**Versagenskriterium** — Finanzielle Sichtbarkeit hängt von informellem Zugang ab.

</details>

### Wie reif ist eure Gemeinschaft in diesem Punkt?

Bestanden/Nicht bestanden ist zu grob für das echte Leben — die meisten Gemeinschaften sind irgendwo dazwischen. Findet eure Stufe und steuert dann die nächste an.

| Stufe | Wie es aussieht |
|---|---|
| **L0 — Implizit** | Die Finanzen liegen bei ein oder zwei Personen; keine gemeinsame Sichtbarkeit. |
| **L1 — Benannt** | Die Gruppe weiß, dass die Finanzen undurchsichtig sind, hat aber keine Transparenzregeln aufgestellt. |
| **L2 — Dokumentiert** | Ein [Treasury Ruleset](/articles/rcos-templates/layer-3/treasury-ruleset) definiert Transparenzanforderungen, Ausgabenbefugnis und Berichtsrhythmus. |
| **L3 — Durchgesetzt & geprobt** | Finanzflüsse sind standardmäßig sichtbar; regelmäßige Berichte werden tatsächlich gelesen; Ausnahmen sind ausdrücklich und selten. |

Die meisten Gemeinschaften, die sich hier wiedererkennen, sitzen auf **L0 oder L1**. Das Ziel ist nicht Perfektion — es geht darum, eine Stufe nach oben zu kommen.

### Wie RCOS das verhindert

RCOS macht Transparenz zum finanziellen Standard, nicht zur Gefälligkeit:

- **[Treasury Ruleset](/articles/rcos-templates/layer-3/treasury-ruleset)** — Transparenzanforderungen, Ausgabenbefugnis nach Betragshöhe sowie Rücklagen- und Berichtsregeln.
- **[Internal Economy Protocol](/articles/rcos-templates/layer-3/internal-economy-protocol)** — Flüsse und Verpflichtungen als Standardzustand sichtbar machen.

Siehe auch die Spezifikation: [Schicht 3 — Kassenführung](/articles/rcos-core/v0-1/layer-3-economic-resource-system#53-treasury-management) und [Commons vs. private Ressourcen](/articles/rcos-core/v0-1/layer-3-economic-resource-system#51-commons-vs-private-resources).

### Wenn es bereits passiert

Wenn die Finanzen im Kopf einer Person leben, bring sie an die Oberfläche:

1. **Veröffentlicht eine aktuelle Momentaufnahme** — Kontostände, Einnahmen, Ausgaben, Rücklagen. Selbst eine grobe beendet die Asymmetrie.
2. **Legt einen Berichtsrhythmus fest**, damit Sichtbarkeit Routine wird und nicht etwas, das Mitglieder anfordern müssen.
3. **Definiert Ausgabenbefugnis und Grenzen**, damit Geldentscheidungen lesbar werden.
4. **Achtet auf die Kaskade** — wer das Finanzbild hält, akkumuliert still Macht.

### Was dieses Versagen typischerweise auslöst

- **[Unsichtbare Macht durch Zuständigkeiten](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — die Person, die "das Geld macht", wird unentbehrlich und mächtig.
- **[Normalisierung von Konfliktvermeidung](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — Geld-Misstrauen schwärt, weil es unangenehm ist, es anzusprechen.

### Verwandte Stresstests

- **[Commons-Privatisierung durch Landverkäufe](/articles/rcos-stress-tests/economy-resources/commons-privatization-through-land-sales)** — Undurchsichtigkeit ist das, was die größten Vermögensentscheidungen ohne Prüfung geschehen lässt.
