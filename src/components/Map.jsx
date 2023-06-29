import React from 'react';

const Map = () => {
  return (
    <>
      <div className="flex flex-col w-[100%]">
        <div className="flex flex-col items-center">
          <p className="mt-4 text-blue-400">Features</p>

          <div className="  text-black font-link text-3xl mt-4  w-[600px]">
            Elevate your learning experience
          </div>

          <div className="mt-4 w-[630px]">
            <p className="">
              Break free & unlock your full potential with, convenient, and
              engaging online education.
            </p>
          </div>
        </div>
        <div className=" w-[100%]">
          <div className=" flex flex-row  flex-wrap  gap-10  ml-40 mb-6">
            <div className="flex flex-col mt-16 drop-shadow-md border border-sky-100 h-[200px] w-[200px]">
              <img
                className="w-[100px] h-[100px] ml-6 mt-2"
                src="./images/i2.png"
              />
              <p className="mt-4 text-lg  ml-6">20k hours of Videos</p>
            </div>
            <div className="flex flex-col mt-16 drop-shadow-md border border-sky-100 h-[200px] w-[200px]">
              <img
                className="w-[100px] h-[100px] ml-6 mt-2"
                src="./images/I1.png"
              />

              <p className="mt-4 text-lg ml-6 ">Daily live Classes</p>
            </div>
            <div className="flex flex-col mt-16 drop-shadow-md  border border-sky-100 h-[200px] w-[200px]">
              <img
                className="w-[100px] h-[100px] ml-6 mt-2"
                src="./images/i3.png"
              />
              <p className="mt-4 text-lg ml-6 ">6+ years of Experience</p>
            </div>
            <div className="flex flex-col mt-16 drop-shadow-md border border-sky-100 h-[200px] w-[200px] ">
              <img
                className="w-[100px] h-[100px] ml-6 mt-2"
                src="./images/i4.png "
              />
              <p className="mt-4 text-lg  ml-6">Free MCQ Exams</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[376px] ">
        <iframe
          className=" mt-4 mb-5 ml-5 "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.982049475205!2d85.31243571132151!3d27.686949676094994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193d0960b993%3A0x887686c1ced6cb56!2sIntopros%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1687934040855!5m2!1sen!2snp"
          width="93%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        ;
      </div>
    </>
  );
};

export default Map;
