'use client';

import React, { useState } from "react";


interface ICollapsibleText {
    numberOfLinesWhenClosed: number,
    children: React.ReactNode,
}

export const CollapsibleText = ({
    numberOfLinesWhenClosed,
    children
}: ICollapsibleText) => {
    const [open, setOpen] = useState<boolean>(false);



    return (
        <div className="flex flex-col items-end">
            <p 
                data-open={open}
                className="data-[open=false]:line-clamp-(--number-of-lines-when-closed)"
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                style={{'--number-of-lines-when-closed': numberOfLinesWhenClosed} as any}
            >
                {children}
            </p>
            
            <button 
                data-open={open}
                className="bg-paper rounded border border-primary px-2 data-[open=false]:-mt-7"
                onClick={() => setOpen(!open)}
            >
                {open ? "Ver menos": "Ver mais"}
            </button>
        </div>
    );
};
