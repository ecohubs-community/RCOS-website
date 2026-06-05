---
id: 8c2d5f13
title: Épuisement du travail de soin invisible
summary: >-
  Quand la communauté repose sur le soin non rémunéré de quelques personnes
  silencieusement épuisées.
parentId: a9e4c65d
order: 0
severity: high
stage:
  - growth
  - mature
layers:
  - 3
  - 5
invariants:
  - '3.3'
  - '5.3'
remediationReady: true
tags:
  - 'Layer 5: Operations'
  - High severity
symptoms:
  - >-
    Une ou deux personnes tiennent la vie émotionnelle de la communauté — et
    elles sont épuisées.
  - >-
    Le travail de soin (prendre des nouvelles, médier, accueillir, recevoir les
    nouveaux venus) est essentiel mais invisible et non rémunéré.
  - 'Si une personne précise partait, le tissu social se déchirerait.'
  - >-
    Ce travail n'apparaît jamais dans aucun rôle, budget ou système de
    reconnaissance.
  - >-
    Les personnes qui le font sont silencieusement amères, ou sur le point de
    partir.
preventsWith:
  - rcos-templates/layer-5/role-registry
  - rcos-templates/layer-3/internal-economy-protocol
  - rcos-templates/layer-5/operations-manual
cascade:
  - test: >-
      rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
    relation: enables
    note: >-
      La personne sans qui la communauté ne peut pas fonctionner devient
      structurellement indispensable et non redevable.
related:
  - >-
    rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution
lang: fr
sourceHash: 89ca71da
---

