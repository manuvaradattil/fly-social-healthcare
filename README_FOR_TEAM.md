# 🏥 Fly Social Healthcare - Website Source Code

Welcome to the Fly Social Healthcare landing page repository!

## 🌐 Live Website
**URL:** (Will be added after deployment)

## 📁 Source Code Location
```
/Users/manu/Projects/Git/GitHub/fly-social-healthcare
```

## 🎯 What This Website Does

A modern, responsive landing page for Fly Social's healthcare GMB automation solution featuring:

- ✅ AI-powered practice management messaging
- ✅ Interactive pricing with info tooltips
- ✅ 14-day free trial prominently displayed
- ✅ WhatsApp integration for lead generation
- ✅ Mobile-responsive design
- ✅ Trust badges and social proof
- ✅ US healthcare-focused content

---

## 🚀 Quick Start for Team Members

### Option 1: Edit Online (Easiest - No Setup!)

1. Get access from repository owner
2. Go to GitHub repository
3. Navigate to file you want to edit
4. Click the pencil icon (✏️)
5. Make changes
6. Commit → Auto-deploys in 2 minutes!

### Option 2: Edit Locally (Full Control)

**One-time setup:**
```bash
# Clone repository
git clone https://github.com/USERNAME/fly-social-healthcare.git

# Install dependencies
cd fly-social-healthcare
npm install

# Start development server
npm run dev
```

**Make changes:**
1. Edit files in your code editor
2. View at http://localhost:3000/healthcare
3. Deploy:
```bash
git add .
git commit -m "Your change description"
git push
```

---

## 📂 Project Structure

```
fly-social-healthcare/
├── app/
│   ├── healthcare/
│   │   └── page.tsx          ← Main landing page (EDIT THIS!)
│   ├── layout.tsx             ← Root layout
│   ├── page.tsx               ← Homepage (redirects to /healthcare)
│   └── globals.css            ← Global styles
├── public/                    ← Static files (images, etc)
├── package.json               ← Dependencies
├── tailwind.config.ts         ← Styling configuration
└── next.config.ts             ← Next.js configuration
```

---

## ✏️ Common Edits

### 1. Change Hero Tagline
**File:** `app/healthcare/page.tsx`
**Line:** 88-89
```typescript
<h1 className="...">
  AI That Keeps Your Practice Visible, Trusted, and Fully Booked — Automatically.
</h1>
```

### 2. Update Pricing
**File:** `app/healthcare/page.tsx`
- **Line 387:** Starter plan price (`$29`)
- **Line 475:** Growth plan price (`$49`)

### 3. Edit Feature Descriptions
**File:** `app/healthcare/page.tsx`
**Lines:** 8-20
```typescript
const featureDescriptions = {
  'whatsapp': 'Your SEO manager on WhatsApp...',
  'protection': 'Alerts you instantly...',
  // ... add or edit descriptions
};
```

### 4. Change Contact Information
**File:** `app/healthcare/page.tsx`
- **Line 721:** Email (`info@zoomlocal.in`)
- **Line 727:** Phone (`+91 8446712833`)

### 5. Update WhatsApp Number
**File:** `app/healthcare/page.tsx`
Search for: `918446712833`
Replace with your WhatsApp number (include country code)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | React framework |
| React 19 | UI library |
| TypeScript | Type safety |
| Tailwind CSS 3 | Styling |
| Vercel | Hosting & deployment |

---

## 🎨 Key Features

### 1. Interactive Info Buttons
Hover over the (i) icons in the pricing section to see detailed feature descriptions.

**Implementation:**
- React `useState` hook for tooltip state
- Hover and click interactions
- Mobile-friendly

### 2. Responsive Design
- Mobile-first approach
- Breakpoints: mobile, tablet, desktop
- Touch-friendly interactions

### 3. WhatsApp Integration
All CTAs link to WhatsApp with pre-filled messages for easy lead capture.

### 4. Trust Badges
Footer section with:
- Google Partner badge
- 1500+ Locations stat
- Protection guarantee

---

## 📱 Development Commands

```bash
# Install dependencies
npm install

# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

---

## 🔄 Deployment Workflow

### Automatic (Recommended)
1. Make changes locally or on GitHub
2. Commit and push to `main` branch
3. Vercel automatically deploys
4. Live in 2-3 minutes! ✨

### Manual
```bash
# Deploy to Vercel
vercel --prod
```

---

## 👥 Team Collaboration

### For Repository Owner:
1. Add team members on GitHub: Settings → Collaborators
2. Add team members on Vercel: Settings → Team
3. Share this README with them

### For Team Members:
1. Accept GitHub invitation
2. Clone repository
3. Make changes
4. Push to deploy

**See full guide:** `SIMPLE_STEPS_FOR_TEAM.md`

---

## 🐛 Troubleshooting

### Development server won't start
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Changes not showing on live site
- Wait 2-3 minutes for Vercel deployment
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Check Vercel dashboard: https://vercel.com/dashboard

### Port 3000 already in use
```bash
lsof -i :3000
kill -9 <PID>
```

### Git push rejected
```bash
git pull --rebase
git push
```

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `README_FOR_TEAM.md` | This file - overview |
| `SIMPLE_STEPS_FOR_TEAM.md` | Quick start guide |
| `TEAM_COLLABORATION_GUIDE.md` | Detailed collaboration guide |
| `DEPLOYMENT_INSTRUCTIONS.md` | Full deployment guide |
| `QUICK_DEPLOY.md` | Vercel deployment steps |
| `SHARE_WITH_TEAM.md` | Sharing & access guide |

---

## 🔐 Access & Permissions

### What You Need:
1. **GitHub account** - For code access
2. **VS Code** (optional) - For editing locally
3. **Node.js** (optional) - For local development

### Permissions:
- **Read:** View code and documentation
- **Write:** Make changes and deploy
- **Admin:** Manage team and settings

---

## 🆘 Getting Help

### Resources:
- **GitHub Issues:** Report bugs or request features
- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs

### Contact:
- Repository owner for access issues
- Team lead for content questions
- Developer for technical issues

---

## ✅ Before Making Changes

1. ✅ Pull latest code: `git pull`
2. ✅ Test locally: `npm run dev`
3. ✅ Check on mobile (Chrome DevTools)
4. ✅ Write clear commit message
5. ✅ Push and verify deployment

---

## 🎉 You're Ready!

This codebase is now yours to work with. Make it amazing!

**Questions?** Check the documentation files or ask the team lead.

---

**Project:** Fly Social Healthcare Landing Page
**Framework:** Next.js 15 + TypeScript + Tailwind CSS
**Status:** ✅ Production Ready
**Last Updated:** December 2024
