import React from "react";
import s from './Posts.module.css'
import {MyPostType} from "../../redux/state";

type PostsPropsType = {
    myPosts: Array<MyPostType>
}
export const Posts = (props: PostsPropsType) => {
    let post = props.myPosts.map((pp) => {
        return (

                <div className={s.post}>
                    {pp.post}
                    <div className={s.like}>
                        {pp.likeCount}
                    </div>
                </div>


        )
    })
    return (
        <div className={s.content}>
            <div>
                {post}
            </div>
        </div>
    )
}