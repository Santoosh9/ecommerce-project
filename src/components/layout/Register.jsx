import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Register = () => {
  return (
    <>
      <Navbar />
      <div className=" flex justify-center items-center  mb-20 ">
        <div className=" w-[510px] h-[584px] bg-white-100">
          <h3 className="font-semibold text-2xl ml-2">Register</h3>

          <p className=" mt-1 ml-2">
            Already have a account?
            <Link to="/login">
              <span className="text-blue-500 text-opacity-100">Login</span>
            </Link>
          </p>

          <form className="mt-6">
            <div className="flex flex-col ml-3">
              <label className="block ">Full Name</label>
              <input
                type="text"
                className="  border-[1px] border-gray-300 m-1 focus:shadow-md  focus:outline-none  h-[52px] bg-slate-100"
                placeholder=" Please enter your full name"
              ></input>
              <label className="block ">Email</label>
              <input
                type="email"
                className="  border-[1px] border-gray-300 m-1 focus:shadow-md  focus:outline-none  h-[52px] bg-slate-100"
                placeholder=" Please enter your email id"
              ></input>

              <label className=" mt-4 ">Password</label>
              <input
                type="password"
                className=" border-[1px] border-gray-300 m-1 focus:shadow-md  focus:outline-none  h-[52px] bg-slate-100"
                placeholder=" Please enter  password"
              ></input>

              <label className=" mt-4 ">Confrom Password</label>
              <input
                type="password"
                className=" border-[1px] border-gray-300 m-1 focus:shadow-md  focus:outline-none  h-[52px] bg-slate-100"
                placeholder=" Please enter confrom password"
              ></input>

              <div className="flex flex-row   mt-4">
                <p>
                  Agree to all
                  <span className="text-blue-500 text-opacity-100 ml-2">
                    Terms and Cindition
                  </span>
                </p>
              </div>
              <button className=" m-2 text-white bg-blue-400 w-[97%] px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white mt-4 ">
                Register
              </button>
            </div>
          </form>

          <div className="py-2 relative text-center mt-2 ">
            <hr className="absolute w-full top-[50%] z-0" />
            <p className="z-10 mx-auto isolate bg-white  w-12">or</p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm mt-2">
            <button
              href="/login-with-otp"
              className="h-14  col-span-1 bg-dark-100 custom-shadow rounded-md text-dark-500 p-4 flex justify-center items-center gap-2"
            >
              Register with Google
            </button>
            <button className="h-14  col-span-1 bg-blue-200 custom-shadow rounded-md text-dark-500 p-4 flex justify-center items-center gap-2 mr-1">
              Register with FB
            </button>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Register;
