import React from "react";
const DeleteBtn = props => (
    <button onClick={()=>props.deleteArticle(props.articleId)} className="deleteBtn">delete</button>
);

export default DeleteBtn;