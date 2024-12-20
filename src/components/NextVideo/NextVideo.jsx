import "./nextVideo.css";

function NextVideos ({id,preview, title, channel}) {

    return(
        <div className="nextvideos">
            <div className="nextvideos__container">
                <div className="nextvideos__card">
                    <div className="nextvideos__card--left{">
                        <img src={preview} alt="video preview" className="nextvideos__img"/>
                    </div>
                    <div className="nextvideos__card--right">
                        <h2 className="nextvideos__title">{title}</h2>
                        <div className="nextvideos__author">{channel}</div>
                    </div>
                </div>
            </div>
        </div>
    )  
}

export default NextVideos;