---
id: 9e4c3b21
title: Veto informel du fondateur
summary: >-
  Quand le non discret du fondateur fait encore loi, même si rien sur le papier
  ne le lui accorde.
parentId: 7f25f268
order: 1
severity: high
stage:
  - forming
  - growth
  - mature
layers:
  - 2
  - 0
invariants:
  - '2.2'
  - '2.3'
remediationReady: true
tags:
  - 'Layer 2: Governance'
  - High severity
symptoms:
  - >-
    Les décisions sont techniquement prises par le groupe, mais rien n'avance si
    le fondateur désapprouve.
  - >-
    Les gens vérifient leurs idées auprès du fondateur avant de les soulever
    formellement.
  - >-
    "C'est vraiment son projet à lui/elle" est un sentiment courant et
    incontesté.
  - >-
    Un processus formel existe sur le papier mais est discrètement contourné
    dans la pratique.
  - >-
    Aucun document ne précise ce que le fondateur peut et ne peut pas décider
    seul.
preventsWith:
  - rcos-templates/layer-2/authority-registry
  - rcos-templates/layer-2/decision-matrix
  - rcos-templates/layer-2/governance-protocol
cascade:
  - test: rcos-stress-tests/culture-influence/charismatic-spiritual-authority
    relation: enables
    note: >-
      Unbounded founder influence shades into charisma standing in for
      governance.
  - test: rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent
    relation: enables
    note: >-
      An informal authority becomes the one who bypasses the rules under
      pressure.
  - test: rcos-stress-tests/governance-power/informal-clique-decision-making
    relation: enables
    note: The founder's inner circle becomes the real decision body.
related:
  - rcos-stress-tests/governance-power/dominant-speakers-decision-spaces
lang: fr
sourceHash: 52fea020
---

> **Gravité :** Élevée — la constitution devient du théâtre si une seule personne peut la contourner en silence.
> **Où ça pique :** À toutes les étapes, mais le plus durement dans les années fondatrices, avant que l'autorité ne soit délimitée.
> **Tu vis déjà ça ?** Saute à [Si ça se passe déjà](#si-ça-se-passe-déjà).

### Ça te dit quelque chose ?

Tu as des processus. Tu as des votes. Et pourtant, tout le monde sait que si le fondateur n'est pas content, la chose ne se fait pas. Personne ne parle de veto — le fondateur n'a presque jamais besoin de dire non, parce que les gens font discrètement valider leurs idées à l'avance, adoucissent leurs propositions ou les abandonnent avant qu'elles n'atteignent la salle. La gouvernance est réelle sur le papier et sans poids dans la pratique, parce que la préférence d'une seule personne prime silencieusement sur tout le reste.

### Les signes que ça t'arrive

- Les décisions sont techniquement prises par le groupe, mais rien n'avance si le fondateur désapprouve.
- Les gens vérifient leurs idées auprès du fondateur avant de les soulever formellement.
- « C'est vraiment son projet à lui/elle » est un sentiment courant et incontesté.
- Un processus formel existe sur le papier mais est discrètement contourné dans la pratique.
- Aucun document ne précise ce que le fondateur peut et ne peut pas décider seul.

**Ce n'est _pas_ la même chose que** lorsqu'un fondateur occupe un rôle explicite et documenté avec une autorité définie. Le signe révélateur est un veto qui est *réel mais non écrit* — un pouvoir que tout le monde ressent et qu'aucune règle n'accorde.

### Pourquoi ça arrive

Les fondateurs portent la vision, l'histoire et la plupart des relations, donc leurs préférences gardent un poids disproportionné longtemps après l'établissement d'une gouvernance formelle. Si ce poids n'est jamais délimité par écrit, le groupe s'auto-censure autour : le fondateur n'a presque jamais à exercer un veto, parce que personne ne force jamais un oui. Le charisme et la gratitude priment discrètement sur la constitution — jusqu'au jour où ils entrent en conflit, et où la constitution perd.

<details data-kind="rationale">
<summary>Le test de résistance formel (pour les auditeurs)</summary>

**Mode de défaillance** — Le fondateur conserve un veto de facto malgré les processus formels.

**Couches concernées** — Couche 2 (Gouvernance), Couche 0 (Invariants)

**Invariants concernés**

* 2.2 L'autorité DOIT être explicite
* 2.3 Les règles constitutionnelles priment sur les individus

**Condition du test** — Les décisions sont contournées de manière informelle par le fondateur.

**Comportement RCOS attendu** — L'autorité du fondateur DOIT être formalisée ou supprimée ; les décisions suivent une matrice de décision convenue.

**Critères de réussite** — Le pouvoir du fondateur est délimité et documenté.

**Critères d'échec** — Le charisme remplace la gouvernance.

</details>

### Quelle est la maturité de ta communauté sur ce point ?

Réussite/échec est trop binaire pour la vraie vie — la plupart des communautés sont à mi-chemin. Trouve ton échelon, puis vise le suivant.

| Niveau | À quoi ça ressemble |
|---|---|
| **L0 — Implicite** | Le veto informel du fondateur est réel et tacite ; le processus est du théâtre autour de lui. |
| **L1 — Nommé** | Le groupe admet que le fondateur a un pouvoir démesuré mais ne l'a pas délimité. |
| **L2 — Documenté** | L'autorité du fondateur est inscrite dans un [Registre d'Autorité](/articles/rcos-templates/layer-2/authority-registry) et une [Matrice de Décision](/articles/rcos-templates/layer-2/decision-matrix) — portée explicite, limites explicites. |
| **L3 — Appliqué et éprouvé** | Les décisions suivent la matrice ; le rôle du fondateur est délimité et révisable, et a tenu bon face à une décision avec laquelle il n'était pas d'accord. |

La plupart des communautés qui se reconnaissent ici se situent en **L0 ou L1**. L'objectif n'est pas la perfection — c'est de monter d'un échelon.

### Comment RCOS prévient ça

RCOS rend toute autorité explicite, y compris celle du fondateur :

- **[Registre d'Autorité](/articles/rcos-templates/layer-2/authority-registry)** — note précisément quelle autorité chaque rôle (y compris le fondateur) détient, et ce qu'elle n'inclut pas.
- **[Matrice de Décision](/articles/rcos-templates/layer-2/decision-matrix)** — lie les décisions à un mécanisme convenu pour que personne ne les contourne de manière informelle.
- **[Protocole de Gouvernance](/articles/rcos-templates/layer-2/governance-protocol)** — établit que les règles constitutionnelles priment sur tout individu.

Voir aussi la spécification : [Couche 2 — Limites d'Autorité](/articles/rcos-core/v0-1/layer-2-governance-decision-logic#43-authority-boundaries).

### Si ça se passe déjà

Tu ne peux pas délimiter un pouvoir que tu refuses de nommer. Triage :

1. **Nomme l'autorité réelle** — fais consigner honnêtement le pouvoir de facto du fondateur, puis décidez ensemble quelle part en est légitime.
2. **Délimite-le** — convertis-le en un rôle explicite et délimité (ou supprime-le), avec des limites et un parcours de révision.
3. **Teste-le** sur une décision à faible enjeu que le fondateur n'aime que modérément, pour prouver que le processus tient vraiment.
4. **Surveille la cascade** — le pouvoir informel du fondateur est la graine du règne des cliques, du charisme-comme-gouvernance et du contournement d'urgence.

### Ce que cette défaillance a tendance à déclencher

- **[Autorité Spirituelle Charismatique](/articles/rcos-stress-tests/culture-influence/charismatic-spiritual-authority)** — une influence non délimitée du fondateur dérive vers le charisme tenant lieu de gouvernance.
- **[Précédent de Contournement des Règles en Urgence](/articles/rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent)** — une autorité informelle est précisément celle qui « temporairement » contourne les règles en cas de crise.
- **[Prise de Décision par Clique Informelle](/articles/rcos-stress-tests/governance-power/informal-clique-decision-making)** — le cercle restreint du fondateur devient le véritable organe de décision.

### Tests de résistance connexes

- **[Locuteurs Dominants dans les Espaces de Décision](/articles/rcos-stress-tests/governance-power/dominant-speakers-decision-spaces)** — la même influence non écrite, exprimée à travers le temps de parole en réunion.
