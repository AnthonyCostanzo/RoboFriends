import {SET_SEARCH_FIELD,REQUEST_ROBOTS_PENDING,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_FAILED} from './constants.js';
import * as reducers from './reducers'

describe('searchRobots',()=>{
    const initialStateSearch = 
    {
        searchField : ""
    }
    it ('should return initial state',()=>
    {
        expect(reducers.searchRobots(undefined,{})).toEqual({searchField:""})

    })
    it ('should update state',()=>
    {
        expect(reducers.searchRobots('John',{})).toEqual("John")
    })

    it ('should handle setSearchField',()=>
    {
        expect(reducers.searchRobots(initialStateSearch,{
            type:SET_SEARCH_FIELD,
            payload:'abc'})).toEqual({searchField:"abc"})
    })
})

describe('requestRobots',()=>
{
    const InitialStateRobots = {
        isPending:false,
        robots: [],
        error:""
    }
    const mockRobots = [
            {
                id:1,
                name:"John Snow",
                username:'JohnJohn',
                email:'john@gmail.com'
            }
        ]

    it('should handle initial state',()=>
    {
        expect(reducers.requestRobots(undefined,{})).toEqual(
            {
                robots:[],
                isPending:false,
                error:""
            }
        )
    })
   
    it('should handle REQUEST_ROBOTS_PENDING',()=>
    {
        expect(reducers.requestRobots(InitialStateRobots,({type:REQUEST_ROBOTS_PENDING}))).toEqual({
        robots: [],
        error:"",
        isPending:true})
    })
    it('should handle REQUEST_ROBOTS_SUCCESS',()=>
    {
        expect(reducers.requestRobots(InitialStateRobots,{type:REQUEST_ROBOTS_SUCCESS,payload:mockRobots})).toEqual(
            {
                robots:[...mockRobots],
                error:"",
                isPending:false
            }
        )
    })
    it('should handle REQUEST_ROBOTS_FAILED',()=>
    {
        expect(reducers.requestRobots(InitialStateRobots,{type:REQUEST_ROBOTS_FAILED,payload:'error'})).toEqual(
            {
                robots:[],
                error:"error",
                isPending:false
            }
        )
    })
})
  