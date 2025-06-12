# Cloud Dashboard

This repository contains a sample Internet Computer project for the **CLOUD** meme token dashboard.

## Prerequisites

1. **Node.js** – install via [nvm](https://github.com/nvm-sh/nvm):
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   nvm install --lts
   ```
2. **DFX SDK** – install the Internet Computer SDK:
   ```bash
   sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
   ```
3. **Rust toolchain** (optional, for advanced tooling):
   ```bash
   curl https://sh.rustup.rs -sSf | sh -s -- -y
   ```
4. **Frontend dependencies**:
   ```bash
   cd cloud-dashboard-frontend
   npm install
   ```

## Project Structure

- `cloud-dashboard` – Motoko canister with HTTP outcalls
- `cloud-dashboard-frontend` – React + TailwindCSS frontend

## Building

```bash
# build frontend assets
npm --prefix cloud-dashboard-frontend run build

# deploy canisters locally
cd cloud-dashboard
dfx start --background
DFX_NETWORK=local dfx deploy
```

Make sure to set the `CANISTER_ID_CLOUD_DASHBOARD` environment variable when running the frontend in development mode:

```bash
cd cloud-dashboard-frontend
CANISTER_ID_CLOUD_DASHBOARD=$(dfx canister id cloud_dashboard) npm run dev
```
