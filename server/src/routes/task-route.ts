import { Router } from 'express';

import {
  index,
  create,
  show,
  update,
  destroy,
} from '../controllers/task-controller';

let Task: Router;

Task = Router();

Task.route('').get(index);
Task.route('').post(create);
Task.route('/:id').get(show);
Task.route('/:id').put(update);
Task.route('/:id').delete(destroy);

export default Task;
