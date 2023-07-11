import React from "react";
import LinearProgress from '@mui/joy/LinearProgress';

const QueComplete = () => {
    return (
        <div className="w-full h-full px-2 laptop:px-20 laptop:p-10 border">
        <div className="flex items-center justify-around ">
        <div className="flex flex-col laptop:flex-row justify-around items-center gap-48">
            <div className="w-full laptop:w-[516px] gap-32">
                <div className="w-[90%] h-full gap-8">
                    <div className="w-full h-fit gap-12">
                        <p className="w-fit h-12 font-medium text-4xl leading-[48px] text-center text-[#006EB9] py-4 mb-4">Congralutations!</p>
                        <p className="w-full h-fit font-normal text-base leading-g text-left text-[#2C2724BF] py-2">Congratulations on completing your exam! Embrace this achievement, cherish the knowledge you've gained, and keep striving for excellence.</p>
                    </div>
                    <div className="w-full h-10 gap-2 py-4">
                        <p className="w-full h-fit font-medium text-right text-base leading-6 text-[#006EB9]">62/100</p>
                        <LinearProgress determinate value={62}/>
                    </div>
                    <div className="py-4">
                    <button className="flex w-[153px] h-12 justify-center items-center py-4 px-8 bg-[#006EB9] text-white">Done</button>
                    </div>
                </div>
            </div>
            <div className=" flex items-center w-full laptop:w-[492px] h-[340px] border border-[rgb(227,239,247)]">
                <div className="flex flex-col items-center w-full px-12 py-20 gap-8">
                    <div className="w-full h-16 gap-2">
                        <p className="w-fit h-9 font-medium text-xl leading-9">Subject Wise</p>
                        <p className="w-full h-6 font-normal text-base leading-6 text-[#2C2724BF]">Check your results in subject wise format</p>
                    </div>
                    <div className="w-full h-[60%] gap-24">
                        <div className="w-full h-fit py-2">
                            <div className="w-full h-fit flex justify-between">
                                <p className="w-fit h-5 font-normal text-sm leading-5">Physics</p>
                                <p className="w-fit h-5 font-normal text-sm leading-5 text-[#FFB200]">21/25</p>
                            </div>
                            <LinearProgress color="warning" size="md" determinate value={(21/25)*100}/>
                        </div>
                        <div className="w-full h-fit py-2">
                            <div className="w-full h-fit flex justify-between">
                                <p className="w-fit h-5 font-normal text-sm leading-5">Chemistry</p>
                                <p className="w-fit h-5 font-normal text-sm leading-5 text-[#4339F2]">16/23</p>
                            </div>
                            <LinearProgress color="info" size="md" determinate value={(16/23)*100}/>
                        </div>
                        <div className="w-full h-fit py-2">
                            <div className="w-full h-fit flex justify-between">
                                <p className="w-fit h-5 font-normal text-sm leading-5">Maths</p>
                                <p className="w-fit h-5 font-normal text-sm leading-5 text-[#02A0FC]">12/25</p>
                            </div>
                            <LinearProgress color="primary" size="md" determinate value={(12/25)*100}/>
                        </div>
                        <div className="w-full h-fit py-2">
                            <div className="w-full h-fit flex justify-between">
                                <p className="w-fit h-5 font-normal text-sm leading-5">Economics</p>
                                <p className="w-fit h-5 font-normal text-sm leading-5 text-[#FF3A29]">15/24</p>
                            </div>
                            <LinearProgress color="danger"size="md" determinate value={(15/24)*100}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    //     <div className="flex items-center justify-between">
    //     <div className="flex justify-between items-center gap-48">
    //         <div className="w-[516px] gap-32">
    //             <div className="w-full h-full gap-8">
    //                 <div className="w-full h-fit gap-12">
    //                     <p className="w-fit h-12 font-medium text-4xl leading-[48px] text-center text-[#006EB9] py-4 mb-4">Congralutations!</p>
    //                     <p className="w-full h-fit font-normal text-base leading-g text-left text-[#2C2724BF] py-2">Congratulations on completing your exam! Embrace this achievement, cherish the knowledge you've gained, and keep striving for excellence.</p>
    //                 </div>
    //                 <div className="w-full h-10 gap-2">
    //                     <p className="w-full h-fit font-medium text-right text-base leading-6 text-[#006EB9]">62/100</p>
    //                     <LinearProgress determinate value={62}/>
    //                 </div>
    //                 <button className="w-[153px] h-12 py-4 px-8 bg-[#006EB9] text-white">Done</button>
    //             </div>
    //         </div>
    //         <div className=" flex items-center w-[492px] h-[320px] border border-[#E3EFF7]">
    //             <div className="flex flex-col items-center w-[340px] ml-16 mt-10 gap-20">
    //                 <div className="w-full h-16 gap-2">
    //                     <p className="w-48 h-9 font-medium text-xl leading-9">Subject Wise</p>
    //                     <p className="w-full h-6 font-normal text-base leading-6 text-[#2C2724BF]">Check your results in subject wise format</p>
    //                 </div>
    //                 <div className="w-full h-[60%] gap-24">
    //                     <div className="w-full h-fit">
    //                         <div className="w-full h-fit flex justify-between">
    //                             <p className="w-fit h-5 font-normal text-sm leading-5">Physics</p>
    //                             <p className="w-fit h-5 font-normal text-sm leading-5 text-[#FFB200]">21/25</p>
    //                         </div>
    //                         <LinearProgress determinate value={(21/25)*100}/>
    //                     </div>
    //                     <div className="w-full h-fit gap-2">
    //                         <div className="w-full h-fit flex justify-between">
    //                             <p className="w-fit h-5 font-normal text-sm leading-5">Chemistry</p>
    //                             <p className="w-fit h-5 font-normal text-sm leading-5 text-[#4339F2]">16/23</p>
    //                         </div>
    //                         <LinearProgress determinate value={(16/23)*100}/>
    //                     </div>
    //                     <div className="w-full h-fit">
    //                         <div className="w-full h-fit flex justify-between">
    //                             <p className="w-fit h-5 font-normal text-sm leading-5">Maths</p>
    //                             <p className="w-fit h-5 font-normal text-sm leading-5 text-[#02A0FC]">12/25</p>
    //                         </div>
    //                         <LinearProgress determinate value={(12/25)*100}/>
    //                     </div>
    //                     <div className="w-full h-fit">
    //                         <div className="w-full h-fit flex justify-between">
    //                             <p className="w-fit h-5 font-normal text-sm leading-5">Economics</p>
    //                             <p className="w-fit h-5 font-normal text-sm leading-5 text-[#FF3A29]">15/24</p>
    //                         </div>
    //                         <LinearProgress determinate value={(15/24)*100}/>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    )
}

export default QueComplete;