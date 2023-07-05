import React, { Fragment, useState } from 'react';
import UserNav from '../layout/UserNav';
import FooetRecently from '../layout/Foorerreseltly';
import Footer from '../layout/Footer';
import { Tab } from '@headlessui/react';
import Mycourse from './Mycourse';
import Exams from './Exams';

const Dashbord = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabData = [
    {
      title: 'My Courses',
      component: <Mycourse />,
    },
    {
      title: 'Exams',
      component: <Exams />,
    },
    {
      title: 'Fourms',
      component: <>forms</>,
    },
  ];
  return (
    <>
      <UserNav />

      <div className="flex flex-col mt-1">
        <div
          className="h-[150px] "
          style={{
            backgroundImage: `url(${'./images/header.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div className="flex flex-col ml-32 mt-10 font-Poppins">
            <p className=" font-[500]  text-3xl text-white ">Dashbord</p>
            <p className="mt-2 text-white	 font-[300] text-xl">Welcome back!</p>
          </div>
        </div>

        <Tab.Group
          defaultIndex={1}
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
        >
          <Tab.List className=" font-Poppins font-[16px] flex  mt-10 text-base ml-[140px]">
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

      <FooetRecently />

      <Footer />
    </>
  );
};

export default Dashbord;
