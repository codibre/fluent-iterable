# @codibre/fluent-iterable Monorepo

Monorepo for the `@codibre/fluent-iterable` ecosystem — LINQ-like fluent API operations for iterables, async iterables, streams, and events.

## Packages

| Package | Description | Version |
|---------|-------------|---------|
| [`libs/fluent-iterable`](./libs/fluent-iterable) | Core library: `@codibre/fluent-iterable` — fluent operations for sync & async iterables | [![npm](https://img.shields.io/npm/v/@codibre/fluent-iterable)](https://www.npmjs.com/package/@codibre/fluent-iterable) |
| [`libs/augmentative-iterable`](./libs/augmentative-iterable) | `augmentative-iterable` — base iterable augmentation utilities used by the core | [![npm](https://img.shields.io/npm/v/augmentative-iterable)](https://www.npmjs.com/package/augmentative-iterable) |
| [`libs/fluent-iterable-rxjs`](./libs/fluent-iterable-rxjs) | `@fluent-iterable/rxjs` — RxJS integration plugin for fluent-iterable | [![npm](https://img.shields.io/npm/v/@fluent-iterable/rxjs)](https://www.npmjs.com/package/@fluent-iterable/rxjs) |
| [`libs/fluent-iterable-js-sdsl`](./libs/fluent-iterable-js-sdsl) | `@fluent-iterable/js-sdsl` — js-sdsl data structure plugin for fluent-iterable | [![npm](https://img.shields.io/npm/v/@fluent-iterable/js-sdsl)](https://www.npmjs.com/package/@fluent-iterable/js-sdsl) |
| [`libs/fluent-iterable-async-sema`](./libs/fluent-iterable-async-sema) | `@fluent-iterable/async-sema` — async-sema concurrency control integration for fluent-iterable | [![npm](https://img.shields.io/npm/v/@fluent-iterable/async-sema)](https://www.npmjs.com/package/@fluent-iterable/async-sema) |

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 11.1.3

### Install Dependencies

```bash
pnpm install
```

### Build All Packages

```bash
pnpm run build
```

Builds all libs with turbo, respecting inter-package dependencies (`^build`).

### Test All Packages

```bash
pnpm run test
pnpm run test:cov   # with coverage
```

### Lint All Packages

```bash
pnpm run lint
pnpm run lint:fix
```

## Monorepo Structure

```
fluent-iterable/
├── libs/
│   ├── fluent-iterable          # @codibre/fluent-iterable (core)
│   ├── augmentative-iterable    # augmentative-iterable (base utils)
│   ├── fluent-iterable-rxjs     # @fluent-iterable/rxjs
│   ├── fluent-iterable-js-sdsl  # @fluent-iterable/js-sdsl
│   └── fluent-iterable-async-sema  # @fluent-iterable/async-sema
├── .github/workflows/           # CI: standard.yaml, publish.yaml
├── scripts/                     # Release helper scripts
├── pnpm-workspace.yaml          # Workspace config
├── turbo.json                   # Turbo task orchestration
└── package.json                 # Root monorepo entry
```

## Releasing Packages

Each library can be released independently using [release-it](https://github.com/release-it/release-it):

```bash
cd libs/fluent-iterable
pnpm exec release-it patch    # or minor / major
```

The CI pipeline (`publish.yaml`) auto-detects which libs need releasing by analyzing conventional commits via `scripts/check-version-bump.sh`.

## Conventional Commits

Commit messages must follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(iterable): add new flatMap operation
fix(rxjs): handle empty observable edge case
chore: update dependencies
```

Types allowed: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `build`, `ci`, `revert`.

## License

MIT
