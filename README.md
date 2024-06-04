# Admin dashboard

This simple project uses the <https://fakestoreapi.com> website to get and display fake data.
It is an admin dashboard displaying some users, products and dashboard layout.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev --open
```

## Building

To create a production version of your app:

```bash
pnpm build
```

You can preview the production build with `pnpm preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## TODO

- [x] Main dashboard layout
- [x] Avatar/profile w/ related links
- [x] Data table w/ users fake data
- [x] Data cards w/ products fake data
- [x] Signup form for user creation
- [x] Search bar
- [x] Responsive design
- [x] SSR
