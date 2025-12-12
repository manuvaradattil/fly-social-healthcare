# 🚀 Teammate Setup Guide - Get Started in 15 Minutes

## What You'll Be Able To Do:
✅ Edit the healthcare landing page
✅ See changes live on your computer
✅ Push changes that go live automatically
✅ Work without breaking anything

---

## 📋 Prerequisites (Install These First)

### 1. Install Git
**Mac:**
```bash
# Check if already installed
git --version

# If not installed, install via Homebrew
brew install git
# OR download from: https://git-scm.com/downloads
```

**Windows:**
- Download and install: https://git-scm.com/download/win
- Use default settings during installation

### 2. Install Node.js (v18 or higher)
- Download from: https://nodejs.org/
- Choose **LTS version** (Long Term Support)
- Verify installation:
```bash
node --version
npm --version
```

### 3. Install VS Code (Recommended Editor)
- Download from: https://code.visualstudio.com/
- Install these extensions (optional but helpful):
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense

---

## 🎯 Step 1: Get Access to GitHub Repository

### Ask Repository Owner For:
1. **GitHub Repository Access**
   - Owner needs to add you as collaborator
   - You'll receive email invitation
   - Click "Accept Invitation"

2. **Repository URL**:
   ```
   https://github.com/manuvaradattil/fly-social-healthcare
   ```

---

## 💻 Step 2: Clone Repository to Your Computer

### Open Terminal (Mac) or Command Prompt (Windows)

```bash
# Navigate to where you want the project
cd ~/Projects
# OR on Windows: cd C:\Users\YourName\Projects

# Clone the repository
git clone https://github.com/manuvaradattil/fly-social-healthcare.git

# Enter the project folder
cd fly-social-healthcare
```

**✅ Success**: You should see all project files in this folder

---

## 📦 Step 3: Install Dependencies

```bash
# Make sure you're in the project folder
cd fly-social-healthcare

# Install all required packages (takes 2-3 minutes)
npm install
```

**Wait for**: "added XXX packages" message

---

## 🚀 Step 4: Start Development Server

```bash
# Start the local development server
npm run dev
```

**You should see:**
```
✓ Ready in 2.3s
○ Local:   http://localhost:3000
```

### Open in Browser:
- Go to: **http://localhost:3000/healthcare**
- You should see the full landing page!

**🎉 You're now running the website on your computer!**

---

## ✏️ Step 5: Make Your First Edit

### Test Edit - Change the Tagline

1. **Open VS Code:**
```bash
code .
```
*This opens VS Code in current project folder*

2. **Navigate to file:**
   - Click: `app` → `healthcare` → `page.tsx`

3. **Find line 89-90** (the hero tagline):
```typescript
<h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
  AI That Keeps Your Practice Visible, Trusted, and Fully Booked — Automatically.
</h1>
```

4. **Make a small change** (for testing):
```typescript
<h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
  AI That Keeps Your Practice Visible, Trusted, and Fully Booked — Automatically. [TEST EDIT]
</h1>
```

5. **Save the file** (Cmd+S on Mac, Ctrl+S on Windows)

6. **Check browser**: http://localhost:3000/healthcare
   - Page should auto-refresh
   - You should see "[TEST EDIT]" appear!

**✅ Success**: You can now make changes and see them instantly!

---

## 📤 Step 6: Push Changes to GitHub (Go Live)

### When you're happy with your changes:

```bash
# 1. Check what you changed
git status

# 2. Stage your changes (add all changed files)
git add .

# 3. Commit with a descriptive message
git commit -m "Updated hero tagline"

# 4. Push to GitHub
git push
```

**If this is your first push, Git will ask for authentication:**

### Authentication (One-Time Setup):

**Option A: GitHub CLI (Recommended)**
```bash
# Install GitHub CLI
brew install gh  # Mac
# OR download for Windows: https://cli.github.com/

# Login
gh auth login

# Follow prompts:
# - Choose: GitHub.com
# - Choose: HTTPS
# - Authenticate via browser
# - Login with your GitHub account

# Set up Git to use GitHub CLI
gh auth setup-git

# Now push again:
git push
```

**Option B: Personal Access Token**
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select scope: `repo` (full control)
4. Copy the token
5. When git asks for password, use the **token** (not your GitHub password)

---

## 🌐 Step 7: Verify Changes Went Live

After pushing:

1. **Check GitHub**:
   - Go to: https://github.com/manuvaradattil/fly-social-healthcare
   - Click "commits"
   - You should see your commit!

