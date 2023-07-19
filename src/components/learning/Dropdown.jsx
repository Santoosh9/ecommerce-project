import React from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
    return (
        <div className="fixed inset-0 flex items-top justify-end w-full mt-16 z-10">                   
                     <div>
                        <div className="bg-white">
                            <Link to="/mycourse">
                                <div className=" py-3 px-6 hover:bg-blue-100">
                                    <p>Dashboard</p>
                                </div>
                            </Link>
                            <Link to="/editprofile">
                            <div className="py-3 px-6 hover:bg-blue-100">
                                <p>Profile</p>
                            </div>
                            </Link>
                            <div className="py-3 px-6 hover:bg-blue-100">
                                <p>My Courses</p>
                            </div>
                            <div className="py-3 px-6 hover:bg-blue-100">
                                <p>Notifications</p>
                            </div>
                            <div className="py-3 px-6 hover:bg-blue-100">
                                <p>Log Out</p>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Dropdown;