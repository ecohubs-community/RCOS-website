---
id: d7a1f3e8
title: Undefinierter Entscheidungstyp
summary: >-
  Wenn die Gruppe darüber streitet, was zu entscheiden ist, bevor sie sich einig
  ist, wie entschieden wird.
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
  - 'Layer 2: Governance'
  - Medium severity
symptoms:
  - >-
    Diskussionen kommen ins Stocken, weil sich niemand darauf geeinigt hat, ob
    es sich um einen Konsens, eine Abstimmung oder eine delegierte Entscheidung
    handelt.
  - >-
    Dieselbe Entscheidung wird wieder aufgemacht, weil nie klar war, dass sie
    tatsächlich getroffen wurde.
  - 'Wer die Frage zuerst formuliert, kontrolliert faktisch das Ergebnis.'
  - >-
    "Moment, entscheiden wir das jetzt, und wer entscheidet?" ist eine
    wiederkehrende Verwirrung.
  - >-
    Die Entscheidungsregeln ändern sich implizit, je nach Thema oder wer im Raum
    ist.
preventsWith:
  - rcos-templates/layer-2/decision-matrix
  - rcos-templates/layer-2/governance-protocol
cascade:
  - test: rcos-stress-tests/governance-power/dominant-speakers-decision-spaces
    relation: enables
    note: >-
      Ohne vereinbarten Mechanismus entscheiden Redezeit und Framing
      standardmäßig über die Ergebnisse.
  - test: rcos-stress-tests/governance-power/informal-clique-decision-making
    relation: enables
    note: >-
      Ein undefinierter Entscheidungstyp lässt Ergebnisse zu derjenigen Person
      abdriften, die die Frage zuerst formuliert hat.
related:
  - rcos-stress-tests/governance-power/dominant-speakers-decision-spaces
lang: de
sourceHash: c8cfa224
---

> **Schweregrad:** Mittel — selten dramatisch, aber macht jede Entscheidung anfechtbar und langsam.
> **Wo es beißt:** In jeder Phase; es ist ein stiller Hemmschuh für eine Gruppe, die sonst funktioniert.
> **Steckst du da schon mittendrin?** Spring zu [Wenn es bereits passiert](#wenn-es-bereits-passiert).

### Kommt dir das bekannt vor?

Eine Frage taucht auf, und die Gruppe stürzt sich direkt darauf — Meinungen, Argumente, eine lange Diskussion. Eine Stunde später ist unklar, ob überhaupt etwas entschieden wurde, wer die Befugnis dazu hatte oder ob ein leises "naja, dann machen wir das wohl so" als endgültig gilt. Einen Monat später taucht dasselbe Thema wieder auf, als hätte das erste Gespräch nie stattgefunden. Das Problem war nie der *Inhalt*. Es liegt daran, dass sich niemand vorab darauf geeinigt hat, um welche *Art* von Entscheidung es sich handelt und wie sie getroffen wird.

### Anzeichen, dass dir das passiert

- Diskussionen kommen ins Stocken, weil sich niemand darauf geeinigt hat, ob es sich um einen Konsens, eine Abstimmung oder eine delegierte Entscheidung handelt.
- Dieselbe Entscheidung wird wieder aufgemacht, weil nie klar war, dass sie tatsächlich getroffen wurde.
- Wer die Frage zuerst formuliert, kontrolliert faktisch das Ergebnis.
- "Moment, entscheiden wir das jetzt, und wer entscheidet?" ist eine wiederkehrende Verwirrung.
- Die Entscheidungsregeln ändern sich implizit, je nach Thema oder wer im Raum ist.

**Das ist _nicht_ dasselbe wie** absichtlich unterschiedliche Mechanismen für verschiedene Klassen von Entscheidungen zu verwenden — das ist gesund, *wenn es deklariert ist*. Das verräterische Zeichen ist, dass der Entscheidungs*typ* — wer entscheidet, nach welchem Mechanismus und ob es endgültig ist — im Moment der Entscheidung undefiniert ist und daher jedes Mal improvisiert wird.

### Warum es passiert

Gruppen springen direkt zum Inhalt ("was sollten wir wegen X tun?"), ohne zuerst den Typ zu klären ("ist das unsere Entscheidung, nach welcher Regel und ist sie endgültig?"). Diesen Schritt zu überspringen bedeutet, dass das lauteste Framing gewinnt, Entscheidungen sich für alle illegitim anfühlen, die dieses Framing nicht teilten, und alles wieder verhandelbar bleibt — weil nie etwas formal *eine Entscheidung* war.

<details data-kind="rationale">
<summary>Der formale Stresstest (für Auditor:innen)</summary>

**Fehlermodus** — Entscheidungen werden debattiert, ohne zuvor ihren Typ und Mechanismus zu vereinbaren.

**Beteiligte Schichten** — Schicht 2 (Governance)

**Relevante Invarianten**

* 2.1 Entscheidungstyp geht dem Entscheidungsinhalt voraus
* 2.2 Befugnis MUSS explizit sein

**Testbedingung** — Entscheidungen werden ohne deklarierten Typ getroffen, sodass Mechanismus und Befugnis jedes Mal improvisiert werden.

**Erwartetes RCOS-Verhalten** — Der Typ jeder Entscheidung (Mechanismus + Befugnis + Endgültigkeit) wird festgelegt, bevor ihr Inhalt debattiert wird.

**Bestehenskriterien** — Entscheidungen benennen ihren Typ vorab und werden nicht stillschweigend wieder aufgemacht.

**Durchfallkriterien** — Der Entscheidungstyp wird improvisiert, sodass das Framing das Ergebnis bestimmt.

</details>

### Wie reif ist deine Gemeinschaft in diesem Punkt?

Bestanden/Nicht-Bestanden ist für die Realität zu grob — die meisten Gemeinschaften sind irgendwo dazwischen. Finde deine Stufe und ziele auf die nächste.

| Stufe | Wie es aussieht |
|---|---|
| **L0 — Implizit** | Der Entscheidungstyp wird jedes Mal improvisiert; das Framing entscheidet das Ergebnis. |
| **L1 — Benannt** | Die Gruppe bemerkt die Verwirrung, hat aber Entscheidungstypen noch nicht Mechanismen zugeordnet. |
| **L2 — Dokumentiert** | Eine [Entscheidungsmatrix](/articles/rcos-templates/layer-2/decision-matrix) ordnet jeder Klasse von Entscheidung einen Typ, einen Mechanismus und Verantwortliche zu — geklärt vor dem Inhalt. |
| **L3 — Durchgesetzt & eingeübt** | Jede bedeutende Entscheidung benennt ihren Typ vorab; Entscheidungen sind endgültig und werden nicht stillschweigend wieder aufgemacht. |

Die meisten Gemeinschaften, die sich hier wiedererkennen, sitzen auf **L0 oder L1**. Das Ziel ist nicht Perfektion — es ist, eine Stufe weiterzukommen.

### Wie RCOS das verhindert

RCOS erzwingt Typ vor Inhalt:

- **[Entscheidungsmatrix](/articles/rcos-templates/layer-2/decision-matrix)** — ordne Klassen von Entscheidungen ihrem Mechanismus und ihrer Befugnis zu, damit der Typ vorab festgelegt ist.
- **[Governance-Protokoll](/articles/rcos-templates/layer-2/governance-protocol)** — mache "den Entscheidungstyp zuerst benennen" zu einer stehenden Regel der Arbeitsweise der Gruppe.

Siehe auch die Spezifikation: [Schicht 2 — Entscheidungstypen](/articles/rcos-core/v0-1/layer-2-governance-decision-logic#41-decision-types) und [Entscheidungsmatrix](/articles/rcos-core/v0-1/layer-2-governance-decision-logic#44-decision-matrix).

### Wenn es bereits passiert

Wenn Entscheidungen sich immer wieder auflösen und neu formieren, klärt zuerst den Typ:

1. **Bevor die nächste umstrittene Entscheidung ansteht, vereinbart ihren Typ** — wer entscheidet, nach welcher Regel und ob sie endgültig ist.
2. **Erstellt aus tatsächlichen jüngsten Entscheidungen eine schnelle Entscheidungsmatrix;** die mehrdeutigen treten schnell zutage.
3. **Hört auf, neu zu verhandeln** — haltet Entscheidungen mit ihrem Typ fest, damit "das haben wir schon entschieden" überprüfbar ist.

### Was dieser Fehler typischerweise auslöst

- **[Dominante Sprecher:innen in Entscheidungsräumen](/articles/rcos-stress-tests/governance-power/dominant-speakers-decision-spaces)** — ohne vereinbarten Mechanismus entscheiden Redezeit und Framing über die Ergebnisse.
- **[Informelle Cliquen-Entscheidungsfindung](/articles/rcos-stress-tests/governance-power/informal-clique-decision-making)** — ein undefinierter Typ lässt Entscheidungen zu denjenigen abdriften, die sie zuerst formuliert haben.

### Verwandte Stresstests

- **[Dominante Sprecher:innen in Entscheidungsräumen](/articles/rcos-stress-tests/governance-power/dominant-speakers-decision-spaces)** — derselbe fehlende Mechanismus, ausgedrückt darin, wer am meisten redet, statt wer zuerst formuliert.
