---
id: 8c2d5f13
title: Burnout durch unsichtbare Fürsorgearbeit
summary: >-
  Wenn die Gemeinschaft von der unbezahlten Fürsorge weniger, still erschöpfter
  Menschen getragen wird.
parentId: a9e4c65d
order: 0
severity: high
stage:
  - growth
  - mature
layers:
  - 3
  - 5
invariants:
  - '3.3'
  - '5.3'
remediationReady: true
tags:
  - 'Layer 5: Operations'
  - High severity
symptoms:
  - >-
    Ein oder zwei Personen halten das emotionale Leben der Gemeinschaft zusammen
    — und sie sind erschöpft.
  - >-
    Fürsorgearbeit (nachfragen, vermitteln, gastgeben, Neuankömmlinge willkommen
    heißen) ist essenziell, aber unsichtbar und unbezahlt.
  - 'Wenn eine bestimmte Person gehen würde, würde das soziale Gefüge zerreißen.'
  - >-
    Diese Arbeit taucht in keiner Rolle, keinem Budget und keinem
    Anerkennungssystem auf.
  - >-
    Die Menschen, die sie leisten, sind still verbittert oder kurz davor zu
    gehen.
preventsWith:
  - rcos-templates/layer-5/role-registry
  - rcos-templates/layer-3/internal-economy-protocol
  - rcos-templates/layer-5/operations-manual
cascade:
  - test: >-
      rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
    relation: enables
    note: >-
      Die Person, ohne die die Gemeinschaft nicht funktionieren kann, wird
      strukturell unverzichtbar und unverantwortlich.
related:
  - >-
    rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution
lang: de
sourceHash: 89ca71da
---

