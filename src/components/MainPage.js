import React from 'react';
import CardList from './Cardlist';
import SearchBox from './Searchbox';
import Scroll from './Scroll';
import './MainPage.css'
import ErrorBoundry from './ErrorBoundry';
import Header from './Header';

class MainPage extends React.Component {
  
  componentDidMount()
  {
    this.props.onRequestRobots();
  }
  filterRobots = () =>
  {
       return this.props.robots.filter(robot =>{
        return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
       })
  }

  render() {
    const {onSearchChange,robots,isPending} = this.props;
    const filteredRobots = this.filterRobots(robots)
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

export default MainPage;

