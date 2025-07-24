# Part 2: Getting Set Up (Without Getting Overwhelmed)

## Table of Contents

- [4. Code Editors: Where You Actually _Code_ Stuff](#4-code-editors-where-you-actually-code-stuff)
  - [What is a Code Editor?](#what-is-a-code-editor)
  - [Primary Recommendation: VS Code (Visual Studio Code)](#primary-recommendation-vs-code-visual-studio-code)
  - [Wait... What's a Compiler, and Why Do I Need One?](#wait-whats-a-compiler-and-why-do-i-need-one)
  - [What If I Don't Want to Set Up Anything Yet?](#what-if-i-dont-want-to-set-up-anything-yet)
  - [Editors vs. IDEs: What's the Difference?](#editors-vs-ides-whats-the-difference)
  - [What You Need To Do Now](#what-you-need-to-do-now)
- [5. Command Line Interfaces: Not Scary, Just Useful](#5-command-line-interfaces-not-scary-just-useful)
  - [So... What Even Is the Command Line?](#so-what-even-is-the-command-line)
  - [Why You'll Bump Into It in CS](#why-youll-bump-into-it-in-cs)
  - [What Terminal You'll See Depends on Your OS](#what-terminal-youll-see-depends-on-your-os)
  - [What About Linux and "Dual Boot"?](#what-about-linux-and-dual-boot)
- [6. Git and GitHub: Saving Your Work Like a Pro](#6-git-and-github-saving-your-work-like-a-pro)
  - [Enter Git](#enter-git)
  - [Enter GitHub](#enter-github)
  - [Two Ways to Use Git and GitHub](#two-ways-to-use-git-and-github)
  - [Installing Git (One-Time Setup)](#installing-git-one-time-setup)
- [7. Browsers & Extensions: Choose Your Weapon](#7-browsers--extensions-choose-your-weapon)
  - [Common Browsers for Dev Work](#common-browsers-for-dev-work-and-why-you-might-pick-one-over-the-other)
  - [Optional: Extensions You Might Like](#optional-extensions-you-might-like)
- [8. Markdown and Note-Taking Tools: Nerd Notes Made Simple](#8-markdown-and-note-taking-tools-nerd-notes-made-simple)
  - [What Even Is Markdown?](#what-even-is-markdown)
  - [Popular Note-Taking Tools (and Why You'd Use Them)](#popular-note-taking-tools-and-why-youd-use-them)
  - [Comparing the Tools](#comparing-the-tools)
  - [How You Might Use These Together](#how-you-might-use-these-together)

---

## 4. Code Editors: Where You Actually _Code_ Stuff

Let's talk about the thing you'll probably open more than any textbook: **your code editor**.

This is where you'll type your assignments, try out programming concepts, and experiment. It's your sandbox. But not all code editors are created equal, and they're not the same as full-blown **IDEs** (we'll get to that in a bit).

---

### What is a Code Editor?

At its core, a **code editor** is like Notepad, but designed for writing and managing code.  
It helps you:

- Write, edit, and save code files
- Highlight syntax based on programming language
- Auto-complete common patterns and functions
- Organize projects with folders
- Integrate tools like terminals, debuggers, and Git

It _doesn't_ necessarily know how to **run** or **compile** your code - that's where compilers or interpreters come in.

---

### Primary Recommendation: VS Code (Visual Studio Code)

If you're just getting started, **use VS Code**. Here's why:

- ✅ Works on Windows, macOS, Linux
- ✨ Clean and customizable interface
- 🧠 Smart autocomplete and extensions for nearly any language
- 📂 Built-in terminal + file explorer
- 🛠️ Git integration, debugging tools, Markdown support

[🔗 Download VS Code](https://code.visualstudio.com/)

Once installed, you'll likely want to add **language-specific extensions** (like C/C++, Python, Java, etc.) from the built-in marketplace.

---

### Wait... What's a Compiler, and Why Do I Need One?

Great question. A **compiler** is a tool that takes the code you write in a programming language (like C or C++) and turns it into something your computer can actually run - usually machine code.

Without it, your C code is just... text. A compiler makes it executable.

So if you're using **VS Code** and trying to run a C program, you'll need:

1. A **compiler** installed on your system
2. VS Code **configured** to use that compiler

#### Installing a C Compiler

Here's how to get a basic C/C++ compiler set up, depending on your OS:

- **Windows:**

  - Install [MinGW](https://www.mingw-w64.org/) or [TDM-GCC](https://jmeubank.github.io/tdm-gcc/)
  - Add the `bin` folder to your system `PATH` so VS Code can find it

- **macOS:**

  - Install Xcode Command Line Tools using:
    ```bash
    ​xcode-select --install
    ```

- **Linux:**
  - Use your package manager (Ubuntu/Debian):
    ```bash
    sudo apt update && sudo apt install build-essential
    ```

#### Add the Extension in VS Code

Once your compiler is installed, install the **C/C++ extension** in VS Code by Microsoft:  
[🔗 C/C++ Extension for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)

Now VS Code will recognize `.c` or `.cpp` files and connect to your compiler. You can press `Ctrl + Shift + B` to build your program, or use tasks/launch configs.

---

### What If I Don't Want to Set Up Anything Yet?

Totally valid. Especially early on, you might just want to _run code and see what happens_.

#### Online Code Runners & IDEs

Here are some reliable online platforms that don't require installing anything:

- [Replit](https://replit.com/) — Full cloud editor with terminal access
- [OnlineGDB](https://www.onlinegdb.com/) — Great for C/C++ with debugger
- [Programiz](https://www.programiz.com/c-programming/online-compiler/) — Beginner-friendly
- [Google Colab](https://colab.research.google.com/) — Python only, great for ML/data science

These are perfect for:

- Quick experiments
- Running code on shared/public devices
- When you're just learning syntax or flow

> Heads-up: Online platforms can be slow or limited. They're great for learning, but not for long-term project work.

---

### Editors vs. IDEs: What's the Difference?

**Editors** like VS Code or Sublime just provide the environment to _write_ code.

**IDEs (Integrated Development Environments)** like IntelliJ, PyCharm, or Eclipse go further by including:

- Built-in compilers/runtimes
- Debugging and profiling tools
- Code navigation and refactoring features

| Tool              | Type               | Good For          | Notes                               |
| ----------------- | ------------------ | ----------------- | ----------------------------------- |
| **VS Code**       | Editor (light IDE) | All-rounder       | Add extensions for anything         |
| **PyCharm**       | IDE                | Python-heavy work | Heavier, but smarter out of the box |
| **IntelliJ IDEA** | IDE                | Java dev          | Common in backend dev courses       |
| **Sublime Text**  | Editor             | Fast editing      | Light weight notepad                |
| **Replit**        | Online IDE         | Instant testing   | Good for practice, not projects     |

> TL;DR: Start with VS Code. Explore others later based on your interests or course requirements.

---

### What You Need To Do Now

- Install **VS Code** → [https://code.visualstudio.com/](https://code.visualstudio.com/)
- If using C/C++, install a **compiler** (MinGW, GCC, or Xcode tools)
- Add the **C/C++ extension** to VS Code
- Bookmark one or two **online code runners** for quick tests

That's it you're equipped to _write_ and eventually _run_ code when you choose your first language.

Next up: let's talk about **terminals and command lines** don't worry, it's easier than it looks.

## 5. Command Line Interfaces: Not Scary, Just Useful

Let's talk about something that looks kind of old-school, but is actually super useful once you get the hang of it : the command line.

You've probably used your computer mostly by clicking things: folders, apps, icons. The command line is just a different way of doing those things by typing instead.

It might seem strange at first, but it's one of the first tools you'll see in your CS degree, and it'll keep showing up. Let's break it down.

---

### So... What Even Is the Command Line?

Think of it like sending messages to your computer.

Instead of opening a folder by double-clicking it, you type a short instruction to open it.  
Instead of running a program by clicking a play button, you tell the computer to run it using words.

The command line is just a text box where you type instructions and get text back.

It's not fancy. It's not pretty. But it works really well and it's way more powerful than it looks.

---

### Why You'll Bump Into It in CS

In your first year, there will be times when your professor or lab manual says things like:

- "Open the terminal and go to this folder"
- "Run your program from the command line"
- "Compile your code using the terminal"

And if you've never seen it before, it might feel like you're lost. But really, it's just a tool to get things done.

The terminal helps you:

- Open and move through folders
- Run your programs
- Use certain tools that don't have buttons or menus

You don't need to master it right now. You just need to recognize it, open it, and be open to trying it when needed.

---

### What Terminal You'll See Depends on Your OS

Different operating systems give you different versions of the terminal.

- **Windows**  
  You'll see something called Command Prompt or PowerShell.

- **macOS**  
  Comes with a Terminal app already installed. It's ready to go out of the box.

- **Linux**  
  Terminal is built into the system and used often. If you ever use Linux, you'll get comfortable with it quickly.

You don't need to memorize these names. Just know: your computer already has a terminal you just need to find it.

---

### What About Linux and "Dual Boot"?

You might hear people in college talking about using **Linux** or setting up a **dual boot system**.

Here's what that means in plain terms:

- **Linux** is another operating system kind of like Windows or macOS that's popular among computer science people (If you see someone saying "I use Arch btw", you should consider running).
- **Dual booting** means installing both two operating systems (OS) on your laptop, so you can pick one when you turn it on.

Some students do this because many CS tools are designed with Linux in mind.

#### Steps and Links to Dual Boot your system

You can probably get away with WSL or your macOS terminal in the first year, but in case you wish to dual boot, follow the tutorials.

Next, we'll go over **Git and GitHub**, the tools that help you save and organize your code like a pro (even if you're just starting out).

## 6. Git and GitHub: Saving Your Work Like a Pro

One of the first things you'll learn and one of the most useful habits to build is **version control**.

**What is it?**
Version control is just a smart way of saving your work. But instead of saving one file over and over again, you save each step or version. That way, if something breaks, or you want to go back and check what you changed, you can do that easily.

---

### Enter Git

Git is a tool that helps you do version control on your own computer.

It keeps track of changes you make to files over time. If you're writing code for a class, a project, or even just practicing, Git makes it easy to save versions, go back to earlier ones, and avoid the nightmare of "final_final_THISone.c" file names.

---

### Enter GitHub

Git lives on your computer. GitHub is where you send that work online.

GitHub is a website that connects with Git to:

- Back up your code safely online
- Help you access your work from anywhere
- Let you share your projects with others
- Make teamwork easier if you're working in groups

Together, Git and GitHub let you track your work and back it up (This is what major companies use in the industry believe it or not)

---

### Two Ways to Use Git and GitHub

You don't _have_ to use the terminal to work with Git and GitHub. You've got two main paths:

- **Option 1: Terminal Git**  
  You use a few Git commands inside your terminal to save your progress and send updates to GitHub. It's the most flexible way, and you'll see it used a lot in labs and tutorials.

- **Option 2: GitHub Desktop**  
  This is an official app with a simple interface just click buttons to commit, push, and sync. Perfect if you're not ready for the terminal yet. You can download it from [desktop.github.com](https://desktop.github.com/).

You can switch between these anytime. Start with what feels comfortable. Personally I've gone through plenty of Terminal tutorials but have always felt comfortable with GitHub Desktop.

---

### Installing Git (One-Time Setup)

Before you use Git whether with GitHub Desktop or the terminal you need to install it.

Here's how:

- **Windows**  
  Download the installer from [git-scm.com](https://git-scm.com/)  
  Run the setup and follow the default options — no need to change anything  
  After installation, you can use Git in Windows Terminal, Command Prompt, or PowerShell

- **macOS**  
  Git is often already installed  
  If it's not, your Mac will offer to install it the first time you try to use it  
  Or you can install it via [Homebrew](https://brew.sh/) if you decide to use that later

- **Linux**  
  Git is usually pre-installed  
  If it isn't, you can install it using your package manager (don't worry — your Linux setup guide will walk you through it if needed)

Once Git is installed, your system is ready to use either the terminal or GitHub Desktop.

---

Git and GitHub will come up again throughout your CS journey in group projects, assignments, internships, and more. You're not expected to know everything about them right now. Just knowing that these tools exist, what they're meant for, and how to install them already gives you a solid head start.

## 7. Browsers & Extensions: Choose Your Weapon

Let's talk browsers.

Yeah, the thing you probably already use to watch YouTube or check your email. But in CS, your browser becomes way more than that — it's where you'll explore docs, test websites, run cloud-based tools, and even write and submit assignments. So picking the right one actually matters.

---

### Common Browsers for Dev Work (and Why You Might Pick One Over the Other)

Here's a quick run-through of the browsers you'll come across, and what each one is good (or not-so-good) at:

| Browser                 | Pros                                                                     | Cons                                                      |
| ----------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------- |
| **Google Chrome**       | Most popular, excellent dev tools, tons of extensions                    | Heavy on RAM, privacy concerns                            |
| **Mozilla Firefox**     | Open source, great privacy, solid dev tools                              | Some sites are still optimized more for Chrome            |
| **Microsoft Edge**      | Built on the same engine as Chrome (Chromium), surprisingly fast         | Tied into Microsoft ecosystem, may feel redundant         |
| **Brave**               | Focus on privacy, built-in ad/tracker blocking, Chrome extension support | Newer, occasional site compatibility issues               |
| **Opera GX**            | Built for gamers, RAM/CPU limiter, cool design                           | Not standard for dev work, more flashy than practical     |
| **Safari** (macOS only) | Optimized for Mac hardware, energy efficient                             | Limited dev extensions, not ideal for cross-platform work |

> TL;DR:
>
> - **Go with Chrome or Firefox** for most dev tasks.
> - **Try Brave** if you care about privacy but still want Chrome's engine.
> - **Opera GX** is fun, but not super common in dev circles.

There are a lot more different browsers you can explore for different aesthetics and needs like Zen, Arc etc.

---

### Optional: Extensions You Might Like

Once you're settled on a browser, you can boost it with some handy tools (they're called extensions).

Some good ones to start with:

- **Dark Reader** - Adds dark mode to every website
- **uBlock Origin** - Powerful ad and tracker blocker
- **Wappalyzer** - Tells you what tech a site is using (great for web dev)
- **Octotree** - Adds a file-tree for GitHub repos (makes browsing code easier)
- **JSON Viewer** - Makes raw JSON files readable in your browser
- **React Developer Tools** - For debugging React apps (once you get there)

These aren't must-haves, but once you start browsing a lot of docs, GitHub projects, or working with JSON data, they'll make your life a little easier.

---

That's pretty much it for browsers - stick with one that works for your system, and customize it as you go.

## 8. Markdown and Note-Taking Tools: Nerd Notes Made Simple

Okay, real talk: **note-taking is underrated in CS**.

You'll be Googling stuff all the time: errors, definitions, weird compiler flags, commands and if you don't write anything down, it's easy to forget what worked and what didn't. Having your own notes is like building a personal cheat sheet you can keep coming back to.

---

### What Even Is Markdown?

Before we talk apps, let's talk format.

**Markdown** is a lightweight way to write and format text using plain text. It's kind of like the halfway point between typing in Notepad and formatting a Google Doc.

With Markdown, you can:

- Write clean, distraction-free notes
- Add headings, lists, bold/italic text, links, and images using simple symbols
- Turn your notes into nicely formatted documents (especially useful later for READMEs and documentation)

Example:

```markdown
`# This is a Heading`

- This is a bullet point
  **BOLD**
  _italic_
```

This entire document has actually been written and curated in Markdown !

You'll see Markdown used everywhere — GitHub, Obsidian, Notion, even in README files for projects.

> TL;DR: Learn Markdown. It'll make your notes cleaner and more portable.

---

### Popular Note-Taking Tools (and Why You'd Use Them)

Here are some common options CS students use. Each has its own vibe.

#### Obsidian

- Works offline, stores notes as Markdown files
- Excellent for linking ideas (great for big projects or studying)
- Super customizable
- Great for people who like folders, files, and structure

**Use it if**: You like clean, local notes that you fully control

#### Notion

- All-in-one workspace with blocks (text, tables, to-do lists, etc.)
- Cloud-based and accessible from anywhere
- Great for organizing projects, wikis, and collaborative work

**Use it if**: You like drag-and-drop and want something more visual

#### Google Keep / Apple Notes

- Super fast and simple
- Good for jotting down quick thoughts or copying error messages
- Syncs easily across devices

**Use them if**: You want low-effort, fast-access notes on mobile or web

#### The Good Old Reliable Book

Yep, physical notebook. Don't underestimate it.

- Zero distractions
- Fastest way to sketch ideas or diagrams
- Great for journaling your thought process or debugging steps
- Doesn't crash, run out of battery, or need syncing

**Use it if**: You think better on paper or want to unplug while working through a tough bug

---

### Comparing the Tools

| Tool            | Markdown Support | Works Offline | Syncs Across Devices | Good For                        |
| --------------- | ---------------- | ------------- | -------------------- | ------------------------------- |
| **Obsidian**    | ✅ Yes           | ✅ Yes        | ✅ (with setup)      | Deep notes, linking ideas       |
| **Notion**      | ⚠️ Sort of       | ❌ No         | ✅ Yes               | Collaboration, visual structure |
| **Google Keep** | ❌ No            | ✅ Yes        | ✅ Yes               | Quick notes, reminders          |
| **Apple Notes** | ❌ No            | ✅ Yes        | ✅ (Apple devices)   | System-native simplicity        |
| **Joplin**      | ✅ Yes           | ✅ Yes        | ✅ Yes               | Open source alternative         |

---

### How You Might Use These Together

You don't have to pick just one. A common setup might look like:

- **Use Google Keep** to jot ideas or copy paste error messages quickly
- **Use Obsidian** for actual study notes or documentation
- **Use Notion** for semester planning, to-do lists, or group projects
- **Use a Notebook** for Lecture notes and diagrams

Start with whatever feels the easiest. But once coursework picks up, having a structured note system can save you hours of frustration later.
