## CSE Degree Guide Website

A modern, responsive documentation website for the "CSE Degree for Dummies" guide built with Astro, Tailwind CSS, and ShadCN/UI components.

### 🚀 Features

- **Modern Stack**: Built with Astro for lightning-fast static site generation
- **Responsive Design**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Automatic theme detection with manual toggle
- **Clean Typography**: Optimized for reading with Inter and JetBrains Mono fonts
- **Table of Contents**: Sticky navigation with scroll highlighting
- **Syntax Highlighting**: Beautiful code blocks with Prism.js
- **Student-Friendly**: Professional but approachable design for undergraduates

### 🛠️ Tech Stack

- **[Astro](https://astro.build/)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[ShadCN/UI](https://ui.shadcn.com/)** - Beautiful, accessible components
- **[React](https://reactjs.org/)** - For interactive components
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### 📁 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.tsx
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   ├── MobileNav.astro
│   │   └── TableOfContents.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── part1.astro
│   │   ├── part2.astro
│   │   ├── part3.astro
│   │   └── part4.astro
│   ├── styles/
│   │   └── global.css
│   └── lib/
│       └── utils.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

### 🚀 Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```

3. **Build for production**

   ```bash
   npm run build
   ```

4. **Preview the production build**
   ```bash
   npm run preview
   ```

### 🎨 Design Features

- **Typography**: Inter for body text, JetBrains Mono for code
- **Color Scheme**: Carefully crafted light/dark themes with excellent contrast
- **Responsive Layout**: Mobile-first with sidebar TOC on larger screens
- **Interactive Elements**: Smooth animations and hover states
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

### 📱 Mobile Experience

- Collapsible mobile navigation
- Touch-friendly interface
- Optimized typography for reading on small screens
- Fast loading times

### 🔧 Customization

The website is highly customizable through:

- **Tailwind config**: Modify colors, fonts, and spacing
- **CSS variables**: Easy theme customization
- **Component props**: Flexible component system
- **Astro layouts**: Easy page structure changes

### 📄 Content Management

Each part of the guide is a separate Astro page with:

- Automatic table of contents generation
- Breadcrumb navigation
- Previous/next page navigation
- Responsive typography

### 🚀 Deployment

This site can be deployed to:

- **Netlify** (recommended)
- **Vercel**
- **GitHub Pages**
- **Any static hosting service**

Simply run `npm run build` and deploy the `dist/` folder.

### 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ for CS students everywhere.
