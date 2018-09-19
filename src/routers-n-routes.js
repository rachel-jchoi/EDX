import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;

const App = () => (
  <BrowserRouter>
    <div>
      <Route path="/home" component={Home} />
      <Route path="/about" render={() => <div>About</div>} />
      <Route children={() => <div>Always Rendered</div>} />
    </div>
  </BrowserRouter>
);

export default App;
