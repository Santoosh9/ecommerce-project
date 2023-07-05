import React from 'react';
import {
  AiTwotoneEnvironment,
  AiFillPhone,
  AiFillMail,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { CiFacebook, CiLinkedin, CiInstagram } from 'react-icons/ci';

const Footer = () => {
  return (
    <div class=" w-[100%]  bg-sky-100 flex flex-col">
      <div className="flex flex-row  justify-center items-center mt-[60px]  mb-[50px]   gap-24 ">
        <div className="w-[327px] h-[281px]  mr-10 ">
          <img src="./images/logo.png" alt="logo-img" />

          <p className=" mt-4  text-base font-Poppins ">
            SmartGK is one of the oldest and most successful learning platform
            which has provided classes to over 30 thousand students.
          </p>
          <div className=" w-[207px] h-[40px] mt-4 ">
            <ul className=" flex flex-row gap-[16px] text-[rgba(44,39,36,0.75)] text-4xl ">
              <li className="hover:text-sky-700">
                <CiFacebook />
              </li>
              <li className="hover:text-sky-700">
                <AiFillTwitterCircle />
              </li>
              <li className="hover:text-sky-700">
                <CiInstagram />
              </li>
              <li className="hover:text-sky-700">
                <CiLinkedin />
              </li>
            </ul>
          </div>
        </div>

        <div className="justify-center items-center flex flex-row mb-16 gap-12">
          <div className="">
            <ul className="font-link font-Poppins text-base h-[180px] ">
              <p className=" font-[500] text-lg mt-2 "> Support</p>
              <li class="mb-4 mt-3">
                <a href="#">Disclaimer Privacy</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Policy Legal & Copyright
                </a>
              </li>
              <li class="mb-4">
                <a href="#">Terms & Condition</a>
              </li>
              <li class="mb-4">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <ul class="font-link font-Poppins">
              <p className=" font-[500] text-lg mt-2 "> Courses</p>
              <li class="mb-4 mt-3">
                <a href="#" class="hover:underline">
                  लोकसेवा (संघ र प्रदेश‌‍‍‌)
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  बैंकिङ तयारी
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  संस्थान तयारी कक्षा
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul class="font-link font-Poppins">
              <p className="  font-[500] text-lg mt-2  "> Contact</p>
              <li class="mb-4  mt-3 ">
                <a href="#" className="hover:underline flex flex-row">
                  <AiFillPhone className=" mt-1 mr-1  text-[rgba(0,110,185,1)]" />
                  <p>9800098000, 9823000679</p>
                </a>
              </li>
              <li class="mb-4">
                <a href="#" className="hover:underline flex flex-row">
                  <AiFillMail className=" mt-1 mr-1  text-[rgba(0,110,185,1)] " />
                  <p>user@gmail.com, contactus@email.com</p>
                </a>
              </li>

              <li class="mb-4">
                <a href="#" className="hover:underline flex flex-row ">
                  <AiTwotoneEnvironment className=" mt-1 mr-1 text-[rgba(0,110,185,1)]" />
                  <p>Kathmandu Kupandol</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="px-4 py-6 bg-gray-100 dark:bg-blue-700    flex flex-col items-center  w-[100%]">
        <span class=" text-white font-Poppins">© Copyright Smart GK 2023</span>
      </div>
    </div>
  );
};

export default Footer;
