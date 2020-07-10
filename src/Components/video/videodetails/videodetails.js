import React from "react";
import classes from './videodetails.css';
export default (props) => {
    if (!props.video) return <div style={{marginTop:'65px'}}>Loading...</div>;

    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;
    return (
        <div class="videodetail">
            <div class="abc">
            <iframe
                frameBorder="0"
                title="Video Player"
                src={videoSrc}
            />
            </div>
            <div class="cde">
            <b>{props.video.snippet.title}</b>
            </div>
        </div>
    );
}
