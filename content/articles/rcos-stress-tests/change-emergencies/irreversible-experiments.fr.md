---
id: d2a7e9f3
title: Expériences irréversibles
summary: Quand "essayons juste" n'a aucun retour en arrière possible en cas d'échec.
parentId: 6acde7a7
order: 3
severity: medium
stage:
  - growth
  - mature
layers:
  - 6
invariants:
  - '6.3'
  - '6.4'
remediationReady: true
tags:
  - 'Layer 6: Evolution'
  - Medium severity
symptoms:
  - >-
    Un changement majeur a été adopté comme "expérience" mais n'a pas de retour
    en arrière défini.
  - >-
    "Essayons et voyons" était tout le plan ; personne n'a fixé de critères de
    succès ni de date de fin.
  - >-
    Essayer la nouveauté exigeait des étapes irréversibles (actifs vendus, rôle
    dissous, structure juridique modifiée).
  - >-
    Quand les expériences ne fonctionnent pas, la communauté reste coincée avec
    elles malgré tout.
  - >-
    Il n'y a aucune trace de ce qui a été essayé, pourquoi, et ce qui s'est
    passé.
preventsWith:
  - rcos-templates/layer-6/experiment-template
  - rcos-templates/layer-6/change-protocol
  - rcos-templates/layer-6/learning-log
cascade:
  - test: >-
      rcos-stress-tests/economy-resources/commons-privatization-through-land-sales
    relation: enables
    note: >-
      Vendre des terres comme expérience est le geste irréversible le plus
      coûteux, déguisé en enjeu mineur.
related:
  - rcos-stress-tests/change-emergencies/institutional-amnesia
  - rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent
lang: fr
sourceHash: 5718088d
---

