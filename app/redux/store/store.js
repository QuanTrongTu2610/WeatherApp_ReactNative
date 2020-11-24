import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers/index'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../../redux-saga/redux-saga'


const sagaMiddleware = createSagaMiddleware()
const middleWare = [sagaMiddleware]


//last middleware
if (process.env.NODE_ENV === 'development') {
    middleWare.push(logger)
}
// use debugger ui
const Store = createStore(reducers, applyMiddleware(...middleWare))
sagaMiddleware.run(rootSaga)
export default Store