---
id: d2f7a4e9
title: Selbstversorgung ohne kollektiven Beitrag
summary: 'Wenn alle das Gemeingut genießen, aber kaum jemand es pflegt.'
parentId: a9e4c65d
order: 3
severity: high
stage:
  - growth
  - mature
layers:
  - 1
  - 5
  - 3
invariants:
  - '1.3'
  - '3.3'
  - '5.3'
remediationReady: true
tags:
  - Contribution & engagement
  - High severity
symptoms:
  - >-
    Dieselbe Handvoll Leute organisiert jeden Arbeitstag, jedes Treffen, jede
    Reparatur.
  - >-
    Aufrufe zur Mithilfe bei gemeinsamen Aufgaben stoßen auf herzliche
    Zustimmung, aber kaum jemand erscheint tatsächlich.
  - >-
    Mitglieder sind auf ihren eigenen Parzellen hoch kompetent, tauchen aber bei
    kollektiven Projekten selten auf.
  - '"Jemand müsste mal …" wird oft gesagt; "Ich mache es" selten.'
  - 'Es ist unklar, was ein bestimmtes Mitglied eigentlich beitragen soll.'
preventsWith:
  - rcos-templates/layer-1/membership-agreement
  - rcos-templates/layer-5/role-registry
  - rcos-templates/layer-3/internal-economy-protocol
  - rcos-templates/layer-1/onboarding-protocol
cascade:
  - test: >-
      rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
    relation: enables
    note: >-
      Wenn nur ein engagierter Kreis die kollektive Arbeit trägt, sammelt er
      informellen, nicht rechenschaftspflichtigen Einfluss darauf, wie die
      Gemeinschaft funktioniert.
  - test: rcos-stress-tests/operations-coordination/invisible-care-labor-burnout
    relation: feeds
    note: >-
      Der schrumpfende Kern absorbiert immer mehr unbezahlte Arbeit — das
      Spiegelbild dieses Tests: zu wenige Engagierte bedeuten, dass die, die da
      sind, überlastet werden.
related:
  - rcos-stress-tests/economy-resources/outsourced-labor-bypassing-contribution
lang: de
sourceHash: 47f76c03
---

