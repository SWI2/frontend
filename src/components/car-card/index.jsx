import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'

import './styles.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

export default function CarCard() {
  const classes = useStyles()
  const history = useHistory()
  function handleClick() {
    history.push('/car/1')
  }

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea onClick={handleClick}>
          <CardMedia
            className={classes.media}
            image="https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2020/Civic-Sedan/non-VLP/Global-Nav/Updated-MY20-Civic-Sedan-non-VLP-nav-2x.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleClick}>
            Prenajať
          </Button>
        </CardActions>
      </Card>
    </>
  )
}
