---
id: 1afbg1a7
title: Commons Privatization through Land Sales
summary: When selling the land to members quietly makes the community impossible to leave fairly.
parentId: cbd2804b
order: 0

# --- Structured metadata ---------------------------------------------------
severity: high
stage: [growth, mature]
layers: [0, 3, 1]
invariants: ["0.2", "3.2", "1.2"]
remediationReady: true
tags: ["Layer 3: Economy", "High severity"]
symptoms:
  - The community is considering (or has begun) selling plots or units to individual members.
  - '"It''s simpler if people just own their piece" is gaining traction.'
  - There is no written rule on resale, exit valuation, or what stays commons.
  - Members who paid in can't leave without losing money or rights.
  - Declared invariants about common land quietly conflict with what is actually happening.
preventsWith:
  - rcos-templates/layer-3/treasury-ruleset
  - rcos-templates/layer-3/internal-economy-protocol
  - rcos-templates/layer-1/exit-protocol
  - rcos-templates/layer-0/invariants-register
cascade:
  - test: rcos-stress-tests/economy-resources/outsourced-labor-bypassing-contribution
    relation: enables
    note: "Once members privately own their piece, treating shared obligations as optional follows naturally."
related:
  - rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent
---

> **Severity:** High — one of the few failures that can end the project structurally, and often irreversibly.
> **Where it bites:** Growth and mature stages, usually under financial pressure.
> **Already living this?** Jump to [If it's already happening](#if-its-already-happening).

### Sound familiar?

Money is tight, or a member wants the security of really *owning* their home, and someone says the sensible-sounding thing: it would be simpler if people just bought their own plots. It solves the cash problem. It feels fair. And quietly, with that one pragmatic step, the land that was supposed to be held in common starts converting into private property — and the promise that anyone can join, and anyone can leave, without being financially trapped, begins to dissolve.

### Signs this is happening to you

- The community is considering (or has begun) selling plots or units to individual members.
- "It's simpler if people just own their piece" is gaining traction.
- There is no written rule on resale, exit valuation, or what stays commons.
- Members who paid in can't leave without losing money or rights.
- Declared invariants about common land quietly conflict with what's actually happening.

**This is _not_ the same as** a deliberately designed mixed-tenure model with explicit, pre-agreed commons/private boundaries and exit terms. The tell is *privatization that contradicts the community's own declared invariants*, decided ad hoc, without resale and exit rules already in place.

### Why it happens

Land is the largest asset and the hardest pressure to resist — individual ownership feels safer, financing is easier, and a sale solves a short-term cash need today. But once commons becomes private through informal action, exit rights and constitutional protections erode, and the change is usually irreversible. This is one of the few stress tests where failing it can structurally end the community.

<details data-kind="rationale">
<summary>The formal stress test (for auditors)</summary>

**Failure Mode** — The community sells land to members, undermining exit and constitutional rules.

**Layers Involved** — Layer 0 (Scope & Invariants), Layer 3 (Economy), Layer 1 (Membership)

**Relevant Invariants**

* 0.2 Explicit governed scope
* 3.2 Commons protection
* 1.2 Exit must be possible

**Test Condition** — Asset ownership changes contradict declared invariants; members cannot exit without losing rights or property.

**Expected RCOS Behavior** — Sales must be blocked or governed by pre-declared rules; exit and resale conditions must exist *before* transfer.

**Pass Criteria** — Commons status and exit rights remain intact.

**Fail Criteria** — The community becomes structurally non-exitable.

</details>

### How mature is your community on this?

Pass/fail is too blunt for real life — most communities are partway. Find your rung, then aim for the next one.

| Level | What it looks like |
|---|---|
| **L0 — Implicit** | Commons vs private boundaries are assumed, not written; ad hoc sales are possible. |
| **L1 — Named** | The group recognizes the risk but has no binding rule protecting the commons or governing exit. |
| **L2 — Documented** | Commons status, resale conditions, and exit valuation are written and ratified *before* any transfer. |
| **L3 — Enforced & rehearsed** | Any sale is blocked or governed by pre-declared rules; exit is always possible without losing rights; the protection has survived a real cash-pressure test. |

Most communities that recognise themselves here sit at **L0 or L1**. The goal isn't perfection — it's moving up one rung.

### How RCOS prevents this

RCOS protects the commons and exit *before* the pressure arrives:

- **[Treasury Ruleset](/articles/rcos-templates/layer-3/treasury-ruleset)** + **[Internal Economy Protocol](/articles/rcos-templates/layer-3/internal-economy-protocol)** — declare what is commons vs private and protect the commons from informal privatization.
- **[Exit Protocol](/articles/rcos-templates/layer-1/exit-protocol)** — guarantee exit and resale terms exist before anyone transfers anything, so no one is trapped.
- **[Invariants Register](/articles/rcos-templates/layer-0/invariants-register)** — register commons protection as a protected invariant that can't be quietly amended.
- Worked example: the **[Land Commons Anti-Privatization](/articles/safeguards/land-commons-anti-privatization)** safeguard.

See also the spec: [Layer 3 — Commons vs Private Resources](/articles/rcos-core/v0-1/layer-3-economic-resource-system#51-commons-vs-private-resources) and [Layer 1 — Exit and Separation](/articles/rcos-core/v0-1/layer-1-membership-system#36-exit-and-separation).

### If it's already happening

Because privatization is often irreversible, move carefully and fast:

1. **Freeze irreversible moves.** Pause any pending sale until rules exist — irreversibility is the whole danger.
2. **Re-assert the invariant.** Confirm in writing what is commons and cannot be privatized by unilateral or informal action.
3. **Write exit and resale terms before any transfer,** so no one is trapped and the commons survives a departure.
4. **If sales have already happened,** get legal help to reconstruct exitability and ring-fence what commons remains.

### What this failure tends to trigger

- **[Outsourced Labor Bypassing Contribution](/articles/rcos-stress-tests/economy-resources/outsourced-labor-bypassing-contribution)** — once land is privately owned, members can treat shared obligations as optional and buy their way out.

### Related stress tests

- **[Emergency Rule Bypass Precedent](/articles/rcos-stress-tests/change-emergencies/emergency-rule-bypass-precedent)** — an "urgent" financial crisis is the classic cover for a rushed sale.
