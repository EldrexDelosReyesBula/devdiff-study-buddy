# The 5 Progressive Learning Levels

One size does not fit all when learning code. DevDiff Study Buddy structures all explanations into **5 distinct depth levels**.

---

## 🌱 Level 1: Beginner

> **Target Audience:** Newcomers, non-technical team members, students learning their first programming language.

- **Philosophy:** Plain-English everyday analogies with zero assumed knowledge.
- **What it covers:**
  - The real-world "job" of the code (e.g., *"This function acts like a bouncer checking IDs before letting people into a club"*).
  - Line-by-line breakdown in conversational English.
  - Definition of every keyword (`async`, `const`, `return`, `margin`).
  - Small experiments the beginner can try without breaking anything.

```bash
devdiff study explain --level beginner
```

---

## 📚 Level 2: Student

> **Target Audience:** Bootcamp students, CS undergraduates, junior developers.

- **Philosophy:** Linking real code to computer science fundamentals and academic concepts.
- **What it covers:**
  - Underlying data structures (hash maps, linked lists, arrays, trees).
  - Algorithmic patterns (divide and conquer, recursion, two pointers, sliding window).
  - Design patterns (Singleton, Factory, Observer, Adapter).
  - Big-O time and space complexity overview.

```bash
devdiff study explain --level student
```

---

## 💻 Level 3: Developer (Default)

> **Target Audience:** Working software engineers, team members reviewing pull requests.

- **Philosophy:** Practical, clean technical summary of execution flow, inputs, outputs, and side effects.
- **What it covers:**
  - Function inputs, parameter types, and return values.
  - Asynchronous execution flow, promise chains, and error handling.
  - State mutations, cache interactions, and database queries.
  - Public vs. private API boundaries.

```bash
devdiff study explain --level developer
```

---

## 🧠 Level 4: Senior

> **Target Audience:** Senior engineers, tech leads, performance engineers.

- **Philosophy:** Deep analysis of memory allocations, concurrency, and performance bottlenecks.
- **What it covers:**
  - Heap vs. stack allocations, garbage collection pressure, and memory leaks.
  - Concurrency hazards (race conditions, deadlocks, lock contention).
  - Boundary edge cases (overflows, network timeouts, serialization overhead).
  - Cache locality and CPU instruction friendliness.

```bash
devdiff study explain --level senior
```

---

## 🏗️ Level 5: Architect

> **Target Audience:** Principal engineers, system architects, engineering managers.

- **Philosophy:** Evaluating domain boundaries, coupling, and long-term maintainability trade-offs.
- **What it covers:**
  - Cohesion and coupling between modules and microservices.
  - Domain-Driven Design (DDD) aggregate consistency.
  - Blast radius of potential failures.
  - Backward compatibility, migration difficulty, and architectural technical debt.

```bash
devdiff study explain --level architect
```

---

## Summary Comparison Matrix

| Level | Key Focus | Assumed Knowledge | Primary Output Metric |
|---|---|---|---|
| **Beginner** | Analogies & Keywords | None | Clarity & Confidence |
| **Student** | CS Fundamentals & Patterns | Syntax basics | Academic Foundation |
| **Developer** | Control Flow & Side Effects | Working programmer | Speed of Comprehension |
| **Senior** | Concurrency & Memory | Deep language mastery | Robustness & Performance |
| **Architect** | Coupling & Boundaries | System-wide scope | Long-term Maintainability |
