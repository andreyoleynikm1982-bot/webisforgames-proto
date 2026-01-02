# WebIsForGames

A modern website showcasing web-based games and interactive experiences, built with vanilla HTML, CSS, and JavaScript, inspired by the LotusDoc design aesthetic.

## Features

- **About Page (Landing)**: Introduction to the platform with feature highlights
- **Projects Page**: Showcase of web games with:
  - Image carousels (3 screenshots per project)
  - Project descriptions
  - Play buttons that open demos in a lightbox with iframe
- **Roadmap Page**: Kanban-style board showing development progress
  - Data-driven from JSON
  - Visual task organization
  - Priority indicators

## Project Structure

```
webisforgames-proto/
├── index.html          # About/Landing page
├── projects.html       # Projects showcase
├── roadmap.html        # Development roadmap
├── css/
│   └── style.css      # All styles (LotusDoc-inspired)
├── js/
│   └── main.js        # Site functionality
├── data/
│   ├── projects.json  # Projects data
│   └── roadmap.json   # Roadmap/Kanban data
└── images/
    └── projects/      # Project screenshots
```

## Getting Started

### Local Development

1. Clone the repository
2. Open `index.html` in a modern web browser
3. For best results, use a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

## Customization

### Adding New Projects

Edit `data/projects.json`:

```json
{
  "title": "Your Game Title",
  "description": "Game description",
  "screenshots": [
    "path/to/screenshot1.jpg",
    "path/to/screenshot2.jpg",
    "path/to/screenshot3.jpg"
  ],
  "demoUrl": "https://your-demo-url.com"
}
```

### Updating Roadmap

Edit `data/roadmap.json`:

```json
{
  "title": "Task Title",
  "description": "Task description",
  "priority": "high|medium|low",
  "tags": ["Feature", "Bug", "Enhancement"]
}
```

### Styling

All styles are in `css/style.css`. The color scheme follows a Nord-inspired palette:

- Primary: `#5e81ac`
- Secondary: `#88c0d0`
- Success: `#a3be8c`
- Warning: `#ebcb8b`
- Danger: `#bf616a`

## Features Breakdown

### Lightbox Modal
- Click "Play Demo" on any project
- Opens fullscreen iframe modal
- Press ESC or click background to close
- Automatically stops demo when closed

### Image Carousel
- Automatically rotates every 5 seconds
- Click dots to manually navigate
- Smooth transitions

### Kanban Board
- Fully responsive
- Data-driven from JSON
- Color-coded by priority
- Organized in columns: To Do, In Progress, Testing, Done

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies

- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (ES6+)
- No dependencies or frameworks

## License

MIT License - feel free to use this template for your own projects!

## Credits

Design inspired by [LotusDoc](https://lotusdocs.dev)
