// import { Interweave } from "interweave";

import dynamic from "next/dynamic";
import { UrlMatcher } from "interweave-autolink";
import { useMemo } from "react";
import { MatcherInterface } from "interweave";

const Interweave = dynamic(() => import('interweave').then(result => result.Interweave), {ssr: false});


export interface IPlayerClassHeaderProps {
    title: string,
    description: string,
    onTimeClick: (seconds: number) => void,
}

export const PlayerClassHeader = ({
    description,
    title,
    onTimeClick,
}: IPlayerClassHeaderProps) => {
    const urlMatcher = useMemo(() => {
        return new UrlMatcher(
            'UrlMatcher', 
            {
                validateTLD: false,
            },
            ({url}) => (
                <a 
                    href={url} 
                    target="_blank"
                    className="text-primary no-underline hover:underline"
                >
                    {url}
                </a>
            )
        );
    }, []);


    const timeMatcher = useMemo(() => {
        const handleTimeClick = (time: string) => {
            // 0:00=[0,00], 00:00=[00,00], 0:00:00=[0,00,00], 00:00:00=[00,00,00]
            const [seconds=0, minute=0, hour=0] = time.split(":").reverse().map(num => parseInt(num));

            const resultSeconds = seconds + (minute * 60) + (hour * 3600);

            onTimeClick(resultSeconds);
        };

        return {
            propName: 'timeMatcher',
            inverseName: 'noTimeMatcher',
            asTag: () => 'button',

            match: (content: string) => {
            const result = content.match(/\b(\d{1,2}):(\d{2})(?::(\d{2}))?\b/);

            if (!result || result.index === undefined) return null;

            

            return {
                valid: true,
                match: result[0],
                index: result.index,
                length: result[0].length,
            };
            },

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            createElement: (children: any, props: any) => {
                const text = Array.isArray(children) ? children.join('') : children;

                return (
                    <button
                        key={props.key || text}
                        className="text-primary hover:underline hover:cursor-pointer"
                        onClick={() => handleTimeClick(String(children as string))}
                    >
                        {text}
                    </button>
                );
                
            },
        };
    }, [onTimeClick]);

    return (
        <div className="flex gap-2 flex-col">
            <h3 className="font-extrabold text-xl">
                {title}
            </h3>
            <Interweave
                content={description}
                matchers={[urlMatcher, timeMatcher]}
            />
        </div>
    );
};
