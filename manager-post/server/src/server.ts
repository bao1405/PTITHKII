import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express';
import path from 'path';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Simulated database
const db = require(path.join(__dirname, 'db.json'));

// Endpoint to get posts
app.get('/posts', (req: Request, res: Response) => {
  res.json(db.posts);
});

// Endpoint to add a post
app.post('/posts', (req: Request, res: Response) => {
  const post = req.body;
  post.created_at = new Date().toISOString();
  db.posts.push(post);
  res.status(201).json(post);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
