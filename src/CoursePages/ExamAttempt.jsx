import React, { useState } from "react";
import CourseHead from "../components/learning/Coursehead";
import { HiOutlineClock } from 'react-icons/hi2'
import QueCounter from "../components/learning/QueCounter";
import Countdown from "react-countdown";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";


const AttemptExam = () => {


    const Completionist = () => <span className="text-red-600 font-medium text-xl leading-6">TIME'S UP!!</span>
    
    return (
        <div>
            <CourseHead header="exam"/>
            <div className="flex items-center justify-center w-full h-12 border bg-[#E1ECF3] border-[#E1ECF3]">
                <p className="w-30 h-6 font-normal text-lg leading-6 text-center">Practice Set 1</p>
            </div>
            <QueCounter/>
            <div className="flex justify-between w-full h-[72px]">
                <div className="flex items-center w-30 h-6 mt-8 ml-10 gap-2">
                    <HiOutlineClock className="text-[#006EB9] flex items-center" />
                    <p className="flex items-center w-fit h-6 font-medium text-xl leading-6 text-[#006EB9]">
                        <Countdown date={Date.now() + 10000}><Completionist /></Countdown>
                    </p>
                </div>
                <div className=" px-8 py-4">
                    <Link to='/exam/complete'>
                        <button className="w-28 tablet:w-40 items-center h-12 bg-[#006EB9] text-white">Submit</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AttemptExam;