import React from "react";
import "./Popular.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { lifestyle } from "../../../../dummyData";
import Heading from "../../../common/heading/Heading";

const data=await lifestyle("popular");

const Popular = () => {
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
  return (
    <>
      <section className="popular">
        <Heading title="Popular" />
        <div className="content">
          <Slider {...settings}>
            {data?.data?.articles?.map(
              (
                val: {
                  cover: string | undefined;
                  catgeory:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | null
                    | undefined;
                  title: string | any[];
                  date:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | null
                    | undefined;
                  comments:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | null
                    | undefined;
                },
                index
              ) => {
                if(val.title!=="[Removed]"&&val.description!=="[Removed]"&&val.urlToImage!==null){
                return (
                  <div className="items" key={index}>
                    <div className="box shadow">
                      <div className="images row">
                        <div className="img">
                          <img src={val?.urlToImage} alt="" />
                        </div>
                        <div className="category category1">
                          <span>{val?.source?.name}</span>
                        </div>
                      </div>
                      <div className="text row">
                        <h1 className="title">{val.title.slice(0, 40)}...</h1>
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
              }
            )}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Popular;
