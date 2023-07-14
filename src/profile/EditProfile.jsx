import React from 'react';
import Footer from '../components/layout/Footer';
import UserNav from '../components/layout/UserNav';
import { Link } from 'react-router-dom';

const EditProfile = () => {
  return (
    <>
      <UserNav />;
      <div className="flex flex-row mt-10  ml-20 mr-20  ">
        <div className="bg-[rgba(253,253,253,1)] border   h-[461px]">
          <div className="   justify-center items-center ml-10 mb-4  ">
            <img
              className="mt-10    ml-20    w-[82px] h-[82px] rounded-full"
              src="./images/me.jpg"
            />

            <p className="mt-2    font-[500] text-lg  text-black text-center ">
              Santosh Gajurel
            </p>
            <p className="text-[rgba(44,39,36,0.75)]  font-[400] text-base text-center">
              Santosh@gmail.com
            </p>
            <Link to="/changepassword">
              <button className="  mr-10 h-[52px] mt-3 w-[220px] text-white  bg-[rgba(0,110,185,1)] text-center">
                Change Password
              </button>
            </Link>
          </div>
          <hr className="  mt-0 border-1" />
          <div className=" mt-4 ml-10  mb-10 ">
            <p className=" text-[rgba(44,39,36,0.75)] font-[400] text-lg">
              Phone Number
            </p>
            <p className=" text-black font-[500] text-base mt-1">9800098000</p>
            <p className="text-[rgba(44,39,36,0.75)] font-[400] text-lg mt-3">
              Address
            </p>
            <p className="text-black font-[500] text-base mt-1">Kathmandu</p>
          </div>
        </div>

        <div className="ml-7 mb-10 border bg-[rgba(253,253,253,1)] ">
          <p className=" font-[500] text-2xl mt-5 ml-7 ">Basic Information</p>
          <form className="mt-6 ml-7 flex-nowrap">
            <div className="flex flex-col ml-3  mr-10 flex-nowrap ">
              <label className="label-text m-2">Full Name</label>
              <input
                type="text"
                className="  border-[1px] border-[rgba(177,181,195,1)]  focus:outline h-[52px] px-3 laptop:w-[830px] tablet:w-[480px] mobile:w-[250px] mr-8 "
                placeholder=" Please enter your full name"
              ></input>

              <label className=" label-text  mt-2 mb-2">Email</label>
              <input
                name="text"
                className=" border-[1px] border-[rgba(177,181,195,1)] focus:outline  h-[52px] laptop:w-[830px] tablet:w-[480px] mobile:w-[250px] px-3 mr-8"
                placeholder=" Please enter your email"
              ></input>

              <label className="label-text mt-2  m-2">Full Name </label>
              <input
                type="text"
                className="  border-[1px] border-[rgba(177,181,195,1)]  focus:outline h-[52px] px-3 mr-8 laptop:w-[830px] tablet:w-[480px] mobile:w-[250px]"
                placeholder=" Please enter your full name"
              ></input>

              <label className=" label-text  mt-2  mb-2">Phone</label>
              <input
                name="number"
                className=" border-[1px] border-[rgba(177,181,195,1)] focus:outline  h-[52px]  px-3 mr-8 laptop:w-[830px] tablet:w-[480px] mobile:w-[250px]"
                placeholder=" Please enter your phone number"
              ></input>

              <div className=" flex flex-row mb-5  gap-3">
                <button
                  className=" text-[rgba(255,250,247,1)] bg-[rgba(0,110,185,1)] h-[50px] mt-8 w-[153.38px]   
 "
                >
                  Save
                </button>

                <button
                  className=" bg-[#f4f6f7] h-[50px] mt-8 w-[153.38px] border 
 "
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProfile;