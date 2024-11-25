
import { Link, useNavigate } from "react-router-dom"

const Card = ({ item: { id, cover, catgeory, title, authorName, time,desc } }) => {
  const navigate = useNavigate();
const handleclick=(item)=>{
  console.log(item)
 navigate('/OneCard',{ state: { cardDetails: item } })

}
  return (
    <>
      <div className='box'>
        <div className='img'>
          <img src={cover} alt='' />
        </div>
        <div className='text'>
          <span className='category'>{catgeory}</span>
          {/*<h1 className='titleBg'>{title}</h1>*/}
            
            <h1 className='titleBg' onClick={()=>handleclick({item: { id, cover, catgeory, title, authorName, time,desc }})}>{title} </h1>
           
          
          <div className='author flex' >
            <span>by {authorName}</span>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
