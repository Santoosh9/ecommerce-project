import React from 'react';

const FooetRecently = () => {
  return (
    // <div className="bg-blue-500 h-[418px]  w-[100%] ">
    //   <div className="flex flex-col ml-28 mt-28">
    //     <p className="  text-white text-lg">Recently Viewed</p>
    //   </div>
    //   <div className=" flex flex-row  mt-8 text-white">
    //     <div className="ml-28">
    //       <ul className="font-link">
    //         <p className=" font-bold mt-2"> Support</p>
    //         <li class="mb-4 mt-3">
    //           <a href="#">Disclaimer Privacy</a>
    //         </li>
    //         <li class="mb-4">
    //           <a href="#" class="hover:underline">
    //             Policy Legal & Copyright
    //           </a>
    //         </li>
    //         <li class="mb-4">
    //           <a href="#">Terms & Condition</a>
    //         </li>
    //         <li class="mb-4">
    //           <a href="#">Contact Us</a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="ml-28">
    //       <ul class="font-link">
    //         <p className=" font-bold mt-2"> Courses</p>
    //         <li class="mb-4 mt-3">
    //           <a href="#" class="hover:underline">
    //             लोकसेवा (संघ र प्रदेश‌‍‍‌)
    //           </a>
    //         </li>
    //         <li class="mb-4">
    //           <a href="#" class="hover:underline">
    //             बैंकिङ तयारी
    //           </a>
    //         </li>
    //         <li class="mb-4">
    //           <a href="#" class="hover:underline">
    //             संस्थान तयारी कक्षा
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="ml-28">
    //       <ul class="font-link">
    //         <p className=" font-bold mt-2 "> Contact</p>
    //         <li class="mb-4  mt-3 ">
    //           <a href="#" className="hover:underline flex flex-row">
    //             98671000189
    //           </a>
    //         </li>
    //         <li class="mb-4">
    //           <a href="#" className="hover:underline flex flex-row">
    //             9809800327
    //           </a>
    //         </li>

    //         <li class="mb-4">
    //           <a href="#" className="hover:underline flex flex-row ">
    //             9800098000
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>

    <div className="flex flex-col bg-[#006EB9] h-[418px]  w-full mt-10 ">
      <div className='flex flex-col justify-start w-[750px] h-56 mt-24 ml-28 gap-12'>
        <p className='w-fit h-9 font-medium text-2xl leading-9 text-white'>Recently Viewed</p>
        <div className='flex w-full items-center justify-between gap-28'>
          <div className='flex flex-col w-fit h-full gap-6'>
            <p className='w-fit h-6 font-medium text-xl leading-6 text-white'>
            बैंकिङ तयारी
            </p>
            <ul>
              <li className='w-full h-6 font-normal text-base leading-6 text-white'>लोकसेवा (संघ र प्रदेश‌‍‍‌)</li>
              <li className='w-fit h-6 font-normal text-base leading-6 text-white'>बैंकिङ तयारी</li>
              <li className='w-fit h-6 font-normal text-base leading-6 text-white'>संस्थान तयारी कक्षा</li>
            </ul>
          </div>
          <div className='flex flex-col w-fit h-full gap-6'>
            <p className='w-fit h-6 font-medium text-xl leading-6 text-white'>
            लोकसेवा (संघ र प्रदेश‌‍‍‌)
            </p>
            <ul>
              <li className='w-fit h-6 font-normal text-base leading-6 text-white'>लोकसेवा (संघ र प्रदेश‌‍‍‌)</li>
              <li className='w-fit h-6 font-normal text-base leading-6 text-white'>बैंकिङ तयारी</li>
              <li className='w-fit h-6 font-normal text-base leading-6 text-white'>संस्थान तयारी कक्षा</li>
            </ul>
          </div>
          <div className='flex flex-col w-fit h-full gap-6'>
            <p className='w-fit h-6 font-medium text-xl leading-6 text-white'>
            बैंकिङ तयारी
            </p>
            <ul>
              <li className='w-fit h-6 font-normal text-base leading-6 text-white'>लोकसेवा (संघ र प्रदेश‌‍‍‌)</li>
              <li className='w-fit h-6 font-normal text-base leading-6 text-white'>बैंकिङ तयारी</li>
              <li className='w-fit h-6 font-normal text-base leading-6 text-white'>संस्थान तयारी कक्षा</li>
            </ul>
          </div>
        </div>
      </div>
    {/* <div className="flex flex-col ml-28 mt-28">
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
    </div> */}
    </div>
  );
};

export default FooetRecently;
