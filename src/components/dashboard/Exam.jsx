import React from 'react';
import UserNav from '../layout/UserNav';
import Footer from '../layout/Footer';

const Exam = () => {
  return (
    <>
      <UserNav />
      <div className="flex flex-col mt-1">
        <div className="bg-blue-500 h-[150px] ">
          <div className="flex flex-col ml-32 mt-10">
            <p className=" font-bold  text-white text-lg">Exam</p>
            <p className="mt-2 text-white	">Rastriya Banijya Bank (RBB) Exam</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col border mt-10   mr-10 ml-16 mb-10">
        <div className=" ml-12">
          <ul className="flex flex-col font-link list-disc">
            <p className=" text-xl mb-4 mt-4 ">
              {' '}
              Please read carefully before starting
            </p>
            <li>
              Access a vast array of courses, by a very interactive lessons, and
              expert also by giving a full course.
            </li>
            <li>
              Access a vast array of courses, by a very interactive lessons
              Expert also by giving a full course. Access a vast array of
              courses, by a very interactive lessons Expert also by giving a
              full course.
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
              Access a vast array of courses, by a very interactive lessons
              Expert also by giving a full course.
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
              expert also by giving a full course.
            </li>
            <li>
              {' '}
              Access a vast array of courses, by a very interactive lessons, and
              expert also by giving a full course.
            </li>
            <li>
              Access a vast array of courses, by a very interactive lessons, and
              expert also by giving a full course. Access a vast array of
              courses, by a very interactive lessons Expert also by giving a
              full .
              <li>
                Access a vast array of courses, by a very interactive lessons.
              </li>
            </li>
          </ul>
        </div>
        <div className=" flex flex-row-reverse">
          <p className="btn w-28  mr-3 mb-3">Start Now</p>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Exam;
