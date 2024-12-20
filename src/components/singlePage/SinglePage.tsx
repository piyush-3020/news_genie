import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { hero } from "../../dummyData"; // Ensure 'hero' is properly typed
import Side from "../home/sideContent/side/Side";
import SinglePageSlider from "./slider/SinglePageSlider";
import "../home/mainContent/homes/style.css";
import "./singlepage.css";
import "../home/sideContent/side/side.css";

// Define Types
interface Description {
  para1?: string;
  para2?: string;
  para3?: string;
}

interface Detail {
  title?: string;
  para1?: string;
  para2?: string;
  para3?: string;
  quote?: string;
}

interface NewsItem {
  id: number;
  cover: string;
  catgeory: string;
  title: string;
  authorName: string;
  authorImg: string;
  time: string;
  desc: Description[];
  details: Detail[];
}

const SinglePage = () => {
  const { id } = useParams();
  const [item, setItem] = useState<NewsItem | null>(null);
  const [comments, setComments] = useState<{ text: string; date: string }[]>([]); // State for comments
  const [newComment, setNewComment] = useState(""); // State for input field

  useEffect(() => {
    const newsItem = hero.find((item) => item.id === parseInt(id || ""));
    if (newsItem) {
      setItem(newsItem);
      document.title = newsItem.title;
    } else {
      setItem(null);
      document.title = "News Not Found";
    }
    window.scrollTo(0, 0);
  }, [id]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { text: newComment, date: new Date().toLocaleString() }]);
      setNewComment("");
    }
  };

  if (!item) {
    return (
      <div className="not-found">
        <h1>News Not Found</h1>
        <p>The news item you’re looking for does not exist or has been removed.</p>
        <Link to="/" className="btn">Go Back to Homepage</Link>
      </div>
    );
  }

  const description = item.desc.map((val, index) => (
    <div key={index}>
      {val.para1 && <p>{val.para1}</p>}
      {val.para2 && <p>{val.para2}</p>}
      {val.para3 && <p>{val.para3}</p>}
    </div>
  ));

  const details = item.details.map((data, index) => (
    <div key={index}>
      {data.title && <h1>{data.title}</h1>}
      {data.para1 && <p>{data.para1}</p>}
      {data.quote && (
        <blockquote>
          <i className="fa fa-quote-left"></i> {data.quote}
        </blockquote>
      )}
      {data.para2 && <p>{data.para2}</p>}
      {data.para3 && <p>{data.para3}</p>}
    </div>
  ));

  return (
    <main>
      <SinglePageSlider />
      <div className="container">
        <section className="mainContent details">
          <h1 className="title">{item.title}</h1>

          <div className="author">
            <span>by</span>
            <img src={item.authorImg} alt={item.authorName} />
            <p>{item.authorName} on</p>
            <label>{item.time}</label>
          </div>

          <div className="social">
            <div className="socBox">
              <i className="fab fa-facebook-f"></i>
              <span>SHARE</span>
            </div>
            <div className="socBox">
              <i className="fab fa-twitter"></i>
              <span>TWITTER</span>
            </div>
            <div className="socBox">
              <i className="fab fa-pinterest"></i>
            </div>
            <div className="socBox">
              <i className="fa fa-envelope"></i>
            </div>
          </div>

          <div className="desctop">{description}</div>
          <img src={item.cover} alt={item.title} />
          <div className="descbot">{details}</div>

          {/* Comment Section */}
          <div className="comment-section">
            <h2>Comments</h2>
            <form className="comment-form" onSubmit={handleCommentSubmit}>
              <textarea
                placeholder="Write your comment here..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                required
              ></textarea>
              <button type="submit">Post Comment</button>
            </form>
            <div className="comments-list">
              {comments.length > 0 ? (
                comments.map((comment, index) => (
                  <div key={index} className="comment">
                    <p>{comment.text}</p>
                    <span>{comment.date}</span>
                  </div>
                ))
              ) : (
                <p>No comments yet. Be the first to comment!</p>
              )}
            </div>
          </div>
        </section>

        <section className="sideContent">
          <Side />
        </section>
      </div>
    </main>
  );
};

export default SinglePage;