2. **Wait 2-3 minutes** for automatic Vercel deployment

3. **Check live website**:
   - Owner will share the Vercel URL
   - Your changes should appear!

---

## 🎨 Common Edits You'll Make

### 1. Change Pricing
**File**: `app/healthcare/page.tsx`
- **Line 428**: Starter plan price `$29`
- **Line 534**: Growth plan price `$49`

### 2. Update Tagline
**File**: `app/healthcare/page.tsx`
- **Lines 89-90**: Main hero tagline

### 3. Edit Feature Descriptions
**File**: `app/healthcare/page.tsx`
- **Lines 8-20**: Info button tooltip descriptions

### 4. Change Contact Info
**File**: `app/healthcare/page.tsx`
- **Line 790**: Email address
- **Line 796**: Phone number
- **Search & Replace**: WhatsApp number `918446712833`

### 5. Update Button Text/Links
- Search for text you want to change
- Update carefully (keep HTML structure intact)

---

## 🔄 Daily Workflow

```bash
# 1. Start your day - Get latest changes
git pull

# 2. Start development server
npm run dev

# 3. Make your edits in VS Code
# → Save files
# → Check in browser

# 4. When done, push changes
git add .
git commit -m "Describe what you changed"
git push

# 5. Stop development server when done
# Press: Ctrl+C in terminal
```

---

## 🐛 Common Issues & Solutions

### Issue: "Port 3000 already in use"
**Solution:**
```bash
# Find what's using port 3000
lsof -i :3000

# Kill that process
kill -9 <PID>

# Try again
npm run dev
```

### Issue: "Command not found: npm"
**Solution:**
- Node.js not installed properly
- Reinstall Node.js from: https://nodejs.org/

### Issue: "Permission denied"
**Solution:**
```bash
# You need to be added as collaborator
# Contact repository owner
```

### Issue: Changes not showing in browser
**Solution:**
1. Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
2. Check if dev server is running (`npm run dev`)
3. Check if you saved the file

### Issue: Build errors after editing
**Solution:**
```bash
# Check syntax errors
npm run build

# Read error message carefully
# Fix the line number mentioned
# Most common: Missing closing tag, bracket, or quote
```

---

## 📚 Learning Resources

### If you're new to:

**React/Next.js:**
- Next.js Docs: https://nextjs.org/learn
- React Tutorial: https://react.dev/learn

**Tailwind CSS:**
- Docs: https://tailwindcss.com/docs
- Cheat Sheet: https://nerdcave.com/tailwind-cheat-sheet

**Git:**
- Git Basics: https://www.youtube.com/watch?v=HVsySz-h9r4
- GitHub Flow: https://guides.github.com/introduction/flow/

---

## 🆘 Getting Help

### Resources:
1. **Project Documentation**:
   - `README_FOR_TEAM.md` - Project overview
   - `HEALTHCARE_PAGE_SOURCE.md` - Complete source code
   - `SIMPLE_STEPS_FOR_TEAM.md` - Quick edits guide

2. **Contact Repository Owner**:
   - For GitHub access issues
   - For deployment questions
   - For project-specific questions

3. **Technical Questions**:
   - Check error messages first
   - Google the error message
   - Ask ChatGPT/Claude

---

## ✅ Setup Checklist

Before you start working, make sure:

- [ ] Git installed and working
- [ ] Node.js installed (v18+)
- [ ] VS Code installed
- [ ] GitHub account created
- [ ] Added as collaborator to repository
- [ ] Repository cloned to your computer
- [ ] Dependencies installed (`npm install` completed)
- [ ] Dev server running (`npm run dev` works)
- [ ] Can see website at http://localhost:3000/healthcare
- [ ] Made a test edit and saw it live
- [ ] Git authentication set up
- [ ] Successfully pushed a test commit

---

## 🎉 You're Ready!

Once you've completed all steps above, you can:
- ✅ Edit the landing page
- ✅ See changes instantly in browser
- ✅ Push changes that go live automatically
- ✅ Collaborate with team without conflicts

**Happy coding!** 🚀

---

## Quick Commands Reference

```bash
# Pull latest changes
git pull

# Start dev server
npm run dev

# Check what changed
git status

# Save changes
git add .
git commit -m "Your message"
git push

# Stop dev server
Ctrl+C

# Build for production (test)
npm run build
```

---

**Last Updated**: December 2024
**Project**: Fly Social Healthcare Landing Page
**Tech Stack**: Next.js 16 + React 19 + TypeScript + Tailwind CSS
