import React from 'react';
import {Redirect} from "react-router-dom";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileInfoThunkCreator,
    getProfileStatusThunkCreator,
    setUserProfile,
    updateProfileStatusThunkCreator
} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {profileAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getProfileInfoThunkCreator(userId)
        this.props.getProfileStatusThunkCreator(userId)

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateProfileStatusThunkCreator} />
        )
    }

}

const MapStateToProps = (state) => {
    return {
        profile: state.profile.profile,
        status: state.profile.status
    }
}


export default compose(
    connect(MapStateToProps, {getProfileInfoThunkCreator, getProfileStatusThunkCreator, updateProfileStatusThunkCreator}),
    withRouter,
    //withAuthRedirect
)
(ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
//let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
//export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)