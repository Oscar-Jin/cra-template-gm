import React from "react";
import { useHistory } from "react-router-dom";

const App = () => {
  const history = useHistory();

  const logout = () => {
    history.push("/logout");
  };

  return (
    <div>
      <h1 className="text-xl">Create React App</h1>
      <h2>Home</h2>
      <br />
      <button className="flex items-center mt-5" onClick={logout}>
        <span className="material-icons">logout</span>
        <span>Log out</span>
      </button>
    </div>
  );
};

export default App;
