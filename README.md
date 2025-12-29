# 📘 Git Commands & Concepts – Hands-on Learning Guide

This repository documents my **practical learning of Git and GitHub**, covering core version control concepts through real terminal usage.
All commands listed here were executed manually while working with **multiple branches, rebasing, cherry-picking, stashing, and conflict resolution**.

---

## 📌 Repository Purpose

- Learn Git through **hands-on command-line practice**
- Understand **branching strategies**
- Practice **rebasing, cherry-pick, stash, and force push**
- Visualize commit history using graphs
- Work with **local & remote branches**

---

## 🧠 Git Concepts Learned

### 1️⃣ Repository Initialization & First Commit

- Understanding repository state
- Tracking files
- Making the first commit

```bash
git status
git add .
git commit -m "Initial Commit"
git push
```

---

### 2️⃣ Viewing Commit History (Graph View)

Used a custom alias (`graph`) to visualize commit history.

```bash
graph
```

📌 Helped understand:

- Commit ancestry
- Branch divergence
- Merge vs rebase effects

---

### 3️⃣ Branching (main, feature, dev)

Creating and switching branches:

```bash
git branch
git checkout -b feature
git checkout dev
git checkout main
```

Concepts learned:

- Branch pointers
- HEAD movement
- Independent branch histories

---

### 4️⃣ Working with Remote Branches

Listing remote branches:

```bash
git branch -r
git branch -v
```

Auto-setting upstream:

```bash
git config --global --add --bool push.autoSetupRemote true
git push
```

---

### 5️⃣ File Lifecycle in Git

Understanding:

- Untracked files
- Staged changes
- Committed changes

```bash
git status
git add <file>
git diff
git diff --staged
```

---

### 6️⃣ Comparing Branches

Comparing changes between branches:

```bash
git diff main..feature
```

Learned how:

- Files differ across branches
- Commits affect working tree

---

### 7️⃣ Rebasing (Linear History)

Rebasing feature onto main:

```bash
git rebase main
```

Rebasing main onto feature:

```bash
git rebase feature
```

Concepts learned:

- Rewriting history
- Linear commit flow
- Avoiding merge commits

---

### 8️⃣ Handling Diverged Branches

Detected divergence:

```bash
Your branch and 'origin/feature' have diverged
```

Resolved using:

```bash
git push --force-with-lease
```

📌 Learned difference between:

- `--force`
- `--force-with-lease` (safer)

---

### 9️⃣ Cherry-Pick (Selective Commits)

Applying a specific commit from another branch:

```bash
git cherry-pick <commit-hash>
```

Handling conflicts:

```bash
git cherry-pick --continue
git cherry-pick --abort
```

Conflict scenario:

- File deleted in one branch
- Modified in another

---

### 🔟 Conflict Resolution

Steps followed:

1. Open conflicted file
2. Manually resolve content
3. Stage resolved file
4. Continue operation

```bash
git add server.js
git cherry-pick --continue
```

---

### 1️⃣1️⃣ Stashing Work-in-Progress

Temporarily saving changes:

```bash
git stash
git stash list
git stash pop
```

Learned:

- Clean working tree
- Restoring uncommitted changes
- Stash references in graph

---

### 1️⃣2️⃣ Deleting Branches

Removing unnecessary branches:

```bash
git branch -d remote
```

---

### 1️⃣3️⃣ Synchronizing Local & Remote

Fetching and pulling:

```bash
git pull
git fetch
```

Understanding:

- Fast-forward vs non-fast-forward
- When push gets rejected

---

### 1️⃣4️⃣ Git Help & Command Discovery

Using help commands:

```bash
git --help
git push --help
git -h
```

---

## 📊 Final Branch Structure

- **main** → Stable code
- **feature** → Feature experimentation
- **dev** → Active development

---

## 📁 Files Used for Learning

- `index.js` – Basic HTTP server
- `server.js` – Enhanced server with request counter
- `sample.txt` – File tracking & modifications
- `README.md` – Documentation

---

## 🎯 Key Takeaways

✔ Strong understanding of **branching models**
✔ Confidence with **rebase vs merge**
✔ Real-world experience handling **conflicts**
✔ Safe usage of **force push**
✔ Effective **Git history visualization**
✔ Proper **Git workflow discipline**

---

## 🚀 Next Learning Goals

- Git tags & releases
- Interactive rebase
- Squash commits
- Git hooks
- GitHub Actions (CI/CD)

---

✍️ **Maintained by:** Jayesh Jain
📌 **Purpose:** Practical Git mastery through real command-line usage

---
