import {authAPI, userAPI} from "../api/api";
import {setTotalUsersCount, setUsers} from "./users-reducer";

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
                ...action.data,
                isAuth: true
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


export const setAuthUserData = ( userId, email, login) => ({
    type: "SET_AUTH_USER_DATA",
    data: {
        userId, email, login
    }
})

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email,login} = data.data;
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}


export default authReducer;