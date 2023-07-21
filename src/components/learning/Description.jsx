import React, { useState } from "react";
import { RxUpdate } from 'react-icons/rx';
import { PiDotOutlineFill } from 'react-icons/pi'
import { BsPlayCircle } from 'react-icons/bs';
import { HiOutlineClock } from 'react-icons/hi2'
import { FaAngleDown } from 'react-icons/fa6'
import { FaAngleUp } from 'react-icons/fa6'
import { IoVideocamOutline } from 'react-icons/io5'
import { GrDocumentText } from 'react-icons/gr'
import { CgFileDocument } from 'react-icons/cg'
import { RxDotFilled } from 'react-icons/rx'
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

const Description = (props) => {

    const chapters = [
        {
            id: '1',
            title: 'Foundation and Basics of Accounting',
            video: '12',
            notes: '7',
            mcqs: '18',
            subchapters: [
                {
                    id: '1',
                    title: 'Foundation and Basics of Accounting',
                },
                {
                    id: '2',
                    title: 'Foundation and Basics of Accounting II',
                },
                {
                    id: '3',
                    title: 'Foundation and Basics of Accounting III',
                },
                {
                    id: '4',
                    title: 'Foundation and Basics of Accounting IV',
                }
            ]
        },
        {
            id: '2',
            title: 'Laws of Accounting',
            video: '22',
            notes: '12',
            mcqs: '20',
            subchapters: [
                {
                    id: '1',
                    title: 'Laws of Accounting',
                },
                {
                    id: '2',
                    title: 'Laws of Accounting II',
                },
                {
                    id: '3',
                    title: 'Laws of Accounting III',
                },
                {
                    id: '4',
                    title: 'Laws of Accounting IV',
                }
            ]
        },
        {
            id: '3',
            title: 'Advanced Accounting',
            video: '29',
            notes: '72',
            mcqs: '11',
            subchapters: [
                {
                    id: '1',
                    title: 'Advanced Accounting',
                },
                {
                    id: '2',
                    title: 'Advanced Accounting II',
                },
                {
                    id: '3',
                    title: 'Advanced Accounting III',
                },
            ]
        },
        {
            id: '4',
            title: 'Foundation and Basics of Accounting',
            video: '12',
            notes: '7',
            mcqs: '18',
            subchapters: [
                {
                    id: '1',
                    title: 'Foundation and Basics of Accounting'
                },
                {
                    id: '2',
                    title: 'Foundation and Basics of Accounting II',
                }
            ]
        },
        {
            id: '5',
            title: 'Laws of Accounting',
            video: '22',
            notes: '12',
            mcqs: '20',
            subchapters: [
                {
                    id: '1',
                    title: 'Laws of Accounting',
                },
                {
                    id: '2',
                    title: 'Laws of Accounting II',
                },
                {
                    id: '3',
                    title: 'Laws of Accounting III',
                }
            ]
        },
        {
            id: '6',
            title: 'Advanced Accounting',
            video: '29',
            notes: '72',
            mcqs: '11',
            subchapters: [
                {
                    id: '1',
                    title: 'Advanced Accounting',
                },
                {
                    id: '2',
                    title: 'Advanced Accounting II',
                },
                {
                    id: '3',
                    title: 'Advanced Accounting III',
                },
            ]
        }
    ]

    // const fetchChapters = async() => {
    //     const response = await axios.get("http://localhost:4000/chapters")
    //     return response?.data;
    // }

    // const {isLoading, data:chapters, isError, error} = useQuery("chapters", fetchChapters)

    const [toggle, setToggle] = useState([]);

    const tabChange = (data) => {
        props.handleTabChange(data);
    }
    
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

    return (
        <div className="font-Poppins mt-24">
            {!props.openTab ?
            <div className="flex flex-col laptop:flex-row  justify-between w-[85%]  mt-48 tablet:mt-16 ml-6 tablet:ml-32 gap-8 mb-4" >
            <div className="w-full h-fit laptop:h-[856px] gap-12">
                <div className="flex w-full h-fit border-b gap-6 border-b-[#F0F9FF] text-[#F0F9FF]">
                    <div className= { !props.openTab ? "w-fit h-full border-b border-b-[#006EB9] text-[#006EB9] px-1 py-3" :"w-fit h-full text-[#2C2724BF] px-1 py-3 cursor-pointer"} onClick={() => tabChange(0)}>
                        <p className="w-fit h-6 font-medium text-lg leading-6" >About Course</p>
                    </div>
                    <div className= { props.openTab ? "w-fit h-full border-b border-b-[#006EB9] text-[#006EB9] px-1 py-3" :"w-fit h-full text-[#2C2724BF] px-1 py-3 cursor-pointer"} onClick={() => tabChange(1)}>
                        <p className="w-fit h-6 font-medium text-lg leading-6">Syllabus</p>
                    </div>
                </div>
                <p className="w-full laptop:w-full h-fit font-normal text-base leading-6 text-[#2C2724BF] my-6">Access a vast array of courses, by a very interactive lessons, and expert also by giving a full course. Access a vast array of courses, by a very interactive lessons Access a vast array of courses, by a very interactive lessons, and expert also by giving a full course. Access a vast array of courses, by a very interactive lessons Access a vast array of courses, by a very interactive lessons, and expert also by giving a full course. Access a vast array of courses, by a very interactive lessons Access a vast array of courses, by a very interactive lessons, and expert also by giving a full course. Access a vast array of courses, by a very interactive lessons.</p>
                <p className="w-full laptop:w-full h-fit font-normal text-base leading-6 text-[#2C2724BF] my-6">Access a vast array of courses, by a very interactive lessons, and expert also by giving a full course. Access a vast array of courses, by a very interactive lessons Access a vast array of courses, by a very interactive lessons, and expert also by giving a full course. Access a vast array of courses, by a very interactive lessons</p>
                <p className="w-full laptop:w-full h-fit font-normal text-base leading-6 text-[#2C2724BF] my-6">Access a vast array of courses, by a very interactive lessons, and expert also by giving a full course. Access a vast array of courses, by a very interactive lessons Access a vast array of courses, by a very interactive lessons, and expert also by giving a full course.</p>
                <div className="w-full h-fit gap-4 ">
                    <p className="w-full laptop:w-full h-5 font-medium text-base leading-5 text-left text-[#2C2724]">We are dedicated and committed towards:</p>
                    <ul className="list-disc w-[70%] ml-8 my-4 text-[#2C2724BF]">
                        <li>Providing quality IT training to the aspiring IT professionals</li>
                        <li>Availability of highly qualified and experienced instructors</li>
                        <li>Assigning project works as per the nature of the courses</li>
                        <li>Conducting regular project work evaluation sessions</li>
                        <li>Identifying trainees' skills and knowledge gaps</li>
                        <li>Taking corrective actions to enhance trainees' skills</li>
                        <li>Providing internship and job placement facilities to the trainees</li>
                        <li>Providing internship and job placement facilities to the trainees</li>
                    </ul>
                    <p className="w-full laptop:w-full h-fit font-normal text-base leading-6 text-[#2C2724BF] my-6">Since establishment, we have successfully established and maintained network with more than fifty IT and other companies which has made us able to offer and provide our students with internship and job opportunities.</p>
                </div>
            </div>
            <div className="flex flex-col w-full tablet:w-[366px] h-fit gap-8">
                <div className="w-full border px-8 py-8 gap-2 bg-[#E1ECF3] border-[#E1ECF3]">
                    <div className="flex flex-col justify-between w-full tablet:w-[298px] h-[270px] gap-6">
                        <p className="w-fit h-6 font-medium text-xl px-2 leading-6 text-[#111111]">Course Details</p>
                        <div className="w-full h-14 ">
                            <div className="flex justify-start items-center w-full h-fit gap-4">
                                <div className="flex justify-center items-center w-6 h-6">
                                    <RxUpdate className="text-[#006EB9]"/>
                                </div>
                                <p className="w-fit h-fit font-normal text-lg leading-6 text-black">Last Updated</p>
                            </div>
                            <p className="w-fit h-fit font-normal text-base leading-6 pl-12 text-[#2C2724BF]">March 21,2023 </p>
                        </div>
                        <div className="w-full h-14 ">
                            <div className="flex justify-start items-center w-full h-fit gap-4">
                                <div className="flex justify-center items-center w-6 h-6">
                                    <BsPlayCircle className="text-[#006EB9]"/>
                                </div>
                                <p className="w-fit h-fit font-normal text-lg leading-6 text-black">Video</p>
                            </div>
                            <p className="w-fit h-fit font-normal text-base leading-6 pl-12 text-[#2C2724BF]">18 Videos</p>
                        </div>
                        <div className="w-full h-14 ">
                            <div className="flex justify-start items-center w-full h-fit gap-4">
                                <div className="flex justify-center items-center w-6 h-6">
                                    <HiOutlineClock className="text-[#006EB9]"/>
                                </div>
                                <p className="w-fit h-fit font-normal text-lg leading-6 text-black">Duration</p>
                            </div>
                            <p className="w-fit h-fit font-normal text-base leading-6 pl-12 text-[#2C2724BF]">12 Hours 2 Mins</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit border border-[#E0EBF2]">
                    <div className=" flex flex-col justify-start w-full h-fit px-6 py-6 gap-8">
                        <p className="w-fit h-6 font-medium text-xl leading-6">Current Affairs</p>
                        <div className="flex flex-col justify-between w-full h-fit gap-3">
                            <div className="w-full h-fit">
                                <div className="w-full h-fit">
                                    <p className="w-full h-full font-medium text-lg leading-6 py-2">पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना</p>
                                    <p className="w-fit font-normal text-base leading-6 text-[#2C2724BF]">March 21, 2023</p>
                                </div>
                            </div>
                            <div className="w-full h-fit">
                                <div className="w-full h-fit">
                                    <p className="w-full h-full font-medium text-lg leading-6 py-2">परीक्षा कार्यक्रम संशाेधन गरिएको सूचना</p>
                                    <p className="w-fit font-normal text-base leading-6 text-[#2C2724BF]">March 21, 2023</p>
                                </div>
                            </div>
                            <div className="w-full h-fit">
                                <div className="w-full h-fit">
                                    <p className="w-full h-full font-medium text-lg leading-6 py-2">पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना</p>
                                    <p className="w-fit font-normal text-base leading-6 text-[#2C2724BF]">March 21, 2023</p>
                                </div>
                            </div>
                            <div className="w-full h-fit">
                                <div className="w-full h-fit">
                                    <p className="w-full h-full font-medium text-lg leading-6 py-2">पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना </p>
                                    <p className="w-fit font-normal text-base leading-6 text-[#2C2724BF]">March 21, 2023</p>
                                </div>
                            </div>
                            <div className="w-full h-fit">
                                <div className="w-full h-fit">
                                    <p className="w-full h-full font-medium text-lg leading-6 py-2">पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना </p>
                                    <p className="w-fit font-normal text-base leading-6 text-[#2C2724BF]">March 21, 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div> :
            <div className="flex flex-col justify-between w-full laptop:w-[85%] mt-48 tablet:mt-16 ml-6 tablet:ml-32 gap-8 mb-4" >
                <div className="flex w-full h-fit border-b gap-6 border-b-[#F0F9FF] text-[#F0F9FF]">
                <div className= { !props.openTab ? "w-fit h-full border-b border-b-[#006EB9] text-[#006EB9] px-1 py-3" :"w-fit h-full text-[#2C2724BF] px-1 py-3 cursor-pointer"} onClick={() => tabChange(0)}>
                        <p className="w-fit h-6 font-medium text-lg leading-6" >About Course</p>
                    </div>
                    <div className= { props.openTab ? "w-fit h-full border-b border-b-[#006EB9] text-[#006EB9] px-1 py-3" :"w-fit h-full text-[#2C2724BF] px-1 py-3 cursor-pointer"} onClick={() => tabChange(1)}>
                        <p className="w-fit h-6 font-medium text-lg leading-6">Syllabus</p>
                    </div>
                    </div>
                    <div className="w-full h-fit">
                        { chapters.map ((chapter, chapterIndex) => (
                            <div className="w-full min-h-[98px] border bg-[#FAFAFA] border-[#E1ECF3]">
                            <div className="flex items-center w-full laptop:w-[90%] h-6 mt-8 ml-1 laptop:ml-10 gap-4 cursor-pointer " onClick={() => toggleView(chapterIndex)}>
                                <div className="w-5 h-5 flex items-center" >
                                    { toggle[chapterIndex] ?
                                    <FaAngleUp/> :
                                    <FaAngleDown/>}
                                </div>
                                <div className="flex flex-col justify-start tablet:flex-row w-full h-fit py-1">
                                    <p className="w-[90%] flex h-full font-medium text-lg leading-6 text-left">Chapter {chapter.id}. {chapter.title}</p>
                                    <div className="w-fit h-full gap-6">
                                        <div className="flex items-center w-full h-5 gap-0 laptop:gap-4 py-2">
                                            <div className="flex justif-start w-24 h-5 gap-0 tablet:gap-2">
                                                <div className="w-5 h-5 flex items-center">
                                                    <IoVideocamOutline/>
                                                </div>
                                                <p className="w-fit h-full font-normal text-sm leading-5">{chapter.video} Videos</p>
                                            </div>
                                            <div className="flex items-center w-24 h-5 gap-0 tablet:gap-2">
                                                <div className="w-5 h-5 flex items-center">
                                                    <GrDocumentText/>
                                                </div>
                                                <p className="w-fit h-full font-normal text-sm leading-5">{chapter.notes} Notes</p>
                                            </div>
                                            <div className="flex items-center w-24 h-5 gap-0 tablet:gap-2">
                                                <div className="w-5 h-5 flex items-center">
                                                    <CgFileDocument/>
                                                </div>
                                                <p className="w-fit h-full font-normal text-sm leading-5">{chapter.mcqs} MCQs</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {toggle[chapterIndex] && 
                                <div className="w-full h-fit border-t border-t-[#E1ECF3] bg-white  mt-8">
                                    {chapter.subchapters.map((subchapter, index) => (
                                        <Link to="/learning/video">
                                        <div className="w-full tablet:w-[90%] h-fit mt-1 ml-0 laptop:ml-9">
                                        <div className="w-full h-fit border-b border-b-[#E1ECF3] px-10 py-6">
                                            <div className="flex flex-col tablet:flex-row justify-between  w-full h-fit">
                                                <div className="flex justify-between w-fit h-full gap-2">
                                                    <div className="w-6 h-6 flex items-center">
                                                        <RxDotFilled/>
                                                    </div>
                                                    <p className="w-fit h-full font-normal text-base leading-6 ">{subchapter.title}</p>
                                                </div>
                                                <div className="flex justify-between items-center w-fit h-5 gap-1 tablet:gap-3 ml-8 ">
                                                    <p className="w-fit h-full font-normal text-sm leading-5 text-[#2C2724BF]">Videos</p>
                                                    <div className="w-2 h-2 flex items-center justify-between"><PiDotOutlineFill/></div>
                                                    <p className="w-fit h-full font-normal text-sm leading-5 text-[#2C2724BF]">Notes</p>
                                                    <div className="w-2 h-2 flex items-center justify-between"><PiDotOutlineFill/></div>
                                                    <p className="w-fit h-full font-normal text-sm leading-5 text-[#2C2724BF]">MCQs</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                    ))}
                                </div>
                            }
                        </div>
                        ))}
                    </div>
                </div>
        }
        </div>     
    )
}

export default Description;

//Component Ready