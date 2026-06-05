---
id: 7b1c4e02
title: Travail externalisé contournant la contribution
summary: Quand l'argent achète discrètement une porte de sortie à la vie communautaire.
parentId: cbd2804b
order: 1
severity: medium
stage:
  - growth
  - mature
layers:
  - 3
  - 1
  - 4
invariants:
  - '1.3'
  - '3.3'
  - '4.1'
remediationReady: true
tags:
  - 'Layer 3: Economy'
  - Medium severity
symptoms:
  - >-
    Un membre plus aisé paie des personnes extérieures pour couvrir sa part du
    travail communautaire.
  - >-
    Des exigences de contribution existent mais sont discrètement satisfaites
    avec de l'argent.
  - >-
    Du ressentiment monte entre ceux qui se présentent et ceux qui font des
    chèques.
  - >-
    Aucune règle n'a été convenue sur la possibilité que l'argent remplace la
    participation.
  - >-
    L'effort et la richesse deviennent interchangeables sans que personne n'ait
    décidé qu'ils devaient l'être.
preventsWith:
  - rcos-templates/layer-3/internal-economy-protocol
  - rcos-templates/layer-1/membership-agreement
  - rcos-templates/layer-4/accountability-protocol
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: feeds
    note: >-
      Le ressentiment participation-contre-paiement est exactement le type de
      conflit que l'on évite jusqu'à ce qu'il se durcisse en lignes de classe.
related:
  - >-
    rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution
  - rcos-stress-tests/economy-resources/commons-privatization-through-land-sales
lang: fr
sourceHash: eb16b79a
---

