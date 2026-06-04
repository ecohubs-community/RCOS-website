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

Each test is written to be **recognised, not just read**. It opens with the lived signs of the failure, explains why it happens, places you on a maturity scale from *implicit* to *rehearsed*, and points to the exact RCOS structures that prevent it — with separate paths for **preventing** it and for **stabilising it when it's already happening**. The original pass/fail specification is preserved inside each test, in a panel for auditors. The [coverage matrix](#coverage-heading) further down shows which RCOS invariant every test exercises.

## How to Use Them

- As a **design check** — read them before founding a community to anticipate what can go wrong.
- As an **audit tool** — walk through them with an existing group and notice which scenarios you have no answer for.
- As a **conflict aid** — when something breaks, find the relevant test and follow the expected behavior instead of improvising.
- As a **shared vocabulary** for naming failure patterns without blaming individuals.

## Tools

Two companion tools make the library easier to act on:

- **[Self-Assessment](/articles/rcos-stress-tests/self-assessment)** — tick the warning signs that feel familiar and see which stress tests your community is closest to, ranked by how pressing they are, each linked to the structures that prevent it. Everything stays in your browser.
- **[Facilitation Guide](/articles/rcos-stress-tests/facilitation-worksheet)** — how to run a stress test as a group session: a step-by-step worksheet that turns any test into a 60–90 minute conversation ending in a concrete next step.

## What These Tests Can't Do

RCOS is a **structural** framework, and these tests inherit its limits. Stating them plainly is part of staying honest:

- **They make handling explicit; they don't do the handling.** A test can tell you conflict must enter a defined process — it can't have the hard conversation for you, or supply the courage, care, and goodwill that process needs to actually work.
- **They don't heal people.** Structure can stop harm from being ignored or hidden, but it doesn't resolve trauma, rebuild broken trust, or substitute for mediation, therapy, or time. RCOS makes room for that work; it isn't that work.
- **They don't manufacture relationships.** No protocol creates warmth, chemistry, or belonging. The tests can protect those things from structural erosion, but a community still has to genuinely want to live together.
- **Passing is not the goal; honesty is.** A community can satisfy every test on paper and still be a hard place to live, or fail several and still be thriving. The tests are a mirror for structural risk, not a certificate of health.
- **They describe patterns, not your specifics.** Each test is a composite of many real failures. Recognising yourself in one is the start of a conversation, not a diagnosis — your context decides what to actually do.

Use them for the one thing they are genuinely good at: making the implicit explicit, before it costs you.

## Contributing a Stress Test

The library grows by absorbing real experience. **If your community has lived through a structural failure not yet covered here, we welcome it.** [Get in touch](https://ecohubs.community/contact) with the situation — what happened, which layers were involved, how it was (or wasn't) resolved — and we will consider adding it as a new stress test. Real failures make RCOS stronger.
