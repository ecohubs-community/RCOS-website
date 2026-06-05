---
id: e5c1b8a4
title: Amnésie institutionnelle
summary: Quand la communauté n'arrête pas de réapprendre les mêmes leçons à la dure.
parentId: 6acde7a7
order: 4
severity: medium
stage:
  - growth
  - mature
layers:
  - 6
  - 5
invariants:
  - '6.4'
  - '5.2'
remediationReady: true
tags:
  - 'Layer 6: Evolution'
  - Medium severity
symptoms:
  - >-
    Les mêmes conflits, projets ratés ou problèmes d'intégration reviennent sans
    cesse.
  - >-
    Les raisons des décisions passées sont perdues ; personne ne peut
    reconstruire le raisonnement.
  - >-
    La mémoire institutionnelle vit dans la tête de quelques anciens — et s'en
    va avec eux.
  - >-
    Les nouveaux membres répètent des erreurs que la communauté a déjà commises
    il y a des années.
  - 'Il n''existe aucun registre des décisions, expériences ou leçons apprises.'
preventsWith:
  - rcos-templates/layer-6/learning-log
  - rcos-templates/layer-6/version-history
  - rcos-templates/layer-5/operations-manual
cascade:
  - test: rcos-stress-tests/operations-coordination/rapid-growth-without-onboarding
    relation: feeds
    note: >-
      Sans savoir capturé, les nouveaux arrivants ne peuvent pas être mis à
      niveau et répètent les vieilles erreurs.
  - test: >-
      rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
    relation: feeds
    note: >-
      Quand le savoir ne vit que dans les têtes, ces têtes deviennent
      indispensables.
related:
  - rcos-stress-tests/change-emergencies/irreversible-experiments
lang: fr
sourceHash: 92f00fba
---

