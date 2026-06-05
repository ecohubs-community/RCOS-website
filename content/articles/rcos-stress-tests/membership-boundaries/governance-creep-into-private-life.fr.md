---
id: a9e2f4c7
title: Dérive de la gouvernance vers la vie privée
summary: >-
  Quand la communauté n'a pas de sphère privée déclarée, elle gouverne donc
  tout.
parentId: 45625035
order: 3
severity: medium
stage:
  - growth
  - mature
layers:
  - 0
  - 1
invariants:
  - '0.3'
  - '0.2'
remediationReady: true
tags:
  - 'Layer 0: Scope'
  - Medium severity
symptoms:
  - >-
    Les normes communautaires s'étendent aux choix personnels — alimentation,
    relations, parentalité, croyances, temps libre.
  - >-
    Il n'existe aucune ligne déclarée entre ce que la communauté gouverne et ce
    qui ne regarde personne.
  - >-
    Les membres se sentent observés, ou s'autocensurent sur des choix privés
    pour rester en règle.
  - >-
    La question « est-ce vraiment l'affaire de la communauté ? » est posée mais
    jamais tranchée.
  - >-
    Tout désaccord sur une question personnelle est traité comme une déloyauté
    envers le groupe.
preventsWith:
  - rcos-templates/layer-0/scope-declaration
  - rcos-templates/layer-0/identity-constraints-register
  - rcos-templates/layer-1/membership-agreement
cascade:
  - test: rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test
    relation: enables
    note: >-
      Sans sphère hors-champ, n'importe quel choix personnel peut devenir une
      norme applicable.
  - test: rcos-stress-tests/culture-influence/charismatic-spiritual-authority
    relation: enables
    note: >-
      Une communauté totalisante est un terrain fertile pour une autorité morale
      incontestable.
related:
  - rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test
lang: fr
sourceHash: 33f14866
---

