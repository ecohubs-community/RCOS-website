---
id: e4b2c6a9
title: Unklarer Informationszugang
summary: 'Wenn wer-was-sehen-darf davon abhängt, wen du kennst – nicht von einer Regel.'
parentId: a9e4c65d
order: 4
severity: medium
stage:
  - growth
  - mature
layers:
  - 5
invariants:
  - '5.4'
  - '5.2'
remediationReady: true
tags:
  - 'Layer 5: Operations'
  - Medium severity
symptoms:
  - >-
    Manche Mitglieder sind bei Entscheidungen, Finanzen oder Plänen "im Bilde";
    andere erfahren davon spät oder nie.
  - >-
    Es gibt keine Regel dafür, was für Mitglieder offen ist, was privat ist und
    wer worauf zugreifen darf.
  - >-
    Sensible Mitgliederinformationen werden informell gehalten, ohne vereinbarte
    Grenzen.
  - >-
    Neue Mitglieder finden die Dokumente, Historie oder den Kontext nicht, den
    sie brauchen.
  - >-
    Zugang zu wichtigen Konten und Aufzeichnungen hängt von persönlichen
    Beziehungen ab.
preventsWith:
  - rcos-templates/layer-5/operations-manual
  - rcos-templates/layer-5/meeting-templates
cascade:
  - test: rcos-stress-tests/governance-power/informal-clique-decision-making
    relation: enables
    note: >-
      Informationsasymmetrie ist der Nährboden, um den sich eine In-Group
      bildet.
  - test: >-
      rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
    relation: enables
    note: >-
      Wer die Aufzeichnungen hat, hat stillschweigend Macht darüber, worauf
      andere reagieren können.
related:
  - >-
    rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
lang: de
sourceHash: 6ee1cc5b
---

