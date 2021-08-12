import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom"
import MyFriends from "./components/MyFriends/MyFriends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className={'content-wrapper'}>
                <Route path={'/login'} render={() =>   <Login />}/>
                <Route path={'/profile/:userId?'} render={() =>   <ProfileContainer  />}/>
                <Route path={'/dialogs'} render={() =>   <DialogsContainer />}/>
                <Route path={'/friends'} render={() =>   <MyFriends />}/>
                <Route path={'/users'} render={() =>   <UsersContainer />}/>

            </div>
        </div>
    );
}

export default App;