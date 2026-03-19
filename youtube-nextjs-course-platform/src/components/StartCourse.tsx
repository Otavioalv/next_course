'use client';
import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";
import { useInView } from "react-intersection-observer";



interface IStartCourseProps {
    idClass: string,
    idCourse: string,
    imageUrl: string,
    title: string,
}

export const StartCourse = ({
    idClass,
    idCourse,
    imageUrl,
    title,
}: IStartCourseProps) => {
    const [ref, inView] = useInView({threshold: 0.2, initialInView: true});

    return (
        <>
            <div 
                ref={ref}
                className="p-3 bg-paper rounded-md flex flex-col gap-4 md:sticky md:top-[104]"> 
                <Link 
                    href={`/player/${idCourse}/${idClass}`}
                    style={{backgroundImage: `url(${imageUrl})`}}
                    className="w-full bg-cover bg-no-repeat aspect-video bg-center rounded overflow-hidden"
                >
                    <div className="w-full h-full flex items-center justify-center bg-background opacity-0 hover:opacity-70 transition-opacity">
                        <MdPlayCircleOutline size={58}/>
                    </div>
                </Link>

                <Link 
                    href={`/player/${idCourse}/${idClass}`}
                    className="bg-primary p-2 px-3 rounded text-center no-underline"
                >
                    Começar curso
                </Link>
            </div>

            {!inView && (
                <div className='p-3 px-2 bg-paper flex gap-4 absolute flex-col left-0 right-0 top-10'>
                    <h1 className="font-extrabold text-xl">
                        {title}
                    </h1>
                    
                    <Link 
                        href={`/player/${idCourse}/${idClass}`}
                        className="bg-primary p-2 px-3 rounded text-center"
                    >
                        Começar curso
                    </Link>
                </div>
            )}
        </>
    );
};