> **Schweregrad:** Mittel — selten allein eine Krise, aber baut still und leise In-Groups und Fragilität auf.
> **Wo es weh tut:** Wachstums- und Reifephase, wenn Aufzeichnungen und Kanäle sich vermehren.
> **Lebst du das schon?** Spring zu [Wenn es schon passiert](#wenn-es-schon-passiert).

### Kommt dir das bekannt vor?

Manche Leute scheinen immer als Erste Bescheid zu wissen — über den Plan, die Finanzlage, was besprochen wurde. Andere hören von Entscheidungen erst, nachdem sie getroffen sind, oder stolpern zufällig über wichtige Dokumente. Es gibt keine Regelung dazu; der Zugang ist einfach organisch gewachsen, von Person zu Person, von Kanal zu Kanal. Neue Mitglieder finden die Historie nicht, die sie brauchen, sensible Informationen über Mitglieder schwirren informell herum, und "im Bilde sein" ist still und leise zu einem Marker dafür geworden, wer wirklich dazugehört.

### Anzeichen, dass es dich betrifft

- Manche Mitglieder sind "im Bilde"; andere erfahren davon spät oder nie.
- Es gibt keine Regel dafür, was für Mitglieder offen ist, was privat ist und wer worauf zugreifen darf.
- Sensible Mitgliederinformationen werden informell gehalten, ohne vereinbarte Grenzen.
- Neue Mitglieder finden die Dokumente, Historie oder den Kontext nicht, den sie brauchen.
- Zugang zu wichtigen Konten und Aufzeichnungen hängt von persönlichen Beziehungen ab.

**Das ist _nicht_ dasselbe wie** explizite, vereinbarte Privatsphärengrenzen zu haben — manche Dinge *sollten* privat sein. Das Verräterische ist, dass der Zugang *undeklariert und ungleich* ist: informell festgelegt, sodass Information zu einer stillen Währung der Zugehörigkeit wird.

### Warum es passiert

Informationszugang wird selten gestaltet; er wächst an. Leute teilen mit denen, denen sie vertrauen, lagern Dinge dort, wo es bequem ist, und das Ergebnis ist eine unsichtbare Karte davon, wer-was-weiß, die sozialer Nähe folgt statt der Rolle. Diese Asymmetrie verhärtet In-Groups, lässt neue Mitglieder im Stich und macht kritisches Wissen fragil — gehalten in ein paar Postfächern und Erinnerungen statt an einem auffindbaren Ort.

<details data-kind="rationale">
<summary>Der formale Stresstest (für Auditor:innen)</summary>

**Fehlermodus** — Wer auf welche Informationen zugreifen kann, ist informell und ungleich.

**Beteiligte Schichten** — Schicht 5 (Operations)

**Relevante Invarianten**

* 5.4 Regeln für Informationszugang sind explizit
* 5.2 Operatives Wissen ist dokumentiert

**Testbedingung** — Transparenz- und Privatsphärengrenzen sind nicht definiert; Zugang hängt von Beziehungen ab.

**Erwartetes RCOS-Verhalten** — Transparenz-Standards, Privatsphärengrenzen und rollenbasierter Zugang sind explizit definiert; Aufzeichnungen sind auffindbar.

**Bestehenskriterium** — Zugang folgt deklarierten Regeln, nicht sozialer Nähe.

**Versagenskriterium** — Information ist eine Währung der Zugehörigkeit.

</details>

### Wie reif ist eure Gemeinschaft hierin?

Bestanden/Nicht-bestanden ist für das echte Leben zu grob — die meisten Gemeinschaften sind auf halbem Weg. Finde eure Stufe und ziele dann auf die nächste.

| Stufe | Wie es aussieht |
|---|---|
| **L0 — Implizit** | Zugang ist informell und ungleich; "im Bilde sein" hängt von Beziehungen ab. |
| **L1 — Benannt** | Die Gruppe spürt die Asymmetrie, hat aber keine Zugangsregeln definiert. |
| **L2 — Dokumentiert** | Ein [Operations-Handbuch](/articles/rcos-templates/layer-5/operations-manual) definiert Transparenz-Standards, Privatsphärengrenzen und wer worauf zugreifen darf. |
| **L3 — Durchgesetzt & geübt** | Zugang folgt deklarierten Regeln; Aufzeichnungen sind auffindbar; Privatsphärengrenzen sind explizit und werden respektiert. |

Die meisten Gemeinschaften, die sich hier wiedererkennen, stehen bei **L0 oder L1**. Das Ziel ist nicht Perfektion — es ist, eine Stufe weiterzukommen.

### Wie RCOS das verhindert

RCOS macht Informationszugang zu einer deklarierten Regel, nicht zu einer sozialen Tatsache:

- **[Operations-Handbuch](/articles/rcos-templates/layer-5/operations-manual)** — definiere Transparenz-Standards, Privatsphärengrenzen und rollenbasierten Zugang.
- **[Meeting-Vorlagen](/articles/rcos-templates/layer-5/meeting-templates)** — halte Entscheidungen dort fest, wo alle Mitglieder sie finden können, nicht in privaten Kanälen.

Siehe auch die Spezifikation: [Schicht 5 — Dokumentation und Informationsfluss](/articles/rcos-core/v0-1/layer-5-operations-coordination#73-documentation-and-information-flow).

### Wenn es schon passiert

Wenn der Zugang zufällig gewachsen ist, zeichnet ihn bewusst neu:

1. **Kartiert, was existiert und wer drankommt** — die Lücken werden schnell offensichtlich.
2. **Legt Standards fest:** was für alle Mitglieder offen ist, was privat ist und wer den Zugang verwaltet.
3. **Verschiebt kritische Aufzeichnungen in gemeinsamen, rollenzugänglichen Speicher**, damit Wissen nicht an Beziehungen gebunden ist.
4. **Behaltet die Kaskade im Blick** — Informationsasymmetrie ist der Weg, wie Cliquen und unsichtbare Macht entstehen.

### Was dieser Fehler tendenziell auslöst

- **[Informelle Cliquen-Entscheidungsfindung](/articles/rcos-stress-tests/governance-power/informal-clique-decision-making)** — Informationsasymmetrie ist der Nährboden einer In-Group.
- **[Unsichtbare Macht durch Verantwortlichkeiten](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — wer die Aufzeichnungen hat, hat stille Macht.

### Verwandte Stresstests

- **[Unsichtbare Macht durch Verantwortlichkeiten](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — undokumentiertes Wissen und undefinierter Zugang sind zwei Gesichter derselben Konzentration.
