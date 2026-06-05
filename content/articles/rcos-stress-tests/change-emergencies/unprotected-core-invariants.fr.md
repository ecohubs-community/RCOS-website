---
id: b6d1a3e9
title: Invariants fondamentaux non protégés
summary: >-
  Quand les promesses fondatrices peuvent être annulées par un seul vote
  ordinaire.
parentId: 6acde7a7
order: 1
severity: high
stage:
  - growth
  - mature
layers:
  - 0
  - 6
invariants:
  - '0.4'
  - '6.1'
remediationReady: true
tags:
  - 'Layer 0: Scope'
  - High severity
symptoms:
  - >-
    Les engagements fondateurs de la communauté (la terre reste un commun, pas
    de leader unique) peuvent être modifiés par une majorité simple ordinaire.
  - >-
    Il n'y a aucune distinction entre les règles quotidiennes et les règles
    constitutionnelles.
  - >-
    Une majorité passagère pourrait réécrire le cœur de la communauté en une
    seule réunion.
  - Il n'existe aucune liste des choses censées être immuables.
  - >-
    Les gens supposent que les principes fondateurs sont sûrs, mais rien ne les
    protège structurellement.
preventsWith:
  - rcos-templates/layer-0/invariants-register
  - rcos-templates/layer-6/change-protocol
  - rcos-templates/layer-2/governance-protocol
cascade:
  - test: >-
      rcos-stress-tests/economy-resources/commons-privatization-through-land-sales
    relation: enables
    note: >-
      Si la protection des communs est amendable comme n'importe quelle règle,
      elle peut être supprimée par vote sous pression.
  - test: rcos-stress-tests/governance-power/founder-informal-veto
    relation: enables
    note: >-
      Une structure non protégée permet à une autorité informelle de remodeler
      les règles à sa convenance.
related:
  - rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent
lang: fr
sourceHash: e54af999
---

