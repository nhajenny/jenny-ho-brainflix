import { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/ComponentName/Header.jsx';
import Videoplayer from './components/ComponentName/Videoplayer.jsx';
import videoData from './data/video-details.json';
import VideoDescription from "./components/ComponentName/VideoDescription.jsx"

function App() {
const [videos, setVideos]=useState([]);
useEffect(() => {
  setVideos(videoData); 
}, []);
const mainVideo=videos.length >0 ? videos[0] : null;

  return (
    <div>
      <Header></Header>
      <section className="section__video">
        {mainVideo && (
          <div className="video-selected">
            <Videoplayer videoData={mainVideo}></Videoplayer>
          </div>
        )}
      </section>
      {mainVideo && (
      <VideoDescription
           title={mainVideo.title}
           description={mainVideo.description}
           channel={mainVideo.channel}
           date={mainVideo.timestamp}
           views={mainVideo.views}
           likes={mainVideo.likes}></VideoDescription>
          )}
    </div>
  )
}

export default App
