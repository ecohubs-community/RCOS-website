---
id: 6acfe5f7
title: Voix dominantes dans les espaces de décision
summary: 'Quand c''est la voix la plus forte, et non le processus convenu, qui décide.'
parentId: 7f25f268
order: 0
severity: high
stage:
  - forming
  - growth
  - mature
layers:
  - 2
  - 5
  - 4
invariants:
  - '2.2'
  - '5.1'
  - '4.1'
remediationReady: true
tags:
  - 'Layer 2: Governance'
  - High severity
symptoms:
  - Les mêmes une ou deux voix façonnent presque toutes les décisions.
  - >-
    Les membres plus discrets ont cessé de contribuer en réunion — ou ont cessé
    de venir.
  - >-
    Les résultats suivent qui a parlé le plus longtemps, pas ce qui a été
    réellement convenu.
  - >-
    "C'est juste comme ça qu'ils sont" est l'explication permanente d'une
    dynamique de réunion récurrente.
  - >-
    Il n'y a pas de facilitateur·rice, ou le·la facilitateur·rice n'a pas
    l'autorité d'intervenir.
preventsWith:
  - rcos-templates/layer-5/meeting-templates
  - rcos-templates/layer-5/role-registry
  - rcos-templates/layer-2/decision-matrix
cascade:
  - test: rcos-stress-tests/governance-power/informal-clique-decision-making
    relation: enables
    note: >-
      Une dominance verbale non régulée se durcit en un groupe restreint de fait
      qui règle les choses avant que la salle ne le fasse.
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: feeds
    note: >-
      Les membres à qui l'on coupe la parole à répétition cessent tout
      simplement de soulever des sujets.
related:
  - rcos-stress-tests/governance-power/founder-informal-veto
lang: fr
sourceHash: 4ab59c07
---

