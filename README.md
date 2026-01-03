# WebIsForGames - Hugo Site

A modern website showcasing web-based games, built with Hugo static site generator.

## ✅ Works Out of the Box!

This site includes **built-in layouts** and works immediately after installing Hugo - no theme download required! The LotusDoc theme is optional.

## Prerequisites

You only need:

- **Hugo Extended** (v0.121.0 or higher)

That's it! The site works without additional dependencies.

## Installation

### 1. Install Hugo

#### On macOS (using Homebrew):
```bash
brew install hugo
```

#### On Linux:
```bash
# Using snap
sudo snap install hugo

# Or download from releases
wget https://github.com/gohugoio/hugo/releases/download/v0.121.1/hugo_extended_0.121.1_linux-amd64.tar.gz
tar -xzf hugo_extended_0.121.1_linux-amd64.tar.gz
sudo mv hugo /usr/local/bin/
```

#### On Windows (using Chocolatey):
```powershell
choco install hugo-extended
```

### 2. Clone and Setup

```bash
git clone <your-repo-url>
cd webisforgames-proto/hugo-site
```

### 3. Run Development Server

```bash
hugo server -D
```

Visit `http://localhost:1313` to see your site!

### Optional: Use LotusDoc Theme

If you want to use the LotusDoc theme instead of the built-in layouts:

```bash
# 1. Uncomment theme lines in hugo.toml
# 2. Install Go (v1.21+)
# 3. Run:
hugo mod init github.com/yourusername/webisforgames-proto
hugo mod get -u
hugo mod tidy
hugo server -D
```

## Project Structure

```
hugo-site/
├── archetypes/          # Content templates
├── assets/
│   └── css/
│       └── custom.css   # Custom CSS for lightbox and styling
├── content/
│   ├── _index.md       # Home page (About/Landing)
│   ├── about/          # About section
│   ├── projects/       # Project pages
│   │   ├── space-invaders.md
│   │   ├── puzzle-master.md
│   │   └── racing-thunder.md
│   └── roadmap/        # Roadmap page
├── data/
│   └── roadmap.yaml    # Roadmap Kanban data
├── layouts/
│   ├── shortcodes/
│   │   ├── project-demo.html  # Lightbox shortcode
│   │   └── kanban.html        # Kanban board shortcode
│   └── partials/
│       └── head-custom.html   # Custom CSS injection
├── static/             # Static files (images, etc.)
├── themes/             # Hugo themes (auto-downloaded via modules)
├── hugo.toml          # Hugo configuration
└── go.mod             # Hugo modules configuration
```

## Features

### 1. About Page (Landing)
- Beautiful hero section
- Feature cards showcasing platform benefits
- Mission statement
- Powered by LotusDoc theme styling

### 2. Projects Section
Each project page includes:
- Title and description
- Screenshots (3 per project)
- **Lightbox with iframe**: Click "Play Demo" to open game in fullscreen modal
- Technologies used
- Project details

**Usage in Markdown:**
```markdown
{{< project-demo url="https://example.com/demo" >}}
```

### 3. Roadmap Page
- **Data-driven Kanban board** from YAML
- 4 columns: To Do, In Progress, Testing, Done
- Priority indicators (high/medium/low)
- Tag support (Feature, Bug, Enhancement)

**Usage in Markdown:**
```markdown
{{< kanban >}}
```

Edit `data/roadmap.yaml` to update the roadmap.

## Customization

### Adding New Projects

Create a new Markdown file in `content/projects/`:

```markdown
---
title: "Your Game Title"
description: "Game description"
date: 2026-01-01
weight: 1
screenshots:
  - "/images/screenshot1.jpg"
  - "/images/screenshot2.jpg"
  - "/images/screenshot3.jpg"
demoUrl: "https://example.com/demo"
---

## About
Your game description...

## Features
- Feature 1
- Feature 2

{{< project-demo url="https://example.com/demo" >}}
```

### Updating the Roadmap

Edit `data/roadmap.yaml`:

```yaml
columns:
  - title: "To Do"
    cards:
      - title: "Task Title"
        description: "Task description"
        priority: "high"  # high, medium, or low
        tags:
          - "Feature"
          - "Enhancement"
```

### Customizing Styles

Edit `assets/css/custom.css` to modify:
- Lightbox appearance
- Button styles
- Project card layouts
- Kanban board styling

### Theme Configuration

Edit `hugo.toml` to customize:
- Site title and baseURL
- Menu items
- LotusDoc theme settings
- Fonts and colors

## Building for Production

```bash
# Generate static files
hugo

# Output will be in ./public/
```

Deploy the `public/` directory to your hosting provider (Netlify, Vercel, GitHub Pages, etc.).

## Design & Styling

This site features a **custom design inspired by LotusDoc** with:

- Clean, modern interface
- Nord color palette
- Responsive design
- Built-in layouts that work without external themes

### Optional LotusDoc Theme

You can optionally use the **LotusDoc** theme for enhanced features:

- **Documentation**: https://lotusdocs.dev
- **GitHub**: https://github.com/colinwilson/lotusdocs
- **Features**: Clean design, responsive, fast, customizable

To enable, uncomment the theme configuration in `hugo.toml` and run `hugo mod get -u`

## Troubleshooting

### "Page Not Found" error?
Make sure you're in the `hugo-site` directory when running `hugo server -D`

### Build errors?
Ensure you're using Hugo Extended:
```bash
hugo version
# Should show "hugo v0.xxx.x+extended"
```

### Blank page or missing layouts?
The site includes built-in layouts in `layouts/` directory. If you see this error, check that the layouts folder exists.

### Want to use LotusDoc theme?
1. Uncomment theme configuration in `hugo.toml`
2. Install Go (v1.21+)
3. Run `hugo mod get -u && hugo mod tidy`
4. Restart Hugo server

## License

MIT License

## Credits

- Built with [Hugo](https://gohugo.io)
- Theme: [LotusDoc](https://lotusdocs.dev) by Colin Wilson
