---
id: 9d3e6a24
title: Croissance rapide sans intégration
summary: >-
  Quand la communauté grandit plus vite qu'elle ne peut intégrer qui que ce
  soit.
parentId: a9e4c65d
order: 2
severity: high
stage:
  - growth
layers:
  - 1
  - 5
invariants:
  - '1.1'
  - '5.2'
remediationReady: true
tags:
  - 'Layer 1: Membership'
  - High severity
symptoms:
  - La communauté grandit plus vite qu'elle ne peut intégrer les gens.
  - >-
    Les nouveaux membres obtiennent accès et droits sans processus d'entrée ni
    période d'essai clairs.
  - >-
    Les nouveaux venus ne connaissent pas les normes, l'histoire, ni la manière
    dont les décisions sont prises — et ce n'est le rôle de personne de leur
    apprendre.
  - >-
    "Qui a réellement décidé de les laisser entrer ?" est une question difficile
    à trancher.
  - >-
    La culture semble se diluer ou se fragmenter à mesure que le nombre
    augmente.
preventsWith:
  - rcos-templates/layer-1/onboarding-protocol
  - rcos-templates/layer-1/membership-agreement
  - rcos-templates/layer-1/membership-state-registry
cascade:
  - test: rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test
    relation: enables
    note: >-
      Les nouveaux venus qui n'ont jamais appris les normes entrent en collision
      avec elles, déclenchant une application improvisée.
  - test: >-
      rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
    relation: feeds
    note: >-
      Dans le chaos de l'intégration, quelques personnes maintiennent tout en
      place de manière informelle.
related:
  - >-
    rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution
lang: fr
sourceHash: 465078de
---

> **Sévérité :** Élevée — dilue silencieusement la culture et la gouvernance, par accrétion plutôt que par décision.
> **Où ça mord :** La phase de croissance, surtout après un pic d'intérêt ou d'attention.
> **Tu vis déjà cela ?** Saute à [Si c'est déjà en train d'arriver](#si-cest-déjà-en-train-darriver).

### Ça te dit quelque chose ?

L'intérêt explose. Les gens veulent entrer, et dire oui fait du bien — on dirait que tout fonctionne. De nouveaux visages arrivent, reçoivent clés, identifiants et droit de vote, et rejoignent le chat. Mais il n'y a pas de véritable processus d'entrée, pas de période d'essai, personne dont le rôle est de les accompagner à travers l'histoire, les normes, la manière dont les décisions se prennent réellement. Un an plus tard, la communauté est deux fois plus grande et, d'une certaine façon, moins elle-même : la culture partagée s'est étiolée, et personne ne saurait dire à quel moment.

### Signes que cela t'arrive

- La communauté grandit plus vite qu'elle ne peut intégrer les gens.
- Les nouveaux membres obtiennent accès et droits sans processus d'entrée ni période d'essai clairs.
- Les nouveaux venus ne connaissent pas les normes, l'histoire, ni la manière dont les décisions sont prises — et ce n'est le rôle de personne de leur apprendre.
- "Qui a réellement décidé de les laisser entrer ?" est une question difficile à trancher.
- La culture semble se diluer ou se fragmenter à mesure que le nombre augmente.

**Ce n'est _pas_ la même chose qu'**une croissance rapide intentionnelle et bien dotée en ressources, avec un véritable pipeline d'intégration. Le signe révélateur, ce sont *des droits sans processus* — les gens deviennent membres simplement en se présentant, et l'intégration est laissée au hasard.

### Pourquoi cela arrive

La croissance ressemble à de la réussite, alors les communautés disent oui plus vite qu'elles ne peuvent absorber. Sans processus d'entrée formel, l'appartenance devient implicite — personne ne peut dire exactement qui est dedans ni pourquoi — et sans intégration, les connaissances opérationnelles et culturelles ne se transmettent jamais. Le résultat est une dilution silencieuse : la gouvernance et la culture s'érodent non par une décision, mais par l'accumulation régulière de membres non intégrés.

<details data-kind="rationale">
<summary>Le test de résistance formel (pour les auditeurs)</summary>

**Mode de défaillance** — De nouveaux membres rejoignent sans intégration ni période d'essai.

**Couches concernées** — Couche 1 (Membres), Couche 5 (Opérations)

**Invariants pertinents**

* 1.1 Pas d'appartenance implicite
* 5.2 Les connaissances opérationnelles sont documentées

**Condition du test** — Les membres obtiennent des droits sans processus d'entrée formel.

**Comportement RCOS attendu** — L'intégration et la période d'essai obligatoires sont appliquées.

**Critères de réussite** — Le statut d'appartenance est explicite à tout moment.

**Critères d'échec** — La culture et la gouvernance se diluent silencieusement.

</details>

### Quelle est la maturité de ta communauté sur ce point ?

Réussite/échec est trop tranché pour la vraie vie — la plupart des communautés sont à mi-chemin. Trouve ton échelon, puis vise le suivant.

| Niveau | À quoi cela ressemble |
|---|---|
| **L0 — Implicite** | Les gens deviennent membres simplement en se présentant ; pas de processus d'entrée, pas d'intégration. |
| **L1 — Nommé** | Le groupe ressent la dilution mais n'a pas construit de pipeline d'entrée / période d'essai. |
| **L2 — Documenté** | Un processus défini d'[intégration et de période d'essai](/articles/rcos-templates/layer-1/onboarding-protocol) conditionne l'appartenance ; les états sont suivis dans un [registre](/articles/rcos-templates/layer-1/membership-state-registry). |
| **L3 — Appliqué et répété** | Le statut d'appartenance est explicite à tout moment ; chaque nouveau venu passe par l'intégration ; le rythme de croissance est ajusté à la capacité d'intégration. |

