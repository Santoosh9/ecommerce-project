import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/layout/Login';
import Register from './components/layout/Register';
import Mycourse from './components/dashboard/Mycourse';
import Exams from './components/dashboard/Exams';
import Forms from './components/dashboard/Forms';

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
