import "./NewsCard.css";
import SentimentChart from "../card/sentiment/analysis";
import Comments from "../card/comments/comment";
import { sport } from "../../dummyData";

const data=await sport("technology");

const Technology = () => {
  return (
    <>
    {data?.data?.articles?.map((val: { cover: string | undefined; catgeory: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; title: string | any[]; date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) => {
       if(val.title!=="[Removed]"&&val.description!=="[Removed]"&&val.urlToImage!==null){
              return (
               <>
               <div className={`news-card `}>
      <div className="par1">
        <img src={val.urlToImage===null?"data:image/jpeg;base64,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":val.urlToImage} alt="News" className="news-card__image" />
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
            <SentimentChart description={val?.description+val?.content}/>
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
            })
          }
    
    </>
  );
};

export default Technology;
