import React, { useState, useRef, useEffect } from "react";
import { RiImageAddFill } from 'react-icons/ri';
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { addQuestionData, editQuestionData, fetchCourses, fetchSubjects } from '../../hooks/fetchHooks';
import { toast } from 'react-hot-toast';
import { useQuery } from "react-query";

const AddQuestion = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [postData, setPostData] = useState({
        questiontext: '',
        subjectid: '',
        courseid: '',
        image: '',
        forumid: ''
    });

    useEffect(() => {
        if (props.editPost) {
            const updatedPostData = {
                ...postData,
                questiontext: props.editPost.questiontext,
                subjectid: props.editPost.subjectid,
                courseid: props.editPost.courseid,
                image: props.editPost.image,
                forumid: props.editPost.forumid
            };
            setPostData(updatedPostData);
        }
    }, [])

    const { data: courses } = useQuery("courses", fetchCourses);
    const { data: subjects } = useQuery(
        ["subjects", postData.courseid],
        () => fetchSubjects(postData.courseid)
    );

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
    const { mutate: editMutation } = editQuestionData();

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

    const handleEditPost = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            editMutation(postData);
            toast.success("Successfully edited your post")
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
                    <form
                        onSubmit={props.editPost ?
                            (e) => handleEditPost(e, props.editPost.forumid) :
                            (e) => handleCreatePost(e)}>
                        <div className="h-[220px] mt-2 tablet:">
                            <textarea
                                className=" flex flex-wrap h-[220px] w-[90%] tablet:w-full border p-6"
                                placeholder="Share what going on your mind"
                                name='questiontext'
                                value={postData.questiontext}
                                onChange={handleChange}
                            />
                        </div>
                        {props.editPost ?
                            <div className=" m-2 p-2.5 bg-[#F0F9FF] text-[#006EB9] w-fit rounded-full border border-[#006EB9]">
                                <p className="text-base font-medium leading-5">{props.editPost.subject}</p>
                            </div>
                            :
                            <>
                                <select
                                    className="w-full h-11 mt-4 px-2 border rounded-md  text-gray-500"
                                    id="courseSelect"
                                    name='courseid'
                                    onChange={handleChange}
                                >
                                    <option value={postData.courseid}>Course</option>
                                    {courses?.map((course) => (
                                        <option value={course.courseid} label={course.coursename}>
                                            {course.courseName}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    className="w-full h-11 mt-4 px-2 border rounded-md  text-gray-500"
                                    id="subjectSelect"
                                    name="subjectid"
                                    onChange={handleChange}
                                >
                                    <option value={postData.subjectid}>Subject</option>
                                    {subjects?.map((subject) => (
                                        <option value={subject.subjectid} label={subject.subjectname}>
                                            {subject.subjectName}
                                        </option>
                                    ))}
                                </select>
                            </>
                        }
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
                            value={postData.image}
                            onChange={handleChange}
                            ref={inputFile}
                        />
                        {inputFile ? <p>{inputFile.current.value}</p> : <p>No file chosen</p>}
                        {props.editPost ?
                            <button
                                className={isLoading ?
                                    "mt-10  border-[rgba(177,181,195,1)] flex items-center justify-center h-[40px] w-[146px] ml-auto mr-0 mb-2 cursor-pointer" :
                                    "mt-10  bg-[rgba(0,110,185,1)] flex items-center justify-center h-[40px] w-[146px] ml-auto mr-0 mb-2 cursor-pointer"}
                                type="submit"
                                disabled={isLoading}>
                                <p className=" font-[500] text-sm font-Poppins text-center text-white ">
                                    {isLoading ? <CircularProgress size="1rem" /> : <span>Edit Post</span>}
                                </p>
                            </button> :
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
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddQuestion;