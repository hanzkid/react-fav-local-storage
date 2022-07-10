import { createStore, combineReducers, applyMiddleware } from "redux"

import characterReducer from './reducers/character'
import favoriteReducer from './reducers/favorite'
import loadingReducer from './reducers/loading'

import thunk from 'redux-thunk'

const mainReducer = combineReducers({
    character: characterReducer,
    favorite: favoriteReducer,
    loading: loadingReducer
})

const store = createStore(mainReducer,applyMiddleware(thunk));

export default store;