# Python Explainer

The **Python Explainer** deconstructs modern Python code (Python 3.8+), data science notebooks, Flask/FastAPI/Django endpoints, and script workflows.

---

## 🐍 Key Capabilities

### 1. Pythonic Idioms & Patterns
- **Comprehensions**: Explains list, dict, and set comprehensions in plain procedural terms.
- **Decorators**: Explains higher-order decorator wrapping, `@functools.wraps`, and runtime argument injection.
- **Generators**: Explains `yield` lazy evaluation, memory conservation for large datasets, and iterator protocols.
- **Context Managers**: Explains `with` statements, resource management, and `__enter__`/`__exit__` lifecycle hooks.

### 2. Type Hints (PEP 484 / 585)
- Deconstructs `typing.Union`, `Optional`, `TypeVar`, `Protocol`, and Pydantic models.

---

## 💡 Example Breakdown

### Input Python Code:
```python
from functools import wraps
import time

def time_it(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        duration = time.perf_counter() - start
        print(f"{func.__name__} took {duration:.4f}s")
        return result
    return wrapper
```

### Study Buddy Explanation (Senior Level):
> **🧠 Senior Explanation:**  
> • **Decorator Anatomy:** `time_it` is a higher-order function that wraps target callables to profile execution time.  
> • **`@wraps(func)`:** Preserves the wrapped function's original metadata (`__name__`, `__doc__`, `__annotations__`), preventing debugging and introspection anomalies.  
> • **Variadic Arguments (`*args, **kwargs`):** Ensures universal compatibility across any function signature by forwarding all positional and keyword arguments untouched.  
> • **Precision Timer:** Uses `time.perf_counter()` to provide a monotonic clock with high resolution unaffected by system clock adjustments.

---

## 🛠️ CLI Usage

```bash
# Explain a Python file
devdiff study explain app/routes/users.py --level developer
```
