import React from 'react';
import UserNav from '../layout/UserNav';
import { Card, Typography } from '@material-tailwind/react';
import FooetRecently from '../layout/Foorerreseltly';
import Footer from '../layout/Footer';
import { AiFillFilePdf } from 'react-icons/ai';
import dummypdf from '../../Assets/dummy.pdf';
import { useQuery } from 'react-query';
import axiosInstance from '../../utils/axios';
import { isAllOf } from '@reduxjs/toolkit';
import CircularProgress from '@mui/material/CircularProgress';


const CurrentOffiars = () => {
  const HEAD = ['SN', 'Title', 'Date', 'Download'];

  function isEven(number) {
    return number % 2 === 0;
  }
  
  const API_URL = import.meta.env.VITE_API_URL;
  console.log(API_URL);

  const fetchAffairs = async () => {
    const response = await axiosInstance.get("/current-affairs")
    console.log(response.data.response);
    return await response?.data.response;
  }

  const { isLoading, data, isError, error } = useQuery('current-affairs', fetchAffairs )
  return (
    <>
      <UserNav />

      <div
        className="h-[150px] "
        style={{
          backgroundImage: `url(${'./images/header.jpg'})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="flex flex-col ml-4 tablet:ml-20  font-Poppins ">
          <p className=" font-[500]  text-3xl text-white  mt-10">
            All Current Affairs
          </p>
          <p className="mt-2 text-white	 font-[300] text-xl">
            Get updated with all current affairs
          </p>
        </div>
      </div>

      <div className="w-[90%] h-fit rounded-2xl mx-auto my-10 border ">
        <div className="hidden tablet:flex items-center justify-around w-full h-12 bg-[#006EB91C] px-4 py-2 rounded-t-2xl">
          <p className="text-[#006EB9] text-base font-medium leading-5 w-[5%] text-left">
            SN
          </p>
          <p className="text-[#006EB9] text-base font-medium leading-5 w-[60%] text-left">
            Title
          </p>
          <p className="hidden tablet:block text-[#006EB9] text-base font-medium leading-5 w-[20%] text-center">
            Date
          </p>
          <p className="hidden tablet:block text-[#006EB9] text-base font-medium leading-5 w-[20%] text-center">
            Download
          </p>
        </div>
        {isLoading &&
          <div className='flex w-full h-10 items-center justify-center px-3'>
            <CircularProgress size='1.5rem' color='primary'/>
            <p className='mx-10 text-center font-medium text-base'>Loading...</p>
          </div>}
        {isError && <div className='flex mx-10 w-full h-10 items-center justify-center font-medium text-base text-center text-red-600'>{error.message}</div>}
        {data?.map((onedata, index) => (
          <div
            className={
              !isEven(index+1)
                ? 'w-full h-fit bg-[#F9F9F9] border-t border-b'
                : 'w-full h-fit'
            }
          >
            <div className="flex flex-col tablet:flex-row w-full h-fit py-4 gap-2">
              <div className="w-full tablet:w-[65%] flex justify-around">
                <p className="w-[10%] text-center">{index+1}</p>
                <p className="w-[90%] px-2">{onedata.title}</p>
              </div>
              <div className="flex justify-around w-full tablet:w-[40%]">
                <p className="w-1/2 text-center">{onedata.publish_date}</p>
                <div className="w-1/2 flex items-center justify-center gap-1">
                  <AiFillFilePdf className="text-red-600 w-[16.5px] h-[21px] flex items-center" />
                  <a href={onedata.pdf}>
                    <p className="">Download PDF</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FooetRecently />
      <Footer />
    </>
  );
};

export default CurrentOffiars;
