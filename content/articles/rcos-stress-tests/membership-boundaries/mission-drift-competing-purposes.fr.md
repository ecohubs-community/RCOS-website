---
id: f1c3d8b5
title: Dérive de mission par objectifs concurrents
summary: Quand la communauté essaie d'être tout et ne peut plus rien prioriser.
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
    Les membres donneraient des réponses véritablement différentes à la question
    « à quoi sert principalement cette communauté ? »
  - >-
    De nouveaux projets et de nouvelles directions ne cessent d'être ajoutés ;
    aucun n'est abandonné.
  - >-
    Les priorités s'opposent de manière irréconciliable — revenus contre
    écologie contre pratique — sans moyen d'arbitrer.
  - >-
    Les décisions s'enlisent parce qu'il n'y a aucun sens partagé de ce qui
    compte le plus.
  - >-
    Des factions se forment autour de différentes visions de ce qu'est
    réellement la communauté.
preventsWith:
  - rcos-templates/layer-0/purpose-charter
  - rcos-templates/layer-0/scope-declaration
  - rcos-templates/layer-0/identity-constraints-register
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: feeds
    note: >-
      Les conflits d'objectifs irréconciliables sont trop énormes pour être
      soulevés, alors tout le groupe apprend à les éviter.
  - test: rcos-stress-tests/governance-power/informal-clique-decision-making
    relation: enables
    note: >-
      Des factions se forment autour de visions concurrentes et commencent à
      décider entre elles.
related:
  - rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test
lang: fr
sourceHash: '62006333'
---

