import { useState, useEffect } from "react";
import Slider from "react-slick";
import { popular } from "../../../../dummyData";
import Heading from "../../../common/heading/Heading";
import "./ppost.css";

// Define the structure of the article data
interface Article {
  urlToImage: string | null;
  source: { name: string };
  title: string;
  description: string;
  url: string;
  publishedAt: string;
}

const Ppost = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch games data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await popular("games");
        setArticles(response?.data?.articles || []);
      } catch (err) {
        setError("Failed to load games articles.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  if (loading) return <div>Loading...</div>; // Show loading text if data is being fetched
  if (error) return <div>{error}</div>; // Display error message if something went wrong

  return (
    <section className="popularPost">
      <Heading title="Games" />
      <div className="content">
        <Slider {...settings}>
          {articles.map((val, index) => {
            if (val.title !== "[Removed]" && val.description !== "[Removed]" && val.urlToImage) {
              return (
                <div className="items" key={index}>
                  <div className="box shadow">
                    <div className="images">
                      <div className="img">
                        <img src={val?.urlToImage ?? ""} alt={val?.title} />
                      </div>
                      <div className="category category1">
                        <span>{val?.source?.name}</span>
                      </div>
                    </div>
                    <div
                      className="text"
                      onClick={() => window.open(val?.url, "_blank")}
                    >
                      <h1 className="title">{val?.title.slice(0, 40)}...</h1>
                      <div className="date">
                        <i className="fas fa-calendar-days"></i>
                        <label>{val?.publishedAt?.split("T")[0]}</label>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null; // Skip invalid articles
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Ppost;
