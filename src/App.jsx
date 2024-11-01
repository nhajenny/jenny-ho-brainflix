import { useEffect,useState } from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header';
import Videoplayer from './components/Videoplayer/Videoplayer.jsx';
import videoData from './data/video-details.json';
import VideoDescription from "./components/VideoDescription/VideoDescription.jsx"
import CommentForm from './components/Comment/Comment.jsx';
import CommentSection from './components/CommentSection/CommentSection.jsx';
import NextVideos from './components/NextVideo/NextVideo.jsx';
import Homepage from './pages/Homepage/Homepage.jsx';
import Upload from './pages/Upload/Upload.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/videos/:videoId" element={<Homepage/>}/>
        <Route path="Upload" element={<Upload/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
