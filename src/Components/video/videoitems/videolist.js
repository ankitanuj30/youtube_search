import React from "react";
import VideoItem from "./videoitems"
import classes from './videolist.css';

const Videolist= (props) => {
    
  const listOfVideos = props.videos.map((video,id) =>
  {
   return(
       <div >
    <VideoItem 
      onVideoSelect={props.onVideoSelect}
      key={id}
      video={video}
    />
    </div>
   )
   })
  

  return (
    <div >
      {listOfVideos}
    </div>
  );
}
export default Videolist;
