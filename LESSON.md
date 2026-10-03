# GitHub + Claude Code Setup: Polished Comprehensive Lesson

A structured, in-depth guide for setting up GitHub and Claude Code on a Mac, with explanations and best practices.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Part 1: Git Installation & Configuration](#part-1-git-installation--configuration)
4. [Part 2: GitHub Account & Authentication](#part-2-github-account--authentication)
5. [Part 3: SSH Key Setup](#part-3-ssh-key-setup)
6. [Part 4: GitHub CLI Installation](#part-4-github-cli-installation)
7. [Part 5: Claude Code Installation](#part-5-claude-code-installation)
8. [Part 6: First Repository Workflow](#part-6-first-repository-workflow)
9. [Part 7: Best Practices](#part-7-best-practices)
10. [Exercises](#exercises)
11. [Appendix: Troubleshooting](#appendix-troubleshooting)

---

## Introduction

### What You'll Learn

This lesson teaches you to:
- Install and configure Git on your Mac
- Create and secure a GitHub account
- Set up SSH authentication for secure repository access
- Install Claude Code, an AI-powered coding assistant
- Execute your first Git workflow (clone, commit, push)
- Follow industry best practices for development

### Why These Tools?

- **Git** — Version control system used by millions of developers
- **GitHub** — Cloud-based repository hosting and collaboration platform
- **Claude Code** — AI assistant that helps write, understand, and debug code
- **SSH** — Secure way to authenticate with GitHub without passwords

### Time Estimate

Total setup: **30–45 minutes**
Each part: **3–8 minutes**

---

## Prerequisites

### What You Need

- A Mac running macOS 10.12 or later
- Administrator access to install software
- Internet connection
- A web browser
- Terminal (comes with macOS)

### What You Don't Need

- Prior coding experience
- A fancy code editor (though VS Code is recommended later)
- Previous GitHub knowledge

---

## Part 1: Git Installation & Configuration

### 1.1 What is Git?

Git is a **version control system**. It tracks changes to files over time, allowing you to:
- Save different versions of your code
- See who changed what and when
- Collaborate with other developers
- Revert to previous versions if something breaks

Git runs locally on your Mac. GitHub is the cloud platform that hosts your Git repositories.

### 1.2 Check if Git is Already Installed

Open Terminal (Command + Space, type "terminal", press Enter).

Type:

```bash
git --version
```

If you see something like `git version 2.40.0`, Git is installed. Skip to [1.4](#14-configure-git).

If you see `command not found`, proceed to [1.3](#13-install-git).

### 1.3 Install Git

#### Option A: Xcode Command Line Tools (Recommended)

```bash
xcode-select --install
```

Follow the prompts. This may take several minutes.

#### Option B: Homebrew

First, install Homebrew (a package manager):

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Then install Git:

```bash
brew install git
```

Verify:

```bash
git --version
```

### 1.4 Configure Git

Git needs to know who you are. Use your full name and the email you'll use for GitHub:

```bash
git config --global user.name "Your Full Name"
git config --global user.email "you@example.com"
```

**Important:** Use your real GitHub email for consistency.

Optionally, set your default branch name:

```bash
git config --global init.defaultBranch main
```

View your configuration:

```bash
git config --global --list
```

You should see `user.name` and `user.email` in the output.

---

## Part 2: GitHub Account & Authentication

### 2.1 Create a GitHub Account

1. Open https://github.com in your browser
2. Click "Sign up"
3. Enter your email address
4. Create a strong password
5. Choose a username (this becomes your GitHub identity)
6. Verify your email address

**Tips for your username:**
- Use lowercase letters, numbers, and hyphens
- Avoid special characters
- Keep it professional (you'll share it in resumes, portfolios)

### 2.2 GitHub Authentication Methods

There are two main ways to authenticate with GitHub:

| Method | Security | Ease | Best For |
|--------|----------|------|----------|
| HTTPS + Personal Access Token | Good | Easy | Quick setup, less frequent use |
| SSH Keys | Excellent | Medium | Regular development, recommended |

We'll use SSH (more secure and convenient for regular use).

---

## Part 3: SSH Key Setup

### 3.1 Understanding SSH

SSH (Secure Shell) is a secure protocol for communicating with GitHub. Instead of a password, you use a key pair:
- **Private key** — kept secret on your Mac
- **Public key** — shared with GitHub

GitHub uses your public key to verify your identity. Only your private key can sign requests.

### 3.2 Generate Your SSH Key

In Terminal, run:

```bash
ssh-keygen -t ed25519 -C "you@example.com"
```

Replace `you@example.com` with your GitHub email.

When prompted:
- **File location:** Press Enter (default: `~/.ssh/id_ed25519`)
- **Passphrase:** Optionally enter a password (recommended for security)

You'll see:

```
Your public key has been saved in /Users/yourname/.ssh/id_ed25519.pub
Your private key has been saved in /Users/yourname/.ssh/id_ed25519
```

### 3.3 Start the SSH Agent

The SSH agent manages your keys in memory:

```bash
eval "$(ssh-agent -s)"
```

You should see: `Agent pid XXXXX`

### 3.4 Add Your Private Key to the Agent

```bash
ssh-add ~/.ssh/id_ed25519
```

If you set a passphrase, enter it now.

### 3.5 Copy Your Public Key

View your public key (safe to share):

```bash
cat ~/.ssh/id_ed25519.pub
```

You'll see a long string starting with `ssh-ed25519`. Copy the entire line (including the email at the end).

**Do NOT copy your private key** (the one without `.pub`).

### 3.6 Add Your Public Key to GitHub

1. Go to GitHub (logged in)
2. Click your profile picture (top right) → Settings
3. Left sidebar → "SSH and GPG keys"
4. Click "New SSH key"
5. Title: "My Mac" or similar
6. Paste your public key
7. Click "Add SSH key"

### 3.7 Test Your SSH Connection

Back in Terminal:

```bash
ssh -T git@github.com
```

You should see:

```
Hi YOUR_USERNAME! You've successfully authenticated, but GitHub does not provide shell access.
```

Success! You're now securely connected to GitHub.

---

## Part 4: GitHub CLI Installation

### 4.1 What is GitHub CLI?

GitHub CLI (`gh`) lets you manage repositories, issues, and pull requests from the terminal without opening a browser.

### 4.2 Install GitHub CLI

```bash
brew install gh
```

Verify:

```bash
gh --version
```

### 4.3 Authenticate with GitHub CLI

```bash
gh auth login
```

Follow the prompts:
- Select `github.com`
- Select `SSH`
- Confirm your SSH key
- Authorize with your browser

Verify:

```bash
gh auth status
```

---

## Part 5: Claude Code Installation

### 5.1 What is Claude Code?

Claude Code is an AI assistant that helps with coding tasks:
- Explain repository structure
- Debug errors
- Write functions and tests
- Generate documentation
- Review code

### 5.2 Install Node.js

Claude Code requires Node.js (JavaScript runtime).

Check if installed:

```bash
node --version
```

If not installed:

```bash
brew install node
```

Verify:

```bash
node --version
npm --version
```

### 5.3 Install Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

Verify:

```bash
claude --version
```

### 5.4 Authenticate Claude Code

```bash
claude
```

Follow the prompts to log in with your Anthropic account.

**Note:** You need an Anthropic account (separate from GitHub). Sign up at https://claude.ai if needed.

---

## Part 6: First Repository Workflow

### 6.1 Create a Repository on GitHub

1. Go to https://github.com
2. Click the "+" icon (top right) → "New repository"
3. **Repository name:** `my-first-repo`
4. **Description:** "My first test repository"
5. **Visibility:** Public (for now)
6. **Initialize with README:** Check this box
7. Click "Create repository"

### 6.2 Clone the Repository

Copy the SSH URL from GitHub (green "Code" button → SSH tab).

In Terminal:

```bash
cd ~
mkdir code
cd code
git clone git@github.com:YOUR_USERNAME/my-first-repo.git
cd my-first-repo
```

Replace `YOUR_USERNAME` with your GitHub username.

### 6.3 Create a New File

```bash
echo "## My First Project

This is my first GitHub project!

### Features
- [ ] Feature 1
- [ ] Feature 2" > FEATURES.md
```

### 6.4 Check Status

```bash
git status
```

Output:

```
On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        FEATURES.md

nothing added to commit but untracked files present (tracking what will be ignored)
```

### 6.5 Stage Changes

```bash
git add .
```

Check status again:

```bash
git status
```

Now `FEATURES.md` is "staged" (ready to commit).

### 6.6 Commit Changes

```bash
git commit -m "Add features file"
```

Good commit messages are short and descriptive. Use present tense: "Add", "Fix", "Update", not "Added", "Fixed".

### 6.7 Push to GitHub

```bash
git push
```

Go to GitHub in your browser and refresh. Your `FEATURES.md` file should appear!

### 6.8 Create a Feature Branch

Let's practice working on a separate branch:

```bash
git checkout -b feature/add-documentation
```

Edit a file:

```bash
echo "## Documentation

### Getting Started
1. Clone the repo
2. Install dependencies
3. Run the project" > DOCS.md
```

Stage, commit, and push:

```bash
git add DOCS.md
git commit -m "Add documentation"
git push -u origin feature/add-documentation
```

Go to GitHub. You'll see a notification to create a pull request. A pull request lets others review your changes before merging.

---

## Part 7: Best Practices

### 7.1 Branch Strategy

- **main** — production-ready code
- **develop** — integration branch for features
- **feature/name** — individual features
- **bugfix/name** — bug fixes

Always create a new branch for changes. Never commit directly to `main`.

### 7.2 Commit Message Style

```
Add user authentication module

This commit adds JWT-based authentication to the API.
Includes login, logout, and token refresh endpoints.

Fixes #42
```

- **First line:** Short summary (50 characters max)
- **Blank line**
- **Body:** Explain what and why (optional but recommended)
- **Fixes #XX:** Reference related issues

### 7.3 Keep Secrets Out of Git

Never commit:
- Passwords
- API keys
- Private tokens
- Database credentials

Use a `.gitignore` file to exclude sensitive files:

```bash
echo "
.env
.env.local
secrets.json
node_modules/
" > .gitignore

git add .gitignore
git commit -m "Add gitignore"
git push
```

### 7.4 Pull Before You Push

Always update your local code before pushing:

```bash
git pull
```

This prevents conflicts if someone else pushed changes.

### 7.5 Review Your Changes

Before committing, review what you changed:

```bash
git diff
```

This shows added/removed lines. Helps catch mistakes.

---

## Exercises

### Exercise 1: Basic Setup Checklist

Complete these steps and check them off:

- [ ] Install Git and verify with `git --version`
- [ ] Configure Git with your name and email
- [ ] Create a GitHub account
- [ ] Generate SSH key with `ssh-keygen`
- [ ] Add SSH public key to GitHub
- [ ] Test SSH with `ssh -T git@github.com`
- [ ] Install GitHub CLI
- [ ] Authenticate with `gh auth login`
- [ ] Install Node.js and Claude Code
- [ ] Authenticate Claude Code

### Exercise 2: Create Your First Repository

1. Create a new repository on GitHub called `learning-git`
2. Clone it locally
3. Create a `README.md` file with:
   - Your name
   - A short bio
   - Your interests or skills
4. Commit and push
5. View the changes on GitHub

### Exercise 3: Practice the Git Workflow

1. Create a new branch: `feature/add-goals`
2. Create a `GOALS.md` file listing 3 learning goals
3. Stage and commit the changes
4. Push to GitHub
5. Go to GitHub and create a pull request
6. Merge the pull request
7. Switch back to main: `git checkout main`
8. Pull the latest changes: `git pull`
9. Verify `GOALS.md` appears in main

### Exercise 4: Try Claude Code

1. Clone any public repository (e.g., a friend's project)
2. Open Claude Code: `claude`
3. Ask questions like:
   - "Explain this repository"
   - "What does the main.py file do?"
   - "Help me understand this error"
4. Explore Claude Code's capabilities

---

## Appendix: Troubleshooting

### Git Issues

#### "fatal: not a git repository"

You're in a folder that's not a Git repository.

Solution: Navigate to the correct folder:

```bash
cd /path/to/your/repo
git status
```

#### "fatal: upstream does not appear to be a git repository"

You haven't cloned a repository yet.

Solution: Clone first:

```bash
git clone git@github.com:owner/repo.git
cd repo
```

#### "Your branch is ahead of origin/main by X commits"

You've made commits but haven't pushed yet.

Solution:

```bash
git push
```

### SSH Issues

#### "Permission denied (publickey)"

GitHub doesn't recognize your SSH key.

Solution: Verify your SSH setup:

```bash
ssh -T git@github.com
```

If it fails, re-do Part 3.

#### "Could not open a connection to your authentication agent"

The SSH agent isn't running.

Solution:

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

### Terminal Issues

#### "command not found: git"

Git isn't installed or not in your PATH.

Solution:

```bash
brew install git
```

#### "command not found: claude"

Claude Code isn't installed or npm path is wrong.

Solution:

```bash
npm install -g @anthropic-ai/claude-code
# Restart Terminal
claude --version
```

### GitHub Issues

#### "fatal: Could not resolve hostname github.com"

Internet connection issue.

Solution:

```bash
ping github.com
```

If no response, check your internet connection.

#### GitHub keeps asking for password

HTTPS authentication issue.

Solution: Switch to SSH:

```bash
git remote set-url origin git@github.com:YOUR_USERNAME/REPO.git
git push
```

---

## Summary

Congratulations! You now have:

✅ Git installed and configured  
✅ GitHub account with SSH authentication  
✅ GitHub CLI for terminal-based GitHub management  
✅ Claude Code for AI-assisted development  
✅ Experience with the Git workflow  
✅ Knowledge of best practices  

You're ready to start building, collaborating, and learning!

---

## Next Steps

1. **Explore GitHub:** Browse interesting repositories
2. **Contribute:** Find an open-source project and make your first contribution
3. **Learn Git deeper:** Explore branching strategies, merging, rebasing
4. **Use Claude Code:** Experiment with AI assistance on your projects
5. **Collaborate:** Invite others to your repositories

Happy coding! 🚀
