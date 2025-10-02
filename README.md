📝 Notes App with Authentication

A full-stack Notes Management App with JWT authentication and a protected dashboard.
Users can sign up, log in, and manage their notes (Create, Read, Update, Delete) with search and filter functionality.

Built with React + Tailwind CSS (frontend), Node.js + Express (backend), and MongoDB (database).

🚀 Features

🔐 User Authentication (Signup / Login / Logout) using JWT

👤 Protected Dashboard (only accessible when logged in)

📝 CRUD Notes (Create, View, Update, Delete)

🔎 Search & Filter notes by keywords

👥 User Profile (fetch/update profile info)

📱 Responsive UI with Tailwind CSS

🛠 Tech Stack

Frontend: React, Tailwind CSS, React Router, Axios
Backend: Node.js, Express.js, JWT, Bcrypt
Database: MongoDB (Atlas)
Tools: Postman for API testing

📂 Project Structure
project-root/
├── backend/      # Express + MongoDB backend
│   ├── routes/   # API routes (auth, notes)
│   ├── models/   # MongoDB schemas
│   ├── server.js # App entry point
│   └── ...
├── frontend/     # React + Tailwind frontend
│   ├── src/pages # Login, Signup, Dashboard
│   ├── src/components
│   ├── src/api   # Axios API calls
│   └── ...
└── README.md


⚙️ Installation & Setup
1. Clone Repo
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2. Backend Setup
cd backend
npm install


Create a .env file inside backend/:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


Run backend:

npm run dev


Backend runs on: http://localhost:5000

3. Frontend Setup
cd frontend
npm install
npm start


Frontend runs on: http://localhost:3000
