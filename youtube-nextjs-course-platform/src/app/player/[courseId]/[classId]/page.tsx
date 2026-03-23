'use client';

import { PlayerClass, PlayerHeader } from "@/src/components/player";

interface IPagePlayerProps {
    params: {
        classId: string,
        courseId: string,
    },
}

export default function PagePlayer({
    params
}: IPagePlayerProps) {
    const {classId, courseId} = params;

    return (
        <>
            <PlayerHeader
                title="titulo da aula"
                subtitle="descriçaõ aula"
            />
            
            <PlayerClass
                title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!"
                playing={true}
                done={false}
                onCheck={() => console.log("check")}
                onPlay={() => console.log("play")}
            />
        </>
    );
}
