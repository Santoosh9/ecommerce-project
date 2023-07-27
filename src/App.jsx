import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux/';
import Home from './components/Home';
import Login from './components/layout/Login';
import Register from './components/layout/Register';
import Exam from './components/dashboard/Exam';
import PlayVideo from './CoursePages/PlayVideo';
import Notes from './CoursePages/Notes';
import MCQs from './CoursePages/Mcqs';
import Complete from './CoursePages/Complete';
import About from './CoursePages/About';
import NotificationPage from './components/layout/NotifiactionPage';
import CurrentOffiars from './components/dashboard/CurrentOffiars';
import Dashbord from './components/dashboard/Dashbord';
import ExamAttempt from './CoursePages/ExamAttempt';
import ExamComplete from './CoursePages/ExamComplete';
import Allcourses from './components/dashboard/Allcourses';
import Payment from './components/payment/Payment';
import PaymentSucess from './components/payment/PaymentSucess';
import PaymentFail from './components/payment/PaymentFail';
import EditProfile from './profile/EditProfile';
import ChangePawssword from './profile/ChangePassword';
import {ProtectedRoute, PreventedRoute} from './Protected';

function App() {

  const user = useSelector((state) => state.auth.token);
  console.log(user);

  return (
    <div className="font-[Poppins]">
      <Routes>
        <Route path="/" element={<PreventedRoute><Home /></PreventedRoute>} />
        <Route path="/login" element={<PreventedRoute><Login/></PreventedRoute>} />
        <Route path="/register" element={<PreventedRoute><Register/></PreventedRoute>} />
        <Route path="/allcourse" element={<Allcourses />} />
        <Route path="/currentoffiars" element={<CurrentOffiars />} />

        <Route path="/mycourse" element={<ProtectedRoute><Dashbord/></ProtectedRoute>} />
        <Route path="/learning" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/learning/video" element={<ProtectedRoute><PlayVideo /></ProtectedRoute>} />
        <Route path="/learning/notes" element={<ProtectedRoute><Notes /></ProtectedRoute>} />
        <Route path="/learning/mcqs" element={<ProtectedRoute><MCQs /></ProtectedRoute>} />
        <Route path="/learning/complete" element={<ProtectedRoute><Complete /></ProtectedRoute>} />

        <Route path="/exam" element={<ProtectedRoute><Exam /></ProtectedRoute>} />
        <Route path="/exam/attempt" element={<ProtectedRoute><ExamAttempt /></ProtectedRoute>} />
        <Route path="/exam/complete" element={<ProtectedRoute><ExamComplete /></ProtectedRoute>} />

        <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
        <Route path="/paymentsuccess" element={<ProtectedRoute><PaymentSucess /></ProtectedRoute>} />
        <Route path="/paymentfail" element={<ProtectedRoute><PaymentFail /></ProtectedRoute>} />

        <Route path="/notifications" element={<ProtectedRoute><NotificationPage /></ProtectedRoute>} />
        
        <Route path="/editprofile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
        <Route path="/changepassword" element={<ProtectedRoute><ChangePawssword /></ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;
