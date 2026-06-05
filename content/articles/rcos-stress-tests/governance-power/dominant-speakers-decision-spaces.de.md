---
id: 6acfe5f7
title: Dominante Sprecher in Entscheidungsräumen
summary: 'Wenn die lauteste Stimme entscheidet, nicht der vereinbarte Prozess.'
parentId: 7f25f268
order: 0
severity: high
stage:
  - forming
  - growth
  - mature
layers:
  - 2
  - 5
  - 4
invariants:
  - '2.2'
  - '5.1'
  - '4.1'
remediationReady: true
tags:
  - 'Layer 2: Governance'
  - High severity
symptoms:
  - Dieselben ein oder zwei Stimmen prägen fast jede Entscheidung.
  - >-
    Stillere Mitglieder bringen sich in Treffen nicht mehr ein — oder kommen gar
    nicht mehr.
  - >-
    Ergebnisse folgen dem, wer am längsten geredet hat, nicht dem, was
    tatsächlich vereinbart wurde.
  - >-
    "So sind sie halt" ist die stehende Erklärung für eine wiederkehrende
    Treffen-Dynamik.
  - >-
    Es gibt keine Moderation, oder die Moderation hat keine Befugnis
    einzugreifen.
preventsWith:
  - rcos-templates/layer-5/meeting-templates
  - rcos-templates/layer-5/role-registry
  - rcos-templates/layer-2/decision-matrix
cascade:
  - test: rcos-stress-tests/governance-power/informal-clique-decision-making
    relation: enables
    note: >-
      Ungebremste verbale Dominanz verhärtet sich zu einer faktischen In-Group,
      die Dinge regelt, bevor der Raum es tut.
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: feeds
    note: >-
      Mitglieder, über die wiederholt hinweggeredet wird, sprechen Dinge
      irgendwann gar nicht mehr an.
related:
  - rcos-stress-tests/governance-power/founder-informal-veto
lang: de
sourceHash: 4ab59c07
---

