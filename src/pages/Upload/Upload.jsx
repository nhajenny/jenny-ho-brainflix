import uploadImage from '../../assets/images/Upload-video-preview.jpg';
import iconUpload from '../../assets/images/icons/upload.svg';
import "../../styles/styles.css";
import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';


function Upload () {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [titleError, setTitleError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);
    const navigate = useNavigate();

    const baseUrl = "http://localhost:8080/videos"; 

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (title.trim() === "") {
            setTitleError(true);
            alert("Please input title");
        } else {
            setTitleError(false);
        } 

        if (description.trim() === "") {
            setDescriptionError(true);
            alert("Please input description");
        } else {
            setDescriptionError(false);
        }

        if (title.trim() && description.trim()) {
            try {
                const response = await axios.post(baseUrl, {
                    title,
                    description,
                    image: "/images/Upload-video-preview.jpg", // Default image path
                });

                console.log("Upload submitted:", response.data);
                alert("Video uploaded successfully!");

                setTitle("");
                setDescription("");
                navigate("/");
            } catch (error) {
                console.error("Error uploading video:", error);
                alert("There was an issue uploading your video. Please try again.");
            }
        } else {
            alert("Please fill in all fields and try again.");
        }
    };

    return(
        <section className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <div className="upload__subtitle">Video Thumbnail</div>
                <div className="upload__desktop--container">
                    <div>
                        <img src={uploadImage} alt="person at starting line of track run" className="upload__image" ></img>
                    </div>
                    <div> 
                        <form className="upload__form" onSubmit={handleSubmit}>
                            <label className="upload__form--label">TITLE YOUR VIDEO
                                <textarea 
                                    type="text"
                                    name = "titleInput"
                                    value = {title}
                                    onChange = {(e)=> setTitle(e.target.value)}
                                    placeholder = "Add a title to your video"
                                    className={`upload__form--title ${titleError ? "upload__form--error" : ""}`}
                                ></textarea>
                            </label>
                            <label className="upload__form--label"> ADD A VIDEO DESCRIPTION
                                <textarea 
                                    type="text"
                                    name="descriptionInput"
                                    value = {description}
                                    placeholder = "Add a description to your video"
                                    className="upload__form--description"
                                    onChange={(e)=>setDescription(e.target.value)}>
                                </textarea>
                            </label>
                            <div className="upload__bottom--buttons">
                                <Link to="/" className="upload__cancel--link">
                                    <div className="upload__cancel">
                                        CANCEL
                                    </div>
                                </Link>
                                <button 
                                    type="submit"
                                    className="upload__button">
                                    <img src={iconUpload} alt="upload icon" className="upload__button--icon"/>
                                    <label>PUBLISH</label>
                                </button>                           
                            </div>
                        </form>
                    </div>
                </div>                  
            <Link to="/" className="upload__cancel--link">
                <div className="upload__cancel--mobile">
                    CANCEL
                </div>
            </Link>
    </section>
)};

export default Upload;