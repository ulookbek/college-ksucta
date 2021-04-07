function Slider() {
  return (
    <div className="slider">
      <ul className="bxslider">
        <li>
          <div className="container">
            <div className="info">
              <h2>
                Добро пожаловать! <br />
                <span>в колледж Кгуста</span>
              </h2>
              <a href="#">Вы абитуриент?</a>
            </div>
          </div>
        </li>
        <li>
          <div className="container">
            <div className="info">
              <h2>
                У нас учатся более
                <br />
                <span>1000+ студентов</span>
              </h2>
              <a href="#">Выбрать специальность >> </a>
            </div>
          </div>
        </li>
        <li>
          <div className="container">
            <div className="info">
              <h2>
                Здесь можно подставить
                <br />
                <span>Какой то текст</span>
              </h2>
              <a href="#">И здесь тоже</a>
            </div>
          </div>
        </li>
      </ul>
      <div className="bg-bottom"></div>
    </div>
  );
}

export default Slider;