> **Gravité :** Élevée — invisible jusqu'à ce que la personne qui le porte s'épuise ou parte, alors existentielle.
> **Où ça mord :** Phases de croissance et de maturité, une fois que la charge relationnelle s'est accumulée.
> **Tu vis déjà ça ?** Va directement à [Si c'est déjà en train d'arriver](#si-cest-déjà-en-train-darriver).

### Ça te dit quelque chose ?

Il y a une personne — peut-être deux — qui tiennent tout ensemble en silence. Elles remarquent quand quelqu'un est en difficulté, désamorcent les conflits, organisent les dîners, se souviennent des anniversaires, accueillent les nouveaux arrivants. Rien de tout cela n'est dans leur fiche de poste, parce qu'il n'y a pas de fiche de poste. La communauté semble chaleureuse et connectée, et presque personne ne réalise que cette chaleur est générée par quelques personnes qui tournent à vide — jusqu'à ce que l'une d'elles, enfin épuisée, prenne du recul ou parte, et que tout le tissu social se déchire.

### Signes que ça t'arrive

- Une ou deux personnes tiennent la vie émotionnelle de la communauté — et elles sont épuisées.
- Le travail de soin est essentiel mais invisible et non rémunéré.
- Si une personne précise partait, le tissu social se déchirerait.
- Ce travail n'apparaît jamais dans aucun rôle, budget ou système de reconnaissance.
- Les personnes qui le font sont silencieusement amères, ou sur le point de partir.

**Ce n'est _pas_ la même chose que** des personnes qui donnent librement un soin qu'elles trouvent significatif. Le signe révélateur est la *dépendance structurelle* — la communauté s'effondrerait sans un travail invisible que personne n'a nommé, délimité ou reconnu.

### Pourquoi ça arrive

Le travail de soin et le travail émotionnel sont faciles à ne-pas-voir précisément parce qu'ils préviennent les problèmes plutôt que de produire un résultat visible. Comme c'est rarement nommé ou reconnu, ça s'accumule sur celui ou celle qui est le plus attentif·ve — généralement les mêmes quelques personnes — jusqu'à l'épuisement. La dépendance est structurelle même quand le don est volontaire : le système en dépend, mais le système ne le reconnaît jamais.

<details data-kind="rationale">
<summary>Le test de résistance formel (pour les auditeurs)</summary>

**Mode de défaillance** — Certains membres portent un travail émotionnel ou de soin disproportionné.

**Couches concernées** — Couche 3 (Économie), Couche 5 (Opérations)

**Invariants pertinents**

* 3.3 La reconnaissance de la contribution est explicite
* 5.3 Le temps et l'attention sont des ressources finies

**Condition du test** — Le travail de soin est essentiel mais non documenté et non rémunéré.

**Comportement RCOS attendu** — Le travail de soin est reconnu, réduit ou redistribué.

**Critères de réussite** — Aucune dépendance structurelle au travail invisible.

**Critères d'échec** — L'épuisement est normalisé.

</details>

### À quel niveau de maturité ta communauté se situe-t-elle sur ce point ?

Réussir/échouer est trop binaire pour la vraie vie — la plupart des communautés sont à mi-chemin. Trouve ton barreau, puis vise le suivant.

| Niveau | À quoi ça ressemble |
|---|---|
| **L0 — Implicite** | Le travail de soin est invisible, sans nom, porté par défaut par quelques personnes. |
| **L1 — Nommé** | Le groupe reconnaît que certaines personnes sont surchargées mais n'a pas reconnu ni redistribué le travail. |
| **L2 — Documenté** | Les responsabilités de soin sont nommées comme des [rôles](/articles/rcos-templates/layer-5/role-registry), reconnues comme contribution, et délimitées par des plafonds de charge. |
| **L3 — Appliqué et exercé** | Aucune dépendance structurelle au travail invisible ; le travail de soin est reconnu, délimité et rotatif ; les limites de capacité sont respectées. |

La plupart des communautés qui se reconnaissent ici se situent à **L0 ou L1**. L'objectif n'est pas la perfection — c'est de monter d'un barreau.

### Comment RCOS prévient ça

RCOS rend le travail invisible visible, délimité et partagé :

- **[Registre des rôles](/articles/rcos-templates/layer-5/role-registry)** — nomme les responsabilités de soin et relationnelles comme de véritables rôles, avec rotation et limites.
- **[Protocole d'économie interne](/articles/rcos-templates/layer-3/internal-economy-protocol)** — reconnais le soin comme contribution, pour qu'il soit visible et valorisé plutôt que présupposé.
- **[Manuel des opérations](/articles/rcos-templates/layer-5/operations-manual)** — borne la charge de travail pour que le travail essentiel ne retombe pas silencieusement sur une seule personne.

Voir aussi la spécification : [Couche 5 — Limites de charge et de capacité](/articles/rcos-core/v0-1/layer-5-operations-coordination#74-workload-and-capacity-boundaries) et [Couche 3 — Reconnaissance de la contribution](/articles/rcos-core/v0-1/layer-3-economic-resource-system#52-contribution-recognition).

### Si c'est déjà en train d'arriver

Si ta communauté tourne grâce aux dernières forces de quelqu'un, agis avant qu'iel parte :

1. **Rends-le visible.** Liste le travail de soin qui se fait réellement et qui le fait. Le nommer, c'est déjà la moitié de la solution.
2. **Reconnais-le maintenant.** Valorise-le explicitement comme contribution ; c'est le travail non vu qui épuise les gens.
3. **Redistribue et borne.** Fais tourner les rôles et fixe des limites de capacité avant que la personne clé n'atteigne sa limite.
4. **Surveille la cascade** — la personne soignante indispensable accumule aussi un pouvoir invisible et une sortie motivée par l'épuisement.

### Ce que cette défaillance tend à déclencher

- **[Pouvoir invisible via les responsabilités](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — la personne sans qui la communauté ne peut pas fonctionner devient structurellement indispensable et non redevable.

### Tests de résistance connexes

- **[Auto-suffisance sans contribution collective](/articles/rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution)** — l'image miroir : quand la plupart des membres se désengagent, ce sont les rares qui s'engagent qui s'épuisent.