> **Schweregrad:** Hoch — unsichtbar, bis die tragende Person ausbrennt oder geht, dann existenziell.
> **Wo es beißt:** Wachstums- und reife Phasen, sobald sich relationale Last angesammelt hat.
> **Schon mittendrin?** Spring zu [Wenn es bereits passiert](#wenn-es-bereits-passiert).

### Kommt dir das bekannt vor?

Da ist eine Person — vielleicht zwei — die still alles zusammenhält. Sie merken, wenn jemand kämpft, glätten Konflikte, richten die Abendessen aus, denken an Geburtstage, heißen die Neuankömmlinge willkommen. Nichts davon steht in ihrer Stellenbeschreibung, weil es keine Stellenbeschreibung gibt. Die Gemeinschaft fühlt sich warm und verbunden an, und fast niemand bemerkt, dass diese Wärme von ein paar Menschen erzeugt wird, die am Limit laufen — bis eine von ihnen, endgültig erschöpft, zurücktritt oder geht, und das gesamte soziale Gefüge zerreißt.

### Anzeichen, dass dir das passiert

- Ein oder zwei Personen halten das emotionale Leben der Gemeinschaft zusammen — und sie sind erschöpft.
- Fürsorgearbeit ist essenziell, aber unsichtbar und unbezahlt.
- Wenn eine bestimmte Person gehen würde, würde das soziale Gefüge zerreißen.
- Diese Arbeit taucht in keiner Rolle, keinem Budget und keinem Anerkennungssystem auf.
- Die Menschen, die sie leisten, sind still verbittert oder kurz davor zu gehen.

**Das ist _nicht_ dasselbe wie** Menschen, die freiwillig Fürsorge geben, die ihnen sinnvoll erscheint. Das verräterische Zeichen ist *strukturelle Abhängigkeit* — die Gemeinschaft würde ohne unsichtbare Arbeit zerbrechen, die niemand benannt, begrenzt oder anerkannt hat.

### Warum es passiert

Fürsorge und emotionale Arbeit sind leicht zu übersehen, gerade weil sie Probleme verhindern, statt sichtbaren Output zu erzeugen. Weil sie selten benannt oder anerkannt wird, sammelt sie sich bei denjenigen an, die am feinfühligsten sind — meist denselben wenigen Menschen — bis sie ausbrennen. Die Abhängigkeit ist strukturell, auch wenn das Geben freiwillig ist: Das System hängt davon ab, aber das System würdigt es nie.

<details data-kind="rationale">
<summary>Der formale Stresstest (für Auditor:innen)</summary>

**Versagensmodus** — Bestimmte Mitglieder tragen unverhältnismäßig viel emotionale oder Fürsorgearbeit.

**Beteiligte Schichten** — Schicht 3 (Ökonomie), Schicht 5 (Operations)

**Relevante Invarianten**

* 3.3 Anerkennung von Beiträgen ist explizit
* 5.3 Zeit und Aufmerksamkeit sind endliche Ressourcen

**Testbedingung** — Fürsorgearbeit ist essenziell, aber undokumentiert und unbezahlt.

**Erwartetes RCOS-Verhalten** — Fürsorgearbeit wird anerkannt, reduziert oder umverteilt.

**Bestanden-Kriterium** — Keine strukturelle Abhängigkeit von unsichtbarer Arbeit.

**Durchgefallen-Kriterium** — Burnout wird normalisiert.

</details>

### Wie reif ist deine Gemeinschaft hierbei?

Bestanden/Durchgefallen ist für das echte Leben zu grob — die meisten Gemeinschaften sind irgendwo dazwischen. Finde deine Sprosse und ziele dann auf die nächste.

| Stufe | Wie es aussieht |
|---|---|
| **L0 — Implizit** | Fürsorgearbeit ist unsichtbar, unbenannt und wird standardmäßig von wenigen getragen. |
| **L1 — Benannt** | Die Gruppe erkennt, dass bestimmte Menschen überlastet sind, hat die Arbeit aber weder anerkannt noch umverteilt. |
| **L2 — Dokumentiert** | Fürsorge-Verantwortlichkeiten sind benannte [Rollen](/articles/rcos-templates/layer-5/role-registry), werden als Beitrag anerkannt und durch Arbeitslastgrenzen begrenzt. |
| **L3 — Durchgesetzt & geübt** | Keine strukturelle Abhängigkeit von unsichtbarer Arbeit; Fürsorgearbeit wird anerkannt, begrenzt und rotiert; Kapazitätsgrenzen werden respektiert. |

Die meisten Gemeinschaften, die sich hier wiedererkennen, stehen bei **L0 oder L1**. Das Ziel ist nicht Perfektion — es geht darum, eine Sprosse hochzuklettern.

### Wie RCOS das verhindert

RCOS macht unsichtbare Arbeit sichtbar, begrenzt und geteilt:

- **[Rollenregister](/articles/rcos-templates/layer-5/role-registry)** — benenne Fürsorge- und Beziehungs-Verantwortlichkeiten als echte Rollen, mit Rotation und Grenzen.
- **[Internes Ökonomie-Protokoll](/articles/rcos-templates/layer-3/internal-economy-protocol)** — erkenne Fürsorge als Beitrag an, damit sie sichtbar und wertgeschätzt wird, statt vorausgesetzt.
- **[Operations-Handbuch](/articles/rcos-templates/layer-5/operations-manual)** — begrenze Arbeitslast, damit essenzielle Arbeit nicht stillschweigend bei einer einzelnen Person landet.

Siehe auch die Spezifikation: [Schicht 5 — Arbeitslast- und Kapazitätsgrenzen](/articles/rcos-core/v0-1/layer-5-operations-coordination#74-workload-and-capacity-boundaries) und [Schicht 3 — Anerkennung von Beiträgen](/articles/rcos-core/v0-1/layer-3-economic-resource-system#52-contribution-recognition).

### Wenn es bereits passiert

Wenn deine Gemeinschaft auf jemandes letzten Reserven läuft, handle bevor diese Person geht:

1. **Mach es sichtbar.** Liste die Fürsorgearbeit auf, die tatsächlich passiert, und wer sie macht. Sie zu benennen ist die halbe Lösung.
2. **Erkenne sie jetzt an.** Bewerte sie explizit als Beitrag; unsichtbare Arbeit ist das, was Menschen ausbrennt.
3. **Verteile um und begrenze.** Rotiere die Rollen und setze Kapazitätsgrenzen, bevor die Schlüsselperson ihr Limit erreicht.
4. **Beobachte die Kaskade** — die unverzichtbare Pflegeperson sammelt auch unsichtbare Macht und steuert auf einen Burnout-bedingten Ausstieg zu.

### Was dieses Versagen meist auslöst

- **[Unsichtbare Macht durch Verantwortlichkeiten](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — die Person, ohne die die Gemeinschaft nicht funktionieren kann, wird strukturell unverzichtbar und unverantwortlich.

### Verwandte Stresstests

- **[Selbstgenügsamkeit ohne kollektiven Beitrag](/articles/rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution)** — das Spiegelbild: Wenn sich die meisten Mitglieder zurückziehen, sind es die wenigen Engagierten, die ausbrennen.
