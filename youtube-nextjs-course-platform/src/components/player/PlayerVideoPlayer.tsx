'use client';

import dynamic from 'next/dynamic';
// import ReactPlayer from 'react-player';

const ReactPlayer = dynamic(() => import('react-player'), {
    ssr: false,
});

interface IPlayerVideoPlayerProps {
    videoId: string,

}

export const PlayerVideoPlayer = ({
    videoId
}: IPlayerVideoPlayerProps) => {
    return (
        <>
            <ReactPlayer 
                height={'100%'}
                width={'100%'}
                playing={true}
                controls={true}
                src={`https://www.youtube.com/watch?v=${videoId}`}
            />
        </>
    );
};
