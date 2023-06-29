import React from 'react';
import UserNav from '../layout/UserNav';
import FooetRecently from '../layout/Foorerreseltly';
import Footer from '../layout/Footer';

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
      <UserNav />

      <div className="flex flex-col mt-1">
        <div className="bg-blue-500 h-[150px] ">
          <div className="flex flex-col ml-32 mt-10">
            <p className=" font-bold  text-white">Dashbord</p>
            <p className="mt-2 text-white	">Welcome back!</p>
          </div>
        </div>

        <div className="w-[600px] ml-28 mt-2">
          <ul className=" flex  mt-5 font-link gap-12">
            <li className=" underline  text-sky-400">My Course</li>
            <li>Exams</li>
            <li>Forums</li>
          </ul>
        </div>

        <div className=" flex flex-col">
          <div className=" ml-28 mt-5">
            <p className=" text-lg text-bold">Enrolled Courses</p>
          </div>
          <div className="ml-28 mt-5 flex flex-row flex-wrap">
            {data1.map((item) => (
              <Card key={item.id} className="mt-6 w-[282px] h-[381px] ml-6">
                <CardHeader className="relative">
                  <img src={item.image} alt="img" />
                  <Button>{item.price}</Button>
                </CardHeader>
                <CardBody className=" ml-3">
                  <div className="flex flex-row gap-5 mt-0">
                    <p className="flex flex-row">
                      <BsFillClockFill className=" mt-1 mr-1" /> {item.hour}
                    </p>
                    <p className="flex flex-row">
                      <BsFillPlayCircleFill className=" mt-1 mr-1" />
                      {item.video}
                    </p>
                  </div>
                  <Typography className="mb-2 font-bold">
                    {item.title}
                  </Typography>
                  <Typography className="font-link text-sm">
                    {item.description}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0 ml-3">
                  <p className=" text-sky-700 ">{item.engroll}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className=" flex flex-col">
          <div className=" ml-28 mt-5">
            <p className=" text-lg text-bold">Recommended Courses</p>
          </div>
          <div className="ml-28 mt-5 flex flex-row flex-wrap">
            {data.map((item) => (
              <Card key={item.id} className="mt-6 w-[282px] h-[381px] ml-6">
                <CardHeader className="relative">
                  <img src={item.image} alt="img" />
                  <Button>{item.price}</Button>
                </CardHeader>
                <CardBody className=" ml-3">
                  <div className="flex flex-row gap-5 mt-0">
                    <p className="flex flex-row">
                      <BsFillClockFill className=" mt-1 mr-1" /> {item.hour}
                    </p>
                    <p className="flex flex-row">
                      <BsFillPlayCircleFill className=" mt-1 mr-1" />
                      {item.video}
                    </p>
                  </div>
                  <Typography className="mb-2 font-bold">
                    {item.title}
                  </Typography>
                  <Typography className="font-link text-sm">
                    {item.description}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0 ml-3">
                  <p className=" text-sky-600 flex flex-row">
                    {item.engroll} <BsArrowRightShort className="mt-1.5 ml-1" />
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <FooetRecently />

        <Footer />
      </div>
    </>
  );
};

export default Mycourse;
