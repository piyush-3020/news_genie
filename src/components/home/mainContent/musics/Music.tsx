import { useState, useEffect } from "react";
import Slider from "react-slick";
import Heading from "../../../common/heading/Heading";
import { lifestyle } from "../../../../dummyData";
import "./music.css";

// Define the structure for the article data
interface Article {
  urlToImage: string | null;
  source: { name: string };
  title: string;
  description: string;
  url: string;
  publishedAt: string;
}

const Music = () => {
  const [data, setData] = useState<{ data: { articles: Article[] } }>({
    data: { articles: [] },
  });

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await lifestyle("music");
      setData(fetchedData); // Assuming lifestyle function returns data in the same structure
    };

    fetchData();
  }, []); // Empty dependency array means this runs only once on mount

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  };

  return (
    <section className="music">
      <Heading title="Music News" />
      <div className="content">
        <Slider {...settings}>
          {data?.data?.articles?.map((val, index) => {
            if (
              val.title !== "[Removed]" &&
              val.description !== "[Removed]" &&
              val.urlToImage
            ) {
              return (
                <div className="items" key={index}> {/* Using index as a key */}
                  <div className="box shadow flexSB">
                    <div className="images">
                      <div className="img">
                        <img src={val?.urlToImage ?? ""} alt={val?.title} />
                      </div>
                      <div className="category category1">
                        <span>{val?.source?.name}</span>
                      </div>
                    </div>
                    <div className="text">
                      <h1 className="title">{val?.title?.slice(0, 60)}...</h1>
                      <div className="date">
                        <i className="fas fa-calendar-days"></i>
                        <label>{val?.publishedAt?.split("T")[0]}</label>
                      </div>
                      <p className="desc">
                        {val?.description?.slice(0, 100)}...
                      </p>
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
            return null; // Avoid rendering invalid items
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Music;
