# 🚀 Push to GitHub - Complete Guide

## ✅ Two Methods: Choose One

---

## Method 1: GitHub CLI (Easiest - Recommended!)

This method handles authentication automatically.

### Step 1: Authenticate with GitHub

```bash
gh auth login
```

**Follow the prompts:**
1. What account: **GitHub.com**
2. Protocol: **HTTPS**
3. Authenticate: **Login with a web browser**
4. Copy the one-time code shown
5. Press Enter to open browser
6. Paste code and authorize

### Step 2: Create Repository & Push

```bash
cd /Users/manu/Projects/Git/GitHub/fly-social-healthcare

# Create the repository on GitHub
gh repo create fly-social-healthcare --private --source=. --remote=origin --push
```

**That's it!** Your code is now on GitHub! ✅

**Your repository:** https://github.com/manuvaradattil/fly-social-healthcare

---

## Method 2: Personal Access Token (Alternative)

If you prefer the traditional Git method.

### Step 1: Create Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click: "Generate new token" → "Generate new token (classic)"
3. Fill in:
   - Note: `Fly Social Healthcare`
   - Expiration: `No expiration`
   - ✅ Check: **`repo`** (full control of private repositories)
4. Click: "Generate token"
5. **COPY THE TOKEN!** (looks like `ghp_xxxxxxxxxxxx`)

### Step 2: Create Repository on GitHub

1. Go to: https://github.com/new
2. Repository name: `fly-social-healthcare`
3. Private or Public: Your choice
4. **Do NOT** initialize with README
5. Click: "Create repository"

### Step 3: Push Code

```bash
cd /Users/manu/Projects/Git/GitHub/fly-social-healthcare

# Remove existing remote (if any)
git remote remove origin

# Add new remote
git remote add origin https://github.com/manuvaradattil/fly-social-healthcare.git

# Push code
git push -u origin main
```

**When prompted:**
- Username: `manuvaradattil`
- Password: **Paste your Personal Access Token** (the `ghp_xxx` you copied)

**✅ Done!** Code is now on GitHub!

---

## 🎯 Quick Verification

After pushing, verify your code is on GitHub:

```bash
# Open repository in browser
gh repo view --web

# Or visit manually:
# https://github.com/manuvaradattil/fly-social-healthcare
```

---

## 🔄 Next Steps

After code is on GitHub:

### 1. Deploy to Vercel

```bash
vercel login
vercel --prod
```

### 2. Connect GitHub to Vercel (Auto-deploy)

1. Go to: https://vercel.com/dashboard
2. Click your project
3. Settings → Git
4. Connect Git Repository
5. Select: `fly-social-healthcare`

### 3. Add Team Members

```bash
# Using GitHub CLI
gh repo collaborator add USERNAME

# Or manually:
# Go to: https://github.com/manuvaradattil/fly-social-healthcare/settings/access
# Click "Add people"
```

---

## 🆘 Troubleshooting

### Error: "Authentication failed"
**Solution:** Use Method 1 (GitHub CLI) or create a fresh Personal Access Token

### Error: "Repository not found"
**Solution:** Make sure you created the repository on GitHub first at https://github.com/new

### Error: "Permission denied"
**Solution:**
```bash
# Check if you're using the right username
git remote -v

# Update if needed
git remote set-url origin https://github.com/manuvaradattil/fly-social-healthcare.git
```

### Token expired or doesn't work
**Solution:** Create a new token with `repo` scope at https://github.com/settings/tokens

---

## 💡 Pro Tips

### Save Token in Keychain (Mac)

After first successful push, macOS will ask to save password in Keychain. Click "Always Allow" and you won't need to enter it again!

### Check Repository Status

```bash
# View repository details
gh repo view

# Open in browser
gh repo view --web

# Check remote
git remote -v
```

### Update Code Later

```bash
git add .
git commit -m "Updated content"
git push
```

---

## ✅ Checklist

- [ ] Authenticated with GitHub (Method 1 or 2)
- [ ] Created repository on GitHub
- [ ] Pushed code successfully
- [ ] Verified code is visible on GitHub
- [ ] Ready to deploy to Vercel!

---

**Need help?** Run the commands and let me know if you get stuck at any step!
