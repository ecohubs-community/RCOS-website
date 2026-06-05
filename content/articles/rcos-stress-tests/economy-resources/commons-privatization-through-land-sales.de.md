---
id: 1afbg1a7
title: Privatisierung der Allmende durch Landverkäufe
summary: >-
  Wenn der Verkauf von Land an Mitglieder die Gemeinschaft heimlich unmöglich
  macht, fair zu verlassen.
parentId: cbd2804b
order: 0
severity: high
stage:
  - growth
  - mature
layers:
  - 0
  - 3
  - 1
invariants:
  - '0.2'
  - '3.2'
  - '1.2'
remediationReady: true
tags:
  - 'Schicht 3: Ökonomie'
  - Hoher Schweregrad
symptoms:
  - >-
    Die Gemeinschaft erwägt (oder hat begonnen), Grundstücke oder Einheiten an
    einzelne Mitglieder zu verkaufen.
  - >-
    "Es ist einfacher, wenn die Leute einfach ihr eigenes Stück besitzen"
    gewinnt an Zustimmung.
  - >-
    Es gibt keine schriftliche Regel zu Wiederverkauf, Austrittsbewertung oder
    dazu, was Allmende bleibt.
  - >-
    Mitglieder, die eingezahlt haben, können nicht austreten, ohne Geld oder
    Rechte zu verlieren.
  - >-
    Erklärte Invarianten zum gemeinschaftlichen Land stehen heimlich im
    Widerspruch zu dem, was tatsächlich passiert.
preventsWith:
  - rcos-templates/layer-3/treasury-ruleset
  - rcos-templates/layer-3/internal-economy-protocol
  - rcos-templates/layer-1/exit-protocol
  - rcos-templates/layer-0/invariants-register
cascade:
  - test: >-
      rcos-stress-tests/economy-resources/outsourced-labor-bypassing-contribution
    relation: enables
    note: >-
      Sobald Mitglieder ihr Stück privat besitzen, folgt es ganz natürlich,
      geteilte Verpflichtungen als optional zu behandeln.
related:
  - rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent
lang: de
sourceHash: b6dc6124
---

