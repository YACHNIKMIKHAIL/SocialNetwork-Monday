import React from "react";
import s from './NewPost.module.css'

export const NewPost = () => {
    return (
        <div className={s.content}>
            <div className={s.input}>
            <input type='text'></input>
            </div>
            <div className={s.button}>
                <button>ADD</button>
                <button>REMOVE</button>
            </div>
        </div>
    )
}