'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdMenu, MdOutlineOpenInNew } from "react-icons/md";

export const Header = () => {
    const currentPath = usePathname();

    const [drawer, setDrawer] = useState(false);
    const [title, setTitle] = useState("CodarSe");

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTitle(document.title);
        setDrawer(false);
    }, [currentPath]);

    useEffect(() => {
        const handle = (e: KeyboardEvent) => {
          if(e.key === "Escape")   {
            setDrawer(false);
          }
        };

        window.addEventListener('keydown', handle);

        return () => window.removeEventListener('keydown', handle);
    }, []);

    return (
        <>
            <nav className="flex items-center justify-start bg-primary py-2 px-5 fixed top-0 right-0 left-0 sm:py-4 md:justify-center gap-5 "> 
                
                <button className="sm:hidden" onClick={() => setDrawer(true)}>
                    <MdMenu size={24}/>
                </button>

                <ul className="flex gap-4" tabIndex={drawer ? -1 : undefined}>
                    <li>
                        <Link 
                            href="/" 
                            className="border-2 rounded-md py-2 px-2 font-bold" 
                        >
                            CODARSE
                        </Link>
                    </li>
                    <li className="hidden sm:block">
                        <Link 
                            href="/" 
                            data-active={currentPath === "/"}
                            className="data-[active=true]:underline"
                        >
                            Pagina inicial
                        </Link>
                    </li>
                    <li className="hidden sm:block">
                        <Link 
                            href="/cursos" 
                            data-active={currentPath === "/cursos"}
                            className="data-[active=true]:underline"
                        >
                            Cursos
                        </Link>
                    </li>
                    <li className="hidden sm:block">
                        <Link href="https://codarse.com/blog" target="_blank" className="flex items-center justify-center gap-1">
                            Blog
                            <MdOutlineOpenInNew/>
                        </Link>
                    </li>
                </ul>


                <div
                    data-open={drawer}
                    onClick={() => setDrawer(false)}
                    tabIndex={drawer ? undefined : -1}
                    className="sm:hidden bg-linear-to-r from-background flex fixed top-0 left-0 bottom-0 right-0 transition-transform data-[open=false]:-translate-x-full"
                >
                    <ul className="flex gap-4 flex-col p-4 bg-background w-60 sm:hidden">
                        <li 
                            data-active={currentPath === "/"}
                            className="data-[active=true]:border-b-2 data-[active=true]:border-white"
                        >
                            <Link 
                                href="/" 
                                className=""
                            >
                                Pagina inicial
                            </Link>
                        </li>
                        <li 
                            data-active={currentPath === "/cursos"}
                            className="data-[active=true]:border-b-2 data-[active=true]:border-white"
                        >
                            <Link 
                                href="/cursos" 
                            >
                                Cursos
                            </Link>
                        </li>
                        <li className="">
                            <Link href="https://codarse.com/blog" target="_blank" className="flex items-center justify-center gap-1">
                                Blog
                                <MdOutlineOpenInNew/>
                            </Link>
                        </li>
                    </ul>
                </div>
                <h1 className='sm:hidden line-clamp-1'>
                    {/* {typeof document !== "undefined" ? document.title : ""} */}
                    {title}
                </h1>
            </nav>

            <div className="h-14 sm:h-[72px]"/>
        </>
    );
};
