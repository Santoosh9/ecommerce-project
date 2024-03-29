import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri"
import { RiCheckboxCircleLine } from "react-icons/ri"
import { GoDotFill } from "react-icons/go"
import { BsChevronDown } from 'react-icons/bs'
import { MdPeopleOutline } from "react-icons/md"
import { HiBell } from "react-icons/hi"
import { CgFileDocument, CgLayoutGrid } from 'react-icons/cg'
import line from '../../Assets/line.png'
import { useQuery } from 'react-query';
import { fetchNotifications } from "../../hooks/fetchHooks";
import { Link } from "react-router-dom";

const Notifications = () => {


    const { isLoading, data: notification, isError, error } = useQuery('notifications', fetchNotifications )

    return (
        <div className="fixed inset-0 w-full max-h-[80vh] overflow-y-auto max-w-[400px] flex justify-end h-fit mt-20 z-10 ml-auto tablet:mr-[10%] bg-white">
            <div className="w-full h-full rounded">
                <div className="flex justify-between items-center w-full h-12 py-3  pl-4 pr-1 gap-4">
                    <div className="w-1/2 h-3/5">
                        <div className="flex w-3/4 h-full gap-2">
                            <p className="w-fit h-[18px] font-medium text-sm leading-[18px]">Notifications</p>
                            <div className="w-14 h-5 ">
                                <Link to="/notifications">
                                <div className="flex items-center h-full w-full gap-1">
                                    <p className="w-11 h-full font-medium text-xs leading-5 text-[#2C272480]">All</p>
                                    <div className="flex items-center w-3 h-3 ">
                                        <BsChevronDown className="text-[#9EA0AA] font-bold text-xl" />
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-36 h-5 pr-2">
                        <div className="flex justify-center items-center w-full h-full gap-1">
                            <p className="w-fit h-5 font-normal text-xs leading-5 text-[#2C2724BF]">
                                Mark all as read
                            </p>
                            <div className="w-4 h-4">
                                <RiCheckboxCircleLine className="text-[#2C2724BF]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit gap-0.25">
                    {isLoading && <p className="text-center p-4">Loading...</p>}
                    {error && <p className="text-center p-4">{error.message}</p>}
                    <div className="w-full h-fit">
                        {notification?.map((onenotice, index) => (
                            <div>
                            {(index < 4) &&
                                <div className="w-full h-fit px-0 pt-2 pb-4 border-b border-b-[#E4E8EE]">
                                <div className="w-full h-fit pb-2 relative">
                                    {onenotice.read && <div className="absolute top-0 left-0">
                                        <GoDotFill className="text-[#EB5757]" />
                                    </div>}
                                    <div className="flex items-center justify-start w-full h-fit px-4">
                                        <div className="flex justify-center items-center bg-[#006EB9] rounded-full w-8 h-8">
                                            {onenotice.type === 'subject' && <MdPeopleOutline className="text-white" />}
                                            {onenotice.type === 'onlinequiz' && <CgFileDocument className="text-white" />}
                                            {onenotice.type === 'normal' && <HiBell className="text-white" />}
                                        </div>
                                        <div className="w-[80%] h-fit gap-2.5 pl-2">
                                            <p className="w-full h-fit font-semibold text-sm leading-[18px]">{onenotice.title}</p>
                                        </div>
                                    </div>
                                    {onenotice.description &&
                                        <div className="flex justify-start w-full h-fit pr-4 pl-16 gap-2.5">
                                            <div className="w-1 h-full bg-[#2C272440]">
                                                <img src={line} alt="line" className="h-full" />
                                            </div>
                                            <div className="w-full h-fit gap-2">
                                                <p className="w-full h-fit font-normal text-sm leading-5">{onenotice.description}</p>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className="w-full h-5 pl-16 gap-2.5">
                                    <p className="w-fit h-full font-normal text-sm leading-5 text-[#8D8D8D]">
                                        {onenotice.posteddate}
                                    </p>
                                </div>
                            </div>
                            }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notifications;