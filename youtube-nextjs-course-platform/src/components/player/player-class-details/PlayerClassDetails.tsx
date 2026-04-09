'use client';

import { useEffect, useMemo, useRef, useState } from "react";

import { IPlayerClassHeaderProps, PlayerClassHeader } from "./components/PlayerClassHeader";
import { IPlayerVideoPlayerRef, PlayerVideoPlayer } from "./components/PlayerVideoPlayer";
import { CourseHeader, ICourseHeaderProps } from "../../course-header/CourseHeader";
import { IPlayerClassGroupProps } from "../playlist/components/PlayerClassGroup";
import { MdComment, MdThumbUp, MdVisibility } from "react-icons/md";
import { PlayerPlaylist } from "../playlist/PlayerPlaylist";
import { Comments } from "./components/comments/Comments";
import { useRouter } from 'next/navigation';

import * as Tabs from "@radix-ui/react-tabs";
import Link from "next/link";

interface IPlayerClassDetailsProps {
    course: ICourseHeaderProps & {
        classGroups: Pick<IPlayerClassGroupProps, 'title' | 'classes'>[],
        id: string,
    },
    classItem: Omit<IPlayerClassHeaderProps, "onTimeClick"> & {
        viewsCount: number,
        likesCount: number,
        commentsCount: number,
        id: string,
    },
}

export const PlayerClassDetails =  ({
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
        const classes = course.classGroups.flatMap(classGroup => classGroup.classes);
        const currentClassIndex = classes.findIndex(cl => cl.classId === classItem.id);
        const nextClassIndex = currentClassIndex + 1;
        if(nextClassIndex === classes.length) {
            return undefined;
        }
        return classes[nextClassIndex].classId;
    }, [classItem.id, course.classGroups]);

    return (
        <div className="flex-1 overflow-auto">
            <div>
                <PlayerVideoPlayer
                    videoId={classItem.id}
                    ref={playerVideoPlayerRef}
                    onPlayNext={() => nextClassId ? router.push(`/player/${course.id}/${nextClassId}`): {}}
                />
            </div>


            <div className="flex gap-2 p-2 opacity-50">
                <div className="flex gap-1 items-center">
                    <MdVisibility/>
                    <span>{classItem.viewsCount}</span>
                    <span>
                        visualizações
                    </span>
                </div>

                <Link 
                    href={`https://youtube.com/watch?v=${classItem.id}`} 
                    target="_blank"
                    className="flex gap-1 items-center"
                >
                    <MdThumbUp/>
                    <span>{classItem.likesCount}</span>
                    <span>
                        curtidas
                    </span>
                </Link>

                <div className="flex gap-1 items-center">
                    <MdComment/>
                    <span>{classItem.commentsCount}</span>
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
                        playingClassId={classItem.id}
                        playingCourseId={course.id}
                        classGroups={course.classGroups}
                    />
                </Tabs.Content>

                <Tabs.Content
                    value='class-comments'
                    className="flex flex-col p-4"
                >
                    <Comments   
                        comments={[]}
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
