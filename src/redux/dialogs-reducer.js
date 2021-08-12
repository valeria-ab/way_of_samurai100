
const initialState = {
    dialogs: [
        {id: 1, name: "Kyla"},
        {id: 2, name: "Nicole"},
        {id: 3, name: "Grace"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 1, message: "How are u"},
        {id: 1, message: "You look great!"}
    ]
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_DIALOG_MESSAGE": {
            let newState = {...initialState};
            newState.messages.push(
                {id: 4, message: action.newMessageBody}
            )

            return newState;
        }

        default:
            return state;
    }
}


export const SendDialogMessageAC = (newMessageBody) => ({
    type: "ADD_DIALOG_MESSAGE",
    newMessageBody
})



export default dialogsReducer;