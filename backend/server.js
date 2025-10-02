import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.js';
import notesRoutes from './routes/notes.js';

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/users', authRoutes);
app.use('/api/notes', notesRoutes);

app.post("/test", (req, res) => {
  res.json({ message: "Post route working", body: req.body });
});


connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});