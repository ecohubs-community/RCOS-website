---
id: 65cde9a1
title: Unsichtbare Macht durch Zuständigkeiten
summary: >-
  Wenn eine unverzichtbare Person zum Single Point of Failure wird — und zur
  informellen Macht.
parentId: a9e4c65d
order: 1
severity: high
stage:
  - growth
  - mature
layers:
  - 5
  - 2
  - 3
invariants:
  - '5.1'
  - '5.2'
  - '3.4'
remediationReady: true
tags:
  - 'Layer 5: Operations'
  - High severity
symptoms:
  - >-
    Eine Person "kümmert sich einfach" um etwas Kritisches (die Finanzen, die
    Website, die Schlüssel, die Beziehungen) und niemand sonst weiß, wie es
    geht.
  - Aufgaben und Zugänge haben sich über Jahre informell bei ihr angesammelt.
  - 'Die Gemeinschaft wäre gelähmt, wenn sie ginge oder ausbrennen würde.'
  - >-
    Ihr Einfluss auf Entscheidungen ist mit ihrer Unverzichtbarkeit gewachsen,
    ohne jede formelle Autorität.
  - 'Für das, was sie tut, existiert keine Dokumentation.'
preventsWith:
  - rcos-templates/layer-5/role-registry
  - rcos-templates/layer-2/authority-registry
  - rcos-templates/layer-5/operations-manual
cascade:
  - test: rcos-stress-tests/governance-power/founder-informal-veto
    relation: enables
    note: >-
      Undokumentierte Unverzichtbarkeit wird zum ungeschriebenen Veto: Alles
      läuft über eine Person.
  - test: rcos-stress-tests/governance-power/informal-clique-decision-making
    relation: enables
    note: 'Die wenigen, die alles erledigen, werden zu den faktischen Entscheidern.'
related:
  - rcos-stress-tests/operations-coordination/invisible-care-labor-burnout
  - >-
    rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution
lang: de
sourceHash: 9c853ccb
---

