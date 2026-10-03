# Quick Reference: GitHub + Claude Code Cheat Sheet

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

# Install Claude Code
brew install node
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

**Bookmark this page for quick reference!**
