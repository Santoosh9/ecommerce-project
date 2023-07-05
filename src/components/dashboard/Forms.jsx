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

    {
      id: 2,
      image: './images/Rectangle 24.png',
      texttop1: 'Lok Sewa',
      texttop2: 'RBB',
      description:
        'Pemrograman web atau web programming adalah istilah yang berkaitan  dengan website dan internet. Mengapa begitu? Karena web programming adalah salah satu proses pembuatan website untuk keperluan internet yang biasanya disebut dengan istilah WWW atau world wide web. Istilah WWW banyak dikenal karena',
      name: 'Santoosh',
      views: '651324 Views',
      cmt: '56 comments',
      image2: './images/save.png',
    },

    {
      id: 3,
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
  ];

  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="h-[220px] w-[248.5px]  flex flex-col  flex-wrap border ml-28 mt-10 ">
            <div className="ml-3  mt-3 flex flex-row">
              <img className="h-[50%] mt-3" src="./images/ic1.png" />

              <ul className="ml-3">
                <p className=" text-[rgba(63,67,84,1)] font[500]  font-Poppins  text-base">
                  ALL
                </p>
                <li className=" sm-text">show all post</li>
              </ul>
            </div>
            <div className=" ml-3  mt-3 flex border">
              <img className="h-[50%] mt-3" src="./images/ic2.png" />

              <ul className="ml-3">
                <p className=" text-[rgba(63,67,84,1)] font[500] font-Poppins text-base ">
                  Posted by me
                </p>
                <li className=" sm-text">Show posts posted by me</li>
              </ul>
            </div>
            <div className=" ml-3  mt-3 flex flex-row">
              <img className="h-[50%] mt-3" src="./images/ic3.png" />

              <ul className="ml-3">
                <p className=" text-[rgba(63,67,84,1)] font[500]  text-base font-Poppins ">
                  Commented by me
                </p>
                <li className="sm-text ">Show posts posted by me</li>
              </ul>
            </div>
          </div>
          <div className=" h-[375px] w-[248.5px]  flex flex-col  flex-wrap border ml-28 mt-10 ">
            <div className="mt-6 ml-4 ">
              <p className=" font-bold font-lg">Subjects</p>
              <div className="flex flex-row flex-wrap my-2 ">
                <div className="flex flex-col w-full">
                  <ul>
                    <p className="text-[rgba(63,67,84,1)] font[500]  text-base font-Poppins ">
                      RBB
                    </p>
                    <li className="sm-text">82645 Posted by this tag</li>
                  </ul>
                </div>

                <div className="flex flex-col  w-full">
                  <ul>
                    <p className="text-[rgba(63,67,84,1)] font[500]  text-base font-Poppins ">
                      NEA
                    </p>
                    <li className="sm-text">65523 Posted Trending</li>
                  </ul>
                </div>

                <div className="flex flex-col  w-full">
                  <ul>
                    <p className="text-[rgba(63,67,84,1)] font[500]  text-base font-Poppins ">
                      Lok Sewa
                    </p>
                    <li className="sm-text">Trending</li>
                  </ul>
                </div>

                <div className="flex flex-col  w-full">
                  <ul>
                    <p className="text-[rgba(63,67,84,1)] font[500]  text-base font-Poppins ">
                      Entrance
                    </p>
                    <li className="sm-text">Trending</li>
                  </ul>
                </div>

                <div className="flex flex-col  w-full">
                  <ul>
                    <p className="text-[rgba(63,67,84,1)] font[500]  text-base font-Poppins ">
                      RSB
                    </p>
                    <li className="sm-text">Posted by this tag</li>
                  </ul>
                </div>

                <div className="flex flex-col  w-full">
                  <ul>
                    <p className="text-[rgba(63,67,84,1)] font[500]  text-base font-Poppins ">
                      Nepal Telecom
                    </p>
                    <li className="sm-text">48029 Posted by this tag</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col   border ml-10 mt-10 w-[700px]">
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
          <div className=" flex flex-col flex-wrap w-[700px] h-[350] border mt-10">
            {data.map((item) => (
              <div key={item.id} className="flex flex-row mt-3 ml-3">
                <div className=" mb-24">
                  <img src={item.image} />
                </div>

                <div className="ml-3 flex flex-row justify-between">
                  <div className="flex flex-col">
                    <div>
                      <ul className="flex flex-row  gap-10 text-sky-600	">
                        <li className="bg-cyan-50 rounded-md">
                          {item.texttop1}
                        </li>
                        <li className="bg-cyan-50 rounded-md">
                          {item.texttop2}
                        </li>
                      </ul>
                    </div>

                    <div className=" mr-3 w-[450px] h-[120px] flex-wrap font-Poppins text-rgba[(44,39,36,0.75)] font-[400] text-xs">
                      {item.description}
                    </div>

                    <div className=" mt-10  flex flex-row">
                      <ul className="text-sky-600">
                        {item.name}
                        <li className=" text-black">3 weeks ago</li>
                      </ul>

                      <p className="ml-2 text-sky-600">{item.views}</p>
                      <p className="ml-6 text-sky-600">{item.cmt}</p>
                    </div>
                  </div>
                  <div className=" ">
                    <img src={item.image2} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <div className=" h-[390px] w-[260px]  flex flex-col  flex-wrap border ml-16 mt-10 ">
            <div className="mt-6 ml-4 ">
              <p className=" font-bold font-lg">Recommended Courses</p>
              <div className="flex flex-row flex-wrap my-2 ">
                <div className="flex flex-col w-full mt-1">
                  <ul>
                    <p className="text-[rgba(63,67,84,1)] font[500]  text-base font-Poppins ">
                      RBB 4th Level Course
                    </p>
                    <li className="sm-text">82645 Posted by this tag</li>
                  </ul>
                </div>

                <div className="flex flex-col  w-full mt-1">
                  <ul>
                    <p className="text-[rgba(63,67,84,1)] font[500]  text-base font-Poppins ">
                      RBB 4th Level Course
                    </p>
                    <li className="sm-text">65523 Posted Trending</li>
                  </ul>
                </div>

                <div className="flex flex-col  w-full mt-1">
                  <ul>
                    <p className="text-[rgba(63,67,84,1)] font[500]  text-base font-Poppins  ">
                      RBB 4th Level Course
                    </p>
                    <li className="sm-text">Trending</li>
                  </ul>
                </div>

                <div className="flex flex-col  w-full mt-1">
                  <ul>
                    <p className="text-[rgba(63,67,84,1)] font[500]  text-base font-Poppins ">
                      RBB 4th Level Course
                    </p>
                    <li className="sm-text">Trending</li>
                  </ul>
                </div>

                <div className="flex flex-col  w-full mt-1">
                  <ul>
                    <p className="text-[rgba(63,67,84,1)] font[500]  text-base font-Poppins ">
                      RBB 4th Level Course
                    </p>
                    <li className="sm-text">Posted by this tag</li>
                  </ul>
                </div>

                <div className="flex flex-col  w-full mt-1">
                  <ul>
                    <p className="text-[rgba(63,67,84,1)] font[500]  text-base font-Poppins ">
                      RBB 4th Level Course
                    </p>
                    <li className="sm-text">48029 Posted by this tag</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooetRecently />
      <Footer />
    </>
  );
};

export default Forms;
