# StudioWongs - Motion Graphics & Logo Design Studio

A clean, responsive static website for StudioWongs - Motion Graphics & Logo Design Studio.

## 🚀 How to Publish to GitHub (GitHub Pages)

You don't need any complex setup to get your site live on GitHub:

1. **Upload to GitHub**:
   - Create a new repository on GitHub (e.g. `my-website`).
   - Push this `app` folder to your new repository.

2. **Turn on GitHub Pages**:
   - In your GitHub repository, click **Settings** (top tab).
   - In the left sidebar, click **Pages**.
   - Under **Build and deployment** > **Source**, choose **GitHub Actions**.
   - Your site will automatically build and publish! You'll get a free live URL (like `https://yourusername.github.io/my-website`).

---

## 🎨 How to Customize

All website source files are in `src/`:

- **Change Colors and Fonts**: Open `src/css/style.css` — top section has simple color codes (like `#00f7ff` for cyan neon or `#000000` for background).
- **Edit Pages & Text**: Open `src/pages.js` — every section, title, and paragraph is clearly labeled in plain English.
- **Update Navigation & Footer**: Open `src/templates.js` to change links or footer policies.

---

## 💻 Building the Site Locally

If you have Node.js installed:

```bash
npm run build
```

This compiles your changes directly into the `dist/` folder.
