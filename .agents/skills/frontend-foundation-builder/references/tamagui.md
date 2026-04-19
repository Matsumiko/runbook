# Tamagui Reference

Use this reference after choosing Tamagui for a universal or native-aware project.

## When to Choose Tamagui

Choose Tamagui for:

- shared UI across React web and React Native
- Expo projects
- teams that want one token system across platforms
- projects where native support is a real requirement, not a vague future idea

## Current Setup Notes

As of April 19, 2026:

- The docs recommend `npm create tamagui@latest` to start from an official template when scaffolding from scratch.
- `tamagui` is the full UI kit and is a superset of `@tamagui/core`.
- The docs recommend `@tamagui/config` for a quick preset configuration.
- Root setup should use `TamaguiProvider` with a config object and a default theme.

For native apps, the installation docs currently call out:

- React Native 0.81+ with the New Architecture enabled
- React 19+
- TypeScript 5+

On web-only usage, the docs do not list the same platform restriction.

## Practical First Pass

For a new project:

1. Prefer the official starter if the app is fully greenfield.
2. If installing manually, use `tamagui` plus `@tamagui/config` for the quickest complete setup.
3. Create `tamagui.config.ts` or the equivalent project config.
4. Wrap the app root with `TamaguiProvider`.
5. Add one starter screen or layout that proves tokens and components work.

## Compiler Guidance

Tamagui's compiler is optional at first.

- Start with the runtime-safe setup.
- Add compiler and bundler tuning later when the foundation is stable.
- If enabling the compiler, the docs recommend `tamagui.build.ts` as the single source of truth for build configuration.

## Avoid These Mistakes

- Do not choose Tamagui only because it sounds more flexible if the app is actually web-only and speed matters more.
- Do not add compiler complexity before the provider and starter surface work.
- Do not assume React Native requirements apply to a web-only project in the same way.

## Sources

- UI intro: https://tamagui.dev/ui/intro
- Installation: https://tamagui.dev/docs/intro/installation
- Compiler install: https://tamagui.dev/docs/intro/compiler-install
- LLM docs: https://tamagui.dev/llms.txt
