# Course Overview & Learning Paths

This guide is organized as a progressive course for learning GitHub and Claude Code setup on a Mac.

## 📚 Files in This Course

| File | Purpose | Audience | Time |
|------|---------|----------|------|
| **README.md** | Original comprehensive guide | Reference | 5 min |
| **BEGINNER-GUIDE.md** | Simplified step-by-step | Absolute beginners | 30 min |
| **LESSON-GITHUB-CLAUDE.md** | Detailed lesson with explanations | Some experience | 20 min |
| **CHEATSHEET.md** | Quick command reference | All levels | 2 min |
| **COURSE-OVERVIEW-GITHUB-CLAUDE.md** | This file - course overview | Navigation | 5 min |

---

## 🎯 Choose Your Learning Path

### Path 1: I'm Completely New (Start Here)

**Time:** 45-60 minutes | **Difficulty:** Beginner

1. ✅ Read: **BEGINNER-GUIDE.md** (20 minutes)
2. ✅ Do: Complete Part 1–7 setup steps
3. ✅ Practice: Follow Part 10 "Your First Repository"
4. ✅ Reference: Keep **CHEATSHEET.md** handy
5. ✅ Next: Try Exercise 1 below

**What you'll learn:**
- Basic terminal commands
- Git fundamentals
- GitHub basics
- Claude Code setup

**Prerequisites:** None

---

### Path 2: I Know Some Tech (Some Experience)

**Time:** 20-30 minutes | **Difficulty:** Intermediate

1. ✅ Skim: **BEGINNER-GUIDE.md** (5 minutes)
2. ✅ Read: **LESSON-GITHUB-CLAUDE.md** sections 1-6 (15 minutes)
3. ✅ Reference: Use **CHEATSHEET.md** for daily commands
4. ✅ Practice: Complete all exercises below
5. ✅ Next: Explore GitHub CLI and Claude Code capabilities

**What you'll learn:**
- Advanced Git workflows
- SSH authentication deep-dive
- GitHub CLI
- Claude Code integration

**Prerequisites:** Basic command line experience

---

### Path 3: I Have Git Experience (Experienced Developers)

**Time:** 10-15 minutes | **Difficulty:** Advanced

1. ✅ Skim: **LESSON-GITHUB-CLAUDE.md** (5 minutes)
2. ✅ Reference: **CHEATSHEET.md** for quick lookups
3. ✅ Setup: Focus on Claude Code (Part 5)
4. ✅ Practice: Exercise 4 (Try Claude Code)
5. ✅ Next: Integrate Claude Code into your workflow

**What you'll learn:**
- Claude Code setup and usage
- AI-assisted development workflows
- Claude Code best practices

**Prerequisites:** Git proficiency, terminal experience

---

## ⚡ Daily Workflow Reference

After setup, here's your typical day:

```bash
# Start work on a new feature
cd ~/code/my-project
git pull                          # Get latest changes
git checkout -b feature/new-thing # Create new branch

# Make changes, then:
git status                        # Check what changed
git add .                         # Stage changes
git commit -m "Add new feature"   # Commit with message
git push -u origin feature/new-thing # Push branch

# Use Claude Code for help
claude                            # Open Claude Code
# Ask: "Review this code" or "Help me debug this"

# When done, create a pull request on GitHub for review
```

---

## ⏱️ Time Commitments by Path

| Path | Total Time | Setup | Practice | Learning |
|------|-----------|-------|----------|----------|
| Absolute Beginner | 45-60 min | 30 min | 15 min | 15 min |
| Some Experience | 20-30 min | 15 min | 10 min | 5 min |
| Experienced Dev | 10-15 min | 10 min | 5 min | 0 min |

---

## ✅ Setup Checklist

Use this to track your progress:

### Prerequisites
- [ ] Mac computer with admin access
- [ ] Terminal access
- [ ] Internet connection
- [ ] Web browser

### Installation
- [ ] Git installed (`git --version`)
- [ ] Git configured with name/email
- [ ] GitHub account created
- [ ] SSH key generated
- [ ] SSH key added to GitHub
- [ ] SSH connection tested (`ssh -T git@github.com`)

### Optional but Recommended
- [ ] GitHub CLI installed
- [ ] GitHub CLI authenticated
- [ ] Node.js installed
- [ ] Claude Code installed
- [ ] Claude Code authenticated

### First Hands-On
- [ ] Created first repository on GitHub
- [ ] Cloned repository locally
- [ ] Made and committed changes
- [ ] Pushed changes to GitHub
- [ ] Viewed changes on GitHub website

---

## 🎓 Exercises by Difficulty

### Level 1: Basics (Everyone Should Complete)

