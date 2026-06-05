---
id: 1agdfya7
title: Précédent de contournement des règles en cas d'urgence
summary: >-
  Quand une exception temporaire en temps de crise devient discrètement la règle
  permanente.
parentId: 6acde7a7
order: 0
severity: high
stage:
  - growth
  - mature
layers:
  - 2
  - 6
invariants:
  - '2.3'
  - '6.2'
remediationReady: true
tags:
  - 'Layer 2: Governance'
  - High severity
symptoms:
  - >-
    Pendant une crise, le processus normal a été suspendu « juste pour l'instant
    » — et n'a jamais été pleinement rétabli.
  - >-
    Une décision prise dans l'urgence est devenue discrètement la nouvelle
    structure permanente.
  - >-
    Les pouvoirs d'urgence n'ont jamais été définis à l'avance, donc leur portée
    et leur date de fin sont floues.
  - >-
    « On n'avait pas le temps de le faire correctement » devient une
    justification récurrente.
  - >-
    Il n'existe aucun journal distinguant les exceptions d'urgence des
    changements de règles permanents.
preventsWith:
  - rcos-templates/layer-6/change-protocol
  - rcos-templates/layer-2/governance-protocol
  - rcos-templates/layer-0/invariants-register
cascade:
  - test: rcos-stress-tests/governance-power/founder-informal-veto
    relation: feeds
    note: >-
      Celui ou celle qui exerce le pouvoir d'urgence de manière informelle a
      tendance à le consolider une fois la crise passée.
  - test: >-
      rcos-stress-tests/economy-resources/commons-privatization-through-land-sales
    relation: enables
    note: >-
      Une crise financière urgente est la couverture classique pour une vente de
      terres précipitée et irréversible.
related:
  - rcos-stress-tests/governance-power/founder-informal-veto
lang: fr
sourceHash: b60f347c
---

