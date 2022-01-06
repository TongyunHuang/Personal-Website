import React from "react"
import { Card, 
  CardMedia, 
  CardContent,
  CardActions,
  Button, 
  Typography, 
   } from "@mui/material"
import testImg from '../img/avatar.png';


export default function CardItem(props){
  
  return(
    <Card sx={{maxWidth:'600', margin:'2rem 1rem', flexDirection:'row'}}>
      {/* Pictures */}
      <CardMedia
        sx={{height:'100px'}}
        image={testImg}
        title="Paella dish"
      />

      {/* Content */}
      <CardContent>
        <Typography gutterBottom variant="h7" component="h3">
          Awesome Project
        </Typography>
      </CardContent>

      {/* Actions */}
      <CardActions disableSpacing >
        <Button size="small" variant="outlined" sx={{margin:'0 .5rem'}}>
          Details
        </Button>
        <Button size="small" variant="outlined" sx={{margin:'0 .5rem'}}>
          Code
        </Button>
        <Button size="small" variant="outlined" sx={{margin:'0 .5rem'}}>
          Link
        </Button>
      </CardActions>
    </Card>
  )
}