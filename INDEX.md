# 🚀 GitHub Pages Landing Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub + Claude Code Setup Guide - Complete Course for Mac</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        header {
            text-align: center;
            color: white;
            padding: 60px 20px;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            margin-bottom: 40px;
        }

        header h1 {
            font-size: 3em;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        header p {
            font-size: 1.3em;
            opacity: 0.95;
        }

        .badges {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin: 20px 0;
            flex-wrap: wrap;
        }

        .badge {
            display: inline-block;
            padding: 8px 16px;
            background: rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.5);
            border-radius: 20px;
            color: white;
            font-size: 0.9em;
            font-weight: 600;
        }

        .badge.success {
            background: rgba(34, 197, 94, 0.3);
            border-color: #22c55e;
        }

        .badge.info {
            background: rgba(59, 130, 246, 0.3);
            border-color: #3b82f6;
        }

        .badge.warning {
            background: rgba(251, 146, 60, 0.3);
            border-color: #fb923c;
        }

        .cta-button {
            display: inline-block;
            padding: 16px 40px;
            background: white;
            color: #667eea;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 700;
            font-size: 1.1em;
            margin: 10px 10px;
            transition: transform 0.2s, box-shadow 0.2s;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
        }

        .paths {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            margin-bottom: 60px;
        }

        .path-card {
            background: white;
            border-radius: 12px;
            padding: 40px 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .path-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .path-card h3 {
            color: #667eea;
            margin-bottom: 15px;
            font-size: 1.5em;
        }

        .path-card .emoji {
            font-size: 3em;
            margin-bottom: 10px;
        }

        .path-card p {
            color: #666;
            margin-bottom: 15px;
        }

        .path-card .time {
            color: #999;
            font-size: 0.9em;
            margin: 15px 0;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .path-card a {
            display: inline-block;
            color: #667eea;
            text-decoration: none;
            font-weight: 600;
            margin-top: 15px;
        }

        .path-card a:hover {
            text-decoration: underline;
        }

        .features {
            background: white;
            border-radius: 12px;
            padding: 50px 40px;
            margin-bottom: 40px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .features h2 {
            color: #333;
            margin-bottom: 30px;
            text-align: center;
            font-size: 2em;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 30px;
        }

        .feature-item {
            text-align: center;
        }

        .feature-item .icon {
            font-size: 3em;
            margin-bottom: 15px;
        }

        .feature-item h4 {
            color: #667eea;
            margin-bottom: 10px;
        }

        .feature-item p {
            color: #666;
            font-size: 0.95em;
        }

        .stats {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 40px;
            color: white;
            text-align: center;
            margin-bottom: 40px;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 30px;
            margin-top: 20px;
        }

        .stat-item h3 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }

        .stat-item p {
            opacity: 0.9;
        }

        .files {
            background: white;
            border-radius: 12px;
            padding: 50px 40px;
            margin-bottom: 40px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .files h2 {
            color: #333;
            margin-bottom: 30px;
            text-align: center;
            font-size: 2em;
        }

        .file-list {
            display: grid;
            gap: 20px;
        }

        .file-item {
            border-left: 4px solid #667eea;
            padding-left: 20px;
            padding: 15px;
            background: #f9fafb;
            border-radius: 6px;
            border-left: 4px solid #667eea;
        }

        .file-item h4 {
            color: #333;
            margin-bottom: 5px;
        }

        .file-item .description {
            color: #666;
            font-size: 0.95em;
            margin-bottom: 8px;
        }

        .file-item .meta {
            display: flex;
            gap: 15px;
            font-size: 0.85em;
            color: #999;
        }

        .faq {
            background: white;
            border-radius: 12px;
            padding: 50px 40px;
            margin-bottom: 40px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .faq h2 {
            color: #333;
            margin-bottom: 30px;
            text-align: center;
            font-size: 2em;
        }

        .faq-item {
            margin-bottom: 20px;
            border-bottom: 1px solid #eee;
            padding-bottom: 20px;
        }

        .faq-item:last-child {
            border-bottom: none;
        }

        .faq-item h4 {
            color: #667eea;
            margin-bottom: 10px;
            cursor: pointer;
            user-select: none;
        }

        .faq-item p {
            color: #666;
        }

        footer {
            background: rgba(0, 0, 0, 0.3);
            color: white;
            text-align: center;
            padding: 30px;
            border-radius: 10px;
            margin-top: 60px;
        }

        footer a {
            color: #fff;
            text-decoration: none;
        }

        footer a:hover {
            text-decoration: underline;
        }

        .divider {
            height: 2px;
            background: rgba(255, 255, 255, 0.1);
            margin: 40px 0;
        }

        @media (max-width: 768px) {
            header h1 {
                font-size: 2em;
            }

            header p {
                font-size: 1.1em;
            }

            .cta-button {
                display: block;
                text-align: center;
                margin: 10px 0;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>🚀 GitHub + Claude Code Setup</h1>
            <p>Complete Course for Mac - From Zero to Developer</p>
            <div class="badges">
                <span class="badge success">✓ Free</span>
                <span class="badge info">⏱ 60-90 min</span>
                <span class="badge warning">👶 Beginner Friendly</span>
                <span class="badge info">🎓 Comprehensive</span>
            </div>
            <div style="margin-top: 30px;">
                <a href="#paths" class="cta-button">Start Learning</a>
                <a href="#files" class="cta-button">View Lessons</a>
            </div>
        </header>

        <div class="stats">
            <h2>By The Numbers</h2>
            <div class="stats-grid">
                <div class="stat-item">
                    <h3>7</h3>
                    <p>Comprehensive Guides</p>
                </div>
                <div class="stat-item">
                    <h3>20+</h3>
                    <p>Hands-On Exercises</p>
                </div>
                <div class="stat-item">
                    <h3>3</h3>
                    <p>Learning Paths</p>
                </div>
                <div class="stat-item">
                    <h3>100%</h3>
                    <p>Open Source</p>
                </div>
            </div>
        </div>

        <div class="features">
            <h2>What You'll Learn</h2>
            <div class="features-grid">
                <div class="feature-item">
                    <div class="icon">📦</div>
                    <h4>Git Basics</h4>
                    <p>Version control, commits, branches, and merging</p>
                </div>
                <div class="feature-item">
                    <div class="icon">☁️</div>
                    <h4>GitHub</h4>
                    <p>Cloud repository hosting and collaboration</p>
                </div>
                <div class="feature-item">
                    <div class="icon">🔐</div>
                    <h4>SSH Authentication</h4>
                    <p>Secure key-based GitHub access</p>
                </div>
                <div class="feature-item">
                    <div class="icon">🤖</div>
                    <h4>Claude Code</h4>
                    <p>AI-powered coding assistance</p>
                </div>
                <div class="feature-item">
                    <div class="icon">⌨️</div>
                    <h4>Terminal Skills</h4>
                    <p>Command-line basics for Mac</p>
                </div>
                <div class="feature-item">
                    <div class="icon">👥</div>
                    <h4>Collaboration</h4>
                    <p>Pull requests and code review</p>
                </div>
            </div>
        </div>

        <div id="paths"></div>
        <h2 style="text-align: center; color: white; margin-bottom: 40px; font-size: 2.5em;">Choose Your Learning Path</h2>

        <div class="paths">
            <div class="path-card">
                <div class="emoji">👶</div>
                <h3>Absolute Beginner</h3>
                <p>Never used Git or GitHub before? Start here!</p>
                <div class="time">⏱ 30-45 minutes</div>
                <p style="font-size: 0.95em; color: #888;">Perfect for those with zero coding experience</p>
                <a href="BEGINNER-GUIDE.md">Start Guide →</a>
            </div>

            <div class="path-card">
                <div class="emoji">📚</div>
                <h3>Some Experience</h3>
                <p>Know some tech? Get comprehensive setup details.</p>
                <div class="time">⏱ 20-30 minutes</div>
                <p style="font-size: 0.95em; color: #888;">Great for intermediate learners</p>
                <a href="LESSON-GITHUB-CLAUDE.md">Read Lesson →</a>
            </div>

            <div class="path-card">
                <div class="emoji">⚡</div>
                <h3>Experienced Developer</h3>
                <p>Focus on Claude Code setup and integration.</p>
                <div class="time">⏱ 10-15 minutes</div>
                <p style="font-size: 0.95em; color: #888;">Quick reference for pros</p>
                <a href="COURSE-OVERVIEW-GITHUB-CLAUDE.md">Quick Setup →</a>
            </div>
        </div>

        <div id="files"></div>
        <div class="files">
            <h2>📚 Course Materials</h2>
            <div class="file-list">
                <div class="file-item">
                    <h4>📖 COMPLETE-BEGINNERS-GUIDE.md</h4>
                    <div class="description">The ultimate beginner's guide with step-by-step instructions and an environment setup appendix</div>
                    <div class="meta">
                        <span>⏱ 60-90 min</span>
                        <span>👶 Absolute Beginner</span>
                    </div>
                </div>

                <div class="file-item">
                    <h4>📄 BEGINNER-GUIDE.md</h4>
                    <div class="description">Simplified step-by-step guide for complete newcomers with no assumptions</div>
                    <div class="meta">
                        <span>⏱ 30 min</span>
                        <span>👶 Beginner</span>
                    </div>
                </div>

                <div class="file-item">
                    <h4>📚 LESSON-GITHUB-CLAUDE.md</h4>
                    <div class="description">Comprehensive lesson with detailed explanations and best practices</div>
                    <div class="meta">
                        <span>⏱ 20 min</span>
                        <span>📚 Intermediate</span>
                    </div>
                </div>

                <div class="file-item">
                    <h4>🎯 COURSE-OVERVIEW-GITHUB-CLAUDE.md</h4>
                    <div class="description">Course structure, learning paths, and navigation guide</div>
                    <div class="meta">
                        <span>⏱ 5 min</span>
                        <span>📍 Navigation</span>
                    </div>
                </div>

                <div class="file-item">
                    <h4>⚡ CHEATSHEET.md</h4>
                    <div class="description">Quick reference for common commands and troubleshooting</div>
                    <div class="meta">
                        <span>⏱ 2 min</span>
                        <span>📋 Reference</span>
                    </div>
                </div>

                <div class="file-item">
                    <h4>🎓 EXERCISES-CHECKPOINTS.md</h4>
                    <div class="description">Hands-on exercises with progressive difficulty and checkpoints (20+ exercises)</div>
                    <div class="meta">
                        <span>⏱ 60-90 min</span>
                        <span>🏆 Practice</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="faq">
            <h2>❓ Frequently Asked Questions</h2>
            <div class="faq-item">
                <h4>❓ Do I need prior coding experience?</h4>
                <p>No! This course is designed for absolute beginners. Start with COMPLETE-BEGINNERS-GUIDE.md or BEGINNER-GUIDE.md.</p>
            </div>

            <div class="faq-item">
                <h4>❓ How long does the full course take?</h4>
                <p>Total time: 2-3 hours (guides + exercises). You can do it all at once or spread it over multiple days.</p>
            </div>

            <div class="faq-item">
                <h4>❓ What if I get stuck?</h4>
                <p>Check the Troubleshooting sections in each guide, use the CHEATSHEET.md, or ask Claude Code for help!</p>
            </div>

            <div class="faq-item">
                <h4>❓ Is this only for Mac?</h4>
                <p>Yes, this guide is Mac-specific. The concepts apply to other OS, but commands differ.</p>
            </div>

            <div class="faq-item">
                <h4>❓ Do I need to pay for anything?</h4>
                <p>No! All tools used (Git, GitHub, Claude Code) have free tiers or are free.</p>
            </div>

            <div class="faq-item">
                <h4>❓ What's Claude Code?</h4>
                <p>Claude Code is an AI assistant that helps you code. It can explain concepts, debug errors, and write code.</p>
            </div>
        </div>

        <footer>
            <p>&copy; 2024 GitHub + Claude Code Setup Guide. Open source course for learning development tools.</p>
            <p style="margin-top: 15px; font-size: 0.95em;">
                <a href="https://github.com/impete/github-claude-setup-guide">View on GitHub</a> | 
                <a href="COURSE-OVERVIEW-GITHUB-CLAUDE.md">Course Overview</a> | 
                <a href="README.md">Main README</a>
            </p>
        </footer>
    </div>
</body>
</html>
```
