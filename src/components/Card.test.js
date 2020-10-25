import {shallow} from 'enzyme';
import React from 'react';
import Card from './Card';

it('expect to render Card component',()=>
{
    const mockRobots = [
        {
            id:1,
            name:"John Snow",
            username:'JohnJohn',
            email:'john@gmail.com'
        }
    ]
    expect(shallow(<Card key = {1} id ={mockRobots[0].id} name = {mockRobots[0].name} email = {mockRobots[0].email}/>).length).toEqual(1);
})
