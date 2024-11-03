import '../../styles/styles.css';
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function Videoplayer ({image}) {

    return (
            <div className="section__video--container">
            <video className="section__video--player"
            poster={image}
            controls
            type="video/mp4">Your browser does not support video tag
            </video>
        </div>
    );
}
export default Videoplayer;