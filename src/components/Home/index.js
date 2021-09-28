import { useState } from "react";

export const Home = ({ onLogin, onSignUp }) => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const handelLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handelPassChange = (e) => {
    setPass(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    setLogin("");
    setPass("");

    if (!!onLogin) {
      onLogin(login, pass);
    } else {
      onSignUp(login, pass);
    }
  };

  return (
    <>
      <h3>{!!onLogin ? "Login" : "SignUp"}</h3>
      <form onSubmit={handelSubmit}>
        <input type="text" value={login} onChange={handelLoginChange}></input>
        <input type="password" value={pass} onChange={handelPassChange}></input>
        <input type="submit" />
      </form>
    </>
  );
};
