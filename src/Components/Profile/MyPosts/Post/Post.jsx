import React from 'react';
import style from './Post.module.css'

const Post = () => {
    return (
        <div className={style.item}>
            <img src="https://pbs.twimg.com/profile_images/2881220369/2b27ac38b43b17a8c5eacfc443ce3384_400x400.jpeg"/>
            Post 1
        </div>);
}

export default Post;