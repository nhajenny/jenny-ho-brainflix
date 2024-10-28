import { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/ComponentName/Header.jsx';
import Videoplayer from './components/ComponentName/Videoplayer.jsx';
import videoData from './data/video-details.json';
import VideoDescription from "./components/ComponentName/VideoDescription.jsx"
import CommentForm from './components/ComponentName/Comment.jsx';
import CommentSection from './components/ComponentName/CommentSection.jsx';

function App() {
const [videos, setVideos]=useState([]);
const [comments,setComments] = useState([]);
const [currentVideo,setCurrentVideo] = useState(0);

useEffect(() => {
  setVideos(videoData); 
}, []);

const mainVideo=videos.length >0 ? videos[currentVideo] : null;

const formatDate= (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'numeric', 
    day: 'numeric'
  });
};

useEffect (()=> {
  if (mainVideo && mainVideo.comments) {
    setComments(mainVideo.comments);
  }
},[mainVideo]);

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
           date={formatDate(mainVideo.timestamp)}
           views={mainVideo.views}
           likes={mainVideo.likes}
           commentNo={mainVideo.comments.length}></VideoDescription>
          )}
        <CommentForm></CommentForm>
        <section>
                {comments.length > 0 ? (
                    comments.map(comment => (
                        <CommentSection 
                            key={comment.id} 
                            author={comment.name} 
                            date={formatDate(comment.timestamp)} 
                            comment={comment.comment} 
                        ></CommentSection>
                    ))
                ) : ( 
                    <p>No comments available</p>
                )}
          </section>
    </div>
  )
}

export default App
