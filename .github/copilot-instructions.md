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

- `tsconfig.json` currently has `"strict": false`. Do not set it to `true` without
  first auditing the auto-generated `lib/` code for compatibility — that work belongs
  in a dedicated PR. Do not weaken any other compiler option that is already enabled
  (e.g., `allowUnreachableCode`, `allowUnusedLabels`, `forceConsistentCasingInFileNames`,
  `isolatedModules`).
- Write all new `src/` code as if strict mode were on: avoid implicit `any`, use
  explicit return types on all public functions, and never rely on behaviour that
  strict mode would flag.
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

## 5. Git Workflow — Worktree, Branch, PR

> **These are non-negotiable rules. No exceptions for any contributor — human or AI.**

### 5.1 Never commit directly to `main`

`main` is a protected branch. **No one pushes to it directly.** Every single change —
no matter how small — must go through a pull request that is reviewed and approved
before it is merged.

### 5.2 Always work in a dedicated worktree

This repository uses **git worktrees** so that multiple contributors and AI agents
can work concurrently without stepping on each other.

Every unit of work follows this exact sequence:

```
1. Create a worktree + branch  →  2. Do the work  →  3. Open a PR against main  →  4. Review & approve  →  5. Merge  →  6. Remove worktree
```

```bash
# 1. Create worktree and branch
git worktree add ../opportify-sdk-nodejs-<short-name> -b <type>/<short-description>

# 2. Work inside the worktree
cd ../opportify-sdk-nodejs-<short-name>

# 3. Push and open a PR targeting main
git push -u origin <type>/<short-description>
gh pr create --base main ...

# 6. After merge, clean up
git worktree remove ../opportify-sdk-nodejs-<short-name>
git branch -d <type>/<short-description>
```

### 5.3 Branch naming

| Prefix | When to use |
|---|---|
| `feat/` | New feature or capability |
| `fix/` | Bug fix |
| `chore/` | Tooling, config, dependencies, CI |
| `docs/` | Documentation only |
| `refactor/` | Code restructure with no behaviour change |

Keep branch names lowercase and hyphen-separated. One concern per branch.

---

## 6. Pull Requests — Required Process

> **All pull requests MUST target `main` as the base branch.**
> **All pull requests MUST be reviewed and approved before merging.**
> **All pull requests MUST use the repository's PR template — no exceptions.**

The template at `.github/PULL_REQUEST_TEMPLATE.md` is loaded automatically by
GitHub. Do not delete, skip, or abbreviate any section.

| Section | Why it matters |
|---|---|
| What does this PR do? | Gives reviewers instant context |
| Why is this needed? | Connects the change to business/technical motivation |
| How did you implement it? | Documents key decisions for future maintainers |
| Breaking changes? | Protects downstream consumers of the public SDK |
| Testing steps | Enables manual verification without guesswork |
| Related issues | Closes the feedback loop on tracked work |

**Additional PR rules:**
- Target branch must always be `main`.
- At least one human review and approval is required before merge.
- All CI checks must pass before merge.
- PRs that modify the public API (`src/index.ts` exports or any `src/*.ts` public
  type) must explicitly document breaking-change impact.
- Keep diffs focused — unrelated formatting or refactor changes belong in a
  separate PR.

---

## 7. Versioning & Releases

- This package follows [Semantic Versioning](https://semver.org/).
- **Breaking public API changes** → major bump.
- **New backwards-compatible features** → minor bump.
- **Bug fixes and internal changes** → patch bump.

**Release process (manual):**
1. Update the `version` field in `package.json` following the rules above.
2. Open a PR with the version bump (use `chore/` prefix, e.g. `chore/bump-v1.2.0`).
3. Once merged to `main`, create a GitHub Release (tag + release notes). The
   release drafter (`.github/workflows/main.yml`) auto-generates draft release
   notes from merged PR titles — use that draft as a starting point.
4. Publishing the GitHub Release triggers `.github/workflows/publish.yml`, which
   builds and publishes the package to npm using the version already committed in
   `package.json`.

> No automated tooling bumps the version — contributors are responsible for
> choosing the correct version number and committing it before the release is
> published.

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

- **Do not commit or push directly to `main`** — ever, for any reason.
- **Do not open a PR against any branch other than `main`.**
- **Do not merge a PR without at least one review and approval.**
- **Do not open a PR with an incomplete or missing PR template.**
- Do not edit files under `lib/` — they are auto-generated.
- Do not commit `dist/` or `node_modules/`.
- Do not bypass or ignore failing CI checks.
- Do not introduce breaking changes without a major version bump and explicit
  documentation.
- Do not use `console.log` for debugging in production code — use structured error
  propagation instead.
