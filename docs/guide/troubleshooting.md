# Troubleshooting & FAQ

Answers to common questions and troubleshooting steps for DevDiff Study Buddy.

---

## ❓ Frequently Asked Questions

### 1. Does Study Buddy send my proprietary code to cloud servers?
**No.** By default, Study Buddy runs 100% locally through your active IDE Agent or local Ollama. Cloud AI models are only used if you explicitly configure cloud API keys via `devdiff auth add`.

### 2. What happens if I explain an unsupported or proprietary language?
The **Universal Fallback Engine** automatically engages. It analyzes structural nesting, tokens, keywords, and control flow blocks to provide accurate architectural explanations regardless of syntax.

### 3. Can I use Study Buddy without an internet connection?
**Yes.** As long as you have local Ollama running with a model like `llama3.2:3b`, Study Buddy operates completely offline in air-gapped environments.

---

## 🛠️ Common Issues & Fixes

### Issue: `No AI provider detected`

**Resolution:**
1. Start Ollama in the background:
   ```bash
   ollama serve
   ```
2. Pull a compact coding model:
   ```bash
   ollama pull llama3.2:3b
   ```
3. Or configure a cloud API key:
   ```bash
   devdiff auth add openai
   ```

---

### Issue: `Command not found: devdiff study`

**Resolution:**
Ensure `@eldrex/cli` and `@eldrex/plugin-study-buddy` are installed globally or in your current project:
```bash
npm install -g @eldrex/cli @eldrex/plugin-study-buddy
```

---

## 💬 Getting Help

- 🐙 **GitHub Repository**: [github.com/EldrexDelosReyesBula/devdiff-study-buddy](https://github.com/EldrexDelosReyesBula/devdiff-study-buddy)
- 🐛 **Report a Bug**: [Open an Issue](https://github.com/EldrexDelosReyesBula/devdiff-study-buddy/issues)
- 💬 **Discussions**: [Community Discussions](https://github.com/EldrexDelosReyesBula/devdiff-study-buddy/discussions)
