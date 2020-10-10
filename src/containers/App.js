import React,{useState,useEffect} from 'react';
import CardList from '../components/Cardlist';
import SearchBox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css'
import ErrorBoundry from '../components/ErrorBoundry'

function App () {

    const [robots,setRobots] = useState([]); //sets state to empty array
    const [searchField,setSearchField] = useState(""); //sets state to a empty string
    
    useEffect(()=>{
        //update state of robots 
         fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json()).then(users=> setRobots(users))
        },[]); //passing empty array tells React only to run useEffect when component initially is mounted

    const onSearchChange = (e) =>
    {
        //update state of searchfield
        setSearchField(e.target.value)
        
    }  

    const filteredRobots = robots.filter(robot=>
    {
        //sets robots to all values that return true to this statement
        return robot.name.toLowerCase().includes(searchField.toLowerCase()) 
    });
    return !robots.length ? <h1>Loading</h1> :
    (
        <div className = 'tc f2'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange = {onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots = {filteredRobots}/>
                </ErrorBoundry>
                {/* By wrapping in errorboundry if anything in cardlist fails it will be handled */}
            </Scroll>
         </div>
     );
}

export default App;