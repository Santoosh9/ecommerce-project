import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/layout/Login';
import Register from './components/layout/Register';
import Mycourse from './components/dashboard/Mycourse';
import Exams from './components/dashboard/Exams';
import Forms from './components/dashboard/Forms';
import Exam from './components/dashboard/Exam';
import PlayVideo from './CoursePages/PlayVideo';
import Notes from './CoursePages/Notes';
import MCQs from './CoursePages/Mcqs';
import Complete from './CoursePages/Complete';
import About from './CoursePages/About';
import AttemptExam from './CoursePages/ExamAttempt';


import CurrentOffiars from './components/dashboard/CurrentOffiars';
import Dashbord from './components/dashboard/Dashbord';
// import About from './components/CoursePages/About/';
// import PlayVideo from './components/CoursePages/PlayVideo';
// import Notes from './components/CoursePages/Notes';
// import Complete from './components/CoursePages/Complete';
import ExamAttempt from './CoursePages/ExamAttempt';
import ExamComplete from './CoursePages/ExamComplete';
// import MCQs from './components/CoursePages/Mcqs';

function App() {
  return (
    <div className='font-[Poppins]'>
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
          <Route path="/exam/complete" element={<ExamComplete />} />
          <Route path="/learning" element={<About />} />
          <Route path="/learning/video" element={<PlayVideo />} />
          <Route path="/learning/notes" element={<Notes />} />
          <Route path="/learning/mcqs" element={<MCQs />} />
          <Route path="/learning/complete" element={<Complete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
