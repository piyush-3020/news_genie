import React from "react"
import "./Popular.css"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { popular } from "../../../../dummyData"
import Heading from "../../../common/heading/Heading"

const data= await popular("popular");


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
  }
  return (
    <>
      <section className='popular'>
        <Heading title='Popular' />
        <div className='content'>
          <Slider {...settings}>
            {data.data.results.map((val: { cover: string | undefined; catgeory: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; title: string | any[]; date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; comments: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined },index) => {
              return (
                <div className='items' key={index}>
                  <div className='box shadow'>
                    <div className='images row'>
                      <div className='img'>
                        <img src={val?.image_url} alt='' />
                      </div>
                      <div className='category category1'>
                        <span>{val?.source_name}</span>
                      </div>
                    </div>
                    <div className='text row'>
                      <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                      <div className='date'>
                        <i className='fas fa-calendar-days'></i>
                        <label>{val?.pubDate?.split(" ")[0]}</label>
                      </div>
                      <div className='comment'>
                        <i className='fa fa-info '></i>
                        <a target="_blank" rel="noopener noreferrer" href={val?.link} >Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Popular
