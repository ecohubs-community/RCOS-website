---
id: d2a7e9f3
title: Irreversible Experiments
summary: 'When "let''s just try it" has no way back if it fails.'
parentId: 6acde7a7
order: 3

# --- Structured metadata ---------------------------------------------------
severity: medium
stage: [growth, mature]
layers: [6]
invariants: ["6.3", "6.4"]
remediationReady: true
tags: ["Layer 6: Evolution", "Medium severity"]
symptoms:
  - A big change was adopted as an "experiment" but has no defined rollback.
  - '"Let''s try it and see" was the whole plan; no one set success criteria or an end date.'
  - Trying the new thing required irreversible steps (sold assets, dissolved a role, changed legal structure).
  - When experiments don't work, the community is stuck with them anyway.
  - There's no record of what was tried, why, and what happened.
preventsWith:
  - rcos-templates/layer-6/experiment-template
  - rcos-templates/layer-6/change-protocol
  - rcos-templates/layer-6/learning-log
cascade:
  - test: rcos-stress-tests/economy-resources/commons-privatization-through-land-sales
    relation: enables
    note: "Selling land as an experiment is the costliest irreversible one, dressed up as low-stakes."
related:
  - rcos-stress-tests/change-emergencies/institutional-amnesia
  - rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent
---

> **Severity:** Medium — the damage is bounded to each change, but each one can be permanent.
> **Where it bites:** Growth and mature stages, when the community is brave enough to try big things.
> **Already living this?** Jump to [If it's already happening](#if-its-already-happening).

### Sound familiar?

Someone proposed a big change — a new governance model, a major build, restructuring how membership works — and framed it as an experiment. "Let's just try it and see how it goes." That openness felt healthy, so the group went ahead. But trying it meant steps that can't be undone: an asset sold, a role dissolved, a legal structure changed. Now it isn't going well, and there's no "see how it goes" exit, because there was never a rollback plan — and no one wrote down what success was even supposed to look like.

### Signs this is happening to you

- A big change was adopted as an "experiment" but has no defined rollback.
- "Let's try it and see" was the whole plan; no one set success criteria or an end date.
- Trying the new thing required irreversible steps.
- When experiments don't work, the community is stuck with them anyway.
- There's no record of what was tried, why, and what happened.

**This is _not_ the same as** a genuine experiment with criteria, a time box, and a rollback plan. The tell is *irreversibility dressed as experimentation* — the language of "just trying it" without the safety of being able to undo it.

### Why it happens

Calling a change an "experiment" lowers resistance — it sounds low-stakes and open-minded, so people agree more easily. But if the change can't actually be reversed, the framing is false comfort: the community commits to something it can't walk back, and because no criteria or learning were set, it can't even tell whether the experiment worked. The word does the persuading; the irreversibility does the damage.

<details data-kind="rationale">
<summary>The formal stress test (for auditors)</summary>

**Failure Mode** — Irreversible changes are adopted under the framing of reversible "experiments."

**Layers Involved** — Layer 6 (Evolution)

**Relevant Invariants**

* 6.3 Experiments are reversible
* 6.4 Learning is captured

**Test Condition** — A change called an experiment has no rollback, success criteria, or time box.

**Expected RCOS Behavior** — Experiments carry criteria, a time box, and a reversibility plan; irreversible changes go through the full change process.

**Pass Criteria** — Experiments can be genuinely undone and are reviewed against criteria.

**Fail Criteria** — "Experiments" are permanent and unevaluated.

</details>

### How mature is your community on this?

Pass/fail is too blunt for real life — most communities are partway. Find your rung, then aim for the next one.

| Level | What it looks like |
|---|---|
| **L0 — Implicit** | "Experiments" are adopted with no criteria, time box, or rollback. |
| **L1 — Named** | The group wants to experiment safely but hasn't defined how. |
| **L2 — Documented** | An [Experiment Template](/articles/rcos-templates/layer-6/experiment-template) requires success criteria, a time box, and a rollback plan. |
| **L3 — Enforced & rehearsed** | Experiments are genuinely reversible and time-boxed; at least one has been run, reviewed, and either rolled back or adopted on evidence. |

Most communities that recognise themselves here sit at **L0 or L1**. The goal isn't perfection — it's moving up one rung.

### How RCOS prevents this

RCOS keeps "experiment" honest — and keeps irreversible moves out of that category:

- **[Experiment Template](/articles/rcos-templates/layer-6/experiment-template)** — require criteria, a time box, and a rollback plan before trying.
- **[Change Protocol](/articles/rcos-templates/layer-6/change-protocol)** — route irreversible changes through the full process, not the experiment lane.
- **[Learning Log](/articles/rcos-templates/layer-6/learning-log)** — capture what was tried and what happened, so the experiment teaches something.

See also the spec: [Layer 6 — Experiments](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#83-experiments) and [Change Safety and Reversibility](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#85-change-safety-and-reversibility).

### If it's already happening

If "experiments" have quietly become permanent, sort them by reversibility:

1. **Check current experiments for an actual exit** — which ones can you really undo?
2. **Add criteria and a review date** to anything still in flight.
3. **Stop calling irreversible moves experiments** — run them through the full change process so they get the scrutiny they deserve.

### What this failure tends to trigger

- **[Commons Privatization through Land Sales](/articles/rcos-stress-tests/economy-resources/commons-privatization-through-land-sales)** — selling land "as an experiment" is the costliest irreversible move of all.

### Related stress tests

- **[Institutional Amnesia](/articles/rcos-stress-tests/change-emergencies/institutional-amnesia)** — without captured learning, even a reversible experiment teaches nothing.
- **[Emergency Rule Bypass Precedent](/articles/rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent)** — both let big changes slip through under a reassuring label.