> **Gravité :** Moyenne — corrosive pour le sentiment d'appartenance ; elle engendre une autocensure silencieuse et, à terme, des départs.
> **Où ça mord :** Aux stades de croissance et de maturité, dans les communautés à forte identité partagée.
> **Tu vis déjà ça ?** Saute à [Si c'est déjà en train d'arriver](#si-cest-déjà-en-train-darriver).

### Ça te dit quelque chose ?

Les valeurs partagées sont réelles et bonnes — et, lentement, elles se sont étendues pour couvrir à peu près tout. Ce que tu manges, avec qui tu sors, comment tu élèves tes enfants, ce en quoi tu crois, comment tu passes un après-midi de libre : tout cela est devenu, on ne sait comment, une affaire d'opinion communautaire. Personne n'a décidé de gouverner la vie privée des membres ; ça s'est simplement étendu, une norme bien intentionnée à la fois. Maintenant, les gens s'auto-éditent en silence pour rester en règle, et la question « est-ce vraiment l'affaire de la communauté ? » reste en suspens, posée mais jamais tranchée.

### Signes que ça t'arrive

- Les normes communautaires s'étendent aux choix personnels — alimentation, relations, parentalité, croyances, temps libre.
- Il n'existe aucune ligne déclarée entre ce que la communauté gouverne et ce qui ne regarde personne.
- Les membres se sentent observés, ou s'autocensurent sur des choix privés pour rester en règle.
- La question « est-ce vraiment l'affaire de la communauté ? » est posée mais jamais tranchée.
- Tout désaccord sur une question personnelle est traité comme une déloyauté envers le groupe.

**Ce _n'est pas_ la même chose qu**'une pratique partagée profonde mais délimitée, à laquelle les membres ont explicitement adhéré. L'indice, c'est *l'absence de tout espace non gouverné déclaré* — la gouvernance peut donc s'étendre dans la vie privée sans limite, parce que rien ne dit qu'elle ne peut pas.

### Pourquoi ça arrive

Des valeurs partagées fortes font qu'à peu près tout semble concerner la communauté, et sans une frontière explicite « ceci n'est pas gouverné », le périmètre s'étend par défaut. Chaque petite extension est bien intentionnée ; cumulées, elles produisent un environnement totalisant où il ne reste plus de soi privé — ce qui nourrit un ressentiment silencieux, l'autocensure, et le genre de départ où quelqu'un a juste besoin de respirer.

<details data-kind="rationale">
<summary>Le test de résistance formel (pour les auditeurs)</summary>

**Mode de défaillance** — La gouvernance s'étend à la vie privée des membres sans limite déclarée.

**Couches impliquées** — Couche 0 (Identité & Périmètre), Couche 1 (Adhésion)

**Invariants pertinents**

* 0.3 Espace non gouverné déclaré
* 0.2 Périmètre gouverné explicite

**Condition de test** — Les questions personnelles sont soumises aux normes communautaires sans sphère hors-champ déclarée.

**Comportement RCOS attendu** — Un espace non gouverné est explicitement déclaré ; les questions en dehors de ce périmètre ne peuvent déclencher de sanction.

**Critères de réussite** — La gouvernance reste dans le périmètre déclaré ; une sphère privée est protégée.

**Critères d'échec** — Le périmètre s'étend sans limite dans la vie privée.

</details>

### Quelle est la maturité de ta communauté sur ce point ?

Réussite/échec, c'est trop tranché pour la vraie vie — la plupart des communautés sont à mi-chemin. Trouve ton barreau, puis vise le suivant.

| Niveau | À quoi ça ressemble |
|---|---|
| **L0 — Implicite** | Aucune sphère privée déclarée ; les normes s'étendent à la vie personnelle sans contrôle. |
| **L1 — Nommé** | Le groupe remarque le débordement mais n'a pas tracé de frontière non gouvernée. |
| **L2 — Documenté** | Une [Déclaration de périmètre](/articles/rcos-templates/layer-0/scope-declaration) nomme explicitement ce qui est hors-champ — la sphère privée protégée. |
| **L3 — Appliqué & éprouvé** | La gouvernance reste dans le périmètre déclaré ; les questions personnelles en dehors ne peuvent déclencher de sanction ; cela a tenu dans un cas réel. |

La plupart des communautés qui se reconnaissent ici sont au **L0 ou L1**. L'objectif n'est pas la perfection — c'est de monter d'un barreau.

### Comment RCOS prévient cela

RCOS exige de déclarer ce que la communauté ne gouverne *pas* :

- **[Déclaration de périmètre](/articles/rcos-templates/layer-0/scope-declaration)** — déclarer explicitement ce que la communauté NE gouverne PAS (invariant 0.3).
- **[Registre des contraintes identitaires](/articles/rcos-templates/layer-0/identity-constraints-register)** — borner l'emprise de la communauté sur la vie des membres.
- **[Accord d'adhésion](/articles/rcos-templates/layer-1/membership-agreement)** — rendre explicite la pratique partagée à laquelle on adhère, et tout le reste privé par défaut.

Voir aussi la spécification : [Couche 0 — Déclaration de périmètre](/articles/rcos-core/v0-1/layer-0-identity-scope#22-scope-declaration) et [Contraintes identitaires](/articles/rcos-core/v0-1/layer-0-identity-scope#24-identity-constraints).

### Si c'est déjà en train d'arriver

Si la gouvernance a empiété sur la vie privée, retrace la ligne :

1. **Nommer le débordement.** Liste les endroits où les normes ont atteint la vie personnelle.
2. **Déclarer une sphère non gouvernée.** Écris noir sur blanc ce qui ne regarde explicitement personne.
3. **Re-cadrer l'application** pour que les questions personnelles hors de la ligne ne puissent pas affecter le statut.

### Ce que cette défaillance tend à déclencher

- **[Test de portée de la violation des normes culturelles](/articles/rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test)** — sans sphère hors-champ, n'importe quel choix personnel peut devenir une norme applicable.
- **[Autorité spirituelle charismatique](/articles/rcos-stress-tests/culture-influence/charismatic-spiritual-authority)** — une communauté totalisante est un terrain fertile pour une autorité morale incontestable.

### Tests de résistance liés

- **[Test de portée de la violation des normes culturelles](/articles/rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test)** — l'événement d'application ; ce test-ci est la frontière manquante qui le rend possible.
