import { useState, useEffect } from "react";
import Slider from "react-slick";
import { lifestyle } from "../../../../dummyData";
import Heading from "../../../common/heading/Heading";
import "../Ppost/ppost.css";

// Types for the data
interface Article {
  urlToImage: string | null;
  source: { name: string };
  title: string;
  description: string;
  url: string;
  publishedAt: string;
}

const Life = () => {
  const [data, setData] = useState<{ data: { articles: Article[] } }>({ data: { articles: [] } });

  useEffect(() => {
    const fetchLifestyleData = async () => {
      const fetchedData = await lifestyle("entertainment");
      setData(fetchedData);  // Assuming lifestyle function returns an object with 'data' and 'articles'
    };
    fetchLifestyleData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="popularPost life">
      <Heading title="Life Style" />
      <div className="content">
        <Slider {...settings}>
          {data?.data?.articles?.map((val, index) => {
            if (val?.title !== "[Removed]" && val?.description !== "[Removed]" && val?.urlToImage) {
              return (
                <div className="items" key={index}> {/* Use the index or a unique id if available */}
                  <div className="box shadow">
                    <div className="images">
                      <div className="img">
                        <img src={val?.urlToImage} alt={val?.title} />
                      </div>
                      <div className="category category1">
                        <span>{val?.source?.name}</span>
                      </div>
                    </div>
                    <div
                      className="text"
                      onClick={() => window.open(val?.url, "_blank")}
                    >
                      <h1 className="title">
                        {val?.title?.slice(0, 40)}...
                      </h1>
                      <div className="date">
                        <i className="fas fa-calendar-days"></i>
                        <label>{val?.publishedAt?.split("T")[0]}</label>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null; // Return null for invalid items
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Life;
