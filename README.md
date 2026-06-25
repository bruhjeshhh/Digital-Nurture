# Solutions

This folder contains completed solutions for the hands-on exercises in:

- **GIT/** — Git HOL labs 1–5 (command guides + sample files)
- **JUnit-Mockito-SL4J/** — Maven project with JUnit, Mockito, Spring, and SLF4J exercises
- **Microservices/** — Multi-module Spring Boot 3 / Spring Cloud project (Eureka, gateway, Feign, Resilience4j)
- **PL-SQL/** — Oracle PL/SQL scripts for all 7 exercise sets

## Quick start

```bash
# Java tests (JUnit/Mockito)
cd JUnit-Mockito-SL4J && mvn test

# Microservices (build all modules)
cd Microservices && mvn clean package -DskipTests

# PL/SQL — run schema.sql then exercise scripts in SQL*Plus/SQL Developer

# Git labs — follow SOLUTION.md in each GIT subfolder
```
