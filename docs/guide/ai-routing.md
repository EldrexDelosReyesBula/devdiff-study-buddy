# Smart AI Routing Architecture

`@eldrex/plugin-study-buddy` includes an intelligent three-tier AI routing system called `StudyBuddyAIRouter` that guarantees fast, privacy-safe, and resilient code explanations.

---

## The 3-Tier Priority Cascade

```
┌────────────────────────────────────────┐
│               Incoming Request         │
└───────────────────┬────────────────────┘
                    │
                    ▼
┌────────────────────────────────────────┐
│  Tier 1: IDE Agent Context             │ (Fastest, zero config required)
└───────────────────┬────────────────────┘
                    │ (If outside IDE)
                    ▼
┌────────────────────────────────────────┐
│  Tier 2: Local Ollama Model            │ (100% private, runs entirely on CPU/GPU)
└───────────────────┬────────────────────┘
                    │ (If Ollama unavailable)
                    ▼
┌────────────────────────────────────────┐
│  Tier 3: User Cloud AI API Keys        │ (OpenAI, Anthropic, Google Gemini)
└────────────────────────────────────────┘
```

---

## 1. Tier 1: IDE Agent Context

When running inside **VS Code**, **Cursor**, or **Windsurf**, Study Buddy connects to the active editor's native agent runtime:
- **Latency:** < 100ms
- **Cost:** Free (uses active IDE subscription/session)
- **Setup:** Zero configuration required

---

## 2. Tier 2: Local Ollama (100% Private)

If you are running in a standalone terminal without an IDE agent, Study Buddy connects to local [Ollama](https://ollama.com) models:
- **Recommended Model:** `llama3.2:3b` or `qwen2.5-coder:7b`
- **Data Privacy:** Your code never leaves your local machine.
- **Cost:** Free forever

To start Ollama:
```bash
ollama run llama3.2:3b
```

---

## 3. Tier 3: Cloud AI Providers

If you configure API keys with DevDiff (`devdiff auth add`), Study Buddy can leverage powerful cloud models:
- **Supported Providers:** OpenAI (`gpt-4o-mini`), Anthropic (`claude-3-5-haiku`), Google Gemini (`gemini-1.5-flash`).
- **Security:** API keys are stored encrypted in your local OS keychain, and secrets/credentials are automatically redacted before transmission.
