import { useLocation } from "react-router-dom";
import SentimentChart from "../../card/sentiment/analysis";
import Comments from "../../card/comments/comment";

const OneCard = () => {
  const location = useLocation();
  const { cardDetails } = location.state;

  return (
    <>
      <div className={`news-card `}>
        <div className="par1">
          <img
            src={cardDetails.item.cover}
            alt="News"
            className="news-card__image"
          />
        </div>

        <div className="par2">
          <div className="par21">
            <div className="news-card__content">
              <h2 className="news-card__title">{cardDetails.item.title}</h2>
              <p className="news-card__description">
                {cardDetails.item.desc[0].para1}
                {cardDetails.item.desc[1].para2}
                {cardDetails.item.desc[2].para3}
              </p>
            </div>
          </div>
          <div className="par3">
            <p className="source">Source - {cardDetails.item.authorName}</p>
          </div>
          <div className="par22">
            <div className="sentiment">
              <SentimentChart
                description={
                  cardDetails.item.desc[0].para1 +
                  cardDetails.item.desc[1].para2 +
                  cardDetails.item.desc[2].para3
                }
              />
            </div>
            <div className="comment">
              <Comments />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneCard;
