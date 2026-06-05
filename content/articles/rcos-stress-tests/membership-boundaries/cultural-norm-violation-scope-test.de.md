---
id: 45a25135
title: Geltungsbereichs-Test für Verstöße gegen kulturelle Normen
summary: >-
  Wenn eine ungeschriebene Norm so bestraft wird, als wäre sie eine schriftliche
  Regel.
parentId: 45625035
order: 0
severity: medium
stage:
  - forming
  - growth
  - mature
layers:
  - 0
  - 1
  - 4
invariants:
  - '0.2'
  - '1.1'
  - '4.4'
remediationReady: true
tags:
  - 'Layer 0: Scope'
  - Medium severity
symptoms:
  - >-
    Ein Mitglied bricht eine starke ungeschriebene Norm (z.B. Fleisch essen in
    einer als vegan identifizierten Gemeinschaft), und die Reaktion ist
    emotional und improvisiert.
  - >-
    Es ist unklar, ob die Norm eine verbindliche Regel oder eine geteilte
    Präferenz ist.
  - >-
    Die Intensität der Durchsetzung hängt davon ab, wer verärgert ist, nicht von
    einer geschriebenen Regel.
  - >-
    Die Leute nehmen an, „alle wissen" das, aber die Norm wurde nie als
    Mitgliedschaftsbedingung erklärt.
  - >-
    Reaktionen reichen von Ausgrenzung bis Austrittsdruck, ohne ein faires
    Verfahren.
preventsWith:
  - rcos-templates/layer-0/scope-declaration
  - rcos-templates/layer-1/membership-agreement
  - rcos-templates/layer-0/identity-constraints-register
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: feeds
    note: >-
      Willkürliche, emotionale Durchsetzung bringt Mitgliedern bei, Verhalten zu
      verbergen statt offenzulegen.
related:
  - rcos-stress-tests/culture-influence/charismatic-spiritual-authority
lang: de
sourceHash: 08d99a95
---

