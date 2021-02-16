import React from "react";
import post from "./Post.module.css"

 const Post = ()=>{
    return(
        <div>
            <ul>
                <li className={post.mypost}>
                    <a href="#">
                        <img src="https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg" alt="logo"/>
                    </a>
                </li>

            </ul>
        </div>
    );
 }
 export default  Post;