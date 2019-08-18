import React from 'react';
import VideoItem from './oneVideo'


const List = ({ videos , handleVideoSelect }) => {
    const chosenVideos = videos.map((video)=>{
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect}/>
        
    });
    return <div >{chosenVideos}</div>
}

export default List;