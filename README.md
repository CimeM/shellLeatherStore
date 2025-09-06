# Shell Leather - Handcrafted Leather Goods Website

A beautiful, mobile-first e-commerce website for Shell Leather, featuring handcrafted leather products inspired by Provençal traditions.

## Features

### Core Functionality
- 🛍️ Product catalog with filtering and search
- 🛒 Shopping cart with real-time updates
- 🔐 Firebase authentication (login/signup)
- 📧 Email-based order system
- 🌓 Dark/light mode toggle
- 📱 Mobile-first responsive design
- 🎨 Instagram-friendly product pages
- ⏰ Time-based discount system
- 🎨 Customizable accent colors

### Pages
- **Home**: Hero section, featured products, brand story
- **Products**: Filterable catalog with search
- **Product Detail**: Instagram-optimized individual product pages
- **About**: Artisan story and craftsmanship focus
- **Provence**: Regional inspiration and heritage
- **Cart**: Shopping cart management
- **Checkout**: Order form with email submission
- **Login/Signup**: Firebase authentication

### Technical Features
- React 18 with TypeScript
- Tailwind CSS for styling
- Framer Motion animations
- Firebase authentication
- JSON-based product management
- Email-based order processing
- Dark mode support
- Responsive design
- SEO optimization

## Getting Started

### Prerequisites
- Node.js 16+ and npm
- Firebase account (for authentication)

### Installation

1. Clone and install dependencies:
```bash
npm install
```

2. Configure Firebase:
   - Create a Firebase project at https://firebase.google.com
   - Enable Authentication with Email/Password
   - Copy your Firebase config
   - Update `src/config/firebase.ts` with your credentials

3. Start development server:
```bash
npm run dev
```

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project
3. Enable Authentication → Sign-in method → Email/Password
4. Copy your config from Project Settings → General → Your apps
5. Replace the placeholder config in `src/config/firebase.ts`

### Product Management

Products are managed via `src/data/products.json`:

```json
{
  "products": [
    {
      "id": "unique-id",
      "name": "Product Name",
      "description": "Product description",
      "price": 89,
      "images": ["https://example.com/image.jpg"],
      "category": "wallets",
      "colors": ["Cognac", "Black"],
      "materials": ["Full-grain leather"],
      "featured": true
    }
  ],
  "discounts": [
    {
      "id": "discount-id",
      "name": "Christmas Special",
      "percentage": 20,
      "startDate": "2024-12-01",
      "endDate": "2024-12-31",
      "applicableProducts": ["product-id"],
      "isActive": true
    }
  ]
}
```

### Deployment

For GitHub Pages deployment:

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/shell-leather",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update vite.config.ts:
```ts
export default defineConfig({
  plugins: [react()],
  base: '/shell-leather/',
  // ... rest of config
});
```

4. Deploy:
```bash
npm run deploy
```

## Customization

### Theme Colors
Update accent colors in `src/contexts/ThemeContext.tsx` and Tailwind config.

### Product Images
Replace placeholder images in `products.json` with your actual product photos.

### Email Configuration
The checkout system uses `mailto:` links. Update the email address in `src/pages/CheckoutPage.tsx`.

### Content
- Update company information in footer and about page
- Modify product descriptions and categories
- Customize discount campaigns

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Common/         # Shared components
│   ├── Layout/         # Header, Footer
│   └── Products/       # Product-related components
├── contexts/           # React contexts (Auth, Theme, Cart)
├── data/              # JSON data files
├── hooks/             # Custom React hooks
├── pages/             # Route components
├── types/             # TypeScript type definitions
└── config/            # Configuration files
```

## Contributing

This is a template for Shell Leather's website. Feel free to customize and adapt for your needs.

## License

Private project for Shell Leather. All rights reserved.