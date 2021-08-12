import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

 const store = {
    _state: {
        ProfilePageData: {
            posts: [
                {id: 1, postMessage: 'Hi, how are you?', likesCount: 0},
                {id: 2, postMessage: "It's my first post", likesCount: 25}
            ],
            newPostText: ""
        },
        DialogsPageData: {
            dialogs: [
                {id: 1, name: "Kyla"},
                {id: 2, name: "Nicole"},
                {id: 3, name: "Grace"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 1, message: "How are u"},
                {id: 1, message: "You look great!"}
            ],
            newDialogText: ""
        },
        MyFriendsPageData: [
            {id: 1, name: "Kyla"},
            {id: 2, name: "Nicole"},
            {id: 3, name: "Grace"}
        ]
    },
    getState() {
        return this._state
    },
    rerenderEntireTree() {

    },
    subscribe(observer) {
        this.rerenderEntireTree = observer
    },


    dispatch(action) {

        this._state.ProfilePageData = profileReducer(this._state.ProfilePageData, action)
        this._state.DialogsPageData = dialogsReducer(this._state.DialogsPageData, action)

        this.rerenderEntireTree(this._state);
    }

}






