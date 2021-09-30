import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import Warning from "./Component/Warning";
//import FilterBook from "./Component/FilterBook";
import MyBadge from "./Component/MyBadge";
import SingleBook from "./Component/SingleBook";
import dataBooks from "./data/romance.json";
import BookList from "./Component/BookList";

function App() {
  return (
    <div className="App">
      <Warning AlertMessage="Hello" />
      <MyBadge text="NEW!!" color="info" />
      <SingleBook book={dataBooks[0]}></SingleBook>
      <BookList books={dataBooks} />
    </div>
  );
}

export default App;
