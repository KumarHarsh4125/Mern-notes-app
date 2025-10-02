# Notes App with Authentication

A full-stack Notes Management App with **JWT authentication** and a **protected dashboard**.  
Users can sign up, log in, and manage their notes (Create, Read, Update, Delete) with search and filter functionality.  

Built with **React + Tailwind CSS** (frontend), **Node.js + Express** (backend), and **MongoDB** (database).

---

## Features
- 🔐 **User Authentication** (Signup / Login / Logout) using JWT  
- 🛡 **Protected Dashboard** (only accessible when logged in)  
- 📝 **CRUD Notes** (Create, View, Update, Delete)  
- 🔎 **Search & Filter** notes by keywords  
- 👤 **User Profile** (fetch/update profile info)  
- 📱 **Responsive UI** with Tailwind CSS  

---

## Tech Stack
**Frontend:** React, Tailwind CSS, React Router, Axios  
**Backend:** Node.js, Express.js, JWT, Bcrypt  
**Database:** MongoDB (Atlas)  
**Tools:** Postman for API testing  

---

## Installation & Setup

### Backend
```bash
cd backend
npm install


Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


Run backend:
npm run dev
```


### Frontend
```bash
cd frontend
npm install
npm start
```
