import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../learning/Dropdown';
import { BsChevronDown } from 'react-icons/bs';
import { BsChevronUp } from 'react-icons/bs';
import { HiBell } from 'react-icons/hi';
import { GoDotFill } from 'react-icons/go';
import { AiOutlineMenu } from 'react-icons/ai';
import SubjectMenu from './SubjectMenu';
import { useSelector } from 'react-redux';
import Notifications from './Notifications';

const UserNav = () => {
  const [open, setOpen] = useState(false);

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [notification, setNotification] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [menuId, setMenuId] = useState(null);

  const toggleView = (id) => {
    console.log(id);
    setMenuId((prevId) => {
      if (prevId === id) return null;
      return id;
    });
    console.log(menuId);
  };

  const handleOpen = (index, id) => {
    console.log(index, id, 'clicked');
    if (index === 'subject') {
      toggleView(id);
      setNotification(false);
      setClicked(false);
    } else if (index === 'notification') {
      setMenuId(null);
      setNotification(!notification);
      setClicked(false);
      setShowMenu(false);
    } else if (index === 'user') {
      setMenuId(null);
      setNotification(false);
      setClicked(!clicked);
      setShowMenu(false);
    } else if (index === 'menu') {
      setMenuId(null);
      setOpen1(false);
      setOpen2(false);
      setNotification(false);
      setClicked(false);
      setShowMenu(!showMenu);
    }
  };

  const menu = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      setNotification(false);
      setClicked(false);
      setShowMenu(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const user = useSelector((state) => state.auth.user);
  let newName = '';

  if (user) {
    if (user.length < 10) {
      newName = user;
    } else {
      for (let i = 0; i <= user.length; i++) {
        if (user.charCodeAt(i) != 32) {
          newName = newName + user[i];
        } else {
          break;
        }
      }
    }
  }

  return (
    <>
      <div className="flex flex-row h-auto  w-full  border-[1.5px]  justify-around font-Poppins  items-center  ">
        <div className="ml-6 tablet:ml-16">
          <Link to="/">
            <img
              className="mt-2 mb-2   "
              src="./images/logo.png"
              alt="logo-img"
            />
          </Link>
        </div>
        <div className="hidden laptop:flex flex-row justify-around   gap-[20px]  font-Poppins font-[400]">
          {menu?.map((onemenu, menuIndex) => (
            <div
              onClick={() => handleOpen('subject', onemenu.id)}
              key={menuIndex}
            >
              <button className="flex flex-row relative items-center gap-1">
                <p>{onemenu.title}</p>
                <div>
                  {onemenu.id === menuId ? <BsChevronUp /> : <BsChevronDown />}
                </div>
                <Link to="/learning">
                  {/* {toggle[menuIndex] &&  */}
                  {onemenu.id === menuId && (
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
          className="flex justify-end laptop:hidden text-lg ml-auto mr-8 items-center cursor-pointer"
          onClick={() => handleOpen('menu')}
        />
        <div className="flex gap-4 items-center justify-end mr-2 tablet:mr-10 tablet:mt-2 laptop:w-80">
          <div
            className="flex w-10 h-10 p-2 gap-2.5 items-center bg-[#006EB91A] relative cursor-pointer"
            onClick={() => handleOpen('notification')}
          >
            <HiBell className="text-4xl text-[#006EB9]" />
            <GoDotFill className="text-[#EB5757] absolute top-1 left-4" />
          </div>
          <img
            className="flex items-center rounded-full w-10 laptop:mt-0 tablet:mt-2 cursor-pointer"
            src={
              user
                ? user.photourl
                  ? user.photourl
                  : './images/blankuser.png'
                : './images/blankuser.png'
            }
            onClick={() => handleOpen('user')}
          />
          <div
            className="hidden tablet:flex flex-row items-center font-Poppins font-[400] mt-2 gap-1 laptop:mt-0 z-10 cursor-pointer "
            onClick={() => handleOpen('user')}
          >
            {user ? user : <p>Santosh</p>}
            {clicked ? (
              <BsChevronUp className="text-lg" />
            ) : (
              <BsChevronDown className="text-lg" />
            )}
          </div>
        </div>
        {clicked && <Dropdown />}
        {notification && <Notifications />}
        {showMenu && <SubjectMenu />}
      </div>
    </>
  );
};

export default UserNav;
