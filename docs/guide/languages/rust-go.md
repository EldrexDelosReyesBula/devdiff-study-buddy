# Rust & Go Explainer

Systems languages often present steep learning curves due to unique memory models and concurrency paradigms. Study Buddy provides dedicated explainers for both **Rust** and **Go**.

---

## 🦀 Rust Explainer

Rust eliminates memory safety bugs without a garbage collector through its compile-time ownership model.

### Key Analysis Features:
1. **Ownership & Moves**: Explains when values are moved vs. copied (`Copy` trait).
2. **Borrowing Rules**: Explains immutable references (`&T`) vs. mutable exclusive references (`&mut T`), preventing data races.
3. **Lifetimes (`'a`)**: Deconstructs generic lifetime annotations and references across function returns and structs.
4. **Pattern Matching & Results**: Explains `match`, `Option<T>`, `Result<T, E>`, and the `?` error propagation operator.

---

## 🐹 Go Explainer

Go is engineered for scalable network services and simple concurrency.

### Key Analysis Features:
1. **Goroutines & CSP Concurrency**: Explains lightweight green threads started via `go doWork()`.
2. **Channels**: Explains unbuffered (synchronous rendezvous) vs. buffered channels, channel direction (`chan<-`, `<-chan`), and deadlocks.
3. **Select Statements**: Explains non-blocking multiplexing across multiple channel communication operations.
4. **Error Handling Idioms**: Explains `if err != nil` explicit error checks and custom error types.

---

## 🛠️ CLI Usage

```bash
# Explain a Rust source file
devdiff study explain src/engine/buffer.rs --level senior

# Explain a Go concurrent server file
devdiff study explain server/worker_pool.go --level developer
```
