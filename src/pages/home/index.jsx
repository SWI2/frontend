import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'

import Image from './main.jpg'

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  main: {
    background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${Image}) no-repeat center`,
    backgroundSize: 'cover',
    height: '100%',
    position: 'relative',
  },
  slider: {
    color: 'white',
    padding: theme.spacing(4),
    textAlign: 'center',
    top: '50%',
    transform: 'translateY(-50%)',
    position: 'relative',
  },
}))
function Home() {
  const classes = useStyles()
  const history = useHistory()

  function handleClick() {
    history.push('/car-service')
  }

  return (
    <Grid className={classes.container} container>
      <Grid item xs={12}>
        <div className={classes.main}>
          <Container className={classes.slider}>
            <Typography variant="h3" component="h2" gutterBottom>
              Autopožičovňa roku 2020
            </Typography>
            <Button variant="contained" color="primary" onClick={handleClick}>
              Ponuka vozidiel
            </Button>
          </Container>
        </div>
      </Grid>
    </Grid>
  )
}

export default Home
