import React, { useState, useEffect } from "react";
import { addAnswersData, editAnswerData } from "../../hooks/fetchHooks";

const AddAnswer = (props) => {

    const [editData , setEditData] = useState({
        answertext: '',
        answerid: ''
    })

    useEffect(() => {
        if (props.editComment) {
            const updatedEditData = {
                ...editData,
                answertext: props.editComment.answertext,
                answerid: props.editComment.answerid,
            };
            setEditData(updatedEditData);
        }
    }, [props.editComment])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value });
        console.log(editData)
    };

    const { mutate: answersMutation } = addAnswersData();
    const { mutate: editAnswerMutation } = editAnswerData();

    const handleAddAnswer = async (e, forumid) => {
        e.preventDefault();
        const answertext = editData.answertext
        const answerData = { forumid, answertext }
        try {
            answersMutation(answerData);
            toast.success("Answer Added")
            setEditData({...editData,
                answertext: '',
                answerid : ''
            })
        } catch (error) {
            toast.error(error.message)
        }
    }

    const handleEditAnswer = async (e, editData) => {
        e.preventDefault();
        try {
            editAnswerMutation(editData);
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div className=" flex w-full h-20 border-t border-t-[#E1ECF3] mt-8 mb-2 items-end">
                    <div className="flex w-full m-auto h-11">
                        <div className='flex w-full h-full justify-evenly'>
                            <div className='flex items-center'>
                                <img src='./images/blankuser.png' alt="user" width='40px' className='rounded-full' />
                            </div>
                            <form
                                className='flex flex-col tablet:flex-row gap-2 mb-4 w-[90%]'
                                onSubmit={props.editComment ?
                                    (e) => handleEditAnswer(e, editData)
                                    :(e) => handleAddAnswer(e, props.forumid)}
                            >
                                <textarea
                                    className='flex items-center w-full tablet:w-2/3 h-11 px-2 py-1 text-left border-2 rounded'
                                    placeholder='Add your answer'
                                    name="answertext"
                                    value={editData.answertext}
                                    onChange={handleChange} />
                                <button
                                    className='w-2/3 tablet:w-1/3 h-11 px-2 py-2 bg-[rgba(0,110,185,1)] text-white flex items-center justify-center rounded'
                                    type='submit'
                                >
                                   {props.editComment? <p>Edit Answer</p> : <p>Add Answer</p> }
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
    )
}

export default AddAnswer