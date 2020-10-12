import React from 'react';
import {connect} from 'react-redux';
import CardList from '../components/Cardlist';
import SearchBox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css'
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';

import {requestRobots,setSearchField } from '../actions.js';

const mapStateToProps = state =>
{
  return {
    searchField: state.searchRobots.searchField,
    robots:state.requestRobots.robots,
    isPending:state.requestRobots.isPending,
    error:state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) =>
{
  return {
    onSearchChange: (event)=> dispatch(setSearchField(event.target.value)),
    onRequestRobots:()=> dispatch(requestRobots())
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
    }
  }
  componentDidMount()
  {
    this.props.onRequestRobots();
  }
  render() {
    const {searchField,onSearchChange,robots,isPending} = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <Header/>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
              <ErrorBoundry>
            <CardList robots={filteredRobots} />
              </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);




