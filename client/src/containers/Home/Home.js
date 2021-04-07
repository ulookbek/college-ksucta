import News from "../../components/News/News";
import Posts from "../../components/Posts/Posts";
import Slider from "../../components/Slider/Slider";
import Events from "../../components/Events/Events";

function Home() {
  return (
    <>
      <Slider />
      <Posts />
      <News />
      <Events />
      <div className="container">
        <a href={`#fancy`} className="info-request">
          <span className="holder">
            <span className="title">Хотите связаться с нами?</span>
            <span className="text">Для это кликните сюда </span>
          </span>
          <span className="arrow" />
        </a>
      </div>
      <div id="fancy">
        <h2>Пожалуйста заполните информацию</h2>
        <form action="#">
          <div className="left">
            <fieldset className="mail">
              <input placeholder="Email ..." type="text" />
            </fieldset>
            <fieldset className="name">
              <input placeholder="Имя ..." type="text" />
            </fieldset>
            <fieldset className="subject">
              <select>
                <option>Я абитуриент</option>
                <option>Я родитель</option>
              </select>
            </fieldset>
          </div>
          <div className="right">
            <fieldset className="question">
              <textarea placeholder="Вопрос ..." defaultValue={""} />
            </fieldset>
          </div>
          <div className="btn-holder">
            <button className="btn blue" type="submit">
              Отправить
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Home;