> **Gravité :** Élevée — une majorité passagère peut démanteler en une seule réunion ce sur quoi la communauté a été fondée.
> **Là où ça mord :** Phases de croissance et de maturité, à mesure que les membres se renouvellent et que le consensus des fondateurs s'estompe.
> **Tu vis déjà cela ?** Saute à [Si cela arrive déjà](#si-cela-arrive-déjà).

### Ça te dit quelque chose ?

La communauté a été bâtie sur quelques non-négociables — la terre est détenue en commun, il n'y a pas de chef unique, le lieu existe pour X et non pour le profit. Tout le monde était d'accord, donc personne n'a jamais pris la peine de rendre ces engagements *plus difficiles à modifier* que le calendrier des réunions. Les années passent, les membres se renouvellent, une saison stressante arrive — et un soir, par la même majorité simple utilisée pour choisir une couleur de peinture, la fondation elle-même est sur la table. Rien ne l'arrête structurellement. Les promesses « permanentes » s'avèrent exactement aussi durables que le prochain vote.

### Signes que cela t'arrive

- Les engagements fondateurs peuvent être modifiés par une majorité simple ordinaire.
- Il n'y a aucune distinction entre les règles quotidiennes et les règles constitutionnelles.
- Une majorité passagère pourrait réécrire le cœur de la communauté en une seule réunion.
- Il n'existe aucune liste des choses censées être immuables.
- Les gens supposent que les principes fondateurs sont sûrs, mais rien ne les protège structurellement.

**Ce n'est _pas_ la même chose que** d'avoir une voie d'amendement délibérée et exigeante pour les invariants fondamentaux — un seuil très élevé est sain. Le signe révélateur est que *les engagements fondateurs n'ont aucune protection particulière* : ils sont amendables exactement comme l'horaire d'une réunion.

### Pourquoi cela arrive

Au début, tout le monde est d'accord sur le cœur, donc le protéger semble inutile — pourquoi garder ce que personne ne toucherait ? Mais les membres changent, les humeurs évoluent, et une future majorité sous pression peut discrètement éventrer la fondation qui a fait de la communauté ce qu'elle est. Sans invariants protégés, « permanent » n'est qu'un sentiment, et les engagements les plus importants sont les moins défendus.

<details data-kind="rationale">
<summary>Le test de résistance formel (pour les auditeurs)</summary>

**Mode de défaillance** — Les invariants fondateurs sont amendables par un processus ordinaire.

**Couches concernées** — Couche 0 (Identité et portée), Couche 6 (Évolution)

**Invariants pertinents**

* 0.4 Invariants protégés
* 6.1 Le changement est possible mais contraint

**Condition du test** — Les engagements fondamentaux peuvent être modifiés par le même mécanisme que les décisions quotidiennes.

**Comportement RCOS attendu** — Les invariants protégés sont nommés et portent un seuil d'amendement élevé et explicite, distinct des règles ordinaires.

**Critères de réussite** — Les invariants fondamentaux ne peuvent pas être modifiés par un processus ordinaire.

**Critères d'échec** — Une majorité passagère peut réécrire la fondation.

</details>

### Quel est le degré de maturité de ta communauté sur ce point ?

Le réussite/échec est trop tranché pour la vraie vie — la plupart des communautés sont à mi-chemin. Trouve ton échelon, puis vise le suivant.

| Niveau | À quoi cela ressemble |
|---|---|
| **L0 — Implicite** | Les règles fondamentales et quotidiennes sont également amendables ; la fondation n'est pas protégée. |
| **L1 — Nommé** | Le groupe sait que certaines règles devraient être plus difficiles à modifier mais ne les a pas séparées. |
| **L2 — Documenté** | Un [Registre des invariants](/articles/rcos-templates/layer-0/invariants-register) nomme les invariants protégés avec un seuil d'amendement élevé et explicite. |
| **L3 — Appliqué et éprouvé** | Les invariants fondamentaux ne peuvent pas être modifiés par un processus ordinaire ; la protection a tenu face à une tentative réelle de la contourner. |

La plupart des communautés qui se reconnaissent ici sont à **L0 ou L1**. L'objectif n'est pas la perfection — c'est de monter d'un échelon.

### Comment RCOS prévient cela

RCOS sépare le changement constitutionnel des décisions quotidiennes :

- **[Registre des invariants](/articles/rcos-templates/layer-0/invariants-register)** — nomme les invariants protégés et le seuil élevé requis pour les modifier.
- **[Protocole de changement](/articles/rcos-templates/layer-6/change-protocol)** — définit une voie distincte et plus exigeante pour les changements constitutionnels.
- **[Protocole de gouvernance](/articles/rcos-templates/layer-2/governance-protocol)** — maintient les règles constitutionnelles au-dessus des décisions ordinaires.

Voir aussi la spécification : [Couche 0 — Invariants](/articles/rcos-core/v0-1/layer-0-identity-scope#23-invariants) et [Couche 6 — Versionnage et autorité](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#82-versioning-and-authority).

### Si cela arrive déjà

Si ta fondation n'est pas protégée, protège-la avant qu'elle ne soit mise à l'épreuve :

1. **Liste les choses qui ne doivent jamais changer discrètement** — la véritable fondation.
2. **Fixe un seuil d'amendement élevé** pour elles — supermajorité, délai d'attente, examen — distinct des règles quotidiennes.
3. **Ratifie le registre** afin que la protection elle-même soit consignée et ne puisse être discrètement supprimée.

### Ce que cette défaillance tend à déclencher

- **[Privatisation des communs par la vente de terres](/articles/rcos-stress-tests/economy-resources/commons-privatization-through-land-sales)** — si la protection des communs est amendable, elle peut être supprimée par vote sous pression.
- **[Veto informel des fondateurs](/articles/rcos-stress-tests/governance-power/founder-informal-veto)** — une structure non protégée permet à une autorité informelle de remodeler les règles.

### Tests de résistance liés

- **[Précédent de contournement des règles en urgence](/articles/rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent)** — l'autre manière dont la constitution s'érode : non pas amendée ouvertement, mais contournée sous l'urgence.
