import {
     CHANGE_SEARCH_FIELD,
     RQUESTE_ROBOTS_PENDING,
     RQUESTE_ROBOTS_SUCCESS,
     RQUESTE_ROBOTS_FAILED, 
        } from "./constants";

export const SetSearchField = (text) => ({
    type:CHANGE_SEARCH_FIELD,
    payload:text,
})
export const requestRobots = () => (dispatch) => {
    dispatch({type:RQUESTE_ROBOTS_PENDING})
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then(data => dispatch({type:RQUESTE_ROBOTS_SUCCESS,payload:data}))
        .catch(error => dispatch({type:RQUESTE_ROBOTS_FAILED,payload:error}))
}