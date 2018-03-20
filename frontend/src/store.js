import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import promiseMiddleware from 'redux-promise-middleware'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers/index'

const history = createHistory()
const routerStuff = routerMiddleware(history)

export { history }

const middleware = applyMiddleware(routerStuff, promiseMiddleware(), thunk)

const enhancers =
  process.env.NODE_ENV === 'development' ?
    composeWithDevTools(middleware)
    : middleware

const store = createStore(rootReducer, {}, enhancers)

export default store
