---
id: a9e2f4c7
title: Governance dringt in das Privatleben ein
summary: >-
  Wenn die Gemeinschaft keine erklärte Privatsphäre hat und deshalb alles
  regiert.
parentId: 45625035
order: 3
severity: medium
stage:
  - growth
  - mature
layers:
  - 0
  - 1
invariants:
  - '0.3'
  - '0.2'
remediationReady: true
tags:
  - 'Layer 0: Scope'
  - Medium severity
symptoms:
  - >-
    Gemeinschaftsnormen greifen in persönliche Entscheidungen ein — Ernährung,
    Beziehungen, Erziehung, Überzeugungen, Freizeit.
  - >-
    Es gibt keine erklärte Grenze zwischen dem, was die Gemeinschaft regiert,
    und dem, was niemanden etwas angeht.
  - >-
    Mitglieder fühlen sich beobachtet oder zensieren private Entscheidungen
    selbst, um in gutem Ansehen zu bleiben.
  - >-
    "Geht das die Gemeinschaft wirklich etwas an?" wird zwar gefragt, aber nie
    geklärt.
  - >-
    Uneinigkeit in einer persönlichen Angelegenheit wird als Illoyalität
    gegenüber der Gruppe gewertet.
preventsWith:
  - rcos-templates/layer-0/scope-declaration
  - rcos-templates/layer-0/identity-constraints-register
  - rcos-templates/layer-1/membership-agreement
cascade:
  - test: rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test
    relation: enables
    note: >-
      Ohne einen nicht-regierten Bereich kann jede persönliche Entscheidung zu
      einer durchsetzbaren Norm werden.
  - test: rcos-stress-tests/culture-influence/charismatic-spiritual-authority
    relation: enables
    note: >-
      Eine totalisierende Gemeinschaft ist fruchtbarer Boden für eine
      unanfechtbare moralische Autorität.
related:
  - rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test
lang: de
sourceHash: 33f14866
---

