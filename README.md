# Siamol-Website
Website

Image optimization
------------------

To optimize images locally (converts JPG/PNG to WebP and resizes to max width 1600px):

1. Install dependencies:

```bash
npm install
```

2. Run the optimizer:

```bash
npm run optimize-images
```

Optimized files will be written to the `optimized-images/` folder. You can then replace originals or reference the optimized versions in your HTML.

Notes: `sharp` requires native binaries; installation may download prebuilt binaries or compile locally. Ensure build tools are available if installation fails.
