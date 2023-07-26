import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { CiFacebook } from 'react-icons/ci';
import { FcGoogle } from 'react-icons/fc';
import CircularProgress from '@mui/material/CircularProgress';
import { loginUser } from '../../store/auth';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const Login = () => {
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const [loginData, setloginData] = useState({
    email: '',
    password: '',
  });
  const [onLoading, setOnLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginData({ ...loginData, [name]: value });
  };
  const dispatch = useDispatch();

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    } else {
      setIcon(eyeOff);
      setType('password');
    }
  };

  const handleUserLogin = async (e) => {
    e.preventDefault();
    setOnLoading(true);
    console.log(loginData);

    const response = await dispatch(loginUser(loginData)).unwrap();
    console.log(response);
    if (response.success) {
      toast.success(response.message);
      navigate('/mycourse');
    } else {
      toast.error(response.message);
      console.log(response.message);
    }
    setOnLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className=" flex  flex-col justify-center items-center mt-5  flex-nowrap">
        <div className="  bg-white-100    mb-24  laptop:w-[510px]:h-[584px] tablet:w-[450px]:h-[500px] mobile:w-[300px]:h-[370] ">
          <h3 className=" font-[500] text-3xl ml-2 text-[rgba(17,17,17,1)]">
            Login
          </h3>
          <p className=" mt-3 ml-2 font-[500] font-Poppins  text-base text-[rgba(44,39,36,0.75)] ">
            Don't have an account?
            <Link to="/register">
              <span className="text-blue-500 text-opacity-100 ml-1">
                Register
              </span>
            </Link>
          </p>
          <form className="mt-12" onSubmit={(e) => handleUserLogin(e)}>
            <div className="flex flex-col ml-3">
              <label className="label-text ">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="  border-[1px] border-[rgba(177,181,195,1)]  focus:outline h-[52px] px-3"
                placeholder=" Please enter your email id"
              ></input>
              <label className=" label-text  mt-4">Password</label>
              <input
                type={type}
                name="password"
                value={loginData?.password}
                onChange={handleChange}
                className=" border-[1px] border-[rgba(177,181,195,1)] focus:outline  h-[52px]  px-3"
                placeholder=" Please enter your password"
              ></input>
              <span
                className="flex justify-end items-center "
                onClick={handleToggle}
              >
                <Icon
                  className="absolute mr-4 mt-[-52px] text-[rgba(44,39,36,0.5)]"
                  icon={icon}
                  size={20}
                />
              </span>
              <div className="flex flex-row  justify-between mt-4 font-Poppins  text-sm font-[400]">
                <div className="flex flex-row gap-3  text-[rgba(44,39,36,0.5)]">
                  <input type="checkbox" className="" />
                  <p>Remember me</p>
                </div>
                <p className="text-[rgba(0,110,185,1)]">
                  Forgot your password?
                </p>
              </div>
              <button
                type="submit"
                className={onLoading? "text-[rgba(0,110,185,1)] bg-gray-300 h-[50px] mt-8":"text-white bg-[rgba(0,110,185,1)] h-[50px] mt-8"}
                disabled = {onLoading}
              >
                <div className='flex items-center justify-center gap-2'>
                  {onLoading? 
                    <>
                    <CircularProgress color='info' size='1.5rem'/>
                    Signing In...
                    </>:
                    <>Sign In</>
                  }
                </div>
              </button>
            </div>
          </form>
          <div className="py-2 relative text-center mt-2  text-[rgba(44,39,36,0.5)] font-Poppins text-lg">
            <hr className="absolute w-full top-[50%] z-0" />
            <p className="z-10 mx-auto isolate bg-white  w-12 ">or</p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm mt-2">
            <button className="btn-white flex flex-row justify-center items-center gap-[10px]">
              <FcGoogle />
              <p> Login with Google</p>
            </button>
            <button className="btn-primary flex flex-row justify-center items-center gap-[10px]">
              <CiFacebook />
              <p>Login with Facbook</p>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Login;
