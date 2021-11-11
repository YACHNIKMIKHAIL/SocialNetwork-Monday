import React from "react";
import style from './Profile.module.css'
import {MyProfile} from "./MyProfile/MyProfile";
import {NewPost} from "./NewPost/NewPost";
import {Posts} from "./Posts/Posts";
import {MyInfoType, MyPostType} from "../redux/state";

type ProfilePropsType={
    myInfo:MyInfoType
    myPosts:Array<MyPostType>
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.content}>
            <MyProfile img={props.myInfo.img}
                       bio={props.myInfo.bio}/>
            <NewPost/>
            <Posts myPosts={props.myPosts}/>
        </div>
    )
}
