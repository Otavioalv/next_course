import Link from "next/link";
import { MdPlayCircle } from "react-icons/md";


export const KeepWatching = () => {
    return (
        <Link
            href={`/player/{courseId}/{classId}`}
            className="p-4 mx-4 flex justify-between bg-primary rounded-2xl hover:no-underline"
        >   
            <div 
                className="flex flex-col gap-2"
            >
                <h1
                    className="font-bold line-clamp-1"
                >
                    Titulo da aula
                </h1>
                <p 
                    className="line-clamp-1"
                >
                    Subtitulo?
                </p>
            </div>

            <div
                className="flex justify-center items-center gap-2"
            >
                <span 
                    className="hidden md:block"
                >
                    Continuar Assistindo
                </span>
                <MdPlayCircle size={28}/>
            </div>
        </Link>
    );
};