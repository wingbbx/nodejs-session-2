# Node.js Session 2 – Hands-on (Sep 19, 2025)

On **September 19, 2025**, we continued our hands-on with **Node.js + Express + Sequelize (MySQL)**.
We extended the CRUD functionality by adding endpoints to **list, create, and delete users**.
The next task is to **rebuild everything and add the edit (update) endpoint**.

## Tech Stack

* Node.js + Express
* Sequelize (ORM) — MySQL
* dotenv for env management

## Project Structure

```
.
├─ src/
│  ├─ routes/
│  ├─ controllers/
│  ├─ models/
│  └─ config/
├─ public/
├─ .env.example
├─ package.json
└─ README.md
```

## Setup

### 1) Clone & Install

```bash
git clone https://github.com/learn-crudzaso/nodejs-session-2.git
cd nodejs-session-2
npm install
```

### 2) Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Database
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_database
DB_DIALECT=mysql

# App
PORT=3000
```

### 3) Database

* Create the database in MySQL (`your_database`).
* Ensure credentials in `.env` match.
* (Optional) Run Sequelize sync or migrations.

## Run

Start the project with:

```bash
node src/index.js
```

Or with **nodemon** (if installed):

```bash
npx nodemon src/index.js
```

## Endpoints (so far)

* `GET    /users` → list users
* `POST   /users` → create new user
* `DELETE /users/:id` → delete user by ID

## Next Challenge

Rebuild the CRUD and add the **update** endpoint:

* `PUT /users/:id` or `PATCH /users/:id`
  Include validation, not-found handling, and correct status codes.