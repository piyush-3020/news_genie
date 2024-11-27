import "./NewsCard.css";
import SentimentChart from "../card/sentiment/analysis";
import Comments from "../card/comments/comment";
import { useEffect, useState } from "react";
import { popular } from "../../dummyData";

const Politics = () => {
  const [data, setData] = useState<any>(null);

  // Fetch data inside useEffect to avoid top-level await error
  useEffect(() => {
    const fetchData = async () => {
      const result = await popular("politics");
      setData(result);
    };
    fetchData();
  }, []); // Empty dependency array ensures it runs once after component mounts

  return (
    <>
      {data?.data?.articles?.map((val: {
        cover: string | undefined;
        category: string | number | boolean | React.ReactNode | null | undefined;
        title: string;
        description: string;
        content: string;
        date: string | number | boolean | React.ReactNode | null | undefined;
        source: { name: string };
        url: string;
        urlToImage: string | null;
      }) => {
        // Skip invalid articles
        if (val.title !== "[Removed]" && val.description !== "[Removed]" && val.urlToImage !== null) {
          return (
            <div className="news-card" key={val.url}>
              <div className="par1">
                <img
                  src={val.urlToImage || "/Z"} // Default image path
                  alt="News"
                  className="news-card__image"
                />
              </div>

              <div className="par2">
                <div className="par21">
                  <div className="news-card__content">
                    <h2 className="news-card__title">{val.title}</h2>
                    <p className="news-card__description">
                      {val.description}{val.content}
                    </p>
                  </div>
                </div>
                <div className="par3">
                  <p className="source">Source - {val.source?.name}</p>
                  <button
                    className="news-card__button"
                    onClick={() => window.open(val.url, "_blank")}
                  >
                    Read More
                  </button>
                </div>
                <div className="par22">
                  <div className="sentiment">
                    <SentimentChart description={val.description + val.content} />
                  </div>
                  <div className="comment">
                    <Comments />
                  </div>
                </div>
              </div>
            </div>
          );
        }
        return null; // Skip rendering invalid articles
      })}
    </>
  );
};

export default Politics;
