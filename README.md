# siamol-electrical

Static website for Siamol Electrical — maintained by morrisIII.

This repository contains the site source and a GitHub Actions workflow that publishes the site to GitHub Pages on pushes to `main` ([.github/workflows/gh-pages.yml](.github/workflows/gh-pages.yml)).

Quick start

1. Initialize and commit (if not already):

```powershell
cd "c:\Users\MS\OneDrive\Documents\WEBSITE"
git init
git add .
git commit -m "Initial commit"
git branch -M main
```

2. Create and push the GitHub repo (use `gh` CLI or manual remote):

```powershell
# Using GitHub CLI (recommended):
gh repo create morrisIII/siamol-electrical --public --source=. --remote=origin --push

# Or manually:
# git remote add origin https://github.com/morrisIII/siamol-electrical.git
# git push -u origin main
```

After pushing, check the Actions tab for the `Deploy to GitHub Pages` workflow and the repository Settings → Pages for the published URL.

## Custom domain setup

If you want to publish to `www.siamolelectrical.com`, add a `CNAME` file at the repository root with:

```text
www.siamolelectrical.com
```

Then configure your DNS provider:

- `CNAME` record:
  - Host / Name: `www`
  - Value / Target: `morrisIII.github.io`
- Optional root domain `A` records for `siamolelectrical.com`:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`

Wait for DNS propagation after making changes, then verify your domain resolves correctly.
