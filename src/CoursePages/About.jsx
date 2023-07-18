import React, { useEffect, useState } from "react";
import IntroCourse from "../components/learning/IntroCourse";
import Description from "../components/learning/Description";
import UserNav from "../components/layout/UserNav";
import FooetRecently from "../components/layout/Foorerreseltly";
import Footer from "../components/layout/Footer";
import Card1 from "../Cards/Card1";


const About = () => {

    const [openTab, setOpenTab] = useState( 0 );

    const handleTabChange = (data) => {
        setOpenTab(data);
    }

    useEffect (() => {
        window.scrollTo(0, 0);
    })

    return (
        <div className="flex flex-col w-full">
            <UserNav/>
            <IntroCourse/>
            <Description openTab={openTab} handleTabChange={handleTabChange}/>
            {/* <p className="font-medium text-2xl leading-9 h-9 mx-14">Similar Courses for you</p>
            <Card1/> */}
            <FooetRecently/>
            <Footer/>
           
        </div>
    )
}

export default About;