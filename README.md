# Obsidian Dataview Bases
Run Dataview queries as formulae in your Bases!

Huge shout out to Michael "Tres" Brenan who created [Obsidian Dataview](https://github.com/blacksmithgu/obsidian-dataview), without that, we wouldn't have this.

## Installation

### BRAT (Recommended)

Until this plugin is made official, it can be installed via BRAT:

1. Install the BRAT plugin from "Community plugins" page.
2. Go to the BRAT settings.
3. Click the `Add beta plugin` button.
4. Add this repository (https://github.com/exholalia/dv-bases) as a beta plugin.
5. Select the latest release (or another release, if you wish).
6. Click the `Add plugin` button.
7. Enable the plugin.

### Manually

1. Clone this repo.
2. Make sure your NodeJS is at least v16 (`node --version`).
3. `npm i` or `yarn` to install dependencies.
4. `npm run dev` to start compilation in watch mode.
5. Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.
