'use client';

import { use } from "react"; // 1. Importe o hook use do React
import { PlayerClass, PlayerClassGroup, PlayerHeader } from "@/src/components/player";

interface IPagePlayerProps {
    // 2. Atualize a tipagem para indicar que params é uma Promise
    params: Promise<{
        classId: string;
        courseId: string;
    }>;
}

export default function PagePlayer({
    params
}: IPagePlayerProps) {
    const { classId, courseId } = use(params);

    return (
        <main className="flex flex-col">
            <PlayerHeader
                title="titulo da aula"
                subtitle="descrição aula"
            />
            
            <PlayerClassGroup
                title="titulo da aula"
                open={true}
                position={23}
                onToggle={() => console.log("toogle")}
                classes={[
                    {
                        title: "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                        playing: false,
                        done: true,
                    },
                    {
                        title: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                        playing: false,
                        done: false,
                    },
                    {
                        title: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                        playing: true,
                        done: false,
                    },
                    {
                        title: "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                        playing: false,
                        done: true,
                    }
                ]}
            />
        </main>
    );
}