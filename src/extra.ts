return(
    <div className={`news-card ${type ? `news-card--${type}` : ""}`}>
    <div className="par1">
      <img src={val?.urlToImage} alt="News" className="news-card__image" />
    </div>

    <div className="par2">
      <div className="par21">
        <div className="news-card__content">
          <h2 className="news-card__title">{title}</h2>
          <p className="news-card__description">{description}</p>
        </div>
      </div>
      <div className="par3">
        <p className="source">Source - {Source}</p>
        <button className="news-card__button" onClick={onReadMore}>
          Read More
        </button>
      </div>
      <div className="par22">
        <div className="sentiment">
          <SentimentChart />
        </div>
        <div className="comment">
          <Comments />
        </div>
      </div>
    </div>
  </div>
   )