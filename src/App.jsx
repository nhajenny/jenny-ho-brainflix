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
import NextVideos from './components/ComponentName/NextVideo.jsx';

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
const handleAddComment = (newComment) => {
  setComments((prevComments) => [...prevComments, newComment]); 
}
const handleVideoClick = (videoId) => {
  const newVideo = videos.findIndex(video => video.id === videoId);
  if (newVideo !== -1) {
      setCurrentVideo(newVideo); 
  }
};
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
      <div className="desktop__container">
      <div className="desktop__left">
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
        <CommentForm onAddComment={handleAddComment}></CommentForm>
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
      <div className="desktop__right">
      <section>
          <h2 className="nextvideos__heading">NEXT VIDEOS</h2>
          {videos.length > 0 ? (
            videos.slice(1).map (mainVideo => (
                <NextVideos
                  key={mainVideo.id}
                  id={mainVideo.id} 
                    preview={mainVideo.image} 
                    title={mainVideo.title}   
                    channel={mainVideo.channel}
                    onVideoClick={(videoId)=> handleVideoClick(videoId)}></NextVideos>  
            ))): (
              <p>No videos avaialble</p>
            )}
          </section>
      </div>
      </div>
    
    </div>
  )
}

export default App;
