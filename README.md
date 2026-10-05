# RCOS - Regenerative Community Operating System

Welcome to **RCOS**, the software implementation and digital home for the **Regenerative Community Operating System**.

## What is RCOS?

The **Regenerative Community Operating System (RCOS)** is a formal, layered specification for designing, operating, and evolving intentional communities without relying on charisma, ideology, or informal power.

RCOS treats a community as a **governed system**, not a social experiment. It defines the minimum structural requirements needed for a community to remain legible, auditable, survivable, and scalable. It is not a lifestyle, culture, or belief system; rather, it is an **operating system**—a set of explicit rules, interfaces, invariants, and test cases that constrain how choices are made, how power is bounded, and how change occurs.

RCOS exists to replace vagueness with structure, ensuring that communities can withstand failure modes without resorting to informal or off-the-books fixes.

## Licensing

RCOS consists of three components, each with explicitly defined licensing:

- **RCOS specification** → CC BY 4.0
- **RCOS templates** → CC BY 4.0
- **RCOS software implementation** → AGPL-3.0

For full details, please refer to the respective license files in the repository.

---

## Technical Stack & Development

The site is built with [SvelteKit](https://svelte.dev/) and prerendered for Vercel. The content of the standard is YAML in `content/`; the downloads and the data used by RCOS Compass are generated from it.

- [specs/BACKEND.md](specs/BACKEND.md): content, build, downloads, published data, checks
- [specs/FRONTEND.md](specs/FRONTEND.md): routes, components, styling rules
- [docs/translation-workflow.md](docs/translation-workflow.md): translating

### Developing

```sh
pnpm install
pnpm dev
```

### Checking and building

```sh
pnpm content:check   # validate content/
pnpm check           # types
pnpm test:unit
pnpm build
pnpm check:links     # after a build
pnpm test:e2e        # after a build
```

After changing content, regenerate the downloads with `pnpm build:downloads` and commit them.
