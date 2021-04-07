function SingleNews() {
  return (
    <article>
      <div className="pic">
        <img src="images/1.png" alt="" />
      </div>
      <div className="info">
        <h4>Omnis iste natus error sit voluptatem accusantium </h4>
        <p className="date">14 APR 2014, Jason Bang</p>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores (...)
        </p>
        <a className="more" href="#">
          Read more
        </a>
      </div>
    </article>
  );
}

export default SingleNews;
