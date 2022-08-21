import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import AddLecturer from '../../components/Form/AddLecturer';
import Footer from '../../components/Footer';

interface InitialStateLecturer {
  nidn: string;
  name: string;
}

const LECTURER_URL = 'http://localhost:5000/api/lecturers';

const LecturerAdd: FC = () => {
  const [lecturer, setLecturer] = useState<InitialStateLecturer>({
    nidn: '',
    name: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Lecturer';
  }, []);

  const postTask = async () => {
    try {
      await axios.post(`${LECTURER_URL}`, lecturer);
      navigate('/lecturer');
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (e: any) => {
    setLecturer({ ...lecturer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    postTask();
  };

  return (
    <>
      <Navbar />
      <Header title="Lecturer Add" />
      <main>
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <div className="sm:flex-none space-x-2">
              <Link
                to="/lecturer"
                className="inline-flex items-center justify-center px-2 py-1 rounded border text-sm font-medium hover:text-sky-600 hover:border-sky-600 focus:outline-none focus:ring-transparent sm:w-auto"
              >
                Back
              </Link>
            </div>
            <AddLecturer
              lecturer={lecturer}
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

export default LecturerAdd;
