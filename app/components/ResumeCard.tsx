import React from 'react'
import {Link} from "react-router";
import ScoreCircle from "~/components/ScoreCircle";

export const ResumeCard = ({resume:{id,companyName,jobTitle,feedback,imagePath,}}:{resume:Resume}) => {
    return (
        <Link to={`/resume/${id}`} className="resume-card animate-in fade-in duration-1500 w-[450px]">
            <div className="resume-card-header flex-col rounded-xl p-4 shadow min-w-7">
                <div className="flex items-center  justify-between gap-26">
                    <div className="">
                        <h2 className="!text-black font-bold break-words">{companyName}</h2>
                        <h3 className="text-lg break-words text-gray-500">{jobTitle}</h3>
                    </div>
                    <ScoreCircle score={feedback.overallScore}/>
                </div>

                <div className="gradient-border animate-in fade-in duration-1800 ounded-lg overflow-hidden shadow-md mt-2">
                    <div className="w-full h-full">
                        <img
                            src={imagePath}
                            alt="resume"
                            className="w-full h-[350px] max-sm:h-[200px] object-cover object-top rounded-lg shadow"
                        />
                    </div>
                </div>

            </div>
        </Link>
    )
}
