---
id: 9e4c3b21
title: Founder Informal Veto
summary: When the founder's quiet no still rules, even though nothing on paper grants it.
parentId: 7f25f268
order: 1

# --- Structured metadata ---------------------------------------------------
severity: high
stage: [forming, growth, mature]
layers: [2, 0]
invariants: ["2.2", "2.3"]
remediationReady: true
tags: ["Layer 2: Governance", "High severity"]
symptoms:
  - Decisions are technically made by the group, but nothing proceeds if the founder disapproves.
  - People pre-check ideas with the founder before raising them formally.
  - '"It''s really their project" is a common, unchallenged sentiment.'
  - Formal process exists on paper but is quietly overridden in practice.
  - No document states what the founder can and cannot decide alone.
preventsWith:
  - rcos-templates/layer-2/authority-registry
  - rcos-templates/layer-2/decision-matrix
  - rcos-templates/layer-2/governance-protocol
cascade:
  - test: rcos-stress-tests/culture-influence/charismatic-spiritual-authority
    relation: enables
    note: "Unbounded founder influence shades into charisma standing in for governance."
  - test: rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent
    relation: enables
    note: "An informal authority becomes the one who bypasses the rules under pressure."
  - test: rcos-stress-tests/governance-power/informal-clique-decision-making
    relation: enables
    note: "The founder's inner circle becomes the real decision body."
related:
  - rcos-stress-tests/governance-power/dominant-speakers-decision-spaces
---

> **Severity:** High — the constitution becomes theatre if one person can quietly override it.
> **Where it bites:** Any stage, but hardest in the founder-led years before authority is bounded.
> **Already living this?** Jump to [If it's already happening](#if-its-already-happening).

### Sound familiar?

You have processes. You have votes. And yet everyone knows that if the founder is unhappy, the thing doesn't happen. No one calls it a veto — the founder rarely even has to say no, because people quietly pre-clear ideas, soften proposals, or drop them before they reach the room. The governance is real on paper and weightless in practice, because one person's preference silently outranks all of it.

### Signs this is happening to you

- Decisions are technically made by the group, but nothing proceeds if the founder disapproves.
- People pre-check ideas with the founder before raising them formally.
- "It's really their project" is a common, unchallenged sentiment.
- Formal process exists on paper but is quietly overridden in practice.
- No document states what the founder can and cannot decide alone.

**This is _not_ the same as** a founder holding an explicit, documented role with defined authority. The tell is a veto that is *real but unwritten* — power everyone feels and no rule grants.

### Why it happens

Founders carry the vision, the history, and most of the relationships, so their preferences keep disproportionate weight long after formal governance exists. If that weight is never bounded in writing, the group self-censors around it: the founder rarely has to exercise a veto because no one ever forces a yes. Charisma and gratitude quietly outrank the constitution — until the day they conflict, and the constitution loses.

<details data-kind="rationale">
<summary>The formal stress test (for auditors)</summary>

**Failure Mode** — Founder retains de facto veto despite formal processes.

**Layers Involved** — Layer 2 (Governance), Layer 0 (Invariants)

**Relevant Invariants**

* 2.2 Authority must be explicit
* 2.3 Constitutional rules outrank individuals

**Test Condition** — Decisions are overridden informally by the founder.

**Expected RCOS Behavior** — Founder authority must be formalized or removed; decisions follow an agreed decision matrix.

**Pass Criteria** — Founder power is bounded and documented.

**Fail Criteria** — Charisma replaces governance.

</details>

### How mature is your community on this?

Pass/fail is too blunt for real life — most communities are partway. Find your rung, then aim for the next one.

| Level | What it looks like |
|---|---|
| **L0 — Implicit** | The founder's informal veto is real and unspoken; process is theatre around it. |
| **L1 — Named** | The group admits the founder has outsized power but hasn't bounded it. |
| **L2 — Documented** | The founder's authority is written into an [Authority Registry](/articles/rcos-templates/layer-2/authority-registry) and [Decision Matrix](/articles/rcos-templates/layer-2/decision-matrix) — explicit scope, explicit limits. |
| **L3 — Enforced & rehearsed** | Decisions follow the matrix; the founder's role is bounded and reviewable, and has held against a decision they disagreed with. |

Most communities that recognise themselves here sit at **L0 or L1**. The goal isn't perfection — it's moving up one rung.

### How RCOS prevents this

RCOS makes every authority explicit, including the founder's:

- **[Authority Registry](/articles/rcos-templates/layer-2/authority-registry)** — write down exactly what authority each role (including the founder) holds, and what it doesn't.
- **[Decision Matrix](/articles/rcos-templates/layer-2/decision-matrix)** — bind decisions to an agreed mechanism so no one informally overrides them.
- **[Governance Protocol](/articles/rcos-templates/layer-2/governance-protocol)** — establish that constitutional rules outrank any individual.

See also the spec: [Layer 2 — Authority Boundaries](/articles/rcos-core/v0-1/layer-2-governance-decision-logic#43-authority-boundaries).

### If it's already happening

You can't bound power you won't name. Triage:

1. **Name the real authority** — get the founder's de facto power written down honestly, then decide together what part of it is legitimate.
2. **Bound it** — convert that into an explicit, scoped role (or remove it), with limits and a review path.
3. **Test it** on a low-stakes decision the founder mildly dislikes, to prove the process actually holds.
4. **Watch the cascade** — informal founder power is the seed of clique rule, charisma-as-governance, and emergency bypass.

### What this failure tends to trigger

- **[Charismatic Spiritual Authority](/articles/rcos-stress-tests/culture-influence/charismatic-spiritual-authority)** — unbounded founder influence shades into charisma standing in for governance.
- **[Emergency Rule Bypass Precedent](/articles/rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent)** — an informal authority is exactly who "temporarily" bypasses the rules in a crisis.
- **[Informal Clique Decision Making](/articles/rcos-stress-tests/governance-power/informal-clique-decision-making)** — the founder's inner circle becomes the real decision body.

### Related stress tests

- **[Dominant Speakers in Decision Spaces](/articles/rcos-stress-tests/governance-power/dominant-speakers-decision-spaces)** — the same unwritten influence, expressed through airtime in meetings.
