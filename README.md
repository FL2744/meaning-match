# Meaning Match

A translation game across ten languages. Choose the closest of four English translations, then compare your answer with multilingual embedding scores. Includes A1–C2 learning levels and session scoring.

[Play Meaning Match](https://l1001.vt.domains/meaning-match.html)

## Run locally

Requires Node.js; no package installation is needed.

```sh
npm start
```

Open http://127.0.0.1:4175 and enter your personal Virginia Tech ARC API key. The game uses ARC to generate rounds and calculate embeddings. Your key stays in memory for the current page session. ARC access, model permissions, and browser CORS settings must allow requests.

## Code and deployment

- `dist/`: HTML, CSS, and JavaScript source modules.
- `dist/meaning-match.html`: standalone game, ready to upload to a web server.
- `tests/`: automated tests with mocked API responses.

```sh
npm test
npm run build
```

Rebuild the standalone HTML after changing the source modules. To deploy, upload `dist/meaning-match.html` to your HTTPS website.

Scoring uses cosine similarity from `Qwen3-Embedding-4B`; rounds are generated with `gpt-oss-120b`. The highest embedding similarity wins, which is not a guarantee of translation accuracy. Learning levels are prompt-based targets, not validated CEFR ratings.
