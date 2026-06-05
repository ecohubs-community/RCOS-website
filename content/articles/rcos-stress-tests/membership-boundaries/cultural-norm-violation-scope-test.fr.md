---
id: 45a25135
title: Test de portée des violations de normes culturelles
summary: Quand une norme non écrite est punie comme s'il s'agissait d'une règle écrite.
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
    Un membre transgresse une norme forte non écrite (par exemple manger de la
    viande dans une communauté qui s'identifie comme végane) et la réaction est
    émotionnelle et improvisée.
  - >-
    On ne sait pas clairement si la norme est une règle contraignante ou une
    préférence partagée.
  - >-
    L'intensité de l'application dépend de qui est contrarié, et non d'une règle
    écrite.
  - >-
    Les gens supposent que « tout le monde sait » la norme, mais elle n'a jamais
    été déclarée comme une condition d'adhésion.
  - >-
    Les réactions vont de l'ostracisme à la pression à la sortie, sans procédure
    équitable.
preventsWith:
  - rcos-templates/layer-0/scope-declaration
  - rcos-templates/layer-1/membership-agreement
  - rcos-templates/layer-0/identity-constraints-register
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: feeds
    note: >-
      Une application arbitraire et émotionnelle apprend aux membres à
      dissimuler leur comportement plutôt qu'à le révéler.
related:
  - rcos-stress-tests/culture-influence/charismatic-spiritual-authority
lang: fr
sourceHash: 08d99a95
---

> **Gravité :** Moyenne — rarement fatale, mais elle produit les conflits les plus durs et les plus personnels.
> **Où ça mord :** À n'importe quel stade ; plus fort dans les communautés à forte identité partagée.
> **Tu vis déjà ça ?** Saute à [Si ça arrive déjà](#si-ça-arrive-déjà).

### Ça te dit quelque chose ?

La communauté a une identité forte — végane, sobre, silencieuse avant midi, peu importe — et tout le monde « sait » la norme. Puis quelqu'un la transgresse. Soudain, il y a dans l'air une intensité difficile à nommer : est-ce une violation de règle, ou juste quelque chose qui a contrarié les gens ? La réaction est rapide et émotionnelle, les conséquences varient selon qui est le plus offensé, et personne ne peut indiquer où, exactement, cette norme a été écrite comme une condition pour être ici.

### Signes que ça t'arrive

- Un membre transgresse une norme forte non écrite et la réaction est émotionnelle et improvisée.
- On ne sait pas clairement si la norme est une règle contraignante ou une préférence partagée.
- L'intensité de l'application dépend de qui est contrarié, et non d'une règle écrite.
- Les gens supposent que « tout le monde sait » la norme, mais elle n'a jamais été déclarée comme une condition d'adhésion.
- Les réactions vont de l'ostracisme à la pression à la sortie, sans procédure équitable.

**Ce n'est _pas_ la même chose que** faire respecter un invariant ou une condition d'adhésion explicitement déclarés. Le signe révélateur est *l'application d'une norme qui n'a jamais été écrite comme étant gouvernée* — une punition sans base de règle explicite.

### Pourquoi ça arrive

Les cultures partagées fortes génèrent des normes non écrites puissantes. Quand quelque chose semble manifestement mal, le groupe l'applique comme s'il s'agissait d'une loi — mais si la norme n'a jamais été déclarée comme invariant central ou comme condition d'adhésion, cette application est non gouvernée : arbitraire, émotionnellement guidée, et impossible à contester. Le préjudice n'est pas la norme elle-même ; c'est de punir des gens en vertu de règles qui n'existent pas formellement.

<details data-kind="rationale">
<summary>Le test de résistance formel (pour les auditeurs)</summary>

**Mode de défaillance** — Un membre transgresse une norme culturelle forte (par exemple manger de la viande dans une communauté végane).

**Couches impliquées** — Couche 0 (Objectif & Portée), Couche 1 (Adhésion), Couche 4 (Conflit)

**Invariants pertinents**

* 0.2 Portée gouvernée explicite
* 1.1 Aucune règle d'adhésion implicite
* 4.4 La sécurité prime sur la participation

**Condition de test** — Une violation de norme se produit et la réponse d'application est peu claire ou émotionnellement guidée.

**Comportement RCOS attendu** — Déterminer si la règle est un invariant central, une condition d'adhésion ou une préférence hors portée ; n'appliquer une procédure équitable que si elle est explicitement gouvernée.

**Critères de réussite** — La réponse s'aligne strictement sur la portée déclarée et les règles d'adhésion.

**Critères d'échec** — Punition ou exclusion sans base de règle explicite.

</details>

### Quelle est la maturité de ta communauté sur ce point ?

Réussi/échoué est trop tranchant pour la vraie vie — la plupart des communautés sont à mi-chemin. Trouve ton échelon, puis vise le suivant.

| Niveau | À quoi ça ressemble |
|---|---|
| **L0 — Implicite** | Les normes fortes sont appliquées au feeling ; personne n'a déclaré ce qui est réellement gouverné. |
| **L1 — Nommé** | Le groupe réalise que certaines normes ne sont pas écrites mais n'a pas trié règle et préférence. |
| **L2 — Documenté** | Une [Déclaration de Portée](/articles/rcos-templates/layer-0/scope-declaration) distingue les invariants centraux, les conditions d'adhésion et les préférences hors portée ; la procédure équitable ne s'applique qu'aux règles gouvernées. |
| **L3 — Appliqué et répété** | Les réponses suivent la portée déclarée ; une préférence non écrite ne peut pas déclencher de punition ; cela a été testé sur une vraie violation. |

La plupart des communautés qui se reconnaissent ici se situent à **L0 ou L1**. L'objectif n'est pas la perfection — c'est de monter d'un échelon.

### Comment RCOS prévient cela

RCOS oblige la communauté à décider *ce qu'elle gouverne réellement* avant d'appliquer :

- **[Déclaration de Portée](/articles/rcos-templates/layer-0/scope-declaration)** — trier chaque norme importante en invariant central, condition d'adhésion ou préférence hors portée.
- **[Accord d'Adhésion](/articles/rcos-templates/layer-1/membership-agreement)** — rendre les conditions comportementales contraignantes explicites à l'entrée, pour que personne ne soit puni par surprise.
- **[Registre des Contraintes Identitaires](/articles/rcos-templates/layer-0/identity-constraints-register)** — déclarer ce que l'identité de la communauté gouverne et ne gouverne pas.

Voir aussi la spec : [Couche 0 — Déclaration de Portée](/articles/rcos-core/v0-1/layer-0-identity-scope#22-scope-declaration) et [Couche 1 — Droits et Obligations](/articles/rcos-core/v0-1/layer-1-membership-system#34-rights-and-obligations).

### Si ça arrive déjà

Une violation vient de se produire et la réaction est échauffée. Ralentis :

1. **Mets l'application en pause.** Sépare « nous sommes contrariés » de « une règle gouvernée a été enfreinte ».
2. **Classe la norme.** Est-ce un invariant déclaré, une condition d'adhésion ou une préférence non déclarée ?
3. **N'applique une procédure équitable que si c'est gouverné.** Si ce n'est pas le cas, la leçon est de *la déclarer à l'avenir* (ou pas), jamais de punir rétroactivement.
4. **Décide pour la suite.** Si la communauté veut que cette norme soit contraignante, écris-la comme une condition d'adhésion explicite.

### Ce que cet échec a tendance à déclencher

- **[Normalisation de l'évitement des conflits](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — une application arbitraire et émotionnelle apprend aux membres à dissimuler leur comportement plutôt qu'à le révéler.

### Tests de résistance liés

- **[Autorité spirituelle charismatique](/articles/rcos-stress-tests/culture-influence/charismatic-spiritual-authority)** — les figures vénérées sont souvent celles dont les préférences sont appliquées comme des normes non déclarées.
