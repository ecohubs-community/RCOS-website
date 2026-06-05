---
id: d2f7a4e9
title: Autosuffisance sans contribution collective
summary: >-
  Quand tout le monde profite des communs mais que presque personne ne les
  entretient.
parentId: a9e4c65d
order: 3
severity: high
stage:
  - growth
  - mature
layers:
  - 1
  - 5
  - 3
invariants:
  - '1.3'
  - '3.3'
  - '5.3'
remediationReady: true
tags:
  - Contribution & engagement
  - High severity
symptoms:
  - >-
    La même poignée de personnes organise chaque journée de travail, chaque
    réunion, chaque réparation.
  - >-
    Les appels à l'aide pour les tâches partagées reçoivent un accord
    chaleureux, mais peu de gens se présentent réellement.
  - >-
    Les membres sont très compétents sur leurs propres parcelles, mais
    apparaissent rarement aux projets collectifs.
  - >-
    « Quelqu'un devrait vraiment… » se dit souvent ; « Je le ferai » se dit
    rarement.
  - Il n'est pas clair ce que chaque membre est réellement censé apporter.
preventsWith:
  - rcos-templates/layer-1/membership-agreement
  - rcos-templates/layer-5/role-registry
  - rcos-templates/layer-3/internal-economy-protocol
  - rcos-templates/layer-1/onboarding-protocol
cascade:
  - test: >-
      rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
    relation: enables
    note: >-
      Quand seuls quelques engagés font tourner le travail collectif, ils
      accumulent une influence informelle et non redevable sur le fonctionnement
      de la communauté.
  - test: rcos-stress-tests/operations-coordination/invisible-care-labor-burnout
    relation: feeds
    note: >-
      Le noyau rétrécissant absorbe toujours plus de travail non rémunéré —
      l'image miroir de ce test : trop peu d'engagés signifie que ceux qui le
      sont sont surchargés.
related:
  - rcos-stress-tests/economy-resources/outsourced-labor-bypassing-contribution
lang: fr
sourceHash: 47f76c03
---

