import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../learning/Dropdown';
import { BsChevronDown } from 'react-icons/bs'
import { BsChevronUp } from 'react-icons/bs'
import { HiBell} from "react-icons/hi"
import { GoDotFill } from "react-icons/go"
import { AiOutlineMenu } from "react-icons/ai"
import SubjectMenu from './SubjectMenu';

import Notifications from './Notifications';

const UserNav = () => {
  const [open, setOpen] = useState(false);

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [notification, setNotification] = useState(false)
  const [showMenu, setShowMenu] = useState(false);

  const handleOpen = (index) => {
    console.log(index, 'clicked')
    if (index === '1') {
      setOpen(!open);
      setOpen1(false);
      setOpen2(false);
      setNotification(false);
      setClicked(false);
    } else if (index ==='2') {
      setOpen(false);
      setOpen1(!open1);
      setOpen2(false);
      setNotification(false);
      setClicked(false);
    } else if (index ==='3') {
      setOpen(false);
      setOpen1(false);
      setOpen2(!open2);
      setNotification(false);
      setClicked(false);
    } else if (index === "notification") {
      setOpen(false);
      setOpen1(false);
      setOpen2(false);
      setNotification(!notification);
      setClicked(false);
      setShowMenu(false)
    } else if (index === "user") {
      setOpen(false);
      setOpen1(false);
      setOpen2(false);
      setNotification(false);
      setClicked(!clicked);
      setShowMenu(false)
    } else if (index === "menu") {
      setOpen(false);
      setOpen1(false);
      setOpen2(false);
      setNotification(false);
      setClicked(false);
      setShowMenu(!showMenu)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setNotification(false);
      setClicked(false);
      setShowMenu(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="flex flex-row h-auto  w-full  border-[1.5px]  justify-between font-Poppins  items-center  ">
        <div className="ml-6 tablet:ml-16">
          <Link to="/">
            <img
              className="mt-2 mb-2   "
              src="./images/logo.png"
              alt="logo-img"
            />
          </Link>
        </div>
        <div className="hidden tablet:block">
          <div
            className="flex flex-row justify-around gap-[20px]  w-full font-Poppins font-[400] ml-16 laptop:mt-2 text-base  tablet:mt-3"
          >
            <button
              className="flex flex-row items-center relative gap-1"
              onClick={() => handleOpen('1')}
            >
              लोकसेवा (संघ र प्रदेश‌‍‍‌)
              <div>
                {open? <BsChevronUp className="text-lg"/>: <BsChevronDown className='text-lg'/> }
              </div>
              <Link to="/learning">
              <ul
                className={` w-40 py-2 mt-2 rounded-lg shadow-xl absolute left-0 -bottom-32 bg-white ${
                  open ? 'block' : 'hidden'
                }`}
              >
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                लोकसेवा (प्रदेश‌‍‍‌)
                </li>
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                लोकसेवा (संघ)
                </li>
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                लोकसेवा (प्रदेश‌‍‍‌)
                </li>
              </ul>
              </Link>
            </button>

            <button
              className="flex flex-row items-center relative gap-1"
              onClick={() => handleOpen('2')}
            >
              बैंकिङ तयारी
              <div>
                {open1? <BsChevronUp className="text-lg"/>: <BsChevronDown className='text-lg'/> }
              </div>
              <Link to="/learning">
              <ul
                className={` w-40 py-2 mt-2 rounded-lg shadow-xl absolute left-0 -bottom-32 bg-white ${
                  open1 ? 'block' : 'hidden'
                }`}
              >
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                  RBB 4th Level
                </li>
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                  RBB 4th Level
                </li>
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                  RBB 4th Level
                </li>
              </ul>
              </Link>
            </button>
            <button
              className="flex flex-row items-center relative gap-1"
              onClick={() => handleOpen('3')}
            >
              संस्थान तयारी कक्षा
              <div>
                {open2 ? <BsChevronUp className="text-lg"/>: <BsChevronDown className='text-lg'/> }
              </div>
              <Link to="/learning">
              <ul
                className={` w-40 py-2 mt-2 rounded-lg shadow-xl absolute left-0 -bottom-32 bg-white ml-16  ${
                  open2 ? 'block' : 'hidden'
                }`}
              >
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                संस्थान तयारी
                </li>
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                संस्थान तयारी
                </li>
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                संस्थान तयारी
                </li>
              </ul>
              </Link>
            </button>

            <Link to="/currentoffiars">
              <div className="  justify-between  ml-6  flex flex-row gap-[20px]  font-Poppins font-[400] ">
                Current Affairs
              </div>
            </Link>
          </div>
        </div>
        <div>
          <AiOutlineMenu className='tablet:hidden text-lg ml-[20%]' onClick={() => handleOpen('menu')}/>
        </div>
        <div className="flex gap-4 items-center justify-end mr-2 tablet:mr-10  tablet:mt-2 w-[30%] ">
          <div className='flex w-10 h-10 p-2 gap-2.5 items-center bg-[#006EB91A] relative cursor-pointer' onClick={() => handleOpen('notification')}>
            <HiBell className='text-4xl text-[#006EB9]'/>
            <GoDotFill className='text-[#EB5757] absolute top-1 left-4'/>
          </div>
          <img
            className="rounded-full w-10 laptop:mt-0 tablet:mt-2 cursor-pointer"
            src="./images/me.jpg"
            onClick={() => handleOpen("user")}
          />
          <p className="hidden laptop:flex flex-row items-center font-Poppins font-[400] mt-2 gap-1 laptop:mt-0 z-10 cursor-pointer " onClick={() => handleOpen("user")}>
            Santosh
              {clicked? <BsChevronUp className="text-lg"/>: <BsChevronDown className='text-lg'/> }
          </p>
        </div>
        { clicked  &&
          <Dropdown/>
        }
        {notification && <Notifications/>}
        {showMenu && <SubjectMenu/>}
      </div>
    </>
  );
};

export default UserNav;
