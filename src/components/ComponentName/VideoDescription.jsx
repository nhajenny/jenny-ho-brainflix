import React from'react';
import '../../styles/styles.css';
import viewIcon from "../../assets/images/icons/views.svg";
import likeIcon from "../../assets/images/icons/likes.svg";

function VideoDescription ({title, description, channel, date, views,likes}) {
return (
    <div className="description__container">
        <h1 className="description__title">{title}</h1>
        <div className="description__card">
            <div className="description__left">
                <h3 className="description__left--author">By: {channel}</h3>
                <div className="description__left--date">{date}</div>
            </div>
            <div className="description__right">
                <div className="description__right--views">
                    <img src={viewIcon} alt="eye icon" className="description__right-view-img">{views}</img>
                    <img src={likeIcon} alt="heart icon" className="description__right-like-img">{likes}</img>
                </div>
            </div>
        </div>
        <p>{description}</p>
    </div>
)
}
export default VideoDescription;