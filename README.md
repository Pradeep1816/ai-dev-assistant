# 🚀 AI Dev Assistant for Teams

An AI-powered backend system that helps developers **understand codebases** and **debug issues faster** using real project context.

---

## 🧠 Overview

AI Dev Assistant is designed to solve one of the biggest problems in development:

> “Understanding and debugging large codebases is slow, manual, and frustrating.”

This system combines:

* 🔍 **Codebase Knowledge Agent** (RAG-based)
* 🐞 **AI Debugging Assistant**

👉 Result: Faster debugging, better understanding, improved productivity.

---

## ✨ Core Features

### 🔍 Codebase Knowledge Agent

* Ask questions about your codebase
* Understand files, functions, and APIs
* Context-aware answers using embeddings (RAG)

---

### 🐞 AI Debugging Assistant (Core USP)

* Input: error message, stack trace, or logs
* Output:

  * Root cause
  * Related file & line
  * Suggested fix

---

### 🏢 Workspace-Based Architecture

* Multi-tenant system
* Multiple repositories per workspace
* Team-ready design

---

### ⚙️ Background Code Indexing

* Parses codebase
* Smart chunking (function-level)
* Embedding + vector storage

---

## 🏗 Architecture (High-Level)

```text
User → NestJS API → Services → AI + Vector DB → Response
```

Core modules:

* Auth
* Workspace
* Repo
* Indexing
* Knowledge (RAG)
* Debug
* AI
* Vector
* Queue

---

## ⚙️ Tech Stack

* **Backend:** NestJS (Node.js)
* **Database:** PostgreSQL
* **ORM:** Prisma
* **AI:** OpenAI / Local LLM (Ollama)
* **Vector DB:** pgvector / Pinecone
* **Queue:** BullMQ + Redis

---

## 🚀 Project Status

🚧 Currently in development (MVP phase)

Planned:

* [ ] Auth & Workspace
* [ ] Repo integration
* [ ] Code indexing (RAG)
* [ ] AI query system
* [ ] Debugging assistant

---

## 📚 Documentation

Detailed docs are available in the `/docs` folder:

* 📐 Architecture → `docs/architecture.md`
* 🗺 Roadmap → `docs/roadmap.md`
* 🧩 Features → `docs/features.md`
* 🗄 Database → `docs/database.md`
* 🔌 API → `docs/api.md`

---

## 🎯 Target Users

* Small development teams (2–10 developers)
* Freelancers
* Startups

---

## 💡 Vision

> Build an AI system that understands your codebase better than your team does.

---

## 🤝 Contributing

Contributions, ideas, and feedback are welcome!

---

## 📜 License

MIT License
