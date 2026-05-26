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

After pushing, check the Actions tab for the `Deploy to GitHub Pages` workflow and the repository Settings 12 Pages for the published URL.
