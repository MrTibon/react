import React from 'react';
import "./Profile.module.css";
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (<div className={style.content}>
        <div>All info</div>
        <img
            src={'https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2016/05/729665main_A-BlackHoleArt-pia16695_full-1024x576.jpg'}/>
        <div> ava +desc</div>
        <MyPosts/>

    </div>);
}

export default Profile;