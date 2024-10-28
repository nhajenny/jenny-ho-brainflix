import React from'react';
import '../../styles/styles.css';


function Videoplayer ({videoData}) {
    return (
        <div className="video__container">
            <video className="video__player"
            src={videoData.video}
            poster={videoData.image}
            controls
            type="video/mp4">Your browser does not support video tag
            </video>
        </div>
    );
}
export default Videoplayer;