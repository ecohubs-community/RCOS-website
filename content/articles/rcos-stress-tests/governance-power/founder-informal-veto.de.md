---
id: 9e4c3b21
title: Informelles Veto der Gründerin
summary: >-
  Wenn das leise Nein der Gründerin immer noch entscheidet, obwohl ihr nichts
  auf dem Papier dieses Recht gibt.
parentId: 7f25f268
order: 1
severity: high
stage:
  - forming
  - growth
  - mature
layers:
  - 2
  - 0
invariants:
  - '2.2'
  - '2.3'
remediationReady: true
tags:
  - 'Layer 2: Governance'
  - High severity
symptoms:
  - >-
    Entscheidungen werden formal von der Gruppe getroffen, aber nichts geht
    voran, wenn die Gründerin nicht zustimmt.
  - >-
    Menschen klären Ideen vorab mit der Gründerin ab, bevor sie diese formal
    einbringen.
  - >-
    "Es ist eigentlich ihr Projekt" ist eine verbreitete, unwidersprochene
    Haltung.
  - >-
    Auf dem Papier existiert ein formaler Prozess, der in der Praxis
    stillschweigend übergangen wird.
  - >-
    Kein Dokument hält fest, was die Gründerin allein entscheiden darf und was
    nicht.
preventsWith:
  - rcos-templates/layer-2/authority-registry
  - rcos-templates/layer-2/decision-matrix
  - rcos-templates/layer-2/governance-protocol
cascade:
  - test: rcos-stress-tests/culture-influence/charismatic-spiritual-authority
    relation: enables
    note: >-
      Unbegrenzter Einfluss der Gründerin verschwimmt mit Charisma, das an die
      Stelle von Governance tritt.
  - test: rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent
    relation: enables
    note: >-
      Eine informelle Autorität wird zu derjenigen, die unter Druck die Regeln
      umgeht.
  - test: rcos-stress-tests/governance-power/informal-clique-decision-making
    relation: enables
    note: Der innere Kreis der Gründerin wird zum eigentlichen Entscheidungsgremium.
related:
  - rcos-stress-tests/governance-power/dominant-speakers-decision-spaces
lang: de
sourceHash: 52fea020
---

