import React from "react"
import Slider from "react-slick"
import { lifestyle,  } from "../../../../dummyData"
import Heading from "../../../common/heading/Heading"

import "../Ppost/ppost.css"
//copy ppost code

const data= await lifestyle("lifestyle");


const Life = () => {
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
  }
  return (
    <>
      <section className='popularPost life'>
        <Heading title='Life Style' />
        <div className='content'>
          <Slider {...settings}>
            {data?.data?.results.map((val: { cover: string | undefined; catgeory: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; title: string | any[]; date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) => {
              return (
                <div className='items'>
                  <div className='box shadow'>
                    <div className='images'>
                      <div className='img'>
                        <img src={val?.image_url} alt='' />
                      </div>
                      <div className='category category1'>
                        <span>{val?.source_name}</span>
                      </div>
                    </div>
                    <div className='text' onClick={()=>window.open(val?.link, "_blank")} >
                      <h1 className='title'>{val?.title?.slice(0, 40)}...</h1>
                      <div className='date'>
                        <i className='fas fa-calendar-days'></i>
                        <label>{val?.pubDate?.split(" ")[0]}</label>
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

export default Life
