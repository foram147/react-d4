import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Component } from "react";
import Warning from "./Component/Warning";
//import FilterBook from "./Component/FilterBook";

import romanceBooks from "./data/romance.json";
import fantasyBooks from "./data/fantasy.json";
import historyBooks from "./data/history.json";
import horrorBooks from "./data/horror.json";
import scifiBooks from "./data/scifi.json";

import Mynavbar from "./Component/Mynavbar";
import BookList from "./Component/BookList";
import Review from "./Component/Review";
import Registration from "./Component/Registration";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = { romanceBooks, historyBooks, horrorBooks, scifiBooks, fantasyBooks };
  render() {
    return (
      <div>
        <Router>
          <Mynavbar />
          <Route path="/register" exact component={Registration}></Route>

          <Route path="/browse-books" exact component={BookList}></Route>
          <Route path="/review" exact component={Review}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
