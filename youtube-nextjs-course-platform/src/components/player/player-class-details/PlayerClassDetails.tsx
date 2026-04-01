'use client';

import { useEffect, useMemo, useRef, useState } from "react";
import { IPlayerClassGroupProps } from "../playlist/components/PlayerClassGroup";
import { IPlayerVideoPlayerRef, PlayerVideoPlayer } from "./components/PlayerVideoPlayer";
import { useRouter } from 'next/navigation';
import * as Tabs from "@radix-ui/react-tabs";
import { CourseHeader, ICourseHeaderProps } from "../../course-header/CourseHeader";
import { IPlayerClassHeaderProps, PlayerClassHeader } from "./components/PlayerClassHeader";
import { Comments } from "./components/comments/Comments";
import { PlayerPlaylist } from "../playlist/PlayerPlaylist";
import { MdComment, MdThumbUp, MdVisibility } from "react-icons/md";

interface IPlayerClassDetailsProps {
    course: ICourseHeaderProps,
    classItem: Omit<IPlayerClassHeaderProps, "onTimeClick">,
    playingClassId: string,
    playingCourseId: string,
    classGroups: Pick<IPlayerClassGroupProps, 'title' | 'classes'>[],
    
}

export const PlayerClassDetails =  ({
    playingClassId,
    playingCourseId,
    classGroups,
    classItem,
    course,
}: IPlayerClassDetailsProps) => {
    const router = useRouter();

    const [currentTab, setCurrentTab] = useState<string>("class-details");

    const playerVideoPlayerRef = useRef<IPlayerVideoPlayerRef | null>(null); 


    useEffect(() => {
        const matchMedia = window.matchMedia("min-width: 768px");

        const handleMatchMedia = (e: MediaQueryListEvent) => {
            if(e.matches && currentTab === "course-playlist") {
                setCurrentTab("class-details");
            }
        };

        matchMedia.addEventListener("change", handleMatchMedia);
        return () => matchMedia.removeEventListener("change", handleMatchMedia);
    }, [currentTab]);


    const nextClassId = useMemo(() => {
        const classes = classGroups.flatMap(classGroup => classGroup.classes);
        const currentClassIndex = classes.findIndex(classItem => classItem.classId === playingClassId);
        const nextClassIndex = currentClassIndex + 1;
        if(nextClassIndex === classes.length) {
            return undefined;
        }
        return classes[nextClassIndex].classId;
    }, [classGroups, playingClassId]);

    return (
        <div className="flex-1 overflow-auto">
          

            <div className="flex gap-2 p-2">
                <div>
                    <MdVisibility/>
                    <span>
                        visualizações
                    </span>
                </div>

                <div>
                    <MdThumbUp/>
                    <span>
                        curtidas
                    </span>
                </div>

                <div>
                    <MdComment/>
                    <span>
                        comentarios
                    </span>
                </div>
            </div>


            <Tabs.Root 
                value={currentTab}
                onValueChange={value => setCurrentTab(value)}
            >
                <Tabs.List className="flex gap-4 border-b border-b-paper">

                    <Tabs.Trigger
                        value='class-details'
                        className="p-2 flex items-center justify-center border-transparent data-[state=active]:border-primary border-b-4"
                    >
                        Detalhes
                    </Tabs.Trigger>
                    
                    <Tabs.Trigger
                        value="course-playlist"
                        className="p-2 flex items-center justify-center border-transparent data-[state=active]:border-primary border-b-4 md:hidden"
                    >
                        Conteudo do curso
                    </Tabs.Trigger>

                    <Tabs.Trigger
                        value='class-comments'
                        className="p-2 flex items-center justify-center border-transparent data-[state=active]:border-primary border-b-4"
                    >
                        Comentarios
                    </Tabs.Trigger>

                    <Tabs.Trigger
                        value='course-comments'
                        className="p-2 flex items-center justify-center border-transparent data-[state=active]:border-primary border-b-4"
                    >
                        Curso
                    </Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content
                    value='class-details'
                    className="flex flex-col p-4"
                >
                    <PlayerClassHeader
                        onTimeClick={seconds => playerVideoPlayerRef.current?.setProgress(seconds)}
                        {...classItem}
                    />
                </Tabs.Content>

                <Tabs.Content 
                    value="course-playlist"
                    className="flex flex-col p-4"
                >
                    <PlayerPlaylist
                        playingClassId={playingClassId}
                        playingCourseId={playingCourseId}
                        classGroups={classGroups}
                    />
                </Tabs.Content>

                <Tabs.Content
                    value='class-comments'
                    className="flex flex-col p-4"
                >
                    <Comments   
                        comments={[
                            { 
                                content: "comentario",
                                likesCount: 2,
                                publishDate: "data",
                                author: {
                                    image: "",
                                    userName: "",
                                },
                                replies: [
                                    {
                                        author: {
                                            image: "url do comentario",
                                            userName: "nome do autor"
                                        },
                                        content: "Comentario",
                                        likesCount: 123,
                                        publishDate: "12/12/1231",
                                    },
                                    {
                                        author: {
                                            image: "url do comentario",
                                            userName: "nome do autor"
                                        },
                                        content: "Comentario",
                                        likesCount: 123,
                                        publishDate: "12/12/1231",
                                    },
                                    {
                                        author: {
                                            image: "url do comentario",
                                            userName: "nome do autor"
                                        },
                                        content: "Comentario",
                                        likesCount: 123,
                                        publishDate: "12/12/1231",
                                    },
                                    {
                                        author: {
                                            image: "url do comentario",
                                            userName: "nome do autor"
                                        },
                                        content: "Comentario",
                                        likesCount: 123,
                                        publishDate: "12/12/1231",
                                    },
                                ]
                            },
                            { 
                                content: "comentario",
                                likesCount: 2,
                                publishDate: "data",
                                author: {
                                    image: "",
                                    userName: "",
                                },
                                replies: undefined
                            },
                            { 
                                content: "comentario",
                                likesCount: 2,
                                publishDate: "data",
                                author: {
                                    image: "",
                                    userName: "",
                                },
                                replies: undefined
                            },
                            { 
                                content: "comentario",
                                likesCount: 2,
                                publishDate: "data",
                                author: {
                                    image: "",
                                    userName: "",
                                },
                                replies: undefined
                            },
                            { 
                                content: "comentario",
                                likesCount: 2,
                                publishDate: "data",
                                author: {
                                    image: "",
                                    userName: "",
                                },
                                replies: undefined
                            },
                            { 
                                content: "comentario",
                                likesCount: 2,
                                publishDate: "data",
                                author: {
                                    image: "",
                                    userName: "",
                                },
                                replies: undefined
                            },
                            { 
                                content: "comentario",
                                likesCount: 2,
                                publishDate: "data",
                                author: {
                                    image: "",
                                    userName: "",
                                },
                                replies: undefined
                            },

                        ]}
                    />
                </Tabs.Content>

                <Tabs.Content
                    value='course-comments'
                    className="flex flex-col p-4"
                >
                    <CourseHeader
                        {...course}
                    />
                </Tabs.Content>
            </Tabs.Root>
        </div>
    );
};
