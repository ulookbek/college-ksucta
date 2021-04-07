import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../store/actions/user-actions";

function Login() {
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    username: "",
    password: "",
  });
  console.log(state);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser({ ...state }));
  };
  return (
    <>
      <div className="divider"></div>
      <div className="container">
        <form onSubmit={formSubmitHandler}>
          <h1 className="text-center">Войти</h1>
          <fieldset
            style={{
              border: "1px solid #7e8798",
              borderRadius: "10px",
              maxWidth: "300px",
              margin: "auto",
            }}
            className="from"
          >
            <input
              value={state.username}
              name="username"
              onChange={inputHandler}
              className="form formField"
              placeholder="Логин ..."
              type="text"
            />
          </fieldset>
          <br />
          <fieldset
            style={{
              border: "1px solid #7e8798",
              borderRadius: "10px",
              maxWidth: "300px",
              margin: "auto",
            }}
            className="from"
          >
            <input
              value={state.password}
              name="password"
              onChange={inputHandler}
              className="form formField"
              placeholder="Пароль ..."
              type="password"
            />
          </fieldset>
          <br />
          <div className="text-center">
            <button className="btn blue" type="submit">
              Войти
            </button>
          </div>
          <br />
          <br />
          <br />
          <br />
        </form>
      </div>
    </>
  );
}

export default Login;
