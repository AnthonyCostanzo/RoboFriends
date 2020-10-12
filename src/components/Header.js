import React from 'react';

class Header extends React.Component 
{
    // if this returns true it updates component, shouldComponentUpdate receives nextProps and nextState
    shouldComponentUpdate(nextProps,nextState)
    {
        return false; //by doing this the header component will only render once;
    }
    
    render()
    {
        return <h1 className='f1'>RoboFriends</h1>
    }
}

export default Header;