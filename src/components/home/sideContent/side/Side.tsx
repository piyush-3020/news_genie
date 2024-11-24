import React from "react"
import "./side.css"
import Slider from "react-slick"
import Heading from "../../../common/heading/Heading"
import { gallery } from "../../../../dummyData"
import Tpost from "../Tpost/Tpost"
import SocialMedia from "../social/SocialMedia"
import { useNavigate } from "react-router-dom"

//const allCat = [...new Set(popular.map((curEle) => curEle.catgeory))]
//console.log(allCat)


const Side = () => {
  const navigate=useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const catgeory = ["Business", "Politics", "Sports", "Fun", "Technology", "Science", "Health", "Education"]
  return (
    <>
      <Heading title='Stay Connected' />
      <SocialMedia />

      <Heading title='Subscribe' />

      <section className='subscribe'>
        <h1 className='title'>Subscribe to our New Stories</h1>
        <form action=''>
          <input type='email' placeholder='Email Address...' />
          <button>
            <i className='fa fa-paper-plane'></i> SUBMIT
          </button>
        </form>
      </section>

      <Tpost />

      <section className='catgorys'>
        <Heading title='Categories' />
        {/*<div className='items'>{allCat}</div>*/}
        {catgeory.map((val) => {
          return (
            <div className='category category1' onClick={()=>navigate(`/${val}`)}>
              <span>{val}</span>
            </div>
          )
        })}
      </section>

      <section className='gallery'>
  <Heading title='Gallery' />
  <div className='gallery-column'>
    {gallery.map((val, index) => (
      <div className='img' key={index}>
        <img src={val.cover} alt={`Gallery Image ${index + 1}`} />
      </div>
    ))}
  </div>
</section>

    </>
  )
}

export default Side
