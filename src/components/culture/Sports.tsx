import "./NewsCard.css";
import SentimentChart from "../card/sentiment/analysis";
import Comments from "../card/comments/comment";
import { lifestyle } from "../../dummyData";


const data=await lifestyle("sports");
console.log(data.data.articles)
console.log(data.data.articles)
const Sports = () => {
  return (
    <>
    {data?.data?.articles?.map((val: { cover: string | undefined; catgeory: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; title: string | any[]; date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) => {
        if(val.title!=="[Removed]"&&val.description!=="[Removed]"){
            return (
              <>
              <div className={`news-card `}>
     <div className="par1">
       <img src={val.urlToImage===null?"https://blogs.dpuerp.in/images/blog/10/524-prevention-is-better-than-cure.jpg":val.urlToImage} alt="News" className="news-card__image" />
     </div>

     <div className="par2">
       <div className="par21">
         <div className="news-card__content">
           <h2 className="news-card__title">{val?.title}</h2>
           <p className="news-card__description">{val?.description}+{val?.content}</p>
         </div>
       </div>
       <div className="par3">
         <p className="source">Source - {val?.source?.name}</p>
         <button className="news-card__button" onClick={()=>window.open(val?.url, "_blank")}>
           Read More
         </button>
       </div>
       <div className="par22">
         <div className="sentiment">
         <SentimentChart description={val?.description+val?.content} />
         </div>
         <div className="comment">
           <Comments />
         </div>
       </div>
     </div>
   </div>
              </>
             )
          }
             
            })}
    
    </>
  );
};

export default Sports;
