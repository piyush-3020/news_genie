import "./NewsCard.css";
import SentimentChart from "../card/sentiment/analysis";
import Comments from "../card/comments/comment";

interface NewsCardProps {
  imageUrl: string;
  title: string;
  description: string;
  Source: string;
  type?: string; // Optional type for the news card
  onReadMore: () => void;
}

const NewsCard = ({
  imageUrl,
  title,
  description,
  Source,
  type,
  onReadMore,
}: NewsCardProps) => {
  return (
    // <div className="hero">
    <div className={`news-card ${type ? `news-card--${type}` : ""}`}>
      <div className="par1">
      <img src={imageUrl} alt="News" className="news-card__image" />
      </div>

      <div className="par2">
        <div className="par21">
        <div className="news-card__content">
        <h2 className="news-card__title">{title}</h2>
        <p className="news-card__description">{description}</p>
      </div>
        </div>
        <div className="par3">
      <p className="source">Source - {Source}</p>
        <button className="news-card__button" onClick={onReadMore}>
          Read More
        </button>
      </div>
        <div className="par22">
        <div className="sentiment">
        <SentimentChart />
        </div>
        <div className="comment">
        <Comments />
      </div>
        </div>
      
      
      </div>
      
     
    </div>
    /* <div className="comment">
        <Comments />
      </div> */
    // </div>
  );
};

export default NewsCard;
