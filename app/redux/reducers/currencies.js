import { SWAP_CURRENCY, CHANGE_AMOUNT, CHANGE_BASE_CURRENCY, CHANGE_QUOTE_CURRENCY, CONVERSION_RESULT, GET_INIT_CONVERSION, CONVERSION_ERROR } from '../actions/currencies'


const setConversions = (state, action) => {
    let conversions =
    {
        isFetching: true,
        date: '',
        rates: {},
    }
    if (state.conversions[action.currency]) {
        conversions = state.conversions[action.currency]
    }

    //return conversion
    return (
        {
            ...state.conversions,
            [action.currency]: conversions,
        }
    )

}


const initialState = {
    baseCurrency: 'USD',
    quoteCurrency: 'GBP',
    amount: 100,
    conversions: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SWAP_CURRENCY:
            return ({
                ...state,
                baseCurrency: state.quoteCurrency,
                quoteCurrency: state.baseCurrency,
            })
        case CHANGE_AMOUNT:
            return ({
                ...state,
                amount: action.amount || 0,
            })
        case CHANGE_BASE_CURRENCY:
            return ({
                ...state,
                baseCurrency: action.currency,
                conversions: setConversions(state, action),
            })
        case CHANGE_QUOTE_CURRENCY:
            return ({
                ...state,
                quoteCurrency: action.currency,
                conversions: setConversions(state, action),
            })
        case GET_INIT_CONVERSION:
            return ({
                ...state,
                conversions: setConversions(state, { currency: state.baseCurrency }),
            })
        case CONVERSION_RESULT:
            return ({
                ...state,
                baseCurrency: action.result.base,
                conversions: {
                    ...state.conversions,
                    [action.result.base]: {
                        isFetching: false,
                        ...action.result,
                    }
                }
            })
        case CONVERSION_ERROR:
            return ({
                ...state,
                error: action.error,
            })
        default:
            return state
    }
}

export default reducer;