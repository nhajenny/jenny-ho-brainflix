import uploadImage from '../../assets/images/Upload-video-preview.jpg';
import iconUpload from '../../assets/images/icons/upload.svg';
import "../../styles/styles.css";

function Upload () {
    return(
        <section className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <div>
                <div className="upload__subtitle">Video Thumbnail</div>
                <img src={uploadImage} alt="person at starting line of track run" className="upload__image" ></img>
            </div>
            <div>
                
                <form className="upload__form">
                    <label className="upload__form--label">TITLE YOUR VIDEO
                        <input 
                        type="text"
                        name = "nameInput"
                        placeholder = "Add a title to your video"
                        className="upload__form--title"
                        ></input>
                    </label>
                    <label className="upload__form--label"> ADD A VIDEO DESCRIPTION
                        <textarea 
                        type="text"
                        name="descriptionInput"
                        placeholder = "Add a description to your video"
                        className="upload__form--description"></textarea>
                    </label>
                    <button 
                    type="submit"
                    className="upload__button">
                        <img src={iconUpload} alt="upload icon" className="upload__button--icon"/>
                        <label>Publish</label>
                    </button>
                </form>
                <div className="upload__cancel">
                    CANCEL
                </div>
            </div>
        </section>
    )
}

export default Upload;