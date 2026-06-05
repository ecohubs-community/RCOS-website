---
id: 1afbg1a7
title: Privatisation des communs par la vente de terres
summary: >-
  Quand vendre la terre aux membres rend discrètement la communauté impossible à
  quitter équitablement.
parentId: cbd2804b
order: 0
severity: high
stage:
  - growth
  - mature
layers:
  - 0
  - 3
  - 1
invariants:
  - '0.2'
  - '3.2'
  - '1.2'
remediationReady: true
tags:
  - 'Couche 3 : Économie'
  - Sévérité élevée
symptoms:
  - >-
    La communauté envisage (ou a commencé) de vendre des parcelles ou des unités
    à des membres individuels.
  - '"C''est plus simple si chacun possède sa part" gagne du terrain.'
  - >-
    Il n'existe aucune règle écrite sur la revente, la valorisation de sortie,
    ou ce qui reste en communs.
  - >-
    Les membres qui ont payé ne peuvent pas partir sans perdre de l'argent ou
    des droits.
  - >-
    Les invariants déclarés sur la terre commune entrent discrètement en conflit
    avec ce qui se passe réellement.
preventsWith:
  - rcos-templates/layer-3/treasury-ruleset
  - rcos-templates/layer-3/internal-economy-protocol
  - rcos-templates/layer-1/exit-protocol
  - rcos-templates/layer-0/invariants-register
cascade:
  - test: >-
      rcos-stress-tests/economy-resources/outsourced-labor-bypassing-contribution
    relation: enables
    note: >-
      Une fois que les membres possèdent leur part de façon privée, considérer
      les obligations partagées comme facultatives suit naturellement.
related:
  - rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent
lang: fr
sourceHash: b6dc6124
---

