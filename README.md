# DIGESTO Volume I - 3D Book Viewer

3D Interactive Book built with React Three Fiber and Three.js, featuring custom Italian textures and interactive elements for legal research documentation.

## Features

- **Enhanced 3D Book Model**: Increased spine thickness (ratio 1:8) for realistic appearance
- **Custom Italian Textures**:
  - Front cover with DIGESTO branding and gold accents
  - Interactive internal pages with descriptive text
  - Clickable button to access "Digesto AI"
- **Smooth Page Animation**: 180-degree page flip with realistic physics
- **Interactive UI**: Italian navigation (Copertina, Pagina 1, Retro)
- **Dynamic Texture Generation**: Node.js script to regenerate textures

## Tech Stack

- React Three Fiber (R3F)
- Three.js
- Vite
- Tailwind CSS
- Jotai (state management)
- node-canvas (texture generation)

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173/` (or next available port).

## Regenerating Textures

To regenerate the book textures:

```bash
node generate-textures.js
```

This will create/update:
- `book-cover.jpg` - Front cover with DIGESTO branding
- `book-back.jpg` - Back cover (solid blue)
- `page-1-left.jpg` - Left page with Italian description
- `page-1-right.jpg` - Right page with interactive button

## Customization

### Colors

Edit the constants in `generate-textures.js`:
- `DIGESTO_BLUE`: Main brand color (#1f3a93)
- `GOLD`: Accent color for text and borders (#d4af37)

### Book Dimensions

Modify in `src/components/Book.jsx`:
- `PAGE_WIDTH`: Width of each page
- `PAGE_HEIGHT`: Height of each page
- `PAGE_DEPTH`: Thickness of spine

### Interactive Content

Update click behavior in `src/components/Book.jsx` in the Page component's onClick handler.

## Structure

```
src/
├── components/
│   ├── Book.jsx              # Main 3D book component with physics
│   ├── Experience.jsx        # Three.js scene setup
│   ├── UI.jsx                # User interface controls
│   └── TextureGenerator.jsx  # Texture generation utilities
├── App.jsx
└── main.jsx

public/textures/              # Generated texture images
generate-textures.js          # Texture generation script
```

## Credits

Based on the original 3D Book Slider by shreejai
Enhanced with custom Italian content for DIGESTO legal research project
