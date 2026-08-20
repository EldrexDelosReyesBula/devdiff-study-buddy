# DevDiff Study Buddy (`@eldrex/plugin-study-buddy`)

> **🎓 Universal Code Explanation Engine & Interactive Study Buddy for DevDiff**  
> Explains ANY code in ANY language across 5 progressive learning levels.

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717.svg?style=flat&logo=github)](https://github.com/EldrexDelosReyesBula/devdiff-study-buddy)
[![Documentation](https://img.shields.io/badge/Docs-GitHub_Pages-6366f1.svg?style=flat)](https://eldrexdelosreyesbula.github.io/devdiff-study-buddy/)
[![npm version](https://img.shields.io/npm/v/@eldrex/plugin-study-buddy)](https://npmjs.com/package/@eldrex/plugin-study-buddy)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 📖 Live Documentation Portal

The full documentation, guides, and examples are hosted on GitHub Pages:  
👉 **[eldrexdelosreyesbula.github.io/devdiff-study-buddy](https://eldrexdelosreyesbula.github.io/devdiff-study-buddy/)**

---

## 🎯 5 Progressive Explanation Levels

1. **🌱 Beginner**: Plain-English analogies with minimal technical jargon.
2. **📚 Student**: Fundamental computer science concepts, design patterns, and algorithms.
3. **💻 Developer**: Practical API flow, signatures, side effects, and state mutations.
4. **🧠 Senior**: Concurrency, memory allocations, complexity, and performance considerations.
5. **🏗️ Architect**: Module boundaries, coupling, systemic trade-offs, and maintainability.

---

## 🛠️ CLI Commands

```bash
# Explain selected code or active file
devdiff study explain

# Explain code at a specific depth level
devdiff study explain --level beginner
devdiff study explain --level architect

# Ask an educational question about code
devdiff study ask "How does Flexbox handle layout in this stylesheet?"

# Take an interactive codebase tour
devdiff study tour

# Generate a tailored learning path
devdiff study learn authentication
```

---

## 🎨 Multi-Language Support

- **CSS & SCSS**: Breaks down selectors (`.class`, `#id`, `@media`, `:hover`) and explains CSS properties (`display: flex/grid`, `padding`, `margin`, `z-index`, `gap`) in plain English.
- **JavaScript / TypeScript**: Async/await, Promises, closures, generics, interface declarations.
- **Python**: PEP 484 type hints, list comprehensions, decorators, generators.
- **HTML**: DOM tree structure, semantic HTML5, web accessibility (a11y).
- **Rust**: Ownership, borrowing (`&mut`), lifetimes, traits.
- **Go**: Goroutines, channels, CSP concurrency.
- **Universal Fallback**: Language-agnostic structural analysis for any other text-based programming language.

---

## 📦 Installation & Setup

```bash
# Install as a DevDiff plugin
npm install -g @eldrex/plugin-study-buddy
```

Or clone and build from source:

```bash
git clone https://github.com/EldrexDelosReyesBula/devdiff-study-buddy.git
cd devdiff-study-buddy
pnpm install
pnpm build
```

---

## 📄 License

[MIT](LICENSE) © Eldrex Delos Reyes Bula and Contributors
