---
id: b6d1a3e9
title: Unprotected Core Invariants
summary: When the founding promises can be undone by a single ordinary vote.
parentId: 6acde7a7
order: 1

# --- Structured metadata ---------------------------------------------------
severity: high
stage: [growth, mature]
layers: [0, 6]
invariants: ["0.4", "6.1"]
remediationReady: true
tags: ["Layer 0: Scope", "High severity"]
symptoms:
  - The community's foundational commitments (land stays commons, no single leader) can be changed by a normal majority.
  - There's no distinction between everyday rules and constitutional ones.
  - A transient majority could rewrite the community's core in one meeting.
  - No list exists of the things that are supposed to be unchangeable.
  - People assume the founding principles are safe, but nothing structurally protects them.
preventsWith:
  - rcos-templates/layer-0/invariants-register
  - rcos-templates/layer-6/change-protocol
  - rcos-templates/layer-2/governance-protocol
cascade:
  - test: rcos-stress-tests/economy-resources/commons-privatization-through-land-sales
    relation: enables
    note: "If commons protection is amendable like any rule, it can be voted away under pressure."
  - test: rcos-stress-tests/governance-power/founder-informal-veto
    relation: enables
    note: "Unprotected structure lets an informal authority reshape the rules to fit themselves."
related:
  - rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent
---

> **Severity:** High — a transient majority can dismantle in one meeting what the community was founded on.
> **Where it bites:** Growth and mature stages, as membership turns over and the founders' consensus fades.
> **Already living this?** Jump to [If it's already happening](#if-its-already-happening).

### Sound familiar?

The community was built on a few non-negotiables — the land is held in common, there's no single boss, the place exists for X and not for profit. Everyone agreed, so no one ever bothered to make those commitments *harder to change* than the meeting schedule. Years pass, the membership turns over, a stressful season arrives — and one evening, by the same simple majority used to pick a paint colour, the foundation itself is on the table. Nothing structurally stops it. The "permanent" promises turn out to be exactly as durable as the next vote.

### Signs this is happening to you

- Foundational commitments can be changed by a normal majority.
- There's no distinction between everyday rules and constitutional ones.
- A transient majority could rewrite the community's core in one meeting.
- No list exists of the things that are supposed to be unchangeable.
- People assume the founding principles are safe, but nothing structurally protects them.

**This is _not_ the same as** having a deliberate, hard amendment path for core invariants — a very high bar is healthy. The tell is that *foundational commitments have no special protection*: they're amendable exactly like a meeting time.

### Why it happens

In the early days everyone agrees on the core, so protecting it feels unnecessary — why guard what no one would touch? But membership changes, moods shift, and a future majority under pressure can quietly gut the foundation that made the community what it is. Without protected invariants, "permanent" is just a feeling, and the most important commitments are the least defended.

<details data-kind="rationale">
<summary>The formal stress test (for auditors)</summary>

**Failure Mode** — Foundational invariants are amendable by ordinary process.

**Layers Involved** — Layer 0 (Identity & Scope), Layer 6 (Evolution)

**Relevant Invariants**

* 0.4 Protected invariants
* 6.1 Change is possible but constrained

**Test Condition** — Core commitments can be changed by the same mechanism as everyday decisions.

**Expected RCOS Behavior** — Protected invariants are named and carry a high, explicit amendment bar distinct from ordinary rules.

**Pass Criteria** — Core invariants cannot be changed by ordinary process.

**Fail Criteria** — A transient majority can rewrite the foundation.

</details>

### How mature is your community on this?

Pass/fail is too blunt for real life — most communities are partway. Find your rung, then aim for the next one.

| Level | What it looks like |
|---|---|
| **L0 — Implicit** | Core and everyday rules are equally amendable; the foundation isn't protected. |
| **L1 — Named** | The group knows some rules should be harder to change but hasn't separated them. |
| **L2 — Documented** | An [Invariants Register](/articles/rcos-templates/layer-0/invariants-register) names protected invariants with a high, explicit amendment bar. |
| **L3 — Enforced & rehearsed** | Core invariants can't be changed by ordinary process; the protection has held against a real attempt to bypass it. |

Most communities that recognise themselves here sit at **L0 or L1**. The goal isn't perfection — it's moving up one rung.

### How RCOS prevents this

RCOS separates constitutional change from everyday decisions:

- **[Invariants Register](/articles/rcos-templates/layer-0/invariants-register)** — name the protected invariants and the high bar required to change them.
- **[Change Protocol](/articles/rcos-templates/layer-6/change-protocol)** — define a distinct, harder path for constitutional changes.
- **[Governance Protocol](/articles/rcos-templates/layer-2/governance-protocol)** — keep constitutional rules outranking ordinary decisions.

See also the spec: [Layer 0 — Invariants](/articles/rcos-core/v0-1/layer-0-identity-scope#23-invariants) and [Layer 6 — Versioning and Authority](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#82-versioning-and-authority).

### If it's already happening

If your foundation is unguarded, guard it before it's tested:

1. **List the things that must never quietly change** — the real foundation.
2. **Set a high amendment bar** for them — supermajority, a waiting period, a review — distinct from everyday rules.
3. **Ratify the register** so the protection itself is on the record and can't be quietly removed.

### What this failure tends to trigger

- **[Commons Privatization through Land Sales](/articles/rcos-stress-tests/economy-resources/commons-privatization-through-land-sales)** — if commons protection is amendable, it can be voted away under pressure.
- **[Founder Informal Veto](/articles/rcos-stress-tests/governance-power/founder-informal-veto)** — unprotected structure lets an informal authority reshape the rules.

### Related stress tests

- **[Emergency Rule Bypass Precedent](/articles/rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent)** — the other way the constitution erodes: not amended openly, but bypassed under urgency.
