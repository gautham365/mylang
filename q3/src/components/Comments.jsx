import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../features/comments/commentSlice';

const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);
  const [commentText, setCommentText] = useState('');

  const handlePostComment = () => {
    if (commentText.trim() !== '') {
      dispatch(addComment(commentText));
      setCommentText('');
    }
  };

  return (
    <div className="comments-container">
      <h2>Comments</h2>
      <ul className="comment-list">
        {comments.map((comment, index) => (
          <li key={index}> &#x2022; {comment}</li>
        ))}
      </ul>
      <form className="comment-form" onSubmit={(e)=>{e.preventDefault()}}>
        <input
          type="text"
          id="comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment..."
        />
        <button type="button" id="postComment" onClick={handlePostComment}>
          Post
        </button>
      </form>
    </div>
  );
};

export default Comments;
