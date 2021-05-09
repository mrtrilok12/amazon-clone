import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    // login from firebase
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
    //   from firebase
  };
  return (
    <div>
      <div className="login">
        <Link to="/">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG6.png"
            className="login_logo"
            alt=""
          />
        </Link>
        <div className="login__container">
          <h1>Sign-in</h1>
          <form>
            <h5>E-mail </h5>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              className="login__formEmail"
            />

            <h5>Password </h5>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="login__formEmail"
            />
            <button
              type="submit"
              onClick={signIn}
              className="login__signInButton"
            >
              Sign- In
            </button>
          </form>
          <p>
            By signing-in you agree to the Amazon Clone Conditions of Use &
            Sale. Please see out Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <button
            onClick={register}
            type="button"
            className="login__registerButton"
          >
            Create Your Amazon Account{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
