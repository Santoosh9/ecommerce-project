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
          {/* <div className='font-[Poppins]'> */}
          <Route path='/learning' element={<PlayVideo/>}></Route>
          <Route path='/learning/notes' element={<Notes/>}></Route>
          <Route path='/learning/mcqs' element={<MCQs/>}></Route>
          <Route path='/learning/complete' element={<Complete/>}></Route>
          {/* </div> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
