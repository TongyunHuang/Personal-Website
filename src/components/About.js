import React from "react"

import { Avatar } from "@mui/material"
import '../styles/container.css'
import avatarImg from '../img/avatar.png'



export default function About(props){
  return(
    <div maxWidth="lg" style={{background:'#F2F2F0', paddingTop:'30px'}} className="row">
      <div className="col" style={{padding:'0 5rem'}}>
        <h3>About Me</h3>
        <p>
          Hello, I am Tongyun Huang, currently a master of computer science student at University of Illinois at Urbana-Champaign (UIUC). I have some research experience using Python. I also have project development experience building websites and applications with different languages like Java, JavaScript. I am looking for Software Engineering Intern and will be available from May to August, 2022.
        </p>
      </div>
      <div className="col">
        <Avatar src={avatarImg} sx={{width:'10rem', height:'10rem', margin:'auto', padding:'auto'}}></Avatar>
      </div>

    </div>
  )
}