> **Schweregrad:** Mittel — selten tödlich, erzeugt aber die härtesten, persönlichsten Konflikte.
> **Wo es beißt:** In jeder Phase; am stärksten in Gemeinschaften mit einer kraftvollen geteilten Identität.
> **Lebt ihr das bereits?** Springe zu [Wenn es schon passiert](#wenn-es-schon-passiert).

### Kommt euch das bekannt vor?

Die Gemeinschaft hat eine starke Identität — vegan, nüchtern, schweigend vor Mittag, was auch immer es ist — und alle „wissen einfach" die Norm. Dann bricht jemand sie. Plötzlich liegt eine Intensität in der Luft, die schwer zu benennen ist: Ist das ein Regelverstoß oder hat es einfach Leute aufgewühlt? Die Reaktion ist schnell und emotional, die Konsequenzen variieren je nachdem, wer am meisten beleidigt ist, und niemand kann darauf zeigen, wo genau diese Norm jemals als Bedingung für die Zugehörigkeit hier niedergeschrieben wurde.

### Anzeichen, dass euch das passiert

- Ein Mitglied bricht eine starke ungeschriebene Norm, und die Reaktion ist emotional und improvisiert.
- Es ist unklar, ob die Norm eine verbindliche Regel oder eine geteilte Präferenz ist.
- Die Intensität der Durchsetzung hängt davon ab, wer verärgert ist, nicht von einer geschriebenen Regel.
- Die Leute nehmen an, „alle wissen" das, aber die Norm wurde nie als Mitgliedschaftsbedingung erklärt.
- Reaktionen reichen von Ausgrenzung bis Austrittsdruck, ohne ein faires Verfahren.

**Das ist _nicht_ dasselbe wie** die Durchsetzung einer explizit erklärten Invariante oder Mitgliedschaftsbedingung. Das Erkennungszeichen ist *die Durchsetzung einer Norm, die nie als verbindlich geregelt aufgeschrieben wurde* — Bestrafung ohne explizite Regelgrundlage.

### Warum es passiert

Starke gemeinsame Kulturen erzeugen kraftvolle ungeschriebene Normen. Wenn sich etwas offensichtlich falsch anfühlt, setzt die Gruppe es durch, als wäre es Gesetz — aber wenn die Norm nie als Kerninvariante oder Mitgliedschaftsbedingung erklärt wurde, ist diese Durchsetzung ungeregelt: willkürlich, emotional getrieben und nicht anfechtbar. Der Schaden ist nicht die Norm selbst; es ist die Bestrafung von Menschen gegen Regeln, die formal nicht existieren.

<details data-kind="rationale">
<summary>Der formale Stresstest (für Prüfer:innen)</summary>

**Fehlermodus** — Ein Mitglied verletzt eine starke kulturelle Norm (z.B. Fleisch essen in einer veganen Gemeinschaft).

**Beteiligte Schichten** — Schicht 0 (Zweck & Geltungsbereich), Schicht 1 (Mitgliedschaft), Schicht 4 (Konflikt)

**Relevante Invarianten**

* 0.2 Expliziter geregelter Geltungsbereich
* 1.1 Keine impliziten Mitgliedschaftsregeln
* 4.4 Sicherheit hat Vorrang vor Teilhabe

**Testbedingung** — Ein Normverstoß tritt auf, und die Durchsetzungsreaktion ist unklar oder emotional getrieben.

**Erwartetes RCOS-Verhalten** — Bestimme, ob die Regel eine Kerninvariante, eine Mitgliedschaftsbedingung oder eine außerhalb des Geltungsbereichs liegende Präferenz ist; wende ein faires Verfahren nur an, wenn sie explizit geregelt ist.

**Bestehenskriterien** — Die Reaktion entspricht strikt dem erklärten Geltungsbereich und den Mitgliedschaftsregeln.

**Versagenskriterien** — Bestrafung oder Ausschluss ohne explizite Regelgrundlage.

</details>

### Wie reif ist eure Gemeinschaft in diesem Punkt?

Bestanden/nicht bestanden ist zu grob für das echte Leben — die meisten Gemeinschaften sind irgendwo dazwischen. Findet eure Sprosse und peilt dann die nächste an.

| Stufe | Wie es aussieht |
|---|---|
| **L0 — Implizit** | Starke Normen werden nach Gefühl durchgesetzt; niemand hat erklärt, was tatsächlich geregelt ist. |
| **L1 — Benannt** | Die Gruppe erkennt, dass einige Normen ungeschrieben sind, hat aber Regel und Präferenz noch nicht sortiert. |
| **L2 — Dokumentiert** | Eine [Geltungsbereichserklärung](/articles/rcos-templates/layer-0/scope-declaration) unterscheidet Kerninvarianten, Mitgliedschaftsbedingungen und außerhalb des Geltungsbereichs liegende Präferenzen; ein faires Verfahren gilt nur für geregelte Regeln. |
| **L3 — Durchgesetzt & geübt** | Reaktionen folgen dem erklärten Geltungsbereich; eine ungeschriebene Präferenz kann keine Bestrafung auslösen; das wurde an einem echten Verstoß getestet. |

Die meisten Gemeinschaften, die sich hier wiedererkennen, stehen auf **L0 oder L1**. Das Ziel ist nicht Perfektion — es ist, eine Sprosse höher zu kommen.

### Wie RCOS das verhindert

RCOS lässt die Gemeinschaft entscheiden, *was sie tatsächlich regelt*, bevor sie durchsetzt:

- **[Geltungsbereichserklärung](/articles/rcos-templates/layer-0/scope-declaration)** — sortiere jede wichtige Norm in Kerninvariante, Mitgliedschaftsbedingung oder außerhalb des Geltungsbereichs liegende Präferenz.
- **[Mitgliedschaftsvereinbarung](/articles/rcos-templates/layer-1/membership-agreement)** — mache verbindliche Verhaltensbedingungen beim Eintritt explizit, damit niemand überraschend bestraft wird.
- **[Register der Identitätsbedingungen](/articles/rcos-templates/layer-0/identity-constraints-register)** — erkläre, was die Identität der Gemeinschaft regelt und was nicht.

Siehe auch die Spezifikation: [Schicht 0 — Geltungsbereichserklärung](/articles/rcos-core/v0-1/layer-0-identity-scope#22-scope-declaration) und [Schicht 1 — Rechte und Pflichten](/articles/rcos-core/v0-1/layer-1-membership-system#34-rights-and-obligations).

### Wenn es schon passiert

Ein Verstoß ist gerade passiert, und die Reaktion ist erhitzt. Verlangsamt es:

1. **Pausiert die Durchsetzung.** Trennt „wir sind verärgert" von „eine geregelte Regel wurde gebrochen".
2. **Klassifiziert die Norm.** Ist sie eine erklärte Invariante, eine Mitgliedschaftsbedingung oder eine nicht erklärte Präferenz?
3. **Wendet ein faires Verfahren nur an, wenn es geregelt ist.** Wenn nicht, ist die Lehre, *es künftig zu erklären* (oder eben nicht), niemals rückwirkend zu bestrafen.
4. **Entscheidet vorwärts.** Wenn die Gemeinschaft will, dass diese Norm verbindlich ist, schreibt sie als explizite Mitgliedschaftsbedingung fest.

### Was dieses Versagen typischerweise auslöst

- **[Normalisierung von Konfliktvermeidung](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — willkürliche, emotionale Durchsetzung bringt Mitgliedern bei, Verhalten zu verbergen statt offenzulegen.

### Verwandte Stresstests

- **[Charismatische spirituelle Autorität](/articles/rcos-stress-tests/culture-influence/charismatic-spiritual-authority)** — verehrte Figuren sind oft diejenigen, deren Präferenzen als nicht erklärte Normen durchgesetzt werden.
