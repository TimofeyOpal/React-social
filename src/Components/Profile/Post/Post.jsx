import React from "react";
import post from "./Post.module.css"

 const Post = (props)=>{
    return(
        <div>
            <ul>
                <li className={post.mypost}>
                    <a className={post.linkImage}  href="#">
                        <img width={50} src="https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg" alt="logo"/>
                        <h5>Name name</h5>
                    </a>
                    <span>{props.message}</span>
                </li>

            </ul>
        </div>
    );
 }
 export default  Post;