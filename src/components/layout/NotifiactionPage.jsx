import React from "react";
import UserNav from "./UserNav";
import { fetchNotifications } from "../../hooks/fetchHooks";
import { useQuery } from "react-query";
import { MdPeopleOutline } from "react-icons/md"
import { HiBell } from "react-icons/hi"
import { CgFileDocument, CgLayoutGrid } from 'react-icons/cg'
import line from '../../Assets/line.png'
import Footer from "./Footer";


const NotificationPage = () => {

    const { isLoading, data: notification, isError, error } = useQuery('notifications', fetchNotifications )

    return (
        <>
            <UserNav />
            <div
            className="flex w-full h-[150px] items-center "
            style={{
                backgroundImage: `url(${'./images/header.jpg'})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
            >
            <div className="flex items-center ml-12 laptop:ml-32 font-Poppins">
                <p className=" font-medium text-3xl text-white ">Notifcations</p>
            </div>
            </div>
            <div className="w-full flex justify-end h-fit mt-10 z-10 ml-auto tablet:mr-[10%] bg-white mb-10">
            <div className="w-[80%] m-auto flex justify-center border rounded-sm">
                <div className="w-full h-fit gap-0.25">
                    {isLoading && <p className="text-center p-4">Loading...</p>}
                    {error && <p className="text-center p-4">{error.message}</p>}
                    <div className="w-full h-fit">
                        {notification?.map((onenotice, index) => (
                            <div>
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default NotificationPage;