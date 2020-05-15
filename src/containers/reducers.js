import {
    CHANGE_SEARCH_FIELD,
    RQUESTE_ROBOTS_PENDING,
    RQUESTE_ROBOTS_SUCCESS,
    RQUESTE_ROBOTS_FAILED, 
       } from "./constants";
const intialState = {
    searchField : '',
    onPending : false,
    robots : [],
    error : '',
    
}
export const SearchRobots = (state=intialState,action={}) =>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({},state,{searchField:action.payload})
        default:
            return state;
    }
}
export const requestRobots = (state=intialState,action={}) => {
    switch(action.type){
        case RQUESTE_ROBOTS_PENDING : 
            return Object.assign({},state,{onPending : true})
        case RQUESTE_ROBOTS_SUCCESS :
            return Object.assign({},state,{robots : action.payload,onPending:false})
        case RQUESTE_ROBOTS_FAILED : 
            return Object.assign({},state,{error : action.payload,onPending:false})
        default: return state
    }
}