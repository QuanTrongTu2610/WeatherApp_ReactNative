import reducer from './reducer'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import mySaga from '../redux-saga/redux-saga'
import { logger } from 'redux-logger'


const saga = createSagaMiddleware()
const middleware = [saga, logger]
const store = createStore(reducer, applyMiddleware(...middleware))
saga.run(mySaga)

export default store