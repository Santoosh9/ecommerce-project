import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserNav = () => {
  const [open, setOpen] = useState(false);

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <div className="flex flex-row h-auto  w-[100%]  border-[1.5px]  justify-around font-Poppins  items-center  ">
        <div className=" ml-16">
          <img
            className="mt-2 mb-2   "
            src="./images/logo.png"
            alt="logo-img"
          />
        </div>
        <div className="">
          <div
            className="flex flex-row justify-around   gap-[20px]  w-full font-Poppins font-[400] ml-16 laptop:mt-2 text-sm  tablet:mt-3   "
            onMouseLeave={() => {
              setOpen(false);
              setOpen1(false);
              setOpen2(false);
            }}
          >
            <button
              className="flex flex-row relative"
              onMouseOver={() => setOpen(true)}
            >
              लोकसेवा (संघ र प्रदेश‌‍‍‌)
              <svg
                className="mt-2 ml-2"
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.10202 7.7773L14.809 1.0793C14.8741 1.01385 14.9517 0.962126 15.0372 0.927202C15.1226 0.892278 15.2142 0.874859 15.3066 0.875978C15.3989 0.877097 15.49 0.896731 15.5746 0.933716C15.6592 0.970702 15.7355 1.02429 15.799 1.0913C15.9291 1.22836 16.0007 1.41076 15.9984 1.59973C15.9962 1.78871 15.9203 1.96936 15.787 2.1033L8.58402 9.2963C8.51939 9.36137 8.44244 9.4129 8.35766 9.44789C8.27288 9.48287 8.18198 9.5006 8.09027 9.50004C7.99855 9.49948 7.90787 9.48064 7.82353 9.44463C7.73918 9.40862 7.66286 9.35615 7.59902 9.2903L0.204024 1.7193C0.0731467 1.58376 0 1.40271 0 1.2143C0 1.02589 0.0731467 0.844834 0.204024 0.709298C0.268336 0.643073 0.345284 0.590426 0.430309 0.554475C0.515335 0.518524 0.60671 0.5 0.699024 0.5C0.791338 0.5 0.882713 0.518524 0.967739 0.554475C1.05276 0.590426 1.12971 0.643073 1.19402 0.709298L8.10202 7.7773Z"
                  fill="black"
                />
              </svg>
              <ul
                className={` w-40 py-2 mt-2 rounded-lg shadow-xl absolute left-0 -bottom-32 bg-white ${
                  open ? 'block' : 'hidden'
                }`}
              >
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                  Dropdown List 1
                </li>
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                  Dropdown List 2
                </li>
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                  Dropdown List 3
                </li>
              </ul>
            </button>

            <button
              className="flex flex-row relative"
              onMouseOver={() => setOpen1(true)}
            >
              बैंकिङ तयारी
              <svg
                className="mt-2 ml-2"
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.10202 7.7773L14.809 1.0793C14.8741 1.01385 14.9517 0.962126 15.0372 0.927202C15.1226 0.892278 15.2142 0.874859 15.3066 0.875978C15.3989 0.877097 15.49 0.896731 15.5746 0.933716C15.6592 0.970702 15.7355 1.02429 15.799 1.0913C15.9291 1.22836 16.0007 1.41076 15.9984 1.59973C15.9962 1.78871 15.9203 1.96936 15.787 2.1033L8.58402 9.2963C8.51939 9.36137 8.44244 9.4129 8.35766 9.44789C8.27288 9.48287 8.18198 9.5006 8.09027 9.50004C7.99855 9.49948 7.90787 9.48064 7.82353 9.44463C7.73918 9.40862 7.66286 9.35615 7.59902 9.2903L0.204024 1.7193C0.0731467 1.58376 0 1.40271 0 1.2143C0 1.02589 0.0731467 0.844834 0.204024 0.709298C0.268336 0.643073 0.345284 0.590426 0.430309 0.554475C0.515335 0.518524 0.60671 0.5 0.699024 0.5C0.791338 0.5 0.882713 0.518524 0.967739 0.554475C1.05276 0.590426 1.12971 0.643073 1.19402 0.709298L8.10202 7.7773Z"
                  fill="black"
                />
              </svg>
              <ul
                className={` w-40 py-2 mt-2 rounded-lg shadow-xl absolute left-0 -bottom-32 bg-white ${
                  open1 ? 'block' : 'hidden'
                }`}
              >
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                  Dropdown List 1
                </li>
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                  Dropdown List 2
                </li>
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                  Dropdown List 3
                </li>
              </ul>
            </button>
            <button
              className="flex flex-row relative"
              onMouseOver={() => setOpen2(true)}
            >
              संस्थान तयारी कक्षा
              <svg
                className="mt-2 ml-2"
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.10202 7.7773L14.809 1.0793C14.8741 1.01385 14.9517 0.962126 15.0372 0.927202C15.1226 0.892278 15.2142 0.874859 15.3066 0.875978C15.3989 0.877097 15.49 0.896731 15.5746 0.933716C15.6592 0.970702 15.7355 1.02429 15.799 1.0913C15.9291 1.22836 16.0007 1.41076 15.9984 1.59973C15.9962 1.78871 15.9203 1.96936 15.787 2.1033L8.58402 9.2963C8.51939 9.36137 8.44244 9.4129 8.35766 9.44789C8.27288 9.48287 8.18198 9.5006 8.09027 9.50004C7.99855 9.49948 7.90787 9.48064 7.82353 9.44463C7.73918 9.40862 7.66286 9.35615 7.59902 9.2903L0.204024 1.7193C0.0731467 1.58376 0 1.40271 0 1.2143C0 1.02589 0.0731467 0.844834 0.204024 0.709298C0.268336 0.643073 0.345284 0.590426 0.430309 0.554475C0.515335 0.518524 0.60671 0.5 0.699024 0.5C0.791338 0.5 0.882713 0.518524 0.967739 0.554475C1.05276 0.590426 1.12971 0.643073 1.19402 0.709298L8.10202 7.7773Z"
                  fill="black"
                />
              </svg>
              <ul
                className={` w-40 py-2 mt-2 rounded-lg shadow-xl absolute left-0 -bottom-32 bg-white ml-16  ${
                  open2 ? 'block' : 'hidden'
                }`}
              >
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                  Dropdown List 1
                </li>
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                  Dropdown List 2
                </li>
                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                  Dropdown List 3
                </li>
              </ul>
            </button>

            <Link to="/currentoffiars">
              <div className="  justify-between  ml-6  flex flex-row    gap-[20px]  font-Poppins font-[400] ">
                Current Affairs
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-4 justify-end mr-10  tablet:mt-2">
          <div>
            <img
              className=" w-[100%] h-[80%]  overflow-hidden mt-2 "
              src="./images/Notification.png"
            />
          </div>
          <img
            className="rounded-full w-[7%]  h-[10%] overflow-hidden tablet:mt-2	 "
            src="./images/me.jpg"
          />

          <p className="flex flex-row font-Poppins font-[400] mt-2 gap-1">
            Santosh
            <svg
              className="mt-2 ml-2 "
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.10202 7.7773L14.809 1.0793C14.8741 1.01385 14.9517 0.962126 15.0372 0.927202C15.1226 0.892278 15.2142 0.874859 15.3066 0.875978C15.3989 0.877097 15.49 0.896731 15.5746 0.933716C15.6592 0.970702 15.7355 1.02429 15.799 1.0913C15.9291 1.22836 16.0007 1.41076 15.9984 1.59973C15.9962 1.78871 15.9203 1.96936 15.787 2.1033L8.58402 9.2963C8.51939 9.36137 8.44244 9.4129 8.35766 9.44789C8.27288 9.48287 8.18198 9.5006 8.09027 9.50004C7.99855 9.49948 7.90787 9.48064 7.82353 9.44463C7.73918 9.40862 7.66286 9.35615 7.59902 9.2903L0.204024 1.7193C0.0731467 1.58376 0 1.40271 0 1.2143C0 1.02589 0.0731467 0.844834 0.204024 0.709298C0.268336 0.643073 0.345284 0.590426 0.430309 0.554475C0.515335 0.518524 0.60671 0.5 0.699024 0.5C0.791338 0.5 0.882713 0.518524 0.967739 0.554475C1.05276 0.590426 1.12971 0.643073 1.19402 0.709298L8.10202 7.7773Z"
                fill="black"
              />
            </svg>
          </p>
        </div>
      </div>
    </>
  );
};

export default UserNav;
