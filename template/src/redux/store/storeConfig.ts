import {Container} from 'inversify';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {mainReducer} from '../reducers/mainReducer';
import ServiceFactory from '../../services/serviceFactory';


export const configureStore = (container: Container) => {
    const serviceFactory = new ServiceFactory(container)
    const middleware = applyMiddleware(thunk.withExtraArgument(serviceFactory));
    const store = createStore(mainReducer, composeWithDevTools(middleware));
    return store;
} 