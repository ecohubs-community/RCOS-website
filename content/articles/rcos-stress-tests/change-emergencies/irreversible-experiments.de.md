---
id: d2a7e9f3
title: Unumkehrbare Experimente
summary: 'Wenn "lass es uns einfach probieren" keinen Rückweg hat, falls es schiefgeht.'
parentId: 6acde7a7
order: 3
severity: medium
stage:
  - growth
  - mature
layers:
  - 6
invariants:
  - '6.3'
  - '6.4'
remediationReady: true
tags:
  - 'Layer 6: Evolution'
  - Medium severity
symptoms:
  - >-
    Eine große Veränderung wurde als "Experiment" beschlossen, aber es gibt
    keinen definierten Rückweg.
  - >-
    "Lass es uns versuchen und schauen" war der gesamte Plan; niemand hat
    Erfolgskriterien oder ein Enddatum festgelegt.
  - >-
    Das Neue auszuprobieren erforderte unumkehrbare Schritte (Vermögen verkauft,
    Rolle aufgelöst, Rechtsform geändert).
  - >-
    Wenn Experimente nicht funktionieren, sitzt die Gemeinschaft trotzdem auf
    ihnen fest.
  - >-
    Es gibt keine Aufzeichnung darüber, was ausprobiert wurde, warum, und was
    passiert ist.
preventsWith:
  - rcos-templates/layer-6/experiment-template
  - rcos-templates/layer-6/change-protocol
  - rcos-templates/layer-6/learning-log
cascade:
  - test: >-
      rcos-stress-tests/economy-resources/commons-privatization-through-land-sales
    relation: enables
    note: >-
      Land als Experiment zu verkaufen ist der teuerste unumkehrbare Schritt,
      verkleidet als risikoarme Sache.
related:
  - rcos-stress-tests/change-emergencies/institutional-amnesia
  - rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent
lang: de
sourceHash: 5718088d
---

