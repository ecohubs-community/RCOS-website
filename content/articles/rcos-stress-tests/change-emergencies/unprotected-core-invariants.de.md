---
id: b6d1a3e9
title: Ungeschützte Kerninvarianten
summary: >-
  Wenn die Gründungsversprechen durch eine einzige gewöhnliche Abstimmung
  rückgängig gemacht werden können.
parentId: 6acde7a7
order: 1
severity: high
stage:
  - growth
  - mature
layers:
  - 0
  - 6
invariants:
  - '0.4'
  - '6.1'
remediationReady: true
tags:
  - 'Layer 0: Scope'
  - High severity
symptoms:
  - >-
    Die fundamentalen Verpflichtungen der Gemeinschaft (Land bleibt Allmende,
    keine alleinige Führung) können durch eine normale Mehrheit geändert werden.
  - Es gibt keine Unterscheidung zwischen Alltagsregeln und Verfassungsregeln.
  - >-
    Eine vorübergehende Mehrheit könnte den Kern der Gemeinschaft in einer
    einzigen Versammlung umschreiben.
  - 'Es existiert keine Liste der Dinge, die unveränderlich bleiben sollen.'
  - >-
    Die Leute gehen davon aus, dass die Gründungsprinzipien sicher sind, aber
    strukturell schützt sie nichts.
preventsWith:
  - rcos-templates/layer-0/invariants-register
  - rcos-templates/layer-6/change-protocol
  - rcos-templates/layer-2/governance-protocol
cascade:
  - test: >-
      rcos-stress-tests/economy-resources/commons-privatization-through-land-sales
    relation: enables
    note: >-
      Wenn der Allmendeschutz wie jede andere Regel änderbar ist, kann er unter
      Druck weggestimmt werden.
  - test: rcos-stress-tests/governance-power/founder-informal-veto
    relation: enables
    note: >-
      Eine ungeschützte Struktur lässt eine informelle Autorität die Regeln nach
      ihrem Belieben umgestalten.
related:
  - rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent
lang: de
sourceHash: e54af999
---

> **Schweregrad:** Hoch — eine vorübergehende Mehrheit kann in einer einzigen Versammlung zerlegen, worauf die Gemeinschaft gegründet wurde.
> **Wo es weh tut:** In den Wachstums- und Reifephasen, wenn sich die Mitgliedschaft erneuert und der Konsens der Gründer verblasst.
> **Lebt ihr das schon?** Spring zu [Wenn es schon passiert](#wenn-es-schon-passiert).

### Kommt dir das bekannt vor?

Die Gemeinschaft wurde auf einigen Nicht-Verhandelbaren aufgebaut — das Land wird gemeinschaftlich gehalten, es gibt keine alleinige Führung, der Ort existiert für X und nicht für Profit. Alle waren sich einig, also hat sich niemand die Mühe gemacht, diese Verpflichtungen *schwerer änderbar* zu machen als den Sitzungsplan. Jahre vergehen, die Mitgliedschaft erneuert sich, eine stressige Phase kommt — und eines Abends steht durch dieselbe einfache Mehrheit, mit der eine Wandfarbe ausgewählt wird, das Fundament selbst zur Disposition. Strukturell hält nichts dagegen. Die „dauerhaften" Versprechen erweisen sich als genau so langlebig wie die nächste Abstimmung.

### Anzeichen, dass euch das passiert

- Fundamentale Verpflichtungen können durch eine normale Mehrheit geändert werden.
- Es gibt keine Unterscheidung zwischen Alltagsregeln und Verfassungsregeln.
- Eine vorübergehende Mehrheit könnte den Kern der Gemeinschaft in einer einzigen Versammlung umschreiben.
- Es existiert keine Liste der Dinge, die unveränderlich bleiben sollen.
- Die Leute gehen davon aus, dass die Gründungsprinzipien sicher sind, aber strukturell schützt sie nichts.

**Das ist _nicht_ dasselbe wie** einen bewussten, harten Änderungsweg für Kerninvarianten zu haben — eine sehr hohe Hürde ist gesund. Das verräterische Zeichen ist, dass *fundamentale Verpflichtungen keinen besonderen Schutz haben*: Sie sind genauso änderbar wie eine Sitzungszeit.

### Warum es passiert

In den frühen Tagen sind sich alle über den Kern einig, also fühlt sich der Schutz unnötig an — warum bewachen, was niemand anfassen würde? Aber die Mitgliedschaft ändert sich, Stimmungen verschieben sich, und eine zukünftige Mehrheit unter Druck kann das Fundament, das die Gemeinschaft zu dem gemacht hat, was sie ist, still und leise aushöhlen. Ohne geschützte Invarianten ist „dauerhaft" nur ein Gefühl, und die wichtigsten Verpflichtungen sind die am wenigsten verteidigten.

<details data-kind="rationale">
<summary>Der formale Stresstest (für Prüfer)</summary>

**Ausfallmodus** — Fundamentale Invarianten sind durch das gewöhnliche Verfahren änderbar.

**Beteiligte Schichten** — Schicht 0 (Identität & Umfang), Schicht 6 (Evolution)

**Relevante Invarianten**

* 0.4 Geschützte Invarianten
* 6.1 Veränderung ist möglich, aber eingeschränkt

**Testbedingung** — Kernverpflichtungen können durch denselben Mechanismus geändert werden wie alltägliche Entscheidungen.

**Erwartetes RCOS-Verhalten** — Geschützte Invarianten sind benannt und tragen eine hohe, explizite Änderungshürde, die sich von gewöhnlichen Regeln unterscheidet.

**Bestehenskriterien** — Kerninvarianten können nicht durch das gewöhnliche Verfahren geändert werden.

**Nichtbestehenskriterien** — Eine vorübergehende Mehrheit kann das Fundament umschreiben.

</details>

### Wie reif ist eure Gemeinschaft in diesem Punkt?

Bestanden/Nicht bestanden ist zu grob für das echte Leben — die meisten Gemeinschaften sind irgendwo dazwischen. Findet eure Stufe und strebt dann die nächste an.

| Stufe | Wie es aussieht |
|---|---|
| **L0 — Implizit** | Kern- und Alltagsregeln sind gleichermaßen änderbar; das Fundament ist nicht geschützt. |
| **L1 — Benannt** | Die Gruppe weiß, dass einige Regeln schwerer zu ändern sein sollten, hat sie aber nicht abgegrenzt. |
| **L2 — Dokumentiert** | Ein [Invariantenregister](/articles/rcos-templates/layer-0/invariants-register) benennt geschützte Invarianten mit einer hohen, expliziten Änderungshürde. |
| **L3 — Durchgesetzt & erprobt** | Kerninvarianten können nicht durch das gewöhnliche Verfahren geändert werden; der Schutz hat einem realen Umgehungsversuch standgehalten. |

Die meisten Gemeinschaften, die sich hier wiedererkennen, stehen auf **L0 oder L1**. Das Ziel ist nicht Perfektion — es geht darum, eine Stufe nach oben zu kommen.

### Wie RCOS dies verhindert

RCOS trennt verfassungsmäßige Veränderungen von alltäglichen Entscheidungen:

- **[Invariantenregister](/articles/rcos-templates/layer-0/invariants-register)** — benenne die geschützten Invarianten und die hohe Hürde, die zu ihrer Änderung erforderlich ist.
- **[Änderungsprotokoll](/articles/rcos-templates/layer-6/change-protocol)** — definiere einen eigenen, schwierigeren Weg für verfassungsmäßige Veränderungen.
- **[Governance-Protokoll](/articles/rcos-templates/layer-2/governance-protocol)** — halte verfassungsmäßige Regeln über gewöhnlichen Entscheidungen.

Siehe auch die Spezifikation: [Schicht 0 — Invarianten](/articles/rcos-core/v0-1/layer-0-identity-scope#23-invariants) und [Schicht 6 — Versionierung und Autorität](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#82-versioning-and-authority).

### Wenn es schon passiert

Wenn euer Fundament ungeschützt ist, schützt es, bevor es getestet wird:

1. **Listet die Dinge auf, die sich niemals stillschweigend ändern dürfen** — das echte Fundament.
2. **Setzt eine hohe Änderungshürde** für sie — Zwei-Drittel-Mehrheit, eine Wartezeit, eine Überprüfung — abgegrenzt von Alltagsregeln.
3. **Ratifiziert das Register**, damit der Schutz selbst aktenkundig ist und nicht stillschweigend entfernt werden kann.

### Was dieser Ausfall typischerweise auslöst

- **[Privatisierung der Allmende durch Landverkäufe](/articles/rcos-stress-tests/economy-resources/commons-privatization-through-land-sales)** — wenn der Allmendeschutz änderbar ist, kann er unter Druck weggestimmt werden.
- **[Informelles Veto der Gründer](/articles/rcos-stress-tests/governance-power/founder-informal-veto)** — eine ungeschützte Struktur lässt eine informelle Autorität die Regeln umgestalten.

### Verwandte Stresstests

- **[Präzedenzfall für Notfall-Regelumgehung](/articles/rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent)** — der andere Weg, auf dem die Verfassung erodiert: nicht offen geändert, sondern unter Dringlichkeit umgangen.
