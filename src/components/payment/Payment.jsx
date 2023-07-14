import React from 'react';
import UserNav from '../layout/UserNav';
import Footer from '../layout/Footer';

const Payment = () => {
  const images = [
    { id: 1, image: './images/esewa.png' },
    { id: 2, image: './images/khalti.png' },
    { id: 3, image: './images/fonepay.png' },
    { id: 4, image: './images/cips.png' },
  ];
  return (
    <>
      <UserNav />
      <div className=" flex flex-col justify-center items-center mb-16">
        <div className="flex flex-col">
          <div className="flex flex-col gap-10 items-center">
            <p className=" font-[500] text-[rgba(17,17,17,1)] text-4xl mt-12">
              Payment
            </p>
            <p className="text-[rgba(17,17,17,1)] font-[500] text-2xl">
              Purchase Summary
            </p>
          </div>

          <div className="bg-[rgba(249,249,249,1)] flex flex-col mt-6">
            <div className="  flex flex-row justify-between gap-16 mt-7 mb-8 mr-16 ml-16 ">
              <p className=" text-[rgba(44,39,36,0.75)]  font-[400] text-xl w-[349px]">
                Rastriya Banijya Bank (RBB) 4th Level Full Course
              </p>
              <p className=" font-[500] text-xl">Rs. 1,000</p>
            </div>
            <hr className="ml-3 mr-4   border-1" />

            <div className=" mt-5 mb-8 mr-16 ml-10 flex flex-row justify-between  text-[rgba(0,110,185,1)] font-[500] text-2xl">
              <p>Total</p>
              <p>RS. 1,000</p>
            </div>
          </div>

          <div className="flex flex-col mt-10">
            <p className=" text-black justify-center  text-center font-[500] text-2xl mb-10 ">
              Play With
            </p>

            <div className="grid grid-cols-2 gap-3  mb-12">
              {images.map((img) => (
                <div className=" h-[159px] bg-[rgba(255,255,255,1)] w-[312px]  hover:border-2 border-blue-500  border hover:bg-[rgba(240,249,255,1)] ">
                  <img className="mt-12 ml-20" src={img.image} />
                </div>
              ))}
            </div>

            <button className="bg-[rgba(0,110,185,1)] text-[rgba(255,250,247,1)] border-2 justify-center items-center w-full h-[52px]">
              <p className=" mt-2 mb-2">Pay Now</p>
            </button>
            <button className=" border-2 border-sky-400 justify-center items-center w-full mt-3 h-[52px]">
              <p className="mt-2 mb-2">Cancel</p>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Payment;
