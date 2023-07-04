import React from "react";

const Dropdown = () => {
    return (
        <div className="userbox">
            <div className="userlink">
                <p>Dashboard</p>
            </div>
            <div className="userlink">
                <p>Profile</p>
            </div>
            <div className="userlink">
                <p>My Courses</p>
            </div>
            <div className="userlink">
                <p>Notifications</p>
            </div>
            <div className="userlink">
                <p>Log Out</p>
            </div>
        </div>
    )
}

export default Dropdown;