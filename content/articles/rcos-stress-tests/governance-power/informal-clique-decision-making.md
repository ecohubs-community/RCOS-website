---
id: 6gcf15u
title: Informal Clique Decision Making
summary: When the real decisions happen before the meeting, among the same few people.
parentId: 7f25f268
order: 2

# --- Structured metadata ---------------------------------------------------
severity: high
stage: [growth, mature]
layers: [2, 1]
invariants: ["2.4", "1.1"]
remediationReady: true
tags: ["Layer 2: Governance", "High severity"]
symptoms:
  - Decisions seem "already made" by the time they reach the whole group.
  - A recurring subgroup (the kitchen table, a chat thread, the "originals") shapes outcomes.
  - There are few or no decision records; you can't reconstruct how things were decided.
  - Newer or peripheral members feel a clear in-group / out-group line.
  - '"We already talked about it" closes discussions that never formally happened.'
preventsWith:
  - rcos-templates/layer-2/decision-matrix
  - rcos-templates/layer-2/governance-protocol
  - rcos-templates/layer-5/meeting-templates
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: enables
    note: "An out-group quickly learns not to challenge the in-group, and avoidance becomes the norm."
  - test: rcos-stress-tests/governance-power/founder-informal-veto
    relation: feeds
    note: "The clique usually forms around an informal authority whose preferences it executes."
related:
  - rcos-stress-tests/governance-power/dominant-speakers-decision-spaces
---

> **Severity:** High — authority migrates off-record, where it can't be seen or reviewed.
> **Where it bites:** Growth and mature stages, as trust and side-channels deepen.
> **Already living this?** Jump to [If it's already happening](#if-its-already-happening).

### Sound familiar?

By the time a question reaches the whole group, it already has an answer. The same handful of people — the founders, the ones who live closest, the ones on the late-night chat thread — have talked it through, and the meeting is really just ratification. Nothing was decided in a smoke-filled room on purpose. It's just faster to sort things out among the people you already talk to. But everyone outside that circle can feel the line, and the record of *how* anything was decided simply doesn't exist.

### Signs this is happening to you

- Decisions seem "already made" by the time they reach the whole group.
- A recurring subgroup shapes outcomes outside any formal process.
- There are few or no decision records; you can't reconstruct how things were decided.
- Newer or peripheral members feel a clear in-group / out-group line.
- "We already talked about it" closes discussions that never formally happened.

**This is _not_ the same as** a delegated working group with a documented mandate. The tell is that *authority migrated off-record* — outcomes emerge with no traceable mechanism, and membership in the deciding circle was never declared.

### Why it happens

As trust forms, the people who talk most outside meetings start resolving things informally — it's faster and feels natural. But decisions made off-record can't be reviewed, and the deciding circle's boundary is never declared, so power quietly concentrates in an in-group that no one formally appointed and no one can formally hold to account.

<details data-kind="rationale">
<summary>The formal stress test (for auditors)</summary>

**Failure Mode** — Decisions shift to informal subgroups.

**Layers Involved** — Layer 2 (Governance), Layer 1 (Membership)

**Relevant Invariants**

* 2.4 Decisions are reviewable
* 1.1 No implicit membership

**Test Condition** — Outcomes emerge without formal decision records.

**Expected RCOS Behavior** — Decisions made outside formal channels are invalid.

**Pass Criteria** — Authority remains legible and reviewable.

**Fail Criteria** — Power migrates off-record.

</details>

### How mature is your community on this?

Pass/fail is too blunt for real life — most communities are partway. Find your rung, then aim for the next one.

| Level | What it looks like |
|---|---|
| **L0 — Implicit** | Real decisions happen in informal subgroups; formal process ratifies them after the fact. |
| **L1 — Named** | The group senses a clique dynamic but hasn't required decisions to be on-record. |
| **L2 — Documented** | A [decision matrix](/articles/rcos-templates/layer-2/decision-matrix) defines what must be decided through formal, recorded channels; off-channel outcomes are invalid. |
| **L3 — Enforced & rehearsed** | Decisions are legible and reviewable; informal resolutions are routinely brought back into the record. |

Most communities that recognise themselves here sit at **L0 or L1**. The goal isn't perfection — it's moving up one rung.

### How RCOS prevents this

RCOS keeps authority legible by requiring decisions to be on-record:

- **[Decision Matrix](/articles/rcos-templates/layer-2/decision-matrix)** — define which decisions require a formal, recorded process.
- **[Governance Protocol](/articles/rcos-templates/layer-2/governance-protocol)** — make decisions outside formal channels explicitly invalid.
- **[Meeting Templates](/articles/rcos-templates/layer-5/meeting-templates)** — record decisions so authority stays reviewable, not remembered.

See also the spec: [Layer 2 — Decision Matrix](/articles/rcos-core/v0-1/layer-2-governance-decision-logic#44-decision-matrix) and [Layer 5 — Documentation & Information Flow](/articles/rcos-core/v0-1/layer-5-operations-coordination#73-documentation-and-information-flow).

### If it's already happening

You don't have to break up friendships — you have to bring decisions back on-record:

1. **Require a decision record.** Nothing counts as decided unless it's written where everyone can see it.
2. **Surface the real venue.** Move the actual deciding conversation into an open, minuted channel.
3. **Name the mandate.** If a subgroup should decide some things, give it an explicit, bounded mandate; otherwise dissolve its informal authority.
4. **Watch the cascade** — clique rule corrodes membership clarity and teaches the out-group to stop speaking up.

### What this failure tends to trigger

- **[Conflict Avoidance Normalization](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — an out-group quickly learns not to challenge the in-group.
- **[Founder Informal Veto](/articles/rcos-stress-tests/governance-power/founder-informal-veto)** — the clique typically forms around, and executes the preferences of, an informal authority.

### Related stress tests

- **[Dominant Speakers in Decision Spaces](/articles/rcos-stress-tests/governance-power/dominant-speakers-decision-spaces)** — the in-meeting version of the same drift of authority away from agreed mechanisms.
