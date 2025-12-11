# Fly Social Healthcare - Team Deployment Guide

Your Fly Social Healthcare landing page is ready to deploy! Here are the easiest options for your team to collaborate.

---

## 🚀 Option 1: Deploy to Vercel (Recommended - 5 minutes)

Vercel is the best option for Next.js projects and offers free hosting with automatic deployments.

### Step 1: Push to GitHub

```bash
cd /Users/manu/Projects/Git/GitHub/fly-social-healthcare

# Create a new repository on GitHub (go to github.com/new)
# Name it: fly-social-healthcare

# Then run these commands:
git remote add origin https://github.com/YOUR_USERNAME/fly-social-healthcare.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to **https://vercel.com/signup** (sign in with GitHub)
2. Click **"Add New Project"**
3. Select your **fly-social-healthcare** repository
4. Click **"Deploy"** (Vercel auto-detects Next.js settings)
5. Wait 2-3 minutes for deployment ✅

### Step 3: Get Your Live URL

After deployment completes, Vercel will give you a URL like:
```
https://fly-social-healthcare.vercel.app
```

**Share this URL with your team!** They can view and test the site immediately.

### Step 4: Team Collaboration

**Option A - Vercel Teams (Recommended):**
- In Vercel dashboard, go to Settings → Team
- Invite team members by email
- They can make changes and deploy updates

**Option B - GitHub Collaboration:**
- Add team members as collaborators on GitHub
- They can make changes locally
- Push to GitHub → Vercel auto-deploys (takes ~2 minutes)

---

## 🌐 Option 2: Deploy to Netlify (Alternative)

Another great free hosting option:

1. Go to **https://app.netlify.com/signup**
2. Connect your GitHub repository
3. Click **"Deploy site"**
4. Get your live URL: `https://fly-social-healthcare.netlify.app`

---

## 💻 Option 3: Share Development Server (Quick Test Only)

If you just want your team to see the current version temporarily:

### Using ngrok (Easiest):

```bash
# Install ngrok
brew install ngrok  # On Mac

# Start your dev server (already running on port 3000)
# In a new terminal:
ngrok http 3000
```

This gives you a public URL like: `https://abc123.ngrok.io`

**⚠️ Warning:** This URL only works while your computer is on and ngrok is running. Not suitable for permanent sharing.

---

## 📝 Recommended Workflow for Team

1. **Deploy to Vercel** (permanent, auto-deploys)
2. **Add team to GitHub repo** (for code changes)
3. **Team workflow:**
   - Make changes locally
   - Test at `localhost:3000`
   - Commit and push to GitHub
   - Vercel auto-deploys in 2 minutes
   - Check live site at your Vercel URL

---

## 🔧 Local Development for Team Members

For team members to work on the site locally:

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/fly-social-healthcare.git
cd fly-social-healthcare

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open browser
# Visit: http://localhost:3000/healthcare
```

---

## 🎯 Current Features

✅ Updated tagline: "AI That Keeps Your Practice Visible, Trusted, and Fully Booked — Automatically."
✅ Interactive info (i) buttons on pricing features
✅ 14-day free trial prominently displayed
✅ Trust badges section
✅ Mobile responsive design
✅ WhatsApp integration
✅ US-focused healthcare content

---

## 📞 Next Steps

1. **Push to GitHub** (see commands above)
2. **Deploy to Vercel** (5 minutes)
3. **Share the live URL** with your team
4. **Add collaborators** on GitHub/Vercel
5. **Start testing** and making changes!

---

## 🆘 Need Help?

**If you need me to:**
1. Create the GitHub repository for you
2. Set up automatic deployments
3. Configure team access
4. Add custom domain (www.fly-social.com)

Just let me know! I can help with any of these steps.

---

**Your project is at:** `/Users/manu/Projects/Git/GitHub/fly-social-healthcare`
**Dev server running at:** `http://localhost:3000/healthcare`
