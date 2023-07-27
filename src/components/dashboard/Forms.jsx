import React, { useEffect, useState, useRef } from 'react';
import { useQuery } from 'react-query';
import { RiImageAddFill } from 'react-icons/ri';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {MdOutlineDelete, MdViewModule} from 'react-icons/md';
import { BsBookmark } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { fetchAnswers, fetchQuetions } from '../../hooks/fetchHooks';
import CircularProgress from '@mui/material/CircularProgress';
import axiosInstance from '../../utils/axios';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const Forms = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState('All');

  const activeUser = useSelector((state) => state.auth.user);

  const [file, setFile] = useState([]);

  const inputFile = useRef(null);

  const handleChangeImage = (e) => {
    setFile([...file, e.target.files[0]]);
  };

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

  const [postData, setPostData] = useState({
    questiontext: '',
    subjectid: '',
    courseid: '',
    image: '',
  });

  const [answertext, setAnswerText] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleViewChange = (param) => {
    setViewMode(param);
    console.log(viewMode);
  }


  const handleCreatePost = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const data = await axiosInstance.put("/questions", postData)
      toast.success("Successfully added your post")
      setPostData({
        questiontext: "",
        subjectid: "",
        courseid: "",
        image: ""
      });
  
    } catch (error) {
      toast.error(error.message);
    }
    setIsLoading(false);
  }

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

  const {isLoading:postsLoading, data:forumPosts, error, isError} = useQuery("posts", fetchQuetions)


  const [seeComments, setSeeComments] = useState([]);

  const handleSeeComments = (index, forumid) => {
    const updatedseeComments = [...seeComments]
    for (let i=0; i<=seeComments.length; i++) {
      if (i===index) {
        updatedseeComments[i] = !updatedseeComments[i];
      }
      else {
        updatedseeComments[i] = false;
      }
    }
    setSeeComments(updatedseeComments);
    getComments(forumid);
  }

  const [forumAnswer, setForumAnswer] = useState([]);

  const getComments = async (forumid) => {
     const data= await axiosInstance.post("/answers", {forumid} )
     setForumAnswer(data);
    console.log("forum answer", data);
  }

  const handleAddAnswer = async (e, forumid) => {
    e.preventDefault();
    const data = await axiosInstance.put("/answers", {forumid, answertext})
    console.log("Answertext", data);
    console.log("event",e);
    console.log(answertext)
    console.log(forumid)

  }


  return (
    <>
      <div className="flex flex-col laptop:flex-row mb-10 justify-around w-full">
        <div className="flex flex-col h-fit w-[90%] laptop:w-[18%]">
          <div className="h-fit w-full flex flex-col border ml-6 laptop:ml-20 mt-10 px-2 py-2 gap-4">
            <div className={viewMode === "All" ? "flex p-1 cursor-pointer bg-[rgba(244,246,248,1)]": "flex p-1 cursor-pointer"} onClick={()=>handleViewChange("All")}>
              <img className="h-[50%] mt-3" src="./images/ic1.png" />
                <div className="ml-3 ">
                  <p className=" text-[rgba(63,67,84,1)] font[500]  font-Poppins  text-base  text-start">
                    ALL
                  </p>
                  <p className=" sm-text">show all post</p>
                </div>
            </div>
            <div className={viewMode === "me"? "flex p-1 cursor-pointer bg-[rgba(244,246,248,1)]" : "flex p-1 cursor-pointer" }onClick={()=>handleViewChange("me")}>
              <img className="h-[50%] mt-3" src="./images/ic2.png" />
                <div className="ml-3">
                  <p className=" text-[rgba(63,67,84,1)] font[500] font-Poppins text-base text-start ">
                    Posted by me
                  </p>
                  <p className=" sm-text">Show posts posted by me</p>
                </div>
            </div>

            <div className={viewMode==="comments"?"flex p-1 cursor-pointer bg-[rgba(244,246,248,1)]" : "flex p-1 cursor-pointer"} onClick={() =>handleViewChange("comments")}>
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
          <div className=" w-full h-fit border px-2 ">
            {!isOpen && (
              <div className=" flex flex-row items-center mt-2 py-2  mb-2 mr-2">
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
              <div className="flex flex-col w-[90%] h-fit mt-6 ml-6 ">
                <div className="flex flex-row justify-between h-[40px]">
                  <div className=" flex flex-row gap-4 ml-3">
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
                <form onSubmit={(e) => handleCreatePost(e)}>
                  <div className="h-[22%] mt-2 ml-0.5 tablet:ml-6 w-full ">
                    <textarea
                      className="resize-none h-32 w-full tablet:w-full border px-6  pt-4"
                      placeholder="Share what's going on your mind"
                      name="questiontext"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="ml-0.5 tablet:ml-6 w-full ">
                    <input
                      className="h-[44px] w-full mt-4 border px-3 "
                      placeholder="Course"
                      name="courseid"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="ml-0.5 tablet:ml-6 w-full ">
                    <input
                      className="h-[44px] w-full mt-4 border px-3"
                      placeholder="Subject"
                      name="subjectid"
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="flex flex-row gap-5">
                    <button
                      className="bg-[rgba(225,236,243,1)] mt-4 h-[48px] w-[154px] flex justify-center items-center gap-2 ml-0.5 tablet:ml-6"
                      onClick={() => inputFile.current.click()}
                    >
                      <div className=" flex items-center">
                        <RiImageAddFill className="text-[#006EB9] text-lg" />
                      </div>
                      <p className="font-normal text-sm leading-5 text-[#006EB9]">
                        Add Image
                      </p>
                    </button>

                    <input
                      className="hidden "
                      type="file"
                      onChange={handleChange}
                      ref={inputFile}
                    />
                  </div>

                  <button
                    className="mt-10  bg-[rgba(0,110,185,1)] flex items-center justify-center h-[40px] w-[146px] tablet:ml-[80%] mb-2 cursor-pointer"
                    type="submit"
                  >
                    <p className=" font-[500] text-sm font-Poppins text-center text-white ">
                      Create Post
                    </p>
                  </button>
                </form>
              </div>
            )}
          </div>
          {/* <div className=" flex flex-col flex-wrap w-full mt-10">
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
                        <button className="bg-[#F0F9FF] w-fit rounded-full text-[rgba(0,110,185,1)]">
                          {item.texttop1}
                        </button>
                        <button className="bg-[#F0F9FF] w-fit rounded-full">
                          {item.texttop2}
                        </button>
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
                    <BsBookmark className=' text-[#006EB9]'/>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          <div className=" flex flex-col flex-wrap w-full mt-10">
            {postsLoading && 
            <div className='flex items-center justify-center gap-2'>
              <p className='text-center font-normal text-xl'>Loading....</p>
              <CircularProgress size="1rem"/>
            </div>}
            {forumPosts?.map((item, index) => (
              <div className='flex flex-col border mt-3'>
              <div
                key={item.forumid}
                className="flex flex-col tablet:flex-row mt-3 pr-2 "
              >
                <div className=" mb:4 tablet:mb-24 mt-4 ml-4 w-[120%] tablet:w-[25%]">
                  <img
                    src={item.image ? item.image : './images/Rectangle 24.png'}
                  />
                </div>

                <div className="tablet:ml-3 flex flex-row mt-4 w-full justify-around tablet:w-[70%]">
                  <div className="flex flex-col ml-4 w-[70%] tablet:w-[90%]">
                    <div>
                      <div className="flex flex-row w-fit gap-10 text-sky-600	">
                        <button className="bg-[#F0F9FF] w-fit rounded-full text-[rgba(0,110,185,1)]">
                          {item.subject}
                        </button>
                        <button className="bg-[#F0F9FF] w-fit rounded-full">
                          {item.subject}
                        </button>
                      </div>
                    </div>

                    <div className=" mr-3 w-[110%] tablet:w-[90%] h-fit flex  font-Poppins text-[rgba(44,39,36,0.75)] font-[400] text-sm mt-4 text-full text-justify	 ">
                      {item.questiontext}
                    </div>

                    <div className=" mt-10 flex flex-col tablet:flex-row">
                      <ul className=" text-[rgba(0,110,185,1)] font-[400] text-base font-Poppins">
                        {item.askedby}
                        <li className=" sm-text  mb-4">{item.posteddate}</li>
                      </ul>
                      <div className="flex">
                        <p className="tablet:ml-5 -mt-2 tablet:mt-3 text-[rgba(0,110,185,1)] font-Poppins font-[400] text-xs cursor-pointer">
                          {item.views? `${item.views} views` : "0 views" }
                        </p>
                        <p className="ml-4 tablet:ml-7 -mt-2 tablet:mt-3 text-[rgba(0,110,185,1)] font-Poppins font-[400] text-xs cursor-pointer" onClick={() => handleSeeComments(index, item.forumid)}>
                        {item.answers? `${item.answers} comments` : "0 comments" }
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" flex items-center justify-center ml-0 tablet:ml-4 w-[8%] h-9 bg-[#006EB91A]">
                    <BsBookmark className=" text-[#006EB9]" />
                  </div>
                  {/* <div className=" flex items-center justify-center ml-0 tablet:ml-4 w-[8%] h-9 bg-[#006EB91A]" onClick={() => handleDelete(item.forumid)} disabled={isLoading}>
                    <MdOutlineDelete className={isLoading? 'text-[rgba(177,181,195,1)] text-xl' :'text-[#006EB9] text-xl'}/>
                  </div> */}
                </div>
              </div>
              {seeComments[index] && 
                 <div className='mt-2 border-t px-5 py-2'>
                  <p className='text-lg font-medium text-left text-[rgba(0,110,185,1)] px-2'>{activeUser}</p>
                  <form
                    className='flex flex-col tablet:flex-row gap-2'
                    onSubmit={(e) => handleAddAnswer(e, item.forumid)}
                    >
                    <input 
                    className='w-2/3 h-11 px-4 py-1 text-left border-2 rounded-full'
                    placeholder='Add your answer'
                    onChange={(e) => setAnswerText(e.target.value)}/>
                    <button 
                      className='w-1/3 h-11 px-2 py-2 bg-[rgba(0,110,185,1)] text-white flex items-center justify-center rounded-full'
                      type='submit'
                    >
                        Add Answer
                    </button>
                  </form>
                  {forumAnswer?.data?.response?.answers?.map(( onecomment, index ) => (
                    <div className='flex flex-col gap-1 py-2 px-2'>
                      <div className='flex gap-2 justify-start items-start'>
                        <p className="text-left font-medium text-[rgba(0,110,185,1)] text-base w-[20%]">{onecomment.name}</p>
                        <p className='text-left font-normal text-base w-[80%] '>{onecomment.answertext}</p>
                      </div>
                      <p className='text-left font-normal text-sm px-1 text-[rgba(44,39,36,0.75)]'>{onecomment.posteddate}</p>
                    </div>
                  ))}
                </div>
              }
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
      </div>
    </>
  );
};

export default Forms;
