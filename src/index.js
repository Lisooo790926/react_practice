// ES6
// import React from "react";
// import { ReactDOM } from "react-dom";
// import SearchBar from "./component/search_bar";

// ES5
const React = require('react')
const ReactDOM = require('react-dom')
const SearchBar = require("./component/search_bar")
const YTSearch  = require("youtube-api-search")

// apply based on youtube Data API
const API_KEY = "....."

// activate youtube key 
YTSearch({key: API_KEY, term: "surfboards", function(data) {
  console.log(data)
}})

// class function
// create the function component // jsx
// function component can contain class component 
// SearchBar is child component from APP component
const App = () => {
  return <div>
    <SearchBar />
  </div>; 
}

// Take this component to genarate the html
// we should give the DOM instance to specific html component
ReactDOM.render(<App/>, document.querySelector(".container"));