> **Sévérité :** Moyenne — corrosif plutôt que catastrophique, mais stratifie discrètement la communauté.
> **Où ça mord :** Phases de croissance et de maturité, dès que la richesse des membres commence à diverger.
> **Tu vis déjà ça ?** Va à [Si c'est déjà en train d'arriver](#si-cest-déjà-en-train-darriver).

### Ça te dit quelque chose ?

La communauté attend que chacun mette la main à la pâte pour le travail partagé — les journées de construction, la récolte, les réparations. Un membre, plus occupé ou plus aisé que les autres, commence à payer un prestataire pour couvrir sa part. C'est efficace. Le travail est fait. Mais les personnes qui se présentent avec leurs propres mains commencent à remarquer que pour certains membres, l'appartenance est quelque chose que l'on peut simplement acheter, et un ressentiment silencieux commence à séparer ceux qui participent de ceux qui paient.

### Signes que cela t'arrive

- Un membre plus aisé paie des personnes extérieures pour couvrir sa part du travail communautaire.
- Des exigences de contribution existent mais sont discrètement satisfaites avec de l'argent.
- Du ressentiment monte entre ceux qui se présentent et ceux qui font des chèques.
- Aucune règle n'a été convenue sur la possibilité que l'argent remplace la participation.
- L'effort et la richesse deviennent interchangeables sans que personne n'ait décidé qu'ils devaient l'être.

**Ce n'est _pas_ la même chose qu'**une communauté qui a explicitement convenu que l'argent peut remplacer le travail (une équivalence déclarée). Le signe révélateur est *le contournement sans accord* — les attentes de contribution existent, mais la richesse les écrase silencieusement.

### Pourquoi cela arrive

Quand la contribution est attendue mais que sa relation à l'argent reste indéfinie, les personnes qui peuvent payer le feront — c'est rationnel et facile. Sans réponse, cela convertit la richesse en exemption de la vie communautaire, stratifiant discrètement les membres entre ceux qui participent et ceux qui s'achètent une porte de sortie, et érodant la symétrie droits–obligations sur laquelle l'appartenance est censée reposer.

<details data-kind="rationale">
<summary>Le test de stress formel (pour les auditeurs)</summary>

**Mode de défaillance** — Un membre évite la contribution et embauche du travail externe à la place.

**Couches concernées** — Couche 3 (Économie), Couche 1 (Appartenance), Couche 4 (Responsabilité)

**Invariants pertinents**

* 1.3 Symétrie droits–obligations
* 3.3 La reconnaissance de la contribution est explicite
* 4.1 Le conflit DOIT être traité

**Condition du test** — Des attentes de contribution existent mais sont contournées par l'argent.

**Comportement RCOS attendu** — Déterminer si l'externalisation est autorisée ; appliquer les règles d'équivalence ou déclencher un processus de responsabilité.

**Critères de réussite** — La logique de contribution est appliquée de manière cohérente.

**Critères d'échec** — La richesse remplace la participation sans accord.

</details>

### Quelle est la maturité de ta communauté sur ce sujet ?

Réussi/échoué est trop tranché pour la vie réelle — la plupart des communautés sont à mi-chemin. Trouve ton barreau, puis vise le suivant.

| Niveau | À quoi cela ressemble |
|---|---|
| **L0 — Implicite** | La possibilité que l'argent remplace la participation n'est pas définie ; les gens s'achètent discrètement une sortie. |
| **L1 — Nommé** | La tension est reconnue mais aucune règle d'équivalence ni voie de responsabilité n'existe. |
| **L2 — Documenté** | Le [Protocole d'économie interne](/articles/rcos-templates/layer-3/internal-economy-protocol) précise si et comment l'argent remplace le travail ; l'[Accord d'appartenance](/articles/rcos-templates/layer-1/membership-agreement) lie les obligations aux droits. |
| **L3 — Appliqué et rodé** | La logique de contribution est appliquée de manière cohérente ; un contournement déclenche la règle d'équivalence convenue ou un processus de responsabilité — et l'a déjà fait. |

La plupart des communautés qui se reconnaissent ici se situent à **L0 ou L1**. L'objectif n'est pas la perfection — c'est de monter d'un barreau.

### Comment RCOS prévient cela

RCOS force la communauté à *décider* de la relation argent–travail au lieu de la laisser par défaut :

- **[Protocole d'économie interne](/articles/rcos-templates/layer-3/internal-economy-protocol)** — décider explicitement si l'argent peut remplacer le travail, et à quelle équivalence.
- **[Accord d'appartenance](/articles/rcos-templates/layer-1/membership-agreement)** — lier les obligations de contribution aux droits d'appartenance, pour que la participation ne soit pas optionnelle-selon-la-richesse.
- **[Protocole de responsabilité](/articles/rcos-templates/layer-4/accountability-protocol)** — une voie définie pour quand les attentes sont contournées.

Voir aussi la spécification : [Couche 3 — Reconnaissance de la contribution](/articles/rcos-core/v0-1/layer-3-economic-resource-system#52-contribution-recognition) et [Couche 1 — Droits et obligations](/articles/rcos-core/v0-1/layer-1-membership-system#34-rights-and-obligations).

### Si c'est déjà en train d'arriver

Décide la règle avant que le ressentiment ne devienne une ligne de classe :

1. **Nomme le vide de règle.** Décidez, ensemble, si l'externalisation est autorisée du tout — et à quelles conditions.
2. **Établis une équivalence (ou interdis la substitution)** pour que la réponse soit cohérente, pas négociée au cas par cas.
3. **Adresse directement le ressentiment** par la voie de responsabilité ou de conflit avant qu'il ne se durcisse.

### Ce que cette défaillance tend à déclencher

- **[Normalisation de l'évitement du conflit](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — le ressentiment participation-contre-paiement est exactement le type de conflit qu'un groupe évite jusqu'à ce qu'il devienne structurel.

### Tests de stress liés

- **[Auto-suffisance sans contribution collective](/articles/rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution)** — le cousin du désengagement : ici les gens s'achètent une sortie de la contribution, là ils se retirent simplement.
- **[Privatisation des communs par les ventes de terrain](/articles/rcos-stress-tests/economy-resources/commons-privatization-through-land-sales)** — le même découplage entre richesse et obligation partagée, au niveau de la terre.
