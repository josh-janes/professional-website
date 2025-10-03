# Professional Portfolio Website

A modern, high-performance portfolio website built with TypeScript, Vue.js, Nuxt 3, and optimized for deployment on Cloudflare Pages. Features a sleek dark terminal-inspired design with smooth animations and comprehensive blogging functionality.

## 🚀 Features

- **Modern Tech Stack**: Built with TypeScript, Vue 3, and Nuxt 3
- **Blazing Fast**: Powered by Vite for lightning-fast development and optimized builds
- **Server-Side Rendering**: Full SSR support with Nitro engine
- **Blog System**: Markdown-based blogging with Nuxt Content
- **Media Gallery**: Showcase images and videos with modal viewing
- **Responsive Design**: Mobile-first design that works on all devices
- **Dark Theme**: Terminal-inspired dark color palette
- **Smooth Animations**: Polished transitions and hover effects
- **SEO Optimized**: Meta tags and Open Graph support
- **TypeScript**: Full type safety throughout the application

## 📁 Project Structure

```
professional-website/
├── assets/
│   └── css/
│       └── main.css              # Global styles and Tailwind directives
├── components/
│   ├── BlogCard.vue              # Blog post preview card
│   ├── Footer.vue                # Site footer with links
│   ├── GalleryItem.vue           # Gallery item component
│   ├── Header.vue                # Navigation header
│   ├── Icons.vue                 # Social media icons
│   └── Modal.vue                 # Reusable modal component
├── content/
│   └── blog/
│       ├── getting-started-nuxt.md      # Sample blog post
│       ├── typescript-tips.md           # Sample blog post
│       └── vue-composition-api.md       # Sample blog post
├── pages/
│   ├── index.vue                 # Home page
│   ├── about.vue                 # About page
│   ├── gallery.vue               # Media gallery page
│   └── blog/
│       ├── index.vue             # Blog listing page
│       └── [slug].vue            # Individual blog post page
├── public/                       # Static assets (favicon, images, etc.)
├── app.vue                       # Root application component
├── nuxt.config.ts               # Nuxt configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Project dependencies
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation Steps

1. **Clone or create the project**:
   ```bash
   mkdir professional-website
   cd professional-website
   ```

2. **Copy all the files** provided in the artifacts to their respective locations

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:3000`

## 📝 Content Management

### Adding Blog Posts

Create new blog posts in the `content/blog/` directory using Markdown:

```markdown
---
title: 'Your Post Title'
description: 'A brief description of your post'
date: '2025-10-02'
image: 'https://example.com/image.jpg'
tags: ['tag1', 'tag2', 'tag3']
---

# Your Post Title

Your content here in Markdown format...
```

**Frontmatter fields**:
- `title`: Post title (required)
- `description`: Short description for previews (required)
- `date`: Publication date in YYYY-MM-DD format (required)
- `image`: Featured image URL (optional)
- `tags`: Array of tags for categorization (optional)

### Customizing Gallery Items

Edit the `galleryItems` array in `pages/gallery.vue` to add your own images and videos:

```typescript
{
  id: 1,
  type: 'image', // or 'video'
  url: 'https://your-image-url.jpg',
  title: 'Project Title',
  description: 'Project description',
  category: 'Web', // or 'Mobile', 'Design', 'Video'
  link: 'https://project-link.com'
}
```

### Updating Personal Information

1. **About Page**: Edit `pages/about.vue` to update:
   - Personal bio
   - Skills and technologies
   - Work experience
   - Contact information

2. **Footer**: Update social links in `components/Footer.vue`

3. **Home Page**: Customize the hero section in `pages/index.vue`

## 🎨 Theming & Customization

### Color Scheme

The terminal-inspired color palette is defined in `tailwind.config.ts`:

```typescript
colors: {
  terminal: {
    bg: '#0a0e14',           // Main background
    surface: '#151a21',       // Card backgrounds
    elevated: '#1c232e',      // Elevated surfaces
    border: '#2d3748',        // Borders
    text: '#e6e6e6',          // Primary text
    muted: '#8b949e',         // Muted text
    accent: '#58a6ff',        // Accent color
    success: '#3fb950',       // Success/hover state
    warning: '#d29922',       // Warning state
    error: '#f85149'          // Error state
  }
}
```

### Custom Animations

Animations are defined in `tailwind.config.ts` and can be customized:

```typescript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
  'glow': 'glow 2s ease-in-out infinite alternate'
}
```

## 🚀 Deployment to Cloudflare Pages

### Option 1: Git Integration (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Go to **Pages** → **Create a project**
4. Connect your Git repository
5. Configure build settings:
   - **Build command**: `npm run generate`
   - **Build output directory**: `dist`
   - **Environment variables**: Add any required env vars
6. Click **Save and Deploy**

### Option 2: Direct Upload

1. Build the project:
   ```bash
   npm run generate
   ```

2. Upload the `dist` folder to Cloudflare Pages via the dashboard or CLI:
   ```bash
   npx wrangler pages publish dist
   ```

## 📦 Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site (for Cloudflare Pages)
- `npm run preview` - Preview production build locally

## 🔧 Configuration

### Nuxt Config (`nuxt.config.ts`)

Key configuration options:

- **Content**: Markdown processing and syntax highlighting
- **App**: Meta tags, page transitions, and head management
- **Nitro**: Set to `cloudflare-pages` preset for deployment
- **Modules**: Content module for blog, Tailwind for styling

### TypeScript Config (`tsconfig.json`)

Strict mode is enabled for better type safety. Adjust as needed for your preferences.

## 📄 Additional Files Needed

To complete the setup, you'll also need:

1. **Favicon**: Add `favicon.ico` to the `public/` folder
2. **Custom Images**: Add any custom images to `public/images/`
3. **Environment Variables** (if needed): Create `.env` file for API keys, etc.

## 🎯 Key Technologies

- **Nuxt 3**: Vue.js meta-framework
- **Vue 3**: Progressive JavaScript framework
- **TypeScript**: Type-safe JavaScript
- **Nuxt Content**: File-based CMS for blog
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Next-generation frontend tooling
- **Cloudflare Pages**: Edge-optimized hosting

## 💡 Tips & Best Practices

1. **Images**: Use optimized images (WebP format recommended)
2. **Performance**: Lazy load images and videos in the gallery
3. **SEO**: Update meta tags in `nuxt.config.ts` and individual pages
4. **Content**: Write blog posts in Markdown for easy editing
5. **Analytics**: Add analytics scripts via Nuxt plugins
6. **Monitoring**: Set up error tracking (Sentry, etc.) for production

## 📚 Resources

- [Nuxt 3 Documentation](https://nuxt.com)
- [Vue 3 Documentation](https://vuejs.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Nuxt Content Documentation](https://content.nuxt.com)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to customize this portfolio template for your own use. If you create improvements, consider sharing them with the community!

---

Built in Canada using modern web technologies