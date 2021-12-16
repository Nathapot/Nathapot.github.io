import React, { useState, useEffect } from "react";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Navbar from "./components/navbar/navbar";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [name, setName] = useState("");
  /* Call backend */
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const content = await response.json();
      setName(content.name);
    })();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar setName={setName} name={name} />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Intro />
              <About />
            </Route>
            <Route path="/login">
              <Login setName={setName} />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
