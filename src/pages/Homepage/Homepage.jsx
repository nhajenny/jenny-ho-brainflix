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
    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState (null);
    const [comments, setComments] = useState([]);
    
    const baseUrl = "http://localhost:8080/videos";
    const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";

    const getVideos = async () => {
      try {
        const response = await axios.get(baseUrl);
        return response.data;
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    
    const getVideoById = async (id) => {
      try {
        const response = await axios.get(`${baseUrl}/${id}`);
        return response.data;
      } catch (error) {
        console.error(`Error fetching video with ID ${id}:`, error);
      }
    };
    
    const addVideo = async (videoData) => {
      try {
        const response = await axios.post(baseUrl, videoData);
        return response.data;
      } catch (error) {
        console.error("Error adding video:", error);
      }
    };
 
    useEffect(() => {
        const fetchVideos = async () => {
          const data = await getVideos();
          setVideos(data);
    
          // Set the initial current video based on videoId or defaultVideoId
          const initialVideoId = videoId || defaultVideoId;
          const initialVideo = await getVideoById(initialVideoId);
          setCurrentVideo(initialVideo);
          setComments(initialVideo.comments || []);
        };
        fetchVideos();
      }, [videoId]);
    
      const handleVideoClick = async (id) => {
        const selectedVideo = await getVideoById(id);
        setCurrentVideo(selectedVideo);
        setComments(selectedVideo.comments || []);
      };
    
      const handleAddComment = async (commentText) => {
        try {
          const response = await axios.post(`${baseUrl}/${currentVideo.id}/comments`, {
            comment: commentText,
          });
          setComments([...comments, response.data]);
        } catch (error) {
          console.error('Error adding comment:', error.message);
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
                    <Videoplayer image={currentVideo.image}/>) : (<p>Loading video...</p>)}
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
                        commentNo={currentVideo.comments.length}>
                    </VideoDescription>
                )} 
                <CommentForm onAddComment={handleAddComment}></CommentForm> 
                <section>
                    {comments.length > 0 ?  (
                        comments.map((comment) => (
                            <CommentSection 
                                key={comment.id} 
                                author={comment.name} 
                                date={formatDate(comment.timestamp)} 
                                comment={comment.comment}>
                            </CommentSection>
                        ))):(
                        <p>No comments available</p>
                            )}
                </section>
            </div>
            <div className="desktop__right">
                <section>
                <h2 className="nextvideos__heading">NEXT VIDEOS</h2>
                    {videos.length > 0 ? (
                    videos
                        .filter((video) => video.id !== currentVideo?.id) // Exclude current video from list
                        .map((videoList) => (
                        <Link
                            to={`/videos/${videoList.id}`}
                            key={videoList.id}
                            className="nextvideos__link"
                            onClick={() => handleVideoClick(videoList.id)}
                        >
                            <NextVideos
                            id={videoList.id}
                            preview={videoList.image}
                            title={videoList.title}
                            channel={videoList.channel}
                            />
                        </Link>
                        ))
                    ) : (
                    <p>No videos available</p>
                    )}
                </section> 
            </div>
        </div>
    </div>
)}

export default Homepage;