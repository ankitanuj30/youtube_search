import React from "react";
import VideoCommentsItems from "./videocommentsitems.js"

const Videocomments= (props) => {
  const listOfComments = props.comment.map((comment,id) =>
    <VideoCommentsItems
      key={id}
      comment={comment}
    />
)
  

  return (
    <div >
      {listOfComments}
    </div>
  );
}
export default Videocomments;
