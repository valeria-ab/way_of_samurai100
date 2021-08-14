import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                <div>
                    <h1>{props.profile.fullName}</h1>
                    <div>
                        <img src={props.profile.photos.large? props.profile.photos.large : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXYJjncOgjVgYKgD-VHvVHHcA14VgyUf2Xw&usqp=CAU"}/>
                    </div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    <div>
                        About Me: <span>{props.profile.aboutMe}</span>
                    </div>
                    <div>
                        Looking For A Job: <span>{props.profile.lookingForAJob ? " yes" : " no"}</span>
                    </div>
                    <div>
                        Details: <span>{props.profile.lookingForAJobDescription}</span>
                    </div>
                    <MyPostsContainer store={props.ProfilePageData} dispatch={props.dispatch}/>
                </div>
            </div>
                )
                }
                }


                export default Profile;