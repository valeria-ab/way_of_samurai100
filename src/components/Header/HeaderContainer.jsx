import React from 'react';
import {connect} from "react-redux";

import Header from "./Header";
import { logout } from "../../redux/auth-reducer";



export class HeaderContainer extends React.Component {

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

export default connect(MapStateToProps, {logout})(HeaderContainer)


