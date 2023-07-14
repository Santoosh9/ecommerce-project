import React, {useState} from "react";
import { BsChevronDown } from 'react-icons/bs'
import { BsChevronUp } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const SubjectMenu = () => {

    const [toggle, setToggle] = useState([]);

    const toggleView = ( index ) => {
        const updatedToggle = [...toggle];
        updatedToggle[index] = !updatedToggle[index];
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

    return (
        <div className=' tablet:hidden fixed inset-0 ml-[30%] mt-20 w-fit h-[192px] overflow-y-auto bg-white'>
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
        </div>
    )
}

export default SubjectMenu;