import React, {useEffect} from 'react';
import UserNav from '../layout/UserNav';
import Footer from '../layout/Footer';
import { Link } from 'react-router-dom';

const Exam = () => {

  useEffect (() => {
    window.scrollTo(0, 0);
  })

  return (
    <>
      {/* <UserNav /> */}
      <div
        className="h-[150px] "
        style={{
          backgroundImage: `url(${'./images/header.jpg'})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="flex flex-col ml-8 tablet:ml-20  font-Poppins ">
          <p className=" font-[500]  text-3xl text-white  mt-10">Exam</p>
          <p className="mt-2 text-white	 font-[300] text-xl">
            Rastriya Banijya Bank (RBB) Exam
          </p>
        </div>
      </div>

      <div className="flex flex-col border mt-10 tablet:mr-10 ml-6 tablet:ml-24 laptop:ml-36 mb-10  w-[90%] tablet:w-[80%]  justify-center ">
        <div className=" ml-12">
          <ul className="flex flex-col  list-disc text-[rgba(44,39,36,0.75)] font-[400]  text-base mr-10">
            <p className=" text-[rgba(17,17,17,1)] mb-4 mt-4 font-Poppins font-[500] text-xl ">
              Please read carefully before starting
            </p>
            <li>
              Access a vast array of courses, by a very interactive lessons, and
              expert also by giving a full course.
            </li>
            <li>
              Access a vast array of courses, by a very interactive lessons
              Expert also by giving a full course.
            </li>
            <li>
              Access a vast array of courses, by a very interactive lessons.
            </li>
            <li>
              {' '}
              Access a vast array of courses, by a very interactive lessons, and
              expert also by giving a full course.
            </li>
            <li>
              Access a vast array of courses, by a very interactive lessons.
              Access a vast array of courses.
            </li>
            <li>
              {' '}
              Access a vast array of courses, by a very interactive lessons, and
              expert also by giving a full course.
            </li>
            <li>
              Access a vast array of courses, by a very interactive lessons, and
              expert also by giving a full course.
            </li>
            <li>
              Access a vast array of courses, by a very interactive lessons.
              Access a vast array of courses, by a very interactive lessons
              Expert also by giving a full course.
            </li>
            <li>
              Access a vast array of courses, by a very interactive lessons, and
              expert also by giving a full course. Access a vast array of
              courses, by a very interactive lessons. Access a vast array of
              courses, by a very interactive lessons Expert also by giving a
              full course.
            </li>
            <li>
              {' '}
              Access a vast array of courses, by a very interactive lessons, and
              expert also by giving a full course. Access a vast array of
              courses, by a very interactive lessons. Access a vast array of
              courses, by a very interactive lessons Expert also by giving a
              full course. Access a vast array of courses, by a very interactive
              lessons. Access a vast array of courses, by a very interactive
              lessons Expert also by giving a full course.
            </li>
            <li>
              Access a vast array of courses, by a very interactive lessons, and
              expert also by giving a full course. Access a vast array of
              courses, by a very interactive lessons Expert also by giving a
              full . Access a vast array of courses, by a very interactive
              lessons. Access a vast array of courses, by a very interactive
              lessons Expert also by giving a full course.
              <li>
                Access a vast array of courses, by a very interactive lessons.
                Access a vast array of courses, by a very interactive lessons.
                Access a vast array of courses, by a very interactive lessons
                Expert also by giving a full course. Access a vast array of
                courses, by a very interactive lessons.
              </li>
            </li>
          </ul>

          <div className=" flex flex-row-reverse mt-5 mr-8 mb-4">
            <Link to='attempt'>
              <button className=" font-Poppins w-28  h-[48px]  font-[400] text-base  bg-[rgba(0,110,185,1)] text-center  text-white">
                Start Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Exam;
