# 👥 Team Collaboration Guide - Fly Social Healthcare

## 🎯 Goal
Enable your team to view, edit, and deploy changes to the Fly Social Healthcare website.

---

## 📋 Quick Setup (Choose Your Method)

### Method 1: Full Collaboration (Recommended)
**Best for:** Team members who will make regular changes
**Time:** 15 minutes setup
**Result:** Team can edit, test locally, and deploy

### Method 2: Vercel-Only Editing
**Best for:** Quick content changes without coding
**Time:** 5 minutes setup
**Result:** Team can deploy via Vercel dashboard

---

# 🚀 Method 1: Full Collaboration Setup

## Step 1: Push to GitHub (You do this once)

```bash
# Navigate to project
cd /Users/manu/Projects/Git/GitHub/fly-social-healthcare

# Create repository on GitHub first:
# 1. Go to: https://github.com/new
# 2. Name: fly-social-healthcare
# 3. Keep it Private (recommended) or Public
# 4. Click "Create repository"

# Then run these commands:
git remote add origin https://github.com/YOUR_USERNAME/fly-social-healthcare.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

## Step 2: Deploy to Vercel (You do this once)

```bash
# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

**Save the URL you get!** It will be something like:
`https://fly-social-healthcare.vercel.app`

---

## Step 3: Connect GitHub to Vercel (Auto-Deploy)

1. Go to **https://vercel.com/dashboard**
2. Click on your **fly-social-healthcare** project
3. Go to **Settings** → **Git**
4. Click **"Connect Git Repository"**
5. Select your GitHub repository
6. Click **"Connect"**

**Now:** Every push to GitHub automatically deploys to Vercel! 🎉

---

## Step 4: Add Team Members to GitHub

### Option A: Add as Collaborators (Private Repo)

1. Go to your GitHub repo: `https://github.com/YOUR_USERNAME/fly-social-healthcare`
2. Click **Settings** → **Collaborators**
3. Click **"Add people"**
4. Enter their GitHub username or email
5. They'll receive an invitation email

### Option B: Create an Organization (For larger teams)

1. Go to: https://github.com/organizations/plan
2. Create a free organization
3. Transfer repository to organization
4. Add team members

---

## Step 5: Team Member Setup (They do this)

### For Each Team Member:

**A. Accept GitHub Invitation**
- Check email for GitHub invitation
- Click "Accept invitation"

**B. Clone the Repository**
```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/fly-social-healthcare.git

# Navigate to project
cd fly-social-healthcare

# Install dependencies
npm install
```

**C. Run Development Server**
```bash
npm run dev
```

Open browser: **http://localhost:3000/healthcare**

**D. Make Changes**
- Edit files in `app/healthcare/page.tsx` (or any other file)
- Save the file
- Browser auto-refreshes with changes

**E. Deploy Changes**
```bash
# Save changes
git add .
git commit -m "Updated pricing/features/content"

# Push to GitHub (auto-deploys to Vercel)
git push
```

**Wait 2-3 minutes** → Changes are live!

---

## 🎨 What Team Members Can Edit

### Main Landing Page
**File:** `app/healthcare/page.tsx`

**Easy Changes:**
- **Line 88:** Hero tagline
- **Line 387-388:** Starter plan price
- **Line 475-476:** Growth plan price
- **Line 438-504:** Starter plan features
- **Line 559-593:** Growth plan features
- **Line 78:** Banner text (14-day trial message)
- **Line 721:** Email address

**Feature Descriptions:**
**File:** `app/healthcare/page.tsx` (Lines 8-20)
- Edit the text in the `featureDescriptions` object

### Global Styles
**File:** `app/globals.css`
- Colors, fonts, spacing

### Configuration
**File:** `tailwind.config.ts`
- Design tokens, theme colors

---

## 📝 Team Workflow Example

### Sarah (Designer) wants to change the hero image:

1. **Edit locally:**
   ```bash
   cd fly-social-healthcare
   code app/healthcare/page.tsx  # Opens in VS Code
   ```

2. **Make changes** (around line 115-120)

3. **Test locally:**
   ```bash
   npm run dev
   # Visit: http://localhost:3000/healthcare
   ```

4. **Deploy:**
   ```bash
   git add .
   git commit -m "Updated hero image"
   git push
   ```

5. **Done!** Changes live in 2-3 minutes at your Vercel URL

---

### Mike (Marketing) wants to update pricing:

