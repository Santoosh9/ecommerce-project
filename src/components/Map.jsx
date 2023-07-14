import React from 'react';

const Map = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <p className="mt-4 text-[rgba(0,110,185,1)]   font-[500] text-lg  font-Poppins">
          Features
        </p>

        <div className="  text-black  text-3xl mt-4  w-full text-center font-Poppins">
          Elevate your learning experience
        </div>

        <div className="mt-4 w-full text-center mb-10">
          <p className="font-Poppins  w-full inline-block text-base  ">
            Break free & unlock your full potential with, convenient, and online
            education.
          </p>
        </div>
      </div>
      <div className=" w-full">
        <div className=" flex flex-row  flex-wrap  items-center justify-center gap-10 mb-8 ">
          <div className="flex flex-col  border border-sky-100  justify-center items-center  h-[238px] w-[282px] relative  group">
            <span className="absolute w-full h-[3px] top-0 inset-x-0 bg-[#ff6250] hidden group-hover:block"></span>
            <img className="w-[63px] h-[63px]" src="./images/i2.png" />
            <p className=" card-img ">20k hours of Videos</p>
          </div>
          <div className="flex flex-col  border border-sky-100  justify-center items-center  h-[238px] w-[282px] relative  group">
            <span className="absolute w-full h-[3px] top-0 inset-x-0 bg-[#ff6250] hidden group-hover:block"></span>
            <img className="w-[63px] h-[63px]" src="./images/I1.png" />

            <p className=" card-img">Daily live Classes</p>
          </div>
          <div className="flex flex-col  border border-sky-100  justify-center items-center  h-[238px] w-[282px] relative  group">
            <span className="absolute w-full h-[3px] top-0 inset-x-0 bg-[#ff6250] hidden group-hover:block"></span>
            <img className="w-[63px] h-[63px] " src="./images/i3.png" />
            <p className=" card-img">6+years of Experience</p>
          </div>
          <div className="flex flex-col  border border-sky-100  justify-center items-center  h-[238px] w-[282px] relative  group">
            <span className="absolute w-full h-[3px] top-0 inset-x-0 bg-[#ff6250] hidden group-hover:block"></span>
            <img className="w-[63px] h-[63px] " src="./images/i4.png " />
            <p className="card-img">Free MCQ Exams</p>
          </div>
        </div>
      </div>

      <div className="w-[100%]">
        <iframe
          className=" mt-4 "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.982049475205!2d85.31243571132151!3d27.686949676094994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193d0960b993%3A0x887686c1ced6cb56!2sIntopros%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1687934040855!5m2!1sen!2snp"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
