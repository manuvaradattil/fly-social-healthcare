#!/bin/bash

echo "🚀 Setting up GitHub repository for fly-social-healthcare"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Check if we're in the right directory
echo -e "${BLUE}📁 Current directory: $(pwd)${NC}"
echo ""

# Step 2: Ask for GitHub username
echo -e "${YELLOW}What's your GitHub username?${NC}"
read -p "Username: " github_username

if [ -z "$github_username" ]; then
    echo "❌ No username provided. Exiting."
    exit 1
fi

# Step 3: Repository name
repo_name="fly-social-healthcare"

echo ""
echo -e "${GREEN}✅ GitHub username: $github_username${NC}"
echo -e "${GREEN}✅ Repository name: $repo_name${NC}"
echo ""

# Step 4: Instructions to create GitHub repo
echo -e "${YELLOW}📋 STEP 1: Create GitHub Repository${NC}"
echo ""
echo "Please follow these steps:"
echo "1. Open: https://github.com/new"
echo "2. Repository name: $repo_name"
echo "3. Description: Fly Social Healthcare Landing Page"
echo "4. Choose: Private or Public (your choice)"
echo "5. Do NOT initialize with README"
echo "6. Click 'Create repository'"
echo ""
echo "Press ENTER when you've created the repository..."
read

# Step 5: Add remote and push
echo ""
echo -e "${BLUE}📤 Pushing code to GitHub...${NC}"
echo ""

# Remove any existing remote
git remote remove origin 2>/dev/null

# Add new remote
git remote add origin "https://github.com/$github_username/$repo_name.git"

# Verify git status
echo "Current git status:"
git status
echo ""

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅ SUCCESS! Code pushed to GitHub!${NC}"
    echo ""
    echo -e "${GREEN}📍 Your repository:${NC}"
    echo "   https://github.com/$github_username/$repo_name"
    echo ""
    echo -e "${YELLOW}📋 NEXT STEPS:${NC}"
    echo ""
    echo "1. Deploy to Vercel:"
    echo "   vercel login"
    echo "   vercel --prod"
    echo ""
    echo "2. Add team members:"
    echo "   Go to: https://github.com/$github_username/$repo_name/settings/access"
    echo "   Click 'Add people'"
    echo "   Enter their GitHub username or email"
    echo ""
    echo "3. Share these files with your team:"
    echo "   - SIMPLE_STEPS_FOR_TEAM.md (Quick guide)"
    echo "   - TEAM_COLLABORATION_GUIDE.md (Detailed guide)"
    echo ""
    echo -e "${GREEN}🎉 You're all set!${NC}"
else
    echo ""
    echo -e "${YELLOW}⚠️  Push failed. This might be because:${NC}"
    echo "1. You haven't created the GitHub repository yet"
    echo "2. The repository name is different"
    echo "3. You need to authenticate"
    echo ""
    echo "Try these steps:"
    echo "1. Make sure you created the repo: https://github.com/new"
    echo "2. Run this manually:"
    echo "   git remote add origin https://github.com/$github_username/$repo_name.git"
    echo "   git push -u origin main"
fi
