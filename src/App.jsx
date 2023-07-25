import {  Routes, Route, Navigate } from 'react-router-dom';
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
// import MCQs from './components/CoursePages/Mcqs';
import ProtectedRoute from './Protected';

function App() {

  const user = useSelector((state) => state.auth.token);
  console.log(user);

  return (
    <div className="font-[Poppins]">
      <Routes>
        <Route path="/exam" element={<Exam />} />
        {/* <Route path="/mycourse" element={<Dashbord />} /> */}
        <Route path="/allcourse" element={<Allcourses />}></Route>
        <Route path="/currentoffiars" element={<CurrentOffiars />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paymentsuccess" element={<PaymentSucess />} />
        <Route path="/paymentfail" element={<PaymentFail />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/changepassword" element={<ChangePawssword />} />

        <Route path="/changepassword" element={<Notification />} />

        {/* bibek tasks */}
        {/* <ProtectedRoute path="/learning" loggedIn={user} component={About} /> */}
        <Route path="/exam/attempt" element={<ExamAttempt />} />
        <Route path="/exam/complete" element={<ExamComplete />} />
        {user ? (
          <>
          <Route path="/" element={<Dashbord />} />
          <Route path="/register" element={<Navigate to="/mycourse"/>} />
          <Route path="/mycourse" element={<Dashbord />} />
          <Route path="/login" element={<Dashbord/>} />
          {/* <Route path="/learning" element={<About />} /> */}
          <Route path="/learning/video" element={<PlayVideo />} />
          <Route path="/learning/notes" element={<Notes />} />
          <Route path="/learning/mcqs" element={<MCQs />} />
          <Route path="/learning/complete" element={<Complete />} />
          <Route path="/notifications" element={<NotificationPage />}/>
          </>
        ) : (
          <>
           <Route path="/" element={<Home />} />
           <Route path="/register" element={<Register />} />
           <Route path="/login" element={<Login/>} />
           <Route path="/mycourse" element={<Navigate to="/login" />} />
            {/* <Route path="/learning" element={<Navigate to="/login" />} /> */}
            <Route path="/learning/video" element={<Navigate to="/login" />} />
            <Route path="/learning/notes" element={<Navigate to="/login" />} />
            <Route path="/learning/mcqs" element={<Navigate to="/login" />} />
            <Route path="/learning/complete" element={<Navigate to="/login" />} />
            <Route path="/notifications" element={<Navigate to="/login" />}/>
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