> **Gravité :** Élevée — prive discrètement la majorité de la communauté de son pouvoir de décision tout en ressemblant à des réunions normales.
> **Où ça mord :** À tout stade ; cela s'installe tôt et se calcifie.
> **Tu vis déjà ça ?** Saute à [Si c'est déjà en train d'arriver](#si-cest-déjà-en-train-darriver).

### Ça te dit quelque chose ?

La réunion est ouverte à tout le monde, et sur le papier chacun·e a une voix égale. En pratique, ce sont les deux mêmes personnes qui parlent en premier, qui parlent le plus, et qui parlent en dernier — et d'une manière ou d'une autre, la décision atterrit toujours là où elles le voulaient. Les membres plus discrets hochent la tête, gardent leur véritable opinion pour le chemin du retour, et arrêtent peu à peu de venir. Personne n'est réduit au silence intentionnellement. La structure récompense simplement celui ou celle qui est le plus à l'aise pour tenir la parole.

### Signes que cela t'arrive

- Les mêmes une ou deux voix façonnent presque toutes les décisions.
- Les membres plus discrets ont cessé de contribuer en réunion — ou ont cessé de venir.
- Les résultats suivent qui a parlé le plus longtemps, pas ce qui a été réellement convenu.
- « C'est juste comme ça qu'ils sont » est l'explication permanente d'une dynamique récurrente.
- Il n'y a pas de facilitateur·rice, ou le·la facilitateur·rice n'a pas l'autorité d'intervenir.

**Ce n'est _pas_ la même chose que** quelqu'un qui est simplement mieux préparé ou plus compétent sur un sujet. Le signe révélateur, c'est que *le temps de parole détermine les résultats indépendamment du mécanisme de décision convenu* — et que les membres plus discrets sont effectivement privés de leur droit de décision, réunion après réunion.

### Pourquoi ça arrive

Une réunion sans facilitateur·rice doté·e d'un véritable pouvoir revient par défaut à celui ou celle qui est le plus à l'aise pour parler. Comme la dominance verbale ressemble à un trait de personnalité, le groupe la traite comme inactionnable (« c'est juste Dana ») au lieu de ce qu'elle est structurellement : un contournement non déclaré du processus de décision. L'influence qui devrait passer par un mécanisme convenu passe par le temps d'antenne — et les personnes qui ont le moins de temps d'antenne perdent discrètement leur part dans la décision.

<details data-kind="rationale">
<summary>Le test de résistance formel (pour les auditeurs)</summary>

**Mode de défaillance** — Une ou deux personnes parlent systématiquement par-dessus les autres et dominent les réunions.

**Couches concernées** — Couche 2 (Gouvernance), Couche 5 (Opérations), Couche 4 (Conflit)

**Invariants pertinents**

* 2.2 L'autorité DOIT être explicite
* 5.1 Les rôles DOIVENT être définis
* 4.1 Le conflit DOIT être traité

**Condition du test** — Des réunions ont lieu où la dominance dans la prise de parole façonne à répétition les résultats, et aucun rôle de facilitation formel ni mécanisme d'application n'existe.

**Comportement RCOS attendu** — La facilitation est attribuée comme un rôle avec une autorité définie ; la dominance dans la prise de parole est traitée comme une violation de la gouvernance/du processus, et non comme un problème de personnalité ; un chemin d'escalade se déclenche si le comportement persiste.

**Critères de réussite** — Les décisions sont traçables jusqu'à des mécanismes convenus, et non au temps de parole ; la dominance peut être adressée via des rôles définis ou un protocole de conflit.

**Critères d'échec** — L'influence reste informelle et sans redevabilité.

</details>

### Quelle est la maturité de ta communauté sur ce point ?

Réussite/échec est trop binaire pour la vraie vie — la plupart des communautés sont à mi-chemin. Trouve ton barreau, puis vise le suivant.

| Niveau | À quoi ça ressemble |
|---|---|
| **N0 — Implicite** | Quelques voix dominent ; c'est lu comme de la personnalité, pas du processus. |
| **N1 — Nommé** | Le groupe reconnaît le déséquilibre mais n'a pas de rôle de facilitation ni de règle pour l'adresser. |
| **N2 — Documenté** | Les réunions ont un [rôle de facilitateur·rice](/articles/rcos-templates/layer-5/role-registry) défini et une [matrice de décision](/articles/rcos-templates/layer-2/decision-matrix) ; les décisions remontent à un mécanisme, pas au temps d'antenne. |
| **N3 — Appliqué et rodé** | La facilitation équilibre activement la participation ; la dominance est nommée comme une violation de processus et escaladée si elle persiste. |

La plupart des communautés qui se reconnaissent ici se situent au **N0 ou N1**. L'objectif n'est pas la perfection — c'est de monter d'un barreau.

### Comment RCOS prévient cela

RCOS fait passer l'influence par une structure convenue plutôt que par le temps d'antenne :

- **[Modèles de réunion](/articles/rcos-templates/layer-5/meeting-templates)** — ordres du jour structurés, tours de parole et limites de temps qui répartissent le temps d'antenne par conception.
- **[Registre des rôles](/articles/rcos-templates/layer-5/role-registry)** — un rôle de facilitateur·rice avec une autorité explicite pour intervenir et rééquilibrer.
- **[Matrice de décision](/articles/rcos-templates/layer-2/decision-matrix)** — les décisions se résolvent via un mécanisme convenu, rendant le temps de parole sans incidence sur le résultat.

Voir aussi la spécification : [Couche 5 — Système de réunion](/articles/rcos-core/v0-1/layer-5-operations-coordination#72-meeting-system) et [Couche 2 — Matrice de décision](/articles/rcos-core/v0-1/layer-2-governance-decision-logic#44-decision-matrix).

### Si c'est déjà en train d'arriver

Si deux ou trois voix tiennent déjà la salle, change le format, pas les personnes :

1. **Désigne un·e facilitateur·rice dès maintenant** — idéalement un rôle tournant, ou une personne extérieure neutre pour les prochaines réunions.
2. **Passe à des formats par tours** — chacun·e parle une fois avant que quiconque parle deux fois. Cela brise immédiatement le schéma de dominance.
3. **Nomme-le comme un processus, pas comme de la personnalité** — « nous changeons la façon dont nous menons les réunions », jamais « tu parles trop ».
4. **Achemine la persistance via le parcours de conflit** plutôt que de la tolérer comme un trait de caractère.

### Ce que cette défaillance a tendance à déclencher

- **[Prise de décision par clique informelle](/articles/rcos-stress-tests/governance-power/informal-clique-decision-making)** — une dominance non régulée se durcit en un groupe restreint de fait qui décide des choses avant que la salle ne le fasse.
- **[Normalisation de l'évitement du conflit](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — les membres à qui l'on coupe la parole à répétition cessent tout simplement de soulever des sujets.

### Tests de résistance liés

- **[Veto informel du·de la fondateur·rice](/articles/rcos-stress-tests/governance-power/founder-informal-veto)** — souvent, la voix dominante est celle du·de la fondateur·rice, et la dominance glisse vers un veto non écrit.
