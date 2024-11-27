import React, { useEffect, useState } from "react";
import "./NewsCard.css";
import SentimentChart from "../card/sentiment/analysis";
import Comments from "../card/comments/comment";
import { sport } from "../../dummyData";

interface Article {
  cover: string | undefined;
  category: string | number | boolean | React.ReactNode | null | undefined;
  title: string;
  description: string;
  content: string;
  date: string | number | boolean | React.ReactNode | null | undefined;
  source: { name: string };
  url: string;
  urlToImage: string | null;
}

const Sports = () => {
  const [data, setData] = useState<{ data: { articles: Article[] } } | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await sport("sports");
        setData(result); // Store the fetched data in the state
      } catch (error) {
        setError("Failed to load sports news."); // Set error message on failure
      } finally {
        setLoading(false); // Stop loading state
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once on component mount

  if (loading) {
    return <div>Loading...</div>; // Display loading text or spinner
  }

  if (error) {
    return <div>{error}</div>; // Display error message if data fetching fails
  }

  return (
    <>
      {data?.data?.articles?.map((val) => {
        // Skip invalid articles
        if (val.title !== "[Removed]" && val.description !== "[Removed]" && val.urlToImage !== null) {
          return (
            <div className="news-card" key={val.url}>
              <div className="par1">
                <img
                  src={val.urlToImage || "https://via.placeholder.com/150"} // Generic sports fallback image
                  alt="News"
                  className="news-card__image"
                />
              </div>

              <div className="par2">
                <div className="par21">
                  <div className="news-card__content">
                    <h2 className="news-card__title">{val.title}</h2>
                    <p className="news-card__description">{val.description}{val.content}</p>
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

export default Sports;
