import { Router } from 'express';

import {
  index,
  create,
  show,
  update,
  destroy,
} from '../controllers/subject-controller';

let Subject: Router;

Subject = Router();

Subject.route('').get(index);
Subject.route('').post(create);
Subject.route('/:id').get(show);
Subject.route('/:id').put(update);
Subject.route('/:id').delete(destroy);

export default Subject;
