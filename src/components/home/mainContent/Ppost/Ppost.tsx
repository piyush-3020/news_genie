import React from "react"
import Slider from "react-slick"
import { popular, ppost } from "../../../../dummyData"
import Heading from "../../../common/heading/Heading"
import "./ppost.css"

// copy same code of popular

const data= await popular("top");
const Ppost = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  }
  return (
    <>
      <section className='popularPost'>
        <Heading title='Popular Posts' />
        <div className='content'>
          <Slider {...settings}>
            {data?.data?.results.map((val) => {
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
                    <div className='text' onClick={()=>window.open(val?.link, "_blank")}>
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

export default Ppost
