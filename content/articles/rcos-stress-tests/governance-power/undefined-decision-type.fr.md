---
id: d7a1f3e8
title: Type de décision indéfini
summary: >-
  Quand le groupe débat de ce qu'il faut décider avant de s'accorder sur comment
  décider.
parentId: 7f25f268
order: 3
severity: medium
stage:
  - forming
  - growth
  - mature
layers:
  - 2
invariants:
  - '2.1'
  - '2.2'
remediationReady: true
tags:
  - 'Layer 2: Governance'
  - Medium severity
symptoms:
  - >-
    Les discussions s'enlisent parce que personne ne s'est mis d'accord pour
    savoir s'il s'agit d'un consensus, d'un vote ou d'une décision déléguée.
  - >-
    La même décision est rouverte parce qu'il n'a jamais été clair qu'elle avait
    réellement été prise.
  - Quiconque formule la question en premier contrôle de fait le résultat.
  - >-
    "Attends, on décide ça maintenant, et qui décide ?" est une confusion
    récurrente.
  - >-
    Les règles de décision changent implicitement selon le sujet ou selon qui
    est dans la pièce.
preventsWith:
  - rcos-templates/layer-2/decision-matrix
  - rcos-templates/layer-2/governance-protocol
cascade:
  - test: rcos-stress-tests/governance-power/dominant-speakers-decision-spaces
    relation: enables
    note: >-
      Sans mécanisme convenu, le temps de parole et le cadrage déterminent les
      résultats par défaut.
  - test: rcos-stress-tests/governance-power/informal-clique-decision-making
    relation: enables
    note: >-
      Un type de décision indéfini laisse les résultats dériver vers celui qui a
      formulé la question en premier.
related:
  - rcos-stress-tests/governance-power/dominant-speakers-decision-spaces
lang: fr
sourceHash: c8cfa224
---

