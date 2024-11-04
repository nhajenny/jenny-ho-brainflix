import { useEffect,useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Videoplayer from '../../components/Videoplayer/Videoplayer';
import VideoDescription from "../../components/VideoDescription/VideoDescription.jsx"
import CommentForm from '../../components/CommentForm/CommentForm.jsx';
import CommentSection from '../../components/CommentSection/CommentSection.jsx';
import NextVideos from '../../components/NextVideo/NextVideo.jsx';
import axios from 'axios';

function Homepage () {
    const {videoId} = useParams();
    //set state
    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState (null);
    const [comments, setComments] = useState([]);
    //retreive all videos from API and keep it in state
    const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com";
    const apiKey = "bf2734ef-fc96-49b4-8efe-f7dc03dbaf4a";

    const fetchVideos = async () => {
        try {
            const response = await axios.get(`${baseUrl}/videos?api_key=${apiKey}`);
            return(response.data); 
        }
        catch(error) {
            console.log("error fetchVideos", error.message);
        }
    };

    //fetchCurrentVideo by ID

    useEffect(() => {
        const fetchCurrentVideo = async () => {
            let allVideos = await fetchVideos()
            if (!videoId) {
                const response = await axios.get(`${baseUrl}/videos/${allVideos[0].id}?api_key=${apiKey}`);
                setCurrentVideo(response.data);
                setComments(response.data.comments);
                setVideos(allVideos);
                return;
            };
            try {
                const response = await axios.get(`${baseUrl}/videos/${videoId}?api_key=${apiKey}`);
                setCurrentVideo(response.data);
                setComments(response.data.comments);
                setVideos(allVideos);
                console.log(response.data);
            } catch (error) {
                console.log("Error in fetchCurrentVideo:", error.message);
            }
        };
        fetchCurrentVideo();
    }, [videoId]);

    //post comment 
    const handleAddComment = async (commentText) => {
        try {
            const response = await axios.post(`${baseUrl}/videos/${videoId}/comments?api_key=${apiKey}`,
                {comment: commentText}
            );
            setComments([...comments, response.data.comments]); 
        } catch (error) {
            console.error("Error adding comment:", error.message);
        }
    };

    const formatDate= (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'numeric', 
        day: 'numeric'
        });
    };


return (
    <div>
    <section className="section__video">
          <div className="video-selected">
           {currentVideo ? (
                        <Videoplayer
                            image={currentVideo.image}  
                        />
                    ) : (
                        <p>Loading video...</p>)}
          </div>
       </section> 
        <div className="desktop__container">
          <div className="desktop__left"> 
            {currentVideo && (
             <VideoDescription
                title={currentVideo.title}
                description={currentVideo.description}
                channel={currentVideo.channel}
                date={formatDate(currentVideo.timestamp)}
                views={currentVideo.views}
                likes={currentVideo.likes}
                commentNo={currentVideo.comments.length}></VideoDescription>
          )} 
            <CommentForm onAddComment={handleAddComment}></CommentForm>
            
        <section>
                 {comments.length > 0 ?  (
                    comments.map((comments) => (
                        <CommentSection 
                        key={comments.id} 
                        author={comments.name} 
                        date={formatDate(comments.timestamp)} 
                        comment={comments.comment} 
                    ></CommentSection>
                    )
                 )):(
                    <p>No comments available</p>
                )}
          </section>

            </div>
            <div className="desktop__right">
      <section>
           <h2 className="nextvideos__heading">NEXT VIDEOS</h2>
            {videos.length > 0 ? (
            videos.filter(video => video.id !== currentVideo.id).map(videoList => (
                <Link to={`/videos/${videoList.id}`} key={videoList.id} className="nextvideos__link"> 
                    <NextVideos 
                        id={videoList.id} 
                        preview={videoList.image} 
                        title={videoList.title}   
                        channel={videoList.channel}
                        onClick = {()=> handleVideoClick(videoList.id)}
                    ></NextVideos> 
                </Link> 
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