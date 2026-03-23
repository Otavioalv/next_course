import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { IPlayerClassProps, PlayerClass } from "./PlayerClass";

interface IPlayerClassGroupProps {
    position: number;
    open: boolean;
    title: string;
    classes: Omit<IPlayerClassProps, 'onPlay' | 'onCheck'>[];
    onToggle: () => void;
}

export const PlayerClassGroup = ({
    classes, 
    position,
    title,
    open,
    onToggle,
}: IPlayerClassGroupProps) => {


    return (
        <div    
            className="flex flex-col"
        >   

            <button    
                className="flex gap-2 p-4 bg-paper items-center"
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
                            onCheck={() => console.log("check")}
                            onPlay={() => console.log("play")}
                            {...playerClass}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