> **Gravité :** Élevée — rarement une crise au jour le jour, mais une lente érosion qui paralyse la communauté et épuise discrètement les quelques personnes qui la portent.
> **Où ça mord :** Généralement une fois que la nouveauté fondatrice s'estompe — aux stades de croissance et de maturité — bien que les graines soient semées dès l'entrée.
> **Vous vivez déjà cela ?** Sautez à [Si c'est déjà en train d'arriver](#si-cest-déjà-en-train-darriver).

### Ça vous parle ?

Tout le monde vit bien ici. Les gens entretiennent leurs propres jardins, réparent leurs propres maisons, vivent légèrement et avec compétence. Les valeurs partagées sont réelles — tout le monde *croit* aux communs, à la forêt nourricière, à la vision collective. Et pourtant, la journée de travail compte les six mêmes personnes que d'habitude. La réunion pour planifier la saison est peu fréquentée. L'infrastructure partagée se dégrade lentement, non parce que quelqu'un s'y oppose, mais parce que son entretien n'est le travail de personne en particulier. La communauté est pleine de personnes autosuffisantes et meurt lentement de faim de travail collectif.

### Les signes que ça vous arrive

- La même poignée de personnes organise chaque journée de travail, chaque réunion, chaque réparation.
- Les appels à l'aide pour les tâches partagées reçoivent un accord chaleureux, mais peu de gens se présentent réellement.
- Les membres sont très compétents sur leurs propres parcelles, mais apparaissent rarement aux projets collectifs.
- « Quelqu'un devrait vraiment… » se dit souvent ; « Je le ferai » se dit rarement.
- Il n'est pas clair ce que chaque membre est réellement censé apporter — et personne ne veut le demander.

**Ce n'est _pas_ la même chose qu'**une communauté qui a *délibérément* minimisé les obligations partagées — par exemple, un projet d'habitat groupé qui, par conception, ne partage que le terrain et les infrastructures. Le signe révélateur ici est un **écart entre les objectifs partagés déclarés et la contribution réelle** : des personnes qui disent vouloir des communs florissants mais qui ne les alimentent pas en ressources. Un faible engagement *par conception* est un choix valide ; un faible engagement *malgré une ambition partagée* est l'échec.

### Pourquoi ça arrive

Les personnes autosuffisantes peuvent satisfaire la plupart de leurs propres besoins, donc l'attrait quotidien de contribuer collectivement est faible — les communs ressemblent à un décor, pas à une responsabilité. Quand les attentes en matière de contribution ne sont jamais rendues explicites, les communs deviennent un *bien gratuit* : tout le monde en consomme, personne n'est obligé de les entretenir, et l'entretien revient silencieusement à celles et ceux qui s'en soucient le plus. Les *valeurs* partagées font que tout le monde se sent aligné, ce qui masque l'absence d'*engagement* partagé. Parce que rien n'est réellement dû, la contribution fonctionne à l'humeur et à la bonne volonté — et la bonne volonté ne passe pas à l'échelle et ne survit pas à une mauvaise saison.

<details data-kind="rationale">
<summary>Le test de résistance formel (pour les auditeurs)</summary>

**Mode d'échec** — Les membres vivent durablement et profitent des communs, mais contribuent rarement aux responsabilités partagées ou aux objectifs collectifs. Les valeurs partagées existent, mais pas l'engagement partagé.

**Couches impliquées** — Couche 1 (Adhésion), Couche 5 (Opérations), Couche 3 (Économie)

**Invariants pertinents**

* 1.3 Symétrie droits–obligations
* 3.3 La reconnaissance de la contribution est explicite
* 5.3 Le temps et l'attention sont des ressources finies

**Condition du test** — Les membres bénéficient des communs et du mode de vie partagé tandis que le travail collectif reste inachevé ; les attentes en matière de contribution sont faibles, non déclarées ou laissées à la bonne volonté ; un même petit noyau soutient et développe la communauté pendant que la plupart se désengagent.

**Comportement attendu de RCOS** — Les attentes en matière de contribution sont rendues explicites et liées aux droits d'adhésion ; les responsabilités collectives sont liées à des rôles et suivies ; une non-contribution persistante déclenche un examen défini.

**Critères de réussite** — Les responsabilités partagées sont maintenues sans dépendre d'une minorité engagée, et les droits et obligations restent symétriques entre les membres.

**Critères d'échec** — Les bénéfices se découplent de la contribution ; l'entretien dépend d'un noyau qui se rétrécit jusqu'à ce qu'il cale ou s'effondre.

</details>

### Quel est le degré de maturité de votre communauté sur ce point ?

Réussite/échec est trop tranché pour la vraie vie — la plupart des communautés sont à mi-chemin. Trouvez votre échelon, puis visez le suivant.

| Niveau | À quoi ça ressemble |
|---|---|
| **L0 — Implicite** | La contribution est censée « arriver naturellement ». Personne n'énonce ce qui est attendu, et une poignée silencieuse porte le reste. |
| **L1 — Nommé** | Le groupe admet ouvertement que l'engagement est inégal et en parle, mais les attentes restent informelles et non appliquées. |
| **L2 — Documenté** | Les attentes en matière de contribution sont inscrites dans l'[Accord d'adhésion](/articles/rcos-templates/layer-1/membership-agreement), et le travail collectif récurrent existe sous forme de rôles nommés. Les membres savent à quoi ils se sont engagés. |
| **L3 — Appliqué et répété** | La contribution est suivie et reconnue ; la charge est visiblement partagée et rééquilibrée au fil du temps ; une non-contribution persistante déclenche un examen défini plutôt qu'un ressentiment silencieux. |

La plupart des communautés qui se reconnaissent dans ce test se situent au **L0 ou L1**. L'objectif n'est pas la perfection — c'est de monter d'un échelon.