> **Schweregrad:** Hoch — ein Single Point of Failure, der zugleich ein Single Point unkontrollierter Macht ist.
> **Wo es weh tut:** In der Wachstums- und reifen Phase, nachdem sich Zuständigkeiten leise angesammelt haben.
> **Schon mittendrin?** Spring zu [Wenn es bereits passiert](#wenn-es-bereits-passiert).

### Kommt dir das bekannt vor?

Da ist jemand, der "sich einfach kümmert" — um das Geld. Oder um die Website, den Papierkram, die Beziehungen zu den Nachbarn, die Schlüssel zu allem. Es begann vor Jahren als Hilfsbereitschaft und wuchs, eine stille Aufgabe nach der anderen, bis die Gemeinschaft heute eine Woche ohne diese Person tatsächlich nicht funktionieren könnte. Ihr wurde nie Autorität übertragen — aber alles läuft über sie, also entscheidet ihre Meinung in der Praxis. Und nichts von dem, was sie tut, ist irgendwo aufgeschrieben.

### Zeichen, dass es dir gerade passiert

- Eine Person "kümmert sich einfach" um etwas Kritisches und niemand sonst weiß, wie es geht.
- Aufgaben und Zugänge haben sich über Jahre informell bei ihr angesammelt.
- Die Gemeinschaft wäre gelähmt, wenn sie ginge oder ausbrennen würde.
- Ihr Einfluss auf Entscheidungen ist mit ihrer Unverzichtbarkeit gewachsen, ohne jede formelle Autorität.
- Für das, was sie tut, existiert keine Dokumentation.

**Das ist _nicht_ dasselbe wie** jemand, der eine definierte Rolle mit dokumentierten Prozessen und Nachfolge innehat. Das Erkennungsmerkmal ist *personengebundene, undokumentierte, unersetzliche Funktion* — Macht, die wuchs, ohne dass irgendjemand sie übertragen hätte.

### Warum es passiert

Kompetenz plus Bequemlichkeit konzentriert Arbeit: Wer eine Sache gut macht, bekommt sie immer wieder zugeschoben, und es ist immer einfacher, sie machen zu lassen, als zu dokumentieren und zu teilen. Mit der Zeit wird aus undokumentierter Verantwortung informelle Autorität — die Person prägt Entscheidungen, weil alles durch sie hindurchgeht — und die Kontinuität der Gemeinschaft hängt heimlich an einer einzelnen Person, die niemals wirklich gehen kann.

<details data-kind="rationale">
<summary>Der formale Stresstest (für Prüfende)</summary>

**Failure Mode** — Ein Mitglied sammelt schrittweise undokumentierte Zuständigkeiten an und wird unverzichtbar.

**Beteiligte Schichten** — Schicht 5 (Operations), Schicht 2 (Governance), Schicht 3 (Ökonomie)

**Relevante Invarianten**

* 5.1 Rollen MÜSSEN definiert sein
* 5.2 Operatives Wissen ist dokumentiert
* 3.4 Keine unbegrenzte Akkumulation interner Macht

**Testbedingung** — Aufgaben und Autorität sind personengebunden, undokumentiert und unersetzlich.

**Erwartetes RCOS-Verhalten** — Zuständigkeiten MÜSSEN in Rollen formalisiert werden; Wissen MUSS dokumentiert sein; Rollenumfang, Amtszeit und Nachfolge werden durchgesetzt.

**Bestehenskriterium** — Keine einzelne Person hält undokumentierte systemkritische Macht.

**Fehlschlagskriterium** — Die Funktionsfähigkeit der Gemeinschaft hängt von informellen, unkontrollierbaren Rollen ab.

</details>

### Wie reif ist deine Gemeinschaft in diesem Punkt?

Bestanden/Nicht-bestanden ist für die Wirklichkeit zu grob — die meisten Gemeinschaften sind irgendwo dazwischen. Finde deine Stufe und ziele auf die nächste.

| Stufe | Wie es aussieht |
|---|---|
| **L0 — Implizit** | Kritische Funktionen sind personengebunden und undokumentiert; eine Person ist stillschweigend unverzichtbar. |
| **L1 — Benannt** | Die Gruppe weiß, dass sie sich zu sehr auf jemanden verlässt, hat die Rolle aber weder formalisiert noch dokumentiert. |
| **L2 — Dokumentiert** | Zuständigkeiten sind benannte [Rollen](/articles/rcos-templates/layer-5/role-registry) mit Umfang, Amtszeit und Nachfolge; operatives Wissen ist niedergeschrieben. |
| **L3 — Durchgesetzt & geübt** | Keine einzelne Person hält undokumentierte systemkritische Macht; Rollen rotieren und wurden mindestens einmal erfolgreich übergeben. |

Die meisten Gemeinschaften, die sich hier wiedererkennen, stehen auf **L0 oder L1**. Das Ziel ist nicht Perfektion — es ist, eine Stufe weiterzukommen.

### Wie RCOS das verhindert

RCOS trennt das Tun der Arbeit vom Halten der Macht und holt beides aus dem Kopf einer einzelnen Person heraus:

- **[Rollenregister](/articles/rcos-templates/layer-5/role-registry)** — angesammelte Zuständigkeiten in benannte Rollen mit Umfang, Amtszeitbegrenzung und Nachfolge überführen.
- **[Autoritätsregister](/articles/rcos-templates/layer-2/authority-registry)** — "macht die Arbeit" von "hält Autorität" trennen, damit Unverzichtbarkeit nicht stillschweigend zu Macht wird.
- **[Operations-Handbuch](/articles/rcos-templates/layer-5/operations-manual)** — kritische Prozesse dokumentieren, damit keine Funktion nur in einem Kopf lebt.

Siehe auch die Spezifikation: [Schicht 5 — Rollen und Verantwortlichkeiten](/articles/rcos-core/v0-1/layer-5-operations-coordination#71-roles-and-responsibilities) und [Schicht 3 — Akkumulationsbeschränkungen](/articles/rcos-core/v0-1/layer-3-economic-resource-system#54-accumulation-constraints).

### Wenn es bereits passiert

Wenn eine Person ein Single Point of Failure ist, reduziere die Abhängigkeit, bevor sie bricht:

1. **Dokumentiere zuerst die Bus-Faktor-eins-Funktionen.** Bring das, was in ihrem Kopf ist, aufs Papier — beginne mit dem, was die Gemeinschaft bricht, falls sie verschwindet.
2. **Benenne die Rollen und füge eine Vertretung hinzu** für jede kritische Funktion.
3. **Lege Amtszeit und Nachfolge fest**, damit die Rolle rotiert, bevor sich die Abhängigkeit weiter vertieft.
4. **Achte auf die Kaskade** — informelle Unverzichtbarkeit ist der Weg, auf dem Cliquen und Gründer-ähnliche Vetos entstehen.

### Was dieser Fehler typischerweise auslöst

- **[Informelles Gründer-Veto](/articles/rcos-stress-tests/governance-power/founder-informal-veto)** — undokumentierte Unverzichtbarkeit wird zum ungeschriebenen Veto.
- **[Informelle Cliquen-Entscheidungsfindung](/articles/rcos-stress-tests/governance-power/informal-clique-decision-making)** — die wenigen, die "alles erledigen", werden zu den faktischen Entscheidern.

### Verwandte Stresstests

- **[Burnout durch unsichtbare Care-Arbeit](/articles/rcos-stress-tests/operations-coordination/invisible-care-labor-burnout)** — dieselbe Anhäufung, im beziehungs- und gefühlsbezogenen Bereich.
- **[Selbstgenügsamkeit ohne kollektiven Beitrag](/articles/rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution)** — schwaches kollektives Engagement ist es, was alles auf die unverzichtbaren wenigen leitet.
