# madimoen.com

Personal portfolio of **Madi Moen**, AI-first backend lead. A single static page built to do one thing: get the visitor to send a message.

Live at [madimoen.com](https://madimoen.com/).

## What's in here

| File | Purpose |
| --- | --- |
| `index.html` | The whole site: markup, styles and scripts in one file, no build step |
| `Madi_Moen_Resume.pdf` | CV served by the "Download my CV" link |
| `robots.txt`, `sitemap.xml` | Search engine crawling and indexing |
| `Dockerfile` | `nginx:alpine` image serving the static files |
| `docker-compose.yml` | Runs the container on `127.0.0.1:47318`, attached to the external `public` network |
| `.github/workflows/cd.yml` | Deploys to the server on every push to `main` |

## How the page works

- **Message builder.** The visitor picks who they are and what they need; the page writes the message and opens it pre-filled in WhatsApp, Telegram or email. LinkedIn cannot be pre-filled, so that button copies the text and opens the profile.
- **Channel priority.** WhatsApp is the primary button. Telegram takes its place when the visitor picks "trading / crypto firm".
- **Presets.** Any link with `data-who` / `data-need` attributes scrolls to the builder with those options selected.
- **Themes.** Follows the system light/dark setting; the toggle in the header overrides it and is remembered in `localStorage`.
- **No backend, no tracking.** Nothing the visitor types leaves their browser except through the app they choose to send with.

## Editing

Everything is in `index.html`.

- **Contact details:** the `PHONE`, `TG`, `MAIL` and `LI` constants at the top of the script, plus the direct-contact cards in the `#contact` section.
- **Message wording:** the `WHO`, `NEED` and `SUBJECT` objects in the script.
- **Colours:** the CSS variables on `:root` (dark) and `:root[data-theme="light"]` (light).
- **CV:** replace `Madi_Moen_Resume.pdf` with a file of the same name.

When content changes, update `<lastmod>` in `sitemap.xml`.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 4173
```

With Docker (the `public` network must exist first):

```bash
docker network create public
```

```bash
docker compose up -d --build
```

The site is then at `http://127.0.0.1:47318`.

## Deployment

The container only listens on localhost. A reverse proxy on the server terminates TLS for `madimoen.com` and forwards to `127.0.0.1:47318`, or to `portfolio:80` if the proxy is itself on the `public` network.

Pushing to `main` triggers `.github/workflows/cd.yml`, which connects over SSH and runs:

```bash
cd ~/portfolio && git pull && docker compose up -d --build
```

One-time server setup:

1. Clone this repository to `~/portfolio`.
2. Create the network: `docker network create public`.
3. Add the repository secrets `SSH_HOST`, `SSH_USER` and `SSH_KEY` in GitHub.

## SEO

The page carries a canonical URL, Open Graph tags and `Person` / `WebSite` structured data with the alternate names "madimoen" and "Madi Moen". After the first deploy, add the domain in Google Search Console, submit `https://madimoen.com/sitemap.xml` and request indexing.