La plupart des communautés qui se reconnaissent ici se situent en **L0 ou L1**. L'objectif n'est pas la perfection — c'est de monter d'un échelon.

### Comment RCOS prévient cela

RCOS fait en sorte que les droits suivent l'intégration, pas l'arrivée :

- **[Protocole d'intégration](/articles/rcos-templates/layer-1/onboarding-protocol)** — un parcours d'entrée et de période d'essai obligatoire pour que la culture et les connaissances se transmettent réellement.
- **[Accord d'adhésion](/articles/rcos-templates/layer-1/membership-agreement)** — rendre explicites les conditions d'appartenance dès l'entrée.
- **[Registre des états d'appartenance](/articles/rcos-templates/layer-1/membership-state-registry)** — savoir à tout moment qui est en période d'essai, membre à part entière, ou sorti.

Voir aussi la spécification : [Couche 1 — Entrée et intégration](/articles/rcos-core/v0-1/layer-1-membership-system#32-entry-and-onboarding) et [États d'appartenance](/articles/rcos-core/v0-1/layer-1-membership-system#31-membership-states).

### Si c'est déjà en train d'arriver

Si la croissance a déjà dépassé l'intégration, ralentis les entrées et rattrape le retard :

1. **Suspends ou ralentis les entrées** jusqu'à ce qu'un parcours d'intégration existe — la vraie limite, c'est la capacité d'intégration, pas l'enthousiasme.
2. **Définis les états d'appartenance maintenant** et place chacun dans l'un d'eux ; l'ambiguïté est au cœur de la défaillance.
3. **Rattrape l'intégration pour les arrivants récents** — transmets-leur les normes et les connaissances opérationnelles qu'ils ont manquées.
4. **Surveille la cascade** — une croissance non intégrée engendre des heurts sur des normes non déclarées et des angles morts de pouvoir invisible.

### Ce que cette défaillance tend à déclencher

- **[Test de portée des violations de normes culturelles](/articles/rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test)** — les nouveaux venus qui n'ont jamais appris les normes entrent en collision avec elles.
- **[Pouvoir invisible via les responsabilités](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — dans le chaos, quelques personnes maintiennent tout en place de manière informelle.

### Tests de résistance liés

- **[Auto-suffisance sans contribution collective](/articles/rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution)** — les membres non intégrés n'apprennent jamais que les communs sont aussi à eux d'entretenir.
