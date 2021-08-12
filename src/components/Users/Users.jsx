import s from "./Users.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import {followUnfollowAPI} from "../../api/api";
import {toggleFollowingProgress} from "../../redux/users-reducer";


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }



    return <div>

        <div className={s.float}>
            {
                pages.map(p => {
                    return <span
                        className={p === props.currentPage ? s.active : ''}
                        onClick={() => props.onPageChanged(p)}

                    >{p}-</span>
                })
            }

        </div>
        {
            props.users.map(user => {
                return (<div>
                    <NavLink to={"/profile/" + user.id}>
                        <img src={user.photos.small != null
                            ? user.photos.small
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXYJjncOgjVgYKgD-VHvVHHcA14VgyUf2Xw&usqp=CAU"}
                             width={"100px"}/>
                    </NavLink>

                    {user.name}
                    <div>
                        {user.followed ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                onClick={() => {
props.unfollowThunkCreator(user.id)
                        }
                            }>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    props.followThunkCreator(user.id)
                            } }>Follow</button>}
                    </div>
                </div>)
            })
        }


    </div>
}
export default Users;