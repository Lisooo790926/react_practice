// ES6
// Not sure why I could not use ES6 method
// import React from "react";
// import { ReactDOM } from "react-dom";
// import SearchBar from "./component/search_bar";

// ES5
const _ = require("lodash")
const React = require('react')
const ReactDOM = require('react-dom')
const SearchBar = require("./component/search_bar")
const YTSearch  = require("youtube-api-search")
const VideoList = require("./component/vedio_list")
const VideoDetail = require("./component/vedio_detail")
const Component = React.Component

// apply based on youtube Data API
const API_KEY = "....."

// class function
// class component can use this.props every where
class App extends Component {

  constructor(props) {
    super(props)

    // should be init the state here
    // This is state for only this component
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.search("surfboards")
  }

  search(term) {
    // activate youtube key 
// activate youtube key 
    // activate youtube key 
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos, 
        selectedVideo: videos[0]
      });
      // this is equals to this.setState({videos: videos})
    })
  }

  render() {
    // console.log(this.props)

    // this is restriction to avoid search too often
    const videoSearch = _.debounce(term => {this.search(term)}, 1000)

    return <div>
        <SearchBar onSearch={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
  }
}

// Take this component to genarate the html
// we should give the DOM instance to specific html component
ReactDOM.render(<App/>, document.querySelector(".container"));
