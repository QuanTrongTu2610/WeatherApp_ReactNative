import { CHANGE_THEMES } from '../actions/themes'

const initialState = {
    primaryColor: '#4F6D7A'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEMES:
            return {
                ...state,
                primaryColor: action.color,
            }
        default:
            return state
    }
}

export default reducer