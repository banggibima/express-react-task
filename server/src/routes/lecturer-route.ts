import { Router } from 'express';

import {
  index,
  create,
  show,
  update,
  destroy,
} from '../controllers/lecturer-controller';

let Lecturer: Router;

Lecturer = Router();

Lecturer.route('').get(index);
Lecturer.route('').post(create);
Lecturer.route('/:id').get(show);
Lecturer.route('/:id').put(update);
Lecturer.route('/:id').delete(destroy);

export default Lecturer;
