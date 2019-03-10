import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import RegisterAttendant from "./components/auth/RegisterAttendant";
import CreateProduct from "./components/products/CreateProduct";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route exact path="/" component={Landing} />
            <Route path="/users/login" component={Login} />
            <Route path="/users/register" component={RegisterAttendant} />
            <Route path="/products/create" component={CreateProduct} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
