import React, { useState } from "react";
import CourseHead from "../components/learning/Coursehead";
import Topic from "../components/learning/Topic";
import Window from "../components/learning/Window";
import Selectbar from "../components/learning/Selectbar";
import Sidenav from "../components/learning/Sidenav"

const Complete = () => {

    const [selectData, setSelectData] = useState( 0 )
    const [chapterData, setChapterData] = useState( 0 )
    const [hideSideNav, setHideSideNav] = useState ( true );



    const handleSelectData = (data) => {
      setSelectData(data);
    }

    const handleChapterData = (data) => {
      setChapterData(data);
    }

    const sideNavControl = (data) => {
      if (data) {
        setHideSideNav(!hideSideNav);
      }
    }

    const handleChangeData = (data) => {
      if (data) {
        if (selectData < 3) {
        setSelectData(selectData + 1);
        } else if(chapterData < 5) {
          setChapterData(chapterData + 1);
          setSelectData( 0 )
        }
      } else {
        if (selectData > 0) {
          setSelectData(selectData - 1)
        } else if ( chapterData > 0 ) {
          setChapterData(chapterData - 1);
          setSelectData( 3 ) 
        }
      }
    }

    return (
        <div className="flex flex-col w-full min-h-screen justify-start flex-auto">
        <CourseHead header="course" />
        <div className='flex flex-col mobile:w-full tablet:w-full laptop:flex-row laptop:w-full laptop:justify-center'>
            <div className="flex flex-col justify-between laptop:w-[70%] laptop:min-h-[86vh]">
            <Topic subChapter = {selectData} chapter = {chapterData} />
            <Window openPage= "complete" sideNavControl={sideNavControl} hideSideNav={hideSideNav}/>
            <Selectbar openPage= "complete" handleChangeData={handleChangeData}/>  
            </div>
            {hideSideNav && 
              <div className="laptop:overflow-y-auto laptop:overflow-x-hidden laptop:max-h-[86vh] laptop:w-[30%] justify-center">
                <Sidenav handleSelectData={handleSelectData} handleChapterData={handleChapterData} subChapter = {selectData} chapter = {chapterData}/>
              </div>            }
        </div>
        </div>
    )
} 

export default Complete;