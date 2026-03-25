'use client';

import { use } from "react"; // 1. Importe o hook use do React
import { PlayerClass, PlayerClassDetails, PlayerClassGroup, PlayerHeader, PlayerPlaylist, PlayerVideoPlayer } from "@/src/components/player";

interface IPagePlayerProps {
    params: Promise<{
        classId: string;
        courseId: string;
    }>;
}

export default function PagePlayer({
    params
}: IPagePlayerProps) {
    const { classId, courseId } = use(params);

    const classGroups = [ 
                            {
                                title: "titulo da aula titulo da aula titulo da aulatitulo da aulatitulo da aulatitulo da aulatitulo da aulatitulo da aula ",
                                classes: [
                                    {
                                        title: "1Loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Loremipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                                        done: true,
                                        classId: "1Loremipsum", 
                                    },
                                    {
                                        title: "2Loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Loremipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                                        done: false,
                                        classId: "2Loremipsum", 
                                    },
                                    {
                                        title: "3Loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Loremipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                                        done: false,
                                        classId: "3Loremipsum", 
                                    },
                                    {
                                        title: "4Loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Loremipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                                        done: true,
                                        classId: "4Loremipsum", 
                                    }
                                ],
                            },
                            {
                                title: "titulo da aula titulo da aula titulo da aulatitulo da aulatitulo da aulatitulo da aulatitulo da aulatitulo da aula ",
                                classes: [
                                    {
                                        title: "1Loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Loremipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                                        done: true,
                                        classId: "1Loremipsum", 
                                    },
                                    {
                                        title: "2Loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Loremipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                                        done: false,
                                        classId: "2Loremipsum", 
                                    },
                                    {
                                        title: "3Loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Loremipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                                        done: false,
                                        classId: "3Loremipsum", 
                                    },
                                    {
                                        title: "4Loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Loremipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                                        done: true,
                                        classId: "4Loremipsum", 
                                    }
                                ],
                            },
                            {
                                title: "titulo da aula titulo da aula titulo da aulatitulo da aulatitulo da aulatitulo da aulatitulo da aulatitulo da aula ",
                                classes: [
                                    {
                                        title: "1Loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Loremipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                                        done: true,
                                        classId: "1Loremipsum", 
                                    },
                                    {
                                        title: "2Loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Loremipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                                        done: false,
                                        classId: "2Loremipsum", 
                                    },
                                    {
                                        title: "3Loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Loremipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                                        done: false,
                                        classId: "3Loremipsum", 
                                    },
                                    {
                                        title: "4Loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Loremipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                                        done: true,
                                        classId: "4Loremipsum", 
                                    }
                                ],
                            },
                            {
                                title: "titulo da aula titulo da aula titulo da aulatitulo da aulatitulo da aulatitulo da aulatitulo da aulatitulo da aula ",
                                classes: [
                                    {
                                        title: "1Loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Loremipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                                        done: true,
                                        classId: "1Loremipsum", 
                                    },
                                    {
                                        title: "2Loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Loremipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                                        done: false,
                                        classId: "2Loremipsum", 
                                    },
                                    {
                                        title: "3Loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Loremipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                                        done: false,
                                        classId: "3Loremipsum", 
                                    },
                                    {
                                        title: "4Loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Loremipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                                        done: true,
                                        classId: "4Loremipsum", 
                                    }
                                ],
                            },
                            {
                                title: "2 titulo da aula",
                                classes: [
                                    {
                                        title: "5Loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Loremipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                                        done: true,
                                        classId: "5Loremipsum", 
                                    },
                                    {
                                        title: "6Loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Loremipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                                        done: false,
                                        classId: "6Loremipsum", 
                                    },
                                    {
                                        title: "7Loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Loremipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                                        done: false,
                                        classId: "7Loremipsum", 
                                    },
                                    {
                                        title: "8Loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Loremipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                                        done: true,
                                        classId: "8Loremipsum", 
                                    }
                                ],
                            },
                            {
                                title: "3 titulo da aula",
                                classes: [
                                    {
                                        title: "9Loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Loremipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                                        done: true,
                                        classId: "9Loremipsum", 
                                    },
                                    {
                                        title: "10Loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Loremipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                                        done: false,
                                        classId: "10Loremipsum", 
                                    },
                                    {
                                        title: "11Loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Loremipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                                        done: false,
                                        classId: "11Loremipsum", 
                                    },
                                    {
                                        title: "12Loremipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe doloribus! Ipsam voluptate consectetur, ex facilis at optio, eaque debitis incidunt tempora alias deleniti repellat, rerum saepe laboriosam omnis aut. Loremipsum dolor sit amet, consectetur adipisicing elit. Non inventore explicabo amet in deleniti impedit, ipsam quaerat error eaque at eum iusto vitae doloribus tenetur voluptatum repellendus odio. Error, doloribus!",
                                        done: true,
                                        classId: "12Loremipsum", 
                                    }
                                ],
                            }
                    ];

    return (
        <main className="flex flex-col gap-2 h-screen">
            <PlayerHeader
                title="titulo da aula"
                subtitle="descrição aula"
            />

            <div className="flex gap-2 h-[calc(100vh-74px)]"> 
                <div className="w-96">
                    <PlayerPlaylist
                        playingClassId={classId}
                        playingCourseId={courseId}
                        classGroups={classGroups}
                    />
                </div>

                <PlayerClassDetails
                    playingClassId={classId}
                    playingCourseId={courseId}
                    classGroups={classGroups}
                />
            </div>
        </main>
    );
}