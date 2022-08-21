import express from 'express';
import cors from 'cors';
import { createServer } from 'http';

import Lecturer from './routes/lecturer-route';
import Student from './routes/student-route';
import Subject from './routes/subject-route';
import Task from './routes/task-route';

const app = express();
const port = 5000;

const main = async () => {
  await new Promise<void>((resolve) => {
    createServer(app).listen(port, resolve);
  });

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/api/lecturers', Lecturer);
  app.use('/api/students', Student);
  app.use('/api/subjects', Subject);
  app.use('/api/tasks', Task);

  console.log(`Endpoint: http://localhost:${port}`);
};

main();