> **Schweregrad:** Hoch — entrechtet leise den Großteil der Gemeinschaft, während es nach ganz normalen Treffen aussieht.
> **Wo es weh tut:** In jeder Phase; es schleicht sich früh ein und verhärtet sich.
> **Schon mittendrin?** Spring zu [Wenn es bereits passiert](#wenn-es-bereits-passiert).

### Kommt dir das bekannt vor?

Das Treffen ist für alle offen, und auf dem Papier hat jede:r dasselbe Mitspracherecht. In der Praxis reden dieselben zwei Personen zuerst, am meisten und zuletzt — und irgendwie landet die Entscheidung immer dort, wo sie sie haben wollten. Die stilleren Mitglieder nicken mit, sparen sich ihre eigentliche Meinung für den Heimweg auf und kommen nach und nach nicht mehr. Niemand wird absichtlich zum Schweigen gebracht. Die Struktur belohnt einfach diejenigen, denen es am leichtesten fällt, den Raum zu halten.

### Anzeichen, dass dir das passiert

- Dieselben ein oder zwei Stimmen prägen fast jede Entscheidung.
- Stillere Mitglieder bringen sich in Treffen nicht mehr ein — oder kommen gar nicht mehr.
- Ergebnisse folgen dem, wer am längsten geredet hat, nicht dem, was tatsächlich vereinbart wurde.
- "So sind sie halt" ist die stehende Erklärung für eine wiederkehrende Dynamik.
- Es gibt keine Moderation, oder die Moderation hat keine Befugnis einzugreifen.

**Das ist _nicht_ dasselbe wie** wenn eine Person einfach besser vorbereitet oder zu einem Thema kompetenter ist. Das Erkennungszeichen ist, dass *Redezeit die Ergebnisse bestimmt, unabhängig vom vereinbarten Entscheidungsmechanismus* — und dass stillere Mitglieder Treffen für Treffen faktisch entrechtet werden.

### Warum es passiert

Ein Treffen ohne befugte Moderation fällt automatisch an diejenigen, denen das Reden am leichtesten fällt. Weil verbale Dominanz wie ein Persönlichkeitsmerkmal aussieht, behandelt die Gruppe sie als nicht-handhabbar ("das ist halt die Dana") — statt als das, was sie strukturell ist: eine unerklärte Außerkraftsetzung des Entscheidungsprozesses. Einfluss, der durch einen vereinbarten Mechanismus fließen sollte, fließt stattdessen über Redezeit — und diejenigen mit der geringsten Redezeit verlieren leise ihren Anteil.

<details data-kind="rationale">
<summary>Der formale Stresstest (für Auditor:innen)</summary>

**Fehlermodus** — Ein oder zwei Personen reden konsequent über andere hinweg und dominieren die Treffen.

**Beteiligte Schichten** — Schicht 2 (Governance), Schicht 5 (Operationen), Schicht 4 (Konflikt)

**Relevante Invarianten**

* 2.2 Autorität MUSS explizit sein
* 5.1 Rollen MÜSSEN definiert sein
* 4.1 Konflikt MUSS behandelt werden

**Testbedingung** — Treffen finden statt, in denen Redezeit-Dominanz wiederholt die Ergebnisse prägt, und es existiert keine formale Moderationsrolle oder Durchsetzungsmechanismus.

**Erwartetes RCOS-Verhalten** — Moderation wird als Rolle mit definierter Befugnis zugewiesen; Redezeit-Dominanz wird als Governance-/Prozessverletzung behandelt, nicht als Persönlichkeitsfrage; ein Eskalationspfad greift, wenn das Verhalten anhält.

**Bestehenskriterien** — Entscheidungen sind auf vereinbarte Mechanismen rückführbar, nicht auf Redezeit; Dominanz ist über definierte Rollen oder das Konfliktprotokoll adressierbar.

**Durchfallkriterien** — Einfluss bleibt informell und nicht rechenschaftspflichtig.

</details>

### Wie reif ist deine Gemeinschaft hier?

Bestanden/Nicht bestanden ist für das echte Leben zu grob — die meisten Gemeinschaften sind irgendwo dazwischen. Finde deine Sprosse und ziele auf die nächste.

| Stufe | Wie es aussieht |
|---|---|
| **L0 — Implizit** | Ein paar Stimmen dominieren; es wird als Persönlichkeit gelesen, nicht als Prozess. |
| **L1 — Benannt** | Die Gruppe erkennt das Ungleichgewicht an, hat aber keine Moderationsrolle oder Regel, um damit umzugehen. |
| **L2 — Dokumentiert** | Treffen haben eine definierte [Moderationsrolle](/articles/rcos-templates/layer-5/role-registry) und eine [Entscheidungsmatrix](/articles/rcos-templates/layer-2/decision-matrix); Entscheidungen lassen sich auf einen Mechanismus zurückführen, nicht auf Redezeit. |
| **L3 — Durchgesetzt & eingeübt** | Moderation gleicht aktiv die Beteiligung aus; Dominanz wird als Prozessverletzung benannt und eskaliert, wenn sie anhält. |

Die meisten Gemeinschaften, die sich hier wiedererkennen, sitzen auf **L0 oder L1**. Das Ziel ist nicht Perfektion — es ist, eine Sprosse höher zu kommen.

### Wie RCOS dem vorbeugt

RCOS leitet Einfluss durch vereinbarte Strukturen statt durch Redezeit:

- **[Meeting-Vorlagen](/articles/rcos-templates/layer-5/meeting-templates)** — strukturierte Agenden, Redenrunden und Zeitboxen, die Redezeit per Design verteilen.
- **[Rollenregister](/articles/rcos-templates/layer-5/role-registry)** — eine Moderationsrolle mit expliziter Befugnis, einzugreifen und auszubalancieren.
- **[Entscheidungsmatrix](/articles/rcos-templates/layer-2/decision-matrix)** — Entscheidungen werden über einen vereinbarten Mechanismus aufgelöst, sodass Redezeit für das Ergebnis irrelevant wird.

Siehe auch die Spezifikation: [Schicht 5 — Meeting-System](/articles/rcos-core/v0-1/layer-5-operations-coordination#72-meeting-system) und [Schicht 2 — Entscheidungsmatrix](/articles/rcos-core/v0-1/layer-2-governance-decision-logic#44-decision-matrix).

### Wenn es bereits passiert

Wenn ein paar Stimmen den Raum bereits dominieren, ändere das Format, nicht die Menschen:

1. **Bestimme jetzt eine Moderation** — idealerweise eine rotierende Rolle oder eine neutrale Person von außen für die nächsten Treffen.
2. **Wechsle zu Runden-basierten Formaten** — alle sprechen einmal, bevor irgendjemand zweimal spricht. Das bricht das Dominanzmuster sofort auf.
3. **Benenne es als Prozess, nicht als Persönlichkeit** — "wir ändern, wie wir Treffen führen", niemals "du redest zu viel".
4. **Leite Anhaltendes durch den Konfliktpfad**, statt es als Charakter zu tolerieren.

### Was dieses Versagen typischerweise auslöst

- **[Informelle Cliquen-Entscheidungen](/articles/rcos-stress-tests/governance-power/informal-clique-decision-making)** — ungebremste Dominanz verhärtet sich zu einer faktischen In-Group, die Dinge entscheidet, bevor der Raum es tut.
- **[Normalisierung der Konfliktvermeidung](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — Mitglieder, über die wiederholt hinweggeredet wird, sprechen Dinge irgendwann gar nicht mehr an.

### Verwandte Stresstests

- **[Informelles Veto der Gründer:innen](/articles/rcos-stress-tests/governance-power/founder-informal-veto)** — oft ist die dominante Stimme die der Gründer:in, und Dominanz geht in ein ungeschriebenes Veto über.
