import "../../styles/styles.css";
import mohanMuruge from '../../assets/images/Mohan-muruge.jpg';
import commentIcon from '../../assets/images/icons/add_comment.svg';
import {useState} from 'react';


function CommentForm () {

    const [comment, setComment] = useState("");
    const [commentError, setCommentError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()=== "") {
            setCommentError(true);
            alert("please input comment");
        } 
        else setCommentError(false);
        if (comment.trim()) { 
            console.log("Comment submmited", {comment});
            setComment("");
            setCommentError(false);

        }
    };

    return (
        <section className="comment">
            <div className="comment__container">
                <div className="comment__left">
                    <img src={mohanMuruge} alt="profile picture" className="comment__left--profile"/>
                </div>
                <div className='comment__right'>
                    <label className="comment__right--label">
                            JOIN THE CONVERSATION
                    </label>
                    <form className="comment__right--form" onSubmit={handleSubmit}>
                        <input type="text" 
                            name="commentInput" 
                            placeholder="Add a new comment" 
                            className={`comment__right--textarea ${commentError ? "comment__error" : ""}`}
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            ></input>
                        <button type="submit" className="comment__button">
                            <img src={commentIcon} alt="icon to submit commit" className="comment__button--icon"/>
                            <label className="comment__button--text">COMMENT</label>
                            </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default CommentForm;