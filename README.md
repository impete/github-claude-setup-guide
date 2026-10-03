# GitHub + Claude Code Setup Guide for Mac

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-222222?logo=github)](https://impete.github.io/github-claude-setup-guide/)
[![Mac Setup](https://img.shields.io/badge/Mac-Setup-blue)](README.md)
[![Claude Code](https://img.shields.io/badge/Claude-Code-9A5AFB)](LESSON-GITHUB-CLAUDE.md)
[![Docs](https://img.shields.io/badge/Docs-Validated-success)](README.md)

A comprehensive, progressive course for setting up GitHub and Claude Code on your Mac.

## 🚀 Quick Start

Choose your experience level:

- **👶 Absolute Beginner?** → Start with [**BEGINNER.md**](BEGINNER.md) (30 min)
- **📚 Some Experience?** → Read [**LESSON-GITHUB-CLAUDE.md**](LESSON-GITHUB-CLAUDE.md) (20 min)
- **⚡ Experienced Developer?** → Jump to [**COURSE-OVERVIEW-GITHUB-CLAUDE.md**](COURSE-OVERVIEW-GITHUB-CLAUDE.md) for Claude Code setup
- **📋 Need a Reference?** → Use [**CHEATSHEET.md**](CHEATSHEET.md) anytime

---

## ✅ Included Enhancements

This repo now includes the four recommended improvements:

1. **GitHub Actions validation workflow** for Markdown and repo sanity checks
2. **Badge section** for a more polished landing page experience
3. **GitHub Pages deployment setup** with workflow + static site config
4. **Cheat sheet appendix** for pages, workflow, and troubleshooting tips

---

## 📚 Course Contents

### Core Lesson Files

| File | Purpose | Best For | Time |
|------|---------|----------|------|
| [**BEGINNER.md**](BEGINNER.md) | Step-by-step basics for newcomers | Absolute beginners (no prior experience) | 30 min |
| [**LESSON-GITHUB-CLAUDE.md**](LESSON-GITHUB-CLAUDE.md) | Comprehensive guide with explanations | People with some tech experience | 20 min |
| [**CHEATSHEET.md**](CHEATSHEET.md) | Quick command reference | Quick lookups during work | 2 min |
| [**COURSE-OVERVIEW-GITHUB-CLAUDE.md**](COURSE-OVERVIEW-GITHUB-CLAUDE.md) | Learning paths, exercises & structure | Course navigation | 5 min |
| [**EXERCISES-CHECKPOINTS.md**](EXERCISES-CHECKPOINTS.md) | Hands-on exercises with checkpoints | Practicing skills | 60-90 min |
| [**GITHUB-PAGES-SETUP.md**](GITHUB-PAGES-SETUP.md) | GitHub Pages instructions and deployment notes | Publishing the course site | 5 min |

---

## 🎯 What You'll Learn

By the end of this course, you'll know how to:

✅ Install and configure Git on your Mac  
✅ Create and secure a GitHub account  
✅ Set up SSH authentication  
✅ Clone, commit, and push code  
✅ Create and review pull requests  
✅ Install and use Claude Code  
✅ Use AI assistance for coding tasks  
✅ Follow developer best practices  
✅ Publish a static course site with GitHub Pages  

---

## 🛣️ Learning Paths

### Path 1: Complete Beginner
1. Read: **BEGINNER.md** (20 min)
2. Do: Complete setup checklist
3. Practice: Exercises 1-2 in **EXERCISES-CHECKPOINTS.md**
4. Reference: Keep **CHEATSHEET.md** handy

**Total time:** 45-60 minutes

---

### Path 2: Some Tech Experience
1. Skim: **BEGINNER.md** (5 min)
2. Read: **LESSON-GITHUB-CLAUDE.md** (15 min)
3. Practice: Exercises 1-4 in **EXERCISES-CHECKPOINTS.md**
4. Reference: Use **CHEATSHEET.md** for daily work

**Total time:** 30-45 minutes

---

### Path 3: Experienced Developer
1. Skim: **LESSON-GITHUB-CLAUDE.md** (5 min)
2. Setup: Claude Code (Part 5)
3. Practice: Exercises 4-6 in **EXERCISES-CHECKPOINTS.md**
4. Reference: **CHEATSHEET.md** for quick lookups
5. Deploy: Publish with **GITHUB-PAGES-SETUP.md** and GitHub Pages

**Total time:** 15-20 minutes

---

## 📖 File Overview

### BEGINNER.md
Simplified, step-by-step guide for absolute beginners. Covers:
- Opening Terminal
- Installing Git
- GitHub account setup
- SSH keys
- Your first repository
- Basic troubleshooting

**Best for:** People new to coding or Terminal  
**Read time:** 30 minutes  
**Difficulty:** ⭐ (Beginner)

---

### LESSON-GITHUB-CLAUDE.md
Comprehensive guide with full explanations and best practices. Covers:
- What each tool does and why
- Installation with multiple options
- Configuration and authentication
- Git workflow with examples
- Claude Code integration
- Advanced troubleshooting

**Best for:** People with some coding experience  
**Read time:** 20 minutes  
**Difficulty:** ⭐⭐ (Intermediate)

---

### CHEATSHEET.md
Quick command reference for common tasks. Perfect for:
- One-time setup commands
- Daily Git commands
- GitHub CLI quick commands
- Claude Code tips
- Troubleshooting table
- GitHub Pages + workflow commands

**Best for:** Quick lookups while working  
**Read time:** 2 minutes  
**Difficulty:** ⭐ (All levels)

---

### GITHUB-PAGES-SETUP.md
Covers how to:
- enable GitHub Pages in repo settings
- use the included static site files
- validate deployments with Actions
- publish the course landing page

**Best for:** GitHub Pages publishing and site management  
**Read time:** 5 minutes

---

## ✅ Setup Checklist

### Before You Start
- [ ] Mac with admin access
- [ ] Internet connection
- [ ] Web browser
- [ ] ~1 hour free time

### Installation & Configuration
- [ ] Install Xcode Command Line Tools
- [ ] Install and configure Git
- [ ] Create GitHub account
- [ ] Generate and add SSH key
- [ ] Install GitHub CLI (optional)
- [ ] Install Node.js & Claude Code
- [ ] Authenticate Claude Code
- [ ] Enable GitHub Pages if desired

### First Steps
- [ ] Clone a repository
- [ ] Create a branch
- [ ] Make and commit changes
- [ ] Push to GitHub
- [ ] Create a pull request
- [ ] Publish a site with GitHub Pages

---

## 🚀 GitHub Pages Quick Setup

The repository includes a static landing page and a deployment workflow. To publish it:

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set **Source** to **GitHub Actions**
4. The included workflow will deploy automatically on push to `main`

The live site will be available at:

`https://impete.github.io/github-claude-setup-guide/`

---

## 🔍 Quick Navigation

**I want to...**

- Install everything on a Mac → [BEGINNER.md](BEGINNER.md)
- Understand Git and Claude Code → [LESSON-GITHUB-CLAUDE.md](LESSON-GITHUB-CLAUDE.md)
- Practice hands-on exercises → [EXERCISES-CHECKPOINTS.md](EXERCISES-CHECKPOINTS.md)
- Remember commands fast → [CHEATSHEET.md](CHEATSHEET.md)
- Publish the site → [GITHUB-PAGES-SETUP.md](GITHUB-PAGES-SETUP.md)

---

## 🧪 Automation + Quality Checks

This repo includes GitHub Actions automation to help keep content and publishing healthy:

- `validate-docs.yml` checks for missing/empty key files
- `pages.yml` deploys the site using GitHub Pages

These workflows make it easier to maintain the course as it grows.

---

## 📌 Notes

This course is designed to be practical, approachable, and easy to follow without assuming prior experience.

Use the lessons in order, complete the exercises, and keep the cheat sheet nearby during setup.

---

## License

This project is intended for educational use and course material distribution.

If you are using this content in a classroom or workshop, you may adapt it to fit your environment while preserving attribution.

---

**Ready to begin?** Open [BEGINNER.md](BEGINNER.md) and start with Part 1.
"""

{"path":"README.md","content":"# GitHub + Claude Code Setup Guide for Mac

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-222222?logo=github)](https://impete.github.io/github-claude-setup-guide/)
[![Mac Setup](https://img.shields.io/badge/Mac-Setup-blue)](README.md)
[![Claude Code](https://img.shields.io/badge/Claude-Code-9A5AFB)](LESSON-GITHUB-CLAUDE.md)
[![Docs](https://img.shields.io/badge/Docs-Validated-success)](README.md)

A comprehensive, progressive course for setting up GitHub and Claude Code on your Mac.

## 🚀 Quick Start

Choose your experience level:

- **👶 Absolute Beginner?** → Start with [**BEGINNER.md**](BEGINNER.md) (30 min)
- **📚 Some Experience?** → Read [**LESSON-GITHUB-CLAUDE.md**](LESSON-GITHUB-CLAUDE.md) (20 min)
- **⚡ Experienced Developer?** → Jump to [**COURSE-OVERVIEW-GITHUB-CLAUDE.md**](COURSE-OVERVIEW-GITHUB-CLAUDE.md) for Claude Code setup
- **📋 Need a Reference?** → Use [**CHEATSHEET.md**](CHEATSHEET.md) anytime

---

## ✅ Included Enhancements

This repo now includes the four recommended improvements:

1. **GitHub Actions validation workflow** for Markdown and repo sanity checks
2. **Badge section** for a more polished landing page experience
3. **GitHub Pages deployment setup** with workflow + static site config
4. **Cheat sheet appendix** for pages, workflow, and troubleshooting tips

---

## 📚 Course Contents

### Core Lesson Files

| File | Purpose | Best For | Time |
|------|---------|----------|------|
| [**BEGINNER.md**](BEGINNER.md) | Step-by-step basics for newcomers | Absolute beginners (no prior experience) | 30 min |
| [**LESSON-GITHUB-CLAUDE.md**](LESSON-GITHUB-CLAUDE.md) | Comprehensive guide with explanations | People with some tech experience | 20 min |
| [**CHEATSHEET.md**](CHEATSHEET.md) | Quick command reference | Quick lookups during work | 2 min |
| [**COURSE-OVERVIEW-GITHUB-CLAUDE.md**](COURSE-OVERVIEW-GITHUB-CLAUDE.md) | Learning paths, exercises & structure | Course navigation | 5 min |
| [**EXERCISES-CHECKPOINTS.md**](EXERCISES-CHECKPOINTS.md) | Hands-on exercises with checkpoints | Practicing skills | 60-90 min |
| [**GITHUB-PAGES-SETUP.md**](GITHUB-PAGES-SETUP.md) | GitHub Pages instructions and deployment notes | Publishing the course site | 5 min |

---

## 🎯 What You'll Learn

By the end of this course, you'll know how to:

✅ Install and configure Git on your Mac  
✅ Create and secure a GitHub account  
✅ Set up SSH authentication  
✅ Clone, commit, and push code  
✅ Create and review pull requests  
✅ Install and use Claude Code  
✅ Use AI assistance for coding tasks  
✅ Follow developer best practices  
✅ Publish a static course site with GitHub Pages  

---

## 🛣️ Learning Paths

### Path 1: Complete Beginner
1. Read: **BEGINNER.md** (20 min)
2. Do: Complete setup checklist
3. Practice: Exercises 1-2 in **EXERCISES-CHECKPOINTS.md**
4. Reference: Keep **CHEATSHEET.md** handy

**Total time:** 45-60 minutes

---

### Path 2: Some Tech Experience
1. Skim: **BEGINNER.md** (5 min)
2. Read: **LESSON-GITHUB-CLAUDE.md** (15 min)
3. Practice: Exercises 1-4 in **EXERCISES-CHECKPOINTS.md**
4. Reference: Use **CHEATSHEET.md** for daily work

**Total time:** 30-45 minutes

---

### Path 3: Experienced Developer
1. Skim: **LESSON-GITHUB-CLAUDE.md** (5 min)
2. Setup: Claude Code (Part 5)
3. Practice: Exercises 4-6 in **EXERCISES-CHECKPOINTS.md**
4. Reference: **CHEATSHEET.md** for quick lookups
5. Deploy: Publish with **GITHUB-PAGES-SETUP.md** and GitHub Pages

**Total time:** 15-20 minutes

---

## 📖 File Overview

### BEGINNER.md
Simplified, step-by-step guide for absolute beginners. Covers:
- Opening Terminal
- Installing Git
- GitHub account setup
- SSH keys
- Your first repository
- Basic troubleshooting

**Best for:** People new to coding or Terminal  
**Read time:** 30 minutes  
**Difficulty:** ⭐ (Beginner)

---

### LESSON-GITHUB-CLAUDE.md
Comprehensive guide with full explanations and best practices. Covers:
- What each tool does and why
- Installation with multiple options
- Configuration and authentication
- Git workflow with examples
- Claude Code integration
- Advanced troubleshooting

**Best for:** People with some coding experience  
**Read time:** 20 minutes  
**Difficulty:** ⭐⭐ (Intermediate)

---

### CHEATSHEET.md
Quick command reference for common tasks. Perfect for:
- One-time setup commands
- Daily Git commands
- GitHub CLI quick commands
- Claude Code tips
- Troubleshooting table
- GitHub Pages + workflow commands

**Best for:** Quick lookups while working  
**Read time:** 2 minutes  
**Difficulty:** ⭐ (All levels)

---

### GITHUB-PAGES-SETUP.md
Covers how to:
- enable GitHub Pages in repo settings
- use the included static site files
- validate deployments with Actions
- publish the course landing page

**Best for:** GitHub Pages publishing and site management  
**Read time:** 5 minutes

---

## ✅ Setup Checklist

### Before You Start
- [ ] Mac with admin access
- [ ] Internet connection
- [ ] Web browser
- [ ] ~1 hour free time

### Installation & Configuration
- [ ] Install Xcode Command Line Tools
- [ ] Install and configure Git
- [ ] Create GitHub account
- [ ] Generate and add SSH key
- [ ] Install GitHub CLI (optional)
- [ ] Install Node.js & Claude Code
- [ ] Authenticate Claude Code
- [ ] Enable GitHub Pages if desired

### First Steps
- [ ] Clone a repository
- [ ] Create a branch
- [ ] Make and commit changes
- [ ] Push to GitHub
- [ ] Create a pull request
- [ ] Publish a site with GitHub Pages

---

## 🚀 GitHub Pages Quick Setup

The repository includes a static landing page and a deployment workflow. To publish it:

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set **Source** to **GitHub Actions**
4. The included workflow will deploy automatically on push to `main`

The live site will be available at:

`https://impete.github.io/github-claude-setup-guide/`

---

## 🔍 Quick Navigation

**I want to...**

- Install everything on a Mac → [BEGINNER.md](BEGINNER.md)
- Understand Git and Claude Code → [LESSON-GITHUB-CLAUDE.md](LESSON-GITHUB-CLAUDE.md)
- Practice hands-on exercises → [EXERCISES-CHECKPOINTS.md](EXERCISES-CHECKPOINTS.md)
- Remember commands fast → [CHEATSHEET.md](CHEATSHEET.md)
- Publish the site → [GITHUB-PAGES-SETUP.md](GITHUB-PAGES-SETUP.md)

---

## 🧪 Automation + Quality Checks

This repo includes GitHub Actions automation to help keep content and publishing healthy:

- `validate-docs.yml` checks for missing/empty key files
- `pages.yml` deploys the site using GitHub Pages

These workflows make it easier to maintain the course as it grows.

---

## 📌 Notes

This course is designed to be practical, approachable, and easy to follow without assuming prior experience.

Use the lessons in order, complete the exercises, and keep the cheat sheet nearby during setup.

---

## License

This project is intended for educational use and course material distribution.

If you are using this content in a classroom or workshop, you may adapt it to fit your environment while preserving attribution.

---

**Ready to begin?** Open [BEGINNER.md](BEGINNER.md) and start with Part 1.
""" },
{"path":"CHEATSHEET.md","content":"# Quick Reference: GitHub + Claude Code Cheat Sheet

A fast reference for common commands and steps.

## One-Time Setup

```bash
# Install Git
brew install git

# Configure Git
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Generate SSH key
ssh-keygen -t ed25519 -C "you@example.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# View public key (add to GitHub)
cat ~/.ssh/id_ed25519.pub

# Install GitHub CLI
brew install gh
gh auth login

# Install Node.js
brew install node

# Install Claude Code
npm install -g @anthropic-ai/claude-code
claude
```

## Daily Commands

### Clone a repo
```bash
git clone git@github.com:OWNER/REPO.git
cd REPO
```

### Create and switch to a branch
```bash
git checkout -b feature/my-feature
```

### Check status
```bash
git status
```

### Stage and commit changes
```bash
git add .
git commit -m "Clear message describing your changes"
```

### Push to GitHub
```bash
git push -u origin feature/my-feature
```

### Update from GitHub
```bash
git pull
```

### View commit history
```bash
git log --oneline
```

## GitHub CLI Quick Commands

```bash
# Create a new repo
gh repo create my-repo --public

# View issues
gh issue list

# Create an issue
gh issue create --title "Bug title" --body "Description"

# Create a pull request
gh pr create --title "Feature" --body "What this does"

# View PRs
gh pr list
```

## Claude Code Quick Tips

```bash
# Start Claude Code
claude

# Common prompts:
# "Explain this repository structure"
# "Help me debug this error: [error message]"
# "Write a function that [description]"
# "Create a commit for these changes"
```

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `Permission denied (publickey)` | Check SSH key: `ssh -T git@github.com` |
| `command not found: git` | Install: `brew install git` |
| `command not found: claude` | Reinstall: `npm install -g @anthropic-ai/claude-code` |
| `fatal: not a git repository` | Navigate to repo: `cd /path/to/repo` |
| `fatal: upstream does not appear to be a git repository` | Clone first: `git clone ...` |
| `GitHub Pages shows 404` | Check Pages source and ensure branch/site is published |
| `GitHub Actions workflow not running` | Check repo admin settings and workflow file syntax |

## Useful Directory Navigation

```bash
# Print working directory
pwd

# List files
ls -la

# Change directory
cd ~/code

# Go back one folder
cd ..

# Go to home folder
cd ~

# Create folder
mkdir folder-name

# Open in VS Code
code .
```

## Git Workflow Summary

1. Create a branch: `git checkout -b feature/name`
2. Make changes
3. Stage changes: `git add .`
4. Commit: `git commit -m "message"`
5. Push: `git push -u origin feature/name`
6. Open a pull request on GitHub

---

## Appendix: GitHub Pages + Automation

### Enable GitHub Pages

```bash
# In GitHub web UI:
# Settings -> Pages -> Source -> GitHub Actions
```

Then push to `main` and the Pages workflow will publish the site automatically.

### Validate the repo locally

```bash
ls -la
find . -maxdepth 2 -type f | sort
```

### Preview a static site locally

```bash
python3 -m http.server 8000
```

Then open: `http://localhost:8000`

### Check workflow status

```bash
gh workflow list
gh run list
```

### Typical deploy flow

```bash
git status
git add .
git commit -m "Update course materials"
git push origin main
```

Once pushed, GitHub Actions will build and deploy the Pages site.

---

**Bookmark this page for quick reference!**
""" },
{"path":"GITHUB-PAGES-SETUP.md","content":"# GitHub Pages Setup for This Course

This repository includes a static landing page and deployment workflow so the course can be published on GitHub Pages.

## Overview

GitHub Pages lets you host a static website directly from your repository. This project is already set up to use either a root-level static site or a deployment workflow.

## How to enable Pages

1. Open your GitHub repository.
2. Go to **Settings**.
3. Open **Pages**.
4. Under **Source**, choose **GitHub Actions**.
5. Save the setting.

## Included files

- `INDEX.html` — the main landing page
- `INDEX.md` — markdown source used for documentation/reference
- `.github/workflows/pages.yml` — deployment workflow
- `.nojekyll` — disables Jekyll processing for static assets

## Deploy flow

When you push to `main`, the GitHub Actions workflow will:

1. Set up the Pages environment
2. Upload the repository content as an artifact
3. Deploy that artifact to GitHub Pages

## Local preview

To preview the static site locally:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Troubleshooting

### 404 page on GitHub Pages

Check that the workflow has completed successfully and that the Pages source is set to **GitHub Actions**.

### CSS or assets not loading

Ensure the site files are at the repository root or in the published artifact path. Static sites often need `.nojekyll` for asset handling.

### Workflow fails

Review the Actions log under the **Actions** tab and confirm that the workflow YAML is valid and the repo has Pages enabled.

## Suggested workflow

After major updates:

```bash
git add .
git commit -m "Update course site"
git push origin main
```

Then check the repository's **Actions** page to confirm deployment succeeds.
""" },
{"path":".github/workflows/validate-docs.yml","content":"name: Validate Docs

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  validate:
    runs-on: ubuntu-latest

    steps:
      - name: Check out repository
        uses: actions/checkout@v4

      - name: Verify key files exist
        run: |
          test -f README.md
          test -f CHEATSHEET.md
          test -f LESSON-GITHUB-CLAUDE.md
          test -f BEGINNER.md
          test -f EXERCISES-CHECKPOINTS.md
          echo "Required documentation files present."

      - name: Verify files are not empty
        run: |
          for file in README.md CHEATSHEET.md LESSON-GITHUB-CLAUDE.md BEGINNER.md EXERCISES-CHECKPOINTS.md; do
            if [ ! -s "$file" ]; then
              echo "Missing or empty file: $file"
              exit 1
            fi
          done
          echo "All course files contain content."
""" },
{"path":".github/workflows/pages.yml","content":"name: Deploy GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository
        uses: actions/checkout@v4

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: .

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
""" },
{"path":".nojekyll","content":""}]}  
{