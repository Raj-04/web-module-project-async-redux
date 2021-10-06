import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { GOT_TEAMS } from "../actions";

const initialState = {
    teams: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GOT_TEAMS:
            return {
                ...state, 
                teams: action.payload
            }
        default:
            return state
    }
}




export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk))); 

