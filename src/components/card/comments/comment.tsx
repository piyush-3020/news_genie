import React, { useState } from 'react';
import './comment.css';

type Comment = {
  text: string;
  author: string;
  date: string;
  profilePic: string;
};

const Comments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [happyCount, setHappyCount] = useState(0);
  const [sadCount, setSadCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [commentText, setCommentText] = useState('');
  const tokenn = import.meta.env.VITE_ACCESS_CODE; // Ensure the variable is prefixed with REACT_APP_

  const querySentiment = async (text: string) => {
    const response = await fetch(
      'https://api-inference.huggingface.co/models/Cloudy1225/stackoverflow-roberta-base-sentiment',
      {
        headers: {
          Authorization: `Bearer ${tokenn}`, // Pass the token correctly
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ inputs: text }),
      }
    );
    const result = await response.json();
    return result[0][0].label;
  };

  const handleAddComment = async () => {
    if (!commentText.trim()) return;

    const sentiment = await querySentiment(commentText);
    const newComment: Comment = {
      text: commentText,
      author: 'Anonymous',
      date: new Date().toLocaleString(),
      profilePic: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
    };

    setComments((prev) => [...prev, newComment]);

    if (sentiment === 'positive') setHappyCount((prev) => prev + 1);
    else if (sentiment === 'negative') setSadCount((prev) => prev + 1);
    else setNeutralCount((prev) => prev + 1);

    setCommentText('');
  };

  return (
    <div className="comments-section">
      <div className="btn">Comments</div>
      <div className="comments-wrapper">
        <div className="comment-breakdown">
          <span>Happy: 😄 {happyCount}</span>
          <span>Sad: ☹️ {sadCount}</span>
          <span>Neutral: 😐 {neutralCount}</span>
        </div>
        <div className="comments-container">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <img src={comment.profilePic} alt={`${comment.author}'s profile`} />
              <div className="comment-text">
                <p>
                  <strong>{comment.author}</strong> - {comment.date}
                </p>
                <p>{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="add-comment">
          <input
            type="text"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write a comment..."
          />
          <button onClick={handleAddComment} disabled={!commentText.trim()}>
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
