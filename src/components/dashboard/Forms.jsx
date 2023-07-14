import React, { useEffect, useState } from 'react';
import { RiImageAddFill } from 'react-icons/ri';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import { Link } from 'react-router-dom';

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
      <div className="flex flex-col laptop:flex-row mb-10 justify-around w-full">
        <div className="flex flex-col h-fit w-[90%] laptop:w-[18%]">
          <div className="h-fit w-full flex flex-col border ml-6 laptop:ml-20 mt-10 ">
            <div className="ml-3  mt-3 flex flex-row">
              <img className="h-[50%] mt-3" src="./images/ic1.png" />
              <Link to="#">
                <button className="ml-3  flex flex-col">
                  <p className=" text-[rgba(63,67,84,1)] font[500]  font-Poppins  text-base mr-12">
                    ALL
                  </p>
                  <p className=" sm-text">show all post</p>
                </button>
              </Link>
            </div>
            <div className=" ml-3  mt-3 flex  bg-[rgba(244,246,248,1)]">
              <img className="h-[50%] mt-3" src="./images/ic2.png" />

              <Link to="#">
                <button className="ml-3">
                  <p className=" text-[rgba(63,67,84,1)] font[500] font-Poppins text-base mr-12 ">
                    Posted by me
                  </p>
                  <p className=" sm-text">Show posts posted by me</p>
                </button>
              </Link>
            </div>

            <div className=" ml-3  mt-3 flex flex-row">
              <img className="h-[50%] mt-3" src="./images/ic3.png" />

              <Link to="#">
                <button className="ml-3">
                  <p className=" text-[rgba(63,67,84,1)] font[500]  text-base font-Poppins ">
                    Commented by me
                  </p>
                  <p className="sm-text ">Show posts posted by me</p>
                </button>
              </Link>
            </div>
          </div>
          <div className=" h-fit w-full  flex flex-col border ml-6 laptop:ml-20 mt-10 ">
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

        <div className="flex flex-col ml-6 laptop:ml-32 mt-10 w-[90%] laptop:w-[50%]">
          <div className=" w-full h-fit border px-2">
            {!isOpen && (
              <div className=" flex flex-row items-center mt-3 py-2">
                <img
                  className="flex items-center rounded-full w-10 h-10 ml-3"
                  src="./images/me.jpg"
                />

                <input
                  className="flex items-center h-11 w-full border-gray-300 border ml-3 px-3"
                  placeholder="Share what going on your mind"
                  onClick={handleOpen}
                />
              </div>
            )}

            {isOpen && (
              <div className="flex flex-col w-[90%] h-[556px] mt-6 ml-6 ">
                <div className="flex flex-row justify-between h-[40px]">
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
                    <AiOutlineCloseCircle className="mt-3 text-lg" />
                  </button>
                </div>
                <div className="h-[220px] mt-2 ml-0.5 tablet:ml-6 w-full ">
                  <input
                    className="h-[220px] w-[90%] tablet:w-full border px-6"
                    placeholder="Share what going on your mind"
                  />
                </div>
                <div className="ml-0.5 tablet:ml-6 ">
                  <input
                    className="h-[44px] w-full mt-4 border px-3"
                    placeholder="Course"
                  />
                </div>
                <div className="ml-0.5 tablet:ml-6 ">
                  <input
                    className="h-[44px] w-full mt-4 border px-3"
                    placeholder="Subject"
                  ></input>
                </div>
                <div className="bg-[rgba(225,236,243,1)] mt-4 h-[48px] w-[154px] flex justify-center items-center gap-2 ml-0.5 tablet:ml-6 ">
                  <div className=" flex items-center">
                    <RiImageAddFill className="text-[#006EB9] text-lg" />
                  </div>
                  <p className="font-normal text-sm leading-5 text-[#006EB9]">
                    Add Image
                  </p>
                </div>

                <div className="mt-10  bg-[rgba(0,110,185,1)]  h-[46px] w-[146px] ml-0.5 tablet:ml-[80%] mb-2">
                  <p className=" font-[500] text-sm font-Poppins text-center text-white mt-2 ">
                    Create Post
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className=" flex flex-col flex-wrap w-full mt-10">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex flex-col tablet:flex-row mt-3 pr-2  border"
              >
                <div className=" mb:4 tablet:mb-24 mt-4 ml-4 w-[120%] tablet:w-[25%]">
                  <img src={item.image} />
                </div>

                <div className="tablet:ml-3 flex flex-row mt-4 w-full justify-around tablet:w-[70%]">
                  <div className="flex flex-col ml-4 w-[70%] tablet:w-[90%]">
                    <div>
                      <div className="flex flex-row w-fit gap-10 text-sky-600	">
                        <p className="bg-[#F0F9FF] w-fit rounded-full text-[rgba(0,110,185,1)]">
                          {item.texttop1}
                        </p>
                        <p className="bg-[#F0F9FF] w-fit rounded-full">
                          {item.texttop2}
                        </p>
                      </div>
                    </div>

                    <div className=" mr-3 w-[110%] tablet:w-[90%] h-fit flex  font-Poppins text-[rgba(44,39,36,0.75)] font-[400] text-sm mt-4 text-full text-justify	 ">
                      {item.description}
                    </div>

                    <div className=" mt-10 flex flex-col tablet:flex-row">
                      <ul className=" text-[rgba(0,110,185,1)] font-[400] text-base font-Poppins">
                        {item.name}
                        <li className=" sm-text  mb-4">3 weeks ago</li>
                      </ul>
                      <div className="flex">
                        <p className="tablet:ml-5 -mt-2 tablet:mt-3 text-[rgba(0,110,185,1)] font-Poppins font-[400] text-xs">
                          {item.views}
                        </p>
                        <p className="ml-4 tablet:ml-7 -mt-2 tablet:mt-3 text-[rgba(0,110,185,1)] font-Poppins font-[400] text-xs">
                          {item.cmt}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" flex items-center justify-center ml-0 tablet:ml-4 w-[8%] h-9 bg-[#006EB91A]">
                    <BsBookmark className=" text-[#006EB9]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-fit w-full laptop:w-[20%]">
          <div className=" h-fit w-full  flex flex-col  flex-wrap border mt-10 ">
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
    </>
  );
};

export default Forms;
