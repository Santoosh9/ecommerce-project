import React, { useState } from "react";
import { useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
import { BsDot } from 'react-icons/bs';
import { BsThreeDotsVertical } from 'react-icons/bs'
import { SlClose } from 'react-icons/sl';
import { useQuery } from "react-query";
import { deleteAnswersData, fetchAnswers, addAnswersData } from "../../hooks/fetchHooks";
import { toast } from 'react-hot-toast';
import { MdOutlineDelete } from 'react-icons/md';
import { FiEdit2 } from 'react-icons/fi'
import AddAnswer from "./AddAnswer";

const OpenPost = (props) => {

    const [answertext, setAnswerText] = useState('')
    const [menuId, setMenuId] = useState('')
    const [editComment, setEditComment] = useState()

    const toggleView = (id) => {
        setMenuId(prevId => {
            if (prevId === id) return null;
            return id
        })
    }

    const user = useSelector((state) => state.auth.user);

    const { isLoading: answersLoading, data: forumAnswer } = useQuery(
        ["answers", props.post.forumid],
        () => fetchAnswers(props.post.forumid),
    );

    // const { mutate: answersMutation } = addAnswersData();
    const { mutate: deleteAnswer } = deleteAnswersData();

    // const handleAddAnswer = async (e, forumid) => {
    //     e.preventDefault();
    //     const answerData = { forumid, answertext }
    //     try {
    //         answersMutation(answerData);
    //         toast.success("Answer Added")
    //         setAnswerText('')
    //     } catch (error) {
    //         toast.error(error.message)
    //     }
    // }

    const handleDeleteAnswer = async (e, answerid) => {
        setMenuId(null)
        e.preventDefault();
        console.log(answerid)
        try {
            deleteAnswer(answerid);
            toast.success("Answer Deleted")
        } catch (error) {
            toast.error(error.message)
        }
    }

    const goBack = () => {
        props.handleClosePost();
    }

    const handleEditAnswer = (editComment) => {
        setMenuId(null)
        setEditComment(editComment)
    }

    return (
        <div className="flex fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#0000007A] z-9999">
            <div className="w-full h-full tablet:w-[60%] tablet:h-[90%] border bg-white m-auto mt-auto rounded-lg p-3 overflow-y-auto">
                <div className=" flex flex-col gap-4 w-full h-fit">
                    <div className="flex w-full h-fit justify-between items-center">
                        <div className="flex flex-col tablet:flex-row gap-5  w-fit items-center">
                            <div className="flex flex-col tablet:flex-row w-full h-full gap-2 tablet:gap-4">
                                <div className="flex w-fit h-full gap-3 items-center">
                                    <img src='./images/blankuser.png' alt="user" width='40px' className='rounded-full' />
                                    <div className="w-fit h-full">
                                        <p className="font-normal text-sm text-[#006EB9] leading-5">{props.post.askedby}</p>
                                        <p className="font-normal text-[10px] leading-5 text-[#2C2724BF]">{props.post.posteddate}</p>
                                    </div>
                                </div>
                                <div className="w-fit h-full items-center justify-start gap-2 p-2 border-l border-l-[#E1ECF3]">
                                    <div className="flex w-full h-5 gap-2 pl-5 items-center">
                                        <p className="font-normal text-xs leading-5 text-[#006EB9]">{props.post.views} views</p>
                                        <BsDot className="text-[#2C2724BF]" />
                                        <p className="font-normal text-xs leading-5 text-[#006EB9]">{props.post.answers} comments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end p-2">
                            <SlClose className="cursor-pointer text-xl" onClick={goBack} />
                        </div>
                    </div>
                    <div className="flex w-full h-80 justify-center">
                        <img src={props.post.image ? props.post.image : './images/Rectangle 24.png'} width='100%' />
                    </div>
                    <div className="flex flex-col w-full h-fit gap-2.5">
                        <div className=" flex items-center w-fit h-[22px] gap-2.5">
                            <div className="flex items-center justify-center w-fit h-full rounded-2xl px-2.5 py-1 gap-2.5 bg-[#F0F9FF]">
                                <p className="font-normal text-center text-[#006EB9] leading-[13.5px] text-sm ">{props.post.subject}</p>
                            </div>
                        </div>
                        <p className="font-normal text-sm leading-5 text-[#2C2724BF]">{props.post.questiontext}</p>
                    </div>
                </div>
                {/* <div className=" flex w-full h-20 border-t border-t-[#E1ECF3] mt-8 mb-2 items-end">
                    <div className="flex w-full m-auto h-11">
                        <div className='flex w-full h-full justify-evenly'>
                            <div className='flex items-center'>
                                <img src='./images/blankuser.png' alt="user" width='40px' className='rounded-full' />
                            </div>
                            <form
                                className='flex flex-col tablet:flex-row gap-2 mb-4 w-[90%]'
                                onSubmit={(e) => handleAddAnswer(e, props.post.forumid)}
                            >
                                <textarea
                                    className='flex items-center w-full tablet:w-2/3 h-11 px-2 py-1 text-left border-2 rounded'
                                    placeholder='Add your answer'
                                    onChange={(e) => setAnswerText(e.target.value)} />
                                <button
                                    className='w-2/3 tablet:w-1/3 h-11 px-2 py-2 bg-[rgba(0,110,185,1)] text-white flex items-center justify-center rounded'
                                    type='submit'
                                >
                                    Add Answer
                                </button>
                            </form>
                        </div>
                    </div>
                </div> */}
                <AddAnswer editComment={editComment} forumid={props.post.forumid} />
                {!props.post.answers ?
                    <p className='px-2 py-2 text-[rgba(0,110,185,1)] text-left text-base italic mt-4 tablet:mt-0'>Be the first to answer to this post.</p> :
                    <p className='px-2 py-2 text-lg font-medium mt-4 tablet:mt-0'>All Comments</p>}
                {answersLoading &&
                    <div className='flex items-center justify-center gap-2'>
                        <p className='text-center font-normal text-xl'>Loading....</p>
                        <CircularProgress size="1rem" />
                    </div>}
                {forumAnswer?.answers?.map((onecomment, index) => (
                    (props.post.forumid === onecomment.forumid) &&
                    <div key={index} className='flex flex-col gap-1 py-2 px-2'>
                        <div className='flex gap-3 justify-start items-start'>
                            <div className=''>
                                <img src='./images/blankuser.png' width='40px' alt='user' />
                            </div>
                            <div className='w-[90%] flex flex-col gap-2'>
                                <div className='flex w-full gap-1.5 items-center justify-between '>
                                    <div className="flex flex-col tablet:flex-row items-start tablet:items-center gap-1.5">
                                        <p className="text-left font-medium text-[rgba(0,110,185,1)] text-base">{onecomment.name}</p>
                                        <BsDot className='text-[rgba(44,39,36,0.75)] hidden tablet:block' />
                                        <p className='text-left font-normal text-xs text-[rgba(44,39,36,0.75)] '>{onecomment.posteddate}</p>
                                    </div>
                                    {user === onecomment.name &&
                                        <div className="relative">
                                            <BsThreeDotsVertical className="text-[#006EB9] flex items-center cursor-pointer" onClick={() => toggleView(onecomment.answerid)} />
                                            {onecomment.answerid === menuId &&
                                                <div className='border border-[#E1ECF3] h-[78px] w-44 absolute right-4 top-0 bg-white z-999 cursor-pointer rounded'>
                                                    <div className='flex items-center justify-start w-full h-1/2 p-2 gap-2 hover:bg-[#E1ECF3]' onClick={() => handleEditAnswer(onecomment)}>
                                                        <FiEdit2 className='text-[#006EB9]' />
                                                        <p className='text-sm'>Edit Comment</p>
                                                    </div>
                                                    <div className='flex items-center justify-start w-full h-1/2 p-2 gap-2 hover:bg-[#E1ECF3]' onClick={(e) => handleDeleteAnswer(e, onecomment.answerid)}>
                                                        <MdOutlineDelete className='text-[#FE2D0F] text-xl' />
                                                        <p className='text-sm'> Delete Comment</p>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    }
                                </div>
                                <p className='text-left font-normal text-sm text-[#2C2724BF]'>{onecomment.answertext}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OpenPost;