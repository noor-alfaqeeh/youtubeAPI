import React from 'react';

const VideoItem = ({video , handleVideoSelect}) =>{

    return(
        <table class="table table-borderless" >
        <tbody>
        <div onClick={() => handleVideoSelect(video)}>
           
                    <tr>

            <td>
                <img 
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.description} /></td>
           
                <td><h6>{video.snippet.title}</h6><hr/>
                    <h6>{video.snippet.publishedAt}</h6>
                </td>
                
            
              </tr>
              </div>
               </tbody>
        </table>
        
        
    )
};

export default VideoItem;