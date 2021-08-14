import React from 'react';
import {connect} from "react-redux";

import * as axios from "axios";

import Preloader from "../common/Preloader/Preloader";
import Header from "./Header";
import {getAuthUserData, logout, setAuthUserData, toggleIsFetching} from "../../redux/auth-reducer";



export class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData()
    }


    render() {

        return <>
            {/*     {this.props.isFetching ? <Preloader /> : null}*/}
            <Header {...this.props}  />
        </>

    }
}

const MapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userName: state.auth.login
})

/*
const MapDispatchToProps = (dispatch) => {
    return {
        toggleIsFetching: (fetching) => {
            dispatch(toggleIsFetching(fetching))
        },
        setAuthUserData: (data) => {
            dispatch(setAuthUserData(data))
        }


    }
}*/

export default connect(MapStateToProps, {
    setAuthUserData,
    toggleIsFetching,
    getAuthUserData,
    logout
})(HeaderContainer)


