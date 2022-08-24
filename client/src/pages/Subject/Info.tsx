import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import CardSubject from '../../components/Card/Subject';
import Footer from '../../components/Footer';

const SUBJECT_URL = 'http://localhost:5000/api/subjects';

const SubjectInfo: FC = () => {
  const [subject, setSubject] = useState<any>({});

  const { id } = useParams();

  useEffect(() => {
    document.title = 'Subject';
    getSubject();
    // eslint-disable-next-line
  }, []);

  const getSubject = async () => {
    try {
      await axios
        .get(`${SUBJECT_URL}/${id}`)
        .then((res) => setSubject(res.data));
    } catch (err) {
      throw err;
    }
  };

  return (
    <>
      <Navbar />
      <Header title="Subject Info" />
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
              <Link
                to={`/subject/edit/${id}`}
                className="inline-flex items-center justify-center px-2 py-1 rounded border text-sm font-medium hover:text-sky-600 hover:border-sky-600 focus:outline-none focus:ring-transparent sm:w-auto"
              >
                Edit
              </Link>
            </div>
            <CardSubject subject={subject} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SubjectInfo;
