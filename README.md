# WebIsForGames - Hugo + LotusDoc

A modern website showcasing web-based games, built with Hugo and the LotusDoc theme.

## 🚨 Important: Hugo Setup Required

This project uses **Hugo** with the **LotusDoc** theme. Hugo must be installed on your local machine to build and run this site.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Hugo Extended** (v0.121.0 or higher)
- **Go** (v1.21 or higher) - required for Hugo modules
- **Git**

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

### 3. Initialize Hugo Modules and Install LotusDoc Theme

```bash
# Initialize Hugo modules
hugo mod init github.com/yourusername/webisforgames-proto

# Download LotusDoc theme and dependencies
hugo mod get -u
hugo mod tidy
```

### 4. Run Development Server

```bash
hugo server -D
```

Visit `http://localhost:1313` to see your site!

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

## LotusDoc Theme

This site uses the **LotusDoc** theme, a modern documentation theme for Hugo.

- **Documentation**: https://lotusdocs.dev
- **GitHub**: https://github.com/colinwilson/lotusdocs
- **Features**: Clean design, responsive, fast, customizable

## Troubleshooting

### Theme not found?
```bash
hugo mod get -u
hugo mod tidy
```

### Build errors?
Ensure you're using Hugo Extended:
```bash
hugo version
# Should show "hugo v0.xxx.x+extended"
```

### Lightbox not working?
Check that JavaScript is enabled and `custom.css` is loaded.

## License

MIT License

## Credits

- Built with [Hugo](https://gohugo.io)
- Theme: [LotusDoc](https://lotusdocs.dev) by Colin Wilson
