import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { IPlayerClassProps, PlayerClass } from "./PlayerClass";

export interface IPlayerClassGroupProps {
    position: number;
    open: boolean;
    title: string;
    playingClassId: string, 
    classes: (Pick<IPlayerClassProps, 'title' | 'done'> & {classId: string})[];
    onPlay: (classId:string) => void;
    onCheck: (classId:string) => void;
    onToggle: () => void;
}

export const PlayerClassGroup = ({
    classes, 
    position,
    title,
    open,
    playingClassId,
    onToggle,
    onPlay, 
    onCheck,
}: IPlayerClassGroupProps) => {


    return (
        <div    
            className="flex flex-col"
        >   

            <button    
                className="flex gap-2 p-4 bg-paper items-center active:opacity-80 "
                onClick={onToggle}
            >
                <div className="bg-background rounded-full flex justify-center items-center w-12 h-12">
                    {position}
                </div>
                
                <div
                    className="flex items-start flex-col flex-1"
                >
                    <span className="font-bold text-start line-clamp-1">
                        {title}
                    </span>
                    <span className="text-sm font-light text-start line-clamp-1">
                        {classes.filter(cl => cl.done).length}/{classes.length} aulas
                    </span>
                </div>
                
                {open ? (
                    <MdKeyboardArrowDown size={28}/>
                ) : (
                    <MdKeyboardArrowRight size={28}/>
                )}
            </button>



            <ul 
                data-open={open}
                className="flex flex-col data-[open=false]:hidden"
            >
                {classes.map((playerClass) => (
                    <li key={playerClass.title}>
                        <PlayerClass
                            playing={playerClass.classId === playingClassId}
                            onCheck={() => onCheck(playerClass.classId)}
                            onPlay={() => onPlay(playerClass.classId)}
                            {...playerClass}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
