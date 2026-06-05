---
id: a1d4e7c2
title: Expulsion sans procédure équitable
summary: 'Quand un membre peut être évincé sans procédure, sans recours et sans trace.'
parentId: 45625035
order: 1
severity: high
stage:
  - growth
  - mature
layers:
  - 1
  - 4
invariants:
  - '1.4'
  - '1.2'
  - '4.3'
remediationReady: true
tags:
  - 'Layer 1: Membership'
  - High severity
symptoms:
  - Un membre a été exclu (ou poussé à partir) sans procédure définie.
  - >-
    L'exclusion s'est faite par consensus informel, par un vote soudain ou par
    pression sociale — pas par une procédure écrite.
  - 'Il n''y a eu aucune occasion de répondre, aucun motif énoncé, aucun recours.'
  - Les gens ne savent pas vraiment qui a l'autorité d'exclure quelqu'un.
  - >-
    Après coup, d'autres se sont demandé en silence s'ils pouvaient être les
    prochains.
preventsWith:
  - rcos-templates/layer-1/exit-protocol
  - rcos-templates/layer-4/accountability-protocol
  - rcos-templates/layer-1/membership-state-registry
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: enables
    note: >-
      Quand l'exclusion n'a pas de procédure équitable, les membres apprennent
      que la dissidence est dangereuse et cessent de soulever les problèmes.
related:
  - rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test
  - rcos-stress-tests/conflict-accountability/punishment-before-repair
lang: fr
sourceHash: 23ab475a
---

