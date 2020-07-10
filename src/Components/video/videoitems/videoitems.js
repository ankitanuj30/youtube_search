import React from "react";
import classes from './videolist.css';
export default ({ video, onVideoSelect }) => {
  return (
      <div onClick={() => onVideoSelect(video)} class="c" >
        <img  alt="thumbnail" src={video.snippet.thumbnails.medium.url}   />
          <p>{video.snippet.title}</p>
      </div>
  );
}