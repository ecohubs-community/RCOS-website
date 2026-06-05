---
id: 7b1c4e02
title: Ausgelagerte Arbeit umgeht den Beitrag
summary: Wenn Geld stillschweigend einen Ausweg aus dem Gemeinschaftsleben erkauft.
parentId: cbd2804b
order: 1
severity: medium
stage:
  - growth
  - mature
layers:
  - 3
  - 1
  - 4
invariants:
  - '1.3'
  - '3.3'
  - '4.1'
remediationReady: true
tags:
  - 'Layer 3: Economy'
  - Medium severity
symptoms:
  - >-
    Ein wohlhabenderes Mitglied bezahlt Außenstehende, um seinen Anteil an der
    gemeinschaftlichen Arbeit zu übernehmen.
  - >-
    Beitragsanforderungen existieren, werden aber stillschweigend mit Geld
    erfüllt.
  - >-
    Zwischen denen, die anpacken, und denen, die Schecks ausstellen, baut sich
    Groll auf.
  - 'Es gibt keine vereinbarte Regel, ob Geld die Teilnahme ersetzen kann.'
  - >-
    Aufwand und Vermögen werden austauschbar, ohne dass jemand entschieden hat,
    dass sie es sein sollten.
preventsWith:
  - rcos-templates/layer-3/internal-economy-protocol
  - rcos-templates/layer-1/membership-agreement
  - rcos-templates/layer-4/accountability-protocol
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: feeds
    note: >-
      Der Groll zwischen Teilnahme und Bezahlung ist genau die Art von Konflikt,
      dem ausgewichen wird, bis er sich zu Klassenlinien verhärtet.
related:
  - >-
    rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution
  - rcos-stress-tests/economy-resources/commons-privatization-through-land-sales
lang: de
sourceHash: eb16b79a
---

