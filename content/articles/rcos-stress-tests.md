---
id: 6acbe9a7
title: RCOS Stress Tests
parentId: null
order: 7
---

## What the Stress Tests Are

RCOS Stress Tests are **real-world failure scenarios** — situations communities have actually lived through — formalized as test cases that the RCOS specification must withstand. Each test describes a concrete failure mode, the layers it touches, the invariants it stresses, and the structural response RCOS expects.

A stress test answers a single question:

> *If this happened to a community using RCOS, would the system absorb it — or would the system have to be bypassed?*

If RCOS can survive the scenario without informal fixes, the test **passes**. If it cannot, the test **fails** — and a failing test points to a real gap in the framework that future versions must close. Stress tests are how RCOS stays honest: the spec is only as strong as the failures it has been tested against.

## How They Are Organized

Stress tests are grouped by the type of failure they probe:

- **[Governance & Power](/articles/rcos-stress-tests/governance-power?id=7f25f268)** — informal authority, founder veto, dominant speakers, hidden cliques.
- **[Conflict & Accountability](/articles/rcos-stress-tests/conflict-accountability)** — avoidance, retaliation, suppressed dissent.
- **[Culture & Influence](/articles/rcos-stress-tests/culture-influence)** — charismatic capture, ideological drift, peer pressure.
- **[Economy & Resources](/articles/rcos-stress-tests/economy-resources)** — privatization of commons, invisible labor, wealth asymmetry.
- **[Membership & Boundaries](/articles/rcos-stress-tests/membership-boundaries)** — unclear exit rights, hidden vetting, in-group ossification.
- **[Operations & Coordination](/articles/rcos-stress-tests/operations-coordination)** — silent burnout, role confusion, missing handovers.
- **[Change & Emergencies](/articles/rcos-stress-tests/change-emergencies)** — emergency rules that quietly become permanent, ungoverned pivots.

Each individual test follows a consistent format: **Failure Mode**, **Layers Involved**, **Relevant Invariants**, **Test Condition**, **Expected RCOS Behavior**, and **Pass / Fail Criteria**.

## How to Use Them

- As a **design check** — read them before founding a community to anticipate what can go wrong.
- As an **audit tool** — walk through them with an existing group and notice which scenarios you have no answer for.
- As a **conflict aid** — when something breaks, find the relevant test and follow the expected behavior instead of improvising.
- As a **shared vocabulary** for naming failure patterns without blaming individuals.

## Contributing a Stress Test

The library grows by absorbing real experience. **If your community has lived through a structural failure not yet covered here, we welcome it.** [Get in touch](https://ecohubs.community/contact) with the situation — what happened, which layers were involved, how it was (or wasn't) resolved — and we will consider adding it as a new stress test. Real failures make RCOS stronger.
