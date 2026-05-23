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

3. (Optional) Add your custom domain — create a `CNAME` file containing the exact domain and push:

```powershell
echo "example.com" > CNAME
git add CNAME
git commit -m "Add CNAME for custom domain"
git push
```

DNS setup (choose one):
- Apex domain (example.com): add A records to GitHub Pages IPs:
	- `185.199.108.153`
	- `185.199.109.153`
	- `185.199.110.153`
	- `185.199.111.153`
- `www` subdomain: add a CNAME record pointing `www` → `morrisIII.github.io`.

After pushing, check the Actions tab for the `Deploy to GitHub Pages` workflow and the repository Settings → Pages for the published URL. Propagation for custom domains can take minutes to a few hours.

If you want, reply with your custom domain (e.g., `example.com`) and whether you want the apex or `www` published — I will create the `CNAME`, commit it, and give exact DNS entries.

Apex DNS records (recommended if you want the root domain to resolve)

If you want `siamolelectrical.com` (the apex/root) to resolve to the site, add these A records at your DNS provider for the root (`@`):

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Notes:
- Some registrars support `ALIAS`/`ANAME` records which can point the apex to `morrisIII.github.io`; use that if available.
- Remove conflicting records for the same name before adding (for example, an existing CNAME at the apex).

Verify DNS propagation (PowerShell):

```powershell
Resolve-DnsName www.siamolelectrical.com -Type CNAME
Resolve-DnsName siamolelectrical.com -Type A
ipconfig /flushdns
```

Or using `dig`:

```bash
dig +short CNAME www.siamolelectrical.com
dig +short A siamolelectrical.com
```
