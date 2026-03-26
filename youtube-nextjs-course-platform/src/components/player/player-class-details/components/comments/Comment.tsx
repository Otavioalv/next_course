import Image from "next/image";
import { MdArrowDropDown, MdThumbUp } from "react-icons/md";




export const Comment = () => {
    return (
        <div className="flex gap-2 items-start">

            <Image
                src="https://placehold.co/1000x1000/EEE/31343C"
                alt="userImg"
                width={40}
                height={40}
                draggable={false}
                className="rounded-full"
            />
            
            <div className="bg-paper flex-1 flex flex-col gap-4 p-2 rounded-sm">
                
                <div className="flex gap-4 items-center">
                    
                    <span className="font-bold">
                        Nome do usuario
                    </span>

                    <span className="font-extrabold text-xs opacity-50">
                        data e hora
                    </span>

                </div>
                
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum recusandae obcaecati beatae corporis tempore deleniti inventore nam, maxime, quasi doloribus vitae amet minima incidunt cumque veniam eveniet ullam voluptate fugiat.
                </p>
                
                <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                        <MdThumbUp/>
                        <span>N</span>
                    </div>

                    <button 
                        className="flex items-center gap-1 text-primary"

                    >
                        <MdArrowDropDown size={24}/>
                        <span>
                            Ver respostas (N)
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};
