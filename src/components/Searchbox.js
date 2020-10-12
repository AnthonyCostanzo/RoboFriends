import React from 'react';

const SearchBox = (props) =>
{
    let {searchChange} = props;
    return (
        <div className = 'pa2'>
        <input aria-label= 'searchRobots' onChange = {searchChange} className='pa3 ba b--green bg-lighest-blue' type = 'search' placeholder = 'search robots'/>
        </div>
    )
}


export default SearchBox;