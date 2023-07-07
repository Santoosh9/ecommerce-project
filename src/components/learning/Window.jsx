import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { TfiAngleRight } from 'react-icons/tfi';
import { TfiAngleLeft } from 'react-icons/tfi';
import { FaRegCircle } from 'react-icons/fa';
import { FaRegCircleDot } from 'react-icons/fa6';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import LinearProgress from '@mui/material/LinearProgress';

import doc from '../../assets/doc.png';
const Window = (props) => {
  const questions = [
    {
      id: 1,
      question:
        'Which of the following might not lead to an increase in the demand for a product that can be stored?',
      options: [
        {
          key: 'a',
          value: 'Fall in the price of the component',
        },
        {
          key: 'b',
          value: 'Rise in the price of the component.',
        },
        {
          key: 'c',
          value: 'Decrease in the production of the component',
        },
        {
          key: 'd',
          value: 'Increase in the production of the component',
        },
      ],
      selected: null,
    },
    {
      id: 2,
      question: 'Who is the President of the United States?',
      options: [
        {
          key: 'a',
          value: 'Joe Biden',
        },
        {
          key: 'b',
          value: 'Donald Trump.',
        },
        {
          key: 'c',
          value: 'Decrease in the production of the component',
        },
        {
          key: 'd',
          value: 'Increase in the production of the component',
        },
      ],
      selected: null,
    },
    {
      id: 3,
      question:
        'Which of the following might not lead to an increase in the demand for a product that can be stored?',
      options: [
        {
          key: 'a',
          value: 'Fall in the price of the component',
        },
        {
          key: 'b',
          value: 'Rise in the price of the component.',
        },
        {
          key: 'c',
          value: 'Decrease in the production of the component',
        },
        {
          key: 'd',
          value: 'Increase in the production of the component',
        },
      ],
      selected: null,
    },
    {
      id: 4,
      question: 'Which planet is known as the Red Planet?',
      options: [
        {
          key: 'a',
          value: 'Fall in the price of the component',
        },
        {
          key: 'b',
          value: 'Rise in the price of the component.',
        },
        {
          key: 'c',
          value: 'Decrease in the production of the component',
        },
        {
          key: 'd',
          value: 'Increase in the production of the component',
        },
      ],
      selected: null,
    },
  ];

  const options = ['a', 'b', 'c', 'd'];
  const [selected, setSelected] = useState(null);
  const [question, setQuestion] = useState(0);
  const [mcqDone, setMcqDone] = useState(false);

  const hideSideNav = () => {
    props.sideNavControl(1);
  };

  const handleSelect = (que, option) => {
    console.log(que, option);
    setSelected(que);
    let length = questions.length;
    for (let i = 0; i < length; i++) {
      if (questions[i].id === que) {
        console.log(questions[i].selected);
        questions[i].selected = 'a';
        console.log(questions[i].selected);
      }
    }
  };

  const handleChangeQue = (data) => {
    if (data) {
      if (question <= 2) {
        setQuestion(question + 1);
        console.log(question);
        if (question === 2) {
          setMcqDone(true);
          console.log(mcqDone);
        }
      }
      setSelected(null);
    } else {
      if (question > 0) {
        setQuestion(question - 1);
        setSelected(null);
        setMcqDone(false);
      }
    }
  };

  return (
    <div className="flex justify-center w-full h-220px tablet:h-[440px] border border-blue-200">
      {props.openPage === 'video' && (
        <div className="flex flex-col justify-between items-center w-320px h-220px tablet:w-780px tablet:h-playwindow laptop:w-playwindow laptop:h-playwindow">
          <div className="mobile:hidden laptop:block">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              controls
              playing
              width="932px"
              height="440px"
            />
          </div>
          <div className="mobile:hidden tablet:max-laptop:block">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              controls
              playing
              width="780px"
              height="440px"
            />
          </div>
          <div className="mobile:max-tablet:block tablet:hidden">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              controls
              playing
              width="320px"
              height="220px"
            />
          </div>
          <div
            className={
              props.hideSideNav
                ? 'flex justify-center items-center w-10 h-10 ml-sidenav mt-sidenavh p-2 border border-r-0 bg-black border-blue-100 absolute inset-0 mobile:hidden laptop:block cursor-pointer'
                : 'flex justify-center items-center w-10 h-10 ml-sidenavplus mt-sidenavh p-2 border border-r-0 bg-black border-blue-100 absolute inset-0 sm:hidden lg:block cursor-pointer'
            }
            onClick={hideSideNav}
          >
            <div className="flex justify-center items-center w-6 h-6">
              <div className="flex justify-center items-center w-6 h-6">
                {props.hideSideNav ? (
                  <TfiAngleRight className="text-white" />
                ) : (
                  <TfiAngleLeft className="text-white" />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {props.openPage === 'notes' && (
        <div className="flex justify-center w-playwindow h-playwindow">
          <img src={doc} width="628px" />
          <div
            className={
              props.hideSideNav
                ? 'flex justify-center items-center w-10 h-10 ml-sidenav mt-sidenavh p-2 border border-r-0 bg-white border-blue-100 absolute inset-0 mobile:hidden laptop:block cursor-pointer '
                : 'flex justify-center items-center w-10 h-10 ml-sidenavplus mt-sidenavh p-2 border border-r-0 bg-white border-blue-100 absolute inset-0 mobile:hidden laptop:block cursor-pointer '
            }
            onClick={hideSideNav}
          >
            <div className="flex justify-center items-center w-6 h-6">
              <div className="flex justify-center items-center w-6 h-6">
                {props.hideSideNav ? <TfiAngleRight /> : <TfiAngleLeft />}
              </div>
            </div>
          </div>
        </div>
      )}
      {props.openPage === 'mcqs' && (
        <div className="w-full h-full mt-4 ml-4 mr-4 tablet:mt-9 tablet:ml-28 tablet:mr-28 gap-10">
          <div className="w:full laptop:w-[706px] laptop:max-h-[340px] overflow-y-auto p-2 tablet:p-6 border gap-12 border-blue-200">
            <div className="tablet:gap-16">
              <div className="tablet:gap-8">
                <div className="tablet:gap-12 h-26">
                  <div className="flex justify-start w-40 gap-0.5">
                    <div className="flex justify-center items-start w-10 h-10">
                      <HelpOutlinedIcon className="text-blue-500" />
                    </div>
                    <p className="flex items-center w-36 h-full text-lg font-medium leading-6 tracking-normal text-left text-blue-500">
                      Question {question + 1}
                    </p>
                  </div>
                  <p className="text-lg font-normal leading-6 tracking-normal text-left text-black">
                    {questions[question].question}
                  </p>
                </div>
                <div>
                  {questions[question].options.map((oneoption, index) => (
                    <div
                      className={
                        selected === oneoption.key
                          ? 'flex justify-start items-center w-full px-5 py-4 border gap-2 border-blue-200 bg-blue-200'
                          : 'flex justify-start items-center w-full px-5 py-4 border gap-2 border-blue-100  hover:bg-blue-200'
                      }
                      onClick={() => handleSelect(oneoption.key)}
                    >
                      <div className="w-4 h-4 p-0.5">
                        {selected === oneoption.key ? (
                          <FaRegCircleDot className="text-blue-500" />
                        ) : (
                          <FaRegCircle className="text-blue-300" />
                        )}
                      </div>
                      <p className="w-full h-fit text-sm font-normal leading-5 tracking-normal text-left pl-2 text-gray-700">
                        {oneoption.key}. {oneoption.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full h-4 m-4 laptop:gap-96">
            <div
              className="flex justify-center items-center w-24 h-4 gap-2"
              onClick={() => handleChangeQue(0)}
            >
              <div className="flex justify-center items-center w-4 h-4">
                <TfiAngleLeft className="text-blue-700" />
              </div>
              <p className="text-sm font-medium tracking-normal text-center text-blue-500 cursor-pointer">
                Previous
              </p>
            </div>
            {!mcqDone ? (
              <div
                className="flex justify-center items-center w-24 h-4 gap-2"
                onClick={() => handleChangeQue(1)}
              >
                <p className="text-sm font-medium tracking-normal text-center text-blue-500 cursor-pointer">
                  Next
                </p>
                <div className="flex justify-center items-center w-4 h-4 z-0">
                  <TfiAngleRight className="text-blue-700" />
                </div>
              </div>
            ) : (
              <Link to="/learning/complete">
                <div className="flex justify-center items-center w-24 h-4 gap-2">
                  <p className="text-sm font-medium tracking-normal text-center text-blue-500">
                    Next
                  </p>
                  <div className="flex justify-center items-center w-4 h-4 z-0">
                    <TfiAngleRight className="text-blue-700" />
                  </div>
                </div>
              </Link>
            )}
          </div>
          <div
            className={
              props.hideSideNav
                ? 'flex justify-center items-center w-10 h-10 ml-sidenav mt-sidenavh p-2 border border-r-0 bg-white border-blue-100 absolute inset-0 mobile:hidden laptop:block cursor-pointer'
                : 'flex justify-center items-center w-10 h-10 ml-sidenavplus mt-sidenavh p-2 border border-r-0 bg-white border-blue-100 absolute inset-0 mobile:hidden laptop:block cursor-pointer'
            }
            onClick={hideSideNav}
          >
            <div className="flex justify-center items-center w-6 h-6">
              <div className="flex justify-center items-center w-6 h-6">
                {props.hideSideNav ? <TfiAngleRight /> : <TfiAngleLeft />}
              </div>
            </div>
          </div>
        </div>
      )}

      {props.openPage === 'complete' && (
        <div className="flex flex-col justify-center items-center w-full laptop:w-playwindow h-full gap-10">
          <div className="w-full h-fit gap-2">
            <div className="flex flex-col justify-center items-center w-full h-28 gap-4">
              <p className=" w-full tablet:w-3/5 h-9 text-2xl font-medium leading-9 tracking-normal text-center text-blue-600 ">
                Congratulations!
              </p>
              <p className="w-full tablet:w-3/5 h-16 text-sm font-normal leading-5 tracking-normal text-center">
                Congratulations on completing your exam! Embrace this
                achievement, cherish the knowledge you've gained, and keep
                striving for excellence.
              </p>
            </div>
            <div className=" flex justify-center items-center w-full h-12 pt-2 pr-2.5 pb-2 pl-2.5">
              <div className="flex flex-col justify-center w-3/5 h-9 ml-0.5 gap-2 items-center">
                <p className="w-full h-5 text-sm font-normal mt-8 tablet:mt-0 leading-5 tracking-normal text-right text-blue-600">
                  62/100
                </p>
                <div className=" flex w-full h-2 justify-center">
                  <LinearProgress determinate value={62} />
                </div>
              </div>
            </div>
          </div>
          <button className="w-32 h-10 rounded-full mb-2 tablet:mb-0 tablet:w-40 tablet:h-12 py-2 px-4 bg-[#006EB9] ">
            Done
          </button>
          <div
            className={
              props.hideSideNav
                ? 'flex justify-center items-center w-10 h-10 ml-sidenav mt-sidenavh p-2 border border-r-0 bg-white border-blue-100 absolute inset-0 mobile:hidden laptop:block cursor-pointer'
                : 'flex justify-center items-center w-10 h-10 ml-sidenavplus mt-sidenavh p-2 border border-r-0 bg-white border-blue-100 absolute inset-0 mobile:hidden laptop:block cursor-pointer'
            }
            onClick={hideSideNav}
          >
            <div className="flex justify-center items-center w-6 h-6">
              <div className="flex justify-center items-center w-6 h-6">
                {props.hideSideNav ? <TfiAngleRight /> : <TfiAngleLeft />}
              </div>
            </div>
          </div>
        </div>
      )}

      {props.openPage === 'exam' && (
        <div className="overflow-y-auto">
          <div className="w-[80%] h-full mt-4 ml-4 mr-4 tablet:mt-9 tablet:ml-20 tablet:mr-10 gap-10">
            {questions.map((onequestion, index) => (
              <div className="w:full h-fit mt-10  p-2 tablet:p-6 border gap-12 border-blue-200">
                <div className="tablet:gap-16">
                  <div className="tablet:gap-8">
                    <div>
                      <div className="tablet:gap-12 h-26">
                        <div className="flex justify-start w-40 gap-0.5">
                          <div className="flex justify-center items-start w-10 h-10">
                            <HelpOutlinedIcon className="text-blue-500" />
                          </div>
                          <p className="flex items-center w-36 h-full text-lg font-medium leading-6 tracking-normal text-left text-blue-500">
                            Question {onequestion.id}
                          </p>
                        </div>
                        <p className="text-lg font-normal leading-6 tracking-normal text-left text-black">
                          {onequestion.question}
                        </p>
                      </div>
                      <div>
                        {onequestion.options.map((oneoption, index) => (
                          <div
                            className={
                              oneoption.key === onequestion.selected
                                ? 'flex justify-start items-center w-full px-5 py-4 border gap-2 border-blue-200 bg-blue-200'
                                : 'flex justify-start items-center w-full px-5 py-4 border gap-2 border-blue-100  hover:bg-blue-200'
                            }
                            onClick={() =>
                              handleSelect(onequestion.id, oneoption.key)
                            }
                          >
                            <div className="w-4 h-4 p-0.5">
                              {onequestion.selected === oneoption.key ? (
                                <FaRegCircleDot className="text-blue-500" />
                              ) : (
                                <FaRegCircle className="text-blue-300" />
                              )}
                            </div>
                            <p className="w-full h-fit text-sm font-normal leading-5 tracking-normal text-left pl-2 text-gray-700">
                              {oneoption.key}. {oneoption.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* <div className="tablet:gap-12 h-26">
                                <div className="flex justify-start w-40 gap-0.5">
                                    <div className="flex justify-center items-start w-10 h-10">
                                        <HelpOutlinedIcon className="text-blue-500"/>
                                    </div>
                                    <p className="flex items-center w-36 h-full text-lg font-medium leading-6 tracking-normal text-left text-blue-500">Question {question + 1}</p>
                                </div>
                                <p className="text-lg font-normal leading-6 tracking-normal text-left text-black">{questions[question].question}</p>
                            </div>
                            <div>
                                {options.map((oneoption, index) => (
                                    <div className={selected === oneoption ? "flex justify-start items-center w-full px-5 py-4 border gap-2 border-blue-200 bg-blue-200" : "flex justify-start items-center w-full px-5 py-4 border gap-2 border-blue-100  hover:bg-blue-200"}  onClick={() => handleSelect(oneoption)}>
                                    <div className="w-4 h-4 p-0.5">
                                        {selected === oneoption ? <FaRegCircleDot className="text-blue-500"/> : <FaRegCircle className="text-blue-300"/> }
                                    </div>
                                    <p className="w-full h-fit text-sm font-normal leading-5 tracking-normal text-left pl-2 text-gray-700">
                                    {oneoption}. {questions[question].options[oneoption]}
                                    </p>
                                    </div>
                                ))}
                            </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Window;
