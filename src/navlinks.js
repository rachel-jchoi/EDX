import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Users = ({ match }) => <div>{match.params.id}</div>;

var style = {
  color: "red"
};

const activeEvent = (match, location) => {
  if (!match) {
    return false;
  }
  //do something
  console.log("active on : " + match.url);
};

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <NavLink exact activeStyle={style} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={style} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={style} to="/users/abc">
            Users: abc
          </NavLink>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users/:id" component={Users} />
    </div>
  </BrowserRouter>
);

export default App;
