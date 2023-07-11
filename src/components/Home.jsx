import React from 'react';
import Navbar from './layout/Navbar';
import Card from '../Cards/Cards';
import Footer from './layout/Footer';
import Cards from '../Cards/Cards';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col w-[100%] ">
        <div className="flex flex-row  w-[100%]">
          <div className="w-[50%] bg-[rgba(0,110,185,1)] flex  ">
            <div className=" w-[526px]  h-[332.72px] ml-[134px]  flex flex-col mt-[122px]">
              <div className="">
                <p className="text-white  font-[500] font-Poppins  text-5xl h-[68px] mb-4">
                  Ignite your Learning Journey with SmartGK
                </p>
              </div>

              <div className=" mt-36  ">
                <p className=" font-Poppins text-white  text-base font[500]">
                  Access a vast array of courses, interactive lessons, and
                  expert instructors, all to empower you on your learning
                  journey.
                </p>

                <Link to="/mycourse">
                  <button className=" bg-white text-[rgba(0,110,185,1)]  font-Poppins   text-base font-[500] mt-6 h-[48px] w-[216px]">
                    Explore All Course
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-[50%] z-[-1] ">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="./images/Slider.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="./images/Slider.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="./images/Slider.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div
          className="h-[186px] w-[100%] bg-[rgba(240,249,255,1)]  "
          style={{
            backgroundImage: `url(${'./images/Banner.png'})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div className=" flex flex-col items-center mt-[55px]  text-[rgba(0,110,185,1)] bg">
            <p className="  font-Poppins font-[500]   text-2xl">
              Trusted by over 30,000 students
            </p>
            <p className=" font-[400] font-Poppins text-base">
              Leading companies use the same courses to help employees keep
              their skills fresh.
            </p>
          </div>
        </div>
      </div>

      <Cards />
      <Footer />
    </>
  );
};

export default Home;
