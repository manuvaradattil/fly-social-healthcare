# 🚀 Quick Deploy to Vercel - 3 Simple Steps

## Step 1: Login to Vercel (One-time)

```bash
vercel login
```

This will open your browser. Choose one of these login options:
- Continue with GitHub (recommended)
- Continue with GitLab
- Continue with Bitbucket
- Continue with Email

## Step 2: Deploy Your Site

```bash
cd /Users/manu/Projects/Git/GitHub/fly-social-healthcare
vercel
```

**Follow the prompts:**
1. Set up and deploy? → **Yes**
2. Which scope? → Choose your account
3. Link to existing project? → **No**
4. What's your project's name? → **fly-social-healthcare** (press Enter)
5. In which directory is your code located? → **./** (press Enter)
6. Want to override settings? → **No**

**Wait 2-3 minutes...** ⏳

## Step 3: Get Your Live URL

After deployment completes, you'll see:
```
✅ Deployed to production:
https://fly-social-healthcare.vercel.app
```

**🎉 Done! Share this URL with your team!**

---

## 🔄 Update Your Site (Anytime)

Whenever you make changes:

```bash
# Save your changes
git add .
git commit -m "Updated pricing/features/etc"

# Deploy
vercel --prod
```

New version goes live in ~2 minutes!

---

## 👥 Add Team Members

### Option 1: Via Vercel Dashboard (Easiest)
1. Go to https://vercel.com/dashboard
2. Click on your **fly-social-healthcare** project
3. Go to **Settings** → **Team**
4. Click **"Invite Member"**
5. Enter their email address
6. They can now deploy and manage the site!

### Option 2: Via GitHub (Code Access)
1. Create a GitHub repository (see DEPLOYMENT_INSTRUCTIONS.md)
2. Add team members as collaborators
3. Connect Vercel to GitHub
4. Every push auto-deploys!

---

## 🌐 Add Custom Domain (Optional)

To use **www.fly-social.com** instead of vercel.app:

1. In Vercel Dashboard → Project Settings → **Domains**
2. Click **"Add Domain"**
3. Enter: `www.fly-social.com`
4. Follow DNS instructions
5. SSL certificate added automatically ✅

---

## 📱 Your Team's Workflow

**For Viewers (No Coding):**
- Just visit the live URL
- View and test features
- Provide feedback

**For Editors (Making Changes):**
1. Edit files locally
2. Test at `localhost:3000`
3. Deploy with `vercel --prod`
4. Changes live in 2 minutes!

---

## 💡 Pro Tips

**Preview Deployments:**
- Run `vercel` (without --prod) for preview URLs
- Test changes before going live
- Share preview URLs with team for review

**Production Deployments:**
- Run `vercel --prod` to deploy to your main URL
- Always test with preview first!

**Check Deployment Status:**
```bash
vercel list
vercel inspect fly-social-healthcare
```

---

## 🆘 Quick Commands Reference

```bash
# Login (first time only)
vercel login

# Deploy preview
vercel

# Deploy to production
vercel --prod

# List all deployments
vercel list

# Open dashboard
vercel inspect

# See logs
vercel logs
```

---

**Ready to deploy? Just run:**
```bash
vercel login
vercel
```

**That's it!** 🚀
