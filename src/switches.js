import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const AllUsers = () => {
  return (
    <div>
      Show All Users:
      <ul>
        <li>abc</li>
        <li>def</li>
        <li>ghi</li>
      </ul>
    </div>
  );
};
const Users = ({ match }) => <div>{match.params.id}</div>;
const DefaultRoute = () => <div>Default Route</div>;

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users/abc">Users: abc</Link>
        </li>
        <li>
          <Link to="/users/allUsers">Show All Users</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users/allUsers" component={AllUsers} />
        <Route path="/users/:id" component={Users} />
        <Route component={DefaultRoute} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
