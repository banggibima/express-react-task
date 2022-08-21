import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import FormSearchSubject from '../../components/Form/SearchSubject';
import TableSubject from '../../components/Table/Subject';
import Footer from '../../components/Footer';

const SUBJECT_URL = 'http://localhost:5000/api/subjects';

const SubjectList: FC = () => {
  const [subjects, setSubjects] = useState<any[]>([]);

  useEffect(() => {
    document.title = 'Subject';
    getSubjects();
  }, []);

  const getSubjects = async () => {
    try {
      await axios.get(`${SUBJECT_URL}`).then((res) => setSubjects(res.data));
    } catch (err) {
      throw err;
    }
  };

  const deleteSubject = async (id: any) => {
    try {
      await axios.delete(`${SUBJECT_URL}/${id}`);
      getSubjects();
    } catch (err) {
      throw err;
    }
  };

  return (
    <>
      <Navbar />
      <Header title="Subject List" />
      <main>
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <div className="sm:flex-none space-x-2">
              <Link
                to="/subject/add"
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
            <FormSearchSubject />
            <TableSubject subjects={subjects} deleteSubject={deleteSubject} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SubjectList;
