# GitHub + Claude Code Setup for Absolute Beginners

Welcome! This simplified guide is designed for people new to coding, GitHub, and the terminal.

## What are we setting up?

- **GitHub** — a website where developers store code and collaborate
- **Git** — the tool that manages code changes on your computer
- **Claude Code** — an AI helper that can write and debug code for you
- **Terminal** — the text-based interface you'll use to run commands

Don't worry if these terms are unfamiliar. We'll go through each step slowly.

## Part 1: Open Terminal

Terminal is a text-based program on your Mac.

1. Press `Command + Space`
2. Type `terminal`
3. Press Enter

A window with a black or white background should open. This is your terminal.

You'll type commands here. After each command, press Enter to run it.

## Part 2: Check if Git is Installed

Type this and press Enter:

```
git --version
```

If you see a version number, Git is already installed. Skip ahead to Part 4.

If not, continue to Part 3.

## Part 3: Install Git

Copy this command, paste it into Terminal, and press Enter:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

This installs Homebrew, a tool that helps install software on your Mac. It might ask for your password—type it in and press Enter.

Once done, install Git:

```
brew install git
```

Verify it worked:

```
git --version
```

## Part 4: Tell Git Your Name and Email

Type these commands one at a time. Replace "Your Name" and "you@example.com":

```
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Use the email you plan to use for GitHub.

## Part 5: Create a GitHub Account

1. Open your web browser
2. Go to https://github.com
3. Click "Sign up"
4. Enter your email, create a password, choose a username
5. Verify your email address

Done! You now have a GitHub account.

## Part 6: Set Up SSH (One-Time)

SSH is a secure way to connect to GitHub from your Mac. We'll create a special key pair.

Type this command:

```
ssh-keygen -t ed25519 -C "you@example.com"
```

Press Enter three times (don't type anything).

Now start the SSH agent:

```
eval "$(ssh-agent -s)"
```

Add your key:

```
ssh-add ~/.ssh/id_ed25519
```

View your public key (this is safe to share):

```
cat ~/.ssh/id_ed25519.pub
```

You'll see a long string starting with `ssh-ed25519`. Copy the entire line.

## Part 7: Add Your SSH Key to GitHub

1. Go to GitHub in your browser
2. Click your profile picture in the top right
3. Click "Settings"
4. On the left, click "SSH and GPG keys"
5. Click "New SSH key"
6. Paste the key you copied in Part 6
7. Click "Add SSH key"

Done! GitHub now knows your Mac.

## Part 8: Install Claude Code

First, check if Node.js is installed:

```
node --version
```

If you see a version number, skip ahead. If not, install it:

```
brew install node
```

Now install Claude Code:

```
npm install -g @anthropic-ai/claude-code
```

Verify:

```
claude --version
```

## Part 9: Authenticate Claude Code

Type:

```
claude
```

Follow the prompts to sign in with your Anthropic account.

## Part 10: Your First Repository

Let's create a simple project on GitHub and clone it to your Mac.

### Step 1: Create a repository on GitHub

1. Go to GitHub
2. Click the "+" icon in the top right
3. Click "New repository"
4. Name it `my-first-repo`
5. Add a description (optional)
6. Click "Create repository"

### Step 2: Clone it to your Mac

Go back to Terminal and type:

```
cd ~
mkdir code
cd code
git clone git@github.com:YOUR_USERNAME/my-first-repo.git
cd my-first-repo
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 3: Create a file

Type:

```
echo "# My First Project" > README.md
```

### Step 4: Save your changes to GitHub

Type these commands one at a time:

```
git add .
git commit -m "Add README"
git push
```

Go back to GitHub in your browser and refresh. You should see your README file!

## Part 11: Basic Glossary

- **Repository (Repo)** — a folder that stores your code
- **Commit** — saving a version of your code with a message
- **Push** — uploading your changes to GitHub
- **Pull** — downloading changes from GitHub
- **Branch** — a separate version of your code
- **Clone** — copying a repository from GitHub to your Mac

## Part 12: Troubleshooting

### "Command not found"

You may have typed the command wrong. Copy and paste it exactly.

### "Permission denied"

This usually means your SSH key isn't set up correctly. Go back to Part 6 and Part 7.

### "fatal: not a git repository"

You're not in the right folder. Type `pwd` to see where you are, then use `cd` to navigate to your project folder.

## Part 13: What's Next?

Once you're comfortable with these steps, you can:

1. Create more repositories
2. Use Claude Code to help write code
3. Collaborate with others by inviting them to your repository
4. Learn more Git commands

Congratulations! You've set up GitHub and Claude Code on your Mac.

---

**Need help?** Re-read the section, or ask Claude Code for help:

```
claude
```

Then ask a question like "How do I clone a repository?" or "Why am I getting a Git error?"
