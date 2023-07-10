import React, { useState } from 'react';
import IntroCourse from '../learning/IntroCourse';
import Description from '../learning/Description';
import UserNav from '../layout/UserNav';
import Foorerreseltly from '../../components/layout/Foorerreseltly';
import Footer from '../layout/Footer';

const About = () => {
  const [openTab, setOpenTab] = useState(0);

  const handleTabChange = (data) => {
    setOpenTab(data);
  };

  return (
    <div>
      <UserNav />
      <IntroCourse />
      <Description openTab={openTab} handleTabChange={handleTabChange} />
      <Foorerreseltly />
      <Footer />
    </div>
  );
};

export default About;
