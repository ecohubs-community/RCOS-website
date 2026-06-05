---
id: a1d4e7c2
title: Ausschluss ohne rechtsstaatliches Verfahren
summary: >-
  Wenn ein Mitglied ohne Verfahren, ohne Berufung und ohne Protokoll
  hinausgedrängt werden kann.
parentId: 45625035
order: 1
severity: high
stage:
  - growth
  - mature
layers:
  - 1
  - 4
invariants:
  - '1.4'
  - '1.2'
  - '4.3'
remediationReady: true
tags:
  - 'Layer 1: Membership'
  - High severity
symptoms:
  - >-
    Ein Mitglied wurde ohne definiertes Verfahren entfernt (oder zum Gehen
    gedrängt).
  - >-
    Die Entfernung geschah durch informellen Konsens, eine plötzliche Abstimmung
    oder sozialen Druck — nicht durch ein schriftliches Verfahren.
  - >-
    Es gab keine Gelegenheit zur Stellungnahme, keine genannten Gründe und keine
    Berufung.
  - >-
    Die Leute sind sich unsicher, wer eigentlich die Befugnis hat, jemanden
    auszuschließen.
  - >-
    Nachdem es passiert war, fragten sich andere insgeheim, ob sie als Nächste
    dran sein könnten.
preventsWith:
  - rcos-templates/layer-1/exit-protocol
  - rcos-templates/layer-4/accountability-protocol
  - rcos-templates/layer-1/membership-state-registry
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: enables
    note: >-
      Wenn eine Entfernung kein rechtsstaatliches Verfahren hat, lernen
      Mitglieder, dass Widerspruch gefährlich ist, und sprechen Dinge nicht mehr
      an.
related:
  - rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test
  - rcos-stress-tests/conflict-accountability/punishment-before-repair
lang: de
sourceHash: 23ab475a
---

