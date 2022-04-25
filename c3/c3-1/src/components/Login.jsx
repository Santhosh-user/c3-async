import { useContext } from "react";
import { useState } from "react";
import { AuthAcc } from "./AuthAcc";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export const Login = () => {
  //  use reqres to log user in.

  const [PplName, setPplName] = useState("")

  const [PplWord, setPplWord] = useState("")

  const navi = useNavigate()
  const {AuthStat, flipAuthStat} = useContext(AuthAcc)

  const PplLogin=(e)=>{
    e.preventDefault()
    axios.post('/https://reqres.in/api/login', {
      email: PplName,
      password: PplWord,
    })
    .then(function (response) {
      console.log(response);
      flipAuthStat()
      navi("/")
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <form className="loginform">
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
        onChange={(e)=>{
          setPplName(e.target.value)
        }}
        onBlur={(e)=>{
          setPplName(e.target.value)
        }}
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"

        onChange={(e)=>{
          setPplWord(e.target.value)
        }}
        onBlur={(e)=>{
          setPplWord(e.target.value)
        }}

      />
      <input type="submit" value="SIGN IN"  className="login_submit" onClick={PplLogin} />
    </form>
  );
};
