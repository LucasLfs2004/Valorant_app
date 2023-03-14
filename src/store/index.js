import { createStore, combineReducers } from 'redux';

import reducersCombined from './reducers/reducersCombined';

const reducers = combineReducers({
    title: reducersCombined,
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig