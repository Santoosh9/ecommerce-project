import React from 'react';
import UserNav from '../layout/UserNav';
import FooetRecently from '../layout/Foorerreseltly';
import Footer from '../layout/Footer';

const Forms = () => {
  // const data = [
  //   {
  //     id: 1,
  //     title: 'RBB 4th Level Full Course',
  //     date: '2nd Dec 2023',
  //     attempt: 'Attempt Now',
  //   },
  //   {
  //     id: 2,
  //     title: 'RBB 4th Level Full Course',
  //     date: ' Attempt on 2nd Dec 2023',
  //     attempt: 'Attempt Now',
  //   },
  //   {
  //     id: 3,
  //     title: 'RBB 4th Level Full Course',
  //     date: '2nd Dec 2023',
  //     attempt: 'Attempt Now',
  //   },
  //   {
  //     id: 4,
  //     title: 'RBB 4th Level Full Course',
  //     date: '2nd Dec 2023',
  //     attempt: 'Attempt Now',
  //   },
  //   {
  //     id: 5,
  //     title: 'RBB 4th Level Full Course',
  //     date: '2nd Dec 2023',
  //     attempt: 'Attempt Now',
  //   },
  //   {
  //     id: 6,
  //     title: 'RBB 4th Level Full Course',
  //     date: '2nd Dec 2023',
  //     attempt: 'Attempt Now',
  //   },
  //   {
  //     id: 7,
  //     title: 'RBB 4th Level Full Course',
  //     date: '2nd Dec 2023',
  //     attempt: 'Attempt Now',
  //   },
  //   {
  //     id: 8,
  //     title: 'RBB 4th Level Full Course',
  //     date: '2nd Dec 2023',
  //     attempt: 'Attempt Now',
  //   },
  // ];

  return (
    <>
      <UserNav />
      <div className="flex flex-col mt-1">
        <div className="bg-blue-500 h-[150px] ">
          <div className="flex flex-col ml-32 mt-10">
            <p className=" font-bold  text-white">Dashbord</p>
            <p className="mt-2 text-white	">Welcome back!</p>
          </div>
        </div>

        <div className="w-[600px] ml-28 mt-2">
          <ul className=" flex  mt-5 font-link gap-12">
            <li className=" underline  text-sky-400">My Course</li>
            <li>Exams</li>
            <li>Forums</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="h-[220px] w-[248.5px]  flex flex-col  flex-wrap border ml-28 mt-10 ">
            <div className="ml-3  mt-3 flex flex-row">
              <img className="h-[50%] mt-3" src="./images/ic1.png" />

              <ul className="ml-3">
                <p className=" text-lg "> ALL</p>
                <li className=" text-sm">show all post</li>
              </ul>
            </div>
            <div className=" ml-3  mt-3 flex border">
              <img className="h-[50%] mt-3" src="./images/ic2.png" />

              <ul className="ml-3">
                <p className=" text-lg "> Posted by me</p>
                <li className=" text-sm">Show posts posted by me</li>
              </ul>
            </div>
            <div className=" ml-3  mt-3 flex flex-row">
              <img className="h-[50%] mt-3" src="./images/ic3.png" />

              <ul className="ml-3">
                <p className=" text-lg ">Commented by me</p>
                <li className=" text-sm"> Show posts posted by me</li>
              </ul>
            </div>
          </div>
          <div className=" h-[375px] w-[248.5px]  flex flex-col  flex-wrap border ml-28 mt-10 ">
            <div className="mt-6 ml-4 ">
              <p className=" font-bold font-lg">Subjects</p>
              <div className="flex flex-row flex-wrap my-2 ">
                <div className="flex flex-col w-full">
                  <ul>
                    <p className=" text-lg text-sky-700">RBB</p>
                    <li className="text-sm">82645 Posted by this tag</li>
                  </ul>
                </div>

                <div className="flex flex-col  w-full">
                  <ul>
                    <p className=" text-lg text-sky-700">NEA</p>
                    <li className="text-sm">65523 Posted Trending</li>
                  </ul>
                </div>

                <div className="flex flex-col  w-full">
                  <ul>
                    <p className=" text-lg text-sky-700">Lok Sewa</p>
                    <li className="text-sm">Trending</li>
                  </ul>
                </div>

                <div className="flex flex-col  w-full">
                  <ul>
                    <p className=" text-lg text-sky-700">Entrance</p>
                    <li className="text-sm">Trending</li>
                  </ul>
                </div>

                <div className="flex flex-col  w-full">
                  <ul>
                    <p className=" text-lg text-sky-700">RSB</p>
                    <li className="text-sm">Posted by this tag</li>
                  </ul>
                </div>

                <div className="flex flex-col  w-full">
                  <ul>
                    <p className=" text-lg text-sky-700">Nepal Telecom</p>
                    <li className="text-sm">48029 Posted by this tag</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col   border ml-10 mt-10 w-[639px]">
          <div className=" flex flex-row">
            <div className='mt-5 ml-5'>
              <img
                className="rounded-full w-[10%] h-[30%]"
                src="./images/me.jpg"
              />
            </div>
          </div>
          <div className="">hii</div>
        </div>

        <div className=""></div>
      </div>
      <FooetRecently />
      <Footer />
    </>
  );
};

export default Forms;
