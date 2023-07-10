import React, { useEffect, useState } from 'react';

import { AiOutlineCloseCircle } from 'react-icons/ai';

const Forms = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.className === 'modal') {
        setIsOpen(false);
      }
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

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
        'Pemrograman web atau web programming adalah istilah yang berkaitan o dengan website dan internet. Mengapa begitu? Karena web programming adalah salah satu proses pembuatan website untuk keperluan internet yang biasanya disebut dengan istilah WWW atau world wide web. Istilah WWW banyak dikenal karena',
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
      <div className="flex flex-row mb-10">
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
            <div className=" ml-3  mt-3 flex  bg-[rgba(244,246,248,1)]">
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
              <p className="  font-Poppins text-[rgba(63,67,84,1)] font-[500] text-base">
                Subjects
              </p>
              <div className="flex flex-row flex-wrap my-2 ">
                <div className="flex flex-col w-full">
                  <ul>
                    <p className="text-[rgba(0,110,185,1)] mt-2 font[500]  text-base font-Poppins ">
                      RBB
                    </p>
                    <li className="sm-text">82645 Posted by this tag</li>
                  </ul>
                </div>

                <div className="flex flex-col  w-full">
                  <ul>
                    <p className="text-[rgba(0,110,185,1)] mt-2  font[500]  text-base font-Poppins ">
                      NEA
                    </p>
                    <li className="sm-text">65523 Posted Trending</li>
                  </ul>
                </div>

                <div className="flex flex-col  w-full">
                  <ul>
                    <p className="text-[rgba(0,110,185,1)] mt-2 font[500]  text-base font-Poppins ">
                      Lok Sewa
                    </p>
                    <li className="sm-text">Trending</li>
                  </ul>
                </div>

                <div className="flex flex-col  w-full">
                  <ul>
                    <p className="text-[rgba(0,110,185,1)] mt-2 font[500]  text-base font-Poppins ">
                      Entrance
                    </p>
                    <li className="sm-text">Trending</li>
                  </ul>
                </div>

                <div className="flex flex-col  w-full">
                  <ul>
                    <p className="text-[rgba(0,110,185,1)] mt-2 font[500]  text-base font-Poppins ">
                      RSB
                    </p>
                    <li className="sm-text">Posted by this tag</li>
                  </ul>
                </div>

                <div className="flex flex-col  w-full">
                  <ul>
                    <p className="text-[rgba(0,110,185,1)] mt-2 font[500]  text-base font-Poppins ">
                      Nepal Telecom
                    </p>
                    <li className="sm-text">48029 Posted by this tag</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col  ml-10 mt-10 w-[700px] ">
          <div className=" border  ">
            <div className=" flex flex-row mt-3">
              <img
                className="rounded-full w-[10%] h-[10%] mb-6 ml-3"
                src="./images/me.jpg"
              />

              <input
                className=" h-[44px] w-[534px] border-gray-300 mt-2 border ml-3"
                placeholder="Share what going on your mind"
              />
            </div>
          </div>
          <div className=" flex flex-col flex-wrap w-[700px] h-[350]  mt-10">
            {data.map((item) => (
              <div key={item.id} className="flex flex-row mt-3 ml-3  border">
                <div className=" mb-24 mt-4 ml-4">
                  <img src={item.image} />
                </div>

                <div className="ml-3 flex flex-row   mt-4">
                  <div className="flex flex-col ml-4">
                    <div>
                      <ul className="flex flex-row  gap-10 text-sky-600	">
                        <li className="bg-cyan-50 rounded-md text-[rgba(0,110,185,1)]">
                          {item.texttop1}
                        </li>
                        <li className="bg-cyan-50 rounded-md">
                          {item.texttop2}
                        </li>
                      </ul>
                    </div>

                    <div className=" mr-3 w-[376px] h-[120px] flex-wrap font-Poppins text-[rgba(44,39,36,0.75)] font-[400] text-sm mt-4 text-full text-justify	 ">
                      {item.description}
                    </div>

                    <div className=" mt-10  flex flex-row">
                      <ul className=" text-[rgba(0,110,185,1)] font-[400]  text-base font-Poppins">
                        {item.name}
                        <li className="  sm-text  mb-4">3 weeks ago</li>
                      </ul>

                      <p className="ml-5 mt-3 text-[rgba(0,110,185,1)] font-Poppins font-[400] text-xs">
                        {item.views}
                      </p>
                      <p className="ml-7 mt-3 text-[rgba(0,110,185,1)] font-Poppins font-[400] text-xs">
                        {item.cmt}
                      </p>
                    </div>
                  </div>
                  <div className="   ml-16 justify-end">
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
                    <p className="text-[rgba(0,110,185,1)] mt-2 font[500]  text-base font-Poppins ">
                      RBB 4th Level Course
                    </p>
                    <li className="sm-text">82645 Posted by this tag</li>
                  </ul>
                </div>

                <div className="flex flex-col  w-full mt-1">
                  <ul>
                    <p className="text-[rgba(0,110,185,1)] mt-2 font[500]  text-base font-Poppins ">
                      RBB 4th Level Course
                    </p>
                    <li className="sm-text">65523 Posted Trending</li>
                  </ul>
                </div>

                <div className="flex flex-col  w-full mt-1">
                  <ul>
                    <p className="text-[rgba(0,110,185,1)] mt-2 font[500]  text-base font-Poppins  ">
                      RBB 4th Level Course
                    </p>
                    <li className="sm-text">Trending</li>
                  </ul>
                </div>

                <div className="flex flex-col  w-full mt-1">
                  <ul>
                    <p className="text-[rgba(0,110,185,1)] mt-2 font[500]  text-base font-Poppins ">
                      RBB 4th Level Course
                    </p>
                    <li className="sm-text">Trending</li>
                  </ul>
                </div>

                <div className="flex flex-col  w-full mt-1">
                  <ul>
                    <p className="text-[rgba(0,110,185,1)] mt-2 font[500]  text-base font-Poppins ">
                      RBB 4th Level Course
                    </p>
                    <li className="sm-text">Posted by this tag</li>
                  </ul>
                </div>

                <div className="flex flex-col  w-full mt-1">
                  <ul>
                    <p className="text-[rgba(0,110,185,1)] mt-2 font[500]  text-base font-Poppins ">
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

      <button
        className=" bg-blue-600 h-[20px] text-xs font-[200]  ml-2 mt-3 rounded-sm"
        onClick={handleOpen}
      >
        CreatePost
      </button>
      {isOpen && (
        <div className="flex flex-col w-[505px] h-[556px]">
          <div className="flex flex-row justify-between  h-[40px]">
            <div className=" flex flex-row gap-4">
              <img
                className="rounded-full w-[100%] h-[100%] mb-6 ml-3"
                src="./images/me.jpg"
              />

              <p className=" text-[rgba(17,17,17,1)] font-[500]  font-Poppins text-base mt-2">
                Santosh
              </p>
            </div>

            <button onClick={handleClose}>
              <AiOutlineCloseCircle className="mt-3" />
            </button>
          </div>
          <div className="h-[220px] mt-2 ml-6 ">
            <input
              className="h-[220px] w-[505px] border"
              placeholder="Share what going on your mind"
            />
          </div>
          <div className="ml-6 ">
            <input
              className="h-[44px] w-[505px] mt-4 border"
              placeholder="Course"
            />
          </div>
          <div className="ml-6 ">
            <input
              className="h-[44px] w-[505px] mt-4 border"
              placeholder="Subject"
            ></input>
          </div>
          <div className="bg-[rgba(225,236,243,1)] mt-4 h-[48px] w-[154px] flex flex-row justify-center gap-2 ml-6 ">
            <div className="mt-3">
              <img src="./images/Vector.png" />
            </div>
            <p className="mt-3">Add Image</p>
          </div>

          <div className="mt-10  bg-[rgba(0,110,185,1)]  h-[46px] w-[146px]  ml-96 mb-1">
            <p className=" font-[500] text-sm font-Poppins text-center text-white mt-2 ">
              Create Post
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Forms;
