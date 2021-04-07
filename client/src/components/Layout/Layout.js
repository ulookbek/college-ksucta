import { Link } from "react-router-dom";
function Layout({ children }) {
  return (
    <>
      <header id="header">
        <div className="container">
          <Link id="logo" to="/">
            College of KSUCTA
          </Link>
          <div className="menu-trigger" />
          <nav id="menu">
            <ul>
              <li>
                <Link to="/events">События</Link>
              </li>
              <li>
                <Link to="/about-college">О колледже</Link>
              </li>
              <li>
                <a href="http://spo.ksucta.kg/Account/Login?ReturnUrl=%2F">
                  EBilim
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/news">Новости</Link>
              </li>
              <li>
                <Link to="/about-us">О нас</Link>
              </li>
              <li>
                <a href="#fancy" className="get-contact">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {children}
      <footer id="footer">
        <div className="container">
          <section>
            <article className="col-1">
              <h3>Наши контакты</h3>
              <ul>
                <li className="address">
                  <a href="/#">
                    Малдыбаева, <br />
                    36/1
                  </a>
                </li>
                <li className="mail">
                  <a href="/#">college.ksucta1@gmail.com</a>
                </li>
                <li className="phone last">
                  <a href="/#">+ (996) 312-59-53-92</a>
                </li>
              </ul>
            </article>
            <article className="col-2">
              <h3>О нас</h3>
              <ul>
                <li>
                  <a href="/#">Общеобразовательное отделение</a>
                </li>
                <li>
                  <a href="/#">Инженерно-техническое отделение</a>
                </li>
                <li>
                  <a href="/#">Отделение Управление и IT</a>
                </li>
                <li className="last">
                  <a href="/#">Отделение Архитектура и дизайн</a>
                </li>
              </ul>
            </article>
            <article className="col-3">
              <h3>Мы в соц. сетях</h3>
              <ul>
                <li className="facebook">
                  <a href="https://www.instagram.com/college_ksucta.kg/">
                    Instagram
                  </a>
                </li>
              </ul>
            </article>
            <article className="col-4">
              <h3>О Колледже</h3>
              <ul>
                <li>
                  <a
                    href="https://ksucta.kg/images/stories/colledge/mission_spo.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Миссия СПО (Колледж)
                  </a>
                </li>
                <li>
                  <a href="/#">Цели задачи СПО (Колледж)</a>
                </li>
                <li>
                  <a href="/#">Ключевые задачи СПО (Колледж)</a>
                </li>
                <li>
                  <a href="/#">Положения</a>
                </li>
                <li>
                  <a href="/#">Директорат СПО (Колледж)</a>
                </li>
                <li>
                  <a href="/#">Должностные инструкции</a>
                </li>
                <li>
                  <a href="/#">Должностные инструкции</a>
                </li>
                <li>
                  <a href="/#">Планы</a>
                </li>
                <li className="last">
                  <Link to="/admin">Войти</Link>
                </li>
              </ul>
            </article>
          </section>
          <p className="copy">
            СПО (Колледж) Кыргызского Государственного Университета
            Строительства Транспорта и Архитектуры им. Н. Исанова.
            <a href="/#" target="_blank" rel="noreferrer noopener">
              Copyright © 2020.
            </a>
            Все права защищены.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Layout;
