import React from "react"
import "./music.css"
import Slider from "react-slick"
import Heading from "../../../common/heading/Heading"
import { lifestyle } from "../../../../dummyData"

const data=await lifestyle("music");


const Music = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  }
  return (
    <>
      <section className='music'>
        <Heading title='Music News' />
        <div className='content'>
          <Slider {...settings}>
            {data?.data?.articles?.map((val: { cover: string | undefined; catgeory: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; title: string | any[]; date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; desc: string | any[]; comments: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) => {
               if(val.title!=="[Removed]"&&val.description!=="[Removed]"&&val.urlToImage!==null){
                return (
                  <div className='items'>
                    <div className='box shadow flexSB'>
                      <div className='images'>
                        <div className='img'>
                          <img src={val?.urlToImage} alt='' />
                        </div>
                        <div className='category category1'>
                          <span>{val?.source?.name}</span>
                        </div>
                      </div>
                      <div className='text'>
                        <h1 className='title'>{val?.title.slice(0, 60)}...</h1>
                        <div className='date'>
                          <i className='fas fa-calendar-days'></i>
                          <label>{val?.publishedAt?.split("T")[0]}</label>
                        </div>
                        <p className='desc'>{val?.description?.slice(0,100)}...</p>
                        <div className='comment'>
                          <i className='fa fa-info '></i>
                          <a target="_blank" rel="noopener noreferrer" href={val?.url} >Read More</a>
                          
                          
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

export default Music
