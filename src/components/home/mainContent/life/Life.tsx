import React from "react"
import Slider from "react-slick"
import { lifestyle, popular } from "../../../../dummyData"
import Heading from "../../../common/heading/Heading"

import "../Ppost/ppost.css"
//copy ppost code

const data=await lifestyle("entertainment");
//console.log(data.data.articles)


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
            {data?.data?.articles?.map((val: { cover: string | undefined; catgeory: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; title: string | any[]; date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) => {
               if(val.title!=="[Removed]"&&val.description!=="[Removed]"&&val.urlToImage!==null){
              return (
                <div className='items'>
                  <div className='box shadow'>
                    <div className='images'>
                      <div className='img'>
                        <img src={val?.urlToImage} alt='' />
                      </div>
                      <div className='category category1'>
                        <span>{val?.source?.name}</span>
                      </div>
                    </div>
                    <div className='text' onClick={()=>window.open(val?.url, "_blank")} >
                      <h1 className='title'>{val?.title?.slice(0, 40)}...</h1>
                      <div className='date'>
                        <i className='fas fa-calendar-days'></i>
                        <label>{val?.publishedAt?.split("T")[0]}</label>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            })}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Life
