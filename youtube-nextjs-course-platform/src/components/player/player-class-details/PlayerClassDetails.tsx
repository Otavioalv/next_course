'use client';

import { useMemo } from "react";
import { IPlayerClassGroupProps } from "../playlist/components/PlayerClassGroup";
import { PlayerVideoPlayer } from "./components/PlayerVideoPlayer";
import { useRouter } from 'next/navigation';
import * as Tabs from "@radix-ui/react-tabs";
import { CourseHeader, ICourseHeaderProps } from "../../course-header/CourseHeader";
import { IPlayerClassHeaderProps, PlayerClassHeader } from "./components/PlayerClassHeader";

interface IPlayerClassDetailsProps {
    course: ICourseHeaderProps,
    classItem: IPlayerClassHeaderProps,
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
            <div
                className="aspect-video relative"
            >
                <PlayerVideoPlayer
                    videoId="bP47qRVRqQs"
                    onPlayNext={() => nextClassId ? router.push(`/player/${playingCourseId}/${nextClassId}`) : {}}
                />
            </div>

            <Tabs.Root defaultValue="class-details">
                <Tabs.List className="flex gap-4 border-b border-b-paper">

                    <Tabs.Trigger
                        value='class-details'
                        className="p-2 flex items-center justify-center border-transparent data-[state=active]:border-primary border-b-4"
                    >
                        Detalhes
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
                    className="flex flex-col py-4"
                >
                    <PlayerClassHeader
                        {...classItem}
                    />
                </Tabs.Content>

                <Tabs.Content
                    value='class-comments'
                    className="flex flex-col py-4"
                >
                    Comentarios da aula
                </Tabs.Content>

                <Tabs.Content
                    value='course-comments'
                    className="flex flex-col py-4"
                >
                    <CourseHeader
                        {...course}
                    />
                </Tabs.Content>
            </Tabs.Root>
        </div>
    );
};
