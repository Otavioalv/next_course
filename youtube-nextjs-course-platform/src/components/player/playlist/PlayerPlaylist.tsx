import { useState } from "react";
import { IPlayerClassGroupProps, PlayerClassGroup } from "./components/PlayerClassGroup";
import { useRouter } from "next/navigation";

interface IPlayerPlaylistProps {
    playingClassId: string, 
    playingCourseId: string,
    classGroups: Pick<IPlayerClassGroupProps, 'title' | 'classes'>[],
}

export const PlayerPlaylist = ({classGroups, playingClassId, playingCourseId}: IPlayerPlaylistProps) => {
    const [openedIndex, setOpenedIndex] = useState<number | undefined>(
        classGroups.findIndex(classGroup => classGroup.classes.some(classItem => classItem.classId === playingClassId))
    );

    const router = useRouter();


    return (
        <div className="flex flex-col gap-2 max-h-full"> 
            <div className="flex flex-col p-4 bg-paper">
                <h3 className="text-lg font-bold"> 
                    Conteudo/titulo curso
                </h3>
            </div>
            
            <ul className="overflow-auto">
                {classGroups.map((cg, i) => (
                    <li key={cg.title}>
                        <PlayerClassGroup
                            position={i + 1}
                            onToggle={() => setOpenedIndex(openedIndex === i ? undefined : i)}

                            onCheck={(classId) => console.log("teste")}
                            onPlay={(classId) => router.push(`/player/${playingCourseId}/${classId}`)}
                            playingClassId={playingClassId}
                            open={openedIndex === i}
                            {...cg}
                        />
                    </li>
                ))}
            </ul> 
        </div>
    );
};
