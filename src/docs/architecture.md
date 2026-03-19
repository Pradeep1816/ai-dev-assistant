# 🏗 Architecture

## Overview
AI Dev Assistant is a backend-first system built with NestJS, designed around modular architecture and AI-driven workflows.

---

## High-Level Flow

User → API → Services → Vector DB + AI → Response

---

## Core Modules

- Auth Module (JWT authentication)
- User Module
- Workspace Module (multi-tenant system)
- Repo Module
- Indexing Module (code parsing + embeddings)
- Knowledge Module (RAG-based Q&A)
- Debug Module (error analysis)
- AI Module (LLM integration)
- Vector Module (similarity search)
- Queue Module (background jobs)

---

## System Design

### 1. Code Indexing Flow
Code → Parse → Chunk → Embed → Store in Vector DB

---

### 2. Knowledge Query Flow (RAG)
User Question → Vector Search → Context → LLM → Answer

---

### 3. Debugging Flow
Error Input → Context Retrieval → LLM Analysis → Root Cause + Fix

---

## Key Design Principles

- Modular architecture (NestJS)
- Multi-tenant (workspace-based)
- AI-first design
- Scalable background processing