import React from 'react';

const FooetRecently = () => {
  return (
    <div
      className=" h-fit  w-full  flex flex-col gap-10 "
      style={{
        backgroundImage: `url(${'./images/Banner2.png'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="mt-4 tablet:mt-16 ml-8 tablet:ml-32 ">
        <p className="  text-white font-Poppins font-[500]  text-2xl">
          Recently Viewed
        </p>
      </div>
      <div className=" flex flex-col  tablet:flex-row   text-white ml-8 tablet:ml-32  justify-start laptop:gap-[122px]">
        <div className="">
          <ul className=" font-[400] font-Poppins text-base">
            <p className=" font-[500]  font-Poppins  text-lg mt-2"> Support</p>
            <li className="mb-4 mt-3">
              <a href="#">Disclaimer Privacy</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Policy Legal & Copyright
              </a>
            </li>
            <li className="mb-4">
              <a href="#">Terms & Condition</a>
            </li>
            <li className="mb-4">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="font-[400] font-Poppins text-base">
            <p className=" font-[500]  font-Poppins  text-lg mt-2"> Courses</p>
            <li className="mb-4 mt-3">
              <a href="#" className="hover:underline">
                लोकसेवा (संघ र प्रदेश‌‍‍‌)
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                बैंकिङ तयारी
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                संस्थान तयारी कक्षा
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="font-[400] font-Poppins text-base">
            <p className=" font-[500]  font-Poppins  text-lg mt-2 "> Contact</p>
            <li className="mb-4  mt-3 ">
              <a href="#" className="hover:underline flex flex-row">
                98671000189
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline flex flex-row">
                9809800327
              </a>
            </li>

            <li className="mb-4">
              <a href="#" className="hover:underline flex flex-row ">
                9800098000
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooetRecently;