1. Open `app/healthcare/page.tsx`
2. Find line 387: Change `$29` to `$39`
3. Find line 475: Change `$49` to `$59`
4. Save, commit, push
5. Live in 2 minutes!

---

## 🔐 Team Permissions

### GitHub Collaborators Can:
- ✅ Clone repository
- ✅ Make changes locally
- ✅ Push to main branch
- ✅ Trigger auto-deployments
- ✅ View all code and history

### Vercel Team Members Can:
- ✅ View deployments
- ✅ See analytics
- ✅ Rollback to previous versions
- ✅ Configure domains
- ✅ View logs

---

## 🛡️ Best Practices

### 1. Always Test Locally First
```bash
npm run dev
# Check http://localhost:3000/healthcare
```

### 2. Use Descriptive Commit Messages
```bash
# Good
git commit -m "Updated pricing from $29 to $39"

# Bad
git commit -m "changes"
```

### 3. Pull Before Making Changes
```bash
git pull  # Get latest changes from team
# Then make your changes
```

### 4. Create Branches for Big Changes (Optional)
```bash
git checkout -b feature/new-pricing
# Make changes
git push origin feature/new-pricing
# Create Pull Request on GitHub
```

---

## 🆘 Common Issues & Solutions

### Issue: "Permission denied"
**Solution:** You haven't been added as collaborator. Contact repo owner.

### Issue: "Conflict when pushing"
**Solution:**
```bash
git pull --rebase
# Resolve conflicts
git push
```

### Issue: "Changes not showing on live site"
**Solution:**
- Wait 2-3 minutes for deployment
- Check Vercel dashboard: https://vercel.com/dashboard
- Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

### Issue: "npm install fails"
**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📱 Vercel Mobile App (Optional)

Team can monitor deployments on mobile:
- iOS: https://apps.apple.com/app/vercel/id1538781652
- Android: https://play.google.com/store/apps/details?id=com.vercel.app

---

## 🎓 Quick Training for Non-Technical Team

### For Content Editors (No Coding):

**What you need:**
- GitHub account
- VS Code (free): https://code.visualstudio.com/
- Git installed: https://git-scm.com/

**Basic workflow:**
1. Open VS Code
2. Open folder: `fly-social-healthcare`
3. Find file: `app/healthcare/page.tsx`
4. Press Cmd+F (Mac) or Ctrl+F (Windows) to search
5. Edit text in quotes: `"Old text"` → `"New text"`
6. Save file (Cmd+S or Ctrl+S)
7. In VS Code terminal:
   ```bash
   git add .
   git commit -m "Updated text"
   git push
   ```

**Video tutorials to share:**
- Git basics: https://www.youtube.com/watch?v=HVsySz-h9r4
- VS Code basics: https://www.youtube.com/watch?v=B-s71n0dHUk

---

## 📊 Team Dashboard Access

### Vercel Dashboard
- URL: https://vercel.com/dashboard
- See: Deployments, analytics, logs
- Add team: Settings → Team

### GitHub Repository
- URL: `https://github.com/YOUR_USERNAME/fly-social-healthcare`
- See: Code, commits, pull requests
- Add collaborators: Settings → Collaborators

---

## ✅ Checklist for You (Repo Owner)

- [ ] Push code to GitHub
- [ ] Deploy to Vercel with `vercel --prod`
- [ ] Connect GitHub to Vercel (auto-deploy)
- [ ] Add team members to GitHub repo
- [ ] Add team members to Vercel project (optional)
- [ ] Share this guide with team
- [ ] Share live URL with team
- [ ] Share GitHub repo URL with team

---

## 🚀 Alternative: Quick Web-Based Editing

For simple text changes, team can use **GitHub's web editor**:

1. Go to: `https://github.com/YOUR_USERNAME/fly-social-healthcare`
2. Navigate to: `app/healthcare/page.tsx`
3. Click **pencil icon** (Edit this file)
4. Make changes
5. Click **"Commit changes"**
6. Auto-deploys to Vercel!

**No local setup needed!** ✨

---

## 📞 Support

**If team members get stuck:**
1. Check this guide
2. Check GitHub Issues tab
3. Contact you (repo owner)
4. Ask me for help!

---

## 🎉 You're All Set!

**Next steps:**
1. Run the commands in Step 1 to push to GitHub
2. Run `vercel --prod` to deploy
3. Add team members
4. Share this guide with them
5. Start collaborating!

**Questions?** Let me know and I'll help! 🚀
