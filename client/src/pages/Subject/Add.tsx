import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import AddSubject from '../../components/Form/Subject/Add';
import Footer from '../../components/Footer';

interface InitialStateSubject {
  code: string;
  name: string;
  sks: string;
  lecturer: string;
}

const SUBJECT_URL = 'http://localhost:5000/api/subjects';
const LECTURER_URL = 'http://localhost:5000/api/lecturers';

const SubjectAdd: FC = () => {
  const [subject, setSubject] = useState<InitialStateSubject>({
    code: '',
    name: '',
    sks: '',
    lecturer: '',
  });
  const [lecturers, setLecturers] = useState<any[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Subject';
    getLecturers();
  }, []);

  const getLecturers = async () => {
    try {
      await axios.get(`${LECTURER_URL}`).then((res) => setLecturers(res.data));
    } catch (err) {
      throw err;
    }
  };

  const postTask = async () => {
    try {
      await axios.post(`${SUBJECT_URL}`, subject);
      navigate('/subject');
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (e: any) => {
    setSubject({ ...subject, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    postTask();
  };

  return (
    <>
      <Navbar />
      <Header title="Subject Add" />
      <main>
        <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <div className="sm:flex-none space-x-2">
              <Link
                to="/subject"
                className="inline-flex items-center justify-center px-2 py-1 rounded border text-sm font-medium hover:text-sky-600 hover:border-sky-600 focus:outline-none focus:ring-transparent sm:w-auto"
              >
                Back
              </Link>
            </div>
            <AddSubject
              subject={subject}
              lecturers={lecturers}
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

export default SubjectAdd;
