import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import { useState } from 'react';
import { Fragment } from 'react';

import {
  BsFillClockFill,
  BsFillPlayCircleFill,
  BsArrowRightShort,
} from 'react-icons/bs';
import { FiArrowRight } from 'react-icons/fi';
import Map from '../components/Map';
import { NavLink } from 'react-router-dom';

import { Tab } from '@headlessui/react';
import Card1 from './Card1';
import Card2 from './Card2';

const Cards = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tabData = [
    {
      title: 'Most Popular',
      component: (
        <>
          <Card1 />
        </>
      ),
    },
    {
      title: 'New Course',
      component: (
        <>
          <Card2 />
        </>
      ),
    },
    {
      title: 'Lok Sewa',
      component: <>Lok Sewa</>,
    },
    {
      title: 'Banking',
      component: <>Banking</>,
    },
    {
      title: 'Other',
      component: <>Other</>,
    },
  ];

  return (
    <>
      <div className=" flex flex-col  mt-0 w-[100%]  ">
        <div className="flex flex-col w-[100%] ">
          <div className="flex flex-col items-center w-[100%]  ">
            <a className=" text-[rgba(0,110,185,1)]  font-Poppins  text-lg font-[500]  mt-16">
              Cutting-edge Courses
            </a>

            <p className="text-[rgba(17,17,17,1)] font-Poppins  text-4xl font-[400] mt-6 ">
              Find a course that fits your need
            </p>

            <p className=" font-[16px]  font-Poppins mt-6">
              We offer a diverse range of courses, covering a range of subjects
              and disciplines
            </p>

            <Tab.Group
              defaultIndex={1}
              selectedIndex={selectedIndex}
              onChange={setSelectedIndex}
            >
              <Tab.List className=" font-Poppins font-[16px] flex justify-between mt-10 text-base">
                {tabData.map((t, i) => (
                  <Tab as={Fragment} key={i + 1}>
                    {({ selected }) => (
                      <button
                        className={`px-4 py-2 bg-white cursor-pointer focus:outline-none ${
                          selected
                            ? 'text-[#006EB9] border-b-2 border-b-[#006EB9]'
                            : ' text-gray-500'
                        } `}
                      >
                        {t?.title}
                      </button>
                    )}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels>
                {tabData.map((t, i) => (
                  <Tab.Panel key={i + 1}>{t?.component}</Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>

          <div className="flex flex-col mt-2 w-[100%] ">
            <p className="flex  flex-row justify-center text-lg items-center mt-4 text-[rgba(0,110,185,1)] font-Poppins font-[500] ">
              Explore all courses
              <FiArrowRight className="mt-0.5 ml-1" />
            </p>
          </div>
        </div>
      </div>

      <Map />
    </>
  );
};

export default Cards;