> **Sévérité :** Élevée — l'une des manières les plus fréquentes dont les communautés se fracturent, et la plus difficile à réparer après coup.
> **Où ça mord :** Aux stades de croissance et de maturité, quand apparaît le premier membre véritablement difficile.
> **Tu vis déjà ça ?** Saute à [Si ça se produit déjà](#si-ça-se-produit-déjà).

### Ça te dit quelque chose ?

Quelqu'un est devenu un vrai problème — perturbateur, nuisible, impossible — et finalement, cette personne est partie. Pas par une procédure, parce qu'il n'y en avait pas : c'est arrivé par une réunion tendue, un vote à main levée soudain, ou un lent gel social jusqu'à ce qu'elle parte d'elle-même. C'était peut-être même le bon résultat. Mais il n'y a eu aucun chef d'accusation énoncé, aucune occasion pour elle de répondre, et aucun recours — et discrètement, tous ceux qui ont observé ont enregistré que la communauté peut faire disparaître une personne, et qu'il n'y a aucune règle sur quand.

### Signes que ça t'arrive

- Un membre a été exclu (ou poussé à partir) sans procédure définie.
- L'exclusion s'est faite par consensus informel, par un vote soudain ou par pression sociale.
- Il n'y a eu aucune occasion de répondre, aucun motif énoncé, aucun recours.
- Les gens ne savent pas vraiment qui a l'autorité d'exclure quelqu'un.
- Après coup, d'autres se sont demandé en silence s'ils pouvaient être les prochains.

**Ce _n'est pas_ la même chose que** d'appliquer une procédure d'exclusion forcée documentée — avec motifs, audience et recours — à une situation véritablement intolérable. Le signe révélateur est *une exclusion sans procédure équitable prédéfinie* : le résultat vient d'abord, et la justification vient après, si tant est qu'elle vienne.

### Pourquoi ça arrive

Les communautés évitent de construire des procédures d'expulsion parce qu'elles espèrent ne jamais en avoir besoin — planifier cela semble morbide, voire déloyal. Alors quand un membre devient finalement intolérable, le groupe improvise sous la pression : pression, vote précipité, gel silencieux. Sans procédure équitable, l'exclusion devient arbitraire et génératrice de peur, et la frontière entre « on a dû » et « on a voulu » disparaît — pour la personne exclue, et pour tous ceux qui regardent.

<details data-kind="rationale">
<summary>Le stress test formel (pour les auditeurs)</summary>

**Mode de défaillance** — Un membre est exclu sans procédure prédéfinie et documentée.

**Couches concernées** — Couche 1 (Adhésion), Couche 4 (Conflit)

**Invariants pertinents**

* 1.4 Procédure équitable pour l'exclusion forcée
* 1.2 L'entrée et la sortie sont toujours possibles
* 4.3 La réparation précède la sanction

**Condition du test** — Un membre est expulsé ou poussé à partir sans motifs, audience ni recours.

**Comportement RCOS attendu** — L'exclusion forcée suit une procédure prédéfinie : motifs énoncés, occasion de répondre et voie de recours ; une tentative de réparation est faite avant l'exclusion.

**Critères de réussite** — Toute exclusion est traçable à des motifs documentés et à une procédure équitable.

**Critères d'échec** — L'exclusion est arbitraire, informelle et sans recours.

</details>

### Quel est le niveau de maturité de ta communauté sur ce point ?

Réussite/échec est trop binaire pour la vie réelle — la plupart des communautés sont à mi-chemin. Trouve ton barreau, puis vise le suivant.

| Niveau | À quoi ça ressemble |
|---|---|
| **L0 — Implicite** | L'exclusion est possible mais non définie ; elle se fait par pression ou par un vote soudain. |
| **L1 — Nommé** | Le groupe sait qu'il n'a pas de procédure d'expulsion mais n'en a pas construit. |
| **L2 — Documenté** | Une procédure d'exclusion forcée existe — motifs, préavis, audience et recours — dans un [Protocole de sortie](/articles/rcos-templates/layer-1/exit-protocol). |
| **L3 — Appliqué et éprouvé** | Toute exclusion suit une procédure équitable ; elle a été appliquée équitablement au moins une fois, y compris avec une vraie occasion de répondre. |

La plupart des communautés qui se reconnaissent ici se situent à **L0 ou L1**. L'objectif n'est pas la perfection — c'est de monter d'un barreau.

### Comment RCOS prévient cela

RCOS exige que la décision d'adhésion la plus difficile soit la plus procédurale :

- **[Protocole de sortie](/articles/rcos-templates/layer-1/exit-protocol)** — définis les motifs, le préavis, l'audience et le recours pour l'exclusion forcée *avant* d'en avoir besoin.
- **[Protocole de responsabilité](/articles/rcos-templates/layer-4/accountability-protocol)** — une voie axée sur la réparation pour que l'exclusion soit le dernier recours, pas le premier réflexe.
- **[Registre d'état d'adhésion](/articles/rcos-templates/layer-1/membership-state-registry)** — fais de la suspension ou de l'exclusion un changement d'état explicite et consigné, pas une humeur.

Voir aussi la spécification : [Couche 1 — Sortie et séparation](/articles/rcos-core/v0-1/layer-1-membership-system#36-exit-and-separation) et [Couche 4 — Sanctions, réparation et séparation](/articles/rcos-core/v0-1/layer-4-conflict-repair-accountability#64-sanctions-repair-and-separation).

### Si ça se produit déjà

Une exclusion vient d'avoir lieu, ou est en cours. Ralentis le processus et restaure la légitimité :

1. **Suspends une exclusion en cours.** Une sortie irréversible sans procédure est le danger.
2. **Énonce les motifs par écrit** et donne à la personne une vraie occasion de répondre.
3. **Définis la procédure maintenant et applique-la** — offrir un recours rétroactivement répare la légitimité pour tous ceux qui regardent.
4. **Surveille la cascade** — l'expulsion arbitraire apprend à toute la communauté à s'auto-censurer.

### Ce que cette défaillance tend à déclencher

- **[Normalisation de l'évitement du conflit](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — si prendre la parole peut te faire exclure, les gens cessent de prendre la parole.

### Stress tests apparentés

- **[Sanction avant réparation](/articles/rcos-stress-tests/conflict-accountability/punishment-before-repair)** — le réflexe punitif qui transforme la responsabilité en expulsion en premier lieu.
- **[Test de portée des violations de normes culturelles](/articles/rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test)** — une violation de norme non déclarée est souvent ce qui déclenche la ruée vers l'expulsion.
