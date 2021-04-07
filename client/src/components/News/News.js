import SingleNews from "./SingleNews";

function News() {
  return (
    <section className="news">
      <div className="container">
        <h2>Последние новости</h2>

        <SingleNews />
        <SingleNews />
        <div className="btn-holder">
          <a className="btn" href="#">
            Посмотреть все новости
          </a>
        </div>
      </div>
      {/* / container */}
    </section>
  );
}

export default News;
