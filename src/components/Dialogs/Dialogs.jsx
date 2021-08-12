import React from 'react';
import s from './Dialogs.module.css'
import MessageItem from "./MessageItem";
import DialogItem from "./DialogItem";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";




const Dialogs = (props) => {
  /*  if (!props.isAuth)
        return <Redirect to={'/login'}/>*/

    const addNewMessage = (values) => {
      props.SendDialogMessage(values.newMessageBody)
    }

    return (

        <div className={s.dialogsPage}>

            <div className={s.dialogs}>
                {
                    props.DialogsPageData.dialogs.map(
                        dialog => <DialogItem name={dialog.name} dialogID={dialog.id}/>
                    )}

            </div>

            <div className={s.messages}>
                {
                    props.DialogsPageData.messages.map(
                        message => <MessageItem message={message.message}/>
                    )}

            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>




        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMessageBody"}  placeholder={"type your message..."} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;