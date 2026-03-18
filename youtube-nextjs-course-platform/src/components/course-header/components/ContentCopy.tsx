'use client';

import React, { useEffect, useState } from "react";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { MdCheck, MdContentCopy } from "react-icons/md";


interface IContentCopy  {
    title: string;
    content: string;
    children: React.ReactNode;
}

export const ContentCopy = ({
    children,
    content,
    title,
}: IContentCopy) => {
    const [copied, setCopied]= useState(false);

    useEffect(() => {
        if(copied) {
            setTimeout(() => {
                setCopied(false);
            }, 2000     );
        }
    }, [copied]);


    const handleCopy = () => {
        setCopied(true);
        window.navigator.clipboard.writeText(content);
    };

        

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                {children}
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content className="p-2 bg-paper border border-primary rounded-lg flex flex-col gap-2 min-w-72">
                    <span>
                        {title}
                    </span>

                    <div 
                        className="flex items-center gap-1"
                         
                    >
                        <input 
                            value={content}
                            readOnly
                            autoFocus
                            onFocus={e => e.target.select()}
                            className={"bg-background p-1 px-2 rounded"}
                            type="text" 
                        />

                        <button 
                            className="p-1"
                            onClick={handleCopy}
                        >
                            {copied ? <MdCheck className="text-primary"/>: <MdContentCopy/>}
                        </button>
                    </div>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};
