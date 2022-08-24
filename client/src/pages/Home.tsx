import axios from 'axios';
import { FC, useEffect, useState } from 'react';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Stats from '../components/Stats';
import Footer from '../components/Footer';

const LECTURER_URL = 'http://localhost:5000/api/lecturers';
const STUDENT_URL = 'http://localhost:5000/api/students';
const SUBJECT_URL = 'http://localhost:5000/api/subjects';
const TASK_URL = 'http://localhost:5000/api/tasks';

const Home: FC = () => {
  const [lecturers, setLecturers] = useState<any[]>([]);
  const [students, setStudents] = useState<any[]>([]);
  const [subjects, setSubjects] = useState<any[]>([]);
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    document.title = 'Home';
    getLecturers();
    getStudents();
    getSubjects();
    getTasks();
  }, []);

  const getLecturers = async () => {
    try {
      await axios.get(`${LECTURER_URL}`).then((res) => setLecturers(res.data));
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

  const getTasks = async () => {
    try {
      await axios.get(`${TASK_URL}`).then((res) => setTasks(res.data));
    } catch (err) {
      throw err;
    }
  };

  const stats = [
    { id: 1, name: 'Total Tasks', stat: tasks.length },
    { id: 2, name: 'Total Subjects', stat: subjects.length },
    { id: 3, name: 'Total Students', stat: students.length },
    { id: 4, name: 'Total Lecturers', stat: lecturers.length },
  ];

  return (
    <>
      <Navbar />
      <Header title="Home" />
      <main>
        <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <Stats stats={stats} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
