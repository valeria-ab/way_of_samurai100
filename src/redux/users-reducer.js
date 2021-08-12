import {followUnfollowAPI, userAPI} from "../api/api";

const initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USERS": {
            return {
                ...state,
                users: action.users
            }
        }
        case "FOLLOW": {

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case "SET_CURRENT_PAGE": {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case
        "SET_TOTAL_USERS_COUNT": {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case
        "TOGGLE_IS_FETCHING": {
            return {
                ...state,
                isFetching: action.fetching
            }
        }
        case
        "TOGGLE_IS_FOLLOWING_PROGRESS": {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}


export const followSuccess = (userId) => ({
    type: "FOLLOW",
    userId: userId
})

export const unfollowSuccess = (userId) => ({
    type: "UNFOLLOW",
    userId: userId
})


export const setUsers = (users) => ({
    type: "SET_USERS",
    users: users
})
export const setCurrentPage = (currentPage) => ({
    type: "SET_CURRENT_PAGE",
    currentPage
})
export const setTotalUsersCount = (totalCount) => ({
    type: "SET_TOTAL_USERS_COUNT",
    totalCount
})
export const toggleIsFetching = (fetching) => ({
    type: "TOGGLE_IS_FETCHING",
    fetching
})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: "TOGGLE_IS_FOLLOWING_PROGRESS",
    isFetching,
    userId
})

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        userAPI.getUsers(currentPage, pageSize)
            .then(data => {
               dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
               dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        followUnfollowAPI.unfollow(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        followUnfollowAPI.follow(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}



export default usersReducer;