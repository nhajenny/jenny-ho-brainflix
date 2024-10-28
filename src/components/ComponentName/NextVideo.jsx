import React from 'react';
import "../../styles/styles.css";

function NextVideos ({preview, title, channel}) {
    return(
        <div className="nextvideos">
        <h2 className="nextvideos__title">NEXT VIDEOS</h2>
        <div className="nextvideos__container">
            <div className="nextvideos__card">
                <div className="nextvideos__card--left{">
                    <img src={preview} alt="video preview" className="nextvideos__img"/>
                </div>
                <div className="nextvideos__card--right">
                    <h2 className="nextvideos__title">{title}</h2>
                    <div className="nextvideos__author">{channel}</div>
                </div>
            </div>
        </div>
    </div>
    )  
}

export default NextVideos;