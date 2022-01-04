import React from "react"
import { Card, CardMedia, CardContent, Typography  } from "@mui/material"

export default function Card(props){
  const {} = props.data
  return(
    <Card >
      <CardMedia
        image={waveImg}
        title="Paella dish"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          CardMedia Example
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          The CardMedia component sets a background image to cover available
          space.
        </Typography>
      </CardContent>
    </Card>
  )
}