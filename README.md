# শব্দভেদ (Shabdabhed)

Bilingual English grammar learning app for Bengali-speaking students.

Focused on the classic exam topics that appear in the repo name:

> few/little · through · until/unless · every/but · as · due to · prevent · i.e./e.g./viz. · numbers · clock time

## Features

- **10 structured chapters** with English + Bengali explanations
- Correct / incorrect example pairs
- Practice mode (choice, blank, error-spotting)
- Parts-of-speech / word reference
- Local progress tracking (offline-friendly after first load)

## Chapters

1. Few, Little, Less, Fewer
2. Lots, people, sometime, whole/all
3. Much, many, very, too, enough
4. Any, some, anyone, many a, each, every
5. Order & degree (later/last, farther, elder…)
6. Adverb pairs
7. Prepositions of place
8. Prepositions of time (until / unless …)
9. Sticky phrases (but, as, due to, prevent, i.e./e.g./viz. …)
10. Parts of speech

## Tech stack

- TanStack Start + React 19 + Vite
- Tailwind CSS 4
- Zustand (progress)
- PGlite + Better Auth (local DB / optional auth)
- Fully client-side friendly after first load

## Development

```bash
npm install
npm run dev
```

App runs at `http://localhost:8080`.

## Notes

This repository was originally published as a single Grok App Builder workspace zip.
The source has been extracted so the code is directly readable and editable.
