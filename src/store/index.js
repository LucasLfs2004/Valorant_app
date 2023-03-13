import { createStore, combineReducers } from 'redux';

import titleReducer from './reducers/title';
import agentSelected from './reducers/agentSelected';
import reducersCombined from './reducers/reducersCombined';

const reducers = combineReducers({
    title: reducersCombined,
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig