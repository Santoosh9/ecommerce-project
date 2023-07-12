import React from 'react';

import { TbCircleCaretRight } from 'react-icons/tb';
import { CiClock2 } from 'react-icons/ci';

import { FiArrowRight } from 'react-icons/fi';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

import {
  BsFillClockFill,
  BsFillPlayCircleFill,
  BsArrowRightShort,
} from 'react-icons/bs';

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
      engroll: 'Engroll Now ',
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
      engroll: 'Engroll Now',
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
      engroll: 'Engroll Now',
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
      engroll: 'Engroll Now',
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
      engroll: 'Engroll Now ',
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
      engroll: 'Engroll Now',
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
      engroll: 'Engroll Now',
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
      engroll: 'Engroll Now',
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
      engroll: 'Engroll Now',
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
      engroll: 'Engroll Now',
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
      engroll: 'Engroll Now',
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
      engroll: 'Engroll Now',
      content: 'example content',
    },
  ];

  return (
    <>
      <div className=" flex flex-col">
        <div className=" ml-[140px] mt-1">
          <p className=" text-[rgba(17,17,17,1)] font-Poppins text-2xl font-[500]  mt-3">
            Enrolled Courses
          </p>
        </div>
        <div className="flex flex-row   w-[100%]  ">
          <div className=" flex flex-row flex-wrap  justify-center items-center  gap-10  ">
            {data.map((item) => (
              <Card
                key={item.id}
                className="mt-6 w-[282px] h-[381px]  border  shadow-none bg-[rgba(255,255,255,1)]"
              >
                <div
                  className="h-[177px] border bg-cover w-[282px] ml-0"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="h-[27px] w-[106px]  mt-[149px]  bg-[rgba(0,110,185,1)] font-Poppins text-white text-center ">
                    {item.price}
                  </div>
                </div>

                <CardBody className=" ml-3">
                  <div className="flex flex-row gap-5 mt-4 font-Poppins text-sm  font-light text-[rgba(44,39,36,0.75)] ">
                    <p className="flex flex-row">
                      <CiClock2 className=" mt-[3px] mr-2 " />
                      {item.hour}
                    </p>
                    <p className="flex flex-row ">
                      <TbCircleCaretRight className=" mt-[3px] mr-2" />
                      {item.video}
                    </p>
                  </div>
                  <Typography className="mb-2   font-[500] font-Poppins text-[rgba(17,17,17,1)]">
                    {item.title}
                  </Typography>
                  <Typography className=" text-sm font-Poppins text-[rgba(44,39,36,0.75)]">
                    {item.description}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0 ml-3">
                  <p className="flex flex-row font-Poppins mt-2 font-[20px] text-[rgba(0,110,185,1)]">
                    {item.engroll}
                    <FiArrowRight className="mt-1.5 ml-1" />
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className=" flex flex-col">
        <div className="  ml-[140px] mt-5">
          <p className="text-[rgba(17,17,17,1)] font-Poppins text-2xl font-[500]  mt-3">
            Recommended Courses
          </p>
        </div>

        <div className="flex flex-row  w-[100%]  justify-center items-center ">
          <div className=" flex flex-row flex-wrap   gap-10  ">
            {data1.map((item) => (
              <Card
                key={item.id}
                className="mt-6 w-[282px] h-[381px]  border  mb-20 shadow-none bg-[rgba(255,255,255,1)]"
              >
                <div
                  className="h-[177px] border bg-cover w-[282px] ml-0"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="h-[27px] w-[106px]  mt-[149px]  bg-[rgba(0,110,185,1)] font-Poppins text-white">
                    {item.price}
                  </div>
                </div>

                <CardBody className=" ml-3">
                  <div className="flex flex-row gap-5 mt-4 font-Poppins text-sm  font-light text-[rgba(44,39,36,0.75)] ">
                    <p className="flex flex-row">
                      <CiClock2 className=" mt-[3px] mr-2 " />
                      {item.hour}
                    </p>
                    <p className="flex flex-row ">
                      <TbCircleCaretRight className=" mt-[3px] mr-2" />
                      {item.video}
                    </p>
                  </div>
                  <Typography className="mb-2   font-[500] font-Poppins text-[rgba(17,17,17,1)]">
                    {item.title}
                  </Typography>
                  <Typography className=" text-sm font-Poppins text-[rgba(44,39,36,0.75)]">
                    {item.description}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0 ml-3">
                  <p className="flex flex-row font-Poppins mt-2 font-[20px] text-[rgba(0,110,185,1)]">
                    {item.engroll}
                    <FiArrowRight className="mt-1.5 ml-1" />
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mycourse;