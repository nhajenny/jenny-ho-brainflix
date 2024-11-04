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

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === "") {
            setTitleError(true);
            alert("please input title");
        }
        else setTitleError(false);

        if (description.trim() === "") {
            setDescriptionError(true);
            alert("please input description");
        } 
        else setDescriptionError(false);

        if (title.trim() && description.trim()) {
            console.log("Uploaded submitted:", { title, description });
            setTitle("");
            setDescription("");
            setTitleError(false);
            setDescriptionError(false);
            navigate("/");
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
                        <input 
                        type="text"
                        name = "titleInput"
                        value = {title}
                        onChange = {(e)=> setTitle(e.target.value)}
                        placeholder = "Add a title to your video"
                        className={`upload__form--title ${titleError ? "upload__form--error" : ""}`}
                        ></input>
                    </label>
                    <label className="upload__form--label"> ADD A VIDEO DESCRIPTION
                        <textarea 
                        type="text"
                        name="descriptionInput"
                        value = {description}
                        placeholder = "Add a description to your video"
                        className={`upload__form--description${descriptionError ? "upload__form--error" : ""}`}
                        onChange={(e)=>setDescription(e.target.value)}></textarea>
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
    )
}

export default Upload;