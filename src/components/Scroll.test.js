import {shallow} from 'enzyme';
import React from 'react';
import Scroll from './Scroll';

it ('renders with no errors',()=>
{
    expect(shallow(<Scroll/>));
})