> **Schweregrad:** Hoch — selten eine Krise an einem einzelnen Tag, aber eine langsame Erosion, die die Gemeinschaft zum Stillstand bringt und die wenigen, die sie tragen, still ausbrennt.
> **Wann es beißt:** Meist sobald der Gründungs-Reiz verflogen ist — in der Wachstums- und Reifephase — obwohl die Saat schon beim Eintritt gelegt wird.
> **Lebt ihr das schon?** Springe zu [Wenn es schon passiert](#wenn-es-schon-passiert).

### Kommt dir das bekannt vor?

Alle hier leben gut. Die Leute pflegen ihre eigenen Gärten, reparieren ihre eigenen Häuser, leben leichtfüßig und kompetent. Die gemeinsamen Werte sind echt — alle *glauben* an das Gemeingut, an den Waldgarten, an die kollektive Vision. Und trotzdem hat der Arbeitstag immer dieselben sechs Leute. Das Treffen zur Saisonplanung ist spärlich besucht. Die gemeinsame Infrastruktur verfällt langsam, nicht weil jemand widerspricht, sondern weil ihr Erhalt niemandes konkrete Aufgabe ist. Die Gemeinschaft ist voller selbstversorgender Menschen und verhungert langsam an kollektiver Anstrengung.

### Anzeichen, dass es dir gerade passiert

- Dieselbe Handvoll Leute organisiert jeden Arbeitstag, jedes Treffen, jede Reparatur.
- Aufrufe zur Mithilfe bei gemeinsamen Aufgaben stoßen auf herzliche Zustimmung, aber kaum jemand erscheint tatsächlich.
- Mitglieder sind auf ihren eigenen Parzellen hoch kompetent, tauchen aber bei kollektiven Projekten selten auf.
- "Jemand müsste mal …" wird oft gesagt; "Ich mache es" selten.
- Es ist unklar, was ein bestimmtes Mitglied eigentlich beitragen soll — und niemand will nachfragen.

**Das ist _nicht_ dasselbe wie** eine Gemeinschaft, die *bewusst* gemeinsame Verpflichtungen minimiert hat — etwa ein Co-Housing-Projekt, das gestaltungsbedingt nur Land und Infrastruktur teilt. Das Erkennungszeichen hier ist die **Lücke zwischen erklärten gemeinsamen Zielen und tatsächlichem Beitrag**: Leute, die sagen, sie wollen ein blühendes Gemeingut, aber es nicht mit Ressourcen ausstatten. Niedriges Engagement *als Designentscheidung* ist eine valide Wahl; niedriges Engagement *trotz geteilter Ambition* ist das Versagen.

### Warum es passiert

Selbstversorgende Menschen können die meisten ihrer Bedürfnisse selbst decken, weshalb der alltägliche Sog, kollektiv beizutragen, schwach ist — das Gemeingut fühlt sich wie Kulisse an, nicht wie Verantwortung. Wenn Beitragserwartungen nie explizit gemacht werden, wird das Gemeingut zu einem *freien Gut*: alle konsumieren es, niemand ist zu seinem Erhalt verpflichtet, und die Pflege landet still bei denjenigen, denen es am meisten am Herzen liegt. Geteilte *Werte* lassen alle ausgerichtet erscheinen, was die Abwesenheit gemeinsamen *Commitments* überdeckt. Weil tatsächlich nichts geschuldet ist, läuft der Beitrag auf Stimmung und gutem Willen — und guter Wille skaliert nicht und überlebt keine schlechte Saison.

<details data-kind="rationale">
<summary>Der formale Stresstest (für Prüfende)</summary>

**Versagensmodus** — Mitglieder leben nachhaltig und genießen das Gemeingut, tragen aber selten zu gemeinsamen Verantwortlichkeiten oder kollektiven Zielen bei. Geteilte Werte existieren, geteiltes Commitment nicht.

**Beteiligte Schichten** — Schicht 1 (Mitgliedschaft), Schicht 5 (Operations), Schicht 3 (Ökonomie)

**Relevante Invarianten**

* 1.3 Rechte-Pflichten-Symmetrie
* 3.3 Beitragsanerkennung ist explizit
* 5.3 Zeit und Aufmerksamkeit sind endliche Ressourcen

**Testbedingung** — Mitglieder profitieren vom Gemeingut und gemeinsamen Lebensstil, während kollektive Arbeit liegen bleibt; Beitragserwartungen sind schwach, unausgesprochen oder dem guten Willen überlassen; derselbe kleine Kern trägt und entwickelt die Gemeinschaft, während die meisten sich zurückziehen.

**Erwartetes RCOS-Verhalten** — Beitragserwartungen werden explizit gemacht und an Mitgliedschaftsrechte gekoppelt; kollektive Verantwortlichkeiten sind rollenbasiert und nachverfolgt; anhaltendes Nichtbeitragen löst eine definierte Überprüfung aus.

**Bestanden-Kriterien** — Gemeinsame Verantwortlichkeiten werden getragen, ohne von einer engagierten Minderheit abhängig zu sein, und Rechte und Pflichten bleiben über alle Mitglieder hinweg symmetrisch.

**Nicht-Bestanden-Kriterien** — Vorteile entkoppeln sich vom Beitrag; die Pflege hängt an einem schrumpfenden Kern, bis sie stockt oder zusammenbricht.

</details>

### Wie reif ist eure Gemeinschaft in diesem Punkt?

Bestanden/nicht bestanden ist für das echte Leben zu grob — die meisten Gemeinschaften sind irgendwo dazwischen. Finde deine Sprosse, dann ziele auf die nächste.

| Stufe | Wie es aussieht |
|---|---|
| **L0 — Implizit** | Beitrag wird angenommen, "passiert von selbst". Niemand benennt, was erwartet wird, und ein stilles Häuflein trägt den Rest. |
| **L1 — Benannt** | Die Gruppe gibt offen zu, dass das Engagement ungleich ist, und redet darüber, aber die Erwartungen bleiben informell und werden nicht durchgesetzt. |
| **L2 — Dokumentiert** | Beitragserwartungen sind in die [Mitgliedschaftsvereinbarung](/articles/rcos-templates/layer-1/membership-agreement) geschrieben, und wiederkehrende kollektive Arbeit existiert als benannte Rollen. Mitglieder wissen, worauf sie sich eingelassen haben. |
| **L3 — Durchgesetzt & eingeübt** | Beitrag wird nachverfolgt und anerkannt; die Last wird sichtbar geteilt und im Laufe der Zeit neu ausbalanciert; anhaltendes Nichtbeitragen löst eine definierte Überprüfung aus, statt stillen Groll. |

Die meisten Gemeinschaften, die sich in diesem Test wiedererkennen, sitzen auf **L0 oder L1**. Das Ziel ist nicht Perfektion — es ist, eine Sprosse höher zu klettern.

### Wie RCOS das verhindert

RCOS ersetzt "wir hoffen, die Leute helfen mit" durch explizites, symmetrisches Commitment. Baue diese **bevor** Rückzug zur Norm wird:

- **[Mitgliedschaftsvereinbarung](/articles/rcos-templates/layer-1/membership-agreement)** — verknüpfe konkrete Beitragserwartungen mit Mitgliedschaftsrechten, damit das Genießen und das Pflegen des Gemeinguts Teil desselben Deals sind (Invariante 1.3, [Rechte & Pflichten](/articles/rcos-core/v0-1/layer-1-membership-system#34-rights-and-obligations)).
- **[Rollenregister](/articles/rcos-templates/layer-5/role-registry)** — mache aus wiederkehrender kollektiver Arbeit benannte, verantwortete Rollen, statt sie demjenigen zu überlassen, der es bemerkt.
- **[Internes Ökonomie-Protokoll](/articles/rcos-templates/layer-3/internal-economy-protocol)** — definiere, was als Beitrag zählt, und würdige ihn (Credits, Reputation), damit Teilhabe sichtbar und wertgeschätzt ist ([Beitragsanerkennung](/articles/rcos-core/v0-1/layer-3-economic-resource-system#52-contribution-recognition)).
- **[Onboarding-Protokoll](/articles/rcos-templates/layer-1/onboarding-protocol)** — setze die Beitragsnorm beim Eintritt, bevor sich das Muster des Rückzugs überhaupt bilden kann.

### Wenn es schon passiert

Wenn das Gemeingut bereits auf einem schrumpfenden Kern läuft, kannst du das nicht "verhindern" — du balancierst es neu aus. Triage, der Reihe nach:

1. **Mach die Last sichtbar.** Macht ein schnelles Beitrags-Audit: Wer trägt gerade tatsächlich die kollektive Arbeit? Es geht nicht um Schuld — es geht um gemeinsame Daten, die die höfliche Fiktion beenden, dass alle gleichermaßen mit anpacken.
2. **Wandelt fragile Abhängigkeiten in Rollen um.** Fangt mit dem an, was kippt, wenn eine Person geht, und gebt ihm eine benannte [Rolle](/articles/rcos-templates/layer-5/role-registry) mit Vertretung.
3. **Verhandelt Erwartungen offen neu, mit Konsens.** Fügt explizite Beitragserwartungen für die Zukunft in die [Mitgliedschaftsvereinbarung](/articles/rcos-templates/layer-1/membership-agreement) ein — eine transparente Vereinbarung schlägt stillen Groll.
4. **Anerkennt bestehenden Beitrag laut.** Menschen engagieren sich wieder, wenn ihre Anstrengung *gesehen* wird; ein [Internes Ökonomie-Protokoll](/articles/rcos-templates/layer-3/internal-economy-protocol) macht diese Anerkennung systematisch, statt sie von Dankbarkeit abhängig zu machen.
5. **Behalte die Kaskade im Blick** (unten) — euer engagierter Kern ist bereits auf dem Weg zum Burnout und zu zufälliger informeller Macht.

### Was dieses Versagen typischerweise auslöst

Schwaches kollektives Engagement bleibt selten eingegrenzt. Es produziert still zwei nachgelagerte Versagen:

- **[Unsichtbare Macht durch Verantwortlichkeiten](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — wenn nur ein engagierter Kreis die kollektive Arbeit trägt, sammelt er informellen, nicht rechenschaftspflichtigen Einfluss darauf, wie die Gemeinschaft funktioniert.
- **[Burnout durch unsichtbare Care-Arbeit](/articles/rcos-stress-tests/operations-coordination/invisible-care-labor-burnout)** — das Spiegelbild dieses Tests: zu wenige Engagierte bedeuten, dass der schrumpfende Kern immer mehr unbezahlte Arbeit absorbiert, bis er ausbrennt.

### Verwandte Stresstests

- **[Ausgelagerte Arbeit umgeht den Beitrag](/articles/rcos-stress-tests/economy-resources/outsourced-labor-bypassing-contribution)** — die geldbasierte Verwandte: Beitragserwartungen existieren, werden aber durchs Anheuern umgangen — hier werden sie durch Rückzug umgangen. Dieselbe gebrochene Verbindung zwischen Nutzen und Beitrag.
