---
id: 6acbe9a7
title: Tests de Résistance RCOS
parentId: null
order: 7
lang: fr
sourceHash: e05e86e3
---

## Ce que sont les Tests de Résistance

Les Tests de Résistance RCOS sont des **scénarios d'échec réels** — des situations que des communautés ont effectivement vécues — formalisés en cas de test que la spécification RCOS doit pouvoir supporter. Chaque test décrit un mode d'échec concret, les couches qu'il touche, les invariants qu'il met sous pression et la réponse structurelle attendue par RCOS.

Un test de résistance répond à une seule question :

> *Si cela arrivait à une communauté utilisant RCOS, le système l'absorberait-il — ou faudrait-il contourner le système ?*

Si RCOS peut survivre au scénario sans correctifs informels, le test **réussit**. Sinon, le test **échoue** — et un test qui échoue pointe vers une véritable lacune du cadre que les versions futures devront combler. Les tests de résistance sont la manière dont RCOS reste honnête : la spécification n'est aussi solide que les échecs face auxquels elle a été testée.

## Comment ils sont organisés

Les tests de résistance sont regroupés selon le type d'échec qu'ils sondent :

- **[Gouvernance & Pouvoir](/articles/rcos-stress-tests/governance-power?id=7f25f268)** — autorité informelle, veto du fondateur, locuteurs dominants, cliques cachées.
- **[Conflit & Responsabilité](/articles/rcos-stress-tests/conflict-accountability)** — évitement, représailles, dissidence étouffée.
- **[Culture & Influence](/articles/rcos-stress-tests/culture-influence)** — capture charismatique, dérive idéologique, pression du groupe.
- **[Économie & Ressources](/articles/rcos-stress-tests/economy-resources)** — privatisation des communs, travail invisible, asymétrie de richesse.
- **[Appartenance & Frontières](/articles/rcos-stress-tests/membership-boundaries)** — droits de sortie flous, sélection cachée, ossification du groupe.
- **[Opérations & Coordination](/articles/rcos-stress-tests/operations-coordination)** — épuisement silencieux, confusion des rôles, transmissions manquantes.
- **[Changement & Urgences](/articles/rcos-stress-tests/change-emergencies)** — règles d'urgence qui deviennent silencieusement permanentes, virages non gouvernés.

Chaque test est écrit pour être **reconnu, pas seulement lu**. Il s'ouvre sur les signes vécus de l'échec, explique pourquoi il se produit, te place sur une échelle de maturité allant d'*implicite* à *répété*, et pointe vers les structures RCOS précises qui le préviennent — avec des chemins distincts pour le **prévenir** et pour le **stabiliser quand il se produit déjà**. La spécification originale de réussite/échec est conservée à l'intérieur de chaque test, dans un panneau destiné aux auditeurs. La [matrice de couverture](#coverage-heading) plus bas montre quel invariant RCOS chaque test sollicite.

## Comment les utiliser

- Comme **vérification de conception** — lis-les avant de fonder une communauté pour anticiper ce qui peut mal tourner.
- Comme **outil d'audit** — parcours-les avec un groupe existant et remarque quels scénarios n'ont pas de réponse chez vous.
- Comme **aide en cas de conflit** — quand quelque chose casse, trouve le test pertinent et suis le comportement attendu plutôt que d'improviser.
- Comme **vocabulaire partagé** pour nommer les schémas d'échec sans blâmer les individus.

## Outils

Deux outils complémentaires rendent la bibliothèque plus facile à utiliser :

- **[Auto-évaluation](/articles/rcos-stress-tests/self-assessment)** — coche les signes d'alerte qui te semblent familiers et vois de quels tests de résistance ta communauté est la plus proche, classés par ordre d'urgence, chacun lié aux structures qui le préviennent. Tout reste dans ton navigateur.
- **[Guide de Facilitation](/articles/rcos-stress-tests/facilitation-worksheet)** — comment mener un test de résistance en séance de groupe : une feuille de travail étape par étape qui transforme n'importe quel test en une conversation de 60 à 90 minutes se terminant par une prochaine étape concrète.

## Ce que ces tests ne peuvent pas faire

RCOS est un cadre **structurel**, et ces tests héritent de ses limites. Les énoncer clairement fait partie du fait de rester honnête :

- **Ils rendent la gestion explicite ; ils ne font pas la gestion à ta place.** Un test peut te dire qu'un conflit doit entrer dans un processus défini — il ne peut pas avoir la conversation difficile à ta place, ni fournir le courage, l'attention et la bienveillance dont ce processus a besoin pour fonctionner réellement.
- **Ils ne guérissent pas les personnes.** La structure peut empêcher qu'un préjudice soit ignoré ou caché, mais elle ne résout pas les traumatismes, ne reconstruit pas la confiance brisée, et ne remplace pas la médiation, la thérapie ou le temps. RCOS fait de la place pour ce travail ; il n'est pas ce travail.
- **Ils ne fabriquent pas de relations.** Aucun protocole ne crée la chaleur, l'alchimie ou le sentiment d'appartenance. Les tests peuvent protéger ces choses de l'érosion structurelle, mais une communauté doit encore vouloir sincèrement vivre ensemble.
- **Réussir n'est pas l'objectif ; l'honnêteté l'est.** Une communauté peut satisfaire chaque test sur le papier et rester un endroit difficile à vivre, ou en échouer plusieurs et néanmoins prospérer. Les tests sont un miroir du risque structurel, pas un certificat de santé.
- **Ils décrivent des schémas, pas tes spécificités.** Chaque test est une synthèse de nombreux échecs réels. Te reconnaître dans l'un est le début d'une conversation, pas un diagnostic — ton contexte décide de ce qu'il faut réellement faire.

Utilise-les pour la seule chose dans laquelle ils sont véritablement efficaces : rendre l'implicite explicite, avant que cela ne te coûte cher.

## Contribuer un Test de Résistance

La bibliothèque grandit en absorbant l'expérience réelle. **Si ta communauté a vécu un échec structurel pas encore couvert ici, nous l'accueillons volontiers.** [Contacte-nous](https://ecohubs.community/contact) avec la situation — ce qui s'est passé, quelles couches ont été impliquées, comment cela a été (ou n'a pas été) résolu — et nous envisagerons de l'ajouter comme nouveau test de résistance. Les échecs réels rendent RCOS plus solide.
