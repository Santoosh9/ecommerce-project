import React from 'react';
import { TbCircleCaretRight } from 'react-icons/tb';
import { CiClock2 } from 'react-icons/ci';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Mycourse = () => {
  const data1 = [
    {
      id: 1,
      image: './images/01.png',
      price: 'RS. 4500/-',
      hour: '12 Hours',
      video: '18 Videos',
      title: 'RBB 4th Level Full Course',
      description:
        'Access a vast array of courses, by a very interactive lessons, and expert also by giving a full course',
      engroll: 'Enroll Now ',
      content: 'example content',
    },
    {
      id: 2,
      image: './images/02.png',
      price: 'RS. 4500/-',
      hour: '12 Hours',
      video: '18 Videos',
      title: 'RBB 4th Level Full Course',
      description:
        'Access a vast array of courses, by a very interactive lessons, and expert also by giving a full course',
      engroll: 'Enroll Now',
      content: 'example content',
    },
    {
      id: 3,
      image: './images/03.png',
      price: 'RS. 4500/-',
      hour: '12 Hours',
      video: '18 Videos',
      title: 'RBB 4th Level Full Course',
      description:
        'Access a vast array of courses, by a very interactive lessons, and expert also by giving a full course',
      engroll: 'Enroll Now',
      content: 'example content',
    },

    {
      id: 4,
      image: './images/03.png',
      price: 'RS. 4500/-',
      hour: '12 Hours',
      video: '18 Videos',
      title: 'RBB 4th Level Full Course',
      description:
        'Access a vast array of courses, by a very interactive lessons, and expert also by giving a full course',
      engroll: 'Enroll Now',
      content: 'example content',
    },
  ];

  const data = [
    {
      id: 1,
      image: './images/01.png',
      price: 'RS. 4500/-',
      hour: '12 Hours',
      video: '18 Videos',
      title: 'RBB 4th Level Full Course',
      description:
        'Access a vast array of courses, by a very interactive lessons, and expert also by giving a full course',
      engroll: 'Enroll Now',
      content: 'example content',
    },
    {
      id: 2,
      image: './images/02.png',
      price: 'RS. 4500/-',
      hour: '12 Hours',
      video: '18 Videos',
      title: 'RBB 4th Level Full Course',
      description:
        'Access a vast array of courses, by a very interactive lessons, and expert also by giving a full course',
      engroll: 'Enroll Now',
      content: 'example content',
    },
    {
      id: 3,
      image: './images/03.png',
      price: 'RS. 4500/-',
      hour: '12 Hours',
      video: '18 Videos',
      title: 'RBB 4th Level Full Course',
      description:
        'Access a vast array of courses, by a very interactive lessons, and expert also by giving a full course',
      engroll: 'Enroll Now',
      content: 'example content',
    },

    {
      id: 4,
      image: './images/03.png',
      price: 'RS. 4500/-',
      hour: '12 Hours',
      video: '18 Videos',
      title: 'RBB 4th Level Full Course',
      description:
        'Access a vast array of courses, by a very interactive lessons, and expert also by giving a full course',
      engroll: 'Enroll Now',
      content: 'example content',
    },
    {
      id: 5,
      image: './images/03.png',
      price: 'RS. 4500/-',
      hour: '12 Hours',
      video: '18 Videos',
      title: 'RBB 4th Level Full Course',
      description:
        'Access a vast array of courses, by a very interactive lessons, and expert also by giving a full course',
      engroll: 'Enroll Now',
      content: 'example content',
    },
    {
      id: 6,
      image: './images/03.png',
      price: 'RS. 4500/-',
      hour: '12 Hours',
      video: '18 Videos',
      title: 'RBB 4th Level Full Course',
      description:
        'Access a vast array of courses, by a very interactive lessons, and expert also by giving a full course',
      engroll: 'Enroll Now',
      content: 'example content',
    },
    {
      id: 7,
      image: './images/03.png',
      price: 'RS. 4500/-',
      hour: '12 Hours',
      video: '18 Videos',
      title: 'RBB 4th Level Full Course',
      description:
        'Access a vast array of courses, by a very interactive lessons, and expert also by giving a full course',
      engroll: 'Enroll Now',
      content: 'example content',
    },
    {
      id: 8,
      image: './images/03.png',
      price: 'RS. 4500/-',
      hour: '12 Hours',
      video: '18 Videos',
      title: 'RBB 4th Level Full Course',
      description:
        'Access a vast array of courses, by a very interactive lessons, and expert also by giving a full course',
      engroll: 'Enroll Now',
      content: 'example content',
    },
  ];

  return (
    <>
      <div className=" flex flex-col">
        <div className="ml-5 tablet:ml-[140px] mt-1">
          <p className=" text-[rgba(17,17,17,1)] font-Poppins text-2xl font-[500]  mt-3">
            Enrolled Courses
          </p>
        </div>
        <div className="flex flex-row w-full ">
          <div className=" flex flex-row flex-wrap  justify-center items-center gap-10  ">
            {data.map((item) => (
              <div
                key={item.id}
                className="mt-6 w-[282px] h-[381px]  border rounded-md  shadow-none bg-[rgba(255,255,255,1)]"
              >
                <div
                  className="h-[177px] border bg-cover w-[282px] ml-0 relative rounded-md"
                  style={{ backgroundImage: `url(${item.image})` }}
                >

                  <div className="h-[27px] w-[106px] bg-[rgba(0,110,185,1)] font-Poppins text-white text-center absolute left-0 bottom-0">
                    {item.price}
                  </div>
                </div>

                <div className="flex flex-col p-3 gap-2">
                  <div className="flex flex-row gap-5 font-Poppins text-sm  font-light text-[rgba(44,39,36,0.75)] ">
                    <p className="flex flex-row items-center justify-start gap-2">
                      <CiClock2 />
                      {item.hour}
                    </p>
                    <p className="flex flex-row items-center justify-start gap-2 ">
                      <TbCircleCaretRight />
                      {item.video}
                    </p>
                  </div>
                  <div className="font-[500] font-Poppins text-[rgba(17,17,17,1)]">
                    {item.title}
                  </div>
                  <div className=" text-sm font-Poppins text-[rgba(44,39,36,0.75)]">
                    {item.description}
                  </div>
                </div>
                <div className="flex p-3">
                  <Link to='/learning'>
                    <p className="flex flex-row items-center gap-1 font-Poppins font-[20px] text-[rgba(0,110,185,1)]">
                      {item.engroll}
                      <FiArrowRight />
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" flex flex-col">
        <div className=" ml-5 tablet:ml-[140px] mt-5">
          <p className="text-[rgba(17,17,17,1)] font-Poppins text-2xl font-[500]  mt-3">
            Recommended Courses
          </p>
        </div>

        <div className="flex flex-row w-full  justify-center items-center ">
          <div className=" flex flex-row flex-wrap gap-10 ml-5 justify-center ">
            {data1.map((item) => (
              <div
                key={item.id}
                className="mt-6 w-[282px] h-fit  border-1  mb-20 shadow-none bg-[rgba(255,255,255,1)] rounded-md"
              >
                <div
                  className="h-[177px] border bg-cover w-[282px] ml-0 relative"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="flex h-[27px] w-[106px] bg-[rgba(0,110,185,1)] font-Poppins text-white absolute left-0 bottom-0 items-center px-2">
                    {item.price}
                  </div>
                </div>

                <div className='flex flex-col gap-3 p-3'>
                  <div className="flex flex-row gap-4 font-Poppins text-sm  font-light text-[rgba(44,39,36,0.75)] ">
                    <p className="flex flex-row items-center gap-2">
                      <CiClock2 />
                      {item.hour}
                    </p>
                    <p className="flex flex-row items-center gap-2">
                      <TbCircleCaretRight />
                      {item.video}
                    </p>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className="font-[500] font-Poppins text-[rgba(17,17,17,1)]">
                      {item.title}
                    </div>
                    <div className=" text-sm font-Poppins text-[rgba(44,39,36,0.75)]">
                      {item.description}
                    </div>
                  </div>
                </div>
                <div className='p-3'>
                  <Link to="/learning">
                    <p className="flex items-center gap-1 font-Poppins font-[20px] text-[rgba(0,110,185,1)]">
                      {item.engroll}
                      <FiArrowRight />
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mycourse;
