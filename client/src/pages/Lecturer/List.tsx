import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import SearchLecturer from '../../components/Form/Lecturer/Search';
import TableLecturer from '../../components/Table/Lecturer';
import Footer from '../../components/Footer';

const LECTURER_URL = 'http://localhost:5000/api/lecturers';

const LecturerList: FC = () => {
  const [lecturers, setLecturers] = useState<any[]>([]);

  useEffect(() => {
    document.title = 'Lecturer';
    getLecturers();
  }, []);

  const getLecturers = async () => {
    try {
      await axios.get(`${LECTURER_URL}`).then((res) => setLecturers(res.data));
    } catch (err) {
      throw err;
    }
  };

  const deleteLecturer = async (id: any) => {
    try {
      await axios.delete(`${LECTURER_URL}/${id}`);
      getLecturers();
    } catch (err) {
      throw err;
    }
  };

  return (
    <>
      <Navbar />
      <Header title="Lecturer List" />
      <main>
        <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <div className="sm:flex-none space-x-2">
              <Link
                to="/lecturer/add"
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
            <SearchLecturer />
            <TableLecturer
              lecturers={lecturers}
              deleteLecturer={deleteLecturer}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LecturerList;
