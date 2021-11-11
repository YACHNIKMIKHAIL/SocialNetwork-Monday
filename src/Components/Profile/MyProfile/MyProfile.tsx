import React from "react";
import s from './MyProfile.module.css'
import {BioType} from "../../redux/state";

type MyProfilePropsType={
    img: string
    bio: BioType
}
export const MyProfile = (props: MyProfilePropsType) => {
    return (
        <div className={s.content}>
            <img src={props.img} alt=""/>
            <div className={s.bio}>
                {props.bio.title}
            </div>
            <div className={s.age}>
                I am {props.bio.age} old
            </div>
        </div>
    )
}