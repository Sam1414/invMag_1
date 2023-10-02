# Inventory Management App v1
---

### Steps Taken
- Created a dev Container: Node.js & Typescript
    - Image: <a>*mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye*</a>
    - Feature Enabled: *Git*
- `$ npx nuxi@latest init invertoryManagement`
- `$ npm install`
- Initialise Git, add Files and do First Commit
- Connect to Git Remote Repository on GitHub
- Add Vuestic UI: 
  - `$ npm install @vuestic/nuxt`
  - Add module in `nuxt.config.ts` file:
  - ```
    export default defineNuxtConfig({
        devtools: { enabled: false },
        modules: ["@vuestic/nuxt"],
    })
    ```
- Install Tailwind CSS: 
 
  - `$ npm install -D tailwindcss postcss autoprefixer`

  - `$ npx tailwindcss init`

  - Add Configuration in `nuxt.config.ts` file:
    ```
    export default defineNuxtConfig({
      devtools: { enabled: true },
      
      css: ['~/assets/css/main.css'],
      postcss: {
          plugins: {
          tailwindcss: {},
          autoprefixer: {},
          },
      },
    })
    ```

  - Add the paths to all of your template files in your `tailwind.config.js` file:
    ```
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

  - Create an `./assets/css/main.css` file and add the `@tailwind` directives for each of Tailwind’s layers:
    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

- Add Firebase
  - `npm install firebase`
  - A firebase Realtime Database must be created from the firestore web console
  - Create a `useFirestoreRealtime.ts` in `~/composables` directory and add Firebase configurations in it

- Add Pinia (Local Store)
  - `npm install pinia @pinia/nuxt`
  - Add Module in `nuxt.config.ts`
    ```
    export default defineNuxtConfig({
      modules: [
        // ...
        '@pinia/nuxt',
      ],
    })
    ```
  - Create a dir `~/store` and add all stores as seperate files (*.ts) in it (Eg. useCounterStore)

### Coding

- Directory Structure
  - pages
    - index.vue
  - composables
  - layout



## Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