### Comment RCOS prévient cela

RCOS remplace « on espère que les gens vont mettre la main à la pâte » par un engagement explicite et symétrique. Construisez ces éléments **avant** que le désengagement ne devienne la norme :

- **[Accord d'adhésion](/articles/rcos-templates/layer-1/membership-agreement)** — liez des attentes concrètes en matière de contribution aux droits d'adhésion, afin que profiter des communs et les entretenir fassent partie du même contrat (Invariant 1.3, [droits et obligations](/articles/rcos-core/v0-1/layer-1-membership-system#34-rights-and-obligations)).
- **[Registre des rôles](/articles/rcos-templates/layer-5/role-registry)** — transformez le travail collectif récurrent en rôles nommés et assumés, au lieu de le laisser à celui ou celle qui le remarque.
- **[Protocole d'économie interne](/articles/rcos-templates/layer-3/internal-economy-protocol)** — définissez ce qui compte comme contribution et reconnaissez-la (crédits, réputation), afin que la participation soit visible et valorisée ([reconnaissance de la contribution](/articles/rcos-core/v0-1/layer-3-economic-resource-system#52-contribution-recognition)).
- **[Protocole d'intégration](/articles/rcos-templates/layer-1/onboarding-protocol)** — fixez la norme de contribution dès l'entrée, avant que le schéma de désengagement n'ait une chance de se former.

### Si c'est déjà en train d'arriver

Si les communs reposent déjà sur un noyau qui se rétrécit, vous ne pouvez pas « prévenir » cela — vous le rééquilibrez. Triez, dans l'ordre :

1. **Rendez la charge visible.** Faites un rapide audit de contribution : qui porte réellement le travail collectif en ce moment ? L'objectif n'est pas de blâmer — ce sont des données partagées qui mettent fin à la fiction polie selon laquelle tout le monde participe de manière égale.
2. **Convertissez les dépendances fragiles en rôles.** Commencez par ce qui s'effondrerait si une seule personne partait, et donnez-y un [rôle](/articles/rcos-templates/layer-5/role-registry) nommé avec une suppléance.
3. **Renégociez les attentes ouvertement, avec consentement.** Ajoutez des attentes explicites en matière de contribution à l'[Accord d'adhésion](/articles/rcos-templates/layer-1/membership-agreement) à l'avenir — un accord transparent vaut mieux qu'un ressentiment silencieux.
4. **Reconnaissez bruyamment la contribution existante.** Les gens se réengagent quand l'effort est *vu* ; un [Protocole d'économie interne](/articles/rcos-templates/layer-3/internal-economy-protocol) rend cette reconnaissance systématique plutôt que dépendante de la gratitude.
5. **Surveillez la cascade** (ci-dessous) — votre noyau engagé est déjà sur la voie de l'épuisement et d'un pouvoir informel accidentel.

### Ce que cet échec a tendance à déclencher

Un engagement collectif faible reste rarement contenu. Il produit discrètement deux échecs en aval :

- **[Pouvoir invisible via les responsabilités](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — quand seuls quelques engagés font tourner le travail collectif, ils accumulent une influence informelle et non redevable sur le fonctionnement de la communauté.
- **[Épuisement par travail de soin invisible](/articles/rcos-stress-tests/operations-coordination/invisible-care-labor-burnout)** — l'image miroir de ce test : trop peu d'engagés signifie que le noyau qui se rétrécit absorbe toujours plus de travail non rémunéré jusqu'à l'épuisement.

### Tests de résistance liés

- **[Travail externalisé contournant la contribution](/articles/rcos-stress-tests/economy-resources/outsourced-labor-bypassing-contribution)** — la cousine fondée sur l'argent : les attentes en matière de contribution existent mais sont contournées en sous-traitant, là où ici elles sont contournées en se désengageant. Même lien rompu entre bénéfice et contribution.