> **Schweregrad:** Mittel — eher zersetzend als katastrophal, aber er schichtet die Gemeinschaft still und leise auf.
> **Wo es wehtut:** Wachstums- und Reifephase, sobald das Vermögen der Mitglieder beginnt auseinanderzugehen.
> **Lebt ihr das schon?** Springe zu [Wenn es schon passiert](#wenn-es-schon-passiert).

### Kommt dir das bekannt vor?

Die Gemeinschaft erwartet, dass alle bei der gemeinsamen Arbeit mit anpacken — den Bautagen, der Ernte, den Reparaturen. Ein Mitglied, beschäftigter oder wohlhabender als die übrigen, fängt an, einen Handwerker zu bezahlen, um seinen Anteil zu übernehmen. Es ist effizient. Die Arbeit wird trotzdem gemacht. Aber die Leute, die mit eigenen Händen erscheinen, fangen an zu bemerken, dass Zugehörigkeit für manche Mitglieder etwas ist, das man einfach kaufen kann, und ein leiser Groll beginnt, jene, die teilnehmen, von jenen zu trennen, die bezahlen.

### Anzeichen, dass es euch passiert

- Ein wohlhabenderes Mitglied bezahlt Außenstehende, um seinen Anteil an der gemeinschaftlichen Arbeit zu übernehmen.
- Beitragsanforderungen existieren, werden aber stillschweigend mit Geld erfüllt.
- Zwischen denen, die anpacken, und denen, die Schecks ausstellen, baut sich Groll auf.
- Es gibt keine vereinbarte Regel, ob Geld die Teilnahme ersetzen kann.
- Aufwand und Vermögen werden austauschbar, ohne dass jemand entschieden hat, dass sie es sein sollten.

**Das ist _nicht_ dasselbe wie** eine Gemeinschaft, die ausdrücklich vereinbart hat, dass Geld Arbeit ersetzen kann (eine erklärte Äquivalenz). Das verräterische Zeichen ist *Umgehung ohne Vereinbarung* — Beitragserwartungen existieren, aber Vermögen setzt sie stillschweigend außer Kraft.

### Warum es passiert

Wenn ein Beitrag erwartet wird, sein Verhältnis zu Geld aber undefiniert bleibt, werden die Leute, die zahlen können, es tun — es ist rational und einfach. Bleibt das unadressiert, verwandelt es Vermögen in eine Befreiung vom Gemeinschaftsleben, schichtet die Mitglieder still in jene auf, die teilnehmen, und jene, die sich freikaufen, und zersetzt die Symmetrie von Rechten und Pflichten, auf der Mitgliedschaft eigentlich ruhen soll.

<details data-kind="rationale">
<summary>Der formale Stresstest (für Prüfer:innen)</summary>

**Fehlermodus** — Ein Mitglied vermeidet den Beitrag und stellt stattdessen externe Arbeitskräfte ein.

**Beteiligte Schichten** — Schicht 3 (Ökonomie), Schicht 1 (Mitgliedschaft), Schicht 4 (Rechenschaft)

**Relevante Invarianten**

* 1.3 Symmetrie von Rechten und Pflichten
* 3.3 Beitragsanerkennung ist explizit
* 4.1 Konflikte müssen behandelt werden

**Testbedingung** — Beitragserwartungen existieren, werden aber mit Geld umgangen.

**Erwartetes RCOS-Verhalten** — Festlegen, ob Auslagerung erlaubt ist; Äquivalenzregeln anwenden oder einen Rechenschaftsprozess auslösen.

**Bestehenskriterien** — Die Beitragslogik wird konsistent durchgesetzt.

**Versagenskriterien** — Vermögen ersetzt Teilnahme ohne Vereinbarung.

</details>

### Wie reif ist eure Gemeinschaft in diesem Punkt?

Bestanden/nicht bestanden ist für das echte Leben zu grob — die meisten Gemeinschaften stehen irgendwo dazwischen. Findet eure Stufe und peilt dann die nächste an.

| Stufe | Wie es aussieht |
|---|---|
| **L0 — Implizit** | Ob Geld Teilnahme ersetzen kann, ist undefiniert; Leute kaufen sich stillschweigend frei. |
| **L1 — Benannt** | Die Spannung wird anerkannt, aber es gibt weder eine Äquivalenzregel noch einen Rechenschaftsweg. |
| **L2 — Dokumentiert** | Das [Protokoll der internen Ökonomie](/articles/rcos-templates/layer-3/internal-economy-protocol) legt fest, ob und wie Geld Arbeit ersetzt; die [Mitgliedschaftsvereinbarung](/articles/rcos-templates/layer-1/membership-agreement) bindet Pflichten an Rechte. |
| **L3 — Durchgesetzt & geübt** | Die Beitragslogik wird konsistent angewendet; eine Umgehung löst die vereinbarte Äquivalenzregel oder einen Rechenschaftsprozess aus — und hat es bereits getan. |

Die meisten Gemeinschaften, die sich hier wiedererkennen, sitzen auf **L0 oder L1**. Das Ziel ist nicht Perfektion — es ist, eine Stufe weiterzukommen.

### Wie RCOS dem vorbeugt

RCOS zwingt die Gemeinschaft, das Verhältnis von Geld und Arbeit zu *entscheiden*, statt es per Default zu lassen:

- **[Protokoll der internen Ökonomie](/articles/rcos-templates/layer-3/internal-economy-protocol)** — entscheidet ausdrücklich, ob Geld Arbeit ersetzen kann und zu welcher Äquivalenz.
- **[Mitgliedschaftsvereinbarung](/articles/rcos-templates/layer-1/membership-agreement)** — bindet Beitragspflichten an Mitgliedschaftsrechte, damit Teilnahme nicht durch Vermögen optional wird.
- **[Rechenschaftsprotokoll](/articles/rcos-templates/layer-4/accountability-protocol)** — ein definierter Weg, wenn Erwartungen umgangen werden.

Siehe auch die Spezifikation: [Schicht 3 — Beitragsanerkennung](/articles/rcos-core/v0-1/layer-3-economic-resource-system#52-contribution-recognition) und [Schicht 1 — Rechte und Pflichten](/articles/rcos-core/v0-1/layer-1-membership-system#34-rights-and-obligations).

### Wenn es schon passiert

Entscheidet die Regel, bevor der Groll zu einer Klassenlinie wird:

1. **Benennt die Regelungslücke.** Entscheidet gemeinsam, ob Auslagerung überhaupt erlaubt ist — und zu welchen Bedingungen.
2. **Legt eine Äquivalenz fest (oder verbietet Ersatz)**, damit die Antwort konsistent ist und nicht Fall für Fall verhandelt wird.
3. **Sprecht den Groll direkt an** über den Rechenschafts- oder Konfliktweg, bevor er sich verhärtet.

### Was dieses Versagen typischerweise auslöst

- **[Normalisierung von Konfliktvermeidung](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — der Groll zwischen Teilnahme und Bezahlung ist genau die Art von Konflikt, der von einer Gruppe vermieden wird, bis er strukturell geworden ist.

### Verwandte Stresstests

- **[Selbstversorgung ohne kollektiven Beitrag](/articles/rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution)** — der Rückzugs-Verwandte: hier kaufen sich Leute aus dem Beitrag frei, dort steigen sie einfach aus.
- **[Privatisierung der Allmende durch Landverkäufe](/articles/rcos-stress-tests/economy-resources/commons-privatization-through-land-sales)** — dieselbe Entkopplung von Vermögen und gemeinsamer Pflicht, auf der Ebene des Landes.
