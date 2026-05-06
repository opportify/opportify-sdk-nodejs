# GitHub Copilot Instructions — `@opportify/sdk-nodejs`

> These instructions apply to every AI-assisted contribution in this repository.
> Read them fully before writing or suggesting any code.

---

## 1. Project Overview

`@opportify/sdk-nodejs` is the **official, publicly published Node.js SDK** for the
[Opportify API](https://opportify.ai). It is distributed on npm under an Apache-2.0
licence and consumed directly by third-party developers. Every line of code that
ships is part of the public interface of Opportify's developer ecosystem.

**Tech stack:** TypeScript · Node.js ≥ 18 · ESM + CJS dual-build · Jest

**Key directories:**
```
src/          Hand-authored wrapper layer (start here for feature work)
lib/          Auto-generated API client (do NOT edit manually)
dist/         Build output (never commit)
test/         Jest test suite
.github/      Workflows, PR template, Copilot instructions (this file)
```

---

## 2. Core Priorities (in order)

### 2.1 Security — highest priority

- **Never** hardcode API keys, tokens, secrets, or credentials anywhere in source,
  tests, configuration, or documentation.
- Validate and sanitise all inputs before passing them to network calls.
- Do not introduce dependencies unless they are well-maintained, have a clear
  security track record, and are strictly necessary.
- Prefer the smallest possible dependency footprint; audit `node_modules` impact
  before adding anything.
- Avoid patterns that could enable prototype pollution, injection attacks, or
  uncontrolled resource consumption.
- Flag any change that touches authentication, request signing, or error message
  content — these surfaces are security-sensitive.

### 2.2 Reliability

- All exported functions and classes must handle network errors, unexpected API
  responses, and malformed input gracefully. Propagate structured `ErrorResponse`
  objects rather than raw exceptions wherever possible.
- Never swallow errors silently. Either handle them explicitly or re-throw with
  added context.
- Avoid `any` casts; strong types prevent entire classes of runtime errors.
- Write tests for every non-trivial behaviour, including error paths.

### 2.3 Maintainability & DRY

- Shared logic lives in `src/` helper modules (e.g., `errorUtils.ts`). Do not
  duplicate error handling, request construction, or response parsing across
  service wrappers.
- New API surface (classes, functions, types) must be exported from `src/index.ts`
  using the existing barrel pattern.
- Keep `lib/` untouched — it is regenerated from the OpenAPI spec. Apply any
  behavioural fixes or wrappers in `src/` instead.
- Follow existing naming conventions: `PascalCase` for classes and types,
  `camelCase` for functions and variables, kebab-case for file names.

---

## 3. TypeScript Standards

- Strict mode is enabled (`tsconfig.json`). Do not relax compiler options.
- Prefer `interface` for public API shapes; use `type` for unions, intersections,
  and utility types.
- Avoid `any`. Use `unknown` and narrow with type guards when the shape is
  genuinely uncertain.
- All public function signatures must have explicit return types.
- Use `readonly` on properties that should not be mutated after construction.

---

## 4. Testing

- Every new feature or bug fix must include a corresponding Jest test in `test/`.
- Test both happy paths and failure/edge cases (network errors, invalid inputs,
  unexpected API responses).
- Do not use real API credentials in tests. Mock network calls with Jest's module
  mocking or manual mocks.
- Run the full suite before opening a PR:
  ```bash
  npm test
  ```

---

## 5. Git Workflow — Parallel Agent Support

This repository uses **git worktrees** to allow multiple AI agents (and developers)
to work concurrently without interfering with each other.

- **Always work in a dedicated worktree** — never commit directly to `main` from a
  shared or default checkout when running automated agents.
- Create a new worktree + branch for each self-contained unit of work:
  ```bash
  git worktree add ../opportify-sdk-nodejs-<feature> -b <type>/<short-description>
  ```
- Branch naming: `feat/`, `fix/`, `chore/`, `docs/`, `refactor/` prefixes.
- Keep branches focused and short-lived. One concern per PR.
- Remove the worktree once the PR is merged:
  ```bash
  git worktree remove ../opportify-sdk-nodejs-<feature>
  ```

---

## 6. Pull Requests — Required Process

> **Every pull request MUST use the repository's PR template.**
> The template is located at `.github/PULL_REQUEST_TEMPLATE.md` and is loaded
> automatically by GitHub when you open a new PR.

**Do not skip or abbreviate any section of the template.** Each section exists for
a reason:

| Section | Why it matters |
|---|---|
| What does this PR do? | Gives reviewers instant context |
| Why is this needed? | Connects the change to business/technical motivation |
| How did you implement it? | Documents key decisions for future maintainers |
| Breaking changes? | Protects downstream consumers of the public SDK |
| Testing steps | Enables manual verification without guesswork |
| Related issues | Closes the feedback loop on tracked work |

**Additional PR rules:**
- PRs that modify the public API (`src/index.ts` exports or any `src/*.ts` public
  type) must explicitly document the impact in "Are there any breaking changes?"
- Do not merge a PR that has failing CI checks.
- Keep diffs focused — unrelated formatting or refactor changes belong in a
  separate PR.
- Require at least one human review before merging to `main`.

---

## 7. Versioning & Releases

- This package follows [Semantic Versioning](https://semver.org/).
- **Breaking public API changes** → major bump.
- **New backwards-compatible features** → minor bump.
- **Bug fixes and internal changes** → patch bump.
- Do not bump `package.json` version manually; the release workflow handles it
  based on PR labels and the release drafter configuration.

---

## 8. Documentation

- Update `README.md` whenever you add, remove, or change public API behaviour.
- Code comments should explain *why*, not *what* — the code should speak for
  itself on the *what*.
- Avoid AI-generated boilerplate comments. Every comment must add genuine value.

---

## 9. What to Do Before Opening a PR

```bash
# 1. Build both targets
npm run build

# 2. Run the full test suite
npm test

# 3. Confirm no secrets or credentials are staged
git diff --cached | grep -iE "(api_key|secret|password|token)" && echo "STOP - remove secrets" || echo "OK"

# 4. Fill in every section of the PR template
```

---

## 10. What NOT to Do

- Do not edit files under `lib/` — they are auto-generated.
- Do not commit `dist/` or `node_modules/`.
- Do not bypass CI or push directly to `main`.
- Do not introduce breaking changes without a major version bump and explicit
  documentation.
- Do not use `console.log` for debugging in production code — use structured error
  propagation instead.
- Do not open a PR with an incomplete or missing PR template.
