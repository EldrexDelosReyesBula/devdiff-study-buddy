# Universal Fallback Engine

When inspecting code written in languages without dedicated AST parsers (such as **Ruby, C++, Swift, Kotlin, PHP, Elixir, Scala, Dart, Zig, Shell, SQL**, or proprietary DSLs), DevDiff Study Buddy's **Universal Fallback Engine** (`UniversalExplainer`) automatically activates.

---

## 🌐 How Universal Analysis Works

The Universal Explainer uses language-agnostic structural heuristics:

```
┌─────────────────────────────────────────┐
│            Arbitrary Source Code        │
└────────────────────┬────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────┐
│  Structural Delimiter & Token Analysis  │ (Braces, indentation, keywords)
└────────────────────┬────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────┐
│     Entity & Control Flow Detection     │ (Functions, classes, loops, calls)
└────────────────────┬────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────┐
│  Contextual AI Synthesis via AIRouter   │ (Outputs structured 5-level explanation)
└─────────────────────────────────────────┘
```

---

## 🔍 Structural Analysis Heuristics

1. **Block Delimiter Mapping**: Identifies scope hierarchy by tracking curly braces (`{}`), indentation-based blocks (Python/YAML style), or keyword pairs (`def...end`, `begin...end`).
2. **Entity Classification**:
   - Function & Method declarations
   - Type, Class, Struct, and Interface definitions
   - Variable assignments and constant bindings
   - Module imports and namespace exports
3. **Control Flow Mapping**: Identifies conditionals, loops, exception handling, and return pathways.

---

## 💡 Example: Ruby Code Analysis

### Input Ruby Code:
```ruby
class PaymentGateway
  def process_transaction(amount, currency = 'USD')
    validate_funds!(amount)
    charge_provider(amount, currency)
  rescue NetworkError => e
    logger.error("Transaction failed: #{e.message}")
    retry_transaction(amount, currency)
  end
end
```

### Universal Explainer Output (Developer Level):
> **💻 Universal Analysis (Ruby):**  
> • **Class Architecture:** Defines `PaymentGateway` encapsulating transaction processing logic.  
> • **Method Definition:** `process_transaction` accepts required `amount` and default parameter `currency = 'USD'`.  
> • **Execution Sequence:** Validates funds, then submits the charge to the payment provider.  
> • **Resilience / Error Handling:** Captures `NetworkError` exceptions, logs diagnostic error details, and executes an automated retry strategy.

---

## 🛠️ CLI Usage

```bash
# Works out-of-the-box on ANY file format
devdiff study explain scripts/deploy.sh
devdiff study explain models/schema.sql
devdiff study explain app/services/billing.rb --level student
```
