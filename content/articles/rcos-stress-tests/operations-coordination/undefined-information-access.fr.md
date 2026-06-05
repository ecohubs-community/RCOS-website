---
id: e4b2c6a9
title: Accès à l'information non défini
summary: 'Quand le qui-peut-voir-quoi est décidé par qui tu connais, pas par une règle.'
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
    Certains membres sont « au courant » des décisions, des finances ou des
    plans ; d'autres l'apprennent tard ou jamais.
  - >-
    Il n'existe aucune règle pour définir ce qui est ouvert aux membres, ce qui
    est privé, et qui peut accéder à quoi.
  - >-
    Les informations sensibles sur les membres sont conservées de manière
    informelle, sans limites convenues.
  - >-
    Les nouveaux arrivants ne trouvent pas les documents, l'historique ou le
    contexte dont ils ont besoin.
  - L'accès aux comptes et aux dossiers clés dépend des relations personnelles.
preventsWith:
  - rcos-templates/layer-5/operations-manual
  - rcos-templates/layer-5/meeting-templates
cascade:
  - test: rcos-stress-tests/governance-power/informal-clique-decision-making
    relation: enables
    note: >-
      L'asymétrie d'information est le substrat autour duquel un groupe
      restreint se forme.
  - test: >-
      rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
    relation: enables
    note: >-
      Celui qui détient les dossiers détient discrètement le pouvoir sur ce que
      les autres peuvent faire.
related:
  - >-
    rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
lang: fr
sourceHash: 6ee1cc5b
---

> **Gravité :** Moyenne — rarement une crise en soi, mais elle construit discrètement des groupes restreints et de la fragilité.
> **Où ça mord :** Phases de croissance et de maturité, à mesure que les dossiers et les canaux se multiplient.
> **Tu vis déjà ça ?** Va directement à [Si c'est déjà en train d'arriver](#si-cest-déjà-en-train-darriver).

### Ça te dit quelque chose ?

Certaines personnes semblent toujours être au courant en premier — le plan, l'état du budget, ce qui a été discuté. D'autres apprennent les décisions une fois prises, ou tombent par hasard sur des documents importants. Il n'y a aucune politique à ce sujet ; l'accès s'est simplement développé de manière organique, de personne à personne, de canal à canal. Les nouveaux arrivants ne trouvent pas l'historique dont ils ont besoin, des informations sensibles sur les membres circulent de façon informelle, et « être dans la boucle » est devenu discrètement un marqueur de qui appartient vraiment à la communauté.

### Signes que ça t'arrive

- Certains membres sont « au courant » ; d'autres l'apprennent tard ou jamais.
- Il n'existe aucune règle pour définir ce qui est ouvert aux membres, ce qui est privé, et qui peut accéder à quoi.
- Les informations sensibles sur les membres sont conservées de manière informelle, sans limites convenues.
- Les nouveaux arrivants ne trouvent pas les documents, l'historique ou le contexte dont ils ont besoin.
- L'accès aux comptes et aux dossiers clés dépend des relations personnelles.

**Ce n'est _pas_ la même chose que** d'avoir des limites de confidentialité explicites et convenues — certaines choses *devraient* être privées. L'indice, c'est que l'accès est *non déclaré et inégal* : déterminé de façon informelle, de sorte que l'information devient une monnaie silencieuse d'appartenance.

### Pourquoi ça arrive

L'accès à l'information est rarement conçu ; il s'accumule. Les gens partagent avec ceux en qui ils ont confiance, stockent les choses là où c'est pratique, et le résultat est une carte invisible de qui-sait-quoi qui suit la proximité sociale plutôt que le rôle. Cette asymétrie durcit les groupes restreints, isole les nouveaux arrivants et rend les connaissances critiques fragiles — détenues dans quelques boîtes mail et mémoires plutôt que quelque part de repérable.

<details data-kind="rationale">
<summary>Le stress test formel (pour les auditeurs)</summary>

**Mode de défaillance** — Qui peut accéder à quelle information est informel et inégal.

**Couches impliquées** — Couche 5 (Opérations)

**Invariants pertinents**

* 5.4 Les règles d'accès à l'information sont explicites
* 5.2 Les connaissances opérationnelles sont documentées

**Condition du test** — Les limites de transparence et de confidentialité ne sont pas définies ; l'accès dépend des relations.

**Comportement RCOS attendu** — Les valeurs par défaut de transparence, les limites de confidentialité et l'accès par rôle sont explicitement définis ; les dossiers sont repérables.

**Critères de réussite** — L'accès suit des règles déclarées, pas la proximité sociale.

**Critères d'échec** — L'information est une monnaie d'appartenance.

</details>

### Quelle est la maturité de ta communauté sur ce point ?

Réussite/échec est trop tranché pour la vraie vie — la plupart des communautés sont à mi-chemin. Trouve ton échelon, puis vise le suivant.

| Niveau | À quoi ça ressemble |
|---|---|
| **N0 — Implicite** | L'accès est informel et inégal ; être « au courant » dépend des relations. |
| **N1 — Nommé** | Le groupe sent l'asymétrie mais n'a pas défini de règles d'accès. |
| **N2 — Documenté** | Un [Manuel des opérations](/articles/rcos-templates/layer-5/operations-manual) définit les valeurs par défaut de transparence, les limites de confidentialité, et qui peut accéder à quoi. |
| **N3 — Appliqué et répété** | L'accès suit des règles déclarées ; les dossiers sont repérables ; les limites de confidentialité sont explicites et respectées. |

La plupart des communautés qui se reconnaissent ici se situent à **N0 ou N1**. L'objectif n'est pas la perfection — c'est de monter d'un échelon.

### Comment RCOS prévient ça

RCOS fait de l'accès à l'information une règle déclarée, pas un fait social :

- **[Manuel des opérations](/articles/rcos-templates/layer-5/operations-manual)** — définis les valeurs par défaut de transparence, les limites de confidentialité, et l'accès par rôle.
- **[Modèles de réunion](/articles/rcos-templates/layer-5/meeting-templates)** — consigne les décisions là où tous les membres peuvent les trouver, pas dans des canaux privés.

Voir aussi la spécification : [Couche 5 — Documentation et flux d'information](/articles/rcos-core/v0-1/layer-5-operations-coordination#73-documentation-and-information-flow).

### Si c'est déjà en train d'arriver

Si l'accès s'est construit par accident, redessine-le intentionnellement :

1. **Cartographie ce qui existe et qui peut y accéder** — les lacunes deviennent vite évidentes.
2. **Définis les valeurs par défaut :** ce qui est ouvert à tous les membres, ce qui est privé, et qui administre l'accès.
3. **Déplace les dossiers critiques vers un stockage partagé et accessible par rôle** pour que les connaissances ne soient pas liées aux relations.
4. **Surveille la cascade** — l'asymétrie d'information est la façon dont les cliques et le pouvoir invisible se forment.

### Ce que cette défaillance a tendance à déclencher

- **[Prise de décision par clique informelle](/articles/rcos-stress-tests/governance-power/informal-clique-decision-making)** — l'asymétrie d'information est le substrat d'un groupe restreint.
- **[Pouvoir invisible via les responsabilités](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — celui qui détient les dossiers détient un pouvoir silencieux.

### Stress tests liés

- **[Pouvoir invisible via les responsabilités](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — les connaissances non documentées et l'accès non défini sont les deux faces d'une même concentration.
