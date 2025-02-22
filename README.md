# React Tanning 🌴

![Screenshot 2024-05-07 at 16 41 24](https://github.com/padunk/react-tanning/assets/25411350/d3011209-16de-4fd7-9828-ba47362c8629)

Create your own project based on this template by running:

if you have install [TheCreate](https://www.npmjs.com/package/@rustyrush/the-create)

```sh
thecreate --fw rts <YOUR PROJECT NAME>
```

```bash
npx degit padunk/react-tanning <YOUR PROJECT NAME>
cd <YOUR PROJECT NAME>
npm install
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## [TanStack](https://tanstack.com)

This template is based on Vite React basic template and add these TanStacks:

- Router
- Query
- Form
- Table

Code in `form.lazy.tsx` and `table.lazy.tsx` is from TanStack's Stackblitz example.

Easily remove any TanStack that is not your stack.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
