import React from 'react';
import {connect} from "react-redux";
import {
    followSuccess, followThunkCreator, getUsersThunkCreator,
    setCurrentPage, toggleFollowingProgress,
    unfollowSuccess, unfollowThunkCreator
} from "../../redux/users-reducer";

import Users from "./Users";
import Preloader from "../common/Preloader";
import {userAPI} from "../../api/api";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


export class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}
                followThunkCreator={this.props.followThunkCreator}
                unfollowThunkCreator={this.props.unfollowThunkCreator}
            />
        </>

    }
}

const MapStateToProps = (state) => {
    return {
        users: state.users.users,
        totalUsersCount: state.users.totalUsersCount,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
}

/*const MapDispatchToProps = (dispatch) => {
    return {
    follow: (userId) => {
       dispatch(follow(userId))
        },
        unfollow: (userId) => {
       dispatch(unfollow(userId))
        },
        setUsers: (users) => {
dispatch(setUsers(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPage(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
        dispatch(setTotalUsersCount(totalCount))
        },
        setFetching: (fetching) => {
            dispatch(toggleIsFetching(fetching))
        }

    }
}*/

export default compose(
    //withAuthRedirect,
    connect(MapStateToProps, {
        followSuccess,
        unfollowSuccess,
        setCurrentPage,
        toggleFollowingProgress,
        getUsersThunkCreator,
        followThunkCreator,
        unfollowThunkCreator
    })
)(UsersContainer);






