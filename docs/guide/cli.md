# CLI Commands Reference

DevDiff Study Buddy integrates directly with the `devdiff` command-line tool.

---

## 1. `devdiff study explain`

Explains a code selection, file, or active staged diff.

```bash
# Auto-detect language and explain at developer level
devdiff study explain

# Specify an explanation level
devdiff study explain --level beginner
devdiff study explain --level student
devdiff study explain --level developer
devdiff study explain --level senior
devdiff study explain --level architect

# Explain a specific file
devdiff study explain src/services/auth.ts --level student
```

---

## 2. `devdiff study ask`

Ask an educational question about your code or architecture.

```bash
# Ask questions about specific code mechanics
devdiff study ask "What does this regex expression match?"
devdiff study ask "How is state managed between components here?"
devdiff study ask "Why is this function using recursion instead of an iterative loop?"
```

---

## 3. `devdiff study tour`

Generates a structured, 5-minute newcomer tour of the entire project repository.

```bash
devdiff study tour
```

### Tour Structure:
- 🏢 **Project Topology**: Frameworks and languages detected.
- 🚪 **Suggested Entry Points**: Key bootstrap files to open first.
- 🔄 **Data Flow Summary**: How requests flow from entry point to database/storage.

---

## 4. `devdiff study learn`

Generates a personalized, step-by-step 5-stage learning path for any topic mapped to real codebase files.

```bash
# Learn authentication in the project
devdiff study learn authentication

# Learn state management
devdiff study learn state-management
```

---

## 5. `devdiff study quiz`

Generates interactive self-quizzes with multiple-choice questions based on real files in the current repository.

```bash
devdiff study quiz error-handling
```

---

## 6. `devdiff study start` & `stop`

Starts or pauses an interactive persistent Study Buddy session in your current terminal session.

```bash
devdiff study start
devdiff study stop
```
