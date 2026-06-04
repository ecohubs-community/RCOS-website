---
id: d7a1f3e8
title: Undefined Decision Type
summary: When the group argues about what to decide before agreeing how to decide it.
parentId: 7f25f268
order: 3

# --- Structured metadata ---------------------------------------------------
severity: medium
stage: [forming, growth, mature]
layers: [2]
invariants: ["2.1", "2.2"]
remediationReady: true
tags: ["Layer 2: Governance", "Medium severity"]
symptoms:
  - Discussions stall because no one agreed whether this is a consensus, a vote, or a delegated call.
  - The same decision gets re-opened because it was never clear it was actually decided.
  - Whoever frames the question first effectively controls the outcome.
  - '"Wait, are we deciding this now, and who decides?" is a recurring confusion.'
  - The decision rules change implicitly depending on the topic or who's in the room.
preventsWith:
  - rcos-templates/layer-2/decision-matrix
  - rcos-templates/layer-2/governance-protocol
cascade:
  - test: rcos-stress-tests/governance-power/dominant-speakers-decision-spaces
    relation: enables
    note: "With no agreed mechanism, airtime and framing decide outcomes by default."
  - test: rcos-stress-tests/governance-power/informal-clique-decision-making
    relation: enables
    note: "Undefined decision type lets outcomes drift to whoever framed the question first."
related:
  - rcos-stress-tests/governance-power/dominant-speakers-decision-spaces
---

> **Severity:** Medium — rarely dramatic, but it makes every decision contestable and slow.
> **Where it bites:** Any stage; it's a quiet drag on a group that otherwise works.
> **Already living this?** Jump to [If it's already happening](#if-its-already-happening).

### Sound familiar?

A question comes up and the group dives straight into it — opinions, arguments, a long discussion. An hour later it's unclear whether anything was actually decided, who had the authority to decide it, or whether a quiet "well, I guess we'll do that" counts as final. Next month the same topic resurfaces as if the first conversation never happened. The problem was never the *content*. It's that nobody agreed, up front, what *kind* of decision this was and how it would be settled.

### Signs this is happening to you

- Discussions stall because no one agreed whether this is a consensus, a vote, or a delegated call.
- The same decision gets re-opened because it was never clear it was actually decided.
- Whoever frames the question first effectively controls the outcome.
- "Wait, are we deciding this now, and who decides?" is a recurring confusion.
- The decision rules change implicitly depending on the topic or who's in the room.

**This is _not_ the same as** deliberately using different mechanisms for different classes of decision — that's healthy, *if it's declared*. The tell is that the decision *type* — who decides, by what mechanism, and whether it's final — is undefined at the moment of deciding, so it's improvised every time.

### Why it happens

Groups jump straight to content ("what should we do about X?") without first settling type ("is this ours to decide, by what rule, and is it final?"). Skipping that step means the loudest framing wins, decisions feel illegitimate to anyone who didn't share that framing, and everything stays re-litigable — because nothing was ever formally *a decision* in the first place.

<details data-kind="rationale">
<summary>The formal stress test (for auditors)</summary>

**Failure Mode** — Decisions are debated without first agreeing their type and mechanism.

**Layers Involved** — Layer 2 (Governance)

**Relevant Invariants**

* 2.1 Decision type precedes decision content
* 2.2 Authority must be explicit

**Test Condition** — Decisions are made without a declared type, so the mechanism and authority are improvised each time.

**Expected RCOS Behavior** — Each decision's type (mechanism + authority + finality) is set before its content is debated.

**Pass Criteria** — Decisions name their type up front and are not silently re-opened.

**Fail Criteria** — Decision type is improvised, so framing determines outcome.

</details>

### How mature is your community on this?

Pass/fail is too blunt for real life — most communities are partway. Find your rung, then aim for the next one.

| Level | What it looks like |
|---|---|
| **L0 — Implicit** | Decision type is improvised each time; the framing decides the outcome. |
| **L1 — Named** | The group notices the confusion but hasn't mapped decision types to mechanisms. |
| **L2 — Documented** | A [Decision Matrix](/articles/rcos-templates/layer-2/decision-matrix) assigns each class of decision a type, a mechanism, and who decides — settled before content. |
| **L3 — Enforced & rehearsed** | Every significant decision names its type up front; decisions are final and not silently re-opened. |

Most communities that recognise themselves here sit at **L0 or L1**. The goal isn't perfection — it's moving up one rung.

### How RCOS prevents this

RCOS forces type before content:

- **[Decision Matrix](/articles/rcos-templates/layer-2/decision-matrix)** — map classes of decision to their mechanism and authority, so type is pre-decided.
- **[Governance Protocol](/articles/rcos-templates/layer-2/governance-protocol)** — make "name the decision type first" a standing rule of how the group works.

See also the spec: [Layer 2 — Decision Types](/articles/rcos-core/v0-1/layer-2-governance-decision-logic#41-decision-types) and [Decision Matrix](/articles/rcos-core/v0-1/layer-2-governance-decision-logic#44-decision-matrix).

### If it's already happening

If decisions keep dissolving and re-forming, settle type first:

1. **Before the next contested decision, agree its type** — who decides, by what rule, and whether it's final.
2. **Build a quick decision matrix from real recent decisions;** the ambiguous ones surface fast.
3. **Stop re-litigating** — record decisions with their type, so "we already decided this" is verifiable.

### What this failure tends to trigger

- **[Dominant Speakers in Decision Spaces](/articles/rcos-stress-tests/governance-power/dominant-speakers-decision-spaces)** — with no agreed mechanism, airtime and framing decide outcomes.
- **[Informal Clique Decision Making](/articles/rcos-stress-tests/governance-power/informal-clique-decision-making)** — undefined type lets decisions drift to whoever framed them first.

### Related stress tests

- **[Dominant Speakers in Decision Spaces](/articles/rcos-stress-tests/governance-power/dominant-speakers-decision-spaces)** — the same missing mechanism, expressed as who-talks-most rather than who-frames-first.
