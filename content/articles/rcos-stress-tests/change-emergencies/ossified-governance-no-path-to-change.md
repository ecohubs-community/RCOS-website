---
id: c8f4b2d1
title: Ossified Governance Without a Path to Change
summary: When nothing can change, so change happens by leaving instead.
parentId: 6acde7a7
order: 2

# --- Structured metadata ---------------------------------------------------
severity: medium
stage: [mature]
layers: [6]
invariants: ["6.1", "6.2"]
remediationReady: true
tags: ["Layer 6: Evolution", "Medium severity"]
symptoms:
  - The original rules are treated as fixed; there's no legitimate process to revise them.
  - '"That''s how the founders set it up" closes most reform conversations.'
  - Frustrated members push for change by threatening to leave, or just leave.
  - Proposals to adapt die for lack of any mechanism to consider them.
  - The community is visibly out of step with its own current needs.
preventsWith:
  - rcos-templates/layer-6/change-protocol
  - rcos-templates/layer-6/version-history
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: enables
    note: "With no legitimate path to change, frustration has nowhere to go but underground."
  - test: rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent
    relation: feeds
    note: "When normal change is impossible, people wait for a crisis to force what they couldn't propose."
related:
  - rcos-stress-tests/change-emergencies/unprotected-core-invariants
---

> **Severity:** Medium — slow decline rather than collapse: the community calcifies and bleeds members.
> **Where it bites:** The mature stage, often after an early period of churn the founders over-corrected.
> **Already living this?** Jump to [If it's already happening](#if-its-already-happening).

### Sound familiar?

The community figured out its rules years ago, and now they're sacred. Whenever someone suggests the structure no longer fits — the meeting format, the membership tiers, the way money works — the conversation hits a wall: "that's how the founders set it up." There's no actual process to propose a change, so there's nowhere for the pressure to go. People who want the community to evolve don't get to argue for it; they just quietly leave, or threaten to, and the place drifts further out of step with the people actually living in it.

### Signs this is happening to you

- The original rules are treated as fixed; there's no legitimate process to revise them.
- "That's how the founders set it up" closes most reform conversations.
- Frustrated members push for change by threatening to leave, or just leave.
- Proposals to adapt die for lack of any mechanism to consider them.
- The community is visibly out of step with its own current needs.

**This is _not_ the same as** deliberately protecting core invariants (that's healthy — see [Unprotected Core Invariants](/articles/rcos-stress-tests/change-emergencies/unprotected-core-invariants) for the *opposite* failure). The tell is that *everything* is frozen, with no constrained path to change anything — so legitimate adaptation is impossible.

### Why it happens

After an early period of churn, communities often over-correct into rigidity — stability feels safe, and reopening the rules feels dangerous. But a system with no legitimate change mechanism can't adapt to new members, new conditions, or its own mistakes. The pressure for change doesn't disappear; it routes around the system as exits, forks, and quiet rule-breaking.

<details data-kind="rationale">
<summary>The formal stress test (for auditors)</summary>

**Failure Mode** — There is no legitimate, constrained mechanism to change the rules.

**Layers Involved** — Layer 6 (Evolution)

**Relevant Invariants**

* 6.1 Change is possible but constrained
* 6.2 Changes are versioned

**Test Condition** — Members cannot propose or adopt rule changes through any defined process.

**Expected RCOS Behavior** — A constrained change mechanism lets rules be proposed, reviewed, revised, and versioned.

**Pass Criteria** — The system can adapt through a legitimate process.

**Fail Criteria** — Change happens only by exit, fork, or rule-breaking.

</details>

### How mature is your community on this?

Pass/fail is too blunt for real life — most communities are partway. Find your rung, then aim for the next one.

| Level | What it looks like |
|---|---|
| **L0 — Implicit** | No legitimate path to change; rules are frozen and reform happens by exit. |
| **L1 — Named** | The group admits it can't adapt but hasn't built a change mechanism. |
| **L2 — Documented** | A [Change Protocol](/articles/rcos-templates/layer-6/change-protocol) defines how rules can be proposed, reviewed, and revised — possible but constrained. |
| **L3 — Enforced & rehearsed** | Change happens through the process; the system has adapted at least once without a crisis or schism. |

Most communities that recognise themselves here sit at **L0 or L1**. The goal isn't perfection — it's moving up one rung.

### How RCOS prevents this

RCOS makes change possible *and* bounded — neither frozen nor chaotic:

- **[Change Protocol](/articles/rcos-templates/layer-6/change-protocol)** — define a constrained, legitimate path to propose and adopt changes.
- **[Version History](/articles/rcos-templates/layer-6/version-history)** — track how the rules evolve, so change is visible and bounded rather than feared.

See also the spec: [Layer 6 — Change Mechanisms](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#81-change-mechanisms) and [Versioning and Authority](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#82-versioning-and-authority).

### If it's already happening

If the rules are frozen, open one safe channel before more people leave:

1. **Open one channel for change** — a proposal process, even a minimal one.
2. **Take one overdue adaptation through it** as a proof of concept.
3. **Distinguish protected invariants** (deliberately hard to change) from everything else (changeable by process), so "we can't change that" stops applying to everything.

### What this failure tends to trigger

- **[Conflict Avoidance Normalization](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — with no legitimate path to change, frustration goes underground.
- **[Emergency Rule Bypass Precedent](/articles/rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent)** — when normal change is impossible, people wait for a crisis to force it.

### Related stress tests

- **[Unprotected Core Invariants](/articles/rcos-stress-tests/change-emergencies/unprotected-core-invariants)** — the opposite imbalance: here nothing can change; there, everything can, including the foundation.
