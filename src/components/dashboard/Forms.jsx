import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { bookmarkQuestionData, deleteQuestionData, fetchQuetions } from '../../hooks/fetchHooks';
import { MdOutlineDelete } from 'react-icons/md';
import { FiEdit2 } from 'react-icons/fi'
import CircularProgress from '@mui/material/CircularProgress';
import OpenPost from './OpenPost';
import AddQuestion from './AddQuestion';
import { toast } from 'react-hot-toast';

const Forums = () => {
  const [viewMode, setViewMode] = useState('All');
  const [openWindow, setOpenWindow] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(null);
  const [editPost, setEditPost] = useState("");

  const handleOpen = () => {
    setOpenQuestion(true);
  };

  const handleViewChange = (param) => {
    setViewMode(param);
    console.log(viewMode);
  }

  const { isLoading: postsLoading, data: forumPosts, error, isError } = useQuery("posts", fetchQuetions)

  const { mutate: deletePost } = deleteQuestionData();
  const { mutate: bookmarkPost, isLoading: bookmarkLoading } = bookmarkQuestionData();

  const handleOpenPost = (item) => {
    console.log("here", item);
    setOpenWindow(item);
  }

  const handleClosePost = () => {
    setOpenWindow(null);
  }
  const handleCloseQuestion = () => {
    setOpenQuestion(null);
    setEditPost(null)
  }

  const handleDeletePost = async (forumid) => {
    try {
      deletePost(forumid);
      toast.success("Post Deleted")
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleBookMarkPost = async (forumid) => {
    try {
      bookmarkPost(forumid);
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleEditPost = (item) => {
    setEditPost(item);
  }

  return (
    <>
      <div className="flex flex-col laptop:flex-row mb-10 justify-evenly w-full">
        <div className="flex flex-col h-fit w-full laptop:w-[18%] px-2">
          <div className="h-fit w-full flex flex-col border  mt-10 px-2 py-2 gap-4">
            <div className={viewMode === "All" ? "flex p-1 cursor-pointer bg-[rgba(244,246,248,1)] items-center" : "flex p-1 items-center"} onClick={() => handleViewChange("All")}>
              <img src="./images/ic1.png" />
              <div className="ml-3 ">
                <p className=" text-[rgba(63,67,84,1)] font[500]  font-Poppins  text-base  text-start">
                  ALL
                </p>
                <p className=" sm-text">Show all post</p>
              </div>
            </div>
            <div className={viewMode === "me" ? "flex p-1 cursor-pointer bg-[rgba(244,246,248,1)] items-center" : "flex p-1 cursor-pointer items-center"} onClick={() => handleViewChange("me")}>
              <img className="h-[50%]" src="./images/ic2.png" />
              <div className="ml-3">
                <p className=" text-[rgba(63,67,84,1)] font[500] font-Poppins text-base text-start ">
                  Posted by me
                </p>
                <p className=" sm-text">Show posts posted by me</p>
              </div>
            </div>

            <div className={viewMode === "comments" ? "flex p-1 cursor-pointer bg-[rgba(244,246,248,1)] items-center" : "flex p-1 cursor-pointer items-center"} onClick={() => handleViewChange("comments")}>
              <img src="./images/ic3.png" />
              <div className="ml-3">
                <p className=" text-[rgba(63,67,84,1)] font[500]  text-base font-Poppins  text-start">
                  Commented by me
                </p>
                <p className="sm-text ">Show posts posted by me</p>
              </div>
            </div>
          </div>
          <div className=" h-fit w-full  flex flex-col border  mt-10 ">
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

        <div className="flex flex-col  mt-10 w-full laptop:w-[50%] px-2">
          <div className=" w-full h-fit border px-2 py-3">
            <div className=" flex flex-row items-center px-3 py-2">
              <img
                className="flex items-center rounded-full w-10 h-10"
                src="./images/blankuser.png"
              />

              <input
                className="flex items-center h-11 w-full border-gray-300 border ml-3 px-3"
                placeholder="Share what going on your mind"
                onClick={handleOpen}
              />
            </div>
          </div>
          <div className=" flex flex-col flex-wrap w-full mt-6 gap-4">
            {postsLoading &&
              <div className='flex items-center justify-center gap-2'>
                <p className='text-center font-normal text-xl text-[#006EB9]'>Loading....</p>
                <CircularProgress size="1rem" />
              </div>}
            {isError &&
              <p className='font-medium text-lg text-red-400 text-center'>
                {error.message}
              </p>
            }
            {forumPosts?.map((item, index) => (
              <div key={item.forumid} className='flex flex-col border'>
                <div className="flex flex-col tablet:flex-row py-4 px-3 items-start justify-between gap-2">
                  <div className=" w-[120%] tablet:w-[25%]" onClick={() => handleOpenPost(item)}>
                    <img src={item.image ? item.image : './images/Rectangle 24.png'} />
                  </div>

                  <div className="tablet:ml-3 flex flex-row w-full justify-around tablet:w-[70%]">
                    <div className="flex flex-col w-[70%] tablet:w-[90%] gap-3" onClick={() => handleOpenPost(item)}>
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

                      <div className=" mr-3 w-[110%] tablet:w-[90%] h-fit flex font-Poppins font-[400] text-sm text-full text-[#2C2724BF] text-justify cursor-text ">
                        {item.questiontext.length > 200
                          ? <p>{item.questiontext.substring(0, 200)} <span className='text-[rgba(0,110,185,1)] cursor-pointer'>read more...</span> </p>
                          : item.questiontext
                        }
                      </div>
                      <div className=" flex flex-col tablet:flex-row justify-between items-start tablet:items-center gap-2">
                        <div className=" flex flex-col text-[rgba(0,110,185,1)] font-[400] text-sm font-Poppins pr-3 border-r border-r-[#E1ECF3] gap-1">
                          {item.askedby}
                          <div className=" text-xs  text-[rgba(44,39,36,0.75)]">{item.posteddate}</div>
                        </div>
                        <div className="flex gap-2">
                          <p className=" text-[rgba(0,110,185,1)] font-Poppins font-[400] text-xs cursor-pointer">
                            {item.views ? `${item.views} views` : "0 views"}
                          </p>
                          <p className=" text-[rgba(0,110,185,1)] font-Poppins font-[400] text-xs cursor-pointer" >
                            {item.answers ? `${item.answers} comments` : "0 comments"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='w-[8%] flex flex-col gap-2'>
                      <div className=" flex items-center justify-center w-full h-9 bg-[#006EB91A] cursor-pointer" onClick={() => handleBookMarkPost(item.forumid)}>
                        {
                          bookmarkLoading ? <CircularProgress size="1rem" /> :
                            <>
                              {(item.isbookmarked === '1') ?
                                <BsFillBookmarkFill className='text-[#006EB9]' /> :
                                <BsBookmark className='text-[#006EB9]' />}
                            </>
                        }
                      </div>
                      <div className=" flex items-center justify-center w-full h-9 bg-[#006EB91A] cursor-pointer" onClick={() => handleDeletePost(item.forumid)}>
                        <MdOutlineDelete className='text-[#006EB9] text-xl' />
                      </div>
                      <div className=" flex items-center justify-center w-full h-9 bg-[#006EB91A] cursor-pointer" onClick={() => handleEditPost(item)}>
                        <FiEdit2 className='text-[#006EB9] text-xl' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-fit w-full laptop:w-[20%] px-2">
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
        {editPost &&
          <AddQuestion handleCloseQuestion={handleCloseQuestion} editPost={editPost} />}
      </div>
    </>
  );
};

export default Forums;
