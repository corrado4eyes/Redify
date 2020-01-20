import {Container} from 'inversify';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {mainReducer} from '../reducers/mainReducer';

export const configureStore = (container: Container) => {
    // Temporarily passing as extra argument a empty object, once it's made the ServiceFactory 
    // will be passed.
    const middleware = applyMiddleware(thunk.withExtraArgument({}));
    const store = createStore(mainReducer, composeWithDevTools(middleware));
    return store;
} 