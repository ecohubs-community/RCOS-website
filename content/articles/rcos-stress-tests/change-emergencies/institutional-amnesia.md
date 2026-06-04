---
id: e5c1b8a4
title: Institutional Amnesia
summary: When the community keeps relearning the same lessons the hard way.
parentId: 6acde7a7
order: 4

# --- Structured metadata ---------------------------------------------------
severity: medium
stage: [growth, mature]
layers: [6, 5]
invariants: ["6.4", "5.2"]
remediationReady: true
tags: ["Layer 6: Evolution", "Medium severity"]
symptoms:
  - The same conflicts, failed projects, or onboarding problems keep recurring.
  - Why past decisions were made is lost; no one can reconstruct the reasoning.
  - Institutional memory lives in a few long-timers' heads — and leaves when they do.
  - New members repeat mistakes the community already made years ago.
  - There's no log of decisions, experiments, or lessons learned.
preventsWith:
  - rcos-templates/layer-6/learning-log
  - rcos-templates/layer-6/version-history
  - rcos-templates/layer-5/operations-manual
cascade:
  - test: rcos-stress-tests/operations-coordination/rapid-growth-without-onboarding
    relation: feeds
    note: "With no captured knowledge, newcomers can't be brought up to speed and repeat old mistakes."
  - test: rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
    relation: feeds
    note: "When knowledge lives only in heads, those heads become indispensable."
related:
  - rcos-stress-tests/change-emergencies/irreversible-experiments
---

> **Severity:** Medium — never urgent, always compounding: the community pays full price for every lesson, repeatedly.
> **Where it bites:** Growth and mature stages, and hardest whenever a long-timer leaves.
> **Already living this?** Jump to [If it's already happening](#if-its-already-happening).

### Sound familiar?

This conflict feels familiar — because the community had almost exactly the same one three years ago, and handled it, and learned something, and then forgot. The project that just failed failed the same way the last one did. New members hit the same walls the founders hit and solved long ago. Nobody wrote any of it down, so the only memory the community has lives in the heads of a few long-timers — and every time one of them leaves, a chunk of hard-won knowledge walks out with them.

### Signs this is happening to you

- The same conflicts, failed projects, or onboarding problems keep recurring.
- Why past decisions were made is lost; no one can reconstruct the reasoning.
- Institutional memory lives in a few long-timers' heads — and leaves when they do.
- New members repeat mistakes the community already made years ago.
- There's no log of decisions, experiments, or lessons learned.

**This is _not_ the same as** choosing not to document trivial things. The tell is that *significant decisions, conflicts, and experiments leave no retrievable record* — so the community can't learn from its own history, only relive it.

### Why it happens

Capturing learning is unglamorous and always feels less urgent than the next task, so it never quite happens. But a community that doesn't record its decisions and outcomes has no memory beyond its longest-tenured members. It pays full price for every lesson again and again, and it loses its history the moment those people move on — which, eventually, they all do.

<details data-kind="rationale">
<summary>The formal stress test (for auditors)</summary>

**Failure Mode** — Decisions, conflicts, and experiments leave no captured learning.

**Layers Involved** — Layer 6 (Evolution), Layer 5 (Operations)

**Relevant Invariants**

* 6.4 Learning is captured
* 5.2 Operational knowledge is documented

**Test Condition** — Significant decisions and outcomes are not recorded, and reasoning is unrecoverable.

**Expected RCOS Behavior** — Learning and decisions are captured in a durable, retrievable form and consulted over time.

**Pass Criteria** — Past lessons are retrievable and demonstrably prevent repeats.

**Fail Criteria** — The community repeats its own mistakes.

</details>

### How mature is your community on this?

Pass/fail is too blunt for real life — most communities are partway. Find your rung, then aim for the next one.

| Level | What it looks like |
|---|---|
| **L0 — Implicit** | Nothing is captured; memory is oral and lives in a few heads. |
| **L1 — Named** | The group knows it repeats mistakes but hasn't started recording. |
| **L2 — Documented** | A [Learning Log](/articles/rcos-templates/layer-6/learning-log) and decision records capture significant decisions, conflicts, and outcomes. |
| **L3 — Enforced & rehearsed** | Learning is routinely captured *and actually consulted*; a past lesson has demonstrably prevented a repeat. |

Most communities that recognise themselves here sit at **L0 or L1**. The goal isn't perfection — it's moving up one rung.

### How RCOS prevents this

RCOS gives the community a memory that outlives its members:

- **[Learning Log](/articles/rcos-templates/layer-6/learning-log)** — capture decisions, experiments, conflicts, and what was learned.
- **[Version History](/articles/rcos-templates/layer-6/version-history)** — record how and why the rules changed over time.
- **[Operations Manual](/articles/rcos-templates/layer-5/operations-manual)** — keep operational knowledge out of individual heads.

See also the spec: [Layer 6 — Learning and Feedback Capture](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#84-learning-and-feedback-capture) and [Layer 5 — Documentation and Information Flow](/articles/rcos-core/v0-1/layer-5-operations-coordination#73-documentation-and-information-flow).

### If it's already happening

If the community keeps reliving its past, start a memory now:

1. **Start a learning log today** — even a running document beats memory.
2. **Back-capture the big lessons** the long-timers carry, before they leave.
3. **Make a quick decision record a standard step,** so reasoning stays retrievable later.

### What this failure tends to trigger

- **[Rapid Growth without Onboarding](/articles/rcos-stress-tests/operations-coordination/rapid-growth-without-onboarding)** — with no captured knowledge, newcomers can't be brought up to speed.
- **[Invisible Power via Responsibilities](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — when knowledge lives only in heads, those heads become indispensable.

### Related stress tests

- **[Irreversible Experiments](/articles/rcos-stress-tests/change-emergencies/irreversible-experiments)** — uncaptured learning is what makes experiments — reversible or not — teach nothing.
