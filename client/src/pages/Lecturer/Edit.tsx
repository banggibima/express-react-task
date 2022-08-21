import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import EditLecturer from '../../components/Form/EditLecturer';
import Footer from '../../components/Footer';

interface InitialStateLecturer {
  nidn: string;
  name: string;
}

const LECTURER_URL = 'http://localhost:5000/api/lecturers';

const LecturerEdit: FC = () => {
  const [lecturer, setLecturer] = useState<InitialStateLecturer>({
    nidn: '',
    name: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Lecturer';
    getLecturer();
    // eslint-disable-next-line
  }, []);

  const getLecturer = async () => {
    try {
      await axios
        .get(`${LECTURER_URL}/${id}`)
        .then((res) => setLecturer(res.data));
    } catch (err) {
      throw err;
    }
  };

  const putTask = async () => {
    try {
      await axios.put(`${LECTURER_URL}/${id}`, lecturer);
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
    putTask();
  };

  return (
    <>
      <Navbar />
      <Header title="Lecturer Edit" />
      <main>
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <div className="sm:flex-none space-x-2">
              <Link
                to={`/lecturer/info/${id}`}
                className="inline-flex items-center justify-center px-2 py-1 rounded border text-sm font-medium hover:text-sky-600 hover:border-sky-600 focus:outline-none focus:ring-transparent sm:w-auto"
              >
                Back
              </Link>
            </div>
            <EditLecturer
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

export default LecturerEdit;
