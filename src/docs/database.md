# 🗄 Database Design

## Users
- id (uuid)
- email
- password
- created_at

---

## Workspaces
- id
- name
- owner_id
- created_at

---

## Workspace Members
- id
- workspace_id
- user_id
- role (admin/member)

---

## Repositories
- id
- workspace_id
- name
- path / github_url
- branch
- status

---

## Files (optional)
- id
- repo_id
- path
- content_hash

---

## Embeddings Metadata
- id
- repo_id
- file_path
- chunk_text
- vector_id

---

## Debug Logs
- id
- repo_id
- error
- stack_trace
- response
- created_at

---

## Notes
- Use PostgreSQL
- Use pgvector for embeddings
- Prisma ORM recommended