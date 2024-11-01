import React from'react';
import '../../styles/styles.css';


function Videoplayer ({videoData}) {
    return (

            <div className="section__video--container">
            <video className="section__video--player"
            src={videoData.video}
            poster={videoData.image}
            controls
            type="video/mp4">Your browser does not support video tag
            </video>
        </div>
        
    );
}
export default Videoplayer;