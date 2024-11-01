import React from'react';
import '../../styles/styles.css';
import viewIcon from "../../assets/images/icons/views.svg";
import likeIcon from "../../assets/images/icons/likes.svg";

function VideoDescription ({title, description, channel, date, views,likes,commentNo}) {
return (
    <div className="description">
        <h1 className="description__title">{title}</h1>
        <div className="description__card">
            <div className="description__left">
                <h3 className="description__left--author">By: {channel}</h3>
                <div className="description__left--date">{date}</div>
            </div>
            <div className="description__right">
                <div className="description__right--view">
                    <img src={viewIcon} alt="eye icon" className="description__right-view-img"/>
                    <span>{views.toLocaleString()}</span>
                </div>
                <div className="description__right--like">
                    <img src={likeIcon} alt="heart icon" className="description__right-like-img"/>
                    <span>{likes.toLocaleString()}</span>
                </div>
            </div>
        </div>
        <p className="description__text">{description}</p>
        <div className="description__comment-count">{commentNo} Comments</div>
    </div>
)
}
export default VideoDescription;