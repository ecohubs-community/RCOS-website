---
id: 6gcf15u
title: Prise de décision par cliques informelles
summary: >-
  Quand les vraies décisions se prennent avant la réunion, parmi les mêmes
  quelques personnes.
parentId: 7f25f268
order: 2
severity: high
stage:
  - growth
  - mature
layers:
  - 2
  - 1
invariants:
  - '2.4'
  - '1.1'
remediationReady: true
tags:
  - 'Layer 2: Governance'
  - High severity
symptoms:
  - >-
    Les décisions semblent « déjà prises » au moment où elles arrivent devant le
    groupe entier.
  - >-
    Un sous-groupe récurrent (la table de cuisine, un fil de discussion, les «
    originaux ») façonne les résultats.
  - >-
    Il y a peu ou pas de traces de décisions ; tu ne peux pas reconstituer
    comment les choses ont été décidées.
  - >-
    Les membres plus récents ou périphériques perçoivent une ligne nette entre
    initiés et non-initiés.
  - >-
    « On en a déjà parlé » clôt des discussions qui n'ont jamais eu lieu
    formellement.
preventsWith:
  - rcos-templates/layer-2/decision-matrix
  - rcos-templates/layer-2/governance-protocol
  - rcos-templates/layer-5/meeting-templates
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: enables
    note: >-
      Un groupe d'exclus apprend rapidement à ne pas défier le groupe d'initiés,
      et l'évitement devient la norme.
  - test: rcos-stress-tests/governance-power/founder-informal-veto
    relation: feeds
    note: >-
      La clique se forme généralement autour d'une autorité informelle dont elle
      exécute les préférences.
related:
  - rcos-stress-tests/governance-power/dominant-speakers-decision-spaces
lang: fr
sourceHash: d8227bca
---

