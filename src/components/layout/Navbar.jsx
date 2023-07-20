import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import { BsChevronUp } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import SubjectMenu from './SubjectMenu';
import axios from 'axios';
import { useQuery } from 'react-query';
import { PiCloudSlash } from 'react-icons/pi';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleOpen = () => {
    setShowMenu(!showMenu);
  };

  const menu = [
    {
      title: 'लोकसेवा (संघ र प्रदेश‌‍‍‌)',
      submenu: [
        {
          subtitle: 'लोकसेवा (संघ‌‍‍‌)',
        },
        {
          subtitle: 'लोकसेवा (प्रदेश‌‍‍‌‍‍‌)',
        },
        {
          subtitle: 'लोकसेवा (संघ‌‍‍‌)',
        },
      ],
    },
    {
      title: 'बैंकिङ तयारी',
      submenu: [
        {
          subtitle: 'RBB 4th Level',
        },
        {
          subtitle: 'RBB 4th Level',
        },
        {
          subtitle: 'RBB 4th Level',
        },
      ],
    },
    {
      title: 'संस्थान तयारी',
      submenu: [
        {
          subtitle: 'संस्थान तयारी',
        },
        {
          subtitle: 'संस्थान तयारी',
        },
        {
          subtitle: 'संस्थान तयारी',
        },
      ],
    },
  ];

  // const fetchSubjects = async () => {
  //   const response = await axios.get("http://localhost:4000/menu")
  //   return response?.data
  // }

  // const {isLoading, data:menu, isError, error} = useQuery("menu", fetchSubjects);

  useEffect(() => {
    const handleScroll = () => {
      setShowMenu(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [toggle, setToggle] = useState([]);

  const toggleView = (index) => {
    const updatedToggle = [...toggle];
    for (let i = 0; i <= toggle.length; i++) {
      if (i === index) {
        updatedToggle[i] = !updatedToggle[i];
      } else {
        updatedToggle[i] = false;
      }
    }
    setToggle(updatedToggle);
  };

  return (
    <>
      <div className="flex flex-row h-auto w-full border-[1.5px] justify-around font-Poppins  items-center ">
        <div className="">
          <Link to="/">
            <img className="mt-2 mb-2" src="./images/logo.png" alt="logo-img" />
          </Link>
        </div>
        {/* <div className="hidden laptop:block">
          <div
            className="flex flex-row justify-around   gap-[20px]  font-Poppins font-[400]  "
          >
            <button
              className="flex flex-row relative items-center gap-1"
              onClick={() => handleOpen('1')}
            >
              लोकसेवा (संघ र प्रदेश‌‍‍‌)
              <div>
                {open? <BsChevronUp className="text-lg"/>: <BsChevronDown className='text-lg'/> }
              </div>
              <Link to='/learning'>
              <ul
                className={` w-40 py-2 mt-2 rounded-lg shadow-xl absolute left-0 -bottom-32 bg-white ${
                  open ? 'block' : 'hidden'
                }`}
              >
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                  लोकसेवा (संघ‌‍‍‌)
                </li>
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                  लोकसेवा (प्रदेश‌‍‍‌)
                </li>
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                  लोकसेवा (संघ‌)
                </li>
              </ul>
              </Link>
            </button>

            <button
              className="flex flex-row relative items-center gap-1"
              onClick={() => handleOpen('2')}
            >
              बैंकिङ तयारी
              <div>
                {open1? <BsChevronUp className="text-lg"/>: <BsChevronDown className='text-lg'/> }
              </div>
              <Link to='/learning'>
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
              className="flex flex-row relative items-center gap-1"
              onClick={() => handleOpen('3')}
            >
              संस्थान तयारी कक्षा
              <div>
                {open2? <BsChevronUp className="text-lg"/>: <BsChevronDown className='text-lg'/> }
              </div>
              <Link to ="/learning">
              <ul
                className={` w-40 py-2 mt-2 rounded-lg shadow-xl absolute left-0 -bottom-32 bg-white ml-16  ${
                  open2 ? 'block' : 'hidden'
                }`}
              >
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                  संस्थान तयारी 1
                </li>
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                  संस्थान तयारी 2
                </li>
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                  संस्थान तयारी 3
                </li>
              </ul>
              </Link>
            </button>

            <Link to="/currentoffiars">
              <div className="  justify-between  ml-6  flex flex-row  gap-[20px]  font-Poppins font-[400] ">
                Current Affairs
              </div>
            </Link>
          </div>
        </div> */}
        <div className="hidden laptop:flex flex-row justify-around   gap-[20px]  font-Poppins font-[400]">
          {menu?.map((onemenu, menuIndex) => (
            <div>
              <button
                className="flex flex-row relative items-center gap-1"
                onClick={() => handleOpen('subjects')}
              >
                <p onClick={() => toggleView(menuIndex)}>{onemenu.title}</p>
                <div>
                  {toggle[menuIndex] ? (
                    <BsChevronUp onClick={() => toggleView(menuIndex)} />
                  ) : (
                    <BsChevronDown onClick={() => toggleView(menuIndex)} />
                  )}
                </div>
                <Link to="/learning">
                  {toggle[menuIndex] && (
                    <div className=" w-40 py-2 mt-2 rounded-lg shadow-xl absolute left-0 -bottom-32 bg-white">
                      {onemenu.submenu?.map((onesubmenu, subMenuIndex) => (
                        <div className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                          {onesubmenu.subtitle}
                        </div>
                      ))}
                    </div>
                  )}
                </Link>
              </button>
            </div>
          ))}
          <Link to="/currentoffiars">
            <div className="  justify-between  ml-6  flex flex-row  gap-[20px]  font-Poppins font-[400] ">
              Current Affairs
            </div>
          </Link>
        </div>

        <AiOutlineMenu
          className="laptop:hidden text-lg ml-auto mr-4 cursor-pointer"
          onClick={() => handleOpen()}
        />
        <div className=" w-20 tablet:w-80 ">
          <Link to="/login">
            <button className=" font-[500] w-16 laptop:w-[107px]  mr-10   font-Poppins text-[rgba(0,110,185,1)] ">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className=" text-white  h-[40px] font-[500]  w-20 tablet:w-[130px] font-Poppins  bg-[rgba(0,110,185,1)]">
              Register
            </button>
          </Link>
        </div>
        {showMenu && <SubjectMenu />}
      </div>
    </>
  );
};

export default Navbar;
