"use client";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Card, ICardProps } from "../card/Card";
import { UIEvent, useEffect, useRef, useState } from "react";


interface ISectionProps {
    title: string;
    items: ICardProps[];
    variant: 'grid' | 'h-list';
}

export const Section = ({title, items, variant="grid"}: ISectionProps) => {
    const scrollRef = useRef<HTMLUListElement>(null);

    const [scrollAt, setScrollAt] = useState<'start' | 'middle' | 'end'>('start');


    const handleScroll = (scroll: number) => {
        scrollRef.current?.scrollTo({
            left: scrollRef.current.scrollLeft + scroll,
            behavior: "smooth",
        });
    };

    // useEffect(() => {
        
    // }, []);

    const handleScrollEvent = (event: UIEvent<HTMLUListElement>) => {
        if(event.currentTarget.scrollLeft === 0) {
            setScrollAt('start');
        }else if((event.currentTarget.scrollWidth - event.currentTarget.clientWidth) === event.currentTarget.scrollLeft) {
            setScrollAt('end');
        }else {
            setScrollAt('middle');
        }
    };

    return (
        <section
            className="flex flex-col gap-4 px-4"
        >
            <h2 
                className="text-xl font-bold mb-4"
            >
                {title}
            </h2>

            <ul 
                ref={scrollRef}
                onScroll={handleScrollEvent}
                data-variant={variant}
                className="grid grid-cols-1 gap-4 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto"
            >

                {variant === "h-list" && (
                    <button 
                        disabled={scrollAt === 'start'}
                        onClick={() => handleScroll(-300)}
                        className="w-14 h-14 bg-primary rounded-full items-center justify-center sticky my-auto left-0 -ml-14 disabled:opacity-0 transition-opacity active:opacity-80 hidden sm:flex"
                    >
                        <MdKeyboardArrowLeft size={32}/>
                    </button>
                )}

                {items.map((item) => (
                    <li data-variant={variant} className="w-full data-[variant=h-list]:sm:w-72" key={item.title}>
                        <Card
                            description={item.description}
                            href={item.href}
                            image={item.image}
                            title={item.title}
                        />
                    </li>
                ))}

                {variant === "h-list" && (
                    <button 
                        disabled={scrollAt === 'end'}
                        onClick={() => handleScroll(300)}
                        className="w-14 h-14 bg-primary rounded-full items-center justify-center sticky my-auto right-0 -ml-14 disabled:opacity-0 transition-opacity active:opacity-80 hidden sm:flex"
                    >
                        <MdKeyboardArrowRight size={32}/>
                    </button>
                )}
            </ul>
        </section>
    );
};
