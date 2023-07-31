import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { BsBookmark } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { fetchQuetions } from '../../hooks/fetchHooks';
import CircularProgress from '@mui/material/CircularProgress';
import OpenPost from './OpenPost';
import AddQuestion from './AddQuestion';

const Forums = () => {
  const [viewMode, setViewMode] = useState('All');
  const [openWindow, setOpenWindow] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(null);

  const handleOpen = () => {
    setOpenQuestion(true);
  };

  const handleViewChange = (param) => {
    setViewMode(param);
    console.log(viewMode);
  }

  const { isLoading: postsLoading, data: forumPosts, error, isError } = useQuery("posts", fetchQuetions)

  const handleOpenPost = (item) => {
    console.log("here", item);
    setOpenWindow(item);
  }

  const handleClosePost = () => {
    setOpenWindow(null);
  }
  const handleCloseQuestion = () => {
    setOpenQuestion(null);
  }

  return (
    <>
      <div className="flex flex-col laptop:flex-row mb-10 justify-around w-full">
        <div className="flex flex-col h-fit w-[90%] laptop:w-[18%]">
          <div className="h-fit w-full flex flex-col border ml-6 laptop:ml-20 mt-10 px-2 py-2 gap-4">
            <div className={viewMode === "All" ? "flex p-1 cursor-pointer bg-[rgba(244,246,248,1)]" : "flex p-1 cursor-pointer"} onClick={() => handleViewChange("All")}>
              <img className="h-[50%] mt-3" src="./images/ic1.png" />
              <div className="ml-3 ">
                <p className=" text-[rgba(63,67,84,1)] font[500]  font-Poppins  text-base  text-start">
                  ALL
                </p>
                <p className=" sm-text">show all post</p>
              </div>
            </div>
            <div className={viewMode === "me" ? "flex p-1 cursor-pointer bg-[rgba(244,246,248,1)]" : "flex p-1 cursor-pointer"} onClick={() => handleViewChange("me")}>
              <img className="h-[50%] mt-3" src="./images/ic2.png" />
              <div className="ml-3">
                <p className=" text-[rgba(63,67,84,1)] font[500] font-Poppins text-base text-start ">
                  Posted by me
                </p>
                <p className=" sm-text">Show posts posted by me</p>
              </div>
            </div>

            <div className={viewMode === "comments" ? "flex p-1 cursor-pointer bg-[rgba(244,246,248,1)]" : "flex p-1 cursor-pointer"} onClick={() => handleViewChange("comments")}>
              <img className="h-[50%] mt-3" src="./images/ic3.png" />
              <div className="ml-3">
                <p className=" text-[rgba(63,67,84,1)] font[500]  text-base font-Poppins  text-start">
                  Commented by me
                </p>
                <p className="sm-text ">Show posts posted by me</p>
              </div>
            </div>
          </div>
          <div className=" h-fit w-full  flex flex-col border ml-6 laptop:ml-20 mt-10 ">
            <div className="mt-6 ml-4 ">
              <p className="  font-Poppins text-[rgba(63,67,84,1)] font-[500] text-base">
                Subjects
              </p>
              <div className="flex flex-row flex-wrap my-2 ">
                <div className="flex flex-col w-full">
                  <button className="text-start">
                    <p className="text-[rgba(0,110,185,1)] mt-2 font[500]  text-base font-Poppins  ">
                      RBB
                    </p>
                    <p className="sm-text">82645 Posted by this tag</p>
                  </button>
                </div>

                <div className="flex flex-col  w-full">
                  <Link to="#">
                    {' '}
                    <button className=" text-start">
                      <p className="text-[rgba(0,110,185,1)] mt-2  font[500]  text-base font-Poppins ">
                        NEA
                      </p>
                      <p className="sm-text">65523 Posted Trending</p>
                    </button>
                  </Link>
                </div>

                <div className="flex flex-col  w-full">
                  <Link to="#">
                    {' '}
                    <button className=" text-start">
                      <p className="text-[rgba(0,110,185,1)] mt-2 font[500]  text-base font-Poppins ">
                        Lok Sewa
                      </p>
                      <p className="sm-text">Trending</p>
                    </button>
                  </Link>
                </div>

                <div className="flex flex-col  w-full">
                  <Link to="#">
                    <button className="text-start">
                      <p className="text-[rgba(0,110,185,1)] mt-2 font[500]  text-base font-Poppins ">
                        Entrance
                      </p>
                      <p className="sm-text">Trending</p>
                    </button>
                  </Link>
                </div>

                <div className="flex flex-col  w-full">
                  <Link to="#">
                    <button className=" text-start">
                      <p className="text-[rgba(0,110,185,1)] mt-2 font[500]  text-base font-Poppins ">
                        RSB
                      </p>
                      <p className="sm-text">Posted by this tag</p>
                    </button>
                  </Link>
                </div>

                <div className="flex flex-col  w-full">
                  <Link to="#">
                    <button className=" text-start">
                      <p className="text-[rgba(0,110,185,1)] mt-2 font[500]  text-base font-Poppins ">
                        Nepal Telecom
                      </p>
                      <p className="sm-text">48029 Posted by this tag</p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col ml-6 laptop:ml-32 mt-10 w-[90%] laptop:w-[50%]">
          <div className=" w-full h-fit border px-2">
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
          </div>
          <div className=" flex flex-col flex-wrap w-full mt-10">
            {postsLoading &&
              <div className='flex items-center justify-center gap-2'>
                <p className='text-center font-normal text-xl'>Loading....</p>
                <CircularProgress size="1rem" />
              </div>}
            {forumPosts?.map((item, index) => (
              <div key={item.forumid} className='flex flex-col border mt-3' onClick={() => handleOpenPost(item)}>
                <div
                  className="flex flex-col tablet:flex-row mt-3 pr-2 "
                >
                  <div className=" mb:4 tablet:mb-24 mt-4 ml-4 w-[120%] tablet:w-[25%]">
                    <img src={item.image ? item.image : './images/Rectangle 24.png'} />
                  </div>

                  <div className="tablet:ml-3 flex flex-row mt-4 w-full justify-around tablet:w-[70%]">
                    <div className="flex flex-col ml-4 w-[70%] tablet:w-[90%]">
                      <div>
                        <div className="flex flex-row w-fit gap-2.5">
                          <button className="bg-[#F0F9FF] w-fit rounded-full text-[rgba(0,110,185,1)] px-2.5 py-1">
                            {item.subject}
                          </button>
                          <button className="bg-[#F0F9FF] w-fit rounded-full text-[rgba(0,110,185,1)] px-2.5 py-1">
                            {item.subject}
                          </button>
                        </div>
                      </div>

                      <div className=" mr-3 w-[110%] tablet:w-[90%] h-fit flex font-Poppins font-[400] text-sm mt-4 text-full text-[#2C2724BF] text-justify	 ">
                        {item.questiontext}
                      </div>

                      <div className=" mt-10 flex flex-col tablet:flex-row justify-between">
                        <ul className=" text-[rgba(0,110,185,1)] font-[400] text-sm font-Poppins">
                          {item.askedby}
                          <li className=" text-xs  mb-4 text-[rgba(44,39,36,0.75)]">{item.posteddate}</li>
                        </ul>
                        <div className="flex">
                          <p className="tablet:ml-5 -mt-2 tablet:mt-3 text-[rgba(0,110,185,1)] font-Poppins font-[400] text-xs cursor-pointer">
                            {item.views ? `${item.views} views` : "0 views"}
                          </p>
                          <p className="ml-4 tablet:ml-7 -mt-2 tablet:mt-3 text-[rgba(0,110,185,1)] font-Poppins font-[400] text-xs cursor-pointer" >
                            {item.answers ? `${item.answers} comments` : "0 comments"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" flex items-center justify-center ml-0 tablet:ml-4 w-[8%] h-9 bg-[#006EB91A]">
                      <BsBookmark className='text-[#006EB9]' />
                    </div>
                    {/* <div className=" flex items-center justify-center ml-0 tablet:ml-4 w-[8%] h-9 bg-[#006EB91A]" onClick={() => handleDelete(item.forumid)} disabled={isLoading}>
                    <MdOutlineDelete className={isLoading? 'text-[rgba(177,181,195,1)] text-xl' :'text-[#006EB9] text-xl'}/>
                  </div> */}
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
                  <Link to="#">
                    <button className=" text-start">
                      <p className="text-[rgba(0,110,185,1)] mt-2 font[500]  text-base font-Poppins ">
                        RBB 4th Level Course
                      </p>
                      <p className="sm-text">82645 Posted by this tag</p>
                    </button>
                  </Link>
                </div>

                <div className="flex flex-col  w-full mt-1">
                  <Link to="#">
                    <button className=" text-start">
                      <p className="text-[rgba(0,110,185,1)] mt-2 font[500]  text-base font-Poppins ">
                        RBB 4th Level Course
                      </p>
                      <p className="sm-text">65523 Posted Trending</p>
                    </button>
                  </Link>
                </div>

                <div className="flex flex-col  w-full mt-1">
                  <Link to="#">
                    {' '}
                    <button className=" text-start">
                      <p className="text-[rgba(0,110,185,1)] mt-2 font[500]  text-base font-Poppins  ">
                        RBB 4th Level Course
                      </p>
                      <p className="sm-text">Trending</p>
                    </button>
                  </Link>
                </div>

                <div className="flex flex-col  w-full mt-1">
                  <Link to="#">
                    {' '}
                    <button className=" text-start">
                      <p className="text-[rgba(0,110,185,1)] mt-2 font[500]  text-base font-Poppins ">
                        RBB 4th Level Course
                      </p>
                      <p className="sm-text">Trending</p>
                    </button>
                  </Link>
                </div>

                <div className="flex flex-col  w-full mt-1">
                  <Link to="#">
                    <button className=" text-start">
                      <p className="text-[rgba(0,110,185,1)] mt-2 font[500]  text-base font-Poppins ">
                        RBB 4th Level Course
                      </p>
                      <p className="sm-text">Posted by this tag</p>
                    </button>
                  </Link>
                </div>

                <div className="flex flex-col  w-full mt-1">
                  <Link to="#">
                    <button className=" text-start">
                      <p className="text-[rgba(0,110,185,1)] mt-2 font[500]  text-base font-Poppins ">
                        RBB 4th Level Course
                      </p>
                      <p className="sm-text">48029 Posted by this tag</p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {openWindow &&
          <OpenPost post={openWindow} handleClosePost={handleClosePost} />}
        {openQuestion &&
          <AddQuestion handleCloseQuestion={handleCloseQuestion} />}
      </div>
    </>
  );
};

export default Forums;
