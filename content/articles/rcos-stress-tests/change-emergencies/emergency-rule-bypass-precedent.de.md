---
id: 1agdfya7
title: Präzedenzfall Notfall-Regelumgehung
summary: Wenn eine vorübergehende Krisenausnahme heimlich zur Dauerregel wird.
parentId: 6acde7a7
order: 0
severity: high
stage:
  - growth
  - mature
layers:
  - 2
  - 6
invariants:
  - '2.3'
  - '6.2'
remediationReady: true
tags:
  - 'Layer 2: Governance'
  - High severity
symptoms:
  - >-
    Während einer Krise wurde der normale Prozess „nur für jetzt" ausgesetzt —
    und nie vollständig wieder aufgenommen.
  - >-
    Eine unter Zeitdruck getroffene Entscheidung wurde still und leise zur neuen
    dauerhaften Struktur.
  - >-
    Notfallbefugnisse wurden nie im Voraus definiert, daher sind ihr Umfang und
    ihr Enddatum unklar.
  - >-
    „Wir hatten keine Zeit, es richtig zu machen" wird zu einer wiederkehrenden
    Rechtfertigung.
  - >-
    Es gibt kein Protokoll, das Notfallausnahmen von dauerhaften Regeländerungen
    unterscheidet.
preventsWith:
  - rcos-templates/layer-6/change-protocol
  - rcos-templates/layer-2/governance-protocol
  - rcos-templates/layer-0/invariants-register
cascade:
  - test: rcos-stress-tests/governance-power/founder-informal-veto
    relation: feeds
    note: >-
      Wer Notfallmacht ausübt, neigt dazu, sie nach Ende der Krise informell zu
      verfestigen.
  - test: >-
      rcos-stress-tests/economy-resources/commons-privatization-through-land-sales
    relation: enables
    note: >-
      Eine dringende Finanzkrise ist der klassische Deckmantel für einen
      überstürzten, unumkehrbaren Landverkauf.
related:
  - rcos-stress-tests/governance-power/founder-informal-veto
lang: de
sourceHash: b60f347c
---

