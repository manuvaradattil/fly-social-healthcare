# Fly Social Healthcare Landing Page

A modern, responsive landing page for Fly Social's healthcare GMB automation solution.

## Features

- ✅ Fully responsive design
- ✅ Modern UI with Tailwind CSS
- ✅ Healthcare-focused content
- ✅ Built with Next.js 15
- ✅ TypeScript support
- ✅ Ready for deployment

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the healthcare page.

The page will automatically redirect from `/` to `/healthcare`.

### Build for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push this repository to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect Next.js and deploy

### Environment Variables

No environment variables required for basic deployment.

## Project Structure

```
fly-social-healthcare/
├── app/
│   ├── healthcare/
│   │   └── page.tsx          # Main healthcare landing page
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Root page (redirects to /healthcare)
│   └── globals.css            # Global styles
├── public/                    # Static assets (if needed)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Features Included

### Healthcare Page Sections:

1. **Hero Section** - Main value proposition with CTA buttons
2. **Stats Section** - Key metrics (10,000+ providers, 95% satisfaction, etc.)
3. **Features Section** - 6 core features with icons
4. **Benefits Section** - Why choose Fly Social
5. **Pricing Section** - 3 pricing tiers (Starter, Professional, Enterprise)
6. **CTA Section** - Final call-to-action
7. **Footer** - Links and company information

### Technologies:

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Responsive Design
- SEO Optimized

## Customization

To modify the healthcare page content, edit:
- `app/healthcare/page.tsx`

To change global styles:
- `app/globals.css`
- `tailwind.config.ts`

## Later - Point to Live

Once you're ready to connect this to your live domain (www.fly-social.com):

1. Deploy this project to Vercel
2. Add your custom domain in Vercel settings
3. Update DNS records to point to Vercel
4. SSL certificate will be automatically provisioned

## License

Private - Fly Social Healthcare
