import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import SearchTask from '../../components/Form/Task/Search';
import TableTask from '../../components/Table/Task';
import Footer from '../../components/Footer';

const TASK_URL = 'http://localhost:5000/api/tasks';

const TaskList: FC = () => {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    document.title = 'Task';
    getTasks();
  }, []);

  const getTasks = async () => {
    try {
      await axios.get(`${TASK_URL}`).then((res) => setTasks(res.data));
    } catch (err) {
      throw err;
    }
  };

  const deleteTask = async (id: any) => {
    try {
      await axios.delete(`${TASK_URL}/${id}`);
      getTasks();
    } catch (err) {
      throw err;
    }
  };

  return (
    <>
      <Navbar />
      <Header title="Task List" />
      <main>
        <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <div className="sm:flex-none space-x-2">
              <Link
                to="/task/add"
                className="inline-flex items-center justify-center px-2 py-1 rounded border text-sm font-medium hover:text-sky-600 hover:border-sky-600 focus:outline-none focus:ring-transparent sm:w-auto"
              >
                Add
              </Link>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center justify-center px-2 py-1 rounded border text-sm font-medium hover:text-sky-600 hover:border-sky-600 focus:outline-none focus:ring-transparent sm:w-auto"
              >
                Print
              </button>
            </div>
            <SearchTask />
            <TableTask tasks={tasks} deleteTask={deleteTask} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TaskList;
