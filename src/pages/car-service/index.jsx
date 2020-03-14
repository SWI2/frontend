import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Grid from '@material-ui/core/Grid'

import Jumbotron from '../../components/jumbotron'
import CarCard from '../../components/car-card'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(5),
  },
  carGrid: {
    paddingTop: theme.spacing(5),
  },
  filtersContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
}))

const CarService = () => {
  const styles = useStyles()

  return (
    <>
      <Jumbotron>
        <Typography component="h1" variant="h2">
          Autopožičovňa
        </Typography>
      </Jumbotron>
      <Container fixed className={styles.root}>
        <div className={styles.filtersContainer}>
          <ButtonGroup
            size="large"
            color="primary"
            aria-label="large outlined primary button group"
          >
            <Button color="inherit">Vše</Button>
            <Button color="inherit">Osobní</Button>
            <Button color="inherit">Nakladní</Button>
          </ButtonGroup>
        </div>
        <div className={styles.carGrid}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <CarCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CarCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CarCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CarCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CarCard />
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  )
}

export default CarService
