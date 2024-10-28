import { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/ComponentName/Header.jsx';
import Videoplayer from './components/ComponentName/Videoplayer.jsx';
import videoData from './data/video-details.json';

function App() {
const [videos, setVideos]=useState([]);
useEffect(() => {
  setVideos(videoData); 
}, []);

  return (
    <div>
      <Header></Header>
      <section className="section__video">
        {videos.length > 0 && (
          <div className="video-selected">
            <Videoplayer videoData={videos[0]}></Videoplayer>
          </div>
        )}
      </section>
    </div>
  )
}

export default App
