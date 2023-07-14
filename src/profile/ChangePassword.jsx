import React, { useState } from 'react';
import Footer from '../components/layout/Footer';
import UserNav from '../components/layout/UserNav';

import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    } else {
      setIcon(eyeOff);
      setType('password');
    }
  };
  return (
    <>
      <UserNav />
      <div className="flex flex-row mt-10  ml-20 mr-20   ">
        <div className="bg-[rgba(253,253,253,1)] border  h-[461px]">
          <div className="   justify-center items-center ml-10 mb-4   ">
            <img
              className="mt-10    ml-10    w-[82px] h-[82px] rounded-full"
              src="./images/me.jpg"
            />

            <p className="mt-2  mr-2   font-[500] text-lg  text-black text-center ">
              Santosh Gajurel
            </p>
            <p className="text-[rgba(44,39,36,0.75)]  mr-4 font-[400] text-base text-center">
              Santosh@gmail.com
            </p>
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
        <div className="bg-[rgba(253,253,253,1)] ">
          <div className="ml-7 mb-10 border ">
            <p className=" font-[500] text-2xl mt-5 ml-7 ">Basic Information</p>
            <form className="mt-6 ml-7 flex-nowrap">
              <div className="flex flex-col ml-3   mr-10   ">
                <label className=" label-text  mt-2 mb-2">
                  Current Password
                </label>
                <input
                  name="text"
                  className=" border-[1px] border-[rgba(177,181,195,1)]  focus:outline h-[52px] px-3 laptop:w-[830px] tablet:w-[380px] mobile:w-[250px] mr-8"
                  placeholder=" Please enter your Current Password"
                ></input>
                <span
                  className="flex justify-end items-center "
                  onClick={handleToggle}
                >
                  <Icon
                    class="absolute mr-12 mt-[-52px]  text-[rgba(44,39,36,0.5)]"
                    icon={icon}
                    size={20}
                  />
                </span>

                <label className="label-text mt-2 mb-2 ">New Password</label>
                <input
                  type="text"
                  className=" border-[1px] border-[rgba(177,181,195,1)]  focus:outline h-[52px] px-3 laptop:w-[830px] tablet:w-[380px] mobile:w-[250px] mr-8"
                  placeholder=" Please enter your New Password"
                ></input>
                <span
                  className="flex justify-end items-center "
                  onClick={handleToggle}
                >
                  <Icon
                    class="absolute mr-12 mt-[-52px]  text-[rgba(44,39,36,0.5)]"
                    icon={icon}
                    size={20}
                  />
                </span>

                <label className=" label-text  mt-2 mb-2">
                  Confrom Password
                </label>
                <input
                  name="number"
                  className="border-[1px] border-[rgba(177,181,195,1)]  focus:outline h-[52px] px-3 laptop:w-[830px] tablet:w-[380px] mobile:w-[300px] mr-8"
                  placeholder=" Please enter your Confrom Password"
                ></input>
                <span
                  className="flex justify-end items-center "
                  onClick={handleToggle}
                >
                  <Icon
                    class="absolute mr-12 mt-[-52px]  text-[rgba(44,39,36,0.5)]  "
                    icon={icon}
                    size={20}
                  />
                </span>

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
      </div>

      <Footer />
    </>
  );
};

export default ChangePassword;
