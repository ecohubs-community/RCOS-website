---
id: e5c1b8a4
title: Institutionelle Amnesie
summary: >-
  Wenn die Gemeinschaft dieselben Lektionen immer wieder auf die harte Tour neu
  lernt.
parentId: 6acde7a7
order: 4
severity: medium
stage:
  - growth
  - mature
layers:
  - 6
  - 5
invariants:
  - '6.4'
  - '5.2'
remediationReady: true
tags:
  - 'Layer 6: Evolution'
  - Medium severity
symptoms:
  - >-
    Dieselben Konflikte, gescheiterten Projekte oder Onboarding-Probleme treten
    immer wieder auf.
  - >-
    Warum frühere Entscheidungen getroffen wurden, ist verloren; niemand kann
    die Begründung rekonstruieren.
  - >-
    Das institutionelle Gedächtnis lebt in den Köpfen einiger weniger
    Langzeit-Mitglieder — und verschwindet, wenn diese gehen.
  - >-
    Neue Mitglieder wiederholen Fehler, die die Gemeinschaft schon vor Jahren
    gemacht hat.
  - >-
    Es gibt kein Protokoll von Entscheidungen, Experimenten oder gelernten
    Lektionen.
preventsWith:
  - rcos-templates/layer-6/learning-log
  - rcos-templates/layer-6/version-history
  - rcos-templates/layer-5/operations-manual
cascade:
  - test: rcos-stress-tests/operations-coordination/rapid-growth-without-onboarding
    relation: feeds
    note: >-
      Ohne festgehaltenes Wissen können Neulinge nicht auf den Stand gebracht
      werden und wiederholen alte Fehler.
  - test: >-
      rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
    relation: feeds
    note: 'Wenn Wissen nur in Köpfen lebt, werden diese Köpfe unverzichtbar.'
related:
  - rcos-stress-tests/change-emergencies/irreversible-experiments
lang: de
sourceHash: 92f00fba
---

> **Schweregrad:** Mittel — nie dringend, immer kumulativ: die Gemeinschaft zahlt für jede Lektion den vollen Preis, immer wieder.
> **Wo es weh tut:** In der Wachstums- und Reifephase, und am härtesten, wann immer ein Langzeit-Mitglied geht.
> **Lebst du das schon?** Spring zu [Wenn es bereits passiert](#wenn-es-bereits-passiert).

### Kommt dir das bekannt vor?

Dieser Konflikt fühlt sich vertraut an — weil die Gemeinschaft vor drei Jahren fast genau denselben hatte, ihn gemeistert hat, etwas daraus gelernt hat und es dann vergessen hat. Das gerade gescheiterte Projekt ist auf dieselbe Weise gescheitert wie das letzte. Neue Mitglieder stoßen gegen dieselben Wände, gegen die schon die Gründer:innen gestoßen sind und die sie längst überwunden hatten. Niemand hat etwas davon aufgeschrieben, also lebt das einzige Gedächtnis der Gemeinschaft in den Köpfen einiger weniger Langzeit-Mitglieder — und jedes Mal, wenn eine:r von ihnen geht, wandert ein Stück hart erarbeiteten Wissens mit hinaus.

### Anzeichen, dass dir das passiert

- Dieselben Konflikte, gescheiterten Projekte oder Onboarding-Probleme treten immer wieder auf.
- Warum frühere Entscheidungen getroffen wurden, ist verloren; niemand kann die Begründung rekonstruieren.
- Das institutionelle Gedächtnis lebt in den Köpfen einiger weniger Langzeit-Mitglieder — und verschwindet, wenn diese gehen.
- Neue Mitglieder wiederholen Fehler, die die Gemeinschaft schon vor Jahren gemacht hat.
- Es gibt kein Protokoll von Entscheidungen, Experimenten oder gelernten Lektionen.

**Das ist _nicht_ dasselbe wie** die Entscheidung, Triviales nicht zu dokumentieren. Das verräterische Zeichen ist, dass *bedeutsame Entscheidungen, Konflikte und Experimente keine abrufbare Spur hinterlassen* — sodass die Gemeinschaft aus ihrer eigenen Geschichte nicht lernen, sondern sie nur erneut durchleben kann.

### Warum es passiert

Lernen festzuhalten ist unglamourös und fühlt sich immer weniger dringend an als die nächste Aufgabe, also passiert es nie so richtig. Aber eine Gemeinschaft, die ihre Entscheidungen und Ergebnisse nicht aufzeichnet, hat kein Gedächtnis jenseits ihrer am längsten dabei seienden Mitglieder. Sie zahlt für jede Lektion immer wieder den vollen Preis und verliert ihre Geschichte in dem Moment, in dem diese Menschen weiterziehen — was sie irgendwann alle tun.

<details data-kind="rationale">
<summary>Der formale Stresstest (für Auditor:innen)</summary>

**Fehlermodus** — Entscheidungen, Konflikte und Experimente hinterlassen kein festgehaltenes Lernen.

**Beteiligte Schichten** — Schicht 6 (Evolution), Schicht 5 (Operations)

**Relevante Invarianten**

* 6.4 Lernen wird festgehalten
* 5.2 Operatives Wissen ist dokumentiert

**Testbedingung** — Bedeutsame Entscheidungen und Ergebnisse werden nicht aufgezeichnet, und die Begründung ist nicht mehr rekonstruierbar.

**Erwartetes RCOS-Verhalten** — Lernen und Entscheidungen werden in dauerhafter, abrufbarer Form festgehalten und im Laufe der Zeit konsultiert.

**Bestehenskriterien** — Vergangene Lektionen sind abrufbar und verhindern nachweislich Wiederholungen.

**Fehlkriterien** — Die Gemeinschaft wiederholt ihre eigenen Fehler.

</details>

### Wie reif ist deine Gemeinschaft in diesem Punkt?

Bestanden/Nicht bestanden ist für die echte Welt zu grob — die meisten Gemeinschaften sind irgendwo dazwischen. Finde deine Sprosse und ziele auf die nächste.

| Stufe | Wie es aussieht |
|---|---|
| **L0 — Implizit** | Nichts wird festgehalten; das Gedächtnis ist mündlich und lebt in wenigen Köpfen. |
| **L1 — Benannt** | Die Gruppe weiß, dass sie Fehler wiederholt, hat aber noch nicht begonnen, aufzuzeichnen. |
| **L2 — Dokumentiert** | Ein [Learning Log](/articles/rcos-templates/layer-6/learning-log) und Entscheidungsprotokolle halten bedeutsame Entscheidungen, Konflikte und Ergebnisse fest. |
| **L3 — Verbindlich & eingeübt** | Lernen wird routinemäßig festgehalten *und tatsächlich konsultiert*; eine vergangene Lektion hat nachweislich eine Wiederholung verhindert. |

Die meisten Gemeinschaften, die sich hier wiedererkennen, stehen bei **L0 oder L1**. Das Ziel ist nicht Perfektion — es geht darum, eine Sprosse höher zu kommen.

### Wie RCOS dem vorbeugt

RCOS gibt der Gemeinschaft ein Gedächtnis, das ihre Mitglieder überdauert:

- **[Learning Log](/articles/rcos-templates/layer-6/learning-log)** — halte Entscheidungen, Experimente, Konflikte und das, was gelernt wurde, fest.
- **[Version History](/articles/rcos-templates/layer-6/version-history)** — zeichne auf, wie und warum sich die Regeln im Laufe der Zeit geändert haben.
- **[Operations Manual](/articles/rcos-templates/layer-5/operations-manual)** — halte operatives Wissen aus einzelnen Köpfen heraus.

Siehe auch die Spezifikation: [Schicht 6 — Lern- und Feedback-Erfassung](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#84-learning-and-feedback-capture) und [Schicht 5 — Dokumentation und Informationsfluss](/articles/rcos-core/v0-1/layer-5-operations-coordination#73-documentation-and-information-flow).

### Wenn es bereits passiert

Wenn die Gemeinschaft ihre Vergangenheit immer wieder durchlebt, beginne jetzt mit einem Gedächtnis:

1. **Starte heute ein Learning Log** — selbst ein laufendes Dokument schlägt das Gedächtnis.
2. **Hole die großen Lektionen nachträglich ein,** die die Langzeit-Mitglieder mit sich tragen, bevor sie gehen.
3. **Mache ein kurzes Entscheidungsprotokoll zum Standardschritt,** damit die Begründung später abrufbar bleibt.

### Was dieser Fehler oft auslöst

- **[Rapid Growth without Onboarding](/articles/rcos-stress-tests/operations-coordination/rapid-growth-without-onboarding)** — ohne festgehaltenes Wissen können Neulinge nicht auf den Stand gebracht werden.
- **[Invisible Power via Responsibilities](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — wenn Wissen nur in Köpfen lebt, werden diese Köpfe unverzichtbar.

### Verwandte Stresstests

- **[Irreversible Experiments](/articles/rcos-stress-tests/change-emergencies/irreversible-experiments)** — nicht festgehaltenes Lernen ist das, was Experimente — ob reversibel oder nicht — nichts lehren lässt.
