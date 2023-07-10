import React, { useState } from 'react';
import CourseHead from '../learning/Coursehead';
import Topic from '../learning/Topic';
import Window from '../learning/Window';
import Selectbar from '../learning/Selectbar';
import Sidenav from '../learning/Sidenav';

const MCQs = () => {
  const [selectData, setSelectData] = useState(0);
  const [chapterData, setChapterData] = useState(0);
  const [hideSideNav, setHideSideNav] = useState(true);

  const handleSelectData = (data) => {
    setSelectData(data);
  };

  const handleChapterData = (data) => {
    setChapterData(data);
  };

  const sideNavControl = (data) => {
    if (data) {
      setHideSideNav(!hideSideNav);
    }
  };

  const handleChangeData = (data) => {
    if (data) {
      if (selectData < 3) {
        setSelectData(selectData + 1);
      } else if (chapterData < 5) {
        setChapterData(chapterData + 1);
        setSelectData(0);
      }
    } else {
      if (selectData > 0) {
        setSelectData(selectData - 1);
      } else if (chapterData > 0) {
        setChapterData(chapterData - 1);
        setSelectData(3);
      }
    }
  };

  return (
    <div className="App">
      <CourseHead header="course" />
      <div className="flex flex-col mobile:w-full tablet:w-full laptop:flex-row laptop:w-full laptop:justify-center">
        <div>
          <Topic subChapter={selectData} chapter={chapterData} />
          <Window
            openPage="mcqs"
            sideNavControl={sideNavControl}
            hideSideNav={hideSideNav}
          />
          <Selectbar openPage="mcqs" handleChangeData={handleChangeData} />
        </div>
        {hideSideNav && (
          <Sidenav
            handleSelectData={handleSelectData}
            handleChapterData={handleChapterData}
            subChapter={selectData}
            chapter={chapterData}
          />
        )}
        {/* <Sidenav handleSelectData={handleSelectData} handleChapterData={handleChapterData} subChapter={selectData} chapter={chapterData}/> */}
      </div>
    </div>
  );
};

export default MCQs;
