import React from 'react';
import './CommentCard.css';

function CommentCard({ name, time, content, likes, dislikes, profileImg }) {
  const handleReplyClick = () => {
    alert(`Reply to ${name}`);
  };

  return (
    <div className="comment-card">
      <img src={profileImg || "/avatars/default.jpg"} alt={`${name}'s Avatar`} className="avatar" />
      <div className="comment-content">
        <h4>{name} <span>{time}</span></h4>
        <p>{content}</p>
        <div className="comment-footer">
          <span>👍 {likes}</span>
          <span>👎 {dislikes}</span>
          <button className="reply-btn" onClick={handleReplyClick}>Reply</button>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
