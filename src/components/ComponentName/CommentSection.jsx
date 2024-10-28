import React, {useState} from 'react';
import "../../styles/styles.css";

function CommentSection ({author,date,comment}) {
    return (
        <div className="comment__container">
            <div className="comment__profile">
            </div>
            <div className="comment__right">
                <div className="comment__top">
                    <div className="comment__top--name">{author}</div>
                    <div className="comment__top--date">{date}</div>
                </div>
                <div className="comment__bottom">{comment}</div>
            </div>
        </div>
    )
}
export default CommentSection;