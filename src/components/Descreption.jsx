import React from 'react';


const VideoDetails = ({video}) => {
    if (!video){
        return <div align='center' className="mt-sm-5">Search on my Youtube API App </div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    
    return (
       
        <div className='mt-sm-4'>
            <div>
            <iframe width="1200" height="590" src={videoSrc} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='allowfullscreen' title='video'></iframe>
            </div>
            <div>
                <h5>{video.snippet.title}</h5>
                <h6 className='text-muted'>Published at:  {video.snippet.publishedAt}</h6>
                <h6>{video.snippet.description}</h6>
               
            </div>
        </div>
       
    )
}

export default VideoDetails;