import React from "react"
import CardItem from "./CardItem"
import { Container } from "@mui/material"





export default function Project(props){
  return(
    
    <div maxWidth="lg" style={{background:'#F2F2F0', top:0, padding:'0 5rem'}}>
      <h3>Projects</h3>
      <div style={{display:'flex', flexWrap:'wrap'}}>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
      </div>
    </div>
  )
}