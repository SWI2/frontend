import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import DoneIcon from '@material-ui/icons/Done'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import List from '@material-ui/core/List'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginBottom: theme.spacing(5),
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}))

export default function CarCard() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2020/Civic-Sedan/non-VLP/Global-Nav/Updated-MY20-Civic-Sedan-non-VLP-nav-2x.png"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent>
          <Typography component="h5" variant="h5">
            Lorem ipsum
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            convallis ante, in elementum orci. Sed ipsum nisl, volutpat ac velit
            id, semper tristique diam. Aliquam erat volutpat.
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <DoneIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Lorem" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Lorem" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Lorem" />
            </ListItem>
          </List>
        </div>
        <div className={classes.controls}>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <DoneIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Lorem" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Lorem" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Lorem" />
            </ListItem>
          </List>
        </div>
      </div>
    </Card>
  )
}
