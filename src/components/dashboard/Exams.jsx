import React from 'react';
import UserNav from '../layout/UserNav';
import FooetRecently from '../layout/Foorerreseltly';
import Footer from '../layout/Footer';
import { BsArrowRightShort } from 'react-icons/bs';

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

const Exams = () => {
  const data = [
    {
      id: 1,
      title: 'RBB 4th Level Full Course',
      date: '2nd Dec 2023',
      attempt: 'Attempt Now',
    },
    {
      id: 2,
      title: 'RBB 4th Level Full Course',
      date: ' Attempt on 2nd Dec 2023',
      attempt: 'Attempt Now',
    },
    {
      id: 3,
      title: 'RBB 4th Level Full Course',
      date: '2nd Dec 2023',
      attempt: 'Attempt Now',
    },
    {
      id: 4,
      title: 'RBB 4th Level Full Course',
      date: '2nd Dec 2023',
      attempt: 'Attempt Now',
    },
    {
      id: 5,
      title: 'RBB 4th Level Full Course',
      date: '2nd Dec 2023',
      attempt: 'Attempt Now',
    },
    {
      id: 6,
      title: 'RBB 4th Level Full Course',
      date: '2nd Dec 2023',
      attempt: 'Attempt Now',
    },
    {
      id: 7,
      title: 'RBB 4th Level Full Course',
      date: '2nd Dec 2023',
      attempt: 'Attempt Now',
    },
    {
      id: 8,
      title: 'RBB 4th Level Full Course',
      date: '2nd Dec 2023',
      attempt: 'Attempt Now',
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
      </div>

      <div className="ml-28 mt-5 flex flex-row flex-wrap gap-10">
        {data.map((item) => (
          <Card className="mt-6 w-[282px] h-[120px] ">
            <div className="ml-4 mt-4">
              <CardBody key={item.id}>
                <Typography className="text-bold "> {item.title}</Typography>
                <Typography>{item.date}</Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <p className=" text-sky-600 flex flex-row">
                  {item.attempt} <BsArrowRightShort className="mt-1.5 ml-1" />
                </p>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
      <FooetRecently />
      <Footer />
    </>
  );
};

export default Exams;
