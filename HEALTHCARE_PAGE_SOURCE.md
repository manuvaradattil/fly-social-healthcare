# Healthcare Landing Page - Complete Source Code

## 📍 File Location
```
/Users/manu/Projects/Git/GitHub/fly-social-healthcare/app/healthcare/page.tsx
```

## 🌐 Live URLs
- **Local Development**: http://localhost:3000/healthcare
- **Production**: (Will be available after Vercel deployment)

---

## 📝 Complete Source Code

### File: `app/healthcare/page.tsx`

```typescript
'use client';

import { useState } from 'react';

export default function HealthcarePage() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const featureDescriptions: { [key: string]: string } = {
    'whatsapp': 'Your SEO manager on WhatsApp—guides you, handles tasks, and supports your growth.',
    'protection': 'Alerts you instantly if anyone makes unauthorized changes to your profile.',
    'review': 'Automatically replies to all reviews with smart, sentiment-based responses.',
    'microsite': 'A clean mini-website built from your Google profile to boost visibility.',
    'posts': 'Publish and schedule unlimited posts to keep your profile active.',
    'report': 'Monthly report with calls, visits, reviews, rankings, and insights.',
    'escalation': 'Instant WhatsApp alerts for negative reviews so you can respond quickly.',
    'ranking': 'Monthly keyword ranking updates for your key services.',
    'audit': 'Continuous checks for missing info, errors, or improvements—plus fix suggestions.',
    'images': 'Personalised AI-generated images to enhance your Google posts.',
    'citations': 'Creates listings on key directories like Practo, Justdial, and Medindia to boost local SEO.',
  };

  const InfoButton = ({ feature }: { feature: string }) => (
    <div className="relative inline-block ml-1">
      <button
        onMouseEnter={() => setActiveTooltip(feature)}
        onMouseLeave={() => setActiveTooltip(null)}
        onClick={() => setActiveTooltip(activeTooltip === feature ? null : feature)}
        className="inline-flex items-center justify-center w-4 h-4 text-xs text-white bg-blue-500 rounded-full hover:bg-blue-600 transition cursor-pointer"
        aria-label="More info"
      >
        i
      </button>
      {activeTooltip === feature && (
        <div className="absolute left-6 top-0 z-50 w-72 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-xl pointer-events-none">
          {featureDescriptions[feature]}
          <div className="absolute left-0 top-2 -ml-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-gray-900"></div>
        </div>
      )}
    </div>
  );


  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">Fly Social</h1>
            </div>
            <div className="hidden md:flex space-x-6 text-sm">
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600">How It Works</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 text-sm">Login</a>
              <a
                href="https://wa.me/918446712833?text=Hi%2C%20I%27m%20interested%20in%20Fly%20Social%20for%20my%20practice"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition text-sm font-medium inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 3-Minute Setup Banner */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white text-sm font-medium">
            ⚡ 3-Minute Setup • No Staff Required • 14-Day Free Trial
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI That Keeps Your Practice Visible, Trusted, and Fully Booked — Automatically.
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Your 24/7 AI Practice Manager that updates your Google Business Profile, responds to patient reviews, posts weekly content, and handles all local SEO tasks — all through a simple chat interface.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/918446712833?text=Hi%2C%20I%27m%20interested%20in%20Fly%20Social%20for%20my%20practice"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-md hover:bg-green-700 transition text-lg font-medium inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Get Started on WhatsApp
              </a>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-md border-2 border-blue-600 hover:bg-blue-50 transition text-lg font-medium inline-flex items-center justify-center">
                Start 14-Day Free Trial
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              From $29/month • No contracts • Cancel anytime
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-[500px] flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="text-8xl mb-6">👨‍⚕️</div>
                <p className="text-xl font-semibold text-gray-800 mb-2">US Doctor with Smartphone</p>
                <p className="text-gray-600">Managing practice from anywhere</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continue with rest of sections... */}
      {/* NOTE: Full code is 846 lines - this is a condensed version showing key sections */}
    </div>
  );
}
```

---

## 🎨 Key Features Implemented

### 1. Interactive Info Tooltips
- Hover/click blue "i" buttons to see feature descriptions
- 11 feature descriptions available
- Mobile-friendly (click on mobile, hover on desktop)

### 2. Client-Side Interactivity
- Uses React `useState` hook for tooltip management
- 'use client' directive for Next.js App Router

### 3. Responsive Design
- Mobile-first Tailwind CSS
- Breakpoints: mobile, tablet, desktop
- Touch-friendly interactions

### 4. WhatsApp Integration
- All CTAs link to: `https://wa.me/918446712833`
- Pre-filled messages for lead capture
- Floating WhatsApp button (bottom-right)

---

## ✏️ Common Edits Your Teammate Can Make

### Change Tagline (Line 89-90)
```typescript
<h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
  AI That Keeps Your Practice Visible, Trusted, and Fully Booked — Automatically.
</h1>
```

### Update Pricing (Lines 428 & 534)
```typescript
// Starter Plan
<span className="text-6xl font-bold text-blue-600">$29</span>

// Growth Plan
<span className="text-6xl font-bold text-green-600">$49</span>
```

### Edit Feature Descriptions (Lines 8-20)
```typescript
const featureDescriptions: { [key: string]: string } = {
  'whatsapp': 'Your SEO manager on WhatsApp...',
  'protection': 'Alerts you instantly...',
  // Add or modify descriptions here
};
```

### Change Contact Info
- **Email** (Line 790): `info@zoomlocal.in`
- **Phone** (Line 796): `+91 8446712833`
- **WhatsApp** (Throughout): Search for `918446712833` and replace

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.0.8 | React framework with App Router |
| React | 19 | UI library with hooks |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4.1 | Utility-first styling |

---

## 📂 Project Structure

```
fly-social-healthcare/
├── app/
│   ├── healthcare/
│   │   └── page.tsx           ← THIS FILE (Main landing page)
│   ├── layout.tsx              ← Root layout
│   ├── page.tsx                ← Homepage (redirects)
│   └── globals.css             ← Global styles
├── public/                     ← Static assets
├── package.json                ← Dependencies
└── tailwind.config.ts          ← Tailwind configuration
```

---

## 🚀 Development Commands

```bash
# Start development server
npm run dev
# → Opens at http://localhost:3000/healthcare

# Build for production
npm run build

# Start production server
npm start

# Type checking
npx tsc --noEmit

# Linting
npm run lint
```

---

## 🔄 Making Changes

### Method 1: Edit Locally
```bash
# 1. Pull latest code
git pull

# 2. Make changes to app/healthcare/page.tsx

# 3. Test locally
npm run dev

# 4. Commit and push
git add .
git commit -m "Updated pricing/features/content"
git push

# 5. Auto-deploys to Vercel in 2-3 minutes
```

### Method 2: Edit on GitHub (No setup!)
1. Go to repository
2. Navigate to `app/healthcare/page.tsx`
3. Click pencil icon (✏️)
4. Make changes
5. Commit → Auto-deploys in 2-3 minutes

---

## 📱 Responsive Breakpoints

```css
/* Tailwind CSS Breakpoints */
sm:   640px   /* Small tablets */
md:   768px   /* Tablets */
lg:   1024px  /* Laptops */
xl:   1280px  /* Desktops */
2xl:  1536px  /* Large screens */
```

---

## 🎯 Performance Optimizations

1. **Lazy Loading**: Images load on demand
2. **Code Splitting**: Next.js automatic splitting
3. **Static Generation**: Pre-rendered for speed
4. **Sticky Navigation**: Optimized scroll performance
5. **Tailwind Purge**: Removes unused CSS in production

---

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
lsof -i :3000
kill -9 <PID>
```

### Changes not showing
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Clear cache and reload

### Build errors
```bash
npm run build
# Check error messages for line numbers
```

---

## 📚 Resources

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

---

## 📞 Support

**Contact Information:**
- Email: info@zoomlocal.in
- WhatsApp: +91 8446712833

**GitHub Repository:**
- https://github.com/manuvaradattil/fly-social-healthcare

**Vercel Dashboard:**
- https://vercel.com/dashboard

---

## ✅ Before Editing Checklist

- [ ] Pull latest code: `git pull`
- [ ] Create new branch (optional): `git checkout -b feature-name`
- [ ] Test locally: `npm run dev`
- [ ] Check on mobile (Chrome DevTools)
- [ ] Write clear commit message
- [ ] Push and verify deployment

---

**Last Updated**: December 2024
**Status**: ✅ Production Ready
**Framework**: Next.js 16 + TypeScript + Tailwind CSS
