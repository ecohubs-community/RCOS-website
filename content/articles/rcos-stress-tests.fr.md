---
id: 6acbe9a7
title: Tests de résistance RCOS
parentId: null
order: 7
lang: fr
sourceHash: b8c7f795
---

## Ce que sont les tests de résistance

Les tests de résistance RCOS sont des **scénarios d'échec réels** — des situations que des communautés ont effectivement vécues — formalisés en cas de test auxquels la spécification RCOS doit résister. Chaque test décrit un mode de défaillance concret, les couches qu'il touche, les invariants qu'il met à l'épreuve et la réponse structurelle attendue de RCOS.

Un test de résistance répond à une seule question :

> *Si cela arrivait à une communauté utilisant RCOS, le système l'absorberait-il — ou faudrait-il le contourner ?*

Si RCOS peut survivre au scénario sans correctifs informels, le test **réussit**. Sinon, le test **échoue** — et un test qui échoue pointe vers une véritable lacune du cadre que les versions futures devront combler. Les tests de résistance sont la manière dont RCOS reste honnête : la spécification n'est aussi solide que les défaillances contre lesquelles elle a été testée.

## Comment ils sont organisés

Les tests de résistance sont regroupés selon le type de défaillance qu'ils sondent :

- **[Gouvernance & Pouvoir](/articles/rcos-stress-tests/governance-power?id=7f25f268)** — autorité informelle, droit de veto des fondateurs, locuteurs dominants, cliques cachées.
- **[Conflit & Responsabilité](/articles/rcos-stress-tests/conflict-accountability)** — évitement, représailles, dissidence étouffée.
- **[Culture & Influence](/articles/rcos-stress-tests/culture-influence)** — capture charismatique, dérive idéologique, pression des pairs.
- **[Économie & Ressources](/articles/rcos-stress-tests/economy-resources)** — privatisation des communs, travail invisible, asymétrie de richesse.
- **[Adhésion & Frontières](/articles/rcos-stress-tests/membership-boundaries)** — droits de sortie peu clairs, sélection cachée, ossification de l'entre-soi.
- **[Opérations & Coordination](/articles/rcos-stress-tests/operations-coordination)** — burnout silencieux, confusion des rôles, passations manquantes.
- **[Changement & Urgences](/articles/rcos-stress-tests/change-emergencies)** — règles d'urgence qui deviennent discrètement permanentes, pivots non gouvernés.

Chaque test individuel suit un format cohérent : **Mode de défaillance**, **Couches impliquées**, **Invariants pertinents**, **Condition du test**, **Comportement RCOS attendu**, et **Critères de réussite / échec**.

## Comment les utiliser

- Comme **vérification de conception** — lisez-les avant de fonder une communauté pour anticiper ce qui peut mal tourner.
- Comme **outil d'audit** — parcourez-les avec un groupe existant et remarquez les scénarios pour lesquels vous n'avez pas de réponse.
- Comme **aide en cas de conflit** — quand quelque chose se brise, trouvez le test pertinent et suivez le comportement attendu au lieu d'improviser.
- Comme **vocabulaire partagé** pour nommer les schémas de défaillance sans blâmer les individus.

## Contribuer un test de résistance

La bibliothèque s'enrichit en absorbant l'expérience réelle. **Si ta communauté a traversé une défaillance structurelle non encore couverte ici, nous sommes preneurs.** [Contacte-nous](https://ecohubs.community/contact) avec la situation — ce qui s'est passé, quelles couches étaient impliquées, comment cela a été (ou non) résolu — et nous envisagerons de l'ajouter comme nouveau test de résistance. Les défaillances réelles rendent RCOS plus fort.
