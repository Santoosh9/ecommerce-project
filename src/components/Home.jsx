import React from 'react';
import Navbar from './layout/Navbar';

import Cards from './Card';
import Footer from './layout/Footer';

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col w-[100%] ">
        <div className="flex flex-row h-[576px] w-[100%]">
          <div className="w-[50%] bg-blue-500">
            <div className=" mt-48 ml-36">
              <h1 className="text-white  font-Poppins font-medium text-4xl leading-15 ">
                Ignite your Learning <br /> Journey with <br />
                SmartGK
              </h1>
            </div>

            <div className="ml-36 mt-12">
              <p className=" font-Poppins font-normal text-base leading-6 text-white">
                Access a vast array of courses, interactive lessons, and expert
                <br />
                instructors, all designed to empower you on your learning
                journey.
              </p>

              <button className=" bg-sky-50 hover:bg-white-700 h-[35px] w-[216px] text-blue-900 mt-8 font-Poppins">
                Explore All Course
              </button>
            </div>
          </div>

          <div className="w-[50%] object-cover">
            <img className="w-full h-full " src="./images/Slider.png" />
          </div>
        </div>

        <div className="h-[186px] w-[100%]">
          <img
            className="w-full h-full object-cover"
            src="./images/Seperator Banner.png"
            alt="home-footer"
          />
        </div>
      </div>

      <Cards />
      <Footer />
    </>
  );
};

export default Home;
