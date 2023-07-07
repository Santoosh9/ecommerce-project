import React from "react";
import { TfiAngleRight } from 'react-icons/tfi'
import { TfiAngleLeft } from 'react-icons/tfi'
import { Link } from "react-router-dom";

const Selectbar = (props) => {

    const handleChange = (data) => {
        props.handleChangeData(data)
    }

    return (
        <div className="flex justify-between items-center mt-0.5 mobile:w-full tablet:w-full border border-b-blue-200">
            <div className=" flex items-center justify-between tablet:h-18 tablet:w-24 tablet:px-8 tablet:py-4 mobile:w-[10%] border-r border-l border-r-blue-200 " onClick={() => handleChange(0)}>
                <div className=" flex justify-center items-center h-8 w-8">
                    <div className="flex justify-center items-center h-8 w-8">
                        <TfiAngleLeft/>      
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center tablet:w-96 tablet:h-18 tablet:gap-8 w-[80%]">
                <div className="flex justify-center items-center w-96 h-12 gap-6">
                    {props.openPage === "video" ?
                        <div className="flex items-center justify-center mobile:w-16 mobile:h-10 tablet:w-28 tablet:h-12 tablet:px-8 tablet:py-2 border tablet:gap-2 bg-black text-white rounded-3xl">
                            <p>Video</p>
                        </div> :
                        <Link to="/learning/video">
                            <div className="flex items-center justify-center mobile:w-16 mobile:h-10 tablet:w-28 tablet:h-12 tablet:px-8 tablet:py-2 border tablet:gap-2 rounded-3xl border-blue-200">
                                <p>Video</p>
                            </div>
                        </Link>
                    }
                    {props.openPage === "notes" ?
                        <div className="flex items-center justify-center mobile:w-16 mobile:h-10 tablet:w-28 tablet:h-12 tablet:px-8 tablet:py-2 border tablet:gap-2 bg-black text-white rounded-3xl">
                            <p>Notes</p>
                        </div> :
                        <Link to='/learning/notes'>
                            <div className="flex items-center justify-center mobile:w-16 mobile:h-10 tablet:w-28 tablet:h-12 tablet:px-8 tablet:py-2 border tablet:gap-2 rounded-3xl border-blue-200">
                                <p>Notes</p>
                            </div>
                        </Link>
                    }
                    {props.openPage === "mcqs" || props.openPage === "complete" ?
                        <div className="flex items-center justify-center mobile:w-16 mobile:h-10 tablet:w-28 tablet:h-12 tablet:px-8 tablet:py-2 border tablet:gap-2 bg-black text-white rounded-3xl">
                            <p>MCQs</p>
                        </div> :
                        <Link to="/learning/mcqs">
                            <div className="flex items-center justify-center mobile:w-16 mobile:h-10 tablet:w-28 tablet:h-12 tablet:px-8 tablet:py-2 border tablet:gap-2 rounded-3xl border-blue-200">
                                <p>MCQs</p>
                            </div>
                        </Link>
                    }
                </div>

            </div>
            <div className="align-middle tablet:h-18 tablet:w-24 tablet:px-8 tablet:py-4 mobile:w-[10%] border-l border-r border-r-blue-200 border-l-blue-200"  onClick={() => handleChange(1)}>
                <div className=" flex justify-center items-center h-8 w-8">
                    <div className="flex justify-center items-center h-8 w-8">
                        <TfiAngleRight/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Selectbar;