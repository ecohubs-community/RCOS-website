---
id: d2f7a4e9
title: Self-Sufficiency Without Collective Contribution
summary: When everyone enjoys the commons but almost no one maintains it.
parentId: a9e4c65d
order: 3

# --- Structured metadata ---------------------------------------------------
# Human-facing copy lives in the body below. These fields are the machine-readable
# mirror that powers the coverage matrix, the cascade graph, and the self-assessment
# instrument. Keep them in sync with the prose. Safe to extend — unknown keys are
# passed through untouched by the content loader.
severity: high                 # low | medium | high — impact if left unaddressed
stage: [growth, mature]
layers: [1, 5, 3]              # RCOS layers exercised
invariants: ["1.3", "3.3", "5.3"]   # invariants covered (drives the coverage matrix)
remediationReady: true         # has an "if it's already happening" triage path
tags: ["Contribution & engagement", "High severity"]
symptoms:                      # drives the self-assessment instrument
  - The same handful of people organize every work day, meeting, and repair.
  - Calls for help with shared tasks get warm agreement but few people actually show up.
  - Members are highly capable on their own plots yet rarely appear for collective projects.
  - '"Someone should really…" is said often; "I will" is said rarely.'
  - It is unclear what any given member is actually expected to contribute.
preventsWith:                  # remedy bridge → templates
  - rcos-templates/layer-1/membership-agreement
  - rcos-templates/layer-5/role-registry
  - rcos-templates/layer-3/internal-economy-protocol
  - rcos-templates/layer-1/onboarding-protocol
cascade:                       # what this failure tends to trigger next
  - test: rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
    relation: enables
    note: "When only a committed few run the collective work, they accumulate informal, unaccountable influence over how the community operates."
  - test: rcos-stress-tests/operations-coordination/invisible-care-labor-burnout
    relation: feeds
    note: "The shrinking core absorbs ever more uncompensated labor — the mirror image of this test: too few engaged means those who do are overloaded."
related:                       # sibling / related tests
  - rcos-stress-tests/economy-resources/outsourced-labor-bypassing-contribution
---

