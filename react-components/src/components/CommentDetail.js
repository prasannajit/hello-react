import React from 'react';


const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.imageUrl}></img>
            </a>
            <div className="content">
                <a href="/" className="authot">{props.authorName}</a>
                <div className="metatdata">
                    <span className="date">{props.time}</span>
                </div>
                <div className="text">{props.comment}</div>
            </div>
        </div>
    )
};
export default CommentDetail;