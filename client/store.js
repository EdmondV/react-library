import { createStore } from 'redux'
// import { reducers } from './reducers/index.js'

const configureStore = (reducers) => {
  const reduxStore = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   )
  return reduxStore
}

export default configureStore
