import React, { useState } from "react";
import { GrDocumentText } from 'react-icons/gr'
import { CgFileDocument } from 'react-icons/cg'
import { IoVideocamOutline } from 'react-icons/io5'
import { FaAngleDown } from 'react-icons/fa6'
import { FaAngleUp } from 'react-icons/fa6'
import { RxDotFilled } from 'react-icons/rx'

const Sidenav = ( props ) => {

    const [toggle, setToggle] = useState([]);
    console.log(props.subChapter);

    const chapters = ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6" ]
    const subchapters = ["1", "2", "3", "4"]
      
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
        <div className="flex flex-col justify-start md:justify-center mobile:w-full tablet:w-full laptop:w-auto">  
            <div className="w-auto h-14 pt-4 pr-64 pb-4 pl-6 bg-white">
                <div className="flex justify-start w-32 gap-0.5">
                    <div className="w-36 h-6 gap-3">
                        <p className="w-36 h-6 text-lg font-medium leading-6 text-left">Course Content</p>
                    </div>
                </div>
            </div>
            <div className="overflow-y-auto overflow-x-hidden laptop:max-w-[432px] laptop:max-h-[510px] tablet:w-full">
                { chapters.map((chapter, chapterIndex) => (
                    <div className="flex flex-col justify-between w-full h-fit py-3 px-6 bg-white border-t border-blue-200 ">
                        <div className="flex justify-between laptop:w-96 mobile:w-full">
                            <div className="flex w-full h-20 gap-16">
                                <div className="w-full h-20 gap-2"> 
                                    <p className="w-[80%] laptop:w-80 h-12 text-base font-medium leading-6 text-left">
                                        {chapter}:  Foundation and Basics of Accounting
                                    </p>
                                    <div className="flex justify-start ml-0 mt-2 w-72 h-5 gap-6">
                                        <div className="flex justify-start items-center w-36 h-5 gap-2">
                                            <div className="flex justify-center items-center w-4 h-4">
                                                <IoVideocamOutline/>
                                            </div>
                                            <p className="text-xs font-normal leading-5 tracking-normal text-left"> 12 videos</p>
                                        </div>
                                        <div className="flex justify-start items-center w-36 h-5 gap-2">
                                            <div className="flex justify-center items-center w-4 h-4">
                                                <GrDocumentText/>
                                            </div>
                                            <p className="text-xs font-normal leading-5 tracking-normal text-left">9 notes</p>
                                        </div>
                                        <div className="flex justify-start items-center w-36 h-5 gap-2">
                                            <div className="flex justify-center items-center w-4 h-4">
                                                <CgFileDocument/>
                                            </div>
                                            <p className="text-xs font-normal leading-5 tracking-normal text-left">24 MCQs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-5 h-5">
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
                        {subchapters.map((subchapter, subChapterIndex) => (
                            <div className= { props.subChapter === subChapterIndex && props.chapter === chapterIndex ? "w-full h-24 py-4 pr-2 pl-0.5 bg-[#E1ECF3]" : "w-full h-24 py-4 pr-2 pl-0.5 hover:bg-[#E1ECF3]"} onClick={() => handleSelect(chapterIndex, subChapterIndex)}>
                            <div className="laptop:w-96 h-16 w-full">
                                <div className="laptop:w-96 h-10 gap-4 w-full">
                                    <div className="flex laptop:w-96 h-10 gap-2 w-full">
                                        <div className="w-5 h-5 p-1.5">
                                            <RxDotFilled/>
                                        </div>
                                        <p className="w-full laptop:w-96 h-10 text-sm font-normal leading-5 tracking-normal text-left">Foundation and Basics of Accounting and its principles</p>
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