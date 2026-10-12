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

## Cloudflare Pages

Run the production build from the repository root:

- Build command: `vp run build`
- Build output directory: `apps/website/dist`
- Root directory: the repository root

The build includes `index.html` and `products/doser/index.html`.
See [Cloudflare Pages build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/).
