# Week 2: Hands-on 4 - Core Architecture Differences

## Architecture Stack Overview
* **JPA (Java Persistence API):** The official specification/blueprint (rules, annotations like `@Entity`, and interfaces) defining Object-Relational Mapping in Java. It contains no execution code.
* **Hibernate:** The underlying ORM framework implementation that takes the JPA guidelines and translates Java object operations into native SQL database queries.
* **Spring Data JPA:** An advanced abstraction layer sitting on top of Hibernate. It reduces boilerplate code completely by replacing manual session/transaction management with dynamic runtime repository interfaces (`JpaRepository`).

---

## Code Comparison Review

### 1. Native Hibernate (Manual Resource Lifecycle)
Requires explicit session handling, try-catch safety wrapper logic, and manually managed commits/rollbacks:
- Opens `Session` and `Transaction`.
- Requires manual `session.save(entity)` and error fallback `tx.rollback()`.
- Requires mandatory `session.close()` in a `finally` block to prevent resource leaks.

### 2. Spring Data JPA Abstraction (Automated declarative management)
Reduces structural boilerplate to a simple interface extension and declarative method decoration:
- Interface dynamically gains database CRUD methods.
- Methods utilize `@Transactional` to manage transaction boundaries implicitly.
- Database writing is streamlined to a clean `repository.save(entity)` invocation.