import React from'react';
import '../../styles/styles.css';
import preview from "../../assets/images/Upload-video-preview.jpg";

function Videoplayer () {
    return (
        <div className="video__container">
            <video className="video__player" src={videoUrl}
            poster={preview}
            controls type="video/mp4"></video>
        </div>
    )
}
export default Videoplayer;