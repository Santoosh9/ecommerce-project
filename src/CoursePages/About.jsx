import React, { useState } from "react";
import IntroCourse from "../components/learning/IntroCourse";
import Description from "../components/learning/Description";
import UserNav from "../components/layout/UserNav";
import FooetRecently from "../components/layout/Foorerreseltly";
import Footer from "../components/layout/Footer";

const About = () => {

    const [openTab, setOpenTab] = useState( 0 );

    const handleTabChange = (data) => {
        setOpenTab(data);
    }

    return (
        <div>
            <UserNav/>
            <IntroCourse/>
            <Description openTab={openTab} handleTabChange={handleTabChange}/>
            <FooetRecently/>
            <Footer/>
           
        </div>
    )
}

export default About;