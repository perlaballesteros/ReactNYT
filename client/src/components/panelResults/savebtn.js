import React from "react";
const SaveBtn = props => (
    <button onClick={()=>props.saveArticle(props.title,props.link,props.date)} className="butterflies">Save</button>
);

export default SaveBtn;