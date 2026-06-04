---
id: f1c3d8b5
title: Mission Drift Through Competing Purposes
summary: When the community tries to be everything and can no longer prioritize anything.
parentId: 45625035
order: 2

# --- Structured metadata ---------------------------------------------------
severity: medium
stage: [growth, mature]
layers: [0]
invariants: ["0.1", "0.2"]
remediationReady: true
tags: ["Layer 0: Scope", "Medium severity"]
symptoms:
  - Members would give genuinely different answers to "what is this community primarily for?"
  - New projects and directions keep getting added; none get dropped.
  - Priorities collide irreconcilably — income vs. ecology vs. practice — with no way to adjudicate.
  - Decisions stall because there's no shared sense of what matters most.
  - Factions form around different visions of what the community really is.
preventsWith:
  - rcos-templates/layer-0/purpose-charter
  - rcos-templates/layer-0/scope-declaration
  - rcos-templates/layer-0/identity-constraints-register
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: feeds
    note: "Irreconcilable purpose conflicts are too big to raise, so the whole group learns to avoid them."
  - test: rcos-stress-tests/governance-power/informal-clique-decision-making
    relation: enables
    note: "Factions form around competing visions and start deciding among themselves."
related:
  - rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test
---

> **Severity:** Medium — slow and corrosive: it doesn't break the community, it dissolves its focus.
> **Where it bites:** Growth and mature stages, as ambitions and members accumulate.
> **Already living this?** Jump to [If it's already happening](#if-its-already-happening).

### Sound familiar?

It started with a clear idea, and then it grew — an eco-farm, and also a retreat, and also an arts space, and also an income engine, and also a school. Every addition was worthy, so nothing was ever refused. Now, when two of those purposes pull in opposite directions — the income project wants the field the food forest needs — there's no way to decide, because the community never agreed which purpose comes first. People aren't fighting because they disagree on values; they're fighting because each of them is loyal to a different, equally-real version of what this place is for.

### Signs this is happening to you

- Members would give genuinely different answers to "what is this community primarily for?"
- New projects and directions keep getting added; none get dropped.
- Priorities collide irreconcilably — income vs. ecology vs. practice — with no way to adjudicate.
- Decisions stall because there's no shared sense of what matters most.
- Factions form around different visions of what the community really is.

**This is _not_ the same as** a community with one clear purpose served by several activities. The tell is *competing primary purposes with no declared priority* — so trade-offs have no principled answer and every faction is "right."

### Why it happens

Saying yes to every worthy goal feels generous and inclusive, so communities accumulate purposes faster than they retire them. But when two purposes conflict — and eventually they will — there's no way to choose without a declared primary purpose to rank them. The result is paralysis and factionalism: each group optimizes for a different, equally-legitimate sense of "what we're for," and no decision can satisfy them all.

<details data-kind="rationale">
<summary>The formal stress test (for auditors)</summary>

**Failure Mode** — The community holds multiple competing primary purposes with no declared priority.

**Layers Involved** — Layer 0 (Identity & Scope)

**Relevant Invariants**

* 0.1 Single primary purpose
* 0.2 Explicit governed scope

**Test Condition** — Two declared purposes conflict and there is no principled basis to resolve the trade-off.

**Expected RCOS Behavior** — A single primary purpose ranks all others; trade-offs are resolved by reference to it.

**Pass Criteria** — Purpose conflicts have a principled resolution.

**Fail Criteria** — Priorities are irreconcilable and factional.

</details>

### How mature is your community on this?

Pass/fail is too blunt for real life — most communities are partway. Find your rung, then aim for the next one.

| Level | What it looks like |
|---|---|
| **L0 — Implicit** | Multiple purposes coexist unranked; conflicts have no principled resolution. |
| **L1 — Named** | The group sees the drift but hasn't declared a primary purpose. |
| **L2 — Documented** | A [Purpose Charter](/articles/rcos-templates/layer-0/purpose-charter) names a single primary purpose; other goals are explicitly secondary. |
| **L3 — Enforced & rehearsed** | Trade-offs are resolved by reference to the primary purpose; new directions are tested against it. |

Most communities that recognise themselves here sit at **L0 or L1**. The goal isn't perfection — it's moving up one rung.

### How RCOS prevents this

RCOS requires a single primary purpose that can break ties:

- **[Purpose Charter](/articles/rcos-templates/layer-0/purpose-charter)** — declare the single primary purpose that ranks all the others.
- **[Scope Declaration](/articles/rcos-templates/layer-0/scope-declaration)** — state what's in and out of scope, so additions are deliberate.
- **[Identity Constraints Register](/articles/rcos-templates/layer-0/identity-constraints-register)** — define what the community is and isn't.

See also the spec: [Layer 0 — Purpose Definition](/articles/rcos-core/v0-1/layer-0-identity-scope#21-purpose-definition) and [Scope Declaration](/articles/rcos-core/v0-1/layer-0-identity-scope#22-scope-declaration).

### If it's already happening

If you've drifted into too many purposes, re-rank rather than amputate:

1. **Surface the real answers.** Have everyone privately write what they think the primary purpose is; the spread is the diagnosis.
2. **Declare a primary purpose.** You can keep the secondary goals — just rank them beneath it.
3. **Use it to adjudicate the live conflict** that prompted this, and let that set the precedent.

### What this failure tends to trigger

- **[Conflict Avoidance Normalization](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — irreconcilable purpose conflicts are too big to raise, so they're avoided.
- **[Informal Clique Decision Making](/articles/rcos-stress-tests/governance-power/informal-clique-decision-making)** — factions form around competing visions.

### Related stress tests

- **[Cultural Norm Violation Scope Test](/articles/rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test)** — both are scope failures: unclear purpose and unclear governed scope travel together.
