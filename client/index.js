import React from 'react'
import { render } from 'react-dom'
import Main from './components/main'
import { Provider } from 'react-redux'

import { reducers } from './reducers/index.js'
import store from './store'

const Store = store(reducers)

render(
  <Provider store={Store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
