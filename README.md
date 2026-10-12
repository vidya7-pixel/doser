# AdvanceFlux

The AdvanceFlux homepage and Doser product page.

## Development

- Check everything is ready:

```bash
vp run ready
```

- Run the tests:

```bash
vp run -r test
```

- Build the website:

```bash
vp run build
```

- Run the development server:

```bash
vp dev
```

The website is the default workspace for `vp dev`, `vp build`, and `vp preview`.
The homepage is served at `/`, and the Doser page is at `/products/doser`.

## Cloudflare Workers

The website deploys as static assets to the `doser` Worker, configured in
`apps/website/wrangler.jsonc`.

In the Worker's **Settings → Build**, use:

- Root directory: `apps/website`
- Build command: `pnpm run build`
- Deploy command: `pnpm run deploy`

Cloudflare must run deployment commands from the website directory. Vite+'s
`defaultPackage` only selects the app for Vite+ commands; it does not change
Wrangler's working directory.

The build includes both the homepage and `/products/doser`. Wrangler uploads
`apps/website/dist`, and serves clean URLs without trailing slashes.

To validate deployment locally without publishing, build the website and run
`pnpm --dir apps/website exec wrangler deploy --dry-run` from the repository root.

See [Cloudflare Workers monorepo setup](https://developers.cloudflare.com/workers/ci-cd/builds/advanced-setups/#monorepos).

## Cloudflare Pages

For a Pages project, use root directory `apps/website`, build command
`pnpm run build`, and build output directory `dist`.
