const React = require("react");
const VideoListItem = require("./vedio_list_item")

// function component should use props to retrieve the data from the parent
const VideoList = (props) => {

    // console.log(props.videos)
    const videoItems = props.videos.map((video) => {
        return <VideoListItem 
            onVideoSelect={props.onVideoSelect}
            key={video.etag} video={video}/>
    })
    
    return <ul className="col-md-4 list-group">
        {videoItems}
    </ul>
}

// ES6 
// export default VideoList;

module.exports = VideoList;