> **Schweregrad:** Mittel — zersetzend für das Zugehörigkeitsgefühl; treibt zu stiller Selbstzensur und schließlich zum Austritt.
> **Wo es zubeißt:** Wachstums- und Reifephase, in Gemeinschaften mit einer starken gemeinsamen Identität.
> **Lebst du das gerade?** Spring zu [Wenn es bereits passiert](#wenn-es-bereits-passiert).

### Kommt dir das bekannt vor?

Die geteilten Werte sind echt und gut — und langsam haben sie sich ausgedehnt, bis sie fast alles abdecken. Was du isst, mit wem du eine Beziehung führst, wie du deine Kinder erziehst, was du glaubst, wie du einen freien Nachmittag verbringst: irgendwie ist das alles zu einer Sache der Gemeinschaftsmeinung geworden. Niemand hat beschlossen, das Privatleben der Mitglieder zu regieren; es ist einfach nach außen gekrochen, eine wohlmeinende Norm nach der anderen. Jetzt feilen die Leute leise an sich selbst, um in gutem Ansehen zu bleiben, und die Frage „Geht das die Gemeinschaft wirklich etwas an?" hängt in der Luft, gestellt, aber nie beantwortet.

### Anzeichen, dass dir das passiert

- Gemeinschaftsnormen greifen in persönliche Entscheidungen ein — Ernährung, Beziehungen, Erziehung, Überzeugungen, Freizeit.
- Es gibt keine erklärte Grenze zwischen dem, was die Gemeinschaft regiert, und dem, was niemanden etwas angeht.
- Mitglieder fühlen sich beobachtet oder zensieren private Entscheidungen selbst, um in gutem Ansehen zu bleiben.
- „Geht das die Gemeinschaft wirklich etwas an?" wird zwar gefragt, aber nie geklärt.
- Uneinigkeit in einer persönlichen Angelegenheit wird als Illoyalität gegenüber der Gruppe gewertet.

**Das ist _nicht_ dasselbe wie** eine tiefe, aber abgegrenzte geteilte Praxis, in die die Mitglieder sich ausdrücklich eingeklinkt haben. Das verräterische Zeichen ist die *Abwesenheit jeglichen erklärten nicht-regierten Raums* — sodass sich Governance grenzenlos ins Privatleben ausdehnen kann, weil nichts dagegen spricht.

### Warum es passiert

Starke gemeinsame Werte lassen fast alles wie eine Angelegenheit der Gemeinschaft erscheinen, und ohne eine ausdrückliche Grenze „dies wird nicht regiert" kriecht der Geltungsbereich standardmäßig nach außen. Jede kleine Ausweitung ist gut gemeint; in Summe produzieren sie ein totalisierendes Umfeld ohne verbleibendes privates Selbst — was stillen Groll, Selbstzensur und jene Art von Abschied erzeugt, bei dem jemand einfach nur atmen muss.

<details data-kind="rationale">
<summary>Der formale Stresstest (für Prüferinnen und Prüfer)</summary>

**Fehlermodus** — Governance dehnt sich ohne erklärte Grenze in das Privatleben der Mitglieder aus.

**Beteiligte Schichten** — Schicht 0 (Identität & Geltungsbereich), Schicht 1 (Mitgliedschaft)

**Relevante Invarianten**

* 0.3 Erklärter nicht-regierter Raum
* 0.2 Expliziter regierter Geltungsbereich

**Testbedingung** — Persönliche Angelegenheiten unterliegen Gemeinschaftsnormen, ohne dass eine erklärte Außer-Geltungs-Sphäre existiert.

**Erwartetes RCOS-Verhalten** — Ein nicht-regierter Raum wird ausdrücklich erklärt; Angelegenheiten außerhalb dieses Raums können keine Sanktionen auslösen.

**Bestehenskriterien** — Governance bleibt innerhalb des erklärten Geltungsbereichs; eine Privatsphäre wird geschützt.

**Versagenskriterien** — Der Geltungsbereich kriecht grenzenlos in das Privatleben.

</details>

### Wie reif ist deine Gemeinschaft in dieser Hinsicht?

Bestanden/Nicht bestanden ist für das echte Leben zu grob — die meisten Gemeinschaften sind irgendwo dazwischen. Finde deine Sprosse und ziele dann auf die nächste.

| Stufe | Wie es aussieht |
|---|---|
| **L0 — Implizit** | Keine erklärte Privatsphäre; Normen dehnen sich ungebremst ins Privatleben aus. |
| **L1 — Benannt** | Die Gruppe bemerkt das Übergreifen, hat aber keine nicht-regierte Grenze gezogen. |
| **L2 — Dokumentiert** | Eine [Scope Declaration](/articles/rcos-templates/layer-0/scope-declaration) benennt ausdrücklich, was außerhalb des Geltungsbereichs liegt — die geschützte Privatsphäre. |
| **L3 — Durchgesetzt & geprobt** | Governance bleibt innerhalb des erklärten Geltungsbereichs; persönliche Angelegenheiten außerhalb können keine Sanktionen auslösen; das hat sich in einem realen Fall bewährt. |

Die meisten Gemeinschaften, die sich hier wiedererkennen, stehen auf **L0 oder L1**. Das Ziel ist nicht Perfektion — sondern eine Sprosse höher zu kommen.

### Wie RCOS das verhindert

RCOS verlangt, zu erklären, was die Gemeinschaft *nicht* regiert:

- **[Scope Declaration](/articles/rcos-templates/layer-0/scope-declaration)** — erkläre ausdrücklich, was die Gemeinschaft NICHT regiert (Invariante 0.3).
- **[Identity Constraints Register](/articles/rcos-templates/layer-0/identity-constraints-register)** — begrenze die Reichweite der Gemeinschaft in das Leben der Mitglieder.
- **[Membership Agreement](/articles/rcos-templates/layer-1/membership-agreement)** — mache die eingewilligte geteilte Praxis explizit, und alles andere standardmäßig privat.

Siehe auch die Spezifikation: [Schicht 0 — Scope Declaration](/articles/rcos-core/v0-1/layer-0-identity-scope#22-scope-declaration) und [Identity Constraints](/articles/rcos-core/v0-1/layer-0-identity-scope#24-identity-constraints).

### Wenn es bereits passiert

Wenn Governance ins Privatleben gekrochen ist, zieh die Linie zurück:

1. **Benennt das Übergreifen.** Listet auf, wo Normen ins Privatleben hineingereicht haben.
2. **Erklärt eine nicht-regierte Sphäre.** Schreibt auf, was ausdrücklich niemanden etwas angeht.
3. **Definiert die Durchsetzung neu**, sodass persönliche Angelegenheiten jenseits der Linie das Ansehen nicht beeinflussen können.

### Was dieser Fehler typischerweise auslöst

- **[Cultural Norm Violation Scope Test](/articles/rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test)** — ohne einen nicht-regierten Bereich kann jede persönliche Entscheidung zu einer durchsetzbaren Norm werden.
- **[Charismatic Spiritual Authority](/articles/rcos-stress-tests/culture-influence/charismatic-spiritual-authority)** — eine totalisierende Gemeinschaft ist fruchtbarer Boden für eine unanfechtbare moralische Autorität.

### Verwandte Stresstests

- **[Cultural Norm Violation Scope Test](/articles/rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test)** — das Durchsetzungsereignis; dieser Test ist die fehlende Grenze, die es überhaupt erst möglich macht.
