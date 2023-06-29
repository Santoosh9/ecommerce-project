import React from 'react';

const FooetRecently = () => {
  return (
    <div className="bg-blue-500 h-[418px]  w-[100%] ">
      <div className="flex flex-col ml-28 mt-28">
        <p className="  text-white text-lg">Recently Viewed</p>
      </div>
      <div className=" flex flex-row  mt-8 text-white">
        <div className="ml-28">
          <ul className="font-link">
            <p className=" font-bold mt-2"> Support</p>
            <li class="mb-4 mt-3">
              <a href="#">Disclaimer Privacy</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Policy Legal & Copyright
              </a>
            </li>
            <li class="mb-4">
              <a href="#">Terms & Condition</a>
            </li>
            <li class="mb-4">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="ml-28">
          <ul class="font-link">
            <p className=" font-bold mt-2"> Courses</p>
            <li class="mb-4 mt-3">
              <a href="#" class="hover:underline">
                लोकसेवा (संघ र प्रदेश‌‍‍‌)
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                बैंकिङ तयारी
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                संस्थान तयारी कक्षा
              </a>
            </li>
          </ul>
        </div>
        <div className="ml-28">
          <ul class="font-link">
            <p className=" font-bold mt-2 "> Contact</p>
            <li class="mb-4  mt-3 ">
              <a href="#" className="hover:underline flex flex-row">
                98671000189
              </a>
            </li>
            <li class="mb-4">
              <a href="#" className="hover:underline flex flex-row">
                9809800327
              </a>
            </li>

            <li class="mb-4">
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
