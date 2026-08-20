# TypeScript & JavaScript Explainer

The **JavaScript / TypeScript Explainer** analyzes modern ECMAScript, JSX/TSX components, Node.js scripts, and TypeScript type declarations.

---

## ⚡ Key Capabilities

### 1. Asynchronous Flow & Event Loop Mechanics
Deconstructs asynchronous logic:
- Explains `async/await` execution pausing, microtask promise scheduling, and `Promise.all` vs `Promise.allSettled` parallel execution.
- Highlights unhandled promise rejections and error-catching strategies.

### 2. Closures & Lexical Scope
- Identifies captured outer variables inside callback functions, event handlers, and React hooks.
- Explains stale closure risks and memoization patterns (`useCallback`, `useMemo`).

### 3. TypeScript Type Analysis
- Breaks down complex type definitions: union types (`|`), intersection types (`&`), mapped types, conditional types, and utility types (`Partial`, `Pick`, `Omit`, `Record`).
- Explains generic type constraints (`<T extends object>`).

---

## 💡 Example Breakdown

### Input TypeScript Code:
```typescript
async function fetchUserProfile(userId: string): Promise<UserProfile | null> {
  try {
    const res = await fetch(`/api/users/${userId}`);
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error('Failed to fetch user:', err);
    return null;
  }
}
```

### Study Buddy Explanation (Student Level):
> **📚 Student Explanation:**  
> • **Function Signature:** `fetchUserProfile` takes a string parameter `userId` and returns a `Promise` that eventually resolves to either a `UserProfile` object or `null`.  
> • **`async/await` Pattern:** Converts asynchronous HTTP promise handling into clean sequential syntax. The thread does not block; instead, the runtime yields execution until the network request completes.  
> • **Defensive Error Handling:** Uses a `try/catch` block combined with an HTTP response status check (`if (!res.ok)`) to guarantee the function never throws an unhandled exception, gracefully returning `null` on failure.

---

## 🛠️ CLI Usage

```bash
# Explain a TypeScript or JavaScript file
devdiff study explain src/services/api.ts --level developer

# Explain React JSX component
devdiff study explain src/components/Dashboard.tsx --level student
```
