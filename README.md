# Portfolio — Jethan Benedict M. Barcenas

A simple, dependency-free portfolio site: plain HTML, CSS, and JavaScript.
No build step, no framework — open `index.html` in a browser and it works.

## Files

- `index.html` — page structure and copy
- `styles.css` — all styling, driven by design tokens (colors/fonts) at the top of the file
- `script.js` — small config arrays (`PROJECTS`, `SKILLS`, `CERTS`) that render the dynamic sections, plus nav/scroll behavior

## Editing content

You shouldn't need to touch the HTML for routine updates:

- **Projects** — edit the `PROJECTS` array in `script.js`. Each entry has a `status`, `title`, `description`, `tags`, and `links`.
- **Skills / certifications** — edit the `SKILLS` and `CERTS` arrays in `script.js`.
- **Colors / fonts** — edit the `:root` variables at the top of `styles.css`.
- **Bio, hero text, contact info** — edit directly in `index.html`; each section is clearly labeled with an HTML comment.

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `portfolio` or `Jethan-B4.github.io` if you want it at the root of your GitHub domain).
2. Push these three files (`index.html`, `styles.css`, `script.js`) to the repository:
   ```bash
   git init
   git add index.html styles.css script.js README.md
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Jethan-B4/YOUR-REPO-NAME.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
6. Wait a minute, then your site will be live at:
   - `https://Jethan-B4.github.io/YOUR-REPO-NAME/` (normal repo), or
   - `https://Jethan-B4.github.io/` (only if the repo is named exactly `Jethan-B4.github.io`)

No further configuration is needed — there's no build process to set up.
