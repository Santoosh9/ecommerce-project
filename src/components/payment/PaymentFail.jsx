import React, { useEffect } from 'react';
import UserNav from '../layout/UserNav';
import Footer from '../layout/Footer';

const PaymentFail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <UserNav />

      <div className="flex flex-col mt-16 mb-10 flex-nowrap justify-center items-center">
        <div className="flex flex-col justify-center items-center ">
          <div className=" rounded-full  text-lg bg-[rgba(250,227,223,1)] w-[120px] ">
            <img
              className=" align-middle mt-4 mb-4 ml-7 mr-6 h-[66.67px] w-[66.66px] "
              src="./images/fail.png"
            />
          </div>

          <p className="mt-7 font-[500] text-center  text-4xl ">
            Payment Failed!
          </p>
          <p className=" text-[rgba(44,39,36,0.75)] font-[400] text-center text-lg mt-4 ">
            Your payment has been successfully done.
          </p>
        </div>

        <div className=" flex flex-col bg-[rgba(249,249,249,1)] gap-10 mt-10 w-full tablet:w-[50%] ">
          <div className=" ml-6 mr-6">
            <div className="flex flex-row justify-between mt-6 ">
              <p className=" text-[rgba(44,39,36,0.75)] font-[400] text-xl ">
                Amount
              </p>
              <p className="font-[500] text-xl">Rs. 1,000</p>
            </div>
            <div className="flex flex-row items-center justify-between mt-6">
              <p
                className="
              text-[rgba(44,39,36,0.75)] font-[400] text-xl"
              >
                Payment Status
              </p>
              <div className="text-[rgba(254,45,15,1)] w-[100px] h-[36px] ">
                <p className="bg-[rgba(250,227,223,1)] rounded-xl   font-[500] text-xl  text-center mt-2 mb-2 ">
                  Failed
                </p>
              </div>
            </div>
            <hr className="ml-3 mr-4 border-1 mt-7 mb-7 w-full" />

            <div className="flex flex-row justify-between mt-6 ">
              <p className=" text-[rgba(44,39,36,0.75)] font-[400] text-xl">
                Ref Number
              </p>
              <p className="font-[500] text-xl">-</p>
            </div>
            <div className="flex flex-row justify-between mt-6">
              <p className=" text-[rgba(44,39,36,0.75)] font-[400] text-xl">
                Payment Method
              </p>
              <p className="font-[500] text-xl">-</p>
            </div>
            <div className="flex flex-row justify-between mt-6">
              <p className=" text-[rgba(44,39,36,0.75)] font-[400] text-xl">
                Payment Time
              </p>
              <p className="font-[500] text-xl">-</p>
            </div>

            <div className="flex flex-row justify-between mt-6">
              <p className=" text-[rgba(44,39,36,0.75)] font-[400] text-xl">
                Sender
              </p>
              <p className="font-[500] text-xl">Santoosh G</p>
            </div>
          </div>

          <div className="flex flex-col  mt-0 bg-white">
            <button className="mt-16 bg-[rgba(0,110,185,1)] text-[rgba(255,250,247,1)] border-2 justify-center items-center h-[52px] ">
              Try Again
            </button>
            <button className=" border-2 border-sky-400 justify-center items-center  mt-3 h-[52px] ">
              Cancel
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PaymentFail;