> **Schweregrad:** Hoch — die Verfassung wird zur Inszenierung, wenn eine Person sie still übergehen kann.
> **Wo es weh tut:** In jeder Phase, am stärksten aber in den von der Gründerin geprägten Jahren, bevor Autorität klar begrenzt ist.
> **Lebst du das schon?** Spring zu [Wenn es bereits passiert](#wenn-es-bereits-passiert).

### Kommt dir das bekannt vor?

Ihr habt Prozesse. Ihr habt Abstimmungen. Und trotzdem wissen alle: Wenn die Gründerin unzufrieden ist, passiert die Sache nicht. Niemand nennt es Veto — die Gründerin muss selten überhaupt Nein sagen, weil Menschen Ideen leise vorklären, Vorschläge abmildern oder sie fallen lassen, bevor sie überhaupt im Raum ankommen. Die Governance ist auf dem Papier real und in der Praxis gewichtslos, weil die Vorliebe einer einzigen Person still über allem steht.

### Anzeichen, dass es dir genauso geht

- Entscheidungen werden formal von der Gruppe getroffen, aber nichts geht voran, wenn die Gründerin nicht zustimmt.
- Menschen klären Ideen vorab mit der Gründerin ab, bevor sie diese formal einbringen.
- "Es ist eigentlich ihr Projekt" ist eine verbreitete, unwidersprochene Haltung.
- Auf dem Papier existiert ein formaler Prozess, der in der Praxis stillschweigend übergangen wird.
- Kein Dokument hält fest, was die Gründerin allein entscheiden darf und was nicht.

**Das ist _nicht_ dasselbe wie** eine Gründerin, die eine ausdrückliche, dokumentierte Rolle mit klar definierter Autorität innehat. Das verräterische Zeichen ist ein Veto, das *real, aber ungeschrieben* ist — Macht, die alle spüren und die keine Regel verleiht.

### Warum es passiert

Gründerinnen tragen die Vision, die Geschichte und die meisten Beziehungen, deshalb behalten ihre Vorlieben unverhältnismäßiges Gewicht, lange nachdem formale Governance existiert. Wird dieses Gewicht nie schriftlich begrenzt, zensiert sich die Gruppe selbst darum herum: Die Gründerin muss kaum je ein Veto ausüben, weil niemand jemals ein Ja erzwingt. Charisma und Dankbarkeit übertrumpfen still die Verfassung — bis zu dem Tag, an dem sie in Konflikt geraten und die Verfassung verliert.

<details data-kind="rationale">
<summary>Der formale Stresstest (für Prüfer:innen)</summary>

**Fehlermodus** — Die Gründerin behält trotz formaler Prozesse ein faktisches Veto.

**Beteiligte Schichten** — Schicht 2 (Governance), Schicht 0 (Invarianten)

**Relevante Invarianten**

* 2.2 Autorität MUSS explizit sein
* 2.3 Verfassungsregeln stehen über Einzelpersonen

**Testbedingung** — Entscheidungen werden von der Gründerin informell außer Kraft gesetzt.

**Erwartetes RCOS-Verhalten** — Die Autorität der Gründerin MUSS formalisiert oder entfernt werden; Entscheidungen folgen einer vereinbarten Entscheidungsmatrix.

**Bestehenskriterien** — Die Macht der Gründerin ist begrenzt und dokumentiert.

**Versagenskriterien** — Charisma ersetzt Governance.

</details>

### Wie reif ist eure Gemeinschaft in diesem Punkt?

Bestanden/durchgefallen ist für das echte Leben zu grob — die meisten Gemeinschaften stehen irgendwo dazwischen. Findet eure Stufe, und zielt dann auf die nächste.

| Stufe | Wie es aussieht |
|---|---|
| **L0 — Implizit** | Das informelle Veto der Gründerin ist real und unausgesprochen; der Prozess ist Theater drumherum. |
| **L1 — Benannt** | Die Gruppe gibt zu, dass die Gründerin überproportionale Macht hat, hat sie aber nicht begrenzt. |
| **L2 — Dokumentiert** | Die Autorität der Gründerin ist in einem [Autoritätsregister](/articles/rcos-templates/layer-2/authority-registry) und einer [Entscheidungsmatrix](/articles/rcos-templates/layer-2/decision-matrix) festgehalten — expliziter Geltungsbereich, explizite Grenzen. |
| **L3 — Durchgesetzt & geprobt** | Entscheidungen folgen der Matrix; die Rolle der Gründerin ist begrenzt und überprüfbar und hat sich auch gegen eine Entscheidung gehalten, der sie nicht zustimmte. |

Die meisten Gemeinschaften, die sich hier wiedererkennen, stehen auf **L0 oder L1**. Das Ziel ist nicht Perfektion — sondern eine Stufe weiter zu kommen.

### Wie RCOS das verhindert

RCOS macht jede Autorität explizit, auch die der Gründerin:

- **[Autoritätsregister](/articles/rcos-templates/layer-2/authority-registry)** — schreibt genau auf, welche Autorität jede Rolle (einschließlich der Gründerin) hat und welche nicht.
- **[Entscheidungsmatrix](/articles/rcos-templates/layer-2/decision-matrix)** — bindet Entscheidungen an einen vereinbarten Mechanismus, sodass niemand sie informell außer Kraft setzt.
- **[Governance-Protokoll](/articles/rcos-templates/layer-2/governance-protocol)** — legt fest, dass Verfassungsregeln über jeder Einzelperson stehen.

Siehe auch die Spezifikation: [Schicht 2 — Autoritätsgrenzen](/articles/rcos-core/v0-1/layer-2-governance-decision-logic#43-authority-boundaries).

### Wenn es bereits passiert

Du kannst keine Macht begrenzen, die du nicht benennen willst. Triage:

1. **Die echte Autorität benennen** — bringt die faktische Macht der Gründerin ehrlich zu Papier und entscheidet dann gemeinsam, welcher Teil davon legitim ist.
2. **Begrenzt sie** — wandelt das in eine explizite, klar umrissene Rolle um (oder schafft sie ab), mit Grenzen und einem Überprüfungsweg.
3. **Testet es** an einer Entscheidung mit geringen Einsätzen, die der Gründerin leicht missfällt, um zu beweisen, dass der Prozess tatsächlich hält.
4. **Beobachtet die Kaskade** — informelle Gründerinnenmacht ist der Keim für Cliquenherrschaft, Charisma-als-Governance und Notfall-Umgehung.

### Was dieses Versagen typischerweise auslöst

- **[Charismatische spirituelle Autorität](/articles/rcos-stress-tests/culture-influence/charismatic-spiritual-authority)** — unbegrenzter Einfluss der Gründerin verschwimmt mit Charisma, das an die Stelle von Governance tritt.
- **[Präzedenzfall Regelumgehung im Notfall](/articles/rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent)** — eine informelle Autorität ist genau diejenige, die in einer Krise „vorübergehend" die Regeln umgeht.
- **[Entscheidungsfindung durch informelle Clique](/articles/rcos-stress-tests/governance-power/informal-clique-decision-making)** — der innere Kreis der Gründerin wird zum eigentlichen Entscheidungsgremium.

### Verwandte Stresstests

- **[Dominante Stimmen in Entscheidungsräumen](/articles/rcos-stress-tests/governance-power/dominant-speakers-decision-spaces)** — derselbe ungeschriebene Einfluss, ausgedrückt durch Redezeit in Meetings.
