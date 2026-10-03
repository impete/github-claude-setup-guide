# 🎓 Hands-On Exercises & Checkpoints

Progress through these practical exercises to master GitHub and Claude Code setup on your Mac.

## Table of Contents

- [Level 1: Basics](#level-1-basics)
- [Level 2: Intermediate](#level-2-intermediate)
- [Level 3: Advanced](#level-3-advanced)
- [Checkpoint System](#checkpoint-system)
- [Solutions & Hints](#solutions--hints)

---

## Level 1: Basics

**Duration:** 30-45 minutes  
**Prerequisites:** None  
**Outcomes:** Setup complete, first repo created

### Exercise 1.1: Installation Verification

**Goal:** Verify all tools are installed correctly.

**Steps:**

1. Open Terminal
2. Run each command and verify output:

```bash
git --version
# Expected: git version X.X.X

node --version
# Expected: v16.X.X or higher

npm --version
# Expected: 8.X.X or higher

gh --version
# Expected: gh version X.X.X

claude --version
# Expected: claude X.X.X or similar
```

3. Run each and verify success (no error messages):

```bash
git config --global user.name
git config --global user.email
ssh -T git@github.com
```

**Checkpoint 1.1:**
- [ ] Git installed and configured
- [ ] Node.js and npm installed
- [ ] GitHub CLI installed and authenticated
- [ ] Claude Code installed
- [ ] SSH connection to GitHub works

**Hints:**
- If a command fails, see CHEATSHEET.md Troubleshooting
- If ssh fails, re-do SSH setup in LESSON-GITHUB-CLAUDE.md Part 3

---

### Exercise 1.2: Create Your First Repository

**Goal:** Create a repo on GitHub, clone it, and make your first commit.

**Steps:**

1. On GitHub.com, click the "+" icon and select "New repository"

2. Configure:
   - Name: `my-first-repo`
   - Description: "My first GitHub repository"
   - Visibility: Public
   - Initialize with README: ✓ Check

3. Click "Create repository"

4. In Terminal:

```bash
cd ~
mkdir -p code
cd code
git clone git@github.com:YOUR_USERNAME/my-first-repo.git
cd my-first-repo
```

Replace `YOUR_USERNAME` with your actual GitHub username.

5. Create a new file:

```bash
echo "# My First Repository

Welcome to my first GitHub repo!

## About Me
- Name: [Your Name]
- Location: [Your Location]
- Interests: [Your Interests]" > ABOUT.md
```

6. Check status:

```bash
git status
```

You should see `ABOUT.md` as untracked.

7. Stage and commit:

```bash
git add ABOUT.md
git commit -m "Add about file with introduction"
```

8. Push to GitHub:

```bash
git push
```

9. Verify on GitHub:
   - Go to your repository on GitHub.com
   - Refresh the page
   - You should see `ABOUT.md` in the file list

**Checkpoint 1.2:**
- [ ] Repository created on GitHub
- [ ] Repository cloned locally
- [ ] New file created
- [ ] Changes committed with message
- [ ] Changes pushed to GitHub
- [ ] Changes visible on GitHub.com

**Hints:**
- Make sure to use your actual GitHub username in the clone URL
- The commit message should be descriptive
- If push fails, check SSH with `ssh -T git@github.com`

---

### Exercise 1.3: Working with Branches

**Goal:** Practice creating and switching branches.

**Steps:**

1. In your repo folder, create a new branch:

```bash
git checkout -b feature/improve-readme
```

2. Edit the README (or main README.md):

```bash
echo "

## Getting Started
1. Clone this repo
2. Make changes
3. Push to GitHub

## Contributing
Please create a pull request!" >> README.md
```

3. Check status:

```bash
git status
```

You should see `README.md` as modified.

4. View changes:

```bash
git diff
```

5. Stage and commit:

```bash
git add README.md
git commit -m "Add getting started and contributing sections"
```

6. Push the branch:

```bash
git push -u origin feature/improve-readme
```

7. Go to GitHub and you'll see a notification to create a pull request
8. Click "Compare & pull request"
9. Add a description and click "Create pull request"
10. Click "Merge pull request" to merge your changes
11. Back in Terminal:

```bash
git checkout main
git pull
```

12. Verify your changes are now in main:

```bash
cat README.md
```

**Checkpoint 1.3:**
- [ ] Created a feature branch
- [ ] Made changes and committed
- [ ] Pushed branch to GitHub
- [ ] Created a pull request
- [ ] Merged pull request
- [ ] Updated local main branch

---

## ✅ Checkpoint 1 Summary

After Level 1, you should be able to:
- ✅ Install and verify Git, Node.js, GitHub CLI, Claude Code
- ✅ Create a repository on GitHub
- ✅ Clone a repository locally
- ✅ Make commits with descriptive messages
- ✅ Push changes to GitHub
- ✅ Create and merge pull requests

**Time invested:** 45 minutes  
**Status:** Ready for intermediate exercises

---

## Level 2: Intermediate

**Duration:** 45-60 minutes  
**Prerequisites:** Complete Level 1  
**Outcomes:** Comfortable with Git workflows, Claude Code integration

### Exercise 2.1: Multiple Commits & History

**Goal:** Practice making multiple commits and viewing history.

**Steps:**

1. Create a new branch:

```bash
git checkout -b feature/add-documentation
```

2. Create a documentation file:

```bash
cat > DOCUMENTATION.md << 'EOF'
# Documentation

## Installation
To be added...

## Usage
To be added...

## API Reference
To be added...
EOF
```

3. Commit the initial file:

```bash
git add DOCUMENTATION.md
git commit -m "Create documentation structure"
```

4. Update the Installation section:

```bash
cat >> DOCUMENTATION.md << 'EOF'

### Installation Instructions
1. Clone the repository
2. Navigate to directory
3. Install dependencies
4. Run the application
EOF
```

5. Commit this change:

```bash
git add DOCUMENTATION.md
git commit -m "Add installation instructions"
```

6. View your commit history:

```bash
git log --oneline
```

You should see both commits.

7. View changes between commits:

```bash
git show HEAD~1
```

8. Push all commits:

```bash
git push -u origin feature/add-documentation
```

9. Create and merge the pull request on GitHub

**Checkpoint 2.1:**
- [ ] Created branch with multiple commits
- [ ] Each commit has a descriptive message
- [ ] Viewed commit history with git log
- [ ] Viewed individual commit with git show
- [ ] Pushed to GitHub and merged

---

### Exercise 2.2: Working with Claude Code

**Goal:** Use Claude Code to help with coding tasks.

**Steps:**

1. Start Claude Code:

```bash
claude
```

2. Ask Claude to explain the repository structure:

```
Explain the structure and purpose of this repository.
```

3. Ask Claude for help with documentation:

```
Help me write better documentation for a GitHub repository. 
What sections should a README include?
```

4. Ask Claude to review code:

```
Review this code and suggest improvements:
[paste code from one of your files]
```

5. Ask Claude about Git:

```
What's the difference between git merge and git rebase?
When should I use each?
```

6. Exit Claude Code (type `exit` or `quit`)

**Checkpoint 2.2:**
- [ ] Successfully started Claude Code
- [ ] Asked multiple questions
- [ ] Received helpful responses
- [ ] Understood Claude Code's capabilities

**Tips:**
- Claude Code can help with coding, Git, and documentation
- Ask follow-up questions for clarification
- Use Claude for explaining errors

---

### Exercise 2.3: Handling Merge Conflicts

**Goal:** Learn to handle merge conflicts (practice scenario).

**Steps:**

1. Make sure you're on main:

```bash
git checkout main
```

2. Create two branches from main:

```bash
git checkout -b conflict-branch-1
```

3. Edit a file (README.md or another):

```bash
echo "Change from branch 1" > conflict-test.txt
git add conflict-test.txt
git commit -m "Add conflict-test.txt from branch 1"
```

4. Switch to main and create another branch:

```bash
git checkout main
git checkout -b conflict-branch-2
```

5. Edit the same file differently:

```bash
echo "Change from branch 2" > conflict-test.txt
git add conflict-test.txt
git commit -m "Add conflict-test.txt from branch 2"
```

6. Merge the first branch:

```bash
git merge conflict-branch-1
```

This should succeed.

7. Try to merge the second branch:

```bash
git merge conflict-branch-2
```

You'll see a conflict message.

8. Check the conflicted file:

```bash
cat conflict-test.txt
```

9. Edit to resolve (keep both or choose one):

```bash
echo "Final resolved version" > conflict-test.txt
```

10. Mark as resolved and complete merge:

```bash
git add conflict-test.txt
git commit -m "Resolve merge conflict in conflict-test.txt"
```

11. Clean up branches:

```bash
git branch -d conflict-branch-1 conflict-branch-2
```

**Checkpoint 2.3:**
- [ ] Understood merge conflict scenario
- [ ] Identified conflicting changes
- [ ] Resolved conflict manually
- [ ] Completed merge
- [ ] Cleaned up branches

---

## ✅ Checkpoint 2 Summary

After Level 2, you should be able to:
- ✅ Make multiple commits with good messages
- ✅ Navigate commit history
- ✅ Use Claude Code effectively
- ✅ Handle merge conflicts
- ✅ Work with feature branches confidently

**Time invested:** 90 minutes  
**Status:** Ready for advanced exercises

---

## Level 3: Advanced

**Duration:** 60-90+ minutes  
**Prerequisites:** Complete Level 1 & 2  
**Outcomes:** Ready for real-world projects, open-source contribution

### Exercise 3.1: Contributing to Open Source

**Goal:** Find and contribute to an open-source project.

**Steps:**

1. Find a project:
   - Visit github.com/topics
   - Browse projects by language or interest
   - Look for "good first issue" labels

2. Fork the repository:
   - Click "Fork" button
   - Creates a copy under your account

3. Clone your fork:

```bash
git clone git@github.com:YOUR_USERNAME/project-name.git
cd project-name
```

4. Add upstream remote:

```bash
git remote add upstream git@github.com:ORIGINAL_OWNER/project-name.git
```

5. Create a branch for your contribution:

```bash
git checkout -b fix/issue-123
```

6. Make your changes (fix bug, add feature, improve docs)

7. Test your changes locally

8. Commit with clear message:

```bash
git commit -m "Fix issue #123: Brief description of fix

Longer explanation of what was changed and why."
```

9. Push to your fork:

```bash
git push origin fix/issue-123
```

10. Go to GitHub and create a pull request:
    - Base: original repo's main
    - Compare: your fork's branch
    - Add description of changes
    - Reference the issue: "Fixes #123"

11. Wait for feedback and respond to comments

**Checkpoint 3.1:**
- [ ] Found an open-source project
- [ ] Forked the repository
- [ ] Cloned and set up remotes
- [ ] Made meaningful contribution
- [ ] Created pull request with good description
- [ ] Responded to feedback (if any)

**Tips:**
- Start with "good first issue" or "help wanted" labels
- Read CONTRIBUTING.md in the project
- Follow the project's code style
- Test before submitting

---

### Exercise 3.2: Using GitHub CLI for Workflow

**Goal:** Manage issues and pull requests from the terminal.

**Steps:**

1. Create an issue locally:

```bash
gh issue create --title "Add feature: X" --body "Description of feature"
```

2. View issues:

```bash
gh issue list
```

3. Create a branch for that issue:

```bash
gh issue develop ISSUE_NUMBER
```

Or manually:

```bash
git checkout -b feature/issue-number
```

4. Make changes and commit:

```bash
git add .
git commit -m "Feature: Add X (closes #ISSUE_NUMBER)"
```

5. Push and create PR:

```bash
git push origin feature/issue-number
gh pr create
```

6. View PRs:

```bash
gh pr list
```

7. Check PR status:

```bash
gh pr status
```

8. Merge PR:

```bash
gh pr merge PR_NUMBER
```

**Checkpoint 3.2:**
- [ ] Created issue using gh CLI
- [ ] Listed issues and PRs
- [ ] Created PR using gh CLI
- [ ] Merged PR using gh CLI
- [ ] Comfortable with terminal-based workflow

---

### Exercise 3.3: Advanced Claude Code Tasks

**Goal:** Use Claude Code for complex development tasks.

**Steps:**

1. Start Claude Code:

```bash
claude
```

2. Ask Claude to help with architecture:

```
I'm building a [project type]. What's a good architecture/structure?
Should I use X or Y?
```

3. Ask Claude to generate code:

```
Write a Python function that [specific task].
Include error handling and docstring.
```

4. Ask Claude to debug:

```
I'm getting this error: [error message]
Here's my code: [code]
What's wrong?
```

5. Ask Claude to optimize:

```
Can you review this code and suggest optimizations?
[code]
```

6. Ask Claude about best practices:

```
What are best practices for [topic] in [language]?
```

7. Use Claude to understand complex code:

```
Explain what this code does line by line:
[code]
```

**Checkpoint 3.3:**
- [ ] Used Claude for architecture decisions
- [ ] Used Claude to generate code
- [ ] Used Claude for debugging
- [ ] Used Claude for code review
- [ ] Comfortable with Claude Code for development

**Tips:**
- Provide context for better responses
- Ask follow-up questions
- Copy-paste code directly for review
- Use Claude iteratively during development

---

## ✅ Checkpoint 3 Summary

After Level 3, you should be able to:
- ✅ Contribute to open-source projects
- ✅ Manage workflows entirely from terminal
- ✅ Use Claude Code for real development tasks
- ✅ Handle complex Git scenarios
- ✅ Follow professional development practices

**Time invested:** 150+ minutes  
**Status:** Ready for real-world projects

---

## Checkpoint System

Track your progress through the course:

### Overview

| Checkpoint | Exercise | Focus | Status |
|-----------|----------|-------|--------|
| 1.1 | Installation | Setup verification | ⬜ |
| 1.2 | First Repo | Basic Git workflow | ⬜ |
| 1.3 | Branches | Pull requests | ⬜ |
| **Checkpoint 1** | **Level 1 Complete** | **Basics mastered** | ⬜ |
| 2.1 | Multiple Commits | Git history | ⬜ |
| 2.2 | Claude Code | AI assistance | ⬜ |
| 2.3 | Merge Conflicts | Conflict resolution | ⬜ |
| **Checkpoint 2** | **Level 2 Complete** | **Intermediate skills** | ⬜ |
| 3.1 | Open Source | Community contribution | ⬜ |
| 3.2 | GitHub CLI | Terminal workflow | ⬜ |
| 3.3 | Advanced Claude | Complex tasks | ⬜ |
| **Checkpoint 3** | **Level 3 Complete** | **Advanced ready** | ⬜ |

### Progress Tracking

Copy this to track your progress:

```markdown
## My Progress

### Level 1: Basics
- [ ] Exercise 1.1: Installation Verification
- [ ] Exercise 1.2: Create First Repository
- [ ] Exercise 1.3: Working with Branches
- [ ] Checkpoint 1: Level 1 Complete

### Level 2: Intermediate
- [ ] Exercise 2.1: Multiple Commits & History
- [ ] Exercise 2.2: Working with Claude Code
- [ ] Exercise 2.3: Handling Merge Conflicts
- [ ] Checkpoint 2: Level 2 Complete

### Level 3: Advanced
- [ ] Exercise 3.1: Contributing to Open Source
- [ ] Exercise 3.2: Using GitHub CLI
- [ ] Exercise 3.3: Advanced Claude Code Tasks
- [ ] Checkpoint 3: Level 3 Complete
```

---

## Solutions & Hints

### Exercise 1.1: Installation Verification

**If git --version shows "command not found":**
```bash
brew install git
```

**If Node.js isn't installed:**
```bash
brew install node
```

**If Claude Code isn't working:**
```bash
npm install -g @anthropic-ai/claude-code
claude --version
```

---

### Exercise 1.2: Create First Repository

**If clone fails with "Permission denied":**
- Check SSH is set up: `ssh -T git@github.com`
- Verify SSH key is added to GitHub
- Try HTTPS clone as fallback: `git clone https://github.com/...`

**If push fails:**
```bash
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
git push
```

---

### Exercise 2.3: Merge Conflicts

**To see conflict markers:**
```bash
cat conflict-test.txt
```

**To abort merge:**
```bash
git merge --abort
```

**To see all merge conflicts:**
```bash
git status
```

---

### Exercise 3.1: Open Source

**Good places to find projects:**
- github.com/topics
- github.com/awesome-* (awesome lists)
- github.com/search?q=label:good-first-issue

**To check contribution guidelines:**
```bash
cat CONTRIBUTING.md
```

---

## Tips for Success

1. **Don't Rush:** Take your time understanding each concept
2. **Practice Repeatedly:** Do exercises multiple times
3. **Read Errors:** Error messages are helpful, not scary
4. **Use Claude Code:** Ask questions when stuck
5. **Make Mistakes:** That's how you learn
6. **Help Others:** Teaching reinforces learning

---

## Next Steps After Exercises

1. Create your own projects
2. Contribute to open-source
3. Collaborate with others
4. Learn advanced Git (rebase, cherry-pick, etc.)
5. Explore GitHub Actions & automation

---

**Ready to start? Pick an exercise above and begin! 🚀**
