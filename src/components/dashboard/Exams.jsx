import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowRight } from 'react-icons/fi';

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
      <p className=" text-[rgba(17,17,17,1)] font-Poppins text-2xl font-[500] ml-[120px] mt-5">
        Recommended Exams
      </p>

      <div className="ml-28 mt-5 flex flex-row flex-wrap gap-10 mb-10">
        {data.map((item) => (
          <Card className="mt-6 w-[282px] h-[120px] border  shadow-none bg-[rgba(255,255,255,1)]   hover:bg-[rgba(240,249,255,1)]">
            <div className="ml-4 mt-4">
              <CardBody key={item.id}>
                <Typography className=" font-Poppins font-[500] text-base ">
                  {item.title}
                </Typography>
                <Typography className="font-[400] text-[rgba(44,39,36,0.75)] text-xs">
                  {item.date}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Link to='/exam'>
                  <p className=" text-[rgba(0,110,185,1)]  font-Poppins  font-[400] text-sm flex flex-row mt-4">
                    {item.attempt} <FiArrowRight className="mt-[3px] ml-1" />
                  </p>
                </Link>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    
    </>
  );
};

export default Exams;