> **Gravité :** Moyenne — jamais urgente, toujours cumulative : la communauté paie le prix fort pour chaque leçon, encore et encore.
> **Où ça mord :** Aux étapes de croissance et de maturité, et plus durement chaque fois qu'un ancien s'en va.
> **Déjà en plein dedans ?** Saute à [Si c'est déjà en train de se produire](#si-cest-déjà-en-train-de-se-produire).

### Ça te dit quelque chose ?

Ce conflit te semble familier — parce que la communauté en a vécu presque exactement le même il y a trois ans, et l'a géré, et en a tiré une leçon, et puis l'a oubliée. Le projet qui vient d'échouer a échoué de la même manière que le précédent. Les nouveaux membres se heurtent aux mêmes murs que les fondateurs avaient franchis et résolus il y a longtemps. Personne n'a rien écrit, donc la seule mémoire dont dispose la communauté vit dans la tête de quelques anciens — et chaque fois que l'un d'eux part, un pan de savoir durement acquis s'en va avec lui.

### Signes que ça t'arrive

- Les mêmes conflits, projets ratés ou problèmes d'intégration reviennent sans cesse.
- Les raisons des décisions passées sont perdues ; personne ne peut reconstruire le raisonnement.
- La mémoire institutionnelle vit dans la tête de quelques anciens — et s'en va avec eux.
- Les nouveaux membres répètent des erreurs que la communauté a déjà commises il y a des années.
- Il n'existe aucun registre des décisions, expériences ou leçons apprises.

**Ce n'est _pas_ la même chose que** choisir de ne pas documenter des choses triviales. L'indice, c'est que *les décisions, conflits et expériences significatifs ne laissent aucune trace consultable* — donc la communauté ne peut pas apprendre de sa propre histoire, elle ne peut que la revivre.

### Pourquoi ça arrive

Capter les apprentissages n'a rien de glamour et semble toujours moins urgent que la prochaine tâche, donc ça ne se fait jamais vraiment. Mais une communauté qui n'enregistre pas ses décisions et leurs résultats n'a pas d'autre mémoire que ses membres les plus anciens. Elle paie le prix fort pour chaque leçon encore et encore, et elle perd son histoire à l'instant où ces personnes partent — ce qui, à terme, finit par arriver à toutes.

<details data-kind="rationale">
<summary>Le test de résistance formel (pour les auditeurs)</summary>

**Mode de défaillance** — Les décisions, conflits et expériences ne laissent aucun apprentissage capté.

**Couches concernées** — Couche 6 (Évolution), Couche 5 (Opérations)

**Invariants pertinents**

* 6.4 Les apprentissages sont captés
* 5.2 Le savoir opérationnel est documenté

**Condition de test** — Les décisions et résultats significatifs ne sont pas enregistrés, et le raisonnement est irrécupérable.

**Comportement RCOS attendu** — Les apprentissages et les décisions sont captés sous une forme durable et consultable, et utilisés au fil du temps.

**Critères de réussite** — Les leçons passées sont consultables et empêchent démontrablement les répétitions.

**Critères d'échec** — La communauté répète ses propres erreurs.

</details>

### Quel est le niveau de maturité de ta communauté sur ce point ?

Le réussi/échoué est trop tranché pour la vraie vie — la plupart des communautés sont à mi-chemin. Trouve ton barreau, puis vise le suivant.

| Niveau | À quoi ça ressemble |
|---|---|
| **L0 — Implicite** | Rien n'est capté ; la mémoire est orale et vit dans quelques têtes. |
| **L1 — Nommé** | Le groupe sait qu'il répète des erreurs mais n'a pas commencé à les enregistrer. |
| **L2 — Documenté** | Un [Journal d'apprentissage](/articles/rcos-templates/layer-6/learning-log) et des registres de décisions captent les décisions, conflits et résultats significatifs. |
| **L3 — Appliqué et rodé** | Les apprentissages sont régulièrement captés *et réellement consultés* ; une leçon passée a démontrablement empêché une répétition. |

La plupart des communautés qui se reconnaissent ici sont à **L0 ou L1**. L'objectif n'est pas la perfection — c'est de monter d'un barreau.

### Comment RCOS prévient cela

RCOS donne à la communauté une mémoire qui survit à ses membres :

- **[Journal d'apprentissage](/articles/rcos-templates/layer-6/learning-log)** — capter les décisions, expériences, conflits, et ce qui a été appris.
- **[Historique des versions](/articles/rcos-templates/layer-6/version-history)** — enregistrer comment et pourquoi les règles ont changé au fil du temps.
- **[Manuel des opérations](/articles/rcos-templates/layer-5/operations-manual)** — empêcher que le savoir opérationnel reste dans les têtes individuelles.

Voir aussi la spécification : [Couche 6 — Captation des apprentissages et retours](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#84-learning-and-feedback-capture) et [Couche 5 — Documentation et circulation de l'information](/articles/rcos-core/v0-1/layer-5-operations-coordination#73-documentation-and-information-flow).

### Si c'est déjà en train de se produire

Si la communauté n'arrête pas de revivre son passé, commence une mémoire dès maintenant :

1. **Commence un journal d'apprentissage aujourd'hui** — même un document courant vaut mieux que la mémoire.
2. **Rattrape rétroactivement les grandes leçons** que portent les anciens, avant qu'ils ne partent.
3. **Fais d'un bref registre de décision une étape standard,** pour que le raisonnement reste consultable plus tard.

### Ce que cette défaillance tend à déclencher

- **[Croissance rapide sans intégration](/articles/rcos-stress-tests/operations-coordination/rapid-growth-without-onboarding)** — sans savoir capté, les nouveaux arrivants ne peuvent pas être mis à niveau.
- **[Pouvoir invisible par les responsabilités](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — quand le savoir ne vit que dans les têtes, ces têtes deviennent indispensables.

### Tests de résistance liés

- **[Expériences irréversibles](/articles/rcos-stress-tests/change-emergencies/irreversible-experiments)** — un apprentissage non capté est ce qui fait que les expériences — réversibles ou non — n'enseignent rien.
