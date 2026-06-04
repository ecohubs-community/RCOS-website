---
id: a9e2f4c7
title: Governance Creep into Private Life
summary: When the community has no declared private sphere, so it governs everything.
parentId: 45625035
order: 3

# --- Structured metadata ---------------------------------------------------
severity: medium
stage: [growth, mature]
layers: [0, 1]
invariants: ["0.3", "0.2"]
remediationReady: true
tags: ["Layer 0: Scope", "Medium severity"]
symptoms:
  - Community norms reach into personal choices — diet, relationships, parenting, beliefs, free time.
  - There's no declared line between what the community governs and what's nobody's business.
  - Members feel watched, or self-censor private choices to stay in good standing.
  - '"Is that really the community''s business?" gets asked but never resolved.'
  - Disagreement on a personal matter is treated as disloyalty to the group.
preventsWith:
  - rcos-templates/layer-0/scope-declaration
  - rcos-templates/layer-0/identity-constraints-register
  - rcos-templates/layer-1/membership-agreement
cascade:
  - test: rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test
    relation: enables
    note: "With no out-of-scope sphere, any personal choice can become an enforceable norm."
  - test: rcos-stress-tests/culture-influence/charismatic-spiritual-authority
    relation: enables
    note: "A totalizing community is fertile ground for an unchallengeable moral authority."
related:
  - rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test
---

> **Severity:** Medium — corrosive to belonging; it drives quiet self-censorship and eventual exits.
> **Where it bites:** Growth and mature stages, in communities with a strong shared identity.
> **Already living this?** Jump to [If it's already happening](#if-its-already-happening).

### Sound familiar?

The shared values are real and good — and slowly, they've expanded to cover almost everything. What you eat, who you date, how you raise your kids, what you believe, how you spend a free afternoon: somehow all of it has become a matter of community opinion. No one decided to govern members' private lives; it just crept outward, one well-meant norm at a time. Now people quietly edit themselves to stay in good standing, and the question "is that really the community's business?" hangs in the air, asked but never answered.

### Signs this is happening to you

- Community norms reach into personal choices — diet, relationships, parenting, beliefs, free time.
- There's no declared line between what the community governs and what's nobody's business.
- Members feel watched, or self-censor private choices to stay in good standing.
- "Is that really the community's business?" gets asked but never resolved.
- Disagreement on a personal matter is treated as disloyalty to the group.

**This is _not_ the same as** a deep but bounded shared practice that members explicitly opted into. The tell is the *absence of any declared non-governed space* — so governance can expand into private life without limit, because nothing says it can't.

### Why it happens

Strong shared values make almost anything feel like the community's concern, and without an explicit "this is not governed" boundary, scope creeps outward by default. Each small extension is well-intentioned; cumulatively they produce a totalizing environment with no private self left — which breeds quiet resentment, self-censorship, and the kind of departure where someone just needs to breathe.

<details data-kind="rationale">
<summary>The formal stress test (for auditors)</summary>

**Failure Mode** — Governance expands into members' private lives with no declared limit.

**Layers Involved** — Layer 0 (Identity & Scope), Layer 1 (Membership)

**Relevant Invariants**

* 0.3 Declared non-governed space
* 0.2 Explicit governed scope

**Test Condition** — Personal matters are subject to community norms with no declared out-of-scope sphere.

**Expected RCOS Behavior** — A non-governed space is explicitly declared; matters outside it cannot trigger sanction.

**Pass Criteria** — Governance stays within declared scope; a private sphere is protected.

**Fail Criteria** — Scope creeps without limit into private life.

</details>

### How mature is your community on this?

Pass/fail is too blunt for real life — most communities are partway. Find your rung, then aim for the next one.

| Level | What it looks like |
|---|---|
| **L0 — Implicit** | No declared private sphere; norms expand into personal life unchecked. |
| **L1 — Named** | The group notices the overreach but hasn't drawn a non-governed boundary. |
| **L2 — Documented** | A [Scope Declaration](/articles/rcos-templates/layer-0/scope-declaration) explicitly names what's out of scope — the protected private sphere. |
| **L3 — Enforced & rehearsed** | Governance stays within declared scope; personal matters outside it can't trigger sanction; this has held in a real case. |

Most communities that recognise themselves here sit at **L0 or L1**. The goal isn't perfection — it's moving up one rung.

### How RCOS prevents this

RCOS requires declaring what the community does *not* govern:

- **[Scope Declaration](/articles/rcos-templates/layer-0/scope-declaration)** — declare explicitly what the community does NOT govern (invariant 0.3).
- **[Identity Constraints Register](/articles/rcos-templates/layer-0/identity-constraints-register)** — bound the community's reach over members' lives.
- **[Membership Agreement](/articles/rcos-templates/layer-1/membership-agreement)** — make the opted-into shared practice explicit, and everything else private by default.

See also the spec: [Layer 0 — Scope Declaration](/articles/rcos-core/v0-1/layer-0-identity-scope#22-scope-declaration) and [Identity Constraints](/articles/rcos-core/v0-1/layer-0-identity-scope#24-identity-constraints).

### If it's already happening

If governance has crept into private life, draw the line back:

1. **Name the overreach.** List where norms have reached into personal life.
2. **Declare a non-governed sphere.** Write down what is explicitly nobody's business.
3. **Re-scope enforcement** so personal matters outside the line can't affect standing.

### What this failure tends to trigger

- **[Cultural Norm Violation Scope Test](/articles/rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test)** — with no out-of-scope sphere, any personal choice can become an enforceable norm.
- **[Charismatic Spiritual Authority](/articles/rcos-stress-tests/culture-influence/charismatic-spiritual-authority)** — a totalizing community is fertile ground for an unchallengeable moral authority.

### Related stress tests

- **[Cultural Norm Violation Scope Test](/articles/rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test)** — the enforcement event; this test is the missing boundary that makes it possible.
