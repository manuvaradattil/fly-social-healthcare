# 🚀 Simple Steps for Team to Edit Website

## For You (Owner) - Do This Once:

### Step 1: Push Code to GitHub (5 minutes)

```bash
# 1. Create a new repository on GitHub
# Go to: https://github.com/new
# - Repository name: fly-social-healthcare
# - Private or Public: Your choice
# - Click "Create repository"

# 2. Push your code (run these commands):
cd /Users/manu/Projects/Git/GitHub/fly-social-healthcare

git remote add origin https://github.com/YOUR_USERNAME/fly-social-healthcare.git
git push -u origin main
```

**Replace `YOUR_USERNAME` with your GitHub username!**

### Step 2: Deploy to Vercel (2 minutes)

```bash
vercel login
vercel --prod
```

**Save the URL!** Example: `https://fly-social-healthcare.vercel.app`

### Step 3: Add Team Members

**On GitHub:**
1. Go to: `https://github.com/YOUR_USERNAME/fly-social-healthcare/settings/access`
2. Click "Add people"
3. Enter their GitHub username or email
4. Click "Add to repository"

---

## For Your Team Members:

### Option 1: Edit Online (No Setup Needed!) ✨

**Perfect for:** Quick text changes, pricing updates

1. Go to GitHub repo (URL shared by owner)
2. Click on `app/healthcare/page.tsx`
3. Click the **pencil icon** (✏️) to edit
4. Make your changes
5. Scroll down, add commit message
6. Click **"Commit changes"**
7. **Wait 2-3 minutes** → Live on website!

**That's it! No downloads, no setup!**

---

### Option 2: Edit Locally (Full Control) 💻

**Perfect for:** Multiple changes, testing before going live

#### First-Time Setup (15 minutes):

**A. Install Required Software:**
1. **Git:** https://git-scm.com/downloads
2. **VS Code:** https://code.visualstudio.com/
3. **Node.js:** https://nodejs.org/ (Download LTS version)

**B. Clone the Repository:**
```bash
# Open Terminal (Mac) or Command Prompt (Windows)
git clone https://github.com/OWNER_USERNAME/fly-social-healthcare.git
cd fly-social-healthcare
npm install
```

**C. Start Development Server:**
```bash
npm run dev
```

Open browser: **http://localhost:3000/healthcare**

#### Making Changes (Every Time):

1. **Edit files** in VS Code
   - Main file: `app/healthcare/page.tsx`

2. **See changes instantly** in browser (auto-refreshes)

3. **Deploy to live site:**
```bash
git add .
git commit -m "Describe what you changed"
git push
```

4. **Wait 2-3 minutes** → Changes are live!

---

## 📝 Common Changes You'll Make:

### Change Pricing:
**File:** `app/healthcare/page.tsx`
- **Line 387:** Starter plan price: `$29`
- **Line 475:** Growth plan price: `$49`

### Change Tagline:
**File:** `app/healthcare/page.tsx`
- **Line 88-89:** Main hero text

### Change Features:
**File:** `app/healthcare/page.tsx`
- **Lines 438-504:** Starter plan features
- **Lines 559-593:** Growth plan features

### Change Info Button Descriptions:
**File:** `app/healthcare/page.tsx`
- **Lines 8-20:** Feature descriptions

### Change Email:
**File:** `app/healthcare/page.tsx`
- **Line 721:** Contact email

### Change Phone:
**File:** `app/healthcare/page.tsx`
- **Line 727:** Contact phone

---

## 🎯 Example: Change Pricing from $29 to $39

### Option 1: Edit on GitHub (Easy):
1. Go to repo → `app/healthcare/page.tsx`
2. Click edit (✏️)
3. Press Cmd+F (Mac) or Ctrl+F (Windows)
4. Search for: `$29`
5. Change to: `$39`
6. Commit changes
7. Done! Live in 2 minutes

### Option 2: Edit Locally:
1. Open VS Code
2. Open `app/healthcare/page.tsx`
3. Press Cmd+F, search `$29`
4. Change to `$39`
5. Save file
6. Run:
```bash
git add .
git commit -m "Updated starter plan to $39"
git push
```
7. Done! Live in 2 minutes

---

## 🆘 Help & Tips

### "I don't see my changes on the live site"
- Wait 2-3 minutes for deployment
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Check Vercel dashboard: https://vercel.com/dashboard

### "I made a mistake"
- Contact repo owner to rollback
- Or: revert your changes and push again

### "Permission denied"
- You need to be added as collaborator
- Contact the repository owner

---

## 📞 Resources

**GitHub Repository:**
`https://github.com/YOUR_USERNAME/fly-social-healthcare`

**Live Website:**
`https://fly-social-healthcare.vercel.app` (or your custom domain)

**Vercel Dashboard:**
https://vercel.com/dashboard

**Git Basics Tutorial:**
https://www.youtube.com/watch?v=HVsySz-h9r4

**VS Code Tutorial:**
https://www.youtube.com/watch?v=B-s71n0dHUk

---

## ✅ Quick Reference

| Task | Command |
|------|---------|
| Get latest code | `git pull` |
| See what changed | `git status` |
| Save changes | `git add .` |
| Commit changes | `git commit -m "message"` |
| Deploy to live | `git push` |
| Start dev server | `npm run dev` |
| Stop dev server | Press `Ctrl+C` |

---

**You're ready!** Start making changes and building an amazing healthcare landing page! 🎉
