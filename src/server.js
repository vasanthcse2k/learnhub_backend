import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { json, urlencoded } from 'express';
import cors from 'cors';
import { login } from './routes/login/login.js'

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/login', login);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something broke!' });
  });
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });