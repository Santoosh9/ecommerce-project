import React from "react";
import { GoDotFill } from 'react-icons/go'

const Topic = (props) => {
    return (
        <div className="flex justify-start items-center w-full h-14 border-l border-r border-l-blue-200 border-r-blue-200 px-12 py-4 gap-4">
            <div className="p-1 pr-0.5 tablet:p-2 tablet:pr-0.5">
                <GoDotFill/>
            </div>
            <p className="mobile:hidden tablet:block"> Chapter: {Number(props.chapter) + 1}  ||  Sub Chapter: {Number(props.subChapter) + 1}</p>
            <p className="tablet:hidden">Chapter: {Number(props.chapter) + 1}.{Number(props.subChapter) + 1}</p>
        </div>
    )
}

export default Topic;