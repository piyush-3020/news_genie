import { useEffect, useState } from "react";
import Slider from "react-slick";
import { popular } from "../../../dummyData";
import "./style.css";

const SinglePageSlider = () => {
  const [items, setItems] = useState<any[]>([]); // Store fetched data

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the `popular` function
        const response = await popular("games"); // Assuming `popular` is a function that fetches data
        setItems(response.data.articles); // Assuming the response has the data in `articles`
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once when the component mounts

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="singlePopular">
        <div className="content">
          <Slider {...settings}>
            {items.map((val, index) => (
              <div className="items" key={index}> {/* Added key */}
                <div className="box">
                  <div className="images">
                    <img
                      src={val.cover}
                      alt={`Cover image for ${val.title}`} // Added descriptive alt text
                    />
                  </div>
                  <div className="text">
                    <h1 className="title">{val.title}</h1>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default SinglePageSlider;
