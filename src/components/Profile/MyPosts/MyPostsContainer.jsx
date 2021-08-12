import React from 'react';

import {AddPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const MapStateToProps = (state) => {
    return {
        newPostText: state.profile.newPostText,
        posts: state.profile.posts
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
    addPost: (newPostText) => {
       dispatch(AddPostAC(newPostText))
        }
    }
}

const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts)



export default MyPostsContainer;