> **Gravité :** Moyenne — lente et corrosive : elle ne brise pas la communauté, elle dissout son focus.
> **Où ça mord :** Phases de croissance et de maturité, à mesure que les ambitions et les membres s'accumulent.
> **Déjà en train de vivre ça ?** Saute à [Si ça se produit déjà](#si-ça-se-produit-déjà).

### Ça te dit quelque chose ?

Tout a commencé avec une idée claire, puis ça a grandi — une éco-ferme, et aussi un lieu de retraite, et aussi un espace artistique, et aussi un moteur de revenus, et aussi une école. Chaque ajout était louable, donc rien n'a jamais été refusé. Maintenant, quand deux de ces objectifs tirent dans des directions opposées — le projet de revenus veut le champ dont la forêt nourricière a besoin — il n'y a aucun moyen de décider, parce que la communauté n'a jamais convenu de quel objectif vient en premier. Les gens ne se disputent pas parce qu'ils sont en désaccord sur les valeurs ; ils se disputent parce que chacun est loyal envers une version différente, tout aussi réelle, de ce à quoi ce lieu sert.

### Signes que ça t'arrive

- Les membres donneraient des réponses véritablement différentes à la question « à quoi sert principalement cette communauté ? »
- De nouveaux projets et de nouvelles directions ne cessent d'être ajoutés ; aucun n'est abandonné.
- Les priorités s'opposent de manière irréconciliable — revenus contre écologie contre pratique — sans moyen d'arbitrer.
- Les décisions s'enlisent parce qu'il n'y a aucun sens partagé de ce qui compte le plus.
- Des factions se forment autour de différentes visions de ce qu'est réellement la communauté.

**Ce n'est _pas_ la même chose qu'**une communauté avec un seul objectif clair servi par plusieurs activités. Le signe distinctif, ce sont *des objectifs primaires concurrents sans priorité déclarée* — les arbitrages n'ont donc pas de réponse de principe et chaque faction a « raison ».

### Pourquoi ça arrive

Dire oui à chaque but louable semble généreux et inclusif, alors les communautés accumulent les objectifs plus vite qu'elles n'en retirent. Mais quand deux objectifs entrent en conflit — et tôt ou tard, ils le feront — il n'y a aucun moyen de choisir sans un objectif primaire déclaré pour les hiérarchiser. Le résultat, c'est paralysie et factionnalisme : chaque groupe optimise pour un sens différent, tout aussi légitime, de « ce à quoi nous servons », et aucune décision ne peut tous les satisfaire.

<details data-kind="rationale">
<summary>Le test de résistance formel (pour les auditeurs)</summary>

**Mode de défaillance** — La communauté détient plusieurs objectifs primaires concurrents sans priorité déclarée.

**Couches concernées** — Couche 0 (Identité et périmètre)

**Invariants pertinents**

* 0.1 Objectif primaire unique
* 0.2 Périmètre gouverné explicite

**Condition du test** — Deux objectifs déclarés entrent en conflit et il n'y a aucune base de principe pour résoudre l'arbitrage.

**Comportement attendu du RCOS** — Un seul objectif primaire hiérarchise tous les autres ; les arbitrages sont résolus par référence à lui.

**Critères de réussite** — Les conflits d'objectifs ont une résolution de principe.

**Critères d'échec** — Les priorités sont irréconciliables et factionnelles.

</details>

### Quel est le niveau de maturité de ta communauté sur ce point ?

Réussite/échec, c'est trop binaire pour la vraie vie — la plupart des communautés sont à mi-chemin. Trouve ton barreau, puis vise le suivant.

| Niveau | À quoi ça ressemble |
|---|---|
| **L0 — Implicite** | Plusieurs objectifs coexistent sans hiérarchie ; les conflits n'ont pas de résolution de principe. |
| **L1 — Nommé** | Le groupe voit la dérive mais n'a pas déclaré d'objectif primaire. |
| **L2 — Documenté** | Une [Charte d'objectif](/articles/rcos-templates/layer-0/purpose-charter) nomme un seul objectif primaire ; les autres buts sont explicitement secondaires. |
| **L3 — Appliqué et répété** | Les arbitrages sont résolus par référence à l'objectif primaire ; les nouvelles directions sont testées par rapport à lui. |

La plupart des communautés qui se reconnaissent ici se situent à **L0 ou L1**. Le but n'est pas la perfection — c'est de monter d'un barreau.

### Comment le RCOS prévient cela

Le RCOS exige un seul objectif primaire qui peut trancher :

- **[Charte d'objectif](/articles/rcos-templates/layer-0/purpose-charter)** — déclare l'objectif primaire unique qui hiérarchise tous les autres.
- **[Déclaration de périmètre](/articles/rcos-templates/layer-0/scope-declaration)** — énonce ce qui est dans et hors du périmètre, pour que les ajouts soient délibérés.
- **[Registre des contraintes d'identité](/articles/rcos-templates/layer-0/identity-constraints-register)** — définit ce qu'est et n'est pas la communauté.

Voir aussi la spec : [Couche 0 — Définition de l'objectif](/articles/rcos-core/v0-1/layer-0-identity-scope#21-purpose-definition) et [Déclaration de périmètre](/articles/rcos-core/v0-1/layer-0-identity-scope#22-scope-declaration).

### Si ça se produit déjà

Si tu as dérivé vers trop d'objectifs, re-hiérarchise plutôt que d'amputer :

1. **Fais émerger les vraies réponses.** Demande à chacun d'écrire en privé ce qu'il pense être l'objectif primaire ; la dispersion, c'est le diagnostic.
2. **Déclare un objectif primaire.** Tu peux garder les buts secondaires — il suffit de les classer en dessous.
3. **Utilise-le pour arbitrer le conflit en cours** qui a déclenché tout ça, et laisse cela faire jurisprudence.

### Ce que cet échec tend à déclencher

- **[Normalisation de l'évitement des conflits](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — les conflits d'objectifs irréconciliables sont trop énormes pour être soulevés, alors ils sont évités.
- **[Prise de décision par clique informelle](/articles/rcos-stress-tests/governance-power/informal-clique-decision-making)** — des factions se forment autour de visions concurrentes.

### Tests de résistance liés

- **[Test de périmètre de violation de norme culturelle](/articles/rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test)** — tous deux sont des défaillances de périmètre : objectif flou et périmètre gouverné flou voyagent ensemble.
