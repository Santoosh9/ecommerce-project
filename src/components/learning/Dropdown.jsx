import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import jsCookie from 'js-cookie';
import { logoutUser } from '../../store/auth';

const Dropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      // Dispatch the logoutUser action
      await dispatch(logoutUser());

      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

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

          <Link to="/mycourse">
            <div className="py-3 px-6 hover:bg-blue-100">
              <p>My Courses</p>
            </div>
          </Link>

          <Link to="">
            <div className="py-3 px-6 hover:bg-blue-100">
              <p>Notifications</p>
            </div>
          </Link>

          <Link>
            <div
              className="py-3 px-6 hover:bg-blue-100  "
              onClick={handleLogout}
            >
              <p>Log Out</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
