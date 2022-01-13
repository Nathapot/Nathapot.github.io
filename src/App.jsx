import React, { /*useState, useEffect,*/ useContext } from "react";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
// import Navbar from "./components/navbar/navbar";
// import Login from "./pages/login/login";
// import Register from "./pages/register/register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./components/productList/productList";
import Contact from "./components/contact/contact";
import Toggle from "./components/toggle/toggle";
import { ThemeContext } from "./context";

const App = () => {
  // const [name, setName] = useState("");
  // /* Call backend */
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch("http://localhost:8000/api/user", {
  //       headers: { "Content-Type": "application/json" },
  //       credentials: "include",
  //     });
  //     const content = await response.json();
  //     setName(content.name);
  //   })();
  // }, []);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundColor: darkMode ? "#222" : "white",
          color: darkMode && "white",
        }}
      >
        {/* <Navbar setName={setName} name={name} /> */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Toggle />
              <Intro />
              <About />
              <ProductList />
              <Contact />
            </Route>
            {/* <Route path="/login">
              <Toggle />
              <Login setName={setName} />
            </Route>
            <Route path="/register">
              <Toggle />
              <Register />
            </Route> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
