---
id: c8f4b2d1
title: Gouvernance ossifiée sans voie de changement
summary: 'Quand rien ne peut changer, le changement se fait en partant.'
parentId: 6acde7a7
order: 2
severity: medium
stage:
  - mature
layers:
  - 6
invariants:
  - '6.1'
  - '6.2'
remediationReady: true
tags:
  - 'Couche 6 : Évolution'
  - Sévérité moyenne
symptoms:
  - >-
    Les règles d'origine sont traitées comme figées ; il n'existe aucun
    processus légitime pour les réviser.
  - >-
    "C'est comme ça que les fondateurs l'ont mis en place" clôt la plupart des
    conversations sur les réformes.
  - >-
    Les membres frustrés poussent au changement en menaçant de partir, ou
    partent tout simplement.
  - >-
    Les propositions d'adaptation meurent faute de tout mécanisme pour les
    examiner.
  - La communauté est visiblement en décalage avec ses propres besoins actuels.
preventsWith:
  - rcos-templates/layer-6/change-protocol
  - rcos-templates/layer-6/version-history
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: enables
    note: >-
      Sans voie de changement légitime, la frustration n'a d'autre choix que de
      passer dans la clandestinité.
  - test: rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent
    relation: feeds
    note: >-
      Quand le changement normal est impossible, les gens attendent une crise
      pour imposer ce qu'ils n'ont pas pu proposer.
related:
  - rcos-stress-tests/change-emergencies/unprotected-core-invariants
lang: fr
sourceHash: ba4439dd
---

> **Sévérité :** Moyenne — déclin lent plutôt qu'effondrement : la communauté se calcifie et perd des membres.
> **Où ça mord :** L'étape de maturité, souvent après une première période de turbulences que les fondateurs ont surcompensée.
> **Tu vis déjà cela ?** Saute directement à [Si c'est déjà en train d'arriver](#si-cest-déjà-en-train-darriver).

### Ça te dit quelque chose ?

La communauté a défini ses règles il y a des années, et elles sont désormais sacrées. Chaque fois que quelqu'un suggère que la structure ne convient plus — le format des réunions, les paliers d'adhésion, la façon dont l'argent fonctionne — la conversation se heurte à un mur : « c'est comme ça que les fondateurs l'ont mis en place ». Il n'existe aucun processus concret pour proposer un changement, donc la pression n'a nulle part où aller. Les personnes qui veulent voir la communauté évoluer ne peuvent pas plaider leur cause ; elles partent discrètement, ou menacent de le faire, et l'endroit dérive de plus en plus loin des gens qui y vivent réellement.

### Signes que cela t'arrive

- Les règles d'origine sont traitées comme figées ; il n'existe aucun processus légitime pour les réviser.
- « C'est comme ça que les fondateurs l'ont mis en place » clôt la plupart des conversations sur les réformes.
- Les membres frustrés poussent au changement en menaçant de partir, ou partent tout simplement.
- Les propositions d'adaptation meurent faute de tout mécanisme pour les examiner.
- La communauté est visiblement en décalage avec ses propres besoins actuels.

**Ce n'est _pas_ la même chose que** protéger délibérément les invariants fondamentaux (ça, c'est sain — voir [Invariants fondamentaux non protégés](/articles/rcos-stress-tests/change-emergencies/unprotected-core-invariants) pour la défaillance *opposée*). Le signe distinctif est que *tout* est gelé, sans aucune voie contrainte pour changer quoi que ce soit — l'adaptation légitime devient donc impossible.

### Pourquoi ça arrive

Après une première période de turbulences, les communautés surcompensent souvent en basculant dans la rigidité — la stabilité semble sûre, et rouvrir les règles semble dangereux. Mais un système sans mécanisme de changement légitime ne peut pas s'adapter aux nouveaux membres, aux nouvelles conditions, ni à ses propres erreurs. La pression du changement ne disparaît pas ; elle contourne le système sous forme de départs, de scissions et de transgressions silencieuses des règles.

<details data-kind="rationale">
<summary>Le test de résistance formel (pour les auditeurs)</summary>

**Mode de défaillance** — Il n'existe aucun mécanisme légitime et contraint pour modifier les règles.

**Couches concernées** — Couche 6 (Évolution)

**Invariants pertinents**

* 6.1 Le changement est possible mais contraint
* 6.2 Les changements sont versionnés

**Condition de test** — Les membres ne peuvent ni proposer ni adopter de modifications de règles via un processus défini.

**Comportement RCOS attendu** — Un mécanisme de changement contraint permet aux règles d'être proposées, examinées, révisées et versionnées.

**Critère de réussite** — Le système peut s'adapter par un processus légitime.

**Critère d'échec** — Le changement ne se produit que par départ, scission ou transgression des règles.

</details>

### Quel niveau de maturité ta communauté a-t-elle sur ce point ?

Le binaire réussite/échec est trop tranché pour la vraie vie — la plupart des communautés sont à mi-chemin. Trouve ton barreau, puis vise le suivant.

| Niveau | À quoi ça ressemble |
|---|---|
| **L0 — Implicite** | Aucune voie de changement légitime ; les règles sont gelées et les réformes se font par départ. |
| **L1 — Nommé** | Le groupe admet qu'il ne peut pas s'adapter mais n'a pas construit de mécanisme de changement. |
| **L2 — Documenté** | Un [Protocole de changement](/articles/rcos-templates/layer-6/change-protocol) définit comment les règles peuvent être proposées, examinées et révisées — possible mais contraint. |
| **L3 — Appliqué et répété** | Le changement passe par le processus ; le système s'est adapté au moins une fois sans crise ni schisme. |

La plupart des communautés qui se reconnaissent ici se situent à **L0 ou L1**. L'objectif n'est pas la perfection — c'est de monter d'un barreau.

### Comment RCOS prévient cela

RCOS rend le changement possible *et* borné — ni gelé ni chaotique :

- **[Protocole de changement](/articles/rcos-templates/layer-6/change-protocol)** — définir une voie légitime et contrainte pour proposer et adopter des changements.
- **[Historique des versions](/articles/rcos-templates/layer-6/version-history)** — suivre comment les règles évoluent, pour que le changement soit visible et borné plutôt que redouté.

Voir aussi la spécification : [Couche 6 — Mécanismes de changement](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#81-change-mechanisms) et [Versionnage et autorité](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#82-versioning-and-authority).

### Si c'est déjà en train d'arriver

Si les règles sont gelées, ouvre un canal sûr avant que davantage de personnes ne partent :

1. **Ouvre un canal pour le changement** — un processus de proposition, même minimal.
2. **Fais passer une adaptation en retard par ce canal** comme preuve de concept.
3. **Distingue les invariants protégés** (délibérément difficiles à changer) du reste (modifiable par processus), pour que « on ne peut pas changer ça » cesse de s'appliquer à tout.

### Ce que cette défaillance tend à déclencher

- **[Normalisation de l'évitement des conflits](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — sans voie de changement légitime, la frustration passe dans la clandestinité.
- **[Précédent de contournement des règles en urgence](/articles/rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent)** — quand le changement normal est impossible, les gens attendent une crise pour l'imposer.

### Tests de résistance connexes

- **[Invariants fondamentaux non protégés](/articles/rcos-stress-tests/change-emergencies/unprotected-core-invariants)** — le déséquilibre inverse : ici, rien ne peut changer ; là-bas, tout peut changer, y compris les fondations.
