import React from "react";
const SaveBtn = props => (
    <button onClick={()=>props.saveArticle(props.title,props.link,props.date,props.description)} className="saveBtn">Save</button>
);

export default SaveBtn;