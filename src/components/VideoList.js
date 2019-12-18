import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {

    const response = videos.map(val => {
        return <VideoItem key={val.id.videoId} onVideoSelect={onVideoSelect} video={val} />
    })

    return (
        <div className="ui relaxed divided list">{response}</div>
    )
}

export default VideoList;