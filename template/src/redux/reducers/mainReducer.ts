import {combineReducers} from 'redux';
// Import your reducers.


export interface RootState {
    // Define your model for the RootState.
}

export const initialState: RootState = {
    // Assign the initial values.
}

export const mainReducer = combineReducers<RootState>({
    // Create the mainReducer passing.
}) 