import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import CardLecturer from '../../components/Card/Lecturer';
import Footer from '../../components/Footer';

const LECTURER_URL = 'http://localhost:5000/api/lecturers';

const LecturerInfo: FC = () => {
  const [lecturer, setLecturer] = useState<any>({});

  const { id } = useParams();

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

  return (
    <>
      <Navbar />
      <Header title="Lecturer Info" />
      <main>
        <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <div className="sm:flex-none space-x-2">
              <Link
                to="/lecturer"
                className="inline-flex items-center justify-center px-2 py-1 rounded border text-sm font-medium hover:text-sky-600 hover:border-sky-600 focus:outline-none focus:ring-transparent sm:w-auto"
              >
                Back
              </Link>
              <Link
                to={`/lecturer/edit/${id}`}
                className="inline-flex items-center justify-center px-2 py-1 rounded border text-sm font-medium hover:text-sky-600 hover:border-sky-600 focus:outline-none focus:ring-transparent sm:w-auto"
              >
                Edit
              </Link>
            </div>
            <CardLecturer lecturer={lecturer} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LecturerInfo;
