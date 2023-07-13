import React, { useRef, useState } from "react";
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import { FaRegCircle } from 'react-icons/fa'
import { FaRegCircleDot } from 'react-icons/fa6'

const QueCounter = () => {

    const numbers = [];  
    const queRef = useRef(null);  

    for (let i = 0 ; i <= 23; i++) {
        numbers.push(i);
    }
      
    const [questions, setQuestions] = useState([
        {
            id: 1,
            question: "Which of the following might not lead to an increase in the demand for a product that can be stored?",
            options: [
                {
                    key: 1,
                    value: "Fall in the price of the component"
                },
                {
                    key: 2,
                    value: "Rise in the price of the component."
                },
                {
                    key: 3,
                    value: "Decrease in the production of the component"
                },
                {
                    key: 4,
                    value: "Increase in the production of the component"
                }
            ],
            selected: null
        },
        {
            id: 2,
            question: "Who is the President of the United States?",
            options: [
                {
                    key: 1,
                    value: "Joe Biden"
                },
                {
                    key: 2,
                    value: "Donald Trump."
                },
                {
                    key: 3,
                    value: "Decrease in the production of the component"
                },
                {
                    key: 4,
                    value: "Increase in the production of the component"
                }
            ],
            selected: null
          },
        {
            id: 3,
            question: "Which of the following might not lead to an increase in the demand for a product that can be stored?",
            options: [
                {
                    key: 1,
                    value: "Fall in the price of the component"
                },
                {
                    key: 2,
                    value: "Rise in the price of the component."
                },
                {
                    key: 3,
                    value: "Decrease in the production of the component"
                },
                {
                    key: 4,
                    value: "Increase in the production of the component"
                }
            ],
            selected: null
          },
          {
            id: 4,
            question: "Which planet is known as the Red Planet?",
            options: [
                {
                    key: 1,
                    value: "Fall in the price of the component"
                },
                {
                    key: 2,
                    value: "Rise in the price of the component."
                },
                {
                    key: 3,
                    value: "Decrease in the production of the component"
                },
                {
                    key: 4,
                    value: "Increase in the production of the component"
                }
            ],
            selected: null
          },
          {
            id: 5,
            question: "Which of the following might not lead to an increase in the demand for a product that can be stored?",
            options: [
                {
                    key: 1,
                    value: "Fall in the price of the component"
                },
                {
                    key: 2,
                    value: "Rise in the price of the component."
                },
                {
                    key: 3,
                    value: "Decrease in the production of the component"
                },
                {
                    key: 4,
                    value: "Increase in the production of the component"
                }
            ],
            selected: null
        },
        {
            id: 6,
            question: "Who is the President of the United States?",
            options: [
                {
                    key: 1,
                    value: "Joe Biden"
                },
                {
                    key: 2,
                    value: "Donald Trump."
                },
                {
                    key: 3,
                    value: "Decrease in the production of the component"
                },
                {
                    key: 4,
                    value: "Increase in the production of the component"
                }
            ],
            selected: null
          },
        {
            id: 7,
            question: "Which of the following might not lead to an increase in the demand for a product that can be stored?",
            options: [
                {
                    key: 1,
                    value: "Fall in the price of the component"
                },
                {
                    key: 2,
                    value: "Rise in the price of the component."
                },
                {
                    key: 3,
                    value: "Decrease in the production of the component"
                },
                {
                    key: 4,
                    value: "Increase in the production of the component"
                }
            ],
            selected: null
          },
          {
            id: 8,
            question: "Which planet is known as the Red Planet?",
            options: [
                {
                    key: 1,
                    value: "Fall in the price of the component"
                },
                {
                    key: 2,
                    value: "Rise in the price of the component."
                },
                {
                    key: 3,
                    value: "Decrease in the production of the component"
                },
                {
                    key: 4,
                    value: "Increase in the production of the component"
                }
            ],
            selected: null
          },
          {
            id: 9,
            question: "Which planet is known as the Red Planet?",
            options: [
                {
                    key: 1,
                    value: "Fall in the price of the component"
                },
                {
                    key: 2,
                    value: "Rise in the price of the component."
                },
                {
                    key: 3,
                    value: "Decrease in the production of the component"
                },
                {
                    key: 4,
                    value: "Increase in the production of the component"
                }
            ],
            selected: null
          },
          {
            id: 10,
            question: "Which of the following might not lead to an increase in the demand for a product that can be stored?",
            options: [
                {
                    key: 1,
                    value: "Fall in the price of the component"
                },
                {
                    key: 2,
                    value: "Rise in the price of the component."
                },
                {
                    key: 3,
                    value: "Decrease in the production of the component"
                },
                {
                    key: 4,
                    value: "Increase in the production of the component"
                }
            ],
            selected: null
        },
        {
            id: 11,
            question: "Who is the President of the United States?",
            options: [
                {
                    key: 1,
                    value: "Joe Biden"
                },
                {
                    key: 2,
                    value: "Donald Trump."
                },
                {
                    key: 3,
                    value: "Decrease in the production of the component"
                },
                {
                    key: 4,
                    value: "Increase in the production of the component"
                }
            ],
            selected: null
          },
        {
            id: 12,
            question: "Which of the following might not lead to an increase in the demand for a product that can be stored?",
            options: [
                {
                    key: 1,
                    value: "Fall in the price of the component"
                },
                {
                    key: 2,
                    value: "Rise in the price of the component."
                },
                {
                    key: 3,
                    value: "Decrease in the production of the component"
                },
                {
                    key: 4,
                    value: "Increase in the production of the component"
                }
            ],
            selected: null
          },
          {
            id: 13,
            question: "Which planet is known as the Red Planet?",
            options: [
                {
                    key: 1,
                    value: "Fall in the price of the component"
                },
                {
                    key: 2,
                    value: "Rise in the price of the component."
                },
                {
                    key: 3,
                    value: "Decrease in the production of the component"
                },
                {
                    key: 4,
                    value: "Increase in the production of the component"
                }
            ],
            selected: null
          },
          {
            id: 14,
            question: "Which of the following might not lead to an increase in the demand for a product that can be stored?",
            options: [
                {
                    key: 1,
                    value: "Fall in the price of the component"
                },
                {
                    key: 2,
                    value: "Rise in the price of the component."
                },
                {
                    key: 3,
                    value: "Decrease in the production of the component"
                },
                {
                    key: 4,
                    value: "Increase in the production of the component"
                }
            ],
            selected: null
        },
        {
            id: 15,
            question: "Which of the following might not lead to an increase in the demand for a product that can be stored?",
            options: [
                {
                    key: 1,
                    value: "Fall in the price of the component"
                },
                {
                    key: 2,
                    value: "Rise in the price of the component."
                },
                {
                    key: 3,
                    value: "Decrease in the production of the component"
                },
                {
                    key: 4,
                    value: "Increase in the production of the component"
                }
            ],
            selected: null
        },
        {
            id: 16,
            question: "Who is the President of the United States?",
            options: [
                {
                    key: 1,
                    value: "Joe Biden"
                },
                {
                    key: 2,
                    value: "Donald Trump."
                },
                {
                    key: 3,
                    value: "Decrease in the production of the component"
                },
                {
                    key: 4,
                    value: "Increase in the production of the component"
                }
            ],
            selected: null
          },
        {
            id: 17,
            question: "Which of the following might not lead to an increase in the demand for a product that can be stored?",
            options: [
                {
                    key: 1,
                    value: "Fall in the price of the component"
                },
                {
                    key: 2,
                    value: "Rise in the price of the component."
                },
                {
                    key: 3,
                    value: "Decrease in the production of the component"
                },
                {
                    key: 4,
                    value: "Increase in the production of the component"
                }
            ],
            selected: null
          },
          {
            id: 18,
            question: "Which planet is known as the Red Planet?",
            options: [
                {
                    key: 1,
                    value: "Fall in the price of the component"
                },
                {
                    key: 2,
                    value: "Rise in the price of the component."
                },
                {
                    key: 3,
                    value: "Decrease in the production of the component"
                },
                {
                    key: 4,
                    value: "Increase in the production of the component"
                }
            ],
            selected: null
          },
          {
            id: 19,
            question: "Which of the following might not lead to an increase in the demand for a product that can be stored?",
            options: [
                {
                    key: 1,
                    value: "Fall in the price of the component"
                },
                {
                    key: 2,
                    value: "Rise in the price of the component."
                },
                {
                    key: 3,
                    value: "Decrease in the production of the component"
                },
                {
                    key: 4,
                    value: "Increase in the production of the component"
                }
            ],
            selected: null
        },
        {
            id: 20,
            question: "Which of the following might not lead to an increase in the demand for a product that can be stored?",
            options: [
                {
                    key: 1,
                    value: "Fall in the price of the component"
                },
                {
                    key: 2,
                    value: "Rise in the price of the component."
                },
                {
                    key: 3,
                    value: "Decrease in the production of the component"
                },
                {
                    key: 4,
                    value: "Increase in the production of the component"
                }
            ],
            selected: null
        },
        {
            id: 21,
            question: "Who is the President of the United States?",
            options: [
                {
                    key: 1,
                    value: "Joe Biden"
                },
                {
                    key: 2,
                    value: "Donald Trump."
                },
                {
                    key: 3,
                    value: "Decrease in the production of the component"
                },
                {
                    key: 4,
                    value: "Increase in the production of the component"
                }
            ],
            selected: null
          },
        {
            id: 22,
            question: "Which of the following might not lead to an increase in the demand for a product that can be stored?",
            options: [
                {
                    key: 1,
                    value: "Fall in the price of the component"
                },
                {
                    key: 2,
                    value: "Rise in the price of the component."
                },
                {
                    key: 3,
                    value: "Decrease in the production of the component"
                },
                {
                    key: 4,
                    value: "Increase in the production of the component"
                }
            ],
            selected: null
          },
          {
            id: 23,
            question: "Which planet is known as the Red Planet?",
            options: [
                {
                    key: 1,
                    value: "Fall in the price of the component"
                },
                {
                    key: 2,
                    value: "Rise in the price of the component."
                },
                {
                    key: 3,
                    value: "Decrease in the production of the component"
                },
                {
                    key: 4,
                    value: "Increase in the production of the component"
                }
            ],
            selected: null
          },
          {
            id: 24,
            question: "Which of the following might not lead to an increase in the demand for a product that can be stored?",
            options: [
                {
                    key: 1,
                    value: "Fall in the price of the component"
                },
                {
                    key: 2,
                    value: "Rise in the price of the component."
                },
                {
                    key: 3,
                    value: "Decrease in the production of the component"
                },
                {
                    key: 4,
                    value: "Increase in the production of the component"
                }
            ],
            selected: null
        },
    ])

    const handleSelect = (que, option) => {
        setQuestions((prevQuestions) => {
          return prevQuestions.map((question) => {
            if (question.id === que) {
              return { ...question, selected: option };
            }
            return question;
          });
        });
      };

    const scrollIntoIndex = (index) => {
        console.log('clicked', index);
        console.log(queRef.current);
        const viewNode = queRef.current.querySelector(`[data-index="${index}"]`);
        console.log(viewNode);        
        viewNode.scrollIntoView({
            behavior: 'smooth',
            inline: 'center'
        });
    }


    return (

    <div className="flex flex-col laptop:flex-row justify-around">
        <div className="max-h-[68vh] overflow-y-auto">
            <div className="w-[80%] h-full mt-4 ml-4 mr-4 tablet:mt-9 tablet:ml-20 tablet:mr-10 gap-10" ref={queRef} >
            {questions.map((onequestion, index) => (
                <div key={index} className="w:full h-fit mt-10 p-4 tablet:p-6 border gap-12 border-blue-200" data-index={index}>
                    <div className="tablet:gap-16">
                        <div className="tablet:gap-8">
                                <div>
                                <div className="tablet:gap-12 h-26">
                                <div className="flex justify-start w-40 gap-0.5">
                                    <div className="flex justify-center items-start w-10 h-10">
                                        <HelpOutlinedIcon className="text-blue-500"/>
                                    </div>
                                    <p className="flex items-center w-36 h-full text-lg font-medium leading-6 tracking-normal text-left text-blue-500">Question {onequestion.id}</p>
                                </div>
                                <p className="text-lg font-normal leading-6 tracking-normal text-left text-black">{onequestion.question}</p>
                            </div>
                            <div>
                                {onequestion.options.map((oneoption, index2) => (
                                    <div key={index2} className={onequestion.selected === oneoption.key ? "flex justify-start items-center w-full px-2 py-1.5 tablet:px-5 tablet:py-4 border gap-2 border-blue-200 bg-blue-200" : "flex justify-start items-center w-full px-2 py-1.5 tablet:px-5 tablet:py-4 border gap-2 border-blue-100  hover:bg-blue-200"}  onClick={() => handleSelect(onequestion.id, oneoption.key)}>
                                    <div className="w-4 h-4 p-0.5">
                                        {onequestion.selected === oneoption.key ? <FaRegCircleDot className="text-blue-500"/> : <FaRegCircle className="text-blue-300"/> }
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
                </div> ))}
            </div>
        </div>
        <div className="flex grow-0 max-h-[68vh] gap-6">
            <div className="w-full h-full border py-8 px-12 border-[#E1ECF3]">
                <div className="flex flex-col flex-start w-full laptop:w-[428px] h-[476px] gap-4">
                    <p className="w-fit h-6 font-medium text-base leading-6">Attempted Questions</p>
                    <div className="h-[428px] gap-3">
                        <div className="flex flex-wrap justify-start max-w-[400px] w-full h-8 gap-1" >
                            {numbers.map((queNo, index) => (
                                <div key={index} onClick={() => scrollIntoIndex(queNo)} className={ questions[queNo].selected ? "flex items-center justify-center w-9 h-9 bg-[#006EB9] text-white rounded-full cursor-pointer" : "flex items-center justify-center w-9 h-9 bg-[#F5F5F5] rounded-full cursor-pointer"}>{queNo + 1}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default QueCounter;