**RCOS — Système d'Exploitation de Communauté Régénérative**

# Protocole de gouvernance

- **Généré:** 2026-11-02
- **Source (version la plus récente):** [https://rcos.ecohubs.community/fr/articles/rcos-templates/layer-2/governance-protocol](https://rcos.ecohubs.community/fr/articles/rcos-templates/layer-2/governance-protocol)
- **Tous les modèles RCOS:** [https://rcos.ecohubs.community/fr/articles/rcos-templates](https://rcos.ecohubs.community/fr/articles/rcos-templates)

---
- **Couche :** 2 — Gouvernance et logique décisionnelle
- **Statut :** Modèle — à adapter pour ta communauté
- **Référence RCOS :** [§4.5](https://rcos.ecohubs.community/fr/standard/core/0.1/layer-2-governance-decision-logic#4.5), [§4.6](https://rcos.ecohubs.community/fr/standard/core/0.1/layer-2-governance-decision-logic#4.6), [§4.7](https://rcos.ecohubs.community/fr/standard/core/0.1/layer-2-governance-decision-logic#4.7)

> Définit le cycle de vie complet d'une décision collective — de la soumission de proposition à la documentation et à l'appel.

---

## Soumission de proposition

*Clauses RCOS : [4.5.1](https://rcos.ecohubs.community/fr/standard/core/0.1/layer-2-governance-decision-logic#4.5.1), [4.5.2](https://rcos.ecohubs.community/fr/standard/core/0.1/layer-2-governance-decision-logic#4.5.2)*

- _<Décisions opérationnelles — traitées par le titulaire du rôle concerné selon le Registre des rôles ; aucune proposition requise.>_
- _<Décisions stratégiques et constitutionnelles — qui peut soumettre, et sur quelle plateforme.>_
- _<Champs obligatoires de la proposition : résumé, couches et artefacts concernés, type de décision, justification, risques et mesures d'atténuation, plan de retour en arrière, date d'entrée en vigueur proposée.>_
- _<Le type de décision est déclaré par le proposant ; par défaut, le type à impact le plus élevé s'applique en cas d'ambiguïté.>_
- _<Règles de retrait — quand une proposition peut être retirée et comment.>_

## Examen et délibération

*Clauses RCOS : [4.5.1](https://rcos.ecohubs.community/fr/standard/core/0.1/layer-2-governance-decision-logic#4.5.1), [4.5.2](https://rcos.ecohubs.community/fr/standard/core/0.1/layer-2-governance-decision-logic#4.5.2)*

- _<Où se déroule la délibération (forum, chat, réunion).>_
- _<Période minimale de délibération avant l'ouverture d'un vote — Stratégique.>_
- _<Période minimale de délibération avant l'ouverture d'un vote — Constitutionnelle.>_
- _<Attente que les membres soulèvent leurs préoccupations pendant la délibération pour éviter la nécessité de re-votes.>_

## Exécution de la décision

*Clauses RCOS : [4.5.1](https://rcos.ecohubs.community/fr/standard/core/0.1/layer-2-governance-decision-logic#4.5.1), [4.5.4](https://rcos.ecohubs.community/fr/standard/core/0.1/layer-2-governance-decision-logic#4.5.4)*

- _<En cas d'adoption : comment la proposition est classée ; les artefacts concernés sont mis à jour ; une entrée dans l'historique des versions est créée.>_
- _<En cas de rejet : où la proposition est archivée.>_
- _<Délai d'exécution après la clôture du vote.>_

## Documentation et publication

*Clauses RCOS : [4.5.4](https://rcos.ecohubs.community/fr/standard/core/0.1/layer-2-governance-decision-logic#4.5.4)*

- _<Toutes les propositions adoptées et rejetées sont classées dans les X jours suivant la clôture du vote.>_
- _<L'artefact de vote (p. ex. lien Snapshot) sert de registre de décision.>_
- _<L'historique des versions (Couche 6) est mis à jour avec chaque proposition adoptée.>_

## Appel et révision

*Clauses RCOS : [4.5.2](https://rcos.ecohubs.community/fr/standard/core/0.1/layer-2-governance-decision-logic#4.5.2), [4.6.2](https://rcos.ecohubs.community/fr/standard/core/0.1/layer-2-governance-decision-logic#4.6.2)*

- _<Qui peut déclencher un re-vote et comment.>_
- _<Exigence d'objection motivée — un point non traité lors de la délibération initiale.>_
- _<Le re-vote utilise le même mécanisme et le même seuil que le vote initial.>_
- _<Traitement des demandes de re-vote répétées et abusives.>_

## Conflit entre décisions

*Clauses RCOS : [4.5.3](https://rcos.ecohubs.community/fr/standard/core/0.1/layer-2-governance-decision-logic#4.5.3)*

- _<Préséance : Constitutionnelle > Stratégique > Opérationnelle.>_
- _<Conflits de même type : la plus récente prévaut, sauf si la précédente a explicitement verrouillé les modifications futures.>_
- _<Où les conflits sont signalés et comment ils sont résolus.>_

## Garde-fous et modes de défaillance

*Clauses RCOS : [4.6.1](https://rcos.ecohubs.community/fr/standard/core/0.1/layer-2-governance-decision-logic#4.6.1), [4.6.2](https://rcos.ecohubs.community/fr/standard/core/0.1/layer-2-governance-decision-logic#4.6.2), [4.6.3](https://rcos.ecohubs.community/fr/standard/core/0.1/layer-2-governance-decision-logic#4.6.3)*

- **Concentration du pouvoir :** _<comment le protocole empêche l'autorité unilatérale au-delà du périmètre opérationnel.>_
- **Vetos informels :** _<règle selon laquelle seules les objections écrites et motivées soumises via le processus défini ont du poids.>_
- **Capture décisionnelle :** _<règle concernant le quorum et l'ouverture du vote.>_
- **Enracinement des fondateurs/rôles :** _<règle selon laquelle aucun rôle ne confère d'autorité permanente ; les fondateurs ne détiennent aucune autorité de gouvernance spéciale au-delà de leur statut de membre.>_
- **Contestation sans représailles :** _<référence aux dispositions anti-représailles de la Couche 4.>_
- **Déclencheur de défaillance persistante :** _<p. ex. trois défaillances de gouvernance ou plus en X mois déclenchent une révision constitutionnelle.>_

---

## Registre de ratification

- **Adopté le :** <AAAA-MM-JJ>
- **Type de décision :** Constitutionnelle
- **Version :** <version>
- **Registre de décision :** <lien vers le registre de décision>
