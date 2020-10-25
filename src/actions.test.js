import {SET_SEARCH_FIELD,REQUEST_ROBOTS_PENDING,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_FAILED} from './constants.js';
import * as actions from './actions'
import configureMockStore from 'redux-mock-store';
import thunkMiddleWare from 'redux-thunk';
import fetchMock, { mock } from 'fetch-mock';
import { act } from 'react-dom/test-utils';
const mockStore = configureMockStore([thunkMiddleWare]);

describe('SearchField',()=>
{
    it ('should set Search Field to correct value',()=>
    {
        const text = 'Anthony'
        const ExpectedAction = 
        {
            type:SET_SEARCH_FIELD,
            payload:text
        }
        const action = actions.setSearchField(text);
        expect(action).toEqual(ExpectedAction);
    })
})

describe('requestRobots',()=>
{
    it('should handle request robots pending and success',()=>
    {
        const store = mockStore({});
        store.dispatch(actions.requestRobots()).then(()=>
        {
            const action = store.getActions();
            const firstExpectedAction = 
            {
                type:REQUEST_ROBOTS_PENDING
            }
            expect(action[0].type).toEqual(firstExpectedAction)
            expect(action[1].type).toEqual(REQUEST_ROBOTS_SUCCESS)
        })
    });
    it('should handle request robots pending and failure',()=>
    {
        const store = mockStore({});
        const wrongApiLink = 'fjirfjrrv'
        store.dispatch(actions.requestRobots(wrongApiLink)).then(()=>
        {
            const action = store.getActions();
            const firstExpectedAction = 
            {
                type:REQUEST_ROBOTS_PENDING
            }
            expect(action[0].type).toEqual(firstExpectedAction)
            expect(action[1].type).toEqual(REQUEST_ROBOTS_FAILED)
        })
    });
})