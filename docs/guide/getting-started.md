# Getting Started with DevDiff Study Buddy

**DevDiff Study Buddy** (`@eldrex/plugin-study-buddy`) is a universal code explanation engine and educational assistant designed to help students, beginners, and seasoned developers quickly understand any code snippet, file, or repository.

---

## 📦 Installation

### Option 1: Install as a DevDiff Plugin (Recommended)

If you already have `@eldrex/cli` installed:

```bash
# Global install via npm
npm install -g @eldrex/plugin-study-buddy

# Or via pnpm
pnpm add -g @eldrex/plugin-study-buddy
```

### Option 2: Clone and Build from Source

For local development or customizing language explainers:

```bash
# Clone the standalone repository
git clone https://github.com/EldrexDelosReyesBula/devdiff-study-buddy.git
cd devdiff-study-buddy

# Install dependencies and build
pnpm install
pnpm build

# Run unit test suite
pnpm test
```

---

## 🚀 First Run in 60 Seconds

### 1. Explain a File
Navigate to any project directory in your terminal and run:

```bash
devdiff study explain
```

Study Buddy will inspect the current directory, detect the language, and output an educational breakdown.

### 2. Choose Your Experience Level
Tailor the technical depth of the explanation:

```bash
devdiff study explain --level beginner
devdiff study explain --level student
devdiff study explain --level developer
devdiff study explain --level senior
devdiff study explain --level architect
```

### 3. Ask Questions
Ask natural-language learning questions about your codebase:

```bash
devdiff study ask "Why is useMemo used here instead of regular calculation?"
```

---

## 🎯 How It Works Under the Hood

```
┌────────────────────────┐
│  Code Snippet or File  │
└───────────┬────────────┘
            │
            ▼
┌────────────────────────┐
│   Language Detector    │ (Identifies CSS, TS, Python, Rust, Go, etc.)
└───────────┬────────────┘
            │
            ▼
┌────────────────────────┐
│  Specialized Explainer │ (Extracts AST, selectors, scopes, patterns)
└───────────┬────────────┘
            │
            ▼
┌────────────────────────┐
│  StudyBuddyAIRouter    │ (Pipes through IDE Agent, Ollama, or Cloud AI)
└───────────┬────────────┘
            │
            ▼
┌────────────────────────┐
│ 5-Level Learning Output│ (Beginner -> Architect)
└────────────────────────┘
```

Next: Explore [The 5 Learning Levels](/guide/levels).
