# GitHub + Claude Code Setup on a Mac

This lesson walks through setting up GitHub and Claude Code on a Mac so you can clone repositories, commit changes, and use Claude Code in your terminal.

## What you’ll need

- A Mac running macOS
- A GitHub account
- Internet access
- Terminal access

## 1) Install Xcode Command Line Tools

Open Terminal and run:

```bash
xcode-select --install
```

If prompted, install the command line tools.

This gives you Git and other developer tools used by many coding workflows.

## 2) Install Git

Check whether Git is already installed:

```bash
git --version
```

If not installed, install it with Homebrew:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Then:

```bash
brew install git
```

Verify:

```bash
git --version
```

## 3) Configure Git

Set your name and email. Use the email associated with your GitHub account:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Optional: set default branch name:

```bash
git config --global init.defaultBranch main
```

Check your config:

```bash
git config --global --list
```

## 4) Create a GitHub Account

1. Go to https://github.com
2. Sign up for an account
3. Verify your email
4. Optional: enable 2-factor authentication

## 5) Set Up GitHub Authentication

There are two common methods:

- HTTPS with a personal access token
- SSH keys (recommended for development)

### Option A: HTTPS + Personal Access Token

This is simple but you’ll need to enter a token regularly when pushing.

1. In GitHub, click your profile picture
2. Go to Settings > Developer settings > Personal access tokens
3. Generate a new token with repo access
4. Use it when prompted by Git

### Option B: SSH Keys (Recommended)

Generate a key on your Mac:

```bash
ssh-keygen -t ed25519 -C "you@example.com"
```

Press Enter to accept the default file location, and optionally set a passphrase.

Then start the SSH agent:

```bash
eval "$(ssh-agent -s)"
```

Add the private key:

```bash
ssh-add ~/.ssh/id_ed25519
```

View the public key:

```bash
cat ~/.ssh/id_ed25519.pub
```

Copy the output.

Now add it to GitHub:

1. Open GitHub
2. Go to Settings > SSH and GPG keys
3. Click New SSH key
4. Paste the key and save

Test the connection:

```bash
ssh -T git@github.com
```

You should see a success message.

## 6) Install GitHub CLI (Optional but Useful)

GitHub CLI lets you manage repos from the terminal.

Install with Homebrew:

```bash
brew install gh
```

Authenticate:

```bash
gh auth login
```

Follow the prompts to log in with your browser.

Verify:

```bash
gh --version
```

## 7) Install Claude Code

Claude Code is a coding agent that runs in the terminal. On a Mac, the typical installation flow is via npm.

Check if Node.js is installed:

```bash
node --version
```

If it is not installed, install Node.js with Homebrew:

```bash
brew install node
```

Then install Claude Code:

```bash
npm install -g @anthropic-ai/claude-code
```

Verify it works:

```bash
claude --version
```

If the command is missing, restart Terminal or check your PATH.

## 8) Authenticate Claude Code

Run:

```bash
claude
```

Follow the prompts to sign in with your Anthropic account or configured authentication method.

You may also need to allow Claude Code access to your terminal environment, depending on your setup.

## 9) Basic GitHub Workflow

### Clone a repository

```bash
git clone git@github.com:OWNER/REPO.git
```

Or with HTTPS:

```bash
git clone https://github.com/OWNER/REPO.git
```

### Navigate into the repo

```bash
cd REPO
```

### Check status

```bash
git status
```

### Create a branch

```bash
git checkout -b feature/my-change
```

### Make changes and stage them

```bash
git add .
```

### Commit changes

```bash
git commit -m "Add my change"
```

### Push to GitHub

```bash
git push -u origin feature/my-change
```

Then open the repository in GitHub to create a pull request.

## 10) A Simple Day-to-Day Workflow with Claude Code

Once Claude Code is installed, you can use it to help with code generation, debugging, and repo understanding.

Example workflow:

```bash
cd ~/code/my-project
claude
```

You can then ask Claude Code things like:

- “Explain this repo”
- “Find the bug in this function”
- “Write a README section for installation”
- “Refactor this file to use cleaner naming”
- “Create a branch and commit this fix”

For Git operations, Claude Code may ask you to confirm commands.

## 11) Useful macOS Terminal Tips

These commands are helpful for daily setup:

```bash
pwd
ls -la
cd ~/code
mkdir my-project
```

Open VS Code from the terminal:

```bash
code .
```

If `code` is not recognized, install the VS Code command line tool from VS Code’s Command Palette with:

- Shell Command: Install 'code' command in PATH

## 12) Best Practices

- Use SSH keys instead of password-based GitHub auth when possible
- Keep commit messages clear and specific
- Create a new branch for each feature or fix
- Use pull requests for code review
- Keep secrets out of repositories
- Test code before pushing

## 13) Recommended First Setup Checklist

Use this checklist the first time:

- [ ] Install Xcode tools
- [ ] Install Git
- [ ] Configure Git user name and email
- [ ] Create GitHub account
- [ ] Add SSH key to GitHub
- [ ] Install GitHub CLI
- [ ] Install Node.js
- [ ] Install Claude Code
- [ ] Authenticate Claude Code
- [ ] Clone a repo and make a test commit

## 14) Troubleshooting Quick Fixes

### Git says “Permission denied (publickey)”

Check that your SSH key is loaded and added to GitHub:

```bash
ssh-add -l
ssh -T git@github.com
```

### `claude` command not found

Try:

```bash
which claude
```

If missing, reopen the terminal or check the npm global bin directory:

```bash
npm bin -g
```

### GitHub login prompts repeatedly

Use SSH keys or re-authenticate with GitHub CLI:

```bash
gh auth login
```

## 15) Summary

You now have the core setup needed to work with GitHub and Claude Code on a Mac:

- Git is installed and configured
- Your GitHub account is connected
- SSH is working for repo access
- Claude Code is installed and ready to use

This gives you a solid foundation for coding, collaboration, and AI-assisted development.

## Next Steps

- Create a repository on GitHub
- Clone it locally
- Add a simple project
- Use Claude Code to help build and improve it
- Open a pull request and practice the workflow

If you want, this lesson can also be expanded into:

- a beginner Git cheat sheet
- a Claude Code prompt cheat sheet
- a full project setup walkthrough using VS Code
