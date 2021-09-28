import { useState } from "react";

export const Home = ({onLogin}) => {
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
    setLogin('');
    setPass('');
    onLogin();
  };

  return (
    <>
      <h3>This is home page</h3>
      <form onSubmit={handelSubmit}>
        <input type="text" value={login} onChange={handelLoginChange}></input>
        <input type="password" value={pass} onChange={handelPassChange}></input>
        <input type="submit"/ >

      </form>
    </>
  );
};