> **Severity:** High — rarely a crisis on any single day, but a slow erosion that stalls the community and quietly burns out the few who carry it.
> **Where it bites:** Usually once the founding novelty fades — the growth and mature stages — though the seeds are set at entry.
> **Already living this?** Jump to [If it's already happening](#if-its-already-happening).

### Sound familiar?

Everyone here lives well. People tend their own gardens, fix their own homes, live lightly and capably. The shared values are real — everyone *believes* in the commons, the food forest, the collective vision. And yet the work day has the same six people it always does. The meeting to plan the season is sparsely attended. The shared infrastructure slowly degrades, not because anyone objects, but because maintaining it is no one's job in particular. The community is full of self-sufficient people and slowly starving for collective effort.

### Signs this is happening to you

- The same handful of people organize every work day, meeting, and repair.
- Calls for help with shared tasks get warm agreement but few people actually show up.
- Members are highly capable on their own plots yet rarely appear for collective projects.
- "Someone should really…" is said often; "I will" is said rarely.
- It is unclear what any given member is actually expected to contribute — and no one wants to ask.

**This is _not_ the same as** a community that has *deliberately* minimized shared obligations — say, a co-housing project that by design shares only land and infrastructure. The tell here is a **gap between stated shared goals and actual contribution**: people who say they want a thriving commons but don't resource it. Low commitment *by design* is a valid choice; low commitment *despite shared ambition* is the failure.

### Why it happens

Self-reliant people can meet most of their own needs, so the everyday pull to contribute collectively is weak — the commons feels like a backdrop, not a responsibility. When contribution expectations are never made explicit, the commons becomes a *free good*: everyone consumes it, no one is obligated to maintain it, and upkeep silently defaults to whoever cares most. Shared *values* make everyone feel aligned, which masks the absence of shared *commitment*. Because nothing is actually owed, contribution runs on mood and goodwill — and goodwill doesn't scale or survive a bad season.

<details data-kind="rationale">
<summary>The formal stress test (for auditors)</summary>

**Failure Mode** — Members live sustainably and enjoy the commons but rarely contribute to shared responsibilities or collective goals. Shared values exist, but shared commitment does not.

**Layers Involved** — Layer 1 (Membership), Layer 5 (Operations), Layer 3 (Economy)

**Relevant Invariants**

* 1.3 Rights–obligations symmetry
* 3.3 Contribution recognition is explicit
* 5.3 Time and attention are finite resources

**Test Condition** — Members benefit from the commons and shared lifestyle while collective work goes undone; contribution expectations are weak, undeclared, or left to goodwill; the same small core sustains and develops the community while most disengage.

**Expected RCOS Behavior** — Contribution expectations are made explicit and bound to membership rights; collective responsibilities are role-bound and tracked; persistent non-contribution triggers a defined review.

**Pass Criteria** — Shared responsibilities are sustained without depending on a committed minority, and rights and obligations stay symmetrical across members.

**Fail Criteria** — Benefits become decoupled from contribution; upkeep depends on a shrinking core until it stalls or collapses.

</details>

### How mature is your community on this?

Pass/fail is too blunt for real life — most communities are partway. Find your rung, then aim for the next one.

| Level | What it looks like |
|---|---|
| **L0 — Implicit** | Contribution is assumed to "happen naturally." No one states what's expected, and a quiet few carry the rest. |
| **L1 — Named** | The group openly admits engagement is uneven and talks about it, but expectations stay informal and unenforced. |
| **L2 — Documented** | Contribution expectations are written into the [Membership Agreement](/articles/rcos-templates/layer-1/membership-agreement), and recurring collective work exists as named roles. Members know what they signed up for. |
| **L3 — Enforced & rehearsed** | Contribution is tracked and recognized; the load is visibly shared and rebalanced over time; persistent non-contribution triggers a defined review rather than silent resentment. |

Most communities that recognise themselves in this test sit at **L0 or L1**. The goal isn't perfection — it's moving up one rung.

### How RCOS prevents this

RCOS replaces "we hope people pitch in" with explicit, symmetrical commitment. Build these **before** disengagement becomes the norm:

- **[Membership Agreement](/articles/rcos-templates/layer-1/membership-agreement)** — bind concrete contribution expectations to membership rights, so enjoying the commons and maintaining it are part of the same deal (Invariant 1.3, [rights & obligations](/articles/rcos-core/v0-1/layer-1-membership-system#34-rights-and-obligations)).
- **[Role Registry](/articles/rcos-templates/layer-5/role-registry)** — turn recurring collective work into named, owned roles instead of leaving it to whoever notices.
- **[Internal Economy Protocol](/articles/rcos-templates/layer-3/internal-economy-protocol)** — define what counts as contribution and recognize it (credits, reputation), so participation is visible and valued ([contribution recognition](/articles/rcos-core/v0-1/layer-3-economic-resource-system#52-contribution-recognition)).
- **[Onboarding Protocol](/articles/rcos-templates/layer-1/onboarding-protocol)** — set the contribution norm at entry, before the pattern of disengagement has a chance to form.

### If it's already happening

If the commons is already running on a shrinking core, you can't "prevent" this — you rebalance it. Triage, in order:

1. **Make the load visible.** Do a quick contribution audit: who is actually carrying the collective work right now? The point isn't blame — it's shared data that ends the polite fiction that everyone pitches in equally.
2. **Convert fragile dependencies into roles.** Start with whatever breaks if one person leaves, and give it a named [role](/articles/rcos-templates/layer-5/role-registry) with a backup.
3. **Renegotiate expectations openly, with consent.** Add explicit contribution expectations to the [Membership Agreement](/articles/rcos-templates/layer-1/membership-agreement) going forward — a transparent agreement beats quiet resentment.
4. **Recognize existing contribution loudly.** People re-engage when effort is *seen*; an [Internal Economy Protocol](/articles/rcos-templates/layer-3/internal-economy-protocol) makes that recognition systematic rather than dependent on gratitude.
5. **Watch the cascade** (below) — your committed core is already on the path to burnout and to accidental informal power.

### What this failure tends to trigger

Weak collective engagement rarely stays contained. It quietly produces two downstream failures:

- **[Invisible Power via Responsibilities](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — when only a committed few run the collective work, they accumulate informal, unaccountable influence over how the community operates.
- **[Invisible Care Labor Burnout](/articles/rcos-stress-tests/operations-coordination/invisible-care-labor-burnout)** — the mirror image of this test: too few engaged means the shrinking core absorbs ever more uncompensated labor until it burns out.

### Related stress tests

- **[Outsourced Labor Bypassing Contribution](/articles/rcos-stress-tests/economy-resources/outsourced-labor-bypassing-contribution)** — the money-based cousin: contribution expectations exist but are bypassed by hiring out, where here they're bypassed by disengaging. Same broken link between benefit and contribution.
