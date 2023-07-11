import React from "react";
import { BsPlayCircle } from 'react-icons/bs'
import { HiOutlineClock } from 'react-icons/hi2'
import cover from "../../Assets/cover.png";
import { Link } from "react-router-dom";


const IntroCourse = () => {
    return (
        <div className="flex flex-col-reverse laptop:flex-row w-[90%] h-[408px] mt-32 ml-6 tablet:mt-60 laptop:mt-20 tablet:ml-32 gap-6 laptop:gap-24">
            <div className=" w-full laptop:w-[50%] h-full">
                <div className="w-full h-[272px] gap:4 tablet:gap-16">
                    <div className="flex flex-col justify-between w-full h-[272px] gap-2 tablet:gap-6">
                        <div className="flex flex-col w-full h-fit gap-1 tablet:gap-4">
                            <div className="w-fit h-8 rounded-[160px] py-1.5 px-4 gap-2 bg-[#F0F9FF]">
                                <p className="w-fit font-normal text-sm text-center leading-5 text-[#006EB9]">Lok Sewa</p>
                            </div>
                            <p className="w-full h-fit laptop:h-24 font-medium text-4xl leading-[48px] text-black py-2">Rastriya Banijya Bank (RBB) 4th Level Full Course</p>
                            <div className="w-[210px] h-6 gap-2.5 py-2">
                                <div className="flex items-center w-[210px] h-6 gap-3">
                                    <div className=" flex justify-between items-center w-1/2 h-full gap-1">
                                        <div className="flex justify-between items-center w-6 h-6 opacity-80">
                                            <HiOutlineClock className="text-[#006EB9]"/>
                                        </div>
                                        <p className="w-20 h-6 opacity-90 font-normal text-base leading-6 text-justify text-black">12 Hours</p>
                                    </div>
                                    <div className=" flex justify-between items-center w-1/2 h-full gap-1">
                                        <div className="flex justify-between items-center w-6 h-6 opacity-80">
                                            <BsPlayCircle className="text-[#006EB9]"/>
                                        </div>
                                        <p className="w-20 h-6 opacity-90 font-normal text-base leading-6 text-justify text-black">18 Videos</p>
                                    </div>
                                </div>
                            </div>
                            <p className="w-full h-fit font-normal text-base leading-6 text-[#2C2724BF] py-3">Access a vast array of courses, by a very interactive lessons, and expert also by giving a full course. Access a vast array of courses, by a very interactive lessons.</p>
                        </div>
                        <div className="flex w-64 h-6 gap-4">
                            <p className="w-fit h-full font-light text-xl leading-6 text-[#2C2724BF] line-through">Rs. 5,500/-</p>
                            <p className="w-fit h-full font-medium text-xl leading-6 text-[#006EB9]">Rs. 4,500/-</p>
                        </div>
                        <div className="w-fit h-12 gap-4 py-2">
                            <Link to="video">
                                <button className="flex w-fit h-12 px-8 py-4 bg-[#006EB9] text-white text-center items-center">Enroll Now</button>
                            </Link>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="w-[90%] laptop:w-1/2 h-full">
                <img src={cover} alt="course cover"/>
            </div>
        </div>
    )
}

export default IntroCourse;

//COMPONENT READY