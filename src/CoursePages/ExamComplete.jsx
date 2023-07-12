import React from "react";
import CourseHead from "../components/learning/Coursehead";
import QueComplete from "../components/learning/QueComplete";

const ExamComplete = () => {
    return (
        <div>
            <CourseHead header="exam"/>
                <div className="flex items-center justify-center w-full h-12 border bg-[#E1ECF3] border-[#E1ECF3]">
                    <p className="w-30 h-6 font-normal text-lg leading-6 text-center">Practice Set 1</p>
                </div>
            <div>
                <QueComplete/>
            </div>
            <div className="flex justify-end w-full h-[72px]">
                <div className=" px-8 py-4">
                    <button className="w-28 tablet:w-40 items-center h-12 bg-[#006EB9] text-white">Done</button>
                </div>
            </div>
        </div>
    )
}

export default ExamComplete;