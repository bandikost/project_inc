import React from "react";
import Post from "./Any files/Post";

const MyPosts = () => {
    return (
<div className="container-text">
    <textarea></textarea>
    <button>Add post</button>
    <button>Remove</button>
        <div className={s.posts}>
            <Post message='Hello' />
            <Post message='Hello ы' />
        </div>
</div>
    )
}

export default MyPosts;