import { useState } from "react";

const useSimpleAuth = () => {
  const [loggedIn, setIsLoggedIn] = useState(false);

  const isAuthenticated = () =>
    loggedIn || localStorage.getItem("openhire_token") !== null;

  const register = userInfo => {
    return fetch("https://openhireapi.herokuapp.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(res => res.json())
      .then(res => {
        if ("token" in res) {
          localStorage.setItem("openhire_token", res.token);
          localStorage.setItem("user_id", res.user_id);
          setIsLoggedIn(true);
        }
      });
  };

  const login = credentials => {
    return fetch("https://openhireapi.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(res => res.json())
      .then(res => {
        if ("valid" in res && res.valid && "token" in res) {
          localStorage.setItem("openhire_token", res.token);
          localStorage.setItem("user_id", res.profile_id);
          setIsLoggedIn(true);
        }
      });
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("openhire_token");
    localStorage.removeItem("user_id")
  };

  return { isAuthenticated, logout, login, register };
};

export default useSimpleAuth;