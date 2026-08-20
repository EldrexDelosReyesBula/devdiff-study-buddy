# Supported Languages Overview

DevDiff Study Buddy is designed to explain **any code in any language**. It combines specialized AST explainers with a powerful Universal Fallback Engine.

---

## 📚 Dedicated Language Guides

Explore in-depth documentation for each supported language category:

- [**🎨 CSS & SCSS Explainer**](/guide/languages/css): Flexbox/Grid layout strategy, specificity, box model spacing, and z-index contexts.
- [**⚡ TypeScript & JavaScript**](/guide/languages/typescript): Async/await flow, event loop, closures, JSX/TSX components, and TypeScript generics.
- [**🐍 Python Explainer**](/guide/languages/python): PEP 484 type hints, decorators, generators, and Pythonic idioms.
- [**🦀 Rust & 🐹 Go**](/guide/languages/rust-go): Rust ownership/lifetimes and Go goroutines/channel concurrency.
- [**🌐 Universal Fallback Engine**](/guide/languages/universal): Automatic heuristic analysis for Ruby, C++, Swift, Kotlin, PHP, SQL, Shell, and any other programming language.

---

## 🔍 Automatic Language Detection

Study Buddy includes an intelligent `LanguageDetector` that inspects file extensions and file content patterns to automatically choose the optimal explainer:

| Detected Language | File Extensions | Explainer Used |
|---|---|---|
| **CSS / SCSS** | `.css`, `.scss`, `.sass`, `.less` | `CSSExplainer` |
| **TypeScript / JS** | `.ts`, `.tsx`, `.js`, `.jsx`, `.mjs`, `.cjs` | `TypeScriptExplainer` |
| **Python** | `.py`, `.pyi`, `.ipynb` | `PythonExplainer` |
| **HTML** | `.html`, `.htm`, `.svg` | `HTMLExplainer` |
| **Rust** | `.rs` | `RustExplainer` |
| **Go** | `.go` | `GoExplainer` |
| **All Other Languages** | `.rb`, `.cpp`, `.swift`, `.kt`, `.php`, `.sh`, `.sql`, etc. | `UniversalExplainer` |
