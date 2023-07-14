import React, {useEffect} from "react";
import Navbar from "../layout/Navbar";
import Allcard from "../../Cards/Allcard";
import Footer from "../layout/Footer";

const Allcourses = () => {
    useEffect (() => {
        window.scrollTo(0, 0);
    })

    return (
        <>
        <Navbar/>
        <Allcard/>
        <Footer/>
        </>
    )
}

export default Allcourses;