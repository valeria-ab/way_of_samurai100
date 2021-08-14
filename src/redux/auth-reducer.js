import {authAPI} from "../api/api";

import {stopSubmit} from "redux-form";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_AUTH_USER_DATA": {
            return {
                ...state,
                ...action.payload
            }
        }
            case "TOGGLE_IS_FETCHING": {
            return {
                ...state,
                isFetching: action.fetching
            }
        }
        default:
            return state;
    }
}


export const toggleIsFetching = (fetching) => ({
    type: "TOGGLE_IS_FETCHING",
    fetching
})


export const setAuthUserData = ( userId, email, login, isAuth) => ({
    type: "SET_AUTH_USER_DATA",
    payload: {
        userId, email, login, isAuth
    }
})

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email,login} = data.data;
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
}

export const login = (email, password, rememberMe) => (dispatch) => {

        authAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                  dispatch(getAuthUserData())
                } else {
                    let message = data.message.length > 0 ? data.messages[0] : "Something is wrong";
                    let action = stopSubmit("login", {_error: message})
                    dispatch(action)
                }
            })

    }


export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getAuthUserData(null, null, null, false))
                }
            })
    }
}



export default authReducer;