import {shallow,mount} from 'enzyme';
import React from 'react';
import SearchBox from './Searchbox';
import toJson from 'enzyme-to-json';

describe("SearchBox", () => {
    let wrapper;
    let mockSearchChange;
    beforeEach(() => {
      mockSearchChange = jest.fn();
      wrapper = shallow(<SearchBox searchChange={mockSearchChange} />);
    });
    it('should render',()=>
    {
        expect(shallow(<SearchBox searchChange = {mockSearchChange}/>).length).toEqual(1);
    })
    it("should match the snapshot", () => {
        expect(<SearchBox searchChange = {mockSearchChange}/>).toMatchSnapshot();
      });

      it('should pass a selected value to the onChange function', () => {
        const component = shallow(<SearchBox />);
        component.find('input').simulate('change', { target: {
          value: 'Change function' }
        });
    
        expect(toJson(component)).toMatchSnapshot();
      });
})
  

    //component.find('input').simulate('change');