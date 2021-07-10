import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const login = event => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => history.push("/home"))
      .catch(error => setErrorMessage(error.message));

    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="email"
          className="block"
          placeholder="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          required
        />
        <input
          type="password"
          className="block"
          placeholder="Password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          required
        />

        <button type="submit" className="flex items-center mt-5">
          <span>Login</span>
          <span className="material-icons-outlined">login</span>
        </button>
      </form>
      <div>{errorMessage}</div>
    </div>
  );
};

export default Login;
