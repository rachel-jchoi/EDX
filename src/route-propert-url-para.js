import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Users = ({ match, location, history }) => {
  console.log("match", match);
  console.log("location", location);
  console.log("history", history);
  return <div>{match.params.id}</div>;
};
const Info = ({ match }) => {
  return (
    <div>
      <Route
        path={match.url + "/phone"}
        render={props => <div>Phone: 123 456 7890</div>}
      />
      <Route
        path={match.url + "/email"}
        render={props => <div>Email: email@email.com</div>}
      />
      <Route
        path={match.url + "/address"}
        render={props => <div>Address: 123 Address</div>}
      />
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users/:id" component={Users} />
      <Route path="/info" component={Info} />
    </div>
  </BrowserRouter>
);

export default App;
