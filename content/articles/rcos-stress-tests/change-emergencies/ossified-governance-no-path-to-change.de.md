---
id: c8f4b2d1
title: Verknöcherte Governance ohne Weg zur Veränderung
summary: >-
  Wenn nichts sich ändern kann, geschieht Veränderung stattdessen durch
  Weggehen.
parentId: 6acde7a7
order: 2
severity: medium
stage:
  - mature
layers:
  - 6
invariants:
  - '6.1'
  - '6.2'
remediationReady: true
tags:
  - 'Layer 6: Evolution'
  - Medium severity
symptoms:
  - >-
    Die ursprünglichen Regeln gelten als unveränderlich; es gibt keinen
    legitimen Prozess, sie zu überarbeiten.
  - >-
    "So haben es die Gründer:innen aufgesetzt" beendet die meisten
    Reformgespräche.
  - >-
    Frustrierte Mitglieder drängen auf Veränderung, indem sie mit Weggang drohen
    — oder einfach gehen.
  - >-
    Vorschläge zur Anpassung sterben, weil es keinen Mechanismus gibt, sie zu
    prüfen.
  - >-
    Die Gemeinschaft passt sichtbar nicht mehr zu ihren eigenen aktuellen
    Bedürfnissen.
preventsWith:
  - rcos-templates/layer-6/change-protocol
  - rcos-templates/layer-6/version-history
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: enables
    note: >-
      Ohne legitimen Weg zur Veränderung kann Frustration nirgendwo hin außer in
      den Untergrund.
  - test: rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent
    relation: feeds
    note: >-
      Wenn normale Veränderung unmöglich ist, warten Menschen auf eine Krise, um
      durchzusetzen, was sie nicht vorschlagen konnten.
related:
  - rcos-stress-tests/change-emergencies/unprotected-core-invariants
lang: de
sourceHash: ba4439dd
---

> **Schweregrad:** Mittel — eher schleichender Verfall als Kollaps: Die Gemeinschaft verkalkt und verliert nach und nach Mitglieder.
> **Wo es zwickt:** In der reifen Phase, oft nach einer frühen Phase mit viel Fluktuation, auf die die Gründer:innen überreagiert haben.
> **Lebst du das schon?** Spring zu [Wenn es schon passiert](#wenn-es-schon-passiert).

### Kommt dir das bekannt vor?

Die Gemeinschaft hat ihre Regeln vor Jahren festgelegt, und jetzt sind sie heilig. Immer wenn jemand vorschlägt, dass die Struktur nicht mehr passt — das Meeting-Format, die Mitgliedschaftsstufen, wie Geld funktioniert — stößt das Gespräch an eine Wand: "So haben es die Gründer:innen aufgesetzt." Es gibt keinen wirklichen Prozess, eine Veränderung vorzuschlagen, also kann der Druck nirgendwo hin. Leute, die wollen, dass sich die Gemeinschaft weiterentwickelt, kommen gar nicht erst dazu, dafür zu argumentieren; sie gehen einfach leise, oder drohen damit, und der Ort entfernt sich immer weiter von den Menschen, die tatsächlich dort leben.

### Anzeichen, dass dir das gerade passiert

- Die ursprünglichen Regeln gelten als unveränderlich; es gibt keinen legitimen Prozess, sie zu überarbeiten.
- "So haben es die Gründer:innen aufgesetzt" beendet die meisten Reformgespräche.
- Frustrierte Mitglieder drängen auf Veränderung, indem sie mit Weggang drohen — oder einfach gehen.
- Vorschläge zur Anpassung sterben, weil es keinen Mechanismus gibt, sie zu prüfen.
- Die Gemeinschaft passt sichtbar nicht mehr zu ihren eigenen aktuellen Bedürfnissen.

**Das ist _nicht_ dasselbe wie** der bewusste Schutz von Kern-Invarianten (das ist gesund — siehe [Ungeschützte Kern-Invarianten](/articles/rcos-stress-tests/change-emergencies/unprotected-core-invariants) für das *entgegengesetzte* Versagen). Der verräterische Punkt ist, dass *alles* eingefroren ist, ohne einen geregelten Weg, irgendetwas zu ändern — sodass legitime Anpassung unmöglich wird.

### Warum es passiert

Nach einer frühen Phase voller Fluktuation überreagieren Gemeinschaften oft in Richtung Starrheit — Stabilität fühlt sich sicher an, und die Regeln wieder aufzumachen fühlt sich gefährlich an. Aber ein System ohne legitimen Veränderungsmechanismus kann sich nicht an neue Mitglieder, neue Bedingungen oder eigene Fehler anpassen. Der Druck zur Veränderung verschwindet nicht; er umgeht das System als Austritte, Abspaltungen und stilles Regelbrechen.

<details data-kind="rationale">
<summary>Der formale Stresstest (für Auditor:innen)</summary>

**Versagensmodus** — Es gibt keinen legitimen, geregelten Mechanismus, um die Regeln zu ändern.

**Beteiligte Schichten** — Schicht 6 (Evolution)

**Relevante Invarianten**

* 6.1 Veränderung ist möglich, aber geregelt
* 6.2 Veränderungen werden versioniert

**Testbedingung** — Mitglieder können keine Regeländerungen über einen definierten Prozess vorschlagen oder annehmen.

**Erwartetes RCOS-Verhalten** — Ein geregelter Veränderungsmechanismus erlaubt es, Regeln vorzuschlagen, zu prüfen, zu überarbeiten und zu versionieren.

**Bestehenskriterien** — Das System kann sich durch einen legitimen Prozess anpassen.

**Versagenskriterien** — Veränderung passiert nur durch Austritt, Abspaltung oder Regelbruch.

</details>

### Wie reif ist deine Gemeinschaft in diesem Punkt?

Bestanden/nicht bestanden ist für das echte Leben zu grob — die meisten Gemeinschaften sind irgendwo dazwischen. Finde deine Stufe, dann ziele auf die nächste.

| Stufe | Wie es aussieht |
|---|---|
| **L0 — Implizit** | Kein legitimer Weg zur Veränderung; Regeln sind eingefroren und Reform passiert durch Austritt. |
| **L1 — Benannt** | Die Gruppe gibt zu, dass sie sich nicht anpassen kann, hat aber keinen Veränderungsmechanismus aufgebaut. |
| **L2 — Dokumentiert** | Ein [Change-Protokoll](/articles/rcos-templates/layer-6/change-protocol) definiert, wie Regeln vorgeschlagen, geprüft und überarbeitet werden können — möglich, aber geregelt. |
| **L3 — Durchgesetzt & geübt** | Veränderung passiert durch den Prozess; das System hat sich mindestens einmal ohne Krise oder Schisma angepasst. |

Die meisten Gemeinschaften, die sich hier wiedererkennen, sitzen bei **L0 oder L1**. Das Ziel ist nicht Perfektion — es geht darum, eine Stufe weiterzukommen.

### Wie RCOS das verhindert

RCOS macht Veränderung möglich *und* begrenzt — weder eingefroren noch chaotisch:

- **[Change-Protokoll](/articles/rcos-templates/layer-6/change-protocol)** — definiert einen geregelten, legitimen Weg, Änderungen vorzuschlagen und anzunehmen.
- **[Versionshistorie](/articles/rcos-templates/layer-6/version-history)** — verfolgt, wie sich die Regeln entwickeln, sodass Veränderung sichtbar und begrenzt wird, statt gefürchtet.

Siehe auch die Spezifikation: [Schicht 6 — Veränderungsmechanismen](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#81-change-mechanisms) und [Versionierung und Autorität](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#82-versioning-and-authority).

### Wenn es schon passiert

Wenn die Regeln eingefroren sind, öffne einen sicheren Kanal, bevor mehr Leute gehen:

1. **Öffne einen Kanal für Veränderung** — einen Vorschlagsprozess, und sei er noch so minimal.
2. **Schicke eine überfällige Anpassung als Proof-of-Concept hindurch.**
3. **Unterscheide geschützte Invarianten** (bewusst schwer zu ändern) **vom Rest** (per Prozess änderbar), damit "Das können wir nicht ändern" aufhört, für alles zu gelten.

### Was dieses Versagen typischerweise auslöst

- **[Normalisierung von Konfliktvermeidung](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — ohne legitimen Weg zur Veränderung geht Frustration in den Untergrund.
- **[Präzedenzfall Notfall-Regelumgehung](/articles/rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent)** — wenn normale Veränderung unmöglich ist, warten Menschen auf eine Krise, um sie zu erzwingen.

### Verwandte Stresstests

- **[Ungeschützte Kern-Invarianten](/articles/rcos-stress-tests/change-emergencies/unprotected-core-invariants)** — das entgegengesetzte Ungleichgewicht: Hier kann sich nichts ändern; dort kann sich alles ändern, auch das Fundament.
