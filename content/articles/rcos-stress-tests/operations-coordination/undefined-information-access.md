---
id: e4b2c6a9
title: Undefined Information Access
summary: When who-can-see-what is decided by who you know, not by any rule.
parentId: a9e4c65d
order: 4

# --- Structured metadata ---------------------------------------------------
severity: medium
stage: [growth, mature]
layers: [5]
invariants: ["5.4", "5.2"]
remediationReady: true
tags: ["Layer 5: Operations", "Medium severity"]
symptoms:
  - Some members are "in the loop" on decisions, finances, or plans; others find out late or never.
  - There's no rule for what's open to members, what's private, and who can access what.
  - Sensitive member information is held informally, with no agreed boundaries.
  - Newcomers can't find the documents, history, or context they need.
  - Access to key accounts and records depends on personal relationships.
preventsWith:
  - rcos-templates/layer-5/operations-manual
  - rcos-templates/layer-5/meeting-templates
cascade:
  - test: rcos-stress-tests/governance-power/informal-clique-decision-making
    relation: enables
    note: "Information asymmetry is the substrate an in-group forms around."
  - test: rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
    relation: enables
    note: "Whoever holds the records quietly holds power over what others can act on."
related:
  - rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities
---

> **Severity:** Medium — rarely a crisis on its own, but it quietly builds in-groups and fragility.
> **Where it bites:** Growth and mature stages, as records and channels multiply.
> **Already living this?** Jump to [If it's already happening](#if-its-already-happening).

### Sound familiar?

Some people always seem to know things first — the plan, the budget situation, what was discussed. Others hear about decisions after they're made, or stumble on important documents by accident. There's no policy about any of it; access just grew organically, person to person, channel to channel. Newcomers can't find the history they need, sensitive information about members floats around informally, and "being in the loop" has quietly become a marker of who really belongs.

### Signs this is happening to you

- Some members are "in the loop"; others find out late or never.
- There's no rule for what's open to members, what's private, and who can access what.
- Sensitive member information is held informally, with no agreed boundaries.
- Newcomers can't find the documents, history, or context they need.
- Access to key accounts and records depends on personal relationships.

**This is _not_ the same as** having explicit, agreed privacy boundaries — some things *should* be private. The tell is that access is *undeclared and uneven*: informally determined, so information becomes a quiet currency of belonging.

### Why it happens

Information access rarely gets designed; it accretes. People share with whoever they trust, store things wherever is convenient, and the result is an invisible map of who-knows-what that tracks social proximity rather than role. That asymmetry hardens in-groups, strands newcomers, and makes critical knowledge fragile — held in a few inboxes and memories instead of anywhere findable.

<details data-kind="rationale">
<summary>The formal stress test (for auditors)</summary>

**Failure Mode** — Who can access what information is informal and uneven.

**Layers Involved** — Layer 5 (Operations)

**Relevant Invariants**

* 5.4 Information access rules are explicit
* 5.2 Operational knowledge is documented

**Test Condition** — Transparency and privacy boundaries are undefined; access depends on relationships.

**Expected RCOS Behavior** — Transparency defaults, privacy boundaries, and access-by-role are explicitly defined; records are findable.

**Pass Criteria** — Access follows declared rules, not social proximity.

**Fail Criteria** — Information is a currency of belonging.

</details>

### How mature is your community on this?

Pass/fail is too blunt for real life — most communities are partway. Find your rung, then aim for the next one.

| Level | What it looks like |
|---|---|
| **L0 — Implicit** | Access is informal and uneven; being "in the loop" depends on relationships. |
| **L1 — Named** | The group senses the asymmetry but hasn't defined access rules. |
| **L2 — Documented** | An [Operations Manual](/articles/rcos-templates/layer-5/operations-manual) defines transparency defaults, privacy boundaries, and who can access what. |
| **L3 — Enforced & rehearsed** | Access follows declared rules; records are findable; privacy boundaries are explicit and respected. |

Most communities that recognise themselves here sit at **L0 or L1**. The goal isn't perfection — it's moving up one rung.

### How RCOS prevents this

RCOS makes information access a declared rule, not a social fact:

- **[Operations Manual](/articles/rcos-templates/layer-5/operations-manual)** — define transparency defaults, privacy boundaries, and access by role.
- **[Meeting Templates](/articles/rcos-templates/layer-5/meeting-templates)** — record decisions where all members can find them, not in private channels.

See also the spec: [Layer 5 — Documentation and Information Flow](/articles/rcos-core/v0-1/layer-5-operations-coordination#73-documentation-and-information-flow).

### If it's already happening

If access grew by accident, redraw it on purpose:

1. **Map what exists and who can reach it** — the gaps become obvious fast.
2. **Set defaults:** what's open to all members, what's private, and who administers access.
3. **Move critical records into shared, role-accessible storage** so knowledge isn't relationship-bound.
4. **Watch the cascade** — information asymmetry is how cliques and invisible power form.

### What this failure tends to trigger

- **[Informal Clique Decision Making](/articles/rcos-stress-tests/governance-power/informal-clique-decision-making)** — information asymmetry is the substrate of an in-group.
- **[Invisible Power via Responsibilities](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — whoever holds the records holds quiet power.

### Related stress tests

- **[Invisible Power via Responsibilities](/articles/rcos-stress-tests/operations-coordination/invisible-power-via-responsibilities)** — undocumented knowledge and undefined access are two faces of the same concentration.
