import React from "react";
import s from './MyMessage.module.css'
import {MyMessageType} from "../../redux/state";

type MyMessagePropsType = {
    myMessage: Array<MyMessageType>
}

export const MyMessage = (props: MyMessagePropsType) => {

    let myMess = props.myMessage.map((mm) => {
        return (
            <div className={s.myMessage}>
                {mm.myMessage}
            </div>
        )
    })

    return (
        <div>
            {myMess}
        </div>
    )
}



