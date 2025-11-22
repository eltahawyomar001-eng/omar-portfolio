# Omar Rageh - Portfolio Website

A modern, minimalist portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Subtle entrance animations using Framer Motion
- **Glassmorphism UI**: Modern design with backdrop blur effects
- **SEO Optimized**: Comprehensive metadata for social sharing
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation support

## Sections

1. **Hero** - Introduction with call-to-action buttons
2. **Projects** - Showcase of real-world applications with live demos
3. **About & Skills** - Personal narrative and technical skills
4. **Contact** - Email CTA and social links
5. **Footer** - Minimal footer with credits

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd "Omar Portfolio"
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Personal Information

1. **Contact Email**: Update in `components/ContactSection.tsx` (line 58)
2. **LinkedIn URL**: Update in `components/ContactSection.tsx` (line 121)
3. **Projects**: Edit `data/projects.ts` to add/modify projects
4. **About Text**: Modify content in `components/AboutSection.tsx`
5. **Skills**: Update skill categories in `components/AboutSection.tsx`

### Update SEO Metadata

Edit `app/layout.tsx` to update:
- Site title and description
- Open Graph images
- Twitter card details
- Domain URLs

### Add Open Graph Image

Create an `og-image.png` file (1200x630px) and place it in the `public` folder for social media previews.

## Deployment on Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure build settings
6. Click "Deploy"

Your site will be live in minutes!

### Custom Domain

After deployment, you can add a custom domain in Vercel's project settings.

## Project Structure

\`\`\`
Omar Portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── ProjectsSection.tsx # Projects grid
│   ├── AboutSection.tsx    # About & skills
│   ├── ContactSection.tsx  # Contact CTA
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Page footer
│   └── PageWrapper.tsx     # Layout wrapper
├── data/
│   └── projects.ts         # Projects data
├── public/                 # Static assets
├── package.json
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
\`\`\`

## Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Geist Sans & Geist Mono (via next/font)
- **Deployment**: Vercel

## Performance

- Fast page loads with Next.js App Router
- Optimized images and fonts
- Minimal JavaScript bundle
- Smooth animations with hardware acceleration

## License

© 2025 Omar Rageh. All rights reserved.

## Support

For questions or issues, reach out via:
- Email: your.email@example.com
- GitHub: [@eltahawyomar001-eng](https://github.com/eltahawyomar001-eng)
