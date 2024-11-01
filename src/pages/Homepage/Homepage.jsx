import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import videoData from '../../data/video-details.json';
import Videoplayer from '../../components/Videoplayer/Videoplayer.jsx';
import VideoDescription from "../../components/VideoDescription/VideoDescription.jsx"
import CommentForm from '../../components/Comment/Comment.jsx';
import CommentSection from '../../components/CommentSection/CommentSection.jsx';
import NextVideos from '../../components/NextVideo/NextVideo.jsx';

function Homepage () {
// looks at the url in the browser, and specically the dynanmic part of the url (in our case that the userId)
// and it return to us, the dynamic part of the url (the userId)  
const { videoId } = useParams();
console.log(videoId) //0978236475890724
const [videos, setVideos]=useState([]); // state for all videos
const [comments,setComments] = useState([]);
const [currentVideo,setCurrentVideo] = useState({}); // state for specific video
// side note: if you're getting errors around the currentVideo state, change the default first to useState([])
// also possible to set it to null useState(null), BUT...
//-- if set to null, below the use effect we need to account for null and do a check
// if(currentVideo === null) { return <div>loading</div>}


// to get all of the videos
useEffect(() => {
    const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com";
    const apiKey = "ff57b588-8c97-45bb-8bbb-669ea72658b6";
    const fetchVideos = async()=> {
        const response = await axios.get(`${baseUrl}/videos?api_key=${apiKey}`);
        setVideos(response.data);
    }
    fetchVideos()
}, []);

// another use effect for a specific video (different API call to differnt url/endpoint than the useEffect above)
// this changes/updates the state for currentVideo
// useEffect is dependent: 
//--  on an id (this is dynamic and depends on what url we're at comes from useParams)
//--  getting the list of all the videos back from our API call (and stored into state), and then using that to set a default video
useEffect(() => {
  // axios API call that is made that uses the videoID if we have 
  // check to see if we have the videoID ...and if we do , then make an API call using that videoId
  //-  v  from useParams()
  if(videoId) {
   // make the API call using the videoID
   // and update currentVideo state with the API response

  //-           v from state holding all the videos (where we did this above in the previous useEffect() and stored all the videos in state)  
  } else if (videos) {
    // make and API call, but make the call using the id from the the state holding all the videos
    // update currentVideo  state with this API call
  }

}, [videoId, videos])


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

//Comment section i think move this to their own component?
const handleAddComment = (newComment) => {
  setComments((prevComments) => [...prevComments, newComment]); 
}
const handleVideoClick = (videoId) => {
  const newVideo = videos.findIndex(video => video.id === videoId);
  if (newVideo !== -1) {
      setCurrentVideo(newVideo); 
  }
};

// use a .filter() function to filter out the video that's showing, and return an array that only has the vides not currently showing in it


  return (
    <div>
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
          {/* use all the videos stored in state
          map over that
          and use <Link> tag from react router dom to create out dynamic urls for each video
          we'll do that with the to="" property and will have to look like to={`/videos/${}`}} */}
          {videos.length > 0 ? (
            videos.slice(1).map (mainVideo => (
                <NextVideos // <Link to={`videos/${mainVideo.id}}
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

export default Homepage;