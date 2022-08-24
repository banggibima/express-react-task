import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import EditTask from '../../components/Form/Task/Edit';
import Footer from '../../components/Footer';

interface InitialStateTask {
  student: string;
  subject: string;
  title: string;
  description: string;
  deadline_date: string;
  submission_date: string;
  submission_place: string;
  status: string;
}

const TASK_URL = 'http://localhost:5000/api/tasks';
const STUDENT_URL = 'http://localhost:5000/api/students';
const SUBJECT_URL = 'http://localhost:5000/api/subjects';

const TaskEdit: FC = () => {
  const [task, setTask] = useState<InitialStateTask>({
    student: '',
    subject: '',
    title: '',
    description: '',
    deadline_date: '',
    submission_date: '',
    submission_place: '',
    status: '',
  });
  const [students, setStudents] = useState<any[]>([]);
  const [subjects, setSubjects] = useState<any[]>([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Task';
    getTask();
    getStudents();
    getSubjects();
    // eslint-disable-next-line
  }, []);

  const getTask = async () => {
    try {
      await axios.get(`${TASK_URL}/${id}`).then((res) => setTask(res.data));
    } catch (err) {
      throw err;
    }
  };

  const getStudents = async () => {
    try {
      await axios.get(`${STUDENT_URL}`).then((res) => setStudents(res.data));
    } catch (err) {
      throw err;
    }
  };

  const getSubjects = async () => {
    try {
      await axios.get(`${SUBJECT_URL}`).then((res) => setSubjects(res.data));
    } catch (err) {
      throw err;
    }
  };

  const putTask = async () => {
    try {
      await axios.put(`${TASK_URL}/${id}`, task);
      navigate('/task');
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (e: any) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    putTask();
  };

  return (
    <>
      <Navbar />
      <Header title="Task Edit" />
      <main>
        <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <div className="sm:flex-none space-x-2">
              <Link
                to={`/task/info/${id}`}
                className="inline-flex items-center justify-center px-2 py-1 rounded border text-sm font-medium hover:text-sky-600 hover:border-sky-600 focus:outline-none focus:ring-transparent sm:w-auto"
              >
                Back
              </Link>
            </div>
            <EditTask
              task={task}
              students={students}
              subjects={subjects}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TaskEdit;
