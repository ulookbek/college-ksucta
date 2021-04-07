import { useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./containers/Home/Home";
import News from "./containers/News/News";
import Events from "./containers/Events/Events";
import Admin from "./containers/Admin/Admin";
import Login from "./containers/Login/Login";

function App() {
  const user = useSelector((state) => state.users.user);
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/news" component={News} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/about-us" component={Events} />
          <Route exact path="/about-college" component={Events} />
          <Route exact path="/contacts" component={Events} />
          <Route
            path="/admin"
            render={() => {
              return user ? <Admin /> : <Redirect to="/login" />;
            }}
          />
          <Route
            exact
            path="/login"
            render={() => {
              return user ? <Admin /> : <Login />;
            }}
          />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
