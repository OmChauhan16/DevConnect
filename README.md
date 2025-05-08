
# 🔐 React Auth App

A full-stack web application built with React for user authentication and project management. The app includes login, signup, protected routes, and dynamic routing using `react-router-dom`.

---

## 🚀 Features

- ✅ User Signup & Login
- ✅ Authentication using JWT stored in `localStorage`
- ✅ Protected Routes (e.g., Dashboard, Projects, Create Project)
- ✅ Logout functionality
- ✅ Conditional Navbar based on login status
- ✅ Reusable AuthContext using React Context API

---

## 🛠 Tech Stack

### Frontend
- React
- React Router DOM
- Tailwind CSS
- Context API

### Backend (required for full functionality)
- Node.js with Express
- MongoDB or MySQL (optional)
- JWT for authentication

---

## 📁 Project Structure

```
src/
├── App.jsx
├── main.jsx
├── pages/
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Dashboard.jsx
│   ├── Projects.jsx
│   └── CreateProject.jsx
├── context/
│   └── AuthContext.jsx
├── components/
│   └── ProtectedRoute.jsx
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/react-auth-app.git
cd react-auth-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the React app

```bash
npm run dev
```

The app will run on [http://localhost:5173](http://localhost:5173)

---

## 🔌 Backend Setup (Optional)

To fully use the login/signup features, ensure you have a backend running that exposes:

- `POST /api/auth/signup`
- `POST /api/auth/login`

Example response:
```json
{
  "token": "JWT_TOKEN_HERE",
  "user": {
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

---

## 📦 Environment Variables (Optional)

If you're using Vite and need to configure API URLs:

```bash
VITE_API_URL=http://localhost:5000/api
```

Use it in code like:
```js
fetch(`${import.meta.env.VITE_API_URL}/auth/login`, ...)
```

---

## 🧹 Clearing Auth

To log out and clear the session:
```js
localStorage.removeItem("token");
localStorage.removeItem("user");
```

---

## 🧑‍💻 Author

- **Om Chauhan**
- Full Stack Developer

---

## 📄 License

This project is licensed under the MIT License.
