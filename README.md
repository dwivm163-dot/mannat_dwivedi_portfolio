# Design & Technology Portfolio

A modern, editorial-inspired portfolio website with brutalist design influences and Japanese graphic design aesthetics.

## Features

- **Editorial + Brutalist Aesthetic**: Bold typography, grain textures, and dynamic layouts
- **Color Palette**: Citron green, Tyrian purple, hot pink, warm cream tones
- **Smooth Animations**: Scroll-triggered reveals, parallax effects, custom cursor
- **Responsive Design**: Optimized for all screen sizes
- **Interactive Elements**: Project card hover effects, navigation states

## Quick Start

1. Open `index.html` in your browser
2. Or use a local server for best results:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Customization

### Adding Your Content

1. **Name & Bio**: Edit the hero section and about section in `index.html`
2. **Email & Socials**: Update links in the contact section
3. **Projects**: Replace placeholder cards with your actual work

### Adding Project Images

Replace the `.project-placeholder` divs with actual images:

```html
<div class="project-image">
    <img src="path/to/your/image.jpg" alt="Project Name">
    <!-- ... -->
</div>
```

### Colors

Edit CSS variables in `style.css`:

```css
:root {
    --citron: #CAD383;
    --tyrian: #6B2346;
    --pink: #E85A9C;
    --cream: #F5F0E6;
    /* ... */
}
```

### Fonts

The site uses Google Fonts:
- **DM Serif Display** - Display headings
- **Instrument Sans** - Body text
- **Caveat** - Handwritten accents

## Structure

```
PORTFOLIO/
├── index.html      # Main HTML structure
├── style.css      # All styling & animations
├── script.js       # Interactive features
└── README.md       # This file
```

## Browser Support

Tested on modern browsers (Chrome, Firefox, Safari, Edge). The custom cursor is hidden on mobile devices.

## License

Feel free to customize and use for your own portfolio!

