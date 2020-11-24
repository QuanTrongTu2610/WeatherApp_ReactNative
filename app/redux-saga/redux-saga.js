import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INIT_CONVERSION, CONVERSION_ERROR, CONVERSION_RESULT } from '../redux/actions/currencies'
import { takeEvery, select, call, put } from 'redux-saga/effects'
//fetch data return promises
const getRate = (currency) => {
    return (
        fetch('https://api.frankfurter.app/latest?from=' + currency)
    )
}

function* fetchLatestConversionRates(action) {

    try {
        let currency = action.currency
        if (currency === undefined) {
            currency = yield select(state => state.currencies.baseCurrency)
        }
        const response = yield call(getRate, currency)
        const result = yield response.json()

        if (result.error) {
            yield put({ type: CONVERSION_ERROR, error: result.error })
        } else {
            yield put({ type: CONVERSION_RESULT, result })
        }
    } catch (e) {
        yield put({ type: CONVERSION_ERROR, error: e.message })
    }
}

export default function* rootSaga() {
    yield takeEvery(GET_INIT_CONVERSION, fetchLatestConversionRates);
    yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
    yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
}