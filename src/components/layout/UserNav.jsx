import React from 'react';
import { Link } from 'react-router-dom';

const UserNav = () => {
  return (
    <nav className="w-[100%] h-[96px]   bg-white-300  flex justify-between">
      <div className=" mt-4 pt-0 ">
        <img
          className=" h-[80%]  pl-32 "
          src="./images/logo.png"
          alt="logo-img"
        />
      </div>
      <div className=" ">
        <ul className="flex flex-row justify-around   gap-[20px]  font-Poppins font-[400] mt-10">
          <li className="mr-7 flex justify-between ">
            लोकसेवा (संघ र प्रदेश‌‍‍‌)
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
          </li>
          <li className="mr-7 flex justify-between ">
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
          </li>
          <li className="mr-7 flex justify-between font-link">
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
          </li>

          <Link to="/currentoffiars">
            <li className="  justify-between">Current Affairs</li>
          </Link>
        </ul>
      </div>
      <div className="flex justify-between mr-32 gap-6 font-Poppins font-[400]">
        <img
          className=" w-[50%] h-[50%]  mt-6"
          src="./images/Notification.png"
        />
        <img
          className="rounded-full w-[50%] h-[50%] mt-6"
          src="./images/me.jpg"
        />
        <p className="flex flex-row mt-8 font-Poppins">
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
    </nav>
  );
};

export default UserNav;
