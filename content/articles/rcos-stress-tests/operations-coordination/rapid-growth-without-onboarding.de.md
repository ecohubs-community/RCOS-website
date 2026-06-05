---
id: 9d3e6a24
title: Schnelles Wachstum ohne Onboarding
summary: >-
  Wenn die Gemeinschaft schneller wächst, als sie irgendjemanden integrieren
  kann.
parentId: a9e4c65d
order: 2
severity: high
stage:
  - growth
layers:
  - 1
  - 5
invariants:
  - '1.1'
  - '5.2'
remediationReady: true
tags:
  - 'Layer 1: Membership'
  - High severity
symptoms:
  - 'Die Gemeinschaft wächst schneller, als sie Menschen integrieren kann.'
  - >-
    Neue Mitglieder erhalten Zugang und Rechte ohne klaren Eintrittsprozess oder
    Probezeit.
  - >-
    Neuankömmlinge kennen weder die Normen noch die Geschichte noch die Art, wie
    Entscheidungen getroffen werden — und niemand hat die Aufgabe, es ihnen
    beizubringen.
  - >-
    "Wer hat eigentlich entschieden, sie aufzunehmen?" ist schwer zu
    beantworten.
  - >-
    Die Kultur fühlt sich an, als würde sie sich verdünnen oder zersplittern, je
    mehr Menschen dazukommen.
preventsWith:
  - rcos-templates/layer-1/onboarding-protocol
  - rcos-templates/layer-1/membership-agreement
  - rcos-templates/layer-1/membership-state-registry
cascade:
  - test: rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test
    relation: enables
    note: >-
      Neuankömmlinge, die die Normen nie gelernt haben, kollidieren mit ihnen
      und lösen improvisierte Durchsetzung aus.
  - test: >-
      rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
    relation: feeds
    note: >-
      Im Integrationschaos halten ein paar wenige Menschen alles informell
      zusammen.
related:
  - >-
    rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution
lang: de
sourceHash: 465078de
---

