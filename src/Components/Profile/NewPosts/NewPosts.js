import React from "react";
import newposts from "./NewPosts.module.css"

const NewPosts = () => {
    return (
        <form className={newposts.FormSendPost} action="">
            <input type="text"/>
            <button>отправить</button>
        </form>
    );
}
export default NewPosts;