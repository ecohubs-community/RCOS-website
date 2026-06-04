---
id: 1agdfya7
title: Emergency Rule Bypass Precedent
summary: When a temporary crisis exception quietly becomes the permanent rule.
parentId: 6acde7a7
order: 0

# --- Structured metadata ---------------------------------------------------
severity: high
stage: [growth, mature]
layers: [2, 6]
invariants: ["2.3", "6.2"]
remediationReady: true
tags: ["Layer 2: Governance", "High severity"]
symptoms:
  - During a crisis, normal process was suspended "just for now" — and never fully resumed.
  - A decision made under urgency quietly became the new permanent structure.
  - Emergency powers were never defined in advance, so their scope and end date are unclear.
  - '"We didn''t have time to do it properly" is becoming a recurring justification.'
  - There is no log distinguishing emergency exceptions from permanent rule changes.
preventsWith:
  - rcos-templates/layer-6/change-protocol
  - rcos-templates/layer-2/governance-protocol
  - rcos-templates/layer-0/invariants-register
cascade:
  - test: rcos-stress-tests/governance-power/founder-informal-veto
    relation: feeds
    note: "Whoever wields emergency power informally tends to entrench it once the crisis passes."
  - test: rcos-stress-tests/economy-resources/commons-privatization-through-land-sales
    relation: enables
    note: "An urgent financial crisis is the classic cover for a rushed, irreversible land sale."
related:
  - rcos-stress-tests/governance-power/founder-informal-veto
---

> **Severity:** High — each unreviewed exception is a precedent that erodes the constitution.
> **Where it bites:** Growth and mature stages, whenever the first real crisis hits.
> **Already living this?** Jump to [If it's already happening](#if-its-already-happening).

### Sound familiar?

A real crisis hit — a funding gap, a safety issue, a sudden departure — and there was no time for the usual process, so someone just decided. That was the right call in the moment. But the crisis passed and the normal rules never quite came back. The emergency decision is still in force, nobody reviewed it, and now "we didn't have time to do it properly" is starting to explain a lot of how things work. The exception is quietly becoming the rule.

### Signs this is happening to you

- During a crisis, normal process was suspended "just for now" — and never fully resumed.
- A decision made under urgency quietly became the new permanent structure.
- Emergency powers were never defined in advance, so their scope and end date are unclear.
- "We didn't have time to do it properly" is becoming a recurring justification.
- There's no log distinguishing emergency exceptions from permanent rule changes.

**This is _not_ the same as** invoking pre-defined, logged, time-limited emergency powers. The tell is *an exception with no sunset* — urgency that permanently altered structure without review or versioning.

### Why it happens

Crises demand speed, and speed justifies skipping process. That's fine if emergency powers are predefined and expire — but if they aren't, each bypass sets a precedent: the exception becomes the rule, and "temporary" changes ossify because nothing forces a review. Urgency becomes a permanent override of the constitution, one reasonable-seeming shortcut at a time.

<details data-kind="rationale">
<summary>The formal stress test (for auditors)</summary>

**Failure Mode** — Rules are bypassed "temporarily" during crises.

**Layers Involved** — Layer 2 (Governance), Layer 6 (Evolution)

**Relevant Invariants**

* 2.3 Constitutional rules outrank urgency
* 6.2 Changes are versioned

**Test Condition** — Emergency decisions permanently alter structure without review.

**Expected RCOS Behavior** — Emergency powers are predefined, logged, and sunset.

**Pass Criteria** — Normal rules resume post-crisis.

**Fail Criteria** — Crisis becomes a precedent.

</details>

### How mature is your community on this?

Pass/fail is too blunt for real life — most communities are partway. Find your rung, then aim for the next one.

| Level | What it looks like |
|---|---|
| **L0 — Implicit** | Crises suspend the rules ad hoc; exceptions silently become permanent. |
| **L1 — Named** | The group knows it over-uses "emergency" but hasn't predefined emergency powers. |
| **L2 — Documented** | Emergency powers are predefined, scoped, logged, and sunset; permanent changes require normal review. |
| **L3 — Enforced & rehearsed** | Normal rules demonstrably resume post-crisis; every emergency action is logged and reviewed; a real crisis has tested it. |

Most communities that recognise themselves here sit at **L0 or L1**. The goal isn't perfection — it's moving up one rung.

### How RCOS prevents this

RCOS lets you move fast in a crisis *without* losing the constitution:

- **[Change Protocol](/articles/rcos-templates/layer-6/change-protocol)** — define emergency powers in advance: their scope, who holds them, and a mandatory sunset.
- **[Governance Protocol](/articles/rcos-templates/layer-2/governance-protocol)** — keep constitutional rules outranking urgency.
- **[Invariants Register](/articles/rcos-templates/layer-0/invariants-register)** — mark which rules can never be bypassed, even in a crisis.

See also the spec: [Layer 6 — Change Safety and Reversibility](/articles/rcos-core/v0-1/layer-6-evolution-adaptation#85-change-safety-and-reversibility) and [Layer 2 — Safeguards and Failure Modes](/articles/rcos-core/v0-1/layer-2-governance-decision-logic#46-safeguards-and-failure-modes).

### If it's already happening

If "temporary" exceptions have piled up, reconcile them with the constitution:

1. **Audit standing exceptions.** List every emergency measure still in effect.
2. **Sunset or ratify each one.** Either let it expire, or pass it through normal process as a real, versioned change.
3. **Predefine emergency powers now,** so the next crisis has a bounded, logged path instead of a blank cheque.
4. **Watch the cascade** — normalized bypass is how founders entrench and commons get sold under pressure.

### What this failure tends to trigger

- **[Founder Informal Veto](/articles/rcos-stress-tests/governance-power/founder-informal-veto)** — whoever wields emergency power informally tends to entrench it.
- **[Commons Privatization through Land Sales](/articles/rcos-stress-tests/economy-resources/commons-privatization-through-land-sales)** — an "urgent" financial crisis is the classic cover for a rushed, irreversible sale.

### Related stress tests

- **[Founder Informal Veto](/articles/rcos-stress-tests/governance-power/founder-informal-veto)** — the standing-power version of the same constitutional erosion.
