# Simple Blog (Dockerized)

## 📦 Стартиране на проекта

```bash
docker compose up --build
```

## 🧾 Описание

- Node.js бекенд, който използва MongoDB
- REST API за създаване и четене на блог постове

## 🔗 Роутове

- `GET /posts` – връща всички постове
- `POST /posts` – създава нов пост (примерно тяло: `{ "title": "Заглавие", "content": "Съдържание" }`)

## 🐳 Услуги

- `backend` – Express сървър на порт 3000
- `mongo` – MongoDB база на порт 27017