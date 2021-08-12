import React from 'react';

import {SendDialogMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {ProfileContainer} from "../Profile/ProfileContainer";
import {compose} from "redux";


const MapStateToProps = (state) => {
    return {
        DialogsPageData: state.dialogs
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        SendDialogMessage: (newMessageBody) => {
            dispatch(SendDialogMessageAC(newMessageBody))
        }
    }
}

//это всё делает compose
/*const AuthRedirectComponent =  withAuthRedirect(Dialogs)

const DialogsContainer = connect(MapStateToProps, MapDispatchToProps)(AuthRedirectComponent)*/


export default compose(
    connect(MapStateToProps, MapDispatchToProps)
    //,
    //withAuthRedirect
)(Dialogs);