import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";



const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;





