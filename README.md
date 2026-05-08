# alebaffa.github.io

Personal blog built with [Hugo](https://gohugo.io/), deployed to GitHub Pages.

Migrated from a Django blog — same content, same CSS, zero server to maintain.

## Local development

```bash
# Install Hugo: https://gohugo.io/installation/
hugo server -D    # -D includes drafts
```

## Writing a new post

```bash
hugo new posts/my-new-post.md
```

Edit the generated file in `content/posts/`, set `draft: false` when ready.

## Deploy

Push to `main` — GitHub Actions builds and deploys automatically.

## Project structure

```
hugo.toml                  Site config (author, theme, pagination)
content/posts/             Markdown posts with YAML frontmatter
layouts/
  _default/baseof.html     Base template (head, body, footer)
  _default/single.html     Single post page
  _default/list.html       Generic list page
  index.html               Homepage (about + post list)
  taxonomy/tag.html         Posts filtered by tag
  taxonomy/tags.html        All tags overview
  partials/tag-menu.html   Tag chip navigation
static/css/style.css       All styles (supports theme-slate, theme-warm-paper, theme-forest, theme-dark)
.github/workflows/deploy.yml  CI/CD pipeline
```
