"use client";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Card, ICardProps } from "../card/Card";
import { useRef } from "react";


interface ISectionProps {
    title: string;
    items: ICardProps[];
    variant: 'grid' | 'h-list';
}

export const Section = ({title, items, variant="grid"}: ISectionProps) => {
    const scrollRef = useRef<HTMLUListElement>(null);


    const handleScroll = (scroll: number) => {
        scrollRef.current?.scrollTo({
            left: scrollRef.current.scrollLeft + scroll,
            behavior: "smooth",
        });
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
                data-variant={variant}
                className="grid grid-cols-1 gap-4 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto"
            >
                <button 
                    onClick={() => handleScroll(-300)}
                    className="w-14 h-14 bg-primary rounded-full flex items-center justify-center sticky my-auto left-0 -ml-14"
                >
                    <MdKeyboardArrowLeft size={32}/>
                </button>
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
                <button 
                    onClick={() => handleScroll(300)}
                    className="w-14 h-14 bg-primary rounded-full flex items-center justify-center sticky my-auto right-0 -ml-14"
                >
                    <MdKeyboardArrowRight size={32}/>
                </button>
            </ul>
        </section>
    );
};
