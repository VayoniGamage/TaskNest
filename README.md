# TaskNest 🪺 - Backend

**TaskNest** is a simple yet complete task management backend built with **Node.js**, **Express.js**, and **MongoDB**. It features a fully functional RESTful API with full **CRUD** operations, **unit testing using Jest**, and **Postman-ready endpoints** for easy testing. It's the backend for a mobile or web-based to-do application.

---

## 🧰 Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB object modeling
- **Jest** – Unit testing
- **Postman** – API testing
- **GitHub Actions** – (Coming soon) CI/CD
- **Render / Vercel** – (Optional) Deployment

---

## 📁 Folder Structure

TaskNest/
├── controllers/
│ └── todoController.js
├── models/
│ └── todoModel.js
├── routes/
│ └── todoRoutes.js
├── tests/
│ └── todo.test.js
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md

---

## 🚀 Features

- ✅ Create, Read, Update, Delete (CRUD) tasks
- ✅ RESTful API with clear structure
- ✅ MongoDB database with Mongoose
- ✅ Jest unit tests
- ✅ Tested with Postman
- 🚧 GitHub Actions for CI/CD (optional future step)

---

🔗 API Endpoints
| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| GET    | /api/todos      | Get all tasks     |
| GET    | /api/todos/\:id | Get task by ID    |
| POST   | /api/todos      | Create new task   |
| PUT    | /api/todos/\:id | Update task by ID |
| DELETE | /api/todos/\:id | Delete task by ID |
📌 Use Postman to test these endpoints.


🧑‍💻 Author
Vayoni Gamage
📍 Final Year Undergraduate – BSc (Hons) in Software Engineering
📫 LinkedIn - https://www.linkedin.com/in/vayoni-gamage/
📧 Email: vayonithathsarani2770@gmail.com