> **Sévérité :** Élevée — l'une des rares défaillances qui peut mettre fin au projet structurellement, et souvent de manière irréversible.
> **Où ça mord :** Phases de croissance et de maturité, généralement sous pression financière.
> **Tu vis déjà cela ?** Saute à [Si cela se produit déjà](#si-cela-se-produit-déjà).

### Ça te dit quelque chose ?

L'argent se fait rare, ou un membre veut la sécurité de vraiment *posséder* son logement, et quelqu'un dit la chose qui semble raisonnable : ce serait plus simple si les gens achetaient simplement leurs propres parcelles. Cela résout le problème de trésorerie. Cela semble juste. Et discrètement, avec cette unique démarche pragmatique, la terre qui devait être détenue en commun commence à se convertir en propriété privée — et la promesse que n'importe qui peut rejoindre, et n'importe qui peut partir, sans être piégé financièrement, commence à se dissoudre.

### Signes que cela vous arrive

- La communauté envisage (ou a commencé) de vendre des parcelles ou des unités à des membres individuels.
- "C'est plus simple si chacun possède sa part" gagne du terrain.
- Il n'existe aucune règle écrite sur la revente, la valorisation de sortie, ou ce qui reste en communs.
- Les membres qui ont payé ne peuvent pas partir sans perdre de l'argent ou des droits.
- Les invariants déclarés sur la terre commune entrent discrètement en conflit avec ce qui se passe réellement.

**Ce n'est _pas_ la même chose que** un modèle de tenure mixte délibérément conçu avec des frontières communs/privé explicites et pré-convenues et des conditions de sortie. Le signe révélateur est *une privatisation qui contredit les invariants déclarés par la communauté elle-même*, décidée ad hoc, sans règles de revente et de sortie déjà en place.

### Pourquoi cela arrive

La terre est l'actif le plus important et la pression la plus difficile à résister — la propriété individuelle semble plus sûre, le financement est plus facile, et une vente résout un besoin de trésorerie à court terme aujourd'hui. Mais une fois que les communs deviennent privés par une action informelle, les droits de sortie et les protections constitutionnelles s'érodent, et le changement est généralement irréversible. C'est l'un des rares tests de résistance où l'échec peut mettre fin structurellement à la communauté.

<details data-kind="rationale">
<summary>Le test de résistance formel (pour les auditeurs)</summary>

**Mode de défaillance** — La communauté vend la terre aux membres, sapant les règles de sortie et constitutionnelles.

**Couches impliquées** — Couche 0 (Périmètre et invariants), Couche 3 (Économie), Couche 1 (Adhésion)

**Invariants pertinents**

* 0.2 Périmètre gouverné explicite
* 3.2 Protection des communs
* 1.2 La sortie DOIT être possible

**Condition du test** — Les changements de propriété des actifs contredisent les invariants déclarés ; les membres ne peuvent pas sortir sans perdre des droits ou des biens.

**Comportement RCOS attendu** — Les ventes DOIVENT être bloquées ou régies par des règles pré-déclarées ; les conditions de sortie et de revente DOIVENT exister *avant* tout transfert.

**Critères de réussite** — Le statut de communs et les droits de sortie restent intacts.

**Critères d'échec** — La communauté devient structurellement impossible à quitter.

</details>

### Quelle est la maturité de votre communauté sur ce point ?

Réussite/échec est trop tranché pour la vie réelle — la plupart des communautés sont à mi-chemin. Trouve ton échelon, puis vise le suivant.

| Niveau | À quoi ça ressemble |
|---|---|
| **L0 — Implicite** | Les frontières communs vs privé sont supposées, pas écrites ; des ventes ad hoc sont possibles. |
| **L1 — Nommé** | Le groupe reconnaît le risque mais n'a pas de règle contraignante protégeant les communs ou régissant la sortie. |
| **L2 — Documenté** | Le statut des communs, les conditions de revente, et la valorisation de sortie sont écrits et ratifiés *avant* tout transfert. |
| **L3 — Appliqué et éprouvé** | Toute vente est bloquée ou régie par des règles pré-déclarées ; la sortie est toujours possible sans perdre de droits ; la protection a survécu à un véritable test de pression financière. |

La plupart des communautés qui se reconnaissent ici se situent à **L0 ou L1**. L'objectif n'est pas la perfection — c'est de monter d'un échelon.

### Comment RCOS empêche cela

RCOS protège les communs et la sortie *avant* que la pression n'arrive :

- **[Règlement de trésorerie](/articles/rcos-templates/layer-3/treasury-ruleset)** + **[Protocole d'économie interne](/articles/rcos-templates/layer-3/internal-economy-protocol)** — déclarer ce qui est communs vs privé et protéger les communs contre la privatisation informelle.
- **[Protocole de sortie](/articles/rcos-templates/layer-1/exit-protocol)** — garantir que les conditions de sortie et de revente existent avant que quiconque ne transfère quoi que ce soit, afin que personne ne soit piégé.
- **[Registre des invariants](/articles/rcos-templates/layer-0/invariants-register)** — enregistrer la protection des communs comme un invariant protégé qui ne peut pas être discrètement amendé.
- Exemple concret : la sauvegarde **[Anti-privatisation des communs fonciers](/articles/safeguards/land-commons-anti-privatization)**.

Voir aussi la spécification : [Couche 3 — Ressources communes vs privées](/articles/rcos-core/v0-1/layer-3-economic-resource-system#51-commons-vs-private-resources) et [Couche 1 — Sortie et séparation](/articles/rcos-core/v0-1/layer-1-membership-system#36-exit-and-separation).

### Si cela se produit déjà

Parce que la privatisation est souvent irréversible, agis avec prudence et rapidité :

1. **Gèle les mouvements irréversibles.** Suspends toute vente en cours jusqu'à ce que les règles existent — l'irréversibilité est tout le danger.
2. **Réaffirme l'invariant.** Confirme par écrit ce qui est communs et ne peut pas être privatisé par une action unilatérale ou informelle.
3. **Rédige les conditions de sortie et de revente avant tout transfert,** afin que personne ne soit piégé et que les communs survivent à un départ.
4. **Si des ventes ont déjà eu lieu,** obtiens une aide juridique pour reconstruire la possibilité de sortie et préserver ce qui reste des communs.

### Ce que cette défaillance a tendance à déclencher

- **[Externalisation du travail contournant la contribution](/articles/rcos-stress-tests/economy-resources/outsourced-labor-bypassing-contribution)** — une fois la terre détenue de façon privée, les membres peuvent traiter les obligations partagées comme facultatives et racheter leur sortie.

### Tests de résistance liés

- **[Précédent de contournement des règles en urgence](/articles/rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent)** — une crise financière « urgente » est la couverture classique d'une vente précipitée.