> **Gravité :** Élevée — l'autorité migre hors-registre, là où elle ne peut être ni vue ni examinée.
> **Où ça mord :** Aux stades de croissance et de maturité, à mesure que la confiance et les canaux parallèles s'approfondissent.
> **Tu vis déjà ça ?** Saute à [Si c'est déjà en train d'arriver](#si-cest-déjà-en-train-darriver).

### Ça te dit quelque chose ?

Quand une question arrive devant le groupe entier, elle a déjà une réponse. La même poignée de personnes — les fondateurs, ceux qui vivent le plus près, ceux du fil de discussion tardif — en ont déjà discuté, et la réunion n'est en réalité qu'une ratification. Personne n'a décidé exprès dans une pièce enfumée. C'est juste plus rapide de régler les choses entre gens qui se parlent déjà. Mais tous ceux qui sont hors de ce cercle sentent la ligne, et la trace de *comment* quoi que ce soit a été décidé n'existe tout simplement pas.

### Signes que ça t'arrive

- Les décisions semblent « déjà prises » au moment où elles arrivent devant le groupe entier.
- Un sous-groupe récurrent façonne les résultats en dehors de tout processus formel.
- Il y a peu ou pas de traces de décisions ; tu ne peux pas reconstituer comment les choses ont été décidées.
- Les membres plus récents ou périphériques perçoivent une ligne nette entre initiés et non-initiés.
- « On en a déjà parlé » clôt des discussions qui n'ont jamais eu lieu formellement.

**Ce n'est _pas_ la même chose qu'**un groupe de travail délégué avec un mandat documenté. Le signe révélateur, c'est que *l'autorité a migré hors-registre* — les résultats émergent sans mécanisme traçable, et l'appartenance au cercle décisionnel n'a jamais été déclarée.

### Pourquoi ça arrive

À mesure que la confiance se forme, les gens qui se parlent le plus en dehors des réunions commencent à régler les choses de manière informelle — c'est plus rapide et ça semble naturel. Mais les décisions prises hors-registre ne peuvent pas être examinées, et la frontière du cercle décisionnel n'est jamais déclarée, donc le pouvoir se concentre discrètement dans un groupe d'initiés que personne n'a formellement désigné et que personne ne peut formellement tenir pour responsable.

<details data-kind="rationale">
<summary>Le test de résistance formel (pour auditeurs)</summary>

**Mode de défaillance** — Les décisions migrent vers des sous-groupes informels.

**Couches concernées** — Couche 2 (Gouvernance), Couche 1 (Adhésion)

**Invariants pertinents**

* 2.4 Les décisions sont examinables
* 1.1 Pas d'adhésion implicite

**Condition du test** — Les résultats émergent sans traces de décision formelles.

**Comportement RCOS attendu** — Les décisions prises en dehors des canaux formels sont invalides.

**Critères de réussite** — L'autorité reste lisible et examinable.

**Critères d'échec** — Le pouvoir migre hors-registre.

</details>

### Quelle est la maturité de ta communauté sur ce point ?

Réussi/échoué est trop tranché pour la vraie vie — la plupart des communautés sont à mi-chemin. Trouve ton barreau, puis vise le suivant.

| Niveau | À quoi ça ressemble |
|---|---|
| **L0 — Implicite** | Les vraies décisions se prennent dans des sous-groupes informels ; le processus formel les ratifie après coup. |
| **L1 — Nommé** | Le groupe ressent une dynamique de clique mais n'a pas exigé que les décisions soient consignées. |
| **L2 — Documenté** | Une [matrice de décision](/articles/rcos-templates/layer-2/decision-matrix) définit ce qui DOIT être décidé par des canaux formels et tracés ; les résultats hors-canal sont invalides. |
| **L3 — Appliqué et rodé** | Les décisions sont lisibles et examinables ; les résolutions informelles sont systématiquement ramenées au registre. |

La plupart des communautés qui se reconnaissent ici se trouvent à **L0 ou L1**. L'objectif n'est pas la perfection — c'est de monter d'un barreau.

### Comment RCOS prévient cela

RCOS garde l'autorité lisible en exigeant que les décisions soient consignées :

- **[Matrice de décision](/articles/rcos-templates/layer-2/decision-matrix)** — définit quelles décisions requièrent un processus formel et tracé.
- **[Protocole de gouvernance](/articles/rcos-templates/layer-2/governance-protocol)** — rend explicitement invalides les décisions prises en dehors des canaux formels.
- **[Modèles de réunion](/articles/rcos-templates/layer-5/meeting-templates)** — consignent les décisions pour que l'autorité reste examinable, pas seulement mémorisée.

Voir aussi la spécification : [Couche 2 — Matrice de décision](/articles/rcos-core/v0-1/layer-2-governance-decision-logic#44-decision-matrix) et [Couche 5 — Documentation et flux d'information](/articles/rcos-core/v0-1/layer-5-operations-coordination#73-documentation-and-information-flow).

### Si c'est déjà en train d'arriver

Tu n'as pas à briser des amitiés — tu dois ramener les décisions au registre :

1. **Exige un compte rendu de décision.** Rien ne compte comme décidé tant que ce n'est pas écrit là où tout le monde peut le voir.
2. **Fais émerger le vrai lieu.** Déplace la véritable conversation décisionnelle vers un canal ouvert et avec compte rendu.
3. **Nomme le mandat.** Si un sous-groupe doit décider de certaines choses, donne-lui un mandat explicite et borné ; sinon dissous son autorité informelle.
4. **Surveille la cascade** — la gouvernance par clique corrode la clarté de l'adhésion et apprend au groupe d'exclus à ne plus prendre la parole.

### Ce que cette défaillance tend à déclencher

- **[Normalisation de l'évitement des conflits](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — un groupe d'exclus apprend rapidement à ne pas défier le groupe d'initiés.
- **[Veto informel du fondateur](/articles/rcos-stress-tests/governance-power/founder-informal-veto)** — la clique se forme typiquement autour d'une autorité informelle et exécute ses préférences.

### Tests de résistance liés

- **[Locuteurs dominants dans les espaces décisionnels](/articles/rcos-stress-tests/governance-power/dominant-speakers-decision-spaces)** — la version en réunion de la même dérive de l'autorité loin des mécanismes convenus.
