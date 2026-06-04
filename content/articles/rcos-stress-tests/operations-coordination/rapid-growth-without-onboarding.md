---
id: 9d3e6a24
title: Rapid Growth without Onboarding
summary: When the community grows faster than it can integrate anyone.
parentId: a9e4c65d
order: 2

# --- Structured metadata ---------------------------------------------------
severity: high
stage: [growth]
layers: [1, 5]
invariants: ["1.1", "5.2"]
remediationReady: true
tags: ["Layer 1: Membership", "High severity"]
symptoms:
  - The community is growing faster than it can integrate people.
  - New members gain access and rights without a clear entry process or probation.
  - Newcomers don't know the norms, history, or how decisions are made — and no one's job is to teach them.
  - '"Who actually decided to let them in?" is hard to answer.'
  - The culture feels like it's diluting or fragmenting as numbers rise.
preventsWith:
  - rcos-templates/layer-1/onboarding-protocol
  - rcos-templates/layer-1/membership-agreement
  - rcos-templates/layer-1/membership-state-registry
cascade:
  - test: rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test
    relation: enables
    note: "Newcomers who never learned the norms collide with them, triggering improvised enforcement."
  - test: rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
    relation: feeds
    note: "In the integration chaos, a few people hold everything together informally."
related:
  - rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution
---

> **Severity:** High — dilutes culture and governance silently, by accretion rather than decision.
> **Where it bites:** The growth stage, especially after a burst of interest or attention.
> **Already living this?** Jump to [If it's already happening](#if-its-already-happening).

### Sound familiar?

Interest is booming. People want in, and saying yes feels wonderful — it looks like everything is working. New faces arrive, get keys and logins and a vote, and join the chat. But there's no real entry process, no probation, no one whose job is to walk them through the history, the norms, the way decisions actually get made. A year later the community is twice the size and somehow less itself: the shared culture has thinned out, and no one can quite say when it happened.

### Signs this is happening to you

- The community is growing faster than it can integrate people.
- New members gain access and rights without a clear entry process or probation.
- Newcomers don't know the norms, history, or how decisions are made — and no one's job is to teach them.
- "Who actually decided to let them in?" is hard to answer.
- The culture feels like it's diluting or fragmenting as numbers rise.

**This is _not_ the same as** intentional, well-resourced fast growth with a real onboarding pipeline. The tell is *rights without process* — people become members by showing up, and integration is left to chance.

### Why it happens

Growth feels like success, so communities say yes faster than they can absorb. Without a formal entry process, membership becomes implicit — no one can say exactly who's in or why — and without onboarding, operational and cultural knowledge never transfers. The result is silent dilution: governance and culture erode not by any decision, but by the steady accretion of un-integrated members.

<details data-kind="rationale">
<summary>The formal stress test (for auditors)</summary>

**Failure Mode** — New members join without onboarding or probation.

**Layers Involved** — Layer 1 (Membership), Layer 5 (Operations)

**Relevant Invariants**

* 1.1 No implicit membership
* 5.2 Operational knowledge is documented

**Test Condition** — Members gain rights without a formal entry process.

**Expected RCOS Behavior** — Mandatory onboarding and probation are enforced.

**Pass Criteria** — Membership status is explicit at all times.

**Fail Criteria** — Culture and governance dilute silently.

</details>

### How mature is your community on this?

Pass/fail is too blunt for real life — most communities are partway. Find your rung, then aim for the next one.

| Level | What it looks like |
|---|---|
| **L0 — Implicit** | People become members by showing up; no entry process, no onboarding. |
| **L1 — Named** | The group feels the dilution but hasn't built an entry / probation pipeline. |
| **L2 — Documented** | A defined [onboarding and probation](/articles/rcos-templates/layer-1/onboarding-protocol) process gates membership; states are tracked in a [registry](/articles/rcos-templates/layer-1/membership-state-registry). |
| **L3 — Enforced & rehearsed** | Membership status is explicit at all times; every newcomer goes through onboarding; growth rate is matched to integration capacity. |

Most communities that recognise themselves here sit at **L0 or L1**. The goal isn't perfection — it's moving up one rung.

### How RCOS prevents this

RCOS makes rights follow integration, not arrival:

- **[Onboarding Protocol](/articles/rcos-templates/layer-1/onboarding-protocol)** — a mandatory entry and probation path so culture and knowledge actually transfer.
- **[Membership Agreement](/articles/rcos-templates/layer-1/membership-agreement)** — make the terms of membership explicit at entry.
- **[Membership State Registry](/articles/rcos-templates/layer-1/membership-state-registry)** — always know who is trial, full, or exited.

See also the spec: [Layer 1 — Entry and Onboarding](/articles/rcos-core/v0-1/layer-1-membership-system#32-entry-and-onboarding) and [Membership States](/articles/rcos-core/v0-1/layer-1-membership-system#31-membership-states).

### If it's already happening

If growth has already outrun integration, slow the intake and back-fill:

1. **Pause or slow intake** until an onboarding path exists — integration capacity, not enthusiasm, is the real limit.
2. **Define membership states now** and place everyone in one; the ambiguity is the core failure.
3. **Back-fill onboarding for recent joiners** — transfer the norms and operational knowledge they missed.
4. **Watch the cascade** — un-integrated growth breeds undeclared-norm clashes and invisible-power gaps.

### What this failure tends to trigger

- **[Cultural Norm Violation Scope Test](/articles/rcos-stress-tests/membership-boundaries/cultural-norm-violation-scope-test)** — newcomers who never learned the norms collide with them.
- **[Invisible Power via Responsibilities](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — in the chaos, a few people hold everything together informally.

### Related stress tests

- **[Self-Sufficiency Without Collective Contribution](/articles/rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution)** — un-onboarded members never learn that the commons is theirs to maintain.
