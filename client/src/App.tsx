import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import TaskList from './pages/Task/List';
import TaskAdd from './pages/Task/Add';
import TaskInfo from './pages/Task/Info';
import TaskEdit from './pages/Task/Edit';
import SubjectList from './pages/Subject/List';
import SubjectAdd from './pages/Subject/Add';
import SubjectInfo from './pages/Subject/Info';
import SubjectEdit from './pages/Subject/Edit';
import StudentList from './pages/Student/List';
import StudentAdd from './pages/Student/Add';
import StudentInfo from './pages/Student/Info';
import StudentEdit from './pages/Student/Edit';
import LecturerList from './pages/Lecturer/List';
import LecturerAdd from './pages/Lecturer/Add';
import LecturerInfo from './pages/Lecturer/Info';
import LecturerEdit from './pages/Lecturer/Edit';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task" element={<TaskList />} />
          <Route path="/task/add" element={<TaskAdd />} />
          <Route path="/task/info/:id" element={<TaskInfo />} />
          <Route path="/task/edit/:id" element={<TaskEdit />} />
          <Route path="/subject" element={<SubjectList />} />
          <Route path="/subject/add" element={<SubjectAdd />} />
          <Route path="/subject/info/:id" element={<SubjectInfo />} />
          <Route path="/subject/edit/:id" element={<SubjectEdit />} />
          <Route path="/student" element={<StudentList />} />
          <Route path="/student/add" element={<StudentAdd />} />
          <Route path="/student/info/:id" element={<StudentInfo />} />
          <Route path="/student/edit/:id" element={<StudentEdit />} />
          <Route path="/lecturer" element={<LecturerList />} />
          <Route path="/lecturer/add" element={<LecturerAdd />} />
          <Route path="/lecturer/info/:id" element={<LecturerInfo />} />
          <Route path="/lecturer/edit/:id" element={<LecturerEdit />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