> **Gravité :** Moyenne — les dégâts sont limités à chaque changement, mais chacun peut être permanent.
> **Où ça mord :** Phases de croissance et de maturité, quand la communauté est assez courageuse pour tenter de grandes choses.
> **Tu vis déjà ça ?** Va directement à [Si c'est déjà en train d'arriver](#si-cest-déjà-en-train-darriver).

### Ça te dit quelque chose ?

Quelqu'un a proposé un changement majeur — un nouveau modèle de gouvernance, une grande construction, une restructuration du fonctionnement de l'adhésion — et l'a présenté comme une expérience. "Essayons juste, on verra bien comment ça se passe." Cette ouverture semblait saine, alors le groupe a foncé. Mais essayer impliquait des étapes qu'on ne peut pas défaire : un actif vendu, un rôle dissous, une structure juridique modifiée. Maintenant ça ne se passe pas bien, et il n'y a pas de sortie "on verra bien", parce qu'il n'y a jamais eu de plan de retour en arrière — et personne n'a écrit à quoi le succès était censé ressembler.

### Signes que ça t'arrive

- Un changement majeur a été adopté comme "expérience" mais n'a pas de retour en arrière défini.
- "Essayons et voyons" était tout le plan ; personne n'a fixé de critères de succès ni de date de fin.
- Essayer la nouveauté exigeait des étapes irréversibles.
- Quand les expériences ne fonctionnent pas, la communauté reste coincée avec elles malgré tout.
- Il n'y a aucune trace de ce qui a été essayé, pourquoi, et ce qui s'est passé.

**Ce n'est _pas_ la même chose qu'**une véritable expérience avec des critères, une durée limitée et un plan de retour en arrière. Le signe révélateur est l'*irréversibilité déguisée en expérimentation* — le vocabulaire du "on essaie juste" sans la sécurité de pouvoir défaire.

### Pourquoi ça arrive

Appeler un changement une "expérience" abaisse les résistances — ça sonne comme un enjeu mineur et ouvert d'esprit, donc les gens acceptent plus facilement. Mais si le changement ne peut pas réellement être inversé, ce cadrage est un faux réconfort : la communauté s'engage dans quelque chose qu'elle ne peut pas annuler, et parce qu'aucun critère ni apprentissage n'a été fixé, elle ne peut même pas dire si l'expérience a fonctionné. Le mot fait le travail de persuasion ; l'irréversibilité fait les dégâts.

<details data-kind="rationale">
<summary>Le test de résistance formel (pour auditeurs)</summary>

**Mode de défaillance** — Des changements irréversibles sont adoptés sous le cadrage d'"expériences" réversibles.

**Couches concernées** — Couche 6 (Évolution)

**Invariants pertinents**

* 6.3 Les expériences sont réversibles
* 6.4 L'apprentissage est capturé

**Condition du test** — Un changement appelé expérience n'a aucun retour en arrière, ni critère de succès, ni durée limitée.

**Comportement RCOS attendu** — Les expériences portent des critères, une durée limitée et un plan de réversibilité ; les changements irréversibles passent par le processus de changement complet.

**Critères de réussite** — Les expériences peuvent être véritablement défaites et sont examinées par rapport aux critères.

**Critères d'échec** — Les "expériences" sont permanentes et non évaluées.

</details>

### À quel point ta communauté est-elle mature sur ce point ?

Le succès/échec est trop binaire pour la vraie vie — la plupart des communautés sont à mi-chemin. Trouve ton échelon, puis vise le suivant.

| Niveau | À quoi ça ressemble |
|---|---|
| **L0 — Implicite** | Les "expériences" sont adoptées sans critères, sans durée limitée, sans retour en arrière. |
| **L1 — Nommé** | Le groupe veut expérimenter en toute sécurité mais n'a pas défini comment. |
| **L2 — Documenté** | Un [Modèle d'expérience](/articles/rcos-templates/layer-6/experiment-template) exige des critères de succès, une durée limitée et un plan de retour en arrière. |
| **L3 — Appliqué & répété** | Les expériences sont véritablement réversibles et limitées dans le temps ; au moins une a été menée, examinée, puis annulée ou adoptée sur la base de preuves. |

La plupart des communautés qui se reconnaissent ici se situent à **L0 ou L1**. Le but n'est pas la perfection — c'est de monter d'un échelon.

### Comment RCOS empêche cela

RCOS garde le mot "expérience" honnête — et garde les gestes irréversibles hors de cette catégorie :

- **[Modèle d'expérience](/articles/rcos-templates/layer-6/experiment-template)** — exige des critères, une durée limitée et un plan de retour en arrière avant d'essayer.
- **[Protocole de changement](/articles/rcos-templates/layer-6/change-protocol)** — fait passer les changements irréversibles par le processus complet, pas par la voie expérimentale.
- **[Journal d'apprentissage](/articles/rcos-templates/layer-6/learning-log)** — capture ce qui a été essayé et ce qui s'est passé, pour que l'expérience enseigne quelque chose.

Voir aussi la spécification : [Couche 6 — Expériences](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#83-experiments) et [Sécurité et réversibilité du changement](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#85-change-safety-and-reversibility).

### Si c'est déjà en train d'arriver

Si des "expériences" sont silencieusement devenues permanentes, trie-les par réversibilité :

1. **Vérifie si les expériences en cours ont une vraie sortie** — lesquelles peux-tu réellement défaire ?
2. **Ajoute des critères et une date de revue** à tout ce qui est encore en cours.
3. **Arrête d'appeler les gestes irréversibles des expériences** — fais-les passer par le processus de changement complet pour qu'ils reçoivent l'examen qu'ils méritent.

### Ce que cette défaillance tend à déclencher

- **[Privatisation des communs par la vente de terres](/articles/rcos-stress-tests/economy-resources/commons-privatization-through-land-sales)** — vendre des terres "comme expérience" est le geste irréversible le plus coûteux qui soit.

### Tests de résistance liés

- **[Amnésie institutionnelle](/articles/rcos-stress-tests/change-emergencies/institutional-amnesia)** — sans apprentissage capturé, même une expérience réversible n'enseigne rien.
- **[Précédent de contournement des règles en urgence](/articles/rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent)** — les deux laissent passer de grands changements sous une étiquette rassurante.
