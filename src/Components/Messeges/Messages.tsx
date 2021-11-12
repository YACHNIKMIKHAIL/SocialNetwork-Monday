import React from "react";
import style from './Messages.module.css'
import {MyMessage} from "./MyMessage/MyMessage";
import {FriedMessage} from "./FriedMessage/FriedMessage";
import {FriendMessageType, MessagesType, MyMessageType} from "../redux/state";
import s from "./MyMessage/MyMessage.module.css";

type MessagesPropsType={
    myMessages:Array<MyMessageType>
    friendMessages:Array<FriendMessageType>
}
export const Messages = (props: MessagesPropsType) => {

    return (
        <div className={style.content}>
            <MyMessage myMessage={props.myMessages}/>
            <FriedMessage friendMessages={props.friendMessages}/>
            <MyMessage myMessage={props.myMessages}/>
            <FriedMessage friendMessages={props.friendMessages}/>
            <FriedMessage friendMessages={props.friendMessages}/>
            <FriedMessage friendMessages={props.friendMessages}/>
            <FriedMessage friendMessages={props.friendMessages}/>
            <FriedMessage friendMessages={props.friendMessages}/>
            <MyMessage myMessage={props.myMessages}/><MyMessage myMessage={props.myMessages}/>
        </div>
    )
}