> **Sévérité :** Moyenne — rarement spectaculaire, mais cela rend chaque décision contestable et lente.
> **Où ça fait mal :** À tout stade ; c'est un frein discret pour un groupe qui fonctionne par ailleurs.
> **Tu vis déjà ça ?** Va directement à [Si c'est déjà en train d'arriver](#si-cest-déjà-en-train-darriver).

### Ça te dit quelque chose ?

Une question surgit et le groupe plonge directement dedans — opinions, arguments, longue discussion. Une heure plus tard, on ne sait pas vraiment si quelque chose a été décidé, qui avait l'autorité pour le décider, ni si un « bon, je suppose qu'on va faire ça » murmuré compte comme définitif. Le mois suivant, le même sujet refait surface comme si la première conversation n'avait jamais eu lieu. Le problème n'a jamais été le *contenu*. C'est que personne ne s'est mis d'accord, en amont, sur le *type* de décision dont il s'agissait et sur la manière dont elle serait tranchée.

### Signes que ça t'arrive

- Les discussions s'enlisent parce que personne ne s'est mis d'accord pour savoir s'il s'agit d'un consensus, d'un vote ou d'une décision déléguée.
- La même décision est rouverte parce qu'il n'a jamais été clair qu'elle avait réellement été prise.
- Quiconque formule la question en premier contrôle de fait le résultat.
- « Attends, on décide ça maintenant, et qui décide ? » est une confusion récurrente.
- Les règles de décision changent implicitement selon le sujet ou selon qui est dans la pièce.

**Ce n'est _pas_ la même chose que** d'utiliser délibérément des mécanismes différents pour différentes classes de décisions — c'est sain, *si c'est déclaré*. Le signe révélateur est que le *type* de décision — qui décide, par quel mécanisme, et si c'est définitif — est indéfini au moment de décider, donc improvisé à chaque fois.

### Pourquoi ça arrive

Les groupes passent directement au contenu (« que devrions-nous faire à propos de X ? ») sans d'abord régler le type (« est-ce à nous de décider, selon quelle règle, et est-ce définitif ? »). Sauter cette étape signifie que le cadrage le plus bruyant l'emporte, que les décisions semblent illégitimes à quiconque ne partageait pas ce cadrage, et que tout reste rejugeable — parce que rien n'a jamais été formellement *une décision* en premier lieu.

<details data-kind="rationale">
<summary>Le stress test formel (pour les auditeurs)</summary>

**Mode de défaillance** — Les décisions sont débattues sans d'abord convenir de leur type et de leur mécanisme.

**Couches concernées** — Couche 2 (Gouvernance)

**Invariants pertinents**

* 2.1 Le type de décision précède le contenu de la décision
* 2.2 L'autorité doit être explicite

**Condition du test** — Les décisions sont prises sans type déclaré, donc le mécanisme et l'autorité sont improvisés à chaque fois.

**Comportement RCOS attendu** — Le type de chaque décision (mécanisme + autorité + caractère définitif) est fixé avant que son contenu ne soit débattu.

**Critères de réussite** — Les décisions nomment leur type en amont et ne sont pas silencieusement rouvertes.

**Critères d'échec** — Le type de décision est improvisé, donc le cadrage détermine le résultat.

</details>

### Quelle est la maturité de ta communauté sur ce point ?

Réussite/échec est trop binaire pour la vraie vie — la plupart des communautés sont à mi-chemin. Trouve ton échelon, puis vise le suivant.

| Niveau | À quoi ça ressemble |
|---|---|
| **L0 — Implicite** | Le type de décision est improvisé à chaque fois ; le cadrage détermine le résultat. |
| **L1 — Nommé** | Le groupe remarque la confusion mais n'a pas cartographié les types de décisions vers des mécanismes. |
| **L2 — Documenté** | Une [Matrice de décision](/articles/rcos-templates/layer-2/decision-matrix) attribue à chaque classe de décision un type, un mécanisme et qui décide — réglé avant le contenu. |
| **L3 — Appliqué et répété** | Chaque décision significative nomme son type en amont ; les décisions sont définitives et ne sont pas silencieusement rouvertes. |

La plupart des communautés qui se reconnaissent ici sont en **L0 ou L1**. L'objectif n'est pas la perfection — c'est de monter d'un échelon.

### Comment RCOS prévient cela

RCOS impose le type avant le contenu :

- **[Matrice de décision](/articles/rcos-templates/layer-2/decision-matrix)** — cartographie les classes de décisions vers leur mécanisme et leur autorité, pour que le type soit pré-décidé.
- **[Protocole de gouvernance](/articles/rcos-templates/layer-2/governance-protocol)** — fais de « nommer d'abord le type de décision » une règle permanente du fonctionnement du groupe.

Voir aussi la spec : [Couche 2 — Types de décisions](/articles/rcos-core/v0-1/layer-2-governance-decision-logic#41-decision-types) et [Matrice de décision](/articles/rcos-core/v0-1/layer-2-governance-decision-logic#44-decision-matrix).

### Si c'est déjà en train d'arriver

Si les décisions ne cessent de se dissoudre et de se reformer, règle d'abord le type :

1. **Avant la prochaine décision contestée, conviens de son type** — qui décide, selon quelle règle, et si c'est définitif.
2. **Construis une matrice de décision rapide à partir des décisions récentes réelles ;** les ambiguës remontent vite.
3. **Arrête de rejuger** — consigne les décisions avec leur type, pour que « on a déjà décidé ça » soit vérifiable.

### Ce que cette défaillance a tendance à déclencher

- **[Locuteurs dominants dans les espaces de décision](/articles/rcos-stress-tests/governance-power/dominant-speakers-decision-spaces)** — sans mécanisme convenu, le temps de parole et le cadrage déterminent les résultats.
- **[Prise de décision par clique informelle](/articles/rcos-stress-tests/governance-power/informal-clique-decision-making)** — un type indéfini laisse les décisions dériver vers celui qui les a cadrées en premier.

### Stress tests liés

- **[Locuteurs dominants dans les espaces de décision](/articles/rcos-stress-tests/governance-power/dominant-speakers-decision-spaces)** — le même mécanisme manquant, exprimé comme qui-parle-le-plus plutôt que qui-cadre-en-premier.
