import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";



const DialogItem = (props) => {
  return (
      <div className={s.dialog}>
                <NavLink to={'/dialogs/' + props.dialogID}>{props.name}</NavLink>
            </div>
  )
}

export default DialogItem;