**Exercise 1: Setup Checklist**
- Complete all installation steps
- Verify each tool works (`git --version`, `claude --version`, etc.)
- Estimated time: 30 minutes

**Exercise 2: Create Your First Repo**
- Create a repository on GitHub
- Clone it locally
- Add a README with your name and interests
- Push to GitHub
- View changes on GitHub website
- Estimated time: 15 minutes

---

### Level 2: Intermediate (Recommended)

**Exercise 3: Git Workflow Practice**
- Create a branch: `git checkout -b feature/exercise3`
- Make multiple commits (at least 3)
- Push to GitHub
- Create a pull request
- Merge the pull request
- Switch back to main and pull latest
- Estimated time: 20 minutes

**Exercise 4: Try Claude Code**
- Use Claude to explain a repository
- Ask Claude to help with an error or bug
- Have Claude review your code
- Ask Claude to suggest improvements
- Estimated time: 15 minutes

---

### Level 3: Advanced (For Experienced Developers)

**Exercise 5: Contribute to Open Source**
- Find an open-source project on GitHub
- Fork the repository
- Make a contribution (bug fix, feature, or documentation)
- Submit a pull request
- Collaborate with maintainers
- Estimated time: 60+ minutes

**Exercise 6: Workflow Automation**
- Explore GitHub Actions (workflows)
- Create an automated test workflow
- Use Claude Code to help fix CI/CD issues
- Set up branch protection rules
- Estimated time: 45 minutes

---

## 🔍 Troubleshooting Quick Links

Common problems and solutions:

### Installation Issues
- Git not found → See **LESSON-GITHUB-CLAUDE.md** Part 1
- Permission denied → See **LESSON-GITHUB-CLAUDE.md** Part 5
- Command not found → See **CHEATSHEET.md** Troubleshooting

### Workflow Issues
- Merge conflicts → Use `git status` to identify conflicts
- Can't push → Check SSH key: `ssh -T git@github.com`
- Lost commits → Use `git reflog` to recover

### Claude Code Issues
- Claude won't start → Restart Terminal or run `which claude`
- Permission errors → Run `claude` and authenticate again

---

## 📖 Additional Resources

### Official Documentation
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)
- [GitHub CLI Docs](https://cli.github.com/manual)
- [Claude Documentation](https://claude.ai/docs)

### Community & Learning
- [GitHub Skills](https://skills.github.com) — Free interactive lessons
- [Pro Git Book](https://git-scm.com/book/en/v2) — Free comprehensive guide
- [Oh My Zsh](https://ohmyz.sh/) — Terminal enhancements (optional)

### Tools to Explore Later
- **VS Code** — Code editor with Git integration
- **GitHub Desktop** — GUI for Git operations
- **Sublime Text** — Lightweight code editor
- **iTerm2** — Advanced terminal with better features

---

## 🎯 Course Completion Checklist

### After Completing This Course

You'll be able to:
- [ ] Clone and work with repositories
- [ ] Create branches and make commits
- [ ] Push code to GitHub
- [ ] Create and review pull requests
- [ ] Use Claude Code for coding assistance
- [ ] Follow Git best practices
- [ ] Debug common setup issues
- [ ] Navigate the terminal confidently

### Next Learning Steps

1. **Git Mastery:** Learn advanced branching, rebasing, and merge strategies
2. **Collaboration:** Practice code review and team workflows
3. **DevOps:** GitHub Actions, CI/CD pipelines, deployment
4. **Open Source:** Contribute to public projects
5. **Advanced Claude Code:** Use AI for complex development tasks
6. **Development Workflow:** Master VS Code, debugging tools, and productivity

---

## 💬 Feedback & Improvements

This course is living documentation. If you find:
- ❌ Unclear instructions
- ❌ Missing steps
- ❌ Outdated information
- ✅ Better explanations or examples

Please create an issue or submit a pull request!

---

## ⚡ Quick Start (TL;DR)

For the impatient:

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
cat ~/.ssh/id_ed25519.pub  # Copy and add to GitHub

# Authenticate
gh auth login
claude

# Test
ssh -T git@github.com
claude --version

# Success! 🎉
```

Then follow **BEGINNER-GUIDE.md** Part 10 for your first repo.

---

## 📍 Navigation

**Start Here:**
- New to GitHub? → **BEGINNER-GUIDE.md**
- Want details? → **LESSON-GITHUB-CLAUDE.md**
- Need quick reference? → **CHEATSHEET.md**
- Lost? → **COURSE-OVERVIEW-GITHUB-CLAUDE.md** (this file)

**Ready to begin?** Choose your path above and open the corresponding file!

---

**Happy coding! 🚀**
