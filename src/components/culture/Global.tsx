import "./NewsCard.css";
import SentimentChart from "../card/sentiment/analysis";
import Comments from "../card/comments/comment";
import { info } from "../../dummyData";


const data=await info("haridwar");

const Global = () => {
  return (
    <>
    {data?.data?.articles?.map((val: { cover: string | undefined; catgeory: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; title: string | any[]; date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) => {
       if(val.title!=="[Removed]"&&val.description!=="[Removed]"&&val.urlToImage!==null){
              return (
               <>
               <div className={`news-card `}>
      <div className="par1">
        <img src={val.urlToImage===null?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ZhmyuPsYMB6d7xxlJUZl3s0itQ0Hx1j5TA&s":val.urlToImage} alt="News" className="news-card__image" />
      </div>

      <div className="par2">
        <div className="par21">
          <div className="news-card__content">
            <h2 className="news-card__title">{val?.title}</h2>
            <p className="news-card__description">{val?.description}{val?.content}</p>
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

export default Global;
