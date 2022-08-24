import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import CardTask from '../../components/Card/Task';
import Footer from '../../components/Footer';

const TASK_URL = 'http://localhost:5000/api/tasks';

const TaskInfo: FC = () => {
  const [task, setTask] = useState<any>({});

  const { id } = useParams();

  useEffect(() => {
    document.title = 'Task';
    getTask();
    // eslint-disable-next-line
  }, []);

  const getTask = async () => {
    try {
      await axios.get(`${TASK_URL}/${id}`).then((res) => setTask(res.data));
    } catch (err) {
      throw err;
    }
  };

  return (
    <>
      <Navbar />
      <Header title="Task Info" />
      <main>
        <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <div className="sm:flex-none space-x-2">
              <Link
                to="/task"
                className="inline-flex items-center justify-center px-2 py-1 rounded border text-sm font-medium hover:text-sky-600 hover:border-sky-600 focus:outline-none focus:ring-transparent sm:w-auto"
              >
                Back
              </Link>
              <Link
                to={`/task/edit/${id}`}
                className="inline-flex items-center justify-center px-2 py-1 rounded border text-sm font-medium hover:text-sky-600 hover:border-sky-600 focus:outline-none focus:ring-transparent sm:w-auto"
              >
                Edit
              </Link>
            </div>
            <CardTask task={task} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TaskInfo;