> **Schweregrad:** Mittel — der Schaden ist auf jede einzelne Veränderung begrenzt, aber jede kann dauerhaft sein.
> **Wo es weh tut:** Wachstums- und Reifephase, wenn die Gemeinschaft mutig genug ist, Großes zu versuchen.
> **Steckt ihr schon mittendrin?** Springe direkt zu [Wenn es bereits passiert](#wenn-es-bereits-passiert).

### Kommt dir das bekannt vor?

Jemand schlug eine große Veränderung vor — ein neues Governance-Modell, ein größerer Bau, eine Umstrukturierung der Mitgliedschaft — und stellte sie als Experiment dar. "Lass es uns einfach probieren und schauen, wie es läuft." Diese Offenheit fühlte sich gesund an, also legte die Gruppe los. Aber es zu probieren bedeutete Schritte, die nicht rückgängig gemacht werden können: ein Vermögensgegenstand verkauft, eine Rolle aufgelöst, eine Rechtsform geändert. Jetzt läuft es nicht gut, und es gibt keinen "Mal schauen wie es läuft"-Ausgang, denn es gab nie einen Rückbau-Plan — und niemand hat aufgeschrieben, wie Erfolg überhaupt aussehen sollte.

### Anzeichen, dass es euch betrifft

- Eine große Veränderung wurde als "Experiment" beschlossen, aber es gibt keinen definierten Rückweg.
- "Lass es uns versuchen und schauen" war der gesamte Plan; niemand hat Erfolgskriterien oder ein Enddatum festgelegt.
- Das Neue auszuprobieren erforderte unumkehrbare Schritte.
- Wenn Experimente nicht funktionieren, sitzt die Gemeinschaft trotzdem auf ihnen fest.
- Es gibt keine Aufzeichnung darüber, was ausprobiert wurde, warum, und was passiert ist.

**Das ist _nicht_ dasselbe wie** ein echtes Experiment mit Kriterien, einem Zeitrahmen und einem Rückbau-Plan. Das verräterische Zeichen ist *Unumkehrbarkeit, verkleidet als Experiment* — die Sprache des "Mal-eben-Probierens" ohne die Sicherheit, es rückgängig machen zu können.

### Warum es passiert

Eine Veränderung "Experiment" zu nennen senkt den Widerstand — es klingt risikoarm und aufgeschlossen, also stimmen Leute leichter zu. Aber wenn die Veränderung gar nicht rückgängig gemacht werden kann, ist diese Rahmung ein falscher Trost: Die Gemeinschaft bindet sich an etwas, das sie nicht zurücknehmen kann, und weil keine Kriterien oder Lernziele gesetzt wurden, kann sie nicht einmal feststellen, ob das Experiment funktioniert hat. Das Wort übernimmt das Überzeugen; die Unumkehrbarkeit richtet den Schaden an.

<details data-kind="rationale">
<summary>Der formale Stresstest (für Prüfer:innen)</summary>

**Fehlermodus** — Unumkehrbare Veränderungen werden unter dem Deckmantel umkehrbarer "Experimente" beschlossen.

**Beteiligte Schichten** — Schicht 6 (Evolution)

**Relevante Invarianten**

* 6.3 Experimente sind umkehrbar
* 6.4 Lernen wird festgehalten

**Testbedingung** — Eine Veränderung, die Experiment genannt wird, hat keinen Rückbau, keine Erfolgskriterien und keinen Zeitrahmen.

**Erwartetes RCOS-Verhalten** — Experimente tragen Kriterien, einen Zeitrahmen und einen Umkehrbarkeitsplan; unumkehrbare Veränderungen durchlaufen den vollständigen Veränderungsprozess.

**Bestehenskriterium** — Experimente können tatsächlich rückgängig gemacht und gegen Kriterien geprüft werden.

**Durchfallkriterium** — "Experimente" sind dauerhaft und unausgewertet.

</details>

### Wie reif ist eure Gemeinschaft in dieser Frage?

Bestehen/Durchfallen ist für das echte Leben zu grob — die meisten Gemeinschaften sind irgendwo dazwischen. Findet eure Stufe und zielt dann auf die nächste.

| Stufe | Wie es aussieht |
|---|---|
| **L0 — Implizit** | "Experimente" werden ohne Kriterien, Zeitrahmen oder Rückbau beschlossen. |
| **L1 — Benannt** | Die Gruppe möchte sicher experimentieren, hat aber noch nicht definiert, wie. |
| **L2 — Dokumentiert** | Eine [Experiment-Vorlage](/articles/rcos-templates/layer-6/experiment-template) verlangt Erfolgskriterien, einen Zeitrahmen und einen Rückbau-Plan. |
| **L3 — Durchgesetzt & geübt** | Experimente sind tatsächlich umkehrbar und zeitlich begrenzt; mindestens eines wurde durchgeführt, ausgewertet und entweder zurückgebaut oder evidenzbasiert übernommen. |

Die meisten Gemeinschaften, die sich hier wiedererkennen, befinden sich auf **L0 oder L1**. Das Ziel ist nicht Perfektion — es geht darum, eine Stufe weiterzukommen.

### Wie RCOS dem vorbeugt

RCOS hält "Experiment" ehrlich — und unumkehrbare Schritte aus dieser Kategorie heraus:

- **[Experiment-Vorlage](/articles/rcos-templates/layer-6/experiment-template)** — Kriterien, Zeitrahmen und Rückbau-Plan einfordern, bevor losgelegt wird.
- **[Veränderungsprotokoll](/articles/rcos-templates/layer-6/change-protocol)** — unumkehrbare Veränderungen durch den vollständigen Prozess leiten, nicht über die Experiment-Spur.
- **[Lern-Log](/articles/rcos-templates/layer-6/learning-log)** — festhalten, was ausprobiert wurde und was passiert ist, damit das Experiment etwas lehrt.

Siehe auch die Spezifikation: [Schicht 6 — Experimente](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#83-experiments) und [Veränderungssicherheit und Umkehrbarkeit](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#85-change-safety-and-reversibility).

### Wenn es bereits passiert

Wenn "Experimente" still und leise dauerhaft geworden sind, sortiert sie nach Umkehrbarkeit:

1. **Prüft laufende Experimente auf einen echten Ausstieg** — welche könnt ihr wirklich rückgängig machen?
2. **Fügt Kriterien und ein Review-Datum hinzu** zu allem, was noch läuft.
3. **Hört auf, unumkehrbare Schritte Experimente zu nennen** — schickt sie durch den vollständigen Veränderungsprozess, damit sie die Prüfung bekommen, die sie verdienen.

### Was dieses Versagen typischerweise auslöst

- **[Privatisierung der Allmende durch Landverkäufe](/articles/rcos-stress-tests/economy-resources/commons-privatization-through-land-sales)** — Land "als Experiment" zu verkaufen ist der teuerste unumkehrbare Schritt überhaupt.

### Verwandte Stresstests

- **[Institutionelle Amnesie](/articles/rcos-stress-tests/change-emergencies/institutional-amnesia)** — ohne festgehaltenes Lernen lehrt selbst ein umkehrbares Experiment nichts.
- **[Präzedenz der Notfall-Regelumgehung](/articles/rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent)** — beide lassen große Veränderungen unter einem beruhigenden Etikett durchrutschen.
