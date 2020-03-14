import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    height: '15rem',
    backgroundColor: theme.palette.primary.light,
    textAlign: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
  },
}))

const Jumbotron = ({ children }) => {
  const styles = useStyles()
  return (
    <Grid container className={styles.root}>
      <Grid item xs={12} className={styles.container}>
        <Container>{children}</Container>
      </Grid>
    </Grid>
  )
}

export default Jumbotron