> **Schweregrad:** Hoch — verdünnt Kultur und Governance lautlos, durch Anhäufung statt durch Entscheidung.
> **Wo es beißt:** In der Wachstumsphase, besonders nach einem Schub an Interesse oder Aufmerksamkeit.
> **Lebt ihr das schon?** Spring zu [Wenn es bereits passiert](#wenn-es-bereits-passiert).

### Kommt dir das bekannt vor?

Das Interesse boomt. Menschen wollen rein, und ja zu sagen fühlt sich wunderbar an — es sieht aus, als würde alles funktionieren. Neue Gesichter tauchen auf, bekommen Schlüssel und Logins und Stimmrecht, kommen in den Chat. Aber es gibt keinen echten Eintrittsprozess, keine Probezeit, niemanden, dessen Aufgabe es ist, sie durch die Geschichte, die Normen und die tatsächliche Entscheidungsfindung zu führen. Ein Jahr später ist die Gemeinschaft doppelt so groß und irgendwie weniger sie selbst: Die gemeinsame Kultur ist dünn geworden, und niemand kann so recht sagen, wann das passiert ist.

### Anzeichen, dass es dich trifft

- Die Gemeinschaft wächst schneller, als sie Menschen integrieren kann.
- Neue Mitglieder erhalten Zugang und Rechte ohne klaren Eintrittsprozess oder Probezeit.
- Neuankömmlinge kennen weder die Normen noch die Geschichte noch die Art, wie Entscheidungen getroffen werden — und niemand hat die Aufgabe, es ihnen beizubringen.
- "Wer hat eigentlich entschieden, sie aufzunehmen?" ist schwer zu beantworten.
- Die Kultur fühlt sich an, als würde sie sich verdünnen oder zersplittern, je mehr Menschen dazukommen.

**Das ist _nicht_ dasselbe wie** absichtliches, gut ausgestattetes schnelles Wachstum mit einer echten Onboarding-Pipeline. Das verräterische Zeichen sind *Rechte ohne Prozess* — Menschen werden Mitglied, indem sie auftauchen, und Integration wird dem Zufall überlassen.

### Warum es passiert

Wachstum fühlt sich wie Erfolg an, also sagen Gemeinschaften schneller ja, als sie absorbieren können. Ohne formalen Eintrittsprozess wird Mitgliedschaft implizit — niemand kann genau sagen, wer dazugehört oder warum — und ohne Onboarding wird operatives und kulturelles Wissen nie weitergegeben. Das Ergebnis ist stille Verdünnung: Governance und Kultur erodieren nicht durch eine Entscheidung, sondern durch das stetige Hinzukommen nicht-integrierter Mitglieder.

<details data-kind="rationale">
<summary>Der formale Stresstest (für Prüfende)</summary>

**Fehlermodus** — Neue Mitglieder treten ohne Onboarding oder Probezeit bei.

**Beteiligte Schichten** — Schicht 1 (Mitgliedschaft), Schicht 5 (Operations)

**Relevante Invarianten**

* 1.1 Keine implizite Mitgliedschaft
* 5.2 Operatives Wissen ist dokumentiert

**Testbedingung** — Mitglieder erhalten Rechte ohne formalen Eintrittsprozess.

**Erwartetes RCOS-Verhalten** — Verpflichtendes Onboarding und Probezeit werden durchgesetzt.

**Bestehenskriterien** — Mitgliedschaftsstatus ist jederzeit explizit.

**Versagenskriterien** — Kultur und Governance verdünnen sich lautlos.

</details>

### Wie reif ist eure Gemeinschaft hier?

Bestanden/Durchgefallen ist für die Realität zu grob — die meisten Gemeinschaften stehen irgendwo dazwischen. Find eure Stufe und ziel auf die nächste.

| Stufe | Wie es aussieht |
|---|---|
| **L0 — Implizit** | Menschen werden Mitglied, indem sie auftauchen; kein Eintrittsprozess, kein Onboarding. |
| **L1 — Benannt** | Die Gruppe spürt die Verdünnung, hat aber keine Eintritts-/Probezeit-Pipeline aufgebaut. |
| **L2 — Dokumentiert** | Ein definierter [Onboarding- und Probezeit-Prozess](/articles/rcos-templates/layer-1/onboarding-protocol) regelt die Mitgliedschaft; Zustände werden in einem [Register](/articles/rcos-templates/layer-1/membership-state-registry) erfasst. |
| **L3 — Durchgesetzt & geübt** | Mitgliedschaftsstatus ist jederzeit explizit; jede:r Neuankömmling durchläuft Onboarding; das Wachstumstempo wird an die Integrationskapazität angepasst. |

Die meisten Gemeinschaften, die sich hier wiedererkennen, sitzen auf **L0 oder L1**. Das Ziel ist nicht Perfektion — es ist eine Stufe nach oben.

### Wie RCOS das verhindert

RCOS sorgt dafür, dass Rechte der Integration folgen, nicht der Ankunft:

- **[Onboarding-Protokoll](/articles/rcos-templates/layer-1/onboarding-protocol)** — ein verpflichtender Eintritts- und Probezeitpfad, damit Kultur und Wissen tatsächlich weitergegeben werden.
- **[Mitgliedschaftsvereinbarung](/articles/rcos-templates/layer-1/membership-agreement)** — die Bedingungen der Mitgliedschaft beim Eintritt explizit machen.
- **[Mitgliedschaftszustands-Register](/articles/rcos-templates/layer-1/membership-state-registry)** — jederzeit wissen, wer in Probezeit, vollwertig oder ausgetreten ist.

Siehe auch die Spezifikation: [Schicht 1 — Eintritt und Onboarding](/articles/rcos-core/v0-1/layer-1-membership-system#32-entry-and-onboarding) und [Mitgliedschaftszustände](/articles/rcos-core/v0-1/layer-1-membership-system#31-membership-states).

### Wenn es bereits passiert

Wenn das Wachstum die Integration schon überholt hat, drossle die Aufnahme und hol nach:

1. **Aufnahme pausieren oder drosseln**, bis ein Onboarding-Pfad existiert — Integrationskapazität ist die echte Grenze, nicht Begeisterung.
2. **Jetzt Mitgliedschaftszustände definieren** und alle einem zuordnen; die Mehrdeutigkeit ist das Kernversagen.
3. **Onboarding für kürzlich Beigetretene nachholen** — die Normen und das operative Wissen weitergeben, die sie verpasst haben.
4. **Die Kaskade beobachten** — nicht-integriertes Wachstum nährt Zusammenstöße mit unausgesprochenen Normen und Lücken unsichtbarer Macht.

### Was dieses Versagen typischerweise auslöst

- **[Kultureller Normbruch — Reichweitentest](/articles/rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test)** — Neuankömmlinge, die die Normen nie gelernt haben, kollidieren mit ihnen.
- **[Unsichtbare Macht über Verantwortlichkeiten](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — im Chaos halten ein paar wenige Menschen alles informell zusammen.

### Verwandte Stresstests

- **[Selbstversorgung ohne kollektiven Beitrag](/articles/rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution)** — nicht-onboardete Mitglieder lernen nie, dass die Allmende auch ihnen zur Pflege anvertraut ist.