> **Schweregrad:** Hoch — jede ungeprüfte Ausnahme ist ein Präzedenzfall, der die Verfassung aushöhlt.
> **Wo es zwickt:** Wachstums- und Reifephase, wann immer die erste echte Krise zuschlägt.
> **Lebt ihr das schon?** Spring zu [Wenn es schon passiert](#wenn-es-schon-passiert).

### Kommt dir das bekannt vor?

Eine echte Krise traf ein — eine Finanzierungslücke, ein Sicherheitsproblem, ein plötzlicher Weggang — und es war keine Zeit für den üblichen Prozess, also entschied einfach jemand. Das war im Moment die richtige Entscheidung. Aber die Krise ging vorbei, und die normalen Regeln kehrten nie ganz zurück. Die Notfallentscheidung ist immer noch in Kraft, niemand hat sie überprüft, und jetzt erklärt „wir hatten keine Zeit, es richtig zu machen" einen ziemlich großen Teil davon, wie die Dinge laufen. Die Ausnahme wird leise zur Regel.

### Anzeichen, dass es euch trifft

- Während einer Krise wurde der normale Prozess „nur für jetzt" ausgesetzt — und nie vollständig wieder aufgenommen.
- Eine unter Zeitdruck getroffene Entscheidung wurde still und leise zur neuen dauerhaften Struktur.
- Notfallbefugnisse wurden nie im Voraus definiert, daher sind ihr Umfang und ihr Enddatum unklar.
- „Wir hatten keine Zeit, es richtig zu machen" wird zu einer wiederkehrenden Rechtfertigung.
- Es gibt kein Protokoll, das Notfallausnahmen von dauerhaften Regeländerungen unterscheidet.

**Das ist _nicht_ dasselbe wie** das Ausrufen vordefinierter, protokollierter, zeitlich begrenzter Notfallbefugnisse. Das Erkennungsmerkmal ist *eine Ausnahme ohne Ablaufdatum* — Dringlichkeit, die die Struktur dauerhaft verändert hat, ohne Überprüfung oder Versionierung.

### Warum es passiert

Krisen verlangen Tempo, und Tempo rechtfertigt das Übergehen von Prozessen. Das ist in Ordnung, wenn Notfallbefugnisse vordefiniert sind und auslaufen — aber wenn sie es nicht sind, setzt jede Umgehung einen Präzedenzfall: Die Ausnahme wird zur Regel, und „vorübergehende" Änderungen versteinern, weil nichts eine Überprüfung erzwingt. Dringlichkeit wird zu einem dauerhaften Override der Verfassung, eine vernünftig erscheinende Abkürzung nach der anderen.

<details data-kind="rationale">
<summary>Der formale Stresstest (für Auditoren)</summary>

**Fehlerszenario** — Regeln werden in Krisen „vorübergehend" umgangen.

**Beteiligte Schichten** — Schicht 2 (Governance), Schicht 6 (Evolution)

**Relevante Invarianten**

* 2.3 Verfassungsregeln stehen über Dringlichkeit
* 6.2 Änderungen sind versioniert

**Testbedingung** — Notfallentscheidungen verändern die Struktur dauerhaft ohne Überprüfung.

**Erwartetes RCOS-Verhalten** — Notfallbefugnisse sind vordefiniert, protokolliert und mit Ablaufdatum versehen.

**Bestehenskriterien** — Normale Regeln werden nach der Krise wieder aufgenommen.

**Versagenskriterien** — Krise wird zum Präzedenzfall.

</details>

### Wie reif ist eure Gemeinschaft in diesem Punkt?

Bestanden/Nicht bestanden ist für das echte Leben zu grob — die meisten Gemeinschaften sind irgendwo dazwischen. Findet eure Stufe und steuert dann die nächste an.

| Stufe | Wie es aussieht |
|---|---|
| **L0 — Implizit** | Krisen setzen die Regeln spontan aus; Ausnahmen werden stillschweigend dauerhaft. |
| **L1 — Benannt** | Die Gruppe weiß, dass sie „Notfall" überstrapaziert, hat aber keine Notfallbefugnisse vordefiniert. |
| **L2 — Dokumentiert** | Notfallbefugnisse sind vordefiniert, abgegrenzt, protokolliert und mit Ablaufdatum; dauerhafte Änderungen erfordern normale Überprüfung. |
| **L3 — Durchgesetzt & geübt** | Normale Regeln werden nachweislich nach der Krise wieder aufgenommen; jede Notfallhandlung wird protokolliert und überprüft; eine echte Krise hat es getestet. |

Die meisten Gemeinschaften, die sich hier wiedererkennen, stehen bei **L0 oder L1**. Das Ziel ist nicht Perfektion — es geht darum, eine Stufe hochzukommen.

### Wie RCOS das verhindert

RCOS lässt euch in einer Krise schnell handeln, *ohne* die Verfassung zu verlieren:

- **[Change Protocol](/articles/rcos-templates/layer-6/change-protocol)** — definiert Notfallbefugnisse im Voraus: ihren Umfang, wer sie innehat, und ein verpflichtendes Ablaufdatum.
- **[Governance Protocol](/articles/rcos-templates/layer-2/governance-protocol)** — sorgt dafür, dass Verfassungsregeln über Dringlichkeit stehen.
- **[Invariants Register](/articles/rcos-templates/layer-0/invariants-register)** — markiert, welche Regeln nie umgangen werden dürfen, auch nicht in einer Krise.

Siehe auch die Spezifikation: [Schicht 6 — Änderungssicherheit und Reversibilität](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#85-change-safety-and-reversibility) und [Schicht 2 — Schutzmechanismen und Fehlermodi](/articles/rcos-core/v0-1/layer-2-governance-decision-logic#46-safeguards-and-failure-modes).

### Wenn es schon passiert

Wenn sich „vorübergehende" Ausnahmen angehäuft haben, bringt sie mit der Verfassung in Einklang:

1. **Bestehende Ausnahmen prüfen.** Listet jede Notfallmaßnahme auf, die noch in Kraft ist.
2. **Jede auslaufen lassen oder ratifizieren.** Entweder lasst sie ablaufen, oder schickt sie durch den normalen Prozess als echte, versionierte Änderung.
3. **Definiert jetzt Notfallbefugnisse im Voraus,** damit die nächste Krise einen begrenzten, protokollierten Pfad hat statt eines Blankoschecks.
4. **Behaltet die Kaskade im Blick** — normalisierte Umgehung ist der Weg, auf dem sich Gründer:innen verfestigen und Gemeingüter unter Druck verkauft werden.

### Was dieser Fehler typischerweise auslöst

- **[Informelles Veto der Gründer:innen](/articles/rcos-stress-tests/governance-power/founder-informal-veto)** — wer Notfallmacht ausübt, neigt dazu, sie informell zu verfestigen.
- **[Privatisierung der Gemeingüter durch Landverkäufe](/articles/rcos-stress-tests/economy-resources/commons-privatization-through-land-sales)** — eine „dringende" Finanzkrise ist der klassische Deckmantel für einen überstürzten, unumkehrbaren Verkauf.

### Verwandte Stresstests

- **[Informelles Veto der Gründer:innen](/articles/rcos-stress-tests/governance-power/founder-informal-veto)** — die Variante derselben verfassungsmäßigen Erosion mit dauerhafter Macht.
