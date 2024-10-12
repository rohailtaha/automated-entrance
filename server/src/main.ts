// server/src/main.ts

import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import bootstrap from './utils/bootstrap';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;

app.get('/api', (_req, res) => {
  res.status(200).json({ message: 'Hello from the server!' });
});

app.get('/api/student/:id', (req, res) => {
  console.log(req.params.id);
  res.status(200).json({ message: 'Hello from the server!' });
});

app.listen(PORT, async () => {
  await bootstrap();
  console.log(`Server is running on port ${PORT}`);
});
