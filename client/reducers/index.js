import { combineReducers } from 'redux'

const reducers = combineReducers({
  req: require('./request').reducer
})

export { reducers }
