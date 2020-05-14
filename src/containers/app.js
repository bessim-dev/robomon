import React, { Component } from "react";
import CardList from "../component/cardList.js";
import SearchBox from "../component/searchBox";
import "./app.css";
import Scroll from "../component/scroll";
import ErrorBoundaries from '../component/errorBoundaries'
class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      robots: [],
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }
  render() {
    const { robots, searchField } = this.state;
    const filtredrobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div>
        <h1>RobotFriends for Monica</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundaries>
            <CardList robots={filtredrobots} />
          </ErrorBoundaries>
        </Scroll>
      </div>
    );
  }
}
export default App;
