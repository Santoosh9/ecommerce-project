import React from "react";
import {RiArrowDropDownLine} from "react-icons/ri"
import {RiCheckboxCircleLine} from "react-icons/ri"
import { GoDotFill } from "react-icons/go"
import { BsChevronDown } from 'react-icons/bs'
import {MdPeopleOutline} from "react-icons/md"
import { HiBell} from "react-icons/hi"
import { CgFileDocument } from 'react-icons/cg'
import line from '../../Assets/line.png'

const Notifications = () => {

    const notification = [
        {
            id:1,
            read: false,
            group: 'class',
            header: "The Class for RBB 4th Level has resumed from Chapter 7",
            timestamp: "Yesterday at 11:42 PM"
        },
        {
            id:2,
            read: true,
            group: 'exam',
            header: "Entrance Exam for IOE is starting from tomorrow: 12/02/2023",
            timestamp: "Yesterday at 12:32 PM"
        },
        {
            id:3,
            read: true,
            group: 'alert',
            header: "Class Resumption Notice",
            description: "This is to notice all the students that their regular class for NEA 7th Level Full Course is resuming from tomorrow: 12/02/2023 from 9 to 12 AM  ",
            timestamp: "Last Wednesday at 11:15 AM"
        },
        {
            id:4,
            read: true,
            group: 'alert',
            header: "Entrance Exam for IOE is starting from tomorrow: 12/02/2023",
            timestamp: "Last Wednesday at 11:15 AM"
        }
    ]
    return (
        <div className="fixed inset-0 w-full max-h-screen overflow-y-auto max-w-[440px] flex justify-end h-fit mt-20 z-10 laptop:ml-[65%] bg-white">
            <div className="w-full h-full rounded">
                <div className="flex justify-between items-center w-full h-12 py-3  pl-4 pr-1 gap-4">
                    <div className="w-1/2 h-3/5">
                        <div className="flex w-3/4 h-full gap-2">
                            <p className="w-fit h-[18px] font-medium text-sm leading-[18px]">Notifications</p>
                            <div className="w-14 h-5 ">
                                <div className="flex items-center h-full w-full gap-1">
                                    <p className="w-11 h-full font-medium text-xs leading-5 text-[#2C272480]">All</p>
                                    <div className="flex items-center w-3 h-3 ">
                                        <BsChevronDown className="text-[#9EA0AA] font-bold text-xl"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-36 h-5 pr-2">
                        <div className="flex justify-end items-center w-full h-full gap-1">
                            <p className="w-fit h-5 font-normal text-xs leading-5 text-[#2C2724BF]">
                                Mark all as read
                            </p>
                            <div className="w-4 h-4">
                                <RiCheckboxCircleLine className="text-[#2C2724BF]"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit gap-0.25">
                    <div className="w-full h-fit">
                        {notification.map((onenotice, index) => (
                            <div className="w-full h-fit px-0 pt-2 pb-4 border-b border-b-[#E4E8EE]">
                            <div className="w-full h-fit pb-2 relative">
                                {!onenotice.read && <div className="absolute top-0 left-0">
                                    <GoDotFill className="text-[#EB5757]"/>
                                </div>}
                                <div className="flex items-center justify-start w-full h-fit px-4">
                                    <div className="flex justify-center items-center bg-[#006EB9] rounded-full w-8 h-8">
                                        { onenotice.group === 'class' && <MdPeopleOutline className="text-white"/> }
                                        { onenotice.group === 'exam' && <CgFileDocument className="text-white"/> }
                                        { onenotice.group === 'alert' && <HiBell className="text-white"/> }
                                    </div>
                                    <div className="w-[80%] h-fit gap-2.5 pl-2">
                                        <p className="w-full h-fit font-semibold text-sm leading-[18px]">{onenotice.header}</p>
                                    </div>
                                </div>
                                {onenotice.description && 
                                    <div className="flex justify-start w-full h-fit pr-4 pl-16 gap-2.5">
                                        <div className="w-1 h-full bg-[#2C272440]">
                                            <img src={line} alt="line" className="h-full"/>
                                        </div>
                                        <div className="w-full h-fit gap-2">
                                            <p className="w-full h-fit font-normal text-sm leading-5">{onenotice.description}</p>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="w-full h-5 pl-16 gap-2.5">
                                <p className="w-fit h-full font-normal text-sm leading-5 text-[#8D8D8D]">
                                   {onenotice.timestamp}
                                </p>
                            </div>
                        </div>
                        ))}
                        {/* <div className="w-full h-fit px-0 pt-2 pb-4 border-b border-b-[#E4E8EE]">
                            <div className="w-full h-fit pb-2 relative">
                                <div className="absolute top-0 left-0">
                                    <GoDotFill className="text-[#EB5757]"/>
                                </div>
                                <div className="flex items-center justify-start w-full h-fit px-4">
                                    <div className="flex justify-center items-center bg-[#006EB9] rounded-full w-8 h-8">
                                        <MdPeopleOutline/>
                                    </div>
                                    <div className="w-[80%] h-fit gap-2.5">
                                        <p className="w-full h-fit font-semibold text-sm leading-[18px]">The Class for RBB 4th Level has resumed from Chapter 7</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-5 pl-16 gap-2.5">
                                <p className="w-fit h-full font-normal text-sm leading-5 text-[#8D8D8D]">
                                    Yesterday at 11:42 PM
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notifications;