> **Sévérité :** Élevée — chaque exception non examinée est un précédent qui érode la constitution.
> **Où ça mord :** Stades de croissance et de maturité, dès la première vraie crise.
> **Tu vis déjà cela ?** Saute à [Si cela se produit déjà](#si-cela-se-produit-déjà).

### Ça te dit quelque chose ?

Une vraie crise est survenue — un manque de financement, un problème de sécurité, un départ soudain — et il n'y avait pas le temps pour le processus habituel, alors quelqu'un a simplement décidé. C'était le bon choix sur le moment. Mais la crise est passée et les règles normales ne sont jamais vraiment revenues. La décision d'urgence est toujours en vigueur, personne ne l'a réexaminée, et maintenant « on n'avait pas le temps de le faire correctement » commence à expliquer une grande partie du fonctionnement. L'exception devient discrètement la règle.

### Signes que cela t'arrive

- Pendant une crise, le processus normal a été suspendu « juste pour l'instant » — et n'a jamais été pleinement rétabli.
- Une décision prise dans l'urgence est devenue discrètement la nouvelle structure permanente.
- Les pouvoirs d'urgence n'ont jamais été définis à l'avance, donc leur portée et leur date de fin sont floues.
- « On n'avait pas le temps de le faire correctement » devient une justification récurrente.
- Il n'existe aucun journal distinguant les exceptions d'urgence des changements de règles permanents.

**Ce n'est _pas_ la même chose que** d'invoquer des pouvoirs d'urgence prédéfinis, journalisés et limités dans le temps. Le signe révélateur est *une exception sans clause de caducité* — une urgence qui a modifié définitivement la structure sans examen ni gestion de versions.

### Pourquoi cela arrive

Les crises exigent de la rapidité, et la rapidité justifie de sauter le processus. C'est très bien si les pouvoirs d'urgence sont prédéfinis et expirent — mais s'ils ne le sont pas, chaque contournement crée un précédent : l'exception devient la règle, et les changements « temporaires » s'ossifient parce que rien ne force un examen. L'urgence devient une surcharge permanente de la constitution, un raccourci apparemment raisonnable à la fois.

<details data-kind="rationale">
<summary>Le test de résistance formel (pour les auditeurs)</summary>

**Mode de défaillance** — Les règles sont contournées « temporairement » pendant les crises.

**Couches concernées** — Couche 2 (Gouvernance), Couche 6 (Évolution)

**Invariants pertinents**

* 2.3 Les règles constitutionnelles priment sur l'urgence
* 6.2 Les changements sont versionnés

**Condition du test** — Les décisions d'urgence modifient définitivement la structure sans examen.

**Comportement RCOS attendu** — Les pouvoirs d'urgence sont prédéfinis, journalisés et soumis à une clause de caducité.

**Critères de réussite** — Les règles normales reprennent après la crise.

**Critères d'échec** — La crise devient un précédent.

</details>

### Quelle est la maturité de ta communauté sur ce point ?

Réussite/échec est trop tranché pour la vraie vie — la plupart des communautés sont à mi-chemin. Trouve ton échelon, puis vise le suivant.

| Niveau | À quoi ça ressemble |
|---|---|
| **L0 — Implicite** | Les crises suspendent les règles de manière ad hoc ; les exceptions deviennent silencieusement permanentes. |
| **L1 — Nommé** | Le groupe sait qu'il abuse de l'« urgence » mais n'a pas prédéfini de pouvoirs d'urgence. |
| **L2 — Documenté** | Les pouvoirs d'urgence sont prédéfinis, délimités, journalisés et soumis à une clause de caducité ; les changements permanents nécessitent un examen normal. |
| **L3 — Appliqué et répété** | Les règles normales reprennent visiblement après la crise ; chaque action d'urgence est journalisée et examinée ; une vraie crise l'a mis à l'épreuve. |

La plupart des communautés qui se reconnaissent ici se situent à **L0 ou L1**. L'objectif n'est pas la perfection — c'est de monter d'un échelon.

### Comment RCOS prévient cela

RCOS te permet d'agir vite en cas de crise *sans* perdre la constitution :

- **[Protocole de Changement](/articles/rcos-templates/layer-6/change-protocol)** — définis les pouvoirs d'urgence à l'avance : leur portée, qui les détient, et une clause de caducité obligatoire.
- **[Protocole de Gouvernance](/articles/rcos-templates/layer-2/governance-protocol)** — maintiens la primauté des règles constitutionnelles sur l'urgence.
- **[Registre des Invariants](/articles/rcos-templates/layer-0/invariants-register)** — marque les règles qui ne peuvent jamais être contournées, même en cas de crise.

Voir aussi la spécification : [Couche 6 — Sécurité et Réversibilité des Changements](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#85-change-safety-and-reversibility) et [Couche 2 — Garde-fous et Modes de Défaillance](/articles/rcos-core/v0-1/layer-2-governance-decision-logic#46-safeguards-and-failure-modes).

### Si cela se produit déjà

Si des exceptions « temporaires » se sont accumulées, réconcilie-les avec la constitution :

1. **Audite les exceptions en cours.** Liste chaque mesure d'urgence encore en vigueur.
2. **Soumets chacune à une clause de caducité ou ratifie-la.** Soit elle expire, soit elle passe par le processus normal comme un changement réel et versionné.
3. **Prédéfinis les pouvoirs d'urgence dès maintenant,** afin que la prochaine crise ait une voie délimitée et journalisée plutôt qu'un chèque en blanc.
4. **Surveille la cascade** — le contournement normalisé est la manière dont les fondateurs s'enracinent et dont les biens communs sont vendus sous pression.

### Ce que cette défaillance tend à déclencher

- **[Veto Informel du Fondateur](/articles/rcos-stress-tests/governance-power/founder-informal-veto)** — celui ou celle qui exerce le pouvoir d'urgence de manière informelle a tendance à le consolider.
- **[Privatisation des Biens Communs par la Vente de Terres](/articles/rcos-stress-tests/economy-resources/commons-privatization-through-land-sales)** — une crise financière « urgente » est la couverture classique pour une vente précipitée et irréversible.

### Tests de résistance liés

- **[Veto Informel du Fondateur](/articles/rcos-stress-tests/governance-power/founder-informal-veto)** — la version « pouvoir établi » de la même érosion constitutionnelle.
