import React, { useState,useRef, useEffect } from "react";
import { RiImageAddFill } from 'react-icons/ri';
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { addQuestionData } from '../../hooks/fetchHooks';
import { toast } from 'react-hot-toast';

const AddQuestion = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [postData, setPostData] = useState({
        questiontext: '',
        subjectid: '',
        courseid: '',
        image: ''
    });

    const inputFile = useRef("");

    const activeUser = useSelector((state) => state.auth.user);

    const goBack = () => {
        props.handleCloseQuestion();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostData({ ...postData, [name]: value });
    };

    const { mutate: questionsMutation } = addQuestionData();

    const handleCreatePost = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            questionsMutation(postData);
            toast.success("Successfully added your post")
            setPostData({
                questiontext: "",
                subjectid: "",
                courseid: "",
                image: ""
            });
            goBack();
        } catch (error) {
            toast.error(error.message);
        }
        setIsLoading(false);
    }

    return (
        <div className="flex fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#0000007A] z-9999">
            <div className="flex items-center justify-center w-full h-fit tablet:w-[50%] bg-white m-auto p-3">
                <div className="w-[90%] h-[90%]">
                    <div className="flex flex-col w-full h-10 gap-6 items-center justify-between">
                        <div className="flex items-center w-full h-full justify-between">
                            <div className="flex items-center w-fit h-full gap-[14px]">
                                <img src='./images/blankuser.png' width='40px' alt='user' />
                                <p>{activeUser}</p>
                            </div>
                            <div className="flex items-center justify-center w-6 h-6 bg-[#00000029] rounded-full cursor-pointer">
                                <AiOutlineClose onClick={goBack} />
                            </div>
                        </div>
                    </div>
                    <form onSubmit={(e) => handleCreatePost(e)}>
                        <div className="h-[220px] mt-2 tablet:">
                            <input
                                className=" flex flex-wrap h-[220px] w-[90%] tablet:w-full border px-6"
                                placeholder="Share what going on your mind"
                                name='questiontext'
                                onChange={handleChange}
                            />
                        </div>
                        <div className=" ">
                            <input
                                className="h-[44px] w-full mt-4 border px-3"
                                placeholder="Course"
                                name='courseid'
                                onChange={handleChange}
                            />
                        </div>
                        <div className="">
                            <input
                                className="h-[44px] w-full mt-4 border px-3"
                                placeholder="Subject"
                                name='subjectid'
                                onChange={handleChange}
                            ></input>
                        </div>
                        <div className="bg-[rgba(225,236,243,1)] mt-4 h-[48px] w-[154px] flex justify-center items-center gap-2 cursor-pointer" onClick={() => inputFile.current.click()}>
                            <div className=" flex items-center">
                                <RiImageAddFill className="text-[#006EB9] text-lg" />
                            </div>
                            <p className="font-normal text-sm leading-5 text-[#006EB9]">
                                Add Image
                            </p>
                            
                        </div>
                        <input
                                className="hidden"
                                name="image"
                                type="file"
                                onChange={handleChange}
                                ref={inputFile}
                        />
                        { inputFile ? <p>{inputFile.current.value}</p> : <p>No file chosen</p>}
                        <button
                            className={isLoading ?
                                "mt-10  border-[rgba(177,181,195,1)] flex items-center justify-center h-[40px] w-[146px] ml-auto mr-0 mb-2 cursor-pointer" :
                                "mt-10  bg-[rgba(0,110,185,1)] flex items-center justify-center h-[40px] w-[146px] ml-auto mr-0 mb-2 cursor-pointer"}
                            type="submit"
                            disabled={isLoading}>
                            <p className=" font-[500] text-sm font-Poppins text-center text-white ">
                                {isLoading ? <CircularProgress size="1rem" /> : <span>Create Post</span>}
                            </p>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddQuestion;