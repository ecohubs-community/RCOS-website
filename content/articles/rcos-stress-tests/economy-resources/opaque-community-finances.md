---
id: c2e5b9d4
title: Opaque Community Finances
summary: When only a few people actually know where the money goes.
parentId: cbd2804b
order: 2

# --- Structured metadata ---------------------------------------------------
severity: high
stage: [growth, mature]
layers: [3]
invariants: ["3.1", "3.4"]
remediationReady: true
tags: ["Layer 3: Economy", "High severity"]
symptoms:
  - Only one or two people know the real state of the community's finances.
  - There's no regular, readable financial report everyone can see.
  - '"Don''t worry, it''s handled" is the answer to money questions.'
  - Members can't tell what they've collectively paid for, or what reserves exist.
  - Spending decisions happen without visible budgets or limits.
preventsWith:
  - rcos-templates/layer-3/treasury-ruleset
  - rcos-templates/layer-3/internal-economy-protocol
cascade:
  - test: rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
    relation: enables
    note: "Whoever holds the financial picture holds leverage no one granted them."
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: feeds
    note: "Suspicion about money festers precisely because it feels awkward to raise."
related:
  - rcos-stress-tests/economy-resources/commons-privatization-through-land-sales
---

> **Severity:** High — money ambiguity erodes trust faster than open conflict does.
> **Where it bites:** Growth and mature stages, once there's a treasury worth not understanding.
> **Already living this?** Jump to [If it's already happening](#if-its-already-happening).

### Sound familiar?

There's money moving through the community — dues, a shared account, grants, a building fund — and one or two people manage it. They're trusted, and probably doing their honest best. But nobody else can actually see the picture: what came in, what went out, what's held in reserve, what that big expense last year was. When you ask, the answer is a reassuring "it's handled." And slowly, the gap between what members assume and what's actually true becomes a quiet, load-bearing source of unease.

### Signs this is happening to you

- Only one or two people know the real state of the community's finances.
- There's no regular, readable financial report everyone can see.
- "Don't worry, it's handled" is the answer to money questions.
- Members can't tell what they've collectively paid for, or what reserves exist.
- Spending decisions happen without visible budgets or limits.

**This is _not_ the same as** keeping specific sensitive items private by an explicit, agreed exception. The tell is that financial flows are opaque *by default* — visibility depends on being in the right circle, not on a rule.

### Why it happens

Money is tedious to make transparent and easy to leave to "whoever's good with numbers." But opacity quietly concentrates power: whoever holds the financial picture holds leverage, and the distance between what members assume and what's real becomes a slow-acting trust bomb. As the spec puts it, money plus ambiguity destroys trust faster than conflict does.

<details data-kind="rationale">
<summary>The formal stress test (for auditors)</summary>

**Failure Mode** — Shared financial flows are invisible to most members by default.

**Layers Involved** — Layer 3 (Economy)

**Relevant Invariants**

* 3.1 Economic transparency by default
* 3.4 No unbounded accumulation of internal power

**Test Condition** — Treasury state, income, and spending are known only to a few, with no regular reporting.

**Expected RCOS Behavior** — Financial flows are transparent to members by default, with limited explicit exceptions; spending authority and limits are visible.

**Pass Criteria** — Members can see shared resources, flows, and obligations.

**Fail Criteria** — Financial visibility depends on informal access.

</details>

### How mature is your community on this?

Pass/fail is too blunt for real life — most communities are partway. Find your rung, then aim for the next one.

| Level | What it looks like |
|---|---|
| **L0 — Implicit** | Finances live with one or two people; no shared visibility. |
| **L1 — Named** | The group knows finances are opaque but hasn't set transparency rules. |
| **L2 — Documented** | A [Treasury Ruleset](/articles/rcos-templates/layer-3/treasury-ruleset) defines transparency requirements, spending authority, and reporting cadence. |
| **L3 — Enforced & rehearsed** | Financial flows are visible by default; regular reports are actually read; exceptions are explicit and few. |

Most communities that recognise themselves here sit at **L0 or L1**. The goal isn't perfection — it's moving up one rung.

### How RCOS prevents this

RCOS makes transparency the financial default, not a favour:

- **[Treasury Ruleset](/articles/rcos-templates/layer-3/treasury-ruleset)** — transparency requirements, spending authority by amount, and reserve and reporting rules.
- **[Internal Economy Protocol](/articles/rcos-templates/layer-3/internal-economy-protocol)** — make flows and obligations visible as a default state.

See also the spec: [Layer 3 — Treasury Management](/articles/rcos-core/v0-1/layer-3-economic-resource-system#53-treasury-management) and [Commons vs Private Resources](/articles/rcos-core/v0-1/layer-3-economic-resource-system#51-commons-vs-private-resources).

### If it's already happening

If the finances live in someone's head, surface them:

1. **Publish a current snapshot** — balances, income, spending, reserves. Even a rough one ends the asymmetry.
2. **Set a reporting cadence** so visibility is routine, not something members have to request.
3. **Define spending authority and limits** so money decisions become legible.
4. **Watch the cascade** — whoever holds the financial picture is quietly accumulating power.

### What this failure tends to trigger

- **[Invisible Power via Responsibilities](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — the person who "handles the money" becomes indispensable and powerful.
- **[Conflict Avoidance Normalization](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — money suspicion festers because it's awkward to raise.

### Related stress tests

- **[Commons Privatization through Land Sales](/articles/rcos-stress-tests/economy-resources/commons-privatization-through-land-sales)** — opacity is what lets the biggest asset decisions happen without scrutiny.
