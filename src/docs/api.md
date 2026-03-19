# 🔌 API Design

## Auth

POST /auth/signup  
POST /auth/login  
GET  /auth/me  

---

## Workspace

POST /workspaces  
GET  /workspaces  
POST /workspaces/:id/invite  

---

## Repository

POST /repos  
GET  /repos  
POST /repos/:id/index  

---

## Indexing

POST /index/start  
GET  /index/status/:repoId  

---

## Knowledge (RAG)

POST /knowledge/query  

### Request
{
  "repoId": "123",
  "question": "Where is user service defined?"
}

### Response
{
  "answer": "...",
  "sources": ["user.service.ts"]
}

---

## Debug

POST /debug/analyze  

### Request
{
  "repoId": "123",
  "error": "Cannot read property 'map' of undefined"
}

### Response
{
  "rootCause": "...",
  "file": "user.service.ts",
  "line": 45,
  "fix": "Check if users is defined before mapping"
}