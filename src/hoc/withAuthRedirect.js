import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";


const MapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Redirect to={'/login'} />
            return <Component {...this.props} />
        }
    }


    const ConnectedAuthRedirectComponent = connect(MapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}