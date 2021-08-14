import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "bcdd4faf-f5b8-4f33-8a06-1a47aa179469"
    }
    })

export const userAPI = {
    getUsers (currentPage= 1, pageSize= 10) {
        return instance
        .get( `users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    }/*,

    getPageChanged (pageSize, pageNumber) {
        return instance
            .get( `users?page=${pageNumber}&count=${pageSize}`)
            .then(response => response.data)
    }*/
}

export const followUnfollowAPI = {
    follow (userId) {
        return  instance
            .post( `follow/${userId}`)
            .then(response => response.data)
    },
    unfollow (userId) {
        return instance
            .delete( `follow/${userId}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    authMe ()  {
        return   instance
            .get( `auth/me`)
            .then(response => response.data)
    },
    login (email, password, rememberMe = false)  {
        return   instance
            .post( `auth/login`, { email, password, rememberMe })
            .then(response => response.data)
    },
    logout ()  {
        return   instance
            .delete( `auth/login`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfileInfo (userId) {
        return   instance
            .get(`profile/` + userId)
            .then(response => response.data)
    },
    getProfileStatus(userId) {
        return   instance
            .get(`profile/status/` + userId)
            .then(response => response.data)
    },
    updateProfileStatus(status) {
        return   instance
            .put(`profile/status`,
                {status: status})
            .then(response => response.data)
    }
}


