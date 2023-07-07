import React from "react";

const Dropdown = () => {
    return (
        <div className="fixed inset-0 flex items-top justify-end">                   
                     <div className="mt-16 mr-0">
                        <div className="bg-white">
                            <div className=" py-3 px-6 hover:bg-blue-100">
                                <p>Dashboard</p>
                            </div>
                            <div className="py-3 px-6 hover:bg-blue-100">
                                <p>Profile</p>
                            </div>
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