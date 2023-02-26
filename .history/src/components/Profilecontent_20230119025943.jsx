import React from "react";
import s from './Navbar.module.css';
import MyPosts from "./MyPosts";


const Profilecontent = () => {

  let posts = [
    {id: 1, message: 'firstssds message'},
    {id: 2, message: 'second message'},
    {id: 3, message: 'third message'},
]

    return (
      <div className={s.contnet}>
        <div className="name">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Desert_Electric.jpg" ></img>
        </div>
        <MyPosts posts={posts} />          
      </div>
     
    );
    
}



export default Profilecontent;