# ESLint and Husky Setup

This document describes the ESLint and Husky configuration for the Soteria Model VitePress documentation project.

## Overview

The project uses:
- **ESLint** for code quality and consistency checks
- **Husky** for Git hooks management
- **Pre-push hook** to automatically run ESLint before pushing changes

## ESLint Configuration

ESLint is configured to work with:
- Vue 3 files (`.vue`)
- TypeScript files (`.ts`, `.tsx`)
- JavaScript files (`.js`, `.mjs`, `.cjs`)

### Configuration File

The ESLint configuration is in `eslint.config.js` (ESLint v9 flat config format).

### Key Rules

- **Vue**: Vue 3 recommended rules with some customizations
- **TypeScript**: Recommended TypeScript rules
- **Code Style**: 
  - Single quotes for strings
  - No semicolons
  - Trailing commas in multiline structures
  - Arrow function parentheses required
  - Prefer `const` over `let`, no `var`

## Available Scripts

Run these commands from the `docs` directory:

```bash
# Check for linting errors
npm run lint

# Automatically fix linting errors where possible
npm run lint:fix
```

## Git Hooks

### Pre-push Hook

A pre-push hook is configured to automatically run ESLint before pushing changes to the remote repository.

**What it does:**
1. Runs `npm run lint` in the docs directory
2. If ESLint finds any errors, the push is blocked
3. If ESLint passes, the push proceeds

**How to handle blocked pushes:**

If your push is blocked due to linting errors:

1. Review the errors shown in the terminal
2. Fix the errors manually, or run:
   ```bash
   cd docs
   npm run lint:fix
   ```
3. Commit the fixes
4. Try pushing again

## Setup for New Contributors

When you first clone the repository:

```bash
# Install dependencies
cd docs
npm install

# The prepare script will automatically set up Husky
# This happens automatically after npm install
```

## Bypassing the Hook (Not Recommended)

In rare cases where you need to bypass the pre-push hook:

```bash
git push --no-verify
```

**Note:** This should only be used in exceptional circumstances, as it defeats the purpose of maintaining code quality.

## Troubleshooting

### Hook not running

If the pre-push hook isn't running:

1. Check that Husky is installed:
   ```bash
   cd docs
   npm list husky
   ```

2. Verify the Git hooks path:
   ```bash
   git config core.hooksPath
   # Should output: docs/.husky/_
   ```

3. Re-run the prepare script:
   ```bash
   cd docs
   npm run prepare
   ```

### ESLint errors in IDE

Make sure your IDE has the ESLint extension installed and configured to use the project's ESLint configuration.

## Updating Configuration

To modify ESLint rules:

1. Edit `docs/eslint.config.js`
2. Test your changes with `npm run lint`
3. Commit the updated configuration

## Resources

- [ESLint Documentation](https://eslint.org/)
- [ESLint Vue Plugin](https://eslint.vuejs.org/)
- [TypeScript ESLint](https://typescript-eslint.io/)
- [Husky Documentation](https://typicode.github.io/husky/)

