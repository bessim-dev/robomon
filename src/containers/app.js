import React, { Component } from "react";
import CardList from "../component/cardList.js";
import SearchBox from "../component/searchBox";
import "./app.css";
import Scroll from "../component/scroll";
import ErrorBoundaries from "../component/errorBoundaries";
import {connect} from 'react-redux';
import {SetSearchField,requestRobots} from './actions';
const mapStateToProps = state => {
  return {
      searchField : state.SearchRobots.searchField,
      robots:state.requestRobots.robots,
      isPending:state.requestRobots.isPending,
      error:state.requestRobots.error,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange:(event) => {dispatch(SetSearchField(event.target.value))},
    onRequestRobots:()=>dispatch(requestRobots())
  }
}
class App extends Component {
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };
  componentDidMount() {
    this.props.onRequestRobots()
  }
  render() {
    const {searchField,onSearchChange,robots,isPending} = this.props;
    const filtredrobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div>
        <h1>RobotFriends for Monica</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundaries>
            <CardList robots={filtredrobots} />
          </ErrorBoundaries>
        </Scroll>
      </div>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
