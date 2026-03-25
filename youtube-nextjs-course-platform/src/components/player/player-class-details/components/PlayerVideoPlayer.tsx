'use client';

import dynamic from 'next/dynamic';
import { forwardRef, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { MdPlayCircle } from 'react-icons/md';
// import ReactPlayer from 'react-player';
import type TReactPlayer from 'react-player';

import type { ReactPlayerProps } from 'react-player';

const ReactPlayer = dynamic(() => import('react-player'), {
    ssr: false,
});
interface IPlayerVideoPlayerProps {
    videoId: string;
    onPlayNext: () => void;

}

export interface IPlayerVideoPlayerRef {
    setProgress:  (seconds: number) => void;
}

export const PlayerVideoPlayer = forwardRef<IPlayerVideoPlayerRef, IPlayerVideoPlayerProps>(
    ({onPlayNext, videoId}, playerRefFromFoward) => {
        
        const wrapperRef = useRef<HTMLDivElement |null>(null);
        const playerRef = useRef<TReactPlayer |null>(null);

        const [progress, setProgress] = useState<number | undefined>(undefined);
        const [totalDuration, setTotalDuration] = useState<number | undefined>(undefined);

        const secondsUntilEnd = useMemo(() => {
            if(!totalDuration || !progress) return undefined;
            
            return Number((totalDuration - progress).toFixed(0));
        }, [totalDuration, progress]);

        const showNextButton = useMemo(() => {
            return !! secondsUntilEnd && secondsUntilEnd <= 30;
        }, [secondsUntilEnd]);

        useImperativeHandle(playerRefFromFoward, () => {
            return {
                setProgress(seconds){
                    playerRef.current?.seekTo(seconds, 'seconds');
                    wrapperRef.current?.scrollIntoView({behavior: 'smooth'});
                },
            };
        }, []);

        return (
            <div ref={wrapperRef} className="h-full">
                {showNextButton && (
                    <button 
                        className='bg-primary p-2 px-4 rounded-lg font-bold flex justify-center items-center gap-2 absolute z-10 right-5 top-5'
                        onClick={onPlayNext}
                    >
                        Proxima aula em {secondsUntilEnd}
                        <MdPlayCircle size={20}/>
                    </button>
                )}

                <ReactPlayer 
                    // ref={playerRef}
                    height={'100%'}
                    width={'100%'}
                    
                    playing={true}
                    controls={true}

                    onProgress={({ playedSeconds }) => setProgress(playedSeconds)}
                    onEnded={() => onPlayNext()}
                    onDuration={(duration) => setTotalDuration(duration)}
                    onReady={(ref) => playerRef.current = ref}
                    
                    url={`https://www.youtube.com/watch?v=${videoId}`}
                />
            </div>
        );
    },
);

PlayerVideoPlayer.displayName = 'PlayerVideoPlayer';
