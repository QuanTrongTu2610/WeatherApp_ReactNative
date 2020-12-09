export const GET_INIT_STATE = 'GET_INIT_STATE'
export const GET_ERROR_STATE = 'GET_ERROR_STATE'
export const GET_RESULT = 'GET_RESULT'

export const getInit = () => {
    return (
        {
            type: GET_INIT_STATE
        }
    )
}