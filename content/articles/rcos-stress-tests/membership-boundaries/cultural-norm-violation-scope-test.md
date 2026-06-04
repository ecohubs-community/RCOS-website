---
id: 45a25135
title: Cultural Norm Violation Scope Test
summary: When an unwritten norm gets punished as if it were a written rule.
parentId: 45625035
order: 0

# --- Structured metadata ---------------------------------------------------
severity: medium
stage: [forming, growth, mature]
layers: [0, 1, 4]
invariants: ["0.2", "1.1", "4.4"]
remediationReady: true
tags: ["Layer 0: Scope", "Medium severity"]
symptoms:
  - A member breaks a strong unwritten norm (e.g. eating meat in a vegan-identified community) and the response is emotional and improvised.
  - It is unclear whether the norm is a binding rule or a shared preference.
  - Enforcement intensity depends on who is upset, not on any written rule.
  - People assume "everyone knows" the norm, but it was never declared as a membership condition.
  - Reactions range from shunning to exit pressure, with no due process.
preventsWith:
  - rcos-templates/layer-0/scope-declaration
  - rcos-templates/layer-1/membership-agreement
  - rcos-templates/layer-0/identity-constraints-register
cascade:
  - test: rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization
    relation: feeds
    note: "Arbitrary, emotional enforcement teaches members to hide behavior rather than surface it."
related:
  - rcos-stress-tests/culture-influence/charismatic-spiritual-authority
---

> **Severity:** Medium — rarely fatal, but it produces the harshest, most personal conflicts.
> **Where it bites:** Any stage; strongest in communities with a powerful shared identity.
> **Already living this?** Jump to [If it's already happening](#if-its-already-happening).

### Sound familiar?

The community has a strong identity — vegan, sober, silent before noon, whatever it is — and everyone "just knows" the norm. Then someone breaks it. Suddenly there's an intensity in the air that's hard to name: is this a rule violation, or just something that upset people? The response is fast and emotional, the consequences vary depending on who's most offended, and nobody can point to where, exactly, this norm was ever written down as a condition of being here.

### Signs this is happening to you

- A member breaks a strong unwritten norm and the response is emotional and improvised.
- It's unclear whether the norm is a binding rule or a shared preference.
- Enforcement intensity depends on who's upset, not on any written rule.
- People assume "everyone knows" the norm, but it was never declared as a membership condition.
- Reactions range from shunning to exit pressure, with no due process.

**This is _not_ the same as** enforcing an explicitly declared invariant or membership condition. The tell is *enforcement of a norm that was never written down as governed* — punishment without an explicit rule basis.

### Why it happens

Strong shared cultures generate powerful unwritten norms. When something feels obviously wrong, the group enforces it as if it were law — but if the norm was never declared as a core invariant or a membership condition, that enforcement is ungoverned: arbitrary, emotionally driven, and impossible to appeal. The harm isn't the norm itself; it's punishing people against rules that don't formally exist.

<details data-kind="rationale">
<summary>The formal stress test (for auditors)</summary>

**Failure Mode** — A member violates a strong cultural norm (e.g. eating meat in a vegan community).

**Layers Involved** — Layer 0 (Purpose & Scope), Layer 1 (Membership), Layer 4 (Conflict)

**Relevant Invariants**

* 0.2 Explicit governed scope
* 1.1 No implicit membership rules
* 4.4 Safety overrides participation

**Test Condition** — A norm violation occurs and the enforcement response is unclear or emotionally driven.

**Expected RCOS Behavior** — Determine whether the rule is a core invariant, a membership condition, or an out-of-scope preference; apply due process only if it is explicitly governed.

**Pass Criteria** — The response aligns strictly with declared scope and membership rules.

**Fail Criteria** — Punishment or exclusion without an explicit rule basis.

</details>

### How mature is your community on this?

Pass/fail is too blunt for real life — most communities are partway. Find your rung, then aim for the next one.

| Level | What it looks like |
|---|---|
| **L0 — Implicit** | Strong norms are enforced on feeling; no one has declared what is actually governed. |
| **L1 — Named** | The group realizes some norms are unwritten but hasn't sorted rule from preference. |
| **L2 — Documented** | A [Scope Declaration](/articles/rcos-templates/layer-0/scope-declaration) distinguishes core invariants, membership conditions, and out-of-scope preferences; due process applies only to governed rules. |
| **L3 — Enforced & rehearsed** | Responses track declared scope; an unwritten preference can't trigger punishment; this has been tested on a real violation. |

Most communities that recognise themselves here sit at **L0 or L1**. The goal isn't perfection — it's moving up one rung.

### How RCOS prevents this

RCOS makes the community decide *what it actually governs* before it enforces:

- **[Scope Declaration](/articles/rcos-templates/layer-0/scope-declaration)** — sort every important norm into core invariant, membership condition, or out-of-scope preference.
- **[Membership Agreement](/articles/rcos-templates/layer-1/membership-agreement)** — make binding behavioral conditions explicit at entry, so no one is punished by surprise.
- **[Identity Constraints Register](/articles/rcos-templates/layer-0/identity-constraints-register)** — declare what the community's identity does and doesn't govern.

See also the spec: [Layer 0 — Scope Declaration](/articles/rcos-core/v0-1/layer-0-identity-scope#22-scope-declaration) and [Layer 1 — Rights and Obligations](/articles/rcos-core/v0-1/layer-1-membership-system#34-rights-and-obligations).

### If it's already happening

A violation just occurred and the response is heated. Slow it down:

1. **Pause enforcement.** Separate "we're upset" from "a governed rule was broken."
2. **Classify the norm.** Is it a declared invariant, a membership condition, or an undeclared preference?
3. **Apply due process only if it's governed.** If it isn't, the lesson is to *declare it going forward* (or not), never to punish retroactively.
4. **Decide forward.** If the community wants this norm to be binding, write it in as an explicit membership condition.

### What this failure tends to trigger

- **[Conflict Avoidance Normalization](/articles/rcos-stress-tests/conflict-accountability/conflict-avoidance-normalization)** — arbitrary, emotional enforcement teaches members to hide behavior rather than surface it.

### Related stress tests

- **[Charismatic Spiritual Authority](/articles/rcos-stress-tests/culture-influence/charismatic-spiritual-authority)** — revered figures are often the ones whose preferences get enforced as undeclared norms.
