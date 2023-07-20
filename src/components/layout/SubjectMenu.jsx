import axios from "axios";
import React, {useState} from "react";
import { BsChevronDown } from 'react-icons/bs'
import { BsChevronUp } from 'react-icons/bs'
import { useQuery } from "react-query";
import { Link } from 'react-router-dom';

const SubjectMenu = () => {

    const [toggle, setToggle] = useState([]);

    const toggleView = (index) => {
      const updatedToggle = [...toggle]
      for (let i=0; i<=toggle.length; i++) {
        if (i===index) {
          updatedToggle[i] = !updatedToggle[i];
        }
        else {
          updatedToggle[i] = false;
        }
      }
      setToggle(updatedToggle);
    }

    const menu = [
        {
          title: 'लोकसेवा (संघ र प्रदेश‌‍‍‌)',
          submenu: [
            {
              subtitle:"लोकसेवा (संघ‌‍‍‌)"
            },
            {
              subtitle:"लोकसेवा (प्रदेश‌‍‍‌‍‍‌)"
            },
            {
              subtitle:"लोकसेवा (संघ‌‍‍‌)"
            }
          ]
        },
        {
          title: 'बैंकिङ तयारी',
          submenu: [
            {
              subtitle:"RBB 4th Level"
            },
            {
              subtitle:"RBB 4th Level"
            },
            {
              subtitle:"RBB 4th Level"
            }
          ]
        },
        {
          title: 'संस्थान तयारी',
          submenu: [
            {
              subtitle:"संस्थान तयारी"
            },
            {
              subtitle:"संस्थान तयारी"
            },
            {
              subtitle:"संस्थान तयारी"
            }
          ]
        }
      ]

    // const fetchSubjects = async () => {
    //   const response = await axios.get("http://localhost:4000/menu")
    //   return response?.data
    // }

    // const {isLoading, data:menu, isError, error} = useQuery("menu", fetchSubjects);

    return (
        <div className=' laptop:hidden fixed inset-0 ml-auto mr-6 tablet:mr-[25%] mt-20 w-fit h-[250px] overflow-y-auto bg-white'>
          {/* {isLoading && <p className="text-center">Loading...</p>} */}
                  {menu.map((onemenu, index) => (
                    <div>
                    <div key={index} className='w-full h-16 border-b flex items-center justify-between px-2 py-1'>
                      <div><p>{onemenu.title}</p></div>
                        { toggle[index] ?
                            <BsChevronUp onClick= {() => toggleView(index)}/> :
                            <BsChevronDown onClick= {() => toggleView(index)}/>
                        }
                    </div>
                    <div>
                    {toggle[index] &&
                        <div>
                          {onemenu.submenu.map((sub, index) => (
                          <Link to="/learning">
                            <div className="w-full h-12 border-b flex items-center justify-start px-6 ">
                              <p className="text-sm">{sub.subtitle}</p>
                            </div>
                          </Link>
                          ))}
                        </div>}
                        </div>
                        </div>
                  ))}
              <Link to="/currentoffiars">
              <div className="flex justify-start items-center h-16 px-2 py-1  font-Poppins font-[400] ">
                Current Affairs
              </div>
            </Link>
        </div>
    )
}

export default SubjectMenu;