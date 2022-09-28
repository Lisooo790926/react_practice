const { times } = require("lodash");
const React = require("React")
const Component = React.Component

// const SearchBar = () => {
//     return <input/>
// }

// class component
// each class has their own state
class SearchBar extends Component {

    constructor(props) {
        super(props);
        // we want to change the state after inputting box
        // term can be any word
        this.state = {term:'Init value'}
    }

    // if logic requirement we need to use class
    // otherwise using normal function
    render() {
        // Don't use this.state.terms = events.target.value -> this is really bad way
        // below "value" is controlled value         
        // bind the event with below function
        return <div>
         <input
            value = {this.state.term} 
            onChange={(event) => this.setState({term: event.target.value})}/>
        </div>
    }

    // event definition
    // always have event obj as argument when you bind the event
    // change below one as above one anonymous function
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

}


// export the component file here
module.exports = SearchBar;