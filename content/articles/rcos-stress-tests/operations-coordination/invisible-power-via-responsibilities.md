---
id: 65cde9a1
title: Invisible Power via Responsibilities
summary: When one indispensable person becomes a single point of failure — and informal power.
parentId: a9e4c65d
order: 1

# --- Structured metadata ---------------------------------------------------
severity: high
stage: [growth, mature]
layers: [5, 2, 3]
invariants: ["5.1", "5.2", "3.4"]
remediationReady: true
tags: ["Layer 5: Operations", "High severity"]
symptoms:
  - One person "just handles" something critical (the finances, the website, the keys, the relationships) and no one else knows how.
  - Tasks and access have accreted to them informally over years.
  - The community would be paralyzed if they left or burned out.
  - Their influence over decisions has grown with their indispensability, without any formal authority.
  - No documentation exists for the things they do.
preventsWith:
  - rcos-templates/layer-5/role-registry
  - rcos-templates/layer-2/authority-registry
  - rcos-templates/layer-5/operations-manual
cascade:
  - test: rcos-stress-tests/governance-power/founder-informal-veto
    relation: enables
    note: "Undocumented indispensability becomes an unwritten veto: everything routes through one person."
  - test: rcos-stress-tests/governance-power/informal-clique-decision-making
    relation: enables
    note: "The few who handle everything become the de facto deciders."
related:
  - rcos-stress-tests/operations-coordination/invisible-care-labor-burnout
  - rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution
---

> **Severity:** High — a single point of failure that is also a single point of unaccountable power.
> **Where it bites:** Growth and mature stages, after responsibilities have quietly accreted.
> **Already living this?** Jump to [If it's already happening](#if-its-already-happening).

### Sound familiar?

There's someone who "just handles" the money. Or the website, the legal stuff, the relationships with the neighbours, the keys to everything. It started as helpfulness years ago, and it grew, one quiet task at a time, until now the community genuinely could not function for a week without them. They've never been given authority — but everything routes through them, so in practice their opinion settles things. And none of what they do is written down anywhere.

### Signs this is happening to you

- One person "just handles" something critical and no one else knows how.
- Tasks and access have accreted to them informally over years.
- The community would be paralyzed if they left or burned out.
- Their influence over decisions has grown with their indispensability, without any formal authority.
- No documentation exists for the things they do.

**This is _not_ the same as** someone holding a defined role with documented processes and succession. The tell is *person-bound, undocumented, irreplaceable function* — power that grew without anyone granting it.

### Why it happens

Competence plus convenience concentrates work: the person who does a thing well keeps being handed it, and it's always easier to let them than to document and share it. Over time, undocumented responsibility becomes informal authority — they shape decisions because everything passes through them — and the community's continuity silently depends on one person who can never really leave.

<details data-kind="rationale">
<summary>The formal stress test (for auditors)</summary>

**Failure Mode** — A member gradually accumulates undocumented responsibilities, becoming indispensable.

**Layers Involved** — Layer 5 (Operations), Layer 2 (Governance), Layer 3 (Economy)

**Relevant Invariants**

* 5.1 Roles must be defined
* 5.2 Operational knowledge is documented
* 3.4 No unbounded accumulation of internal power

**Test Condition** — Tasks and authority are person-bound, undocumented, and irreplaceable.

**Expected RCOS Behavior** — Responsibilities must be formalized into roles; knowledge must be documented; role scope, term, and succession are enforced.

**Pass Criteria** — No single individual holds undocumented system-critical power.

**Fail Criteria** — Community functionality depends on informal, unaccountable roles.

</details>

### How mature is your community on this?

Pass/fail is too blunt for real life — most communities are partway. Find your rung, then aim for the next one.

| Level | What it looks like |
|---|---|
| **L0 — Implicit** | Critical functions are person-bound and undocumented; one person is quietly indispensable. |
| **L1 — Named** | The group knows it's over-reliant on someone but hasn't formalized or documented the role. |
| **L2 — Documented** | Responsibilities are named [roles](/articles/rcos-templates/layer-5/role-registry) with scope, term, and succession; operational knowledge is written down. |
| **L3 — Enforced & rehearsed** | No individual holds undocumented system-critical power; roles rotate and have been handed over at least once successfully. |

Most communities that recognise themselves here sit at **L0 or L1**. The goal isn't perfection — it's moving up one rung.

### How RCOS prevents this

RCOS separates doing the work from holding the power, and gets both out of one person's head:

- **[Role Registry](/articles/rcos-templates/layer-5/role-registry)** — convert accreted responsibilities into named roles with scope, term limits, and succession.
- **[Authority Registry](/articles/rcos-templates/layer-2/authority-registry)** — separate "does the work" from "holds authority," so indispensability doesn't quietly become power.
- **[Operations Manual](/articles/rcos-templates/layer-5/operations-manual)** — document critical processes so no function lives only in one head.

See also the spec: [Layer 5 — Roles and Responsibilities](/articles/rcos-core/v0-1/layer-5-operations-coordination#71-roles-and-responsibilities) and [Layer 3 — Accumulation Constraints](/articles/rcos-core/v0-1/layer-3-economic-resource-system#54-accumulation-constraints).

### If it's already happening

If one person is a single point of failure, reduce the dependency before it breaks:

1. **Document the bus-factor-one functions first.** Get what's in their head onto paper, starting with whatever breaks the community if they vanish.
2. **Name the roles and add an understudy** for each critical function.
3. **Set term and succession** so the role rotates before the dependency deepens further.
4. **Watch the cascade** — informal indispensability is how cliques and founder-style vetoes form.

### What this failure tends to trigger

- **[Founder Informal Veto](/articles/rcos-stress-tests/governance-power/founder-informal-veto)** — undocumented indispensability becomes an unwritten veto.
- **[Informal Clique Decision Making](/articles/rcos-stress-tests/governance-power/informal-clique-decision-making)** — the few who "handle everything" become the de facto deciders.

### Related stress tests

- **[Invisible Care Labor Burnout](/articles/rcos-stress-tests/operations-coordination/invisible-care-labor-burnout)** — the same accretion, in the relational and emotional domain.
- **[Self-Sufficiency Without Collective Contribution](/articles/rcos-stress-tests/operations-coordination/self-sufficiency-without-collective-contribution)** — weak collective engagement is what funnels everything onto the indispensable few.
