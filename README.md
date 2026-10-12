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

The repository-root `wrangler.jsonc` configures the `doser` Worker to serve
`apps/website/dist`. This explicit configuration skips Wrangler's workspace
application detection.

In Cloudflare's **Settings → Build**, use:

- Root directory: the repository root (leave blank)
- Build command: `npm run build`
- Deploy command: `npm run deploy`

The deployment script uses Wrangler 4.149.0 and explicitly selects
`wrangler.jsonc`. Both `/` and `/products/doser` are served as static pages.

To validate the deployment without publishing:

```bash
npm run build
npm run deploy -- --dry-run
```

See [Cloudflare's configuration guidance](https://developers.cloudflare.com/workers/framework-guides/automatic-configuration/#skipping-automatic-configuration).

## Cloudflare Pages

Run the production build from the repository root:

- Build command: `vp run build`
- Build output directory: `apps/website/dist`
- Root directory: the repository root

The build includes `index.html` and `products/doser/index.html`.
See [Cloudflare Pages build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/).
