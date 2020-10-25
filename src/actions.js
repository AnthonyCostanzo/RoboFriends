import {SET_SEARCH_FIELD,REQUEST_ROBOTS_PENDING,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_FAILED} from './constants.js';
import {apiCall} from './api/api';

// wrapping the function in parentheses automatically makes it return what is inside of the function 
export const setSearchField = (text) => (
    {
        type:SET_SEARCH_FIELD,
        payload:text
    }
)

export const requestRobots = (apiLink = "https://jsonplaceholder.typicode.com/users") => async (dispatch) => {
  try {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    const data = await apiCall(apiLink);
    dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error });
  }
};
