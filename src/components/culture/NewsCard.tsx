import { useEffect, useState } from "react";
import "./NewsCard.css";
import SentimentChart from "../card/sentiment/analysis";
import Comments from "../card/comments/comment";
import { popular } from "../../dummyData";

interface NewsArticle {
  cover: string | undefined;
  category: string | undefined;
  title: string | undefined;
  description: string | undefined;
  content: string | undefined;
  urlToImage: string | null;
  source: { name: string | undefined };
  url: string | undefined;
}

const NewsCard = () => {
  const [data, setData] = useState<{ data: { articles: NewsArticle[] } }>({ data: { articles: [] } });

  useEffect(() => {
    const fetchData = async () => {
      const result = await popular("business");
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <>
      {data?.data?.articles?.map((val: NewsArticle, index) => {
        // Check for valid values and handle undefined safely
        if (
          val?.title !== "[Removed]" &&
          val?.description !== "[Removed]" &&
          val?.urlToImage !== null
        ) {
          return (
            <div className="news-card" key={index}>
              <div className="par1">
                <img
                  src={val?.urlToImage || "data:Q=="}
                  alt="News"
                  className="news-card__image"
                />
              </div>

              <div className="par2">
                <div className="par21">
                  <div className="news-card__content">
                    <h2 className="news-card__title">{val?.title}</h2>
                    <p className="news-card__description">
                      {/* Check if description exists and provide fallback */}
                      {val?.description ? val.description : "No description available."}
                      {val?.content}
                    </p>
                  </div>
                </div>
                <div className="par3">
                  <p className="source">Source - {val?.source?.name}</p>
                  <button
                    className="news-card__button"
                    onClick={() => window.open(val?.url, "_blank")}
                  >
                    Read More
                  </button>
                </div>
                <div className="par22">
                  <div className="sentiment">
                    {/* Pass fallback empty string for missing description or content */}
                    <SentimentChart description={(val?.description || "") + (val?.content || "")} />
                  </div>
                  <div className="comment">
                    <Comments />
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default NewsCard;
