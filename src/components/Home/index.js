import { Button, TextField } from "@material-ui/core";
import { useState } from "react";

export const Home = ({ onLogin, onSignUp }) => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const handelLoginChange = (e) => {
    setLogin(e.target.value);
  };

/*   const handleLogin = async(email, pass) => {
    try{
      await login(email, pass);
      //setAuthed(true);
    } catch (e) {
      console.log(e);
      //TODO setError()
    }
  }; */

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
    <div className="HomeForm">
      <h3>{!!onLogin ? "Login" : "SignUp"}</h3>
      <form onSubmit={handelSubmit}>
        <TextField label="Email" type="text" value={login} onChange={handelLoginChange}></TextField>
        <br/>
        <TextField label="Password" type="password" value={pass} onChange={handelPassChange}></TextField>
        <br/>
        <Button className="HomeBtn" variant="outlined" type="submit">Submit</Button>
      </form>
    </div>
  );
};
