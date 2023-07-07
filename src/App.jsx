import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/layout/Login';
import Register from './components/layout/Register';
import Mycourse from './components/dashboard/Mycourse';
import Exams from './components/dashboard/Exams';
import Forms from './components/dashboard/Forms';
import Exam from './components/dashboard/Exam';

import CurrentOffiars from './components/dashboard/CurrentOffiars';
import Dashbord from './components/dashboard/Dashbord';
import About from './components/CoursePages/About/';
import PlayVideo from './components/CoursePages/PlayVideo';
import Notes from './components/CoursePages/Notes';
import Complete from './components/CoursePages/Complete';
import ExamAttempt from './components/CoursePages/ExamAttempt';
import MCQs from './components/CoursePages/Mcqs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mycourse" element={<Mycourse />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/currentoffiars" element={<CurrentOffiars />} />

          {/* bibek tasks */}
          <Route path="/exam/attempt" element={<ExamAttempt />} />
          <Route path="/learning" element={<About />} />
          <Route path="/learning/video" element={<PlayVideo />} />
          <Route path="/learning/notes" element={<Notes />} />
          <Route path="/learning/mcqs" element={<MCQs />} />
          <Route path="/learning/complete" element={<Complete />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
