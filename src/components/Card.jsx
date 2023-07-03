import React from 'react';
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
import Map from './Map';
import { Link } from 'react-router-dom';

const Cards = () => {
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
      <div className=" flex flex-col  mt-0 w-[100%]  ">
        <div className="flex flex-col w-[100%] ">
          <div className="flex flex-col items-center w-[100%]  ">
            <a className=" text-sky-600  font-Poppins ">Cutting-edge Courses</a>

            <div className="  text-black  text-3xl mt-4  w-[600px] font-Poppins">
              Find a course that fits your need
            </div>

            <div className="mt-4 w-[600px] font-Poppins">
              <p>
                We offer a diverse range of courses, covering a range of
                subjects and disciplines
              </p>
            </div>

            <div className="w-[600px]">
              <ul className=" flex justify-between mt-5 ">
                <Link to={'/mostpopular'}>
                  <li className=" underline  text-sky-400">Most Popular</li>
                </Link>
                <Link to={'/newcourse'}>
                  <li>New Course</li>
                </Link>
                <Link to={'/loksewa'}>
                  <li>Lok Sewa</li>
                </Link>
                <Link to={'banking'}>
                  <li>Banking</li>
                </Link>

                <Link to={'other'}>
                  <li>Other</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="flex flex-row   w-[100%] ">
            <div className=" ml-32 flex flex-row flex-wrap ">
              {data.map((item) => (
                <Card key={item.id} className="mt-6 w-[282px] h-[381px] ml-6">
                  <CardHeader
                    className="relative h-[177px] border bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <Button className="h-[30px] w-[106px]   mt-[147px]  bg-blue-600 font-Poppins">
                      {item.price}
                    </Button>
                  </CardHeader>
                  <CardBody className=" ml-3">
                    <div className="flex flex-row gap-5 mt-0 font-Poppins  font-light">
                      <p className="flex flex-row">
                        <BsFillClockFill className=" mt-1 mr-1" /> {item.hour}
                      </p>
                      <p className="flex flex-row">
                        <BsFillPlayCircleFill className=" mt-1 mr-1" />
                        {item.video}
                      </p>
                    </div>
                    <Typography className="mb-2 font-bold font-Poppins">
                      {item.title}
                    </Typography>
                    <Typography className=" text-sm font-Poppins">
                      {item.description}
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0 ml-3">
                    <p className=" text-sky-600 flex flex-row font-Poppins">
                      {item.engroll}
                      <BsArrowRightShort className="mt-1.5 ml-1" />
                    </p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex flex-col mt-2 w-[100%] ">
            <p className="flex flex-col items-center mt-4 text-sky-500 font-Poppins">
              Explore all courses
            </p>
          </div>
        </div>
      </div>

      <Map />
    </>
  );
};

export default Cards;
