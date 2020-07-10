import React from "react";
import classes from './videocommentsitems.css';
export default ({ comment }) => {
    if (!comment) return <div>Loading...</div>;
    return (
        <div class="qwe" >
            
            <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} />
            <b>{comment.snippet.topLevelComment.snippet.authorDisplayName}</b>
            <p>{comment.snippet.topLevelComment.snippet.textOriginal}</p>
            <p>likes={comment.snippet.topLevelComment.snippet.likeCount}</p>
        </div>
    );
}