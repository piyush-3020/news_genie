// import { useNavigate } from "react-router-dom";

interface CardItem {
  id: string | number;
  cover: string;
  catgeory: string;
  title: string;
  authorName: string;
  time: string;
  desc: { para1?: string; para2?: string; para3?: string }[];
}

// Define the CardProps type
interface CardProps {
  item: CardItem;
}

const Card: React.FC<CardProps> = ({ item }) => {  // Destructure the item here
  // const navigate = useNavigate();
  
  // const handleclick = (item: CardItem) => {
  //   navigate("/OneCard", { state: { cardDetails: item } });
  // };

  return (
    <>
      <div className="box">
        <div className="img">
          <img src={item.cover} alt="" />
        </div>
        <div className="text">
          <span className="category">{item.catgeory}</span>
          <h1
            className="titleBg"
            // onClick={() => handleclick(item)}
          >
            {item.title}
          </h1>

          <div className="author flex">
            <span>by {item.authorName}</span>
            <span>{item.time}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
