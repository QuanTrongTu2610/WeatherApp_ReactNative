import { GET_ERROR_STATE, GET_RESULT, GET_INIT_STATE } from '../redux/action'
import { takeEvery, call, put , takeLatest} from 'redux-saga/effects'

const longtitude = '21.028511'
const latitude = '105.804817'
const key = '4e68e5d097807d21ca2bd82f24e6b53a'
//fetch data

// let uri = 'https://api.darksky.net/forecast/4e68e5d097807d21ca2bd82f24e6b53a/21.027763,105.834160'
// let option = {
//     method: 'GET',
//     mode: 'cors'
// }

// let req = new Request(uri, option)

const fetchWeather = () => {
    return (
        fetch(`https://api.darksky.net/forecast/4e68e5d097807d21ca2bd82f24e6b53a/${longtitude},${latitude}`)
    )
}

function* getInitState() {
    try {

        const response = yield call(fetchWeather)
        const result = yield response.json()

        if (result.error) {
            yield put({ type: GET_ERROR_STATE, error: result.error })
        } else {
            yield put({ type: GET_RESULT, result})
        }
    } catch (e) {
        yield put({ type: GET_ERROR_STATE, error: e.message })
    }

}

export default function* rootSaga() {
    yield takeEvery(GET_INIT_STATE, getInitState)
}