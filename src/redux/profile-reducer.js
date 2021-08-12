import {profileAPI, userAPI} from "../api/api";
import {setTotalUsersCount, setUsers, toggleIsFetching} from "./users-reducer";

const initialState = {
  profile: null,
    posts: [
        {id: 1, postMessage: 'Hi, how are you?', likesCount: 0},
        {id: 2, postMessage: "It's my first post", likesCount: 25}
    ],
    status: ""
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_POST":{
            let newPost = {id: 3, postMessage: action.newPostText, likesCount: 0}
            return {
                ...state,
                posts: [newPost, ...state.posts]
            };
        }
        case "SET_USER_PROFILE": {
            let newState = {...state}
            newState.profile = action.profile
            return newState;
        }
        case "SET_PROFILE_STATUS": {
            let newState = {...state}
            newState.status = action.status
            return newState;
        }

        default:
            return state
    }
}


export const AddPostAC = (newPostText) => ({
    type: "ADD_POST",
    newPostText
})
export const setUserProfile = (profile) => ({
    type: "SET_USER_PROFILE",
    profile
})
export const setProfileStatus = (status) => ({
    type: "SET_PROFILE_STATUS",
    status
})

export const getProfileInfoThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileInfo(userId)
            .then(data => {
             dispatch(setUserProfile(data))
            })
    }
}

export const getProfileStatusThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileStatus(userId)
            .then(data => {
                dispatch(setProfileStatus(data))
            })
    }
}

export const updateProfileStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateProfileStatus(status)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(setProfileStatus(status))
                }
            })
    }
}




export default profileReducer;