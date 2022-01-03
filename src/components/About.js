import React from "react"

import { Avatar } from "@mui/material"
import '../styles/container.css'




export default function About(props){
  return(
    <div maxWidth="lg" style={{background:'#F2F2F0', top:0}} className="row">
      <div className="col">
        <p>
          Hello, I am Tongyun Huang, currently a master of computer science student at University of Illinois at Urbana-Champaign (UIUC). I have some research experience using Python. I also have project development experience building websites and applications with different languages like Java, JavaScript. I am looking for Software Engineering Intern and will be available from May to August, 2022.
        </p>
      </div>
      <div className="col">
        <Avatar sx={{width:'10rem', height:'10rem', margin:'auto'}}></Avatar>
      </div>

    </div>
  )
}