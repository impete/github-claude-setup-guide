# 🚀 GitHub + Claude Code Setup Course

A complete guide for setting up GitHub, Git, and Claude Code on a Mac.

## Badges & Status

![Beginner Friendly](https://img.shields.io/badge/Level-Beginner-green?style=flat-square)
![Mac Setup](https://img.shields.io/badge/Platform-Mac-blue?style=flat-square)
![GitHub](https://img.shields.io/badge/Tool-GitHub-orange?style=flat-square)
![Claude Code](https://img.shields.io/badge/Tool-Claude%20Code-purple?style=flat-square)
![Open Source](https://img.shields.io/badge/License-Open%20Source-brightgreen?style=flat-square)

---

## Overview

This comprehensive course teaches you how to:
- Set up Git on your Mac
- Create and manage GitHub repositories
- Use SSH keys for secure authentication
- Work with GitHub from the terminal
- Install and use Claude Code effectively
- Build a practical developer workflow

**Perfect for:** Complete beginners, career changers, and anyone new to GitHub and Git.

---

## Learning Outcomes

By completing this course, you will be able to:

✅ Install and configure Git from scratch  
✅ Create a GitHub account and secure it  
✅ Generate and manage SSH authentication keys  
✅ Clone repositories from GitHub  
✅ Create branches and make commits  
✅ Push code changes to GitHub  
✅ Create and review pull requests  
✅ Use Claude Code for coding assistance and debugging  
✅ Handle common Git and GitHub errors  
✅ Follow developer best practices  

---

## Course Structure

### Beginner Path (30-45 minutes)
**Best for:** Complete beginners with no coding experience
- [BEGINNER-GUIDE.md](BEGINNER-GUIDE.md) - Simplified step-by-step setup
- [COMPLETE-BEGINNERS-GUIDE.md](COMPLETE-BEGINNERS-GUIDE.md) - Full detailed guide with appendix

### Core Lesson (20-30 minutes)
**Best for:** People with some technical background
- [LESSON-GITHUB-CLAUDE.md](LESSON-GITHUB-CLAUDE.md) - Comprehensive lesson with explanations

### Quick Reference (2-5 minutes)
**Best for:** Daily lookup and troubleshooting
- [CHEATSHEET.md](CHEATSHEET.md) - Command reference
- [COURSE-OVERVIEW-GITHUB-CLAUDE.md](COURSE-OVERVIEW-GITHUB-CLAUDE.md) - Navigation guide

### Hands-On Practice (60-90 minutes)
**Best for:** Solidifying your skills
- [EXERCISES-CHECKPOINTS.md](EXERCISES-CHECKPOINTS.md) - 20+ progressive exercises with checkpoints

---

## Course Materials Overview

| File | Purpose | Duration | Level |
|------|---------|----------|-------|
| **COMPLETE-BEGINNERS-GUIDE.md** | Ultimate beginner guide with environment appendix | 60-90 min | 👶 Beginner |
| **BEGINNER-GUIDE.md** | Simplified step-by-step setup | 30 min | 👶 Beginner |
| **LESSON-GITHUB-CLAUDE.md** | Comprehensive detailed lesson | 20 min | 📚 Intermediate |
| **COURSE-OVERVIEW-GITHUB-CLAUDE.md** | Course navigation and paths | 5 min | 📍 Reference |
| **CHEATSHEET.md** | Quick command reference | 2 min | ⚡ Quick Ref |
| **EXERCISES-CHECKPOINTS.md** | Hands-on practice exercises | 60-90 min | 🏆 Practice |
| **README.md** | Course homepage and navigation | 5 min | 📍 Reference |
| **INDEX.html** | Interactive landing page | - | 🌐 Landing |

---

## How to Use This Course

### Step 1: Choose Your Starting Point

**If you are a complete beginner:**
→ Start with [COMPLETE-BEGINNERS-GUIDE.md](COMPLETE-BEGINNERS-GUIDE.md)

**If you have some tech experience:**
→ Start with [LESSON-GITHUB-CLAUDE.md](LESSON-GITHUB-CLAUDE.md)

**If you're an experienced developer:**
→ Start with [CHEATSHEET.md](CHEATSHEET.md) and focus on Claude Code

### Step 2: Follow the Guide
- Read carefully
- Follow each step exactly
- Don't skip parts
- Ask Claude Code if confused

### Step 3: Do the Exercises
- Complete exercises in [EXERCISES-CHECKPOINTS.md](EXERCISES-CHECKPOINTS.md)
- Track checkpoints
- Practice multiple times

### Step 4: Reference as Needed
- Use [CHEATSHEET.md](CHEATSHEET.md) for daily work
- Refer back to guides for clarification
- Ask Claude Code for help

---

## Quick Start (TL;DR)

```bash
# Install everything
xcode-select --install
brew install git gh node
npm install -g @anthropic-ai/claude-code

# Configure
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# SSH setup
ssh-keygen -t ed25519 -C "you@example.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
cat ~/.ssh/id_ed25519.pub  # Copy to GitHub

# Authenticate
gh auth login
claude

# Verify
ssh -T git@github.com
claude --version
```

Then follow [COMPLETE-BEGINNERS-GUIDE.md](COMPLETE-BEGINNERS-GUIDE.md) Part 7 for your first repository.

---

## Why This Matters

GitHub and Git are **foundational tools** for modern development. Learning them:
- Enables collaboration
- Builds professional skills
- Opens career opportunities
- Creates good coding habits
- Supports open-source contribution

Claude Code amplifies this by providing AI-assisted development capabilities right from the terminal.

---

## What's Included

### ✅ Setup Guides
- Complete installation instructions
- Step-by-step configuration
- Troubleshooting sections
- Environment setup explanations

### ✅ Learning Resources
- Conceptual explanations
- Real-world examples
- Best practices
- Industry standards

### ✅ Hands-On Practice
- 20+ progressive exercises
- Multiple difficulty levels
- Checkpoint system
- Clear learning outcomes

### ✅ Reference Materials
- Quick command cheatsheet
- FAQ section
- Common troubleshooting
- Links to official docs

---

## Learning Paths

### Path 1: Absolute Beginner
**Time:** 2-3 hours | **Difficulty:** ⭐

1. Read [COMPLETE-BEGINNERS-GUIDE.md](COMPLETE-BEGINNERS-GUIDE.md) (60 min)
2. Complete exercises 1-2 in [EXERCISES-CHECKPOINTS.md](EXERCISES-CHECKPOINTS.md) (30 min)
3. Practice exercises 3-4 (30 min)
4. Keep [CHEATSHEET.md](CHEATSHEET.md) handy for daily work

### Path 2: Intermediate
**Time:** 1.5-2 hours | **Difficulty:** ⭐⭐

1. Skim [BEGINNER-GUIDE.md](BEGINNER-GUIDE.md) (10 min)
2. Read [LESSON-GITHUB-CLAUDE.md](LESSON-GITHUB-CLAUDE.md) (20 min)
3. Complete all exercises in [EXERCISES-CHECKPOINTS.md](EXERCISES-CHECKPOINTS.md) (60-90 min)
4. Use [CHEATSHEET.md](CHEATSHEET.md) for reference

### Path 3: Advanced
**Time:** 1 hour | **Difficulty:** ⭐⭐⭐

1. Skim [LESSON-GITHUB-CLAUDE.md](LESSON-GITHUB-CLAUDE.md) (10 min)
2. Focus on Claude Code section (10 min)
3. Complete exercises 4-6 in [EXERCISES-CHECKPOINTS.md](EXERCISES-CHECKPOINTS.md) (40 min)
4. Use [CHEATSHEET.md](CHEATSHEET.md) for quick lookups

---

## Frequently Asked Questions

**Q: Do I need prior coding experience?**
A: No! Start with [COMPLETE-BEGINNERS-GUIDE.md](COMPLETE-BEGINNERS-GUIDE.md).

**Q: How long does this take?**
A: 1.5-3 hours depending on your experience level.

**Q: Is this Mac-only?**
A: Yes, commands are Mac-specific. Concepts apply elsewhere but use different commands.

**Q: Do I need to pay for anything?**
A: No! All tools are free.

**Q: What if I get stuck?**
A: Check the Troubleshooting section, use Claude Code, or ask for help.

**Q: Can I use this to teach others?**
A: Yes! It's open source. Feel free to fork and modify.

---

## Resources

### Official Documentation
- [Git Official Docs](https://git-scm.com/doc)
- [GitHub Documentation](https://docs.github.com)
- [GitHub CLI Docs](https://cli.github.com/manual)
- [Claude.ai](https://claude.ai)

### Learning Resources
- [GitHub Skills](https://skills.github.com) - Interactive courses
- [Pro Git Book](https://git-scm.com/book/en/v2) - Free comprehensive guide
- [Oh My Zsh](https://ohmyz.sh/) - Terminal customization

### Tools & Editors
- [VS Code](https://code.visualstudio.com/) - Popular code editor
- [GitHub Desktop](https://desktop.github.com/) - GUI for Git
- [Sublime Text](https://www.sublimetext.com/) - Lightweight editor
- [iTerm2](https://www.iterm2.com/) - Advanced terminal

---

## Completion Checklist

After finishing this course, you should be able to:

- [ ] Install and configure Git
- [ ] Create a GitHub account
- [ ] Generate and manage SSH keys
- [ ] Clone repositories
- [ ] Create and switch branches
- [ ] Make commits with good messages
- [ ] Push code to GitHub
- [ ] Create and merge pull requests
- [ ] Use Claude Code for development
- [ ] Understand Git workflows
- [ ] Handle common errors
- [ ] Follow best practices

---

## Next Steps

After completing this course:

1. **Create Projects** - Build real projects on GitHub
2. **Contribute** - Help open-source projects
3. **Collaborate** - Work with others using Git workflows
4. **Learn Advanced** - Explore rebasing, cherry-picking, etc.
5. **Automate** - Set up GitHub Actions and CI/CD

---

## Contributing

This course is open source! If you find:
- ❌ Unclear sections
- ❌ Missing steps
- ❌ Outdated information
- ✅ Better examples

Please contribute! Create an issue or pull request.

---

## Start Learning

**Choose your path:**

👶 **Beginner?** → [COMPLETE-BEGINNERS-GUIDE.md](COMPLETE-BEGINNERS-GUIDE.md)  
📚 **Intermediate?** → [LESSON-GITHUB-CLAUDE.md](LESSON-GITHUB-CLAUDE.md)  
⚡ **Experienced?** → [CHEATSHEET.md](CHEATSHEET.md)  
🏆 **Ready to practice?** → [EXERCISES-CHECKPOINTS.md](EXERCISES-CHECKPOINTS.md)  

---

**Happy coding! 🚀**