# Frontend Foundation Decision Matrix

Use this file first when the user wants a frontend foundation from scratch.

## Fast Decision

| Situation | Prefer | Why |
| --- | --- | --- |
| React web app, Next.js app, or Vite app with no native target | Chakra UI | Faster accessible web setup and strong component primitives |
| Shared design system across web and React Native or Expo | Tamagui | One token system and component approach across platforms |
| User already chose Chakra UI | Chakra UI | Respect explicit choice |
| User already chose Tamagui | Tamagui | Respect explicit choice |
| Repo already has a UI stack | Existing stack | Preserve project DNA unless replacement is explicitly requested |

## Ask One Question When Needed

If the target is unclear, ask:

`Is this app web-only, or does it also need to share UI with React Native or Expo?`

If asking is not practical, assume web-first and flag the assumption.

## Selection Heuristics

Choose Chakra UI when the task emphasizes:

- dashboards, admin panels, or typical SaaS web surfaces
- accessible components quickly
- a straightforward React or Next.js setup
- shipping a polished web UI fast

Choose Tamagui when the task emphasizes:

- universal design systems
- Expo or React Native support
- one token system across web and native
- future reuse of components across platforms

## Avoid These Mistakes

- Do not install Chakra UI and Tamagui together in a new app unless the user explicitly asks for a comparison or migration experiment.
- Do not replace an existing stack just because one of these libraries is available.
- Do not build a huge token system before the first screen or layout works.

## Sources

- OpenAI Codex Skills: https://developers.openai.com/codex/skills
- Chakra UI installation: https://chakra-ui.com/docs/get-started/installation
- Tamagui installation: https://tamagui.dev/docs/intro/installation
