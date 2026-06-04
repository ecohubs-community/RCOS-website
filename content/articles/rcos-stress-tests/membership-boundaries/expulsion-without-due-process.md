---
id: a1d4e7c2
title: Expulsion Without Due Process
summary: When a member can be pushed out with no process, no appeal, and no record.
parentId: 45625035
order: 1

# --- Structured metadata ---------------------------------------------------
severity: high
stage: [growth, mature]
layers: [1, 4]
invariants: ["1.4", "1.2", "4.3"]
remediationReady: true
tags: ["Layer 1: Membership", "High severity"]
symptoms:
  - A member was removed (or pressured into leaving) with no defined process.
  - Removal happened by informal consensus, a sudden vote, or social pressure — not a written procedure.
  - There was no chance to respond, no stated grounds, and no appeal.
  - People are unsure who actually has the authority to expel someone.
  - After it happened, others quietly wondered whether they could be next.
preventsWith:
  - rcos-templates/layer-1/exit-protocol
  - rcos-templates/layer-4/accountability-protocol
  - rcos-templates/layer-1/membership-state-registry
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: enables
    note: "When removal has no due process, members learn that dissent is dangerous and stop raising things."
related:
  - rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test
  - rcos-stress-tests/conflict-accountability/punishment-before-repair
---

> **Severity:** High — one of the most common ways communities fracture, and the hardest to repair after the fact.
> **Where it bites:** Growth and mature stages, when the first genuinely difficult member appears.
> **Already living this?** Jump to [If it's already happening](#if-its-already-happening).

### Sound familiar?

Someone became a real problem — disruptive, harmful, impossible — and eventually they were gone. Not through any procedure, because there wasn't one: it happened through a tense meeting, a sudden show of hands, or a slow social freeze-out until they left on their own. Maybe it was even the right outcome. But there was no stated charge, no chance for them to respond, and no appeal — and quietly, everyone who watched it filed away the knowledge that the community can make a person disappear, and there are no rules about when.

### Signs this is happening to you

- A member was removed (or pressured into leaving) with no defined process.
- Removal happened by informal consensus, a sudden vote, or social pressure.
- There was no chance to respond, no stated grounds, and no appeal.
- People are unsure who actually has the authority to expel someone.
- After it happened, others quietly wondered whether they could be next.

**This is _not_ the same as** applying a documented forced-exit process — with grounds, a hearing, and an appeal — to a genuinely intolerable situation. The tell is *removal with no predefined due process*: the outcome comes first, and the justification comes after, if at all.

### Why it happens

Communities avoid building expulsion procedures because they hope never to need them — planning for it feels morbid, even disloyal. So when a member finally becomes intolerable, the group improvises under stress: pressure, a hasty vote, a quiet freezing-out. Without due process, expulsion becomes arbitrary and fear-inducing, and the line between "we had to" and "we wanted to" disappears — for the person removed, and for everyone watching.

<details data-kind="rationale">
<summary>The formal stress test (for auditors)</summary>

**Failure Mode** — A member is removed without a predefined, documented process.

**Layers Involved** — Layer 1 (Membership), Layer 4 (Conflict)

**Relevant Invariants**

* 1.4 Due process for forced exit
* 1.2 Entry and exit are always possible
* 4.3 Repair precedes punishment

**Test Condition** — A member is expelled or pressured out with no grounds, hearing, or appeal.

**Expected RCOS Behavior** — Forced exit follows a predefined process: stated grounds, a chance to respond, and an appeal path; repair is attempted before removal.

**Pass Criteria** — Any removal is traceable to documented grounds and due process.

**Fail Criteria** — Removal is arbitrary, informal, and unappealable.

</details>

### How mature is your community on this?

Pass/fail is too blunt for real life — most communities are partway. Find your rung, then aim for the next one.

| Level | What it looks like |
|---|---|
| **L0 — Implicit** | Removal is possible but undefined; it happens by pressure or a sudden vote. |
| **L1 — Named** | The group knows it has no expulsion process but hasn't built one. |
| **L2 — Documented** | A forced-exit process exists — grounds, notice, a hearing, and appeal — in an [Exit Protocol](/articles/rcos-templates/layer-1/exit-protocol). |
| **L3 — Enforced & rehearsed** | Any removal follows due process; it has been applied fairly at least once, including a real chance to respond. |

Most communities that recognise themselves here sit at **L0 or L1**. The goal isn't perfection — it's moving up one rung.

### How RCOS prevents this

RCOS requires the hardest membership decision to be the most procedural:

- **[Exit Protocol](/articles/rcos-templates/layer-1/exit-protocol)** — define grounds, notice, a hearing, and appeal for forced exit *before* you need it.
- **[Accountability Protocol](/articles/rcos-templates/layer-4/accountability-protocol)** — a repair-first path so removal is the last resort, not the first reflex.
- **[Membership State Registry](/articles/rcos-templates/layer-1/membership-state-registry)** — make suspension or removal an explicit, logged change of state, not a mood.

See also the spec: [Layer 1 — Exit and Separation](/articles/rcos-core/v0-1/layer-1-membership-system#36-exit-and-separation) and [Layer 4 — Sanctions, Repair and Separation](/articles/rcos-core/v0-1/layer-4-conflict-repair-accountability#64-sanctions-repair-and-separation).

### If it's already happening

A removal just happened, or is underway. Slow it down and restore legitimacy:

1. **Pause an in-flight removal.** An irreversible exit under no process is the danger.
2. **State the grounds in writing** and give the person a real chance to respond.
3. **Define the process now and apply it** — even offering an appeal retroactively repairs legitimacy for everyone watching.
4. **Watch the cascade** — arbitrary expulsion teaches the whole community to self-censor.

### What this failure tends to trigger

- **[Conflict Avoidance Normalization](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — if speaking up can get you removed, people stop speaking up.

### Related stress tests

- **[Punishment Before Repair](/articles/rcos-stress-tests/conflict-accountability/punishment-before-repair)** — the punitive reflex that turns accountability into expulsion in the first place.
- **[Cultural Norm Violation Scope Test](/articles/rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test)** — an undeclared-norm breach is often what triggers the rush to expel.
