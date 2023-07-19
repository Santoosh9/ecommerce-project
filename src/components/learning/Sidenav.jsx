import React, { useState } from "react";
import { GrDocumentText } from 'react-icons/gr'
import { CgFileDocument } from 'react-icons/cg'
import { IoVideocamOutline } from 'react-icons/io5'
import { FaAngleDown } from 'react-icons/fa6'
import { FaAngleUp } from 'react-icons/fa6'
import { RxDotFilled } from 'react-icons/rx'
import { TfiAngleRight } from 'react-icons/tfi'
import { TfiAngleLeft } from 'react-icons/tfi'
import axios from "axios";
import { useQuery } from "react-query";

const Sidenav = ( props ) => {

    const [toggle, setToggle] = useState([]);
    console.log(props.subChapter);
    
    const hideSideNav = () => {
        props.sideNavControl(1);
    }

    // const chapters = [
    //     {
    //         id: '1',
    //         title: 'Foundation and Basics of Accounting',
    //         video: '12',
    //         notes: '7',
    //         mcqs: '18',
    //         subchapters: [
    //             {
    //                 id: '1',
    //                 title: 'Foundation and Basics of Accounting',
    //             },
    //             {
    //                 id: '2',
    //                 title: 'Foundation and Basics of Accounting II',
    //             },
    //             {
    //                 id: '3',
    //                 title: 'Foundation and Basics of Accounting III',
    //             },
    //             {
    //                 id: '4',
    //                 title: 'Foundation and Basics of Accounting IV',
    //             }
    //         ]
    //     },
    //     {
    //         id: '2',
    //         title: 'Laws of Accounting',
    //         video: '22',
    //         notes: '12',
    //         mcqs: '20',
    //         subchapters: [
    //             {
    //                 id: '1',
    //                 title: 'Laws of Accounting',
    //             },
    //             {
    //                 id: '2',
    //                 title: 'Laws of Accounting II',
    //             },
    //             {
    //                 id: '3',
    //                 title: 'Laws of Accounting III',
    //             },
    //             {
    //                 id: '4',
    //                 title: 'Laws of Accounting IV',
    //             }
    //         ]
    //     },
    //     {
    //         id: '3',
    //         title: 'Advanced Accounting',
    //         video: '29',
    //         notes: '72',
    //         mcqs: '11',
    //         subchapters: [
    //             {
    //                 id: '1',
    //                 title: 'Advanced Accounting',
    //             },
    //             {
    //                 id: '2',
    //                 title: 'Advanced Accounting II',
    //             },
    //             {
    //                 id: '3',
    //                 title: 'Advanced Accounting III',
    //             },
    //         ]
    //     },
    //     {
    //         id: '4',
    //         title: 'Foundation and Basics of Accounting',
    //         video: '12',
    //         notes: '7',
    //         mcqs: '18',
    //         subchapters: [
    //             {
    //                 id: '1',
    //                 title: 'Foundation and Basics of Accounting'
    //             },
    //             {
    //                 id: '2',
    //                 title: 'Foundation and Basics of Accounting II',
    //             }
    //         ]
    //     },
    //     {
    //         id: '5',
    //         title: 'Laws of Accounting',
    //         video: '22',
    //         notes: '12',
    //         mcqs: '20',
    //         subchapters: [
    //             {
    //                 id: '1',
    //                 title: 'Laws of Accounting',
    //             },
    //             {
    //                 id: '2',
    //                 title: 'Laws of Accounting II',
    //             },
    //             {
    //                 id: '3',
    //                 title: 'Laws of Accounting III',
    //             }
    //         ]
    //     },
    //     {
    //         id: '6',
    //         title: 'Advanced Accounting',
    //         video: '29',
    //         notes: '72',
    //         mcqs: '11',
    //         subchapters: [
    //             {
    //                 id: '1',
    //                 title: 'Advanced Accounting',
    //             },
    //             {
    //                 id: '2',
    //                 title: 'Advanced Accounting II',
    //             },
    //             {
    //                 id: '3',
    //                 title: 'Advanced Accounting III',
    //             },
    //         ]
    //     },
    //     {
    //         id: '7',
    //         title: 'Foundation and Basics of Accounting',
    //         video: '12',
    //         notes: '7',
    //         mcqs: '18',
    //         subchapters: [
    //             {
    //                 id: '1',
    //                 title: 'Foundation and Basics of Accounting'
    //             },
    //             {
    //                 id: '2',
    //                 title: 'Foundation and Basics of Accounting II',
    //             }
    //         ]
    //     },
    //     {
    //         id: '8',
    //         title: 'Laws of Accounting',
    //         video: '22',
    //         notes: '12',
    //         mcqs: '20',
    //         subchapters: [
    //             {
    //                 id: '1',
    //                 title: 'Laws of Accounting',
    //             },
    //             {
    //                 id: '2',
    //                 title: 'Laws of Accounting II',
    //             },
    //             {
    //                 id: '3',
    //                 title: 'Laws of Accounting III',
    //             }
    //         ]
    //     },
    //     {
    //         id: '9',
    //         title: 'Advanced Accounting',
    //         video: '29',
    //         notes: '72',
    //         mcqs: '11',
    //         subchapters: [
    //             {
    //                 id: '1',
    //                 title: 'Advanced Accounting',
    //             },
    //             {
    //                 id: '2',
    //                 title: 'Advanced Accounting II',
    //             },
    //             {
    //                 id: '3',
    //                 title: 'Advanced Accounting III',
    //             },
    //         ]
    //     }
    // ]

    const fetchChapters = async () => {
        const response = await axios.get("http://localhost:4000/chapters")
        return response?.data;
    }

    const {isLoading, data:chapters, isError, error} = useQuery("chapters", fetchChapters);
      
    const toggleView = ( index ) => {
        const updatedToggle = [...toggle];
        updatedToggle[index] = !updatedToggle[index];
        setToggle(updatedToggle);
    }

    const handleSelect = ( chapterIndex, subChapterIndex ) => {
        console.log("Subchapter selected:", subChapterIndex);
        console.log("Chapter Selected:", chapterIndex);
        props.handleSelectData(subChapterIndex);
        props.handleChapterData(chapterIndex);
    }

    return (
        <div>
        <div className="flex flex-col justify-start md:justify-center mobile:w-full tablet:w-full laptop:w-full">  
            <div className="w-auto h-14 pt-4 pr-64 pb-4 pl-6 bg-white">
                <div className="flex justify-start w-32 gap-0.5">
                    <div className="w-36 h-6 gap-3">
                        <p className="w-36 h-6 text-lg font-medium leading-6 text-left">Course Content</p>
                    </div>
                </div>
            </div>
            <div className="tablet:w-full">
                {isLoading && <p className="text-center">Loading...</p>}
                { chapters?.map((chapter, chapterIndex) => (
                    <div className="flex flex-col justify-between w-full h-fit py-3 px-6 bg-white border-t border-blue-200 ">
                        <div className="flex justify-between laptop:w-full mobile:w-full">
                            <div className="flex w-full h-fit gap-16">
                                <div className="w-full h-fit gap-2"> 
                                    <p className="w-[80%] h-fit text-base font-medium leading-6 text-left">
                                        Chapter {chapter.id}:  {chapter.title}
                                    </p>
                                    <div className="flex justify-start ml-0 mt-2 w-72 h-5 gap-6">
                                        <div className="flex justify-start items-center w-40 h-5 gap-2">
                                            <div className="flex justify-center items-center w-4 h-4">
                                                <IoVideocamOutline/>
                                            </div>
                                            <p className="text-xs font-normal leading-5 tracking-normal text-left"> {chapter.video} videos</p>
                                        </div>
                                        <div className="flex justify-start items-center w-36 h-5 gap-2">
                                            <div className="flex justify-center items-center w-4 h-4">
                                                <GrDocumentText/>
                                            </div>
                                            <p className="text-xs font-normal leading-5 tracking-normal text-left"> {chapter.notes} notes</p>
                                        </div>
                                        <div className="flex justify-start items-center w-36 h-5 gap-2">
                                            <div className="flex justify-center items-center w-4 h-4">
                                                <CgFileDocument/>
                                            </div>
                                            <p className="text-xs font-normal leading-5 tracking-normal text-left">{chapter.mcqs} MCQs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-5 h-5 cursor-pointer">
                                <div>
                                    { toggle[chapterIndex] ?
                                    <FaAngleUp onClick= {() => toggleView(chapterIndex)}/> :
                                    <FaAngleDown onClick= {() => toggleView(chapterIndex)}/>
                                    }                            
                                </div>
                            </div>
                        </div>
                        
                    { toggle[chapterIndex] &&
                    <div>
                        {chapter.subchapters.map((subchapter, subChapterIndex) => (
                            <div className= { props.subChapter === subChapterIndex && props.chapter === chapterIndex ? "w-full h-24 py-4 pr-2 pl-0.5 bg-[#E1ECF3]" : "w-full h-24 py-4 pr-2 pl-0.5 hover:bg-[#E1ECF3]"} onClick={() => handleSelect(chapterIndex, subChapterIndex)}>
                            <div className="laptop:w-96 h-16 w-full">
                                <div className="laptop:w-96 h-10 gap-4 w-full">
                                    <div className="flex laptop:w-96 h-10 gap-2 w-full">
                                        <div className="w-5 h-5 p-1.5">
                                            <RxDotFilled/>
                                        </div>
                                        <p className="w-full laptop:w-96 h-10 text-sm font-normal leading-5 tracking-normal text-left">{subchapter.title}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between align-middle w-36 h-5 mt-1.5 ml-7">
                                        <p className="w-10 h-5 text-xs font-normal leading-5 tracking-normal text-left text-gray-800">Video</p>
                                        {/* <div className= "flex justify-center align-middle w-2 h-2">
                                            <img src={sdot} alt="dot"/>     
                                        </div> */}
                                        <p className="w-10 h-5 text-xs font-normal leading-5 tracking-normal text-left text-gray-800">Notes</p>
                                        {/* <div className="flex justify-center align-middle w-2 h-2">
                                            <img src={sdot} alt="dot"/>     
                                        </div> */}
                                        <p className="w-10 h-5 text-xs font-normal leading-5 tracking-normal text-left text-gray-800">MCQs</p>
                                </div>
                                
                            </div>
                    </div>
                        ))}
                    </div>
                    }
                </div>
                ))}
        </div>
        </div>
        </div>
    )
}

export default Sidenav;