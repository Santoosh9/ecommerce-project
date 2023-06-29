import React from 'react';
import UserNav from '../layout/UserNav';
import FooetRecently from '../layout/Foorerreseltly';
import Footer from '../layout/Footer';

const Forms = () => {
  const data = [
    {
      id: 1,
      image: './images/Rectangle 24.png',
      texttop1: 'Lok Sewa',
      texttop2: 'RBB',
      description:
        'Pemrograman web atau web programming adalah istilah yang berkaitan erat dengan website dan internet. Mengapa begitu? Karena web programming adalah salah satu proses pembuatan website untuk keperluan internet yang biasanya disebut dengan istilah WWW atau world wide web. Istilah WWW banyak dikenal karena',
      name: 'Santoosh',
      views: '651324 Views',
      cmt: '56 comments',
      image2: './images/save.png',
    },

    // {
    //   id: 2,
    //   image: './images/Rectangle 24.png',
    //   texttop1: 'Lok Sewa',
    //   texttop2: 'RBB',
    //   description:
    //     'Pemrograman web atau web programming adalah istilah yang berkaitan erat dengan website dan internet. Mengapa begitu? Karena web programming adalah salah satu proses pembuatan website untuk keperluan internet yang biasanya disebut dengan istilah WWW atau world wide web. Istilah WWW banyak dikenal karena',
    //   name: 'Santoosh',
    //   views: '651324 Views',
    //   cmt: '56 comments',
    // },

    // {
    //   id: 3,
    //   image: './images/Rectangle 24.png',
    //   texttop1: 'Lok Sewa',
    //   texttop2: 'RBB',
    //   description:
    //     'Pemrograman web atau web programming adalah istilah yang berkaitan erat dengan website dan internet. Mengapa begitu? Karena web programming adalah salah satu proses pembuatan website untuk keperluan internet yang biasanya disebut dengan istilah WWW atau world wide web. Istilah WWW banyak dikenal karena',
    //   name: 'Santoosh',
    //   views: '651324 Views',
    //   cmt: '56 comments',
    // },
  ];

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
          <div className=" border">
            <div className="mt-5 ml-5 flex flex-row">
              <img
                className="rounded-full w-[10%] h-[30%]"
                src="./images/me.jpg"
              />

              <input
                className=" h-[44px] w-[534px] border-gray-300 mt-1 bg-gray-200 ml-2"
                placeholder="Share what going on your mind"
              />
            </div>
          </div>
          <div className=" flex flex-col flex-wrap w-[637px] h-[300] border mt-10">
            {data.map((item) => (
              <div key={item.id} className="flex flex-row mt-3 ml-3">
                <div className="  mb-24">
                  <img src={item.image} />
                </div>
                <div className="ml-3 flex flex-col">
                  <div className="">
                    <ul className="flex flex-row justify-between">
                      <li className=" bg-slate-400">
                        {item.texttop1}
                        {item.texttop2}
                      </li>
                      <li className="">
                        <img src={item.image2} />
                      </li>
                    </ul>
                  </div>
                  <div className=" flex flex-wrap"> </div>
                  <div className=""> </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=""></div>
      </div>
      <FooetRecently />
      <Footer />
    </>
  );
};

export default Forms;
