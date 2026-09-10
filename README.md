<p align="center">
  <img src="docs/banner.svg" alt="ESLint + Prettier Preset banner" width="100%" />
</p>

<h1 align="center">eslint-prettier-preset</h1>

<p align="center">
  <strong>EN</strong> Example ESLint flat config + Prettier<br/>
  <strong>PT</strong> Exemplo de ESLint flat config + Prettier
</p>

<p align="center">
  <a href="https://github.com/manansbdb/eslint-prettier-preset/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-22c55e?style=for-the-badge" alt="MIT" /></a>
  <img src="https://img.shields.io/badge/lang-EN%20%7C%20PT-3b82f6?style=for-the-badge" alt="EN PT" />
  <img src="https://img.shields.io/badge/topic-ESLint-4b32c3?style=for-the-badge" alt="ESLint" />
  <a href="#support--apoio"><img src="https://img.shields.io/badge/donate-BTC-f59e0b?style=for-the-badge" alt="Donate BTC" /></a>
</p>

---

## What it does / Para que serve

| English | Português |
|---------|-----------|
| Example **ESLint flat config** (`eslint.config.mjs`) and Prettier settings for JS/TS projects. | Exemplo de **ESLint flat config** (`eslint.config.mjs`) e Prettier para projetos JS/TS. |
| Copy configs, `npm install`, lint & format. | Copia configs, `npm install`, faz lint e format. |

```mermaid
flowchart LR
  A["📝 Source"] --> B["🔍 ESLint"]
  B --> C["✨ Prettier"]
  C --> D["✅ Clean diff"]
  style A fill:#2563eb,stroke:#1d4ed8,color:#fff
  style B fill:#4b32c3,stroke:#312e81,color:#fff
  style C fill:#f7b93e,stroke:#ca8a04,color:#111
  style D fill:#22c55e,stroke:#15803d,color:#fff
```

---

## Install / Instalação

### 1) Clone / Clona

```bash
git clone https://github.com/manansbdb/eslint-prettier-preset.git
cd eslint-prettier-preset
```

### 2) Copy configs into your project / Copia configs

```bash
cp eslint.config.mjs /path/to/your-project/
cp .prettierrc.json /path/to/your-project/
# merge package.json devDependencies or:
cd /path/to/your-project
npm install -D eslint @eslint/js eslint-config-prettier prettier
```

### 3) Run / Corre

```bash
npx eslint .
npx prettier --write .
```

### Requirements / Requisitos

- Node.js 18+
- `npm`

---

## Quick start / Início rápido

```bash
git clone https://github.com/manansbdb/eslint-prettier-preset.git
cd eslint-prettier-preset
npm install
npx eslint . && npx prettier --check .
```

---

## Contents / Conteúdos

| Path | Purpose / Função |
|------|------------------|
| `eslint.config.mjs` | Flat ESLint config |
| `.prettierrc.json` | Prettier options |
| `package.json` | Dev dependencies |
| `SUPPORT.md` | Donations / Doações |

---

## Project layout / Estrutura

```text
eslint-prettier-preset/
├── docs/banner.svg
├── eslint.config.mjs
├── .prettierrc.json
├── package.json
├── SUPPORT.md
└── README.md
```

---

## Support / Apoio

Bitcoin donations welcome / Doações em Bitcoin bem-vindas:

```
bc1q0qfnlnxyum9u45stzxe0a7jnhtj4j0usfkqdjw
```

See [SUPPORT.md](./SUPPORT.md).

---

## License / Licença

[MIT](./LICENSE) © 2026 manansbdb
