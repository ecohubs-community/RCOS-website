---
id: 9e4c3b21
title: Outsourced Labor Bypassing Contribution
summary: When money quietly buys a way out of community life.
parentId: cbd2804b
order: 1

# --- Structured metadata ---------------------------------------------------
severity: medium
stage: [growth, mature]
layers: [3, 1, 4]
invariants: ["1.3", "3.3", "4.1"]
remediationReady: true
tags: ["Layer 3: Economy", "Medium severity"]
symptoms:
  - A wealthier member pays outsiders to cover their share of communal work.
  - Contribution requirements exist but are quietly satisfied with cash.
  - Resentment is building between those who show up and those who write cheques.
  - There is no agreed rule on whether money can substitute for participation.
  - Effort and wealth are becoming interchangeable without anyone deciding they should be.
preventsWith:
  - rcos-templates/layer-3/internal-economy-protocol
  - rcos-templates/layer-1/membership-agreement
  - rcos-templates/layer-4/accountability-protocol
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: feeds
    note: "The participation-versus-payment resentment is exactly the kind of conflict that gets avoided until it hardens into class lines."
related:
  - rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution
  - rcos-stress-tests/economy-resources/commons-privatization-through-land-sales
---

> **Severity:** Medium — corrosive rather than catastrophic, but it quietly stratifies the community.
> **Where it bites:** Growth and mature stages, once members' wealth starts to diverge.
> **Already living this?** Jump to [If it's already happening](#if-its-already-happening).

### Sound familiar?

The community expects everyone to pitch in for the shared work — the build days, the harvest, the repairs. One member, busier or wealthier than the rest, starts paying a contractor to cover their share. It's efficient. The work still gets done. But the people who show up with their own hands start to notice that for some members, belonging is something you can simply purchase, and a quiet resentment begins to separate those who participate from those who pay.

### Signs this is happening to you

- A wealthier member pays outsiders to cover their share of communal work.
- Contribution requirements exist but are quietly satisfied with cash.
- Resentment is building between those who show up and those who write cheques.
- There is no agreed rule on whether money can substitute for participation.
- Effort and wealth are becoming interchangeable without anyone deciding they should be.

**This is _not_ the same as** a community that has explicitly agreed money can substitute for labor (a declared equivalence). The tell is *bypass without agreement* — contribution expectations exist, but wealth silently overrides them.

### Why it happens

When contribution is expected but its relationship to money is left undefined, the people who can pay will — it's rational and easy. Unaddressed, it converts wealth into an exemption from community life, quietly stratifying members into those who participate and those who purchase their way out, and corroding the rights–obligations symmetry that membership is supposed to rest on.

<details data-kind="rationale">
<summary>The formal stress test (for auditors)</summary>

**Failure Mode** — A member avoids contribution and hires external labor instead.

**Layers Involved** — Layer 3 (Economy), Layer 1 (Membership), Layer 4 (Accountability)

**Relevant Invariants**

* 1.3 Rights–obligations symmetry
* 3.3 Contribution recognition is explicit
* 4.1 Conflict must be handled

**Test Condition** — Contribution expectations exist but are bypassed via money.

**Expected RCOS Behavior** — Determine whether outsourcing is allowed; apply equivalence rules or trigger an accountability process.

**Pass Criteria** — Contribution logic is enforced consistently.

**Fail Criteria** — Wealth replaces participation without agreement.

</details>

### How mature is your community on this?

Pass/fail is too blunt for real life — most communities are partway. Find your rung, then aim for the next one.

| Level | What it looks like |
|---|---|
| **L0 — Implicit** | Whether money can replace participation is undefined; people quietly buy out. |
| **L1 — Named** | The tension is acknowledged but no equivalence rule or accountability path exists. |
| **L2 — Documented** | The [Internal Economy Protocol](/articles/rcos-templates/layer-3/internal-economy-protocol) states whether and how money substitutes for labor; the [Membership Agreement](/articles/rcos-templates/layer-1/membership-agreement) ties obligations to rights. |
| **L3 — Enforced & rehearsed** | Contribution logic is applied consistently; a bypass triggers the agreed equivalence rule or an accountability process — and has. |

Most communities that recognise themselves here sit at **L0 or L1**. The goal isn't perfection — it's moving up one rung.

### How RCOS prevents this

RCOS forces the community to *decide* the money–labor relationship instead of letting it default:

- **[Internal Economy Protocol](/articles/rcos-templates/layer-3/internal-economy-protocol)** — decide explicitly whether money can substitute for labor, and at what equivalence.
- **[Membership Agreement](/articles/rcos-templates/layer-1/membership-agreement)** — bind contribution obligations to membership rights, so participation isn't optional-by-wealth.
- **[Accountability Protocol](/articles/rcos-templates/layer-4/accountability-protocol)** — a defined path for when expectations are bypassed.

See also the spec: [Layer 3 — Contribution Recognition](/articles/rcos-core/v0-1/layer-3-economic-resource-system#52-contribution-recognition) and [Layer 1 — Rights and Obligations](/articles/rcos-core/v0-1/layer-1-membership-system#34-rights-and-obligations).

### If it's already happening

Decide the rule before the resentment becomes a class line:

1. **Name the rule gap.** Decide, together, whether outsourcing is allowed at all — and on what terms.
2. **Set an equivalence (or prohibit substitution)** so the answer is consistent, not negotiated case by case.
3. **Address the resentment directly** via the accountability or conflict path before it hardens.

### What this failure tends to trigger

- **[Conflict Avoidance Normalization](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — the participation-versus-payment resentment is exactly the kind of conflict a group avoids until it's structural.

### Related stress tests

- **[Self-Sufficiency Without Collective Contribution](/articles/rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution)** — the disengagement cousin: here people buy out of contribution, there they simply opt out.
- **[Commons Privatization through Land Sales](/articles/rcos-stress-tests/economy-resources/commons-privatization-through-land-sales)** — the same decoupling of wealth from shared obligation, at the level of land.
