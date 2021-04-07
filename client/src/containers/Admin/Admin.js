import AdminEvents from "./containers/AdminEvents/AdminEvents";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import AdminNews from "./containers/AdminNews/AdminNews";
import "suneditor/dist/css/suneditor.min.css";

function Admin() {
  const match = useRouteMatch();
  return (
    <>
      <div className="divider"></div>
      <br />
      <br />
      <br />
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <ul style={{ padding: "0", minWidth: "200px" }}>
          <li>
            <NavLink
              className="btn blue w-100 mb-1"
              to={`${match.url}/news`}
              activeStyle={{
                backgroundColor: "#2c4167",
              }}
            >
              Новости
            </NavLink>
          </li>
          <li>
            <NavLink
              className="btn blue w-100 mb-1"
              to={`${match.url}/events`}
              activeStyle={{
                backgroundColor: "#2c4167",
              }}
            >
              События
            </NavLink>
          </li>
          <li>
            <NavLink
              className="btn blue w-100 mb-1"
              to={`${match.url}/depatments`}
              activeStyle={{
                backgroundColor: "#2c4167",
              }}
            >
              Отделения
            </NavLink>
          </li>
          <li>
            <NavLink
              className="btn blue w-100 mb-1"
              to={`${match.url}/for-students`}
              activeStyle={{
                backgroundColor: "#2c4167",
              }}
            >
              Для студентов
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route path={`${match.url}/events`} exact component={AdminEvents} />
          <Route path={`${match.url}/news`} exact component={AdminNews} />
        </Switch>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

export default Admin;
