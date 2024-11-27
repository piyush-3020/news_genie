import { useState, useEffect } from "react";
import "./Popular.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { lifestyle } from "../../../../dummyData";
import Heading from "../../../common/heading/Heading";

// Define the structure of the article data
interface Article {
  urlToImage: string | null;
  source: { name: string };
  title: string;
  description: string;
  url: string;
  publishedAt: string;
}

const Popular = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch popular articles
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await lifestyle("popular");
        setArticles(response?.data?.articles || []); // Set the articles if available
      } catch (err) {
        setError("Failed to load popular articles."); // Handle errors if API request fails
      } finally {
        setLoading(false); // Stop loading after data is fetched
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Slider settings
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  };

  if (loading) return <div>Loading...</div>; // Show loading text if data is being fetched
  if (error) return <div>{error}</div>; // Display error message if something went wrong

  return (
    <section className="popular">
      <Heading title="Popular" />
      <div className="content">
        <Slider {...settings}>
          {articles.map((val, index) => {
            if (val.title !== "[Removed]" && val.description !== "[Removed]" && val.urlToImage) {
              return (
                <div className="items" key={index}>
                  <div className="box shadow">
                    <div className="images row">
                      <div className="img">
                        <img src={val?.urlToImage ?? ""} alt={val?.title} />
                      </div>
                      <div className="category category1">
                        <span>{val?.source?.name}</span>
                      </div>
                    </div>
                    <div className="text row">
                      <h1 className="title">{val?.title.slice(0, 40)}...</h1>
                      <div className="date">
                        <i className="fas fa-calendar-days"></i>
                        <label>{val?.publishedAt?.split("T")[0]}</label>
                      </div>
                      <div className="comment">
                        <i className="fa fa-info "></i>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={val?.url}
                        >
                          Read More
                        </a>
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

export default Popular;
