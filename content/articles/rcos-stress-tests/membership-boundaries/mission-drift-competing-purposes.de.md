---
id: f1c3d8b5
title: Mission Drift durch konkurrierende Zwecke
summary: Wenn die Gemeinschaft alles sein will und nichts mehr priorisieren kann.
parentId: 45625035
order: 2
severity: medium
stage:
  - growth
  - mature
layers:
  - 0
invariants:
  - '0.1'
  - '0.2'
remediationReady: true
tags:
  - 'Layer 0: Scope'
  - Medium severity
symptoms:
  - >-
    Mitglieder würden ehrlich unterschiedliche Antworten auf die Frage geben,
    „wofür diese Gemeinschaft in erster Linie da ist".
  - Neue Projekte und Richtungen kommen ständig hinzu; keine werden aufgegeben.
  - >-
    Prioritäten kollidieren unversöhnlich — Einkommen vs. Ökologie vs. Praxis —
    ohne Möglichkeit, zu entscheiden.
  - >-
    Entscheidungen geraten ins Stocken, weil es kein gemeinsames Gespür dafür
    gibt, was am wichtigsten ist.
  - >-
    Es bilden sich Fraktionen um unterschiedliche Visionen davon, was die
    Gemeinschaft eigentlich ist.
preventsWith:
  - rcos-templates/layer-0/purpose-charter
  - rcos-templates/layer-0/scope-declaration
  - rcos-templates/layer-0/identity-constraints-register
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: feeds
    note: >-
      Unversöhnliche Zweckkonflikte sind zu groß, um angesprochen zu werden,
      also lernt die ganze Gruppe, ihnen auszuweichen.
  - test: rcos-stress-tests/governance-power/informal-clique-decision-making
    relation: enables
    note: >-
      Fraktionen bilden sich um konkurrierende Visionen und beginnen,
      untereinander zu entscheiden.
related:
  - rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test
lang: de
sourceHash: '62006333'
---

> **Schweregrad:** Mittel — langsam und zersetzend: es zerbricht die Gemeinschaft nicht, es löst ihren Fokus auf.
> **Wo es zubeißt:** Wachstums- und Reifephase, wenn Ambitionen und Mitglieder sich anhäufen.
> **Lebt ihr das schon?** Springe zu [Wenn es schon passiert](#wenn-es-schon-passiert).

### Kommt dir das bekannt vor?

Es begann mit einer klaren Idee, und dann wuchs es — ein Öko-Hof, und zusätzlich ein Retreat, und zusätzlich ein Kunstraum, und zusätzlich eine Einkommensquelle, und zusätzlich eine Schule. Jede Erweiterung war wertvoll, also wurde nie etwas abgelehnt. Wenn nun zwei dieser Zwecke in entgegengesetzte Richtungen ziehen — das Einkommensprojekt will das Feld, das der Waldgarten braucht — gibt es keinen Weg zu entscheiden, weil sich die Gemeinschaft nie darauf geeinigt hat, welcher Zweck Vorrang hat. Die Leute streiten nicht, weil sie sich über Werte uneinig sind; sie streiten, weil jede und jeder einer anderen, gleichermaßen realen Version dessen verpflichtet ist, wofür dieser Ort da sein soll.

### Anzeichen, dass das bei euch passiert

- Mitglieder würden ehrlich unterschiedliche Antworten auf die Frage geben, „wofür diese Gemeinschaft in erster Linie da ist".
- Neue Projekte und Richtungen kommen ständig hinzu; keine werden aufgegeben.
- Prioritäten kollidieren unversöhnlich — Einkommen vs. Ökologie vs. Praxis — ohne Möglichkeit, zu entscheiden.
- Entscheidungen geraten ins Stocken, weil es kein gemeinsames Gespür dafür gibt, was am wichtigsten ist.
- Es bilden sich Fraktionen um unterschiedliche Visionen davon, was die Gemeinschaft eigentlich ist.

**Das ist _nicht_ dasselbe wie** eine Gemeinschaft mit einem klaren Zweck, der durch mehrere Aktivitäten umgesetzt wird. Das verräterische Zeichen ist *konkurrierende Hauptzwecke ohne erklärte Priorität* — sodass Abwägungen keine prinzipiengeleitete Antwort haben und jede Fraktion „recht" hat.

### Warum es passiert

Zu jedem würdigen Ziel Ja zu sagen, fühlt sich großzügig und inklusiv an, also häufen Gemeinschaften Zwecke schneller an, als sie sie verabschieden. Aber wenn zwei Zwecke in Konflikt geraten — und irgendwann werden sie das — gibt es keine Möglichkeit zu wählen, ohne einen erklärten Hauptzweck, der sie ordnet. Das Ergebnis sind Lähmung und Fraktionsbildung: jede Gruppe optimiert für einen anderen, gleichermaßen legitimen Sinn von „wofür wir da sind", und keine Entscheidung kann sie alle zufriedenstellen.

<details data-kind="rationale">
<summary>Der formale Stresstest (für Auditor:innen)</summary>

**Fehlermodus** — Die Gemeinschaft hält mehrere konkurrierende Hauptzwecke ohne erklärte Priorität.

**Beteiligte Schichten** — Schicht 0 (Identität & Scope)

**Relevante Invarianten**

* 0.1 Einziger Hauptzweck
* 0.2 Expliziter, geregelter Scope

**Testbedingung** — Zwei erklärte Zwecke geraten in Konflikt und es gibt keine prinzipiengeleitete Grundlage, die Abwägung zu lösen.

**Erwartetes RCOS-Verhalten** — Ein einziger Hauptzweck ordnet alle anderen; Abwägungen werden unter Bezugnahme auf ihn gelöst.

**Bestehenskriterien** — Zweckkonflikte haben eine prinzipiengeleitete Lösung.

**Versagenskriterien** — Prioritäten sind unversöhnlich und fraktionsgebunden.

</details>

### Wie reif ist eure Gemeinschaft in diesem Punkt?

Bestanden/Nicht bestanden ist für das echte Leben zu grob — die meisten Gemeinschaften sind irgendwo dazwischen. Findet eure Stufe und zielt dann auf die nächste.

| Stufe | Wie es aussieht |
|---|---|
| **L0 — Implizit** | Mehrere Zwecke koexistieren ungeordnet; Konflikte haben keine prinzipiengeleitete Lösung. |
| **L1 — Benannt** | Die Gruppe sieht die Drift, hat aber noch keinen Hauptzweck erklärt. |
| **L2 — Dokumentiert** | Eine [Zweck-Charta](/articles/rcos-templates/layer-0/purpose-charter) benennt einen einzigen Hauptzweck; andere Ziele sind ausdrücklich nachrangig. |
| **L3 — Durchgesetzt & geübt** | Abwägungen werden unter Bezugnahme auf den Hauptzweck gelöst; neue Richtungen werden daran geprüft. |

Die meisten Gemeinschaften, die sich hier wiedererkennen, stehen auf **L0 oder L1**. Das Ziel ist nicht Perfektion — es geht darum, eine Stufe nach oben zu kommen.

### Wie RCOS dem vorbeugt

RCOS verlangt einen einzigen Hauptzweck, der Pattsituationen auflösen kann:

- **[Zweck-Charta](/articles/rcos-templates/layer-0/purpose-charter)** — erklärt den einzigen Hauptzweck, der alle anderen ordnet.
- **[Scope-Deklaration](/articles/rcos-templates/layer-0/scope-declaration)** — legt fest, was im und außerhalb des Scopes liegt, damit Erweiterungen bewusst geschehen.
- **[Identitäts-Constraints-Register](/articles/rcos-templates/layer-0/identity-constraints-register)** — definiert, was die Gemeinschaft ist und was nicht.

Siehe auch die Spezifikation: [Schicht 0 — Zweckdefinition](/articles/rcos-core/v0-1/layer-0-identity-scope#21-purpose-definition) und [Scope-Deklaration](/articles/rcos-core/v0-1/layer-0-identity-scope#22-scope-declaration).

### Wenn es schon passiert

Wenn ihr in zu viele Zwecke abgedriftet seid, ordnet neu, statt zu amputieren:

1. **Holt die echten Antworten an die Oberfläche.** Lasst alle privat aufschreiben, was sie für den Hauptzweck halten; die Streuung ist die Diagnose.
2. **Erklärt einen Hauptzweck.** Ihr könnt die nachrangigen Ziele behalten — ordnet sie einfach darunter ein.
3. **Nutzt ihn, um den akuten Konflikt zu entscheiden**, der euch hierhergeführt hat, und lasst das den Präzedenzfall setzen.

### Was dieses Versagen typischerweise auslöst

- **[Normalisierung von Konfliktvermeidung](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — unversöhnliche Zweckkonflikte sind zu groß, um angesprochen zu werden, also werden sie vermieden.
- **[Informelle Clique-Entscheidungsfindung](/articles/rcos-stress-tests/governance-power/informal-clique-decision-making)** — Fraktionen bilden sich um konkurrierende Visionen.

### Verwandte Stresstests

- **[Scope-Test bei Verletzung kultureller Normen](/articles/rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test)** — beides sind Scope-Versagen: unklarer Zweck und unklarer geregelter Scope treten gemeinsam auf.
