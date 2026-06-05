---
id: 6gcf15u
title: Informelle Cliquen treffen Entscheidungen
summary: >-
  Wenn die echten Entscheidungen schon vor dem Treffen fallen — immer unter
  denselben paar Leuten.
parentId: 7f25f268
order: 2
severity: high
stage:
  - growth
  - mature
layers:
  - 2
  - 1
invariants:
  - '2.4'
  - '1.1'
remediationReady: true
tags:
  - 'Schicht 2: Governance'
  - Hoher Schweregrad
symptoms:
  - >-
    Entscheidungen wirken bereits „getroffen", wenn sie die ganze Gruppe
    erreichen.
  - >-
    Eine immer wiederkehrende Untergruppe (der Küchentisch, ein Chat-Thread, die
    „Originalen") prägt die Ergebnisse.
  - >-
    Es gibt wenige oder keine Entscheidungsprotokolle; du kannst nicht
    rekonstruieren, wie etwas entschieden wurde.
  - >-
    Neuere oder periphere Mitglieder spüren eine klare Linie zwischen In-Group
    und Out-Group.
  - >-
    „Darüber haben wir schon geredet" beendet Diskussionen, die nie formell
    stattgefunden haben.
preventsWith:
  - rcos-templates/layer-2/decision-matrix
  - rcos-templates/layer-2/governance-protocol
  - rcos-templates/layer-5/meeting-templates
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: enables
    note: >-
      Eine Out-Group lernt schnell, die In-Group nicht in Frage zu stellen, und
      Vermeidung wird zur Norm.
  - test: rcos-stress-tests/governance-power/founder-informal-veto
    relation: feeds
    note: >-
      Die Clique bildet sich meist um eine informelle Autorität herum, deren
      Präferenzen sie umsetzt.
related:
  - rcos-stress-tests/governance-power/dominant-speakers-decision-spaces
lang: de
sourceHash: d8227bca
---

> **Schweregrad:** Hoch — Autorität wandert ins Inoffizielle, wo sie nicht sichtbar oder überprüfbar ist.
> **Wo es weh tut:** In der Wachstums- und Reifephase, wenn Vertrauen und Nebenkanäle sich vertiefen.
> **Schon mittendrin?** Springe zu [Wenn es schon passiert](#wenn-es-schon-passiert).

### Kommt dir bekannt vor?

Wenn eine Frage die ganze Gruppe erreicht, hat sie schon eine Antwort. Dieselbe Handvoll Leute — die Gründer:innen, die, die am nächsten beieinander wohnen, die im Spätabend-Chat-Thread — hat sie durchgesprochen, und das Treffen ist eigentlich nur noch die Bestätigung. Niemand hat absichtlich im Hinterzimmer entschieden. Es ist einfach schneller, die Dinge mit den Leuten zu klären, mit denen man ohnehin redet. Aber alle außerhalb dieses Kreises spüren die Linie, und ein Protokoll darüber, *wie* irgendetwas entschieden wurde, gibt es schlicht nicht.

### Anzeichen, dass es dir passiert

- Entscheidungen wirken bereits „getroffen", wenn sie die ganze Gruppe erreichen.
- Eine wiederkehrende Untergruppe prägt Ergebnisse außerhalb jedes formellen Prozesses.
- Es gibt wenige oder keine Entscheidungsprotokolle; du kannst nicht rekonstruieren, wie etwas entschieden wurde.
- Neuere oder periphere Mitglieder spüren eine klare Linie zwischen In-Group und Out-Group.
- „Darüber haben wir schon geredet" beendet Diskussionen, die nie formell stattgefunden haben.

**Das ist _nicht_ dasselbe wie** eine delegierte Arbeitsgruppe mit dokumentiertem Mandat. Das Erkennungszeichen ist, dass *Autorität ins Inoffizielle abgewandert ist* — Ergebnisse entstehen ohne nachvollziehbaren Mechanismus, und die Zugehörigkeit zum entscheidenden Kreis wurde nie deklariert.

### Warum es passiert

Wenn Vertrauen wächst, fangen die Leute, die außerhalb von Treffen am meisten miteinander reden, an, Dinge informell zu klären — es ist schneller und fühlt sich natürlich an. Aber Entscheidungen außerhalb des Protokolls können nicht überprüft werden, und die Grenze des entscheidenden Kreises wird nie deklariert, sodass sich Macht still in einer In-Group konzentriert, die niemand formell ernannt hat und niemand formell zur Rechenschaft ziehen kann.

<details data-kind="rationale">
<summary>Der formelle Stresstest (für Prüfer:innen)</summary>

**Fehlermodus** — Entscheidungen verlagern sich in informelle Untergruppen.

**Beteiligte Schichten** — Schicht 2 (Governance), Schicht 1 (Mitgliedschaft)

**Relevante Invarianten**

* 2.4 Entscheidungen sind überprüfbar
* 1.1 Keine implizite Mitgliedschaft

**Testbedingung** — Ergebnisse entstehen ohne formelle Entscheidungsprotokolle.

**Erwartetes RCOS-Verhalten** — Entscheidungen außerhalb formeller Kanäle sind ungültig.

**Bestehenskriterien** — Autorität bleibt lesbar und überprüfbar.

**Versagenskriterien** — Macht wandert ins Inoffizielle.

</details>

### Wie reif ist deine Gemeinschaft hier?

Bestanden/Nicht bestanden ist für das echte Leben zu grob — die meisten Gemeinschaften sind irgendwo dazwischen. Finde deine Stufe und ziele auf die nächste.

| Stufe | Wie es aussieht |
|---|---|
| **L0 — Implizit** | Echte Entscheidungen fallen in informellen Untergruppen; der formelle Prozess bestätigt sie nachträglich. |
| **L1 — Benannt** | Die Gruppe spürt eine Cliquendynamik, hat aber noch nicht verlangt, dass Entscheidungen auf dem Protokoll stehen. |
| **L2 — Dokumentiert** | Eine [Entscheidungsmatrix](/articles/rcos-templates/layer-2/decision-matrix) definiert, was über formelle, protokollierte Kanäle entschieden werden muss; Ergebnisse außerhalb der Kanäle sind ungültig. |
| **L3 — Durchgesetzt & geübt** | Entscheidungen sind lesbar und überprüfbar; informelle Klärungen werden routinemäßig zurück ins Protokoll geholt. |

Die meisten Gemeinschaften, die sich hier wiedererkennen, stehen auf **L0 oder L1**. Das Ziel ist nicht Perfektion — es geht darum, eine Stufe weiterzukommen.

### Wie RCOS das verhindert

RCOS hält Autorität lesbar, indem es verlangt, dass Entscheidungen auf dem Protokoll stehen:

- **[Entscheidungsmatrix](/articles/rcos-templates/layer-2/decision-matrix)** — definiere, welche Entscheidungen einen formellen, protokollierten Prozess erfordern.
- **[Governance-Protokoll](/articles/rcos-templates/layer-2/governance-protocol)** — mache Entscheidungen außerhalb formeller Kanäle explizit ungültig.
- **[Meeting-Vorlagen](/articles/rcos-templates/layer-5/meeting-templates)** — protokolliere Entscheidungen, damit Autorität überprüfbar bleibt und nicht aus dem Gedächtnis rekonstruiert werden muss.

Siehe auch die Spezifikation: [Schicht 2 — Entscheidungsmatrix](/articles/rcos-core/v0-1/layer-2-governance-decision-logic#44-decision-matrix) und [Schicht 5 — Dokumentation & Informationsfluss](/articles/rcos-core/v0-1/layer-5-operations-coordination#73-documentation-and-information-flow).

### Wenn es schon passiert

Du musst keine Freundschaften zerbrechen — du musst Entscheidungen zurück ins Protokoll bringen:

1. **Verlange ein Entscheidungsprotokoll.** Nichts gilt als entschieden, bevor es nicht dort steht, wo alle es sehen können.
2. **Bring den echten Ort ans Licht.** Verlege das eigentlich entscheidende Gespräch in einen offenen, protokollierten Kanal.
3. **Benenne das Mandat.** Wenn eine Untergruppe über bestimmte Dinge entscheiden soll, gib ihr ein explizites, abgegrenztes Mandat; ansonsten löse ihre informelle Autorität auf.
4. **Achte auf die Kaskade** — Cliquen-Herrschaft zersetzt die Klarheit über Mitgliedschaft und bringt der Out-Group bei, den Mund zu halten.

### Was dieser Fehler tendenziell auslöst

- **[Normalisierung von Konfliktvermeidung](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — eine Out-Group lernt schnell, die In-Group nicht in Frage zu stellen.
- **[Informelles Veto der Gründer:innen](/articles/rcos-stress-tests/governance-power/founder-informal-veto)** — die Clique formiert sich typischerweise um eine informelle Autorität und setzt deren Präferenzen um.

### Verwandte Stresstests

- **[Dominante Stimmen in Entscheidungsräumen](/articles/rcos-stress-tests/governance-power/dominant-speakers-decision-spaces)** — die In-Meeting-Variante derselben Abwanderung von Autorität weg von vereinbarten Mechanismen.
