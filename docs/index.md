---
layout: home

hero:
  name: DevDiff Study Buddy
  text: Universal Code Explanation Engine
  tagline: Your patient senior developer in the terminal and editor. Explains ANY code in ANY language across 5 progressive levels.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: Explore 5 Levels
      link: /guide/levels
    - theme: alt
      text: View on GitHub ↗
      link: https://github.com/EldrexDelosReyesBula/devdiff-study-buddy

features:
  - icon: 🌱
    title: 5 Progressive Levels
    details: From beginner-friendly analogies with zero jargon up to senior memory/concurrency analysis and architect domain trade-offs.
  - icon: 🎨
    title: Specialized CSS Explainer
    details: Breaks down selectors, specificity, flex/grid layout strategies, z-index, and box model dynamics in plain English.
  - icon: 🌐
    title: Universal Fallback Engine
    details: Native AST explainers for TS, JS, Python, HTML, Rust, Go, plus structural heuristic analysis for any other programming language.
  - icon: 🤖
    title: Smart AI Router
    details: Automatically uses active IDE Agent tokens (zero setup), falls back to local Ollama (100% private), or connects to cloud APIs.
  - icon: 🗺️
    title: Interactive Tours & Learning Paths
    details: Take 5-minute codebase onboarding tours or generate customized 5-step learning paths with self-quizzes.
  - icon: ⚡
    title: Fast & Lightweight
    details: Modular standalone architecture with minimal dependencies, building on the official DevDiff Plugin SDK.
---

## Quick Terminal Preview

```bash
# Explain code in the current selection or file
$ devdiff study explain

# Explain code at beginner level
$ devdiff study explain --level beginner

# Ask an educational question about layout or logic
$ devdiff study ask "How does Flexbox handle layout in this stylesheet?"

# Take an interactive newcomer codebase tour
$ devdiff study tour
```
