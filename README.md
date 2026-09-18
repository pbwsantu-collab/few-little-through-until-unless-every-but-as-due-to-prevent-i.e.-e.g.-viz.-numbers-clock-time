# শব্দভেদ (Shabdabhed)

Bilingual English grammar learning app for Bengali-speaking students.

Focused on exam topics: few/little · through · until/unless · every/but · as · due to · prevent · i.e./e.g./viz. · numbers · clock time

## What’s in this repo

Source has been extracted from the Grok App Builder workspace zip.

| Path | Status |
|------|--------|
| `src/routes/*` | Core routes (home structure, lessons, progress, reference) |
| `src/components/*` | Rule blocks, shell pieces, UI button |
| `src/data/types.ts` | Full type definitions |
| `src/data/lessons.ts` | **Stub** — 10 chapter shells; full text is in the zip |
| `src/data/questions.ts` | **Stub** — sample questions; full ~150 in the zip |
| `src/data/pos-words.ts` | **Stub** — sample words; full list in the zip |
| `src/store/progress.ts` | Local progress (Zustand + localStorage) |
| `package.json` | Full dependencies |
| `IMKta5pVSavp2AmL-grok-workspace.zip` | **Complete original workspace** |

## Restore full lesson / question / word data

```bash
unzip IMKta5pVSavp2AmL-grok-workspace.zip "src/data/lessons.ts" "src/data/questions.ts" "src/data/pos-words.ts" -d .
# overwrite the stubs
```

Or extract the whole app:

```bash
unzip IMKta5pVSavp2AmL-grok-workspace.zip "src/*" "public/*" "scripts/*" "server/*" "migrations/*" "vite.config.ts" -d .
```

## Chapters (full content in zip)

1. Few, Little, Less, Fewer  
2. Lots, people, sometime, whole/all  
3. Much, many, very, too, enough  
4. Any, some, anyone, many a, each, every  
5. Order & degree  
6. Adverb pairs  
7. Prepositions of place  
8. Prepositions of time (until / unless)  
9. Sticky phrases (but, as, due to, prevent, i.e./e.g./viz.)  
10. Parts of speech  

## Tech

- TanStack Start + React 19 + Vite  
- Tailwind CSS 4  
- Zustand  
- PGlite + Better Auth (optional)  

## Dev

```bash
npm install
npm run dev
```

Runs at `http://localhost:8080`.
