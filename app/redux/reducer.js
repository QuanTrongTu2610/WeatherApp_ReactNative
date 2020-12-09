import { GET_INIT_STATE, GET_ERROR_STATE, GET_RESULT } from './action'

const initState = {
    timeZone: 'Asian/Hanoi',
    currently: {
        "time": 0,
        "summary": "Summary",
        "icon": "icon",
        "apparentTemperature": 0,
        "temperature": 0,
        "humidity": 0,
        "pressure": 0,
        "windSpeed": 0,
        "cloudCover": 0,
        "uvIndex": 0,
        "visibility": 0,
        "ozone": 0
    },
    hourly: {
        summary: "Humid and mostly cloudy throughout the day.",
        icon: "partly-cloudy-day",
        data: [
            {
                "time": 0,
                "summary": "Summary",
                "icon": "icon",
                "apparentTemperature": 0,
                "temperature": 0,
                "humidity": 0,
                "pressure": 0,
                "windSpeed": 0,
                "cloudCover": 0,
                "uvIndex": 0,
                "visibility": 0,
                "ozone": 0
            }
        ]
    },
    daily: {
        summary: "Humid and mostly cloudy throughout the day.",
        icon: "partly-cloudy-day",
        data: [
            {
                "time": 0,
                "summary": "Summary",
                "icon": "icon",
                "apparentTemperature": 0,
                "temperature": 0,
                "humidity": 0,
                "pressure": 0,
                "windSpeed": 0,
                "cloudCover": 0,
                "uvIndex": 0,
                "visibility": 0,
                "ozone": 0
            }
        ]
    }
}

const getState = (state = initState, action) => {
    switch (action.type) {
        case GET_INIT_STATE:
            return (
                {
                    ...state,
                }
            )
        case GET_RESULT:
            return (
                {
                    ...state,
                    timeZone: action.result['timezone'],
                    currently: action.result['currently'],
                    hourly: action.result['hourly'],
                    daily: action.result['daily']
                }
            )
        case GET_ERROR_STATE:
            return (
                {
                    ...state,
                }
            )
        default:
            return (state)
    }
}

export default getState