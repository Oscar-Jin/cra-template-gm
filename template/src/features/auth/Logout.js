import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Logout = () => {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const auth = getAuth();

    signOut(auth)
      .then(() => history.push("/"))
      .catch(error => setErrorMessage(error.message));
  });

  return <div>{errorMessage}</div>;
};

export default Logout;