> **Schweregrad:** Hoch — eine der häufigsten Arten, wie Gemeinschaften zerbrechen, und am schwersten im Nachhinein zu reparieren.
> **Wo es wehtut:** Wachstums- und Reifephasen, wenn das erste wirklich schwierige Mitglied auftaucht.
> **Lebt ihr das schon?** Spring zu [Wenn es bereits passiert](#wenn-es-bereits-passiert).

### Kommt dir das bekannt vor?

Jemand wurde zu einem echten Problem — störend, schädlich, untragbar — und irgendwann war er weg. Nicht durch ein Verfahren, denn es gab keines: Es geschah durch ein angespanntes Treffen, eine plötzliche Handabstimmung oder ein langsames soziales Einfrieren, bis die Person von selbst ging. Vielleicht war es sogar das richtige Ergebnis. Aber es gab keine ausgesprochene Anschuldigung, keine Gelegenheit zur Stellungnahme und keine Berufung — und still und leise hat jeder, der zugesehen hat, die Erkenntnis abgespeichert, dass die Gemeinschaft eine Person verschwinden lassen kann und dass es keine Regeln dafür gibt, wann.

### Anzeichen, dass dir das passiert

- Ein Mitglied wurde ohne definiertes Verfahren entfernt (oder zum Gehen gedrängt).
- Die Entfernung geschah durch informellen Konsens, eine plötzliche Abstimmung oder sozialen Druck.
- Es gab keine Gelegenheit zur Stellungnahme, keine genannten Gründe und keine Berufung.
- Die Leute sind sich unsicher, wer eigentlich die Befugnis hat, jemanden auszuschließen.
- Nachdem es passiert war, fragten sich andere insgeheim, ob sie als Nächste dran sein könnten.

**Das ist _nicht_ dasselbe wie** die Anwendung eines dokumentierten Zwangsausschluss-Verfahrens — mit Gründen, einer Anhörung und einer Berufung — auf eine wirklich untragbare Situation. Das Erkennungsmerkmal ist *Entfernung ohne vordefiniertes rechtsstaatliches Verfahren*: Das Ergebnis kommt zuerst, die Rechtfertigung danach, falls überhaupt.

### Warum es passiert

Gemeinschaften vermeiden es, Ausschlussverfahren zu entwickeln, weil sie hoffen, sie nie zu brauchen — dafür zu planen, fühlt sich morbide an, sogar illoyal. Wenn ein Mitglied dann endlich untragbar wird, improvisiert die Gruppe unter Druck: Druck, eine hastige Abstimmung, ein stilles Ausfrieren. Ohne rechtsstaatliches Verfahren wird Ausschluss willkürlich und angsteinflößend, und die Grenze zwischen „wir mussten" und „wir wollten" verschwindet — für die entfernte Person und für alle, die zusehen.

<details data-kind="rationale">
<summary>Der formale Stresstest (für Auditoren)</summary>

**Fehlermodus** — Ein Mitglied wird ohne vordefiniertes, dokumentiertes Verfahren entfernt.

**Beteiligte Schichten** — Schicht 1 (Mitgliedschaft), Schicht 4 (Konflikt)

**Relevante Invarianten**

* 1.4 Rechtsstaatliches Verfahren für Zwangsausschluss
* 1.2 Ein- und Austritt sind immer möglich
* 4.3 Reparatur geht vor Bestrafung

**Testbedingung** — Ein Mitglied wird ohne Gründe, Anhörung oder Berufung ausgeschlossen oder hinausgedrängt.

**Erwartetes RCOS-Verhalten** — Zwangsausschluss folgt einem vordefinierten Verfahren: genannte Gründe, Gelegenheit zur Stellungnahme und ein Berufungsweg; Reparatur wird vor Entfernung versucht.

**Bestanden-Kriterien** — Jede Entfernung ist auf dokumentierte Gründe und ein rechtsstaatliches Verfahren zurückführbar.

**Nicht-bestanden-Kriterien** — Entfernung ist willkürlich, informell und nicht berufungsfähig.

</details>

### Wie reif ist eure Gemeinschaft hier?

Bestanden/nicht bestanden ist für das echte Leben zu grob — die meisten Gemeinschaften sind irgendwo dazwischen. Findet eure Stufe und zielt dann auf die nächste.

| Stufe | Wie es aussieht |
|---|---|
| **L0 — Implizit** | Entfernung ist möglich, aber undefiniert; sie geschieht durch Druck oder eine plötzliche Abstimmung. |
| **L1 — Benannt** | Die Gruppe weiß, dass sie kein Ausschlussverfahren hat, hat aber keines aufgebaut. |
| **L2 — Dokumentiert** | Ein Zwangsausschluss-Verfahren existiert — Gründe, Benachrichtigung, eine Anhörung und Berufung — in einem [Exit-Protokoll](/articles/rcos-templates/layer-1/exit-protocol). |
| **L3 — Durchgesetzt & geübt** | Jede Entfernung folgt einem rechtsstaatlichen Verfahren; es wurde mindestens einmal fair angewandt, einschließlich einer echten Gelegenheit zur Stellungnahme. |

Die meisten Gemeinschaften, die sich hier wiedererkennen, stehen bei **L0 oder L1**. Das Ziel ist nicht Perfektion — es ist, eine Stufe nach oben zu kommen.

### Wie RCOS das verhindert

RCOS verlangt, dass die schwerste Mitgliedschaftsentscheidung die am stärksten verfahrensgebundene ist:

- **[Exit-Protokoll](/articles/rcos-templates/layer-1/exit-protocol)** — definiert Gründe, Benachrichtigung, eine Anhörung und Berufung für Zwangsausschluss, *bevor* ihr sie braucht.
- **[Accountability-Protokoll](/articles/rcos-templates/layer-4/accountability-protocol)** — ein Reparatur-zuerst-Weg, damit Entfernung der letzte Ausweg ist, nicht der erste Reflex.
- **[Mitgliedschaftszustands-Register](/articles/rcos-templates/layer-1/membership-state-registry)** — macht aus Suspendierung oder Entfernung eine explizite, protokollierte Zustandsänderung, nicht eine Stimmung.

Siehe auch die Spezifikation: [Schicht 1 — Austritt und Trennung](/articles/rcos-core/v0-1/layer-1-membership-system#36-exit-and-separation) und [Schicht 4 — Sanktionen, Reparatur und Trennung](/articles/rcos-core/v0-1/layer-4-conflict-repair-accountability#64-sanctions-repair-and-separation).

### Wenn es bereits passiert

Eine Entfernung ist gerade passiert oder läuft. Verlangsamt sie und stellt die Legitimität wieder her:

1. **Pausiert eine laufende Entfernung.** Ein unumkehrbarer Austritt ohne Verfahren ist die Gefahr.
2. **Nennt die Gründe schriftlich** und gebt der Person eine echte Gelegenheit zur Stellungnahme.
3. **Definiert das Verfahren jetzt und wendet es an** — selbst eine nachträglich angebotene Berufung stellt für alle Zuschauenden Legitimität wieder her.
4. **Achtet auf die Kaskade** — willkürlicher Ausschluss bringt der ganzen Gemeinschaft bei, sich selbst zu zensieren.

### Was diese Schwachstelle typischerweise auslöst

- **[Normalisierung von Konfliktvermeidung](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — wenn das Wort zu erheben dazu führen kann, dass man entfernt wird, hören die Leute auf, das Wort zu erheben.

### Verwandte Stresstests

- **[Bestrafung vor Reparatur](/articles/rcos-stress-tests/conflict-accountability/punishment-before-repair)** — der strafende Reflex, der Accountability überhaupt erst in Ausschluss verwandelt.
- **[Geltungsbereichstest für Verstöße gegen kulturelle Normen](/articles/rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test)** — ein Bruch einer unausgesprochenen Norm ist oft das, was die Eile zum Ausschluss auslöst.
