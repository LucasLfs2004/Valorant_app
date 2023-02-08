import { createStore, combineReducers } from 'redux'

import titleReducer from './reducers/title'

const reducers = combineReducers({
    title: titleReducer,
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig