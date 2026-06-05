---
id: c2e5b9d4
title: Finances communautaires opaques
summary: Quand seules quelques personnes savent vraiment où va l'argent.
parentId: cbd2804b
order: 2
severity: high
stage:
  - growth
  - mature
layers:
  - 3
invariants:
  - '3.1'
  - '3.4'
remediationReady: true
tags:
  - 'Layer 3: Economy'
  - High severity
symptoms:
  - >-
    Seules une ou deux personnes connaissent l'état réel des finances de la
    communauté.
  - >-
    Il n'existe pas de rapport financier régulier et lisible que tout le monde
    puisse consulter.
  - '"Ne t''inquiète pas, c''est géré" est la réponse aux questions sur l''argent.'
  - >-
    Les membres ne peuvent pas dire ce qu'ils ont payé collectivement, ni
    quelles réserves existent.
  - Les décisions de dépense se prennent sans budgets ni limites visibles.
preventsWith:
  - rcos-templates/layer-3/treasury-ruleset
  - rcos-templates/layer-3/internal-economy-protocol
cascade:
  - test: >-
      rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
    relation: enables
    note: >-
      Celui ou celle qui détient la vue d'ensemble financière détient un levier
      que personne ne lui a accordé.
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: feeds
    note: >-
      Les soupçons autour de l'argent s'enveniment précisément parce qu'il est
      gênant de les soulever.
related:
  - rcos-stress-tests/economy-resources/commons-privatization-through-land-sales
lang: fr
sourceHash: de61fda2
---

> **Gravité :** Élevée — l'ambiguïté autour de l'argent érode la confiance plus vite qu'un conflit ouvert.
> **Où ça mord :** Aux phases de croissance et de maturité, dès qu'il existe une trésorerie qu'il vaut la peine de ne pas comprendre.
> **Tu vis déjà ça ?** Va directement à [Si c'est déjà en train d'arriver](#si-cest-déjà-en-train-darriver).

### Ça te dit quelque chose ?

De l'argent circule dans la communauté — cotisations, compte commun, subventions, fonds pour le bâtiment — et une ou deux personnes le gèrent. On leur fait confiance, et elles font probablement honnêtement de leur mieux. Mais personne d'autre ne peut réellement voir l'ensemble : ce qui est entré, ce qui est sorti, ce qui est gardé en réserve, en quoi consistait cette grosse dépense de l'année dernière. Quand tu poses la question, on te répond de façon rassurante « c'est géré ». Et lentement, l'écart entre ce que les membres supposent et ce qui est réellement vrai devient une source de malaise discrète, mais porteuse.

### Signes que ça t'arrive

- Seules une ou deux personnes connaissent l'état réel des finances de la communauté.
- Il n'existe pas de rapport financier régulier et lisible que tout le monde puisse consulter.
- « Ne t'inquiète pas, c'est géré » est la réponse aux questions sur l'argent.
- Les membres ne peuvent pas dire ce qu'ils ont payé collectivement, ni quelles réserves existent.
- Les décisions de dépense se prennent sans budgets ni limites visibles.

**Ce n'est _pas_ la même chose que** garder certains éléments sensibles privés via une exception explicite et convenue. L'indice, c'est que les flux financiers sont opaques *par défaut* — la visibilité dépend d'être dans le bon cercle, pas d'une règle.

### Pourquoi ça arrive

L'argent est fastidieux à rendre transparent et facile à confier à « la personne qui est bonne avec les chiffres ». Mais l'opacité concentre discrètement le pouvoir : celui ou celle qui détient la vue d'ensemble financière détient un levier, et la distance entre ce que les membres supposent et ce qui est réel devient une bombe de confiance à retardement. Comme le dit la spec, argent + ambiguïté détruit la confiance plus vite que le conflit ne le fait.

<details data-kind="rationale">
<summary>Le stress test formel (pour les auditeurs)</summary>

**Mode de défaillance** — Les flux financiers partagés sont invisibles à la plupart des membres par défaut.

**Couches concernées** — Couche 3 (Économie)

**Invariants pertinents**

* 3.1 Transparence économique par défaut
* 3.4 Pas d'accumulation illimitée de pouvoir interne

**Condition du test** — L'état de la trésorerie, les revenus et les dépenses ne sont connus que de quelques personnes, sans rapport régulier.

**Comportement RCOS attendu** — Les flux financiers sont transparents pour les membres par défaut, avec des exceptions explicites limitées ; les autorités et les limites de dépense sont visibles.

**Critères de réussite** — Les membres peuvent voir les ressources partagées, les flux et les obligations.

**Critères d'échec** — La visibilité financière dépend d'un accès informel.

</details>

### Quelle est la maturité de ta communauté sur ce point ?

Le succès/échec est trop brutal pour la vraie vie — la plupart des communautés sont à mi-chemin. Trouve ton échelon, puis vise le suivant.

| Niveau | À quoi ça ressemble |
|---|---|
| **L0 — Implicite** | Les finances vivent chez une ou deux personnes ; aucune visibilité partagée. |
| **L1 — Nommé** | Le groupe sait que les finances sont opaques mais n'a pas fixé de règles de transparence. |
| **L2 — Documenté** | Un [Règlement de trésorerie](/articles/rcos-templates/layer-3/treasury-ruleset) définit les exigences de transparence, l'autorité de dépense et la cadence de reporting. |
| **L3 — Appliqué & répété** | Les flux financiers sont visibles par défaut ; les rapports réguliers sont effectivement lus ; les exceptions sont explicites et rares. |

La plupart des communautés qui se reconnaissent ici sont à **L0 ou L1**. L'objectif n'est pas la perfection — c'est de monter d'un échelon.

### Comment RCOS empêche ça

RCOS fait de la transparence le mode financier par défaut, pas une faveur :

- **[Règlement de trésorerie](/articles/rcos-templates/layer-3/treasury-ruleset)** — exigences de transparence, autorité de dépense par montant, et règles de réserve et de reporting.
- **[Protocole d'économie interne](/articles/rcos-templates/layer-3/internal-economy-protocol)** — rendre les flux et les obligations visibles comme état par défaut.

Voir aussi la spec : [Couche 3 — Gestion de la trésorerie](/articles/rcos-core/v0-1/layer-3-economic-resource-system#53-treasury-management) et [Communs vs Ressources privées](/articles/rcos-core/v0-1/layer-3-economic-resource-system#51-commons-vs-private-resources).

### Si c'est déjà en train d'arriver

Si les finances vivent dans la tête de quelqu'un, fais-les remonter à la surface :

1. **Publie un instantané actuel** — soldes, revenus, dépenses, réserves. Même approximatif, il met fin à l'asymétrie.
2. **Fixe une cadence de reporting** pour que la visibilité devienne routinière, et non quelque chose que les membres doivent demander.
3. **Définis l'autorité et les limites de dépense** pour que les décisions financières deviennent lisibles.
4. **Surveille la cascade** — celui ou celle qui détient la vue d'ensemble financière accumule silencieusement du pouvoir.

### Ce que cette défaillance tend à déclencher

- **[Pouvoir invisible via les responsabilités](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — la personne qui « gère l'argent » devient indispensable et puissante.
- **[Normalisation de l'évitement du conflit](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — les soupçons autour de l'argent s'enveniment parce qu'il est gênant de les soulever.

### Stress tests apparentés

- **[Privatisation des communs par la vente de terres](/articles/rcos-stress-tests/economy-resources/commons-privatization-through-land-sales)** — l'opacité est ce qui permet aux plus grandes décisions sur les actifs de se produire sans examen.
