# sjoshi804.github.io — maintenance guide

Personal site for Siddharth Joshi (MTS at DatologyAI, leading multimodal data curation).
Jekyll, deployed on GitHub Pages from `master`. Pushing to `master` redeploys automatically.

## How the homepage works (READ THIS FIRST)

The homepage (`/`) is a **fully custom, self-contained** page — it does NOT use the
minimal-mistakes remote theme. Three files own it:

| File | What it is |
|------|------------|
| `_layouts/home.html` | Page structure + Liquid loops. **Rarely needs editing.** |
| `assets/css/home.css` | All styling (clean / editorial, light theme). |
| `assets/js/home.js`   | Interactivity (scroll reveal, stat count-up, pub tabs, news toggle). |

`_pages/about.md` just sets `layout: home` and `permalink: /` — it has no body.

**To change CONTENT, edit the YAML in `_data/` — never touch the HTML.** Each file is
heavily commented with its schema. The layout loops over these files automatically.

| Data file | Drives |
|-----------|--------|
| `_data/site.yml`         | Hero headline/lead, social links, the 4 hero stats, the About story, office hours. |
| `_data/featured.yml`     | Main "Work" tiles (flagship is `feature: true`). |
| `_data/mini.yml`         | The smaller 3-up "also contributed to" tiles. |
| `_data/roots.yml`        | "Research roots" cards (PhD / earlier work). |
| `_data/publications.yml` | Publications + Preprints tabs. |
| `_data/news.yml`         | News timeline (first 4 shown, rest behind a toggle). |

### Markup conventions inside the YAML
- Most text fields accept **markdown**: `**bold**`, `_italic_`, `[text](url)`.
- Highlight a phrase in the hero headline / story quote with `[hl]...[/hl]`.
- Bold your own name in author lists with `[me]Siddharth Joshi[/me]`.
- `count` fields in stats animate up — use the numeric part (e.g. `"11.7"`) plus
  `prefix`/`suffix` for symbols (`+`, `×`, `pp`).

## Common tasks (agent playbook)

- **New paper / preprint** → add an entry at the TOP of the relevant list in
  `_data/publications.yml`, and add a one-line entry at the top of `_data/news.yml`.
- **New flagship project** → add a block to `_data/featured.yml` (set `feature: true`
  for the big tile; demote the previous flagship by removing that flag).
- **Update the hero pitch or stats** → edit `_data/site.yml`.
- **Title/SEO/skin for non-home pages** → `_config.yml`.

After any change, verify YAML still parses:
```
ruby -ryaml -e "YAML.load_file('_data/publications.yml')"
```

## Editorial guidance
- Voice: confident, concrete, results-first. Lead with the work at DatologyAI
  (multimodal data curation, VLMs, evals), then earlier research.
- Keep numbers accurate to the papers/blogs they cite.
- Baharan Mirzasoleiman / UCLA appear only as factual co-author/affiliation context,
  not as the framing of the site.

## Local preview
System Ruby (2.6) is too old to build Jekyll here. Either rely on the GitHub Pages
build after push, or use a newer Ruby (`brew install ruby`, then `bundle install &&
bundle exec jekyll serve`). The custom homepage Liquid can be smoke-tested with the
`liquid` gem directly (stub `markdownify`/`relative_url`) without the full theme.
