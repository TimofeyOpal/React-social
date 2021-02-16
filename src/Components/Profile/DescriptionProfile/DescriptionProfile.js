import React from "react";
import profile from "./DescriptionProfile.module.css";

const DescriptionProfile = () => {
    return (
            <div class={profile.profile__description}>
                <div><img width={140} height={180} src="https://klike.net/uploads/posts/2019-07/1564314090_3.jpg" alt="logo-profile"/></div>
                <div>Описание</div>
            </div>
        );
        }

        export default DescriptionProfile;