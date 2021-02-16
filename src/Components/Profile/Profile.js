import React from "react";
import s from './Profile.module.css';
import DescriptionProfile from "./DescriptionProfile/DescriptionProfile";
import Post from "./Post/Post";
import NewPosts from "./NewPosts/NewPosts";


const Profile = () => {
    return (
        <section className={s.profile}>
            <DescriptionProfile />
            <NewPosts />
            <Post message="hi, gays" />
        </section>

    );
}

export default Profile;