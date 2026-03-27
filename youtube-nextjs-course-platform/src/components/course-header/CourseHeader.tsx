'use client';

import { MdShare } from "react-icons/md";
import { CollapsibleText } from "./components/CollapsibleText";
import { ContentCopy } from "./components/ContentCopy";


export interface ICourseHeaderProps {
    title: string,
    description: string,
    numberOfClasses: number, 
}

const getUrl = () => typeof window !== 'undefined' ? window.location.href : '';

export const CourseHeader = ({
    description,
    numberOfClasses, 
    title,
}: ICourseHeaderProps) => {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-xl">
                {title}
            </h1>


            <CollapsibleText
                numberOfLinesWhenClosed={3}
            >
                {description}
            </CollapsibleText>

            <div className="flex gap-2 items-center">
                <ContentCopy
                    title="Titulo"
                    content={getUrl()}
                >
                    <button
                        className="py-2 px-4 bg-paper rounded-full flex items-center gap-2"
                    >
                        <MdShare/>
                        Compartilhar
                    </button>
                </ContentCopy>

                <span>
                    {numberOfClasses} aulas
                </span>
            </div>
        </div>
    );
};
