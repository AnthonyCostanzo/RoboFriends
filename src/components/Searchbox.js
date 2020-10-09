import React from 'react';

const SearchBox = (props) =>
{
    let {searchField,searchChange} = props;
    return (
        <div className = 'pa2'>
        <input onChange = {searchChange} className='pa3 ba b--green bg-lighest-blue' type = 'search' placeholder = 'search robots'/>
        </div>
    )
}


export default SearchBox;