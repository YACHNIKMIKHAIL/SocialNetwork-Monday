import React from "react";
import style from './Profile.module.css'
import {MyProfile} from "./MyProfile/MyProfile";
import {NewPost} from "./NewPost/NewPost";
import {Posts} from "./Posts/Posts";

export const Profile = () => {
    return (
        <div className={style.content}>
            <MyProfile/>
            <NewPost/>
            <Posts/>
        </div>
    )
}