> **Schweregrad:** Hoch — eines der wenigen Versagen, das das Projekt strukturell und oft unumkehrbar beenden kann.
> **Wo es zuschlägt:** In den Wachstums- und Reifephasen, meist unter finanziellem Druck.
> **Lebt ihr das schon?** Springe zu [Wenn es bereits passiert](#wenn-es-bereits-passiert).

### Kommt dir das bekannt vor?

Das Geld ist knapp, oder ein Mitglied wünscht sich die Sicherheit, sein Zuhause wirklich zu *besitzen*, und jemand sagt etwas, das vernünftig klingt: Es wäre einfacher, wenn die Leute einfach ihre eigenen Grundstücke kaufen würden. Das löst das Cash-Problem. Es fühlt sich fair an. Und ganz still, mit diesem einen pragmatischen Schritt, beginnt das Land, das eigentlich gemeinschaftlich gehalten werden sollte, in Privateigentum umgewandelt zu werden — und das Versprechen, dass jeder beitreten und jeder austreten kann, ohne finanziell gefangen zu sein, beginnt sich aufzulösen.

### Anzeichen, dass dir das passiert

- Die Gemeinschaft erwägt (oder hat begonnen), Grundstücke oder Einheiten an einzelne Mitglieder zu verkaufen.
- "Es ist einfacher, wenn die Leute einfach ihr eigenes Stück besitzen" gewinnt an Zustimmung.
- Es gibt keine schriftliche Regel zu Wiederverkauf, Austrittsbewertung oder dazu, was Allmende bleibt.
- Mitglieder, die eingezahlt haben, können nicht austreten, ohne Geld oder Rechte zu verlieren.
- Erklärte Invarianten zum gemeinschaftlichen Land stehen heimlich im Widerspruch zu dem, was tatsächlich passiert.

**Das ist _nicht_ dasselbe wie** ein bewusst gestaltetes Modell mit gemischten Besitzverhältnissen mit expliziten, vorab vereinbarten Allmende-/Privatgrenzen und Austrittsbedingungen. Das Verräterische ist *Privatisierung, die den eigenen erklärten Invarianten der Gemeinschaft widerspricht*, ad hoc entschieden, ohne dass Wiederverkaufs- und Austrittsregeln bereits vorhanden sind.

### Warum es passiert

Land ist das größte Vermögenswert und der schwerste Druck, dem man widerstehen kann — individuelles Eigentum fühlt sich sicherer an, Finanzierung ist einfacher, und ein Verkauf löst einen kurzfristigen Cash-Bedarf von heute. Aber sobald Allmende durch informelles Handeln privat wird, erodieren Austrittsrechte und verfassungsmäßige Schutzmaßnahmen, und die Veränderung ist meist unumkehrbar. Dies ist einer der wenigen Stresstests, bei dem ein Scheitern die Gemeinschaft strukturell beenden kann.

<details data-kind="rationale">
<summary>Der formale Stresstest (für Auditor:innen)</summary>

**Versagensmodus** — Die Gemeinschaft verkauft Land an Mitglieder und untergräbt damit Austritts- und Verfassungsregeln.

**Beteiligte Schichten** — Schicht 0 (Geltungsbereich & Invarianten), Schicht 3 (Ökonomie), Schicht 1 (Mitgliedschaft)

**Relevante Invarianten**

* 0.2 Expliziter, geregelter Geltungsbereich
* 3.2 Schutz der Allmende
* 1.2 Austritt MUSS möglich sein

**Testbedingung** — Änderungen am Vermögenseigentum widersprechen erklärten Invarianten; Mitglieder können nicht austreten, ohne Rechte oder Eigentum zu verlieren.

**Erwartetes RCOS-Verhalten** — Verkäufe MÜSSEN blockiert oder durch vorab erklärte Regeln geregelt werden; Austritts- und Wiederverkaufsbedingungen MÜSSEN *vor* der Übertragung existieren.

**Bestehenskriterien** — Allmendestatus und Austrittsrechte bleiben intakt.

**Versagenskriterien** — Die Gemeinschaft wird strukturell nicht mehr verlassbar.

</details>

### Wie reif ist eure Gemeinschaft hierin?

Bestanden/Nicht-bestanden ist zu grob für das echte Leben — die meisten Gemeinschaften sind irgendwo dazwischen. Findet eure Stufe, und zielt dann auf die nächste.

| Stufe | Wie es aussieht |
|---|---|
| **L0 — Implizit** | Grenzen zwischen Allmende und Privatem werden angenommen, nicht aufgeschrieben; Ad-hoc-Verkäufe sind möglich. |
| **L1 — Benannt** | Die Gruppe erkennt das Risiko, hat aber keine bindende Regel, die die Allmende schützt oder den Austritt regelt. |
| **L2 — Dokumentiert** | Allmendestatus, Wiederverkaufsbedingungen und Austrittsbewertung sind *vor* jeder Übertragung schriftlich festgehalten und ratifiziert. |
| **L3 — Durchgesetzt & geprobt** | Jeder Verkauf wird durch vorab erklärte Regeln blockiert oder geregelt; Austritt ist immer möglich, ohne Rechte zu verlieren; der Schutz hat einen echten Cash-Drucktest überstanden. |

Die meisten Gemeinschaften, die sich hier wiedererkennen, sitzen auf **L0 oder L1**. Das Ziel ist nicht Perfektion — es ist, eine Stufe nach oben zu gehen.

### Wie RCOS dem vorbeugt

RCOS schützt die Allmende und den Austritt, *bevor* der Druck eintrifft:

- **[Treasury Ruleset](/articles/rcos-templates/layer-3/treasury-ruleset)** + **[Internal Economy Protocol](/articles/rcos-templates/layer-3/internal-economy-protocol)** — erklärt, was Allmende und was privat ist, und schützt die Allmende vor informeller Privatisierung.
- **[Exit Protocol](/articles/rcos-templates/layer-1/exit-protocol)** — garantiert, dass Austritts- und Wiederverkaufsbedingungen existieren, bevor jemand etwas überträgt, damit niemand gefangen ist.
- **[Invariants Register](/articles/rcos-templates/layer-0/invariants-register)** — registriert den Schutz der Allmende als geschützte Invariante, die nicht heimlich geändert werden kann.
- Ausgearbeitetes Beispiel: die Schutzmaßnahme **[Land Commons Anti-Privatization](/articles/safeguards/land-commons-anti-privatization)**.

Siehe auch die Spezifikation: [Schicht 3 — Allmende vs. Private Ressourcen](/articles/rcos-core/v0-1/layer-3-economic-resource-system#51-commons-vs-private-resources) und [Schicht 1 — Austritt und Trennung](/articles/rcos-core/v0-1/layer-1-membership-system#36-exit-and-separation).

### Wenn es bereits passiert

Weil Privatisierung oft unumkehrbar ist, handelt umsichtig und schnell:

1. **Friert unumkehrbare Schritte ein.** Pausiert jeden anstehenden Verkauf, bis Regeln existieren — Unumkehrbarkeit ist die ganze Gefahr.
2. **Bekräftigt die Invariante.** Bestätigt schriftlich, was Allmende ist und nicht durch einseitiges oder informelles Handeln privatisiert werden kann.
3. **Schreibt Austritts- und Wiederverkaufsbedingungen vor jeder Übertragung,** damit niemand gefangen ist und die Allmende einen Austritt übersteht.
4. **Wenn Verkäufe bereits stattgefunden haben,** holt euch rechtliche Hilfe, um Austrittsfähigkeit wiederherzustellen und das, was an Allmende verbleibt, abzusichern.

### Was dieses Versagen typischerweise auslöst

- **[Ausgelagerte Arbeit, die Beitragspflichten umgeht](/articles/rcos-stress-tests/economy-resources/outsourced-labor-bypassing-contribution)** — sobald Land privat besessen wird, können Mitglieder geteilte Verpflichtungen als optional behandeln und sich freikaufen.

### Verwandte Stresstests

- **[Präzedenzfall Notfall-Regelumgehung](/articles/rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent)** — eine "dringende" Finanzkrise ist der klassische Deckmantel für einen überstürzten Verkauf.
