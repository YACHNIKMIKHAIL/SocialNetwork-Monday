import React from "react";
import s from './FriedMessage.module.css'
import {FriendMessageType} from "../../redux/state";

type FriedMessagePropsType={
    friendMessages: Array<FriendMessageType>
}
export const FriedMessage = (props:FriedMessagePropsType) => {
    let frieMess=props.friendMessages.map((ff)=>{
        return (
                <div className={s.friendMessage}>
                {ff.friendMessage}
                </div>
        )
    })
    return (
        <div>
                {frieMess}
        </div>
    )
}