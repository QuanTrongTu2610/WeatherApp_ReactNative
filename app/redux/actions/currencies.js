export const SWAP_CURRENCY = "SWAP_CURRENCY"
export const CHANGE_AMOUNT = "CHANGE_AMOUNT"
export const CHANGE_BASE_CURRENCY = "CHANGE_BASE_CURRENCY"
export const CHANGE_QUOTE_CURRENCY = "CHANGE_QUOTE_CURRENCY"
export const GET_INIT_CONVERSION = "GET_INIT_CONVERSION"
export const CONVERSION_RESULT = 'CONVERSION_RESULT'
export const CONVERSION_ERROR = 'CONVERSION_ERROR'

export const swapCurrency = () => {
    return ({
        type: SWAP_CURRENCY
    })
}

export const changeAmount = (amount) => {
    return ({
        type: CHANGE_AMOUNT,
        amount: parseFloat(amount),
    })
}

export const changeBaseCurrency = (currency) => {
    return ({
        type: CHANGE_BASE_CURRENCY,
        currency,
    })
}

export const changeQuoteCurrency = (currency) => {
    return ({
        type: CHANGE_QUOTE_CURRENCY,
        currency,
    })
}

export const getInitialConversion = () => {
    return ({
        type: GET_INIT_CONVERSION,
    })
}