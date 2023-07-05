import React, { useState } from "react";
import logo from "../../Assets/logo.png"
import line from "../../Assets/line.png"
import user from "../../Assets/user.png"
import { BsChevronDown } from 'react-icons/bs'
import { BsChevronUp } from 'react-icons/bs'
import Dropdown from "./Dropdown";

const CourseHead = () => {

    const [clicked, setClicked] = useState(false)

    const handleOnClick = () => {
        setClicked(prev => !prev)
    }

    return (
        <div className="flex justify-between mobile:w-full tablet:w-full laptop:w-navwidth h-navheight px-2.5 py-10 border-b border-b-blue-200 gap:auto laptop:gap-navgap">
            <div className="flex items-center gap-2 tablet:gap-8 h-76 mobile:w-60 tablet:w-[50%]">
                <img src={logo} alt="logo" className="w-16 h-16 ml-4 tablet:ml-10" />
                <p className="w-full h-6 text-base font-medium leading-6 tracking-normal text-left mobile:hidden tablet:flex">
                Rastriya Banijya Bank (RBB) 4th Level Full Course
                </p>
                <p className="tablet:hidden ml-0.5 w-full">RBB 4th Level</p>
            </div>
            <div className="flex items-center mr-6">
                <div className="flex items-center tablet:gap-4">
                <img src={line} alt="line" className="mr-4" />
                    <div className="mobile:hidden tablet:flex items-center z-10 gap-2" onClick={handleOnClick}>
                        <img src={user} alt="user" className="w-10 h-10" />
                        <p>Ajit KC</p>
                        <div>
                        {clicked? <BsChevronUp/>: <BsChevronDown/> }
                        </div>
                    </div>
                    <div className="flex items-center z-10 gap-1 tablet:hidden" onClick={handleOnClick}>
                        <img src={user} alt="user" className="w-5 h-5"/>
                    </div>
                </div>
            </div>
            { clicked  &&
                <Dropdown/>
                }
            </div>
    )
}

export default CourseHead;