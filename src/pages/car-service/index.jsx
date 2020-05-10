import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Grid from '@material-ui/core/Grid'

import Jumbotron from '../../components/jumbotron'
import CarCard from '../../components/car-card'
import { withGlobalStore } from '../../store'

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

const CarService = ({ store }) => {
  const styles = useStyles()
  const [type, setCarType] = useState(null)

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
            <Button color="inherit" onClick={() => setCarType(null)}>
              Vše
            </Button>
            <Button color="inherit" onClick={() => setCarType('Personal')}>
              Osobní
            </Button>
            <Button color="inherit" onClick={() => setCarType('Truck')}>
              Nakladní
            </Button>
          </ButtonGroup>
        </div>
        <div className={styles.carGrid}>
          <Grid container spacing={3}>
            {store.cars
              ? store.cars
                  .filter(el => {
                    if (type === null) return true
                    return el.model.type === type
                  })
                  .map(el => (
                    <Grid key={el.id} item xs={12} sm={6} md={3}>
                      <CarCard id={el.id} title={el.model.name} image={el.thumbnail_url} />
                    </Grid>
                  ))
              : 'Loading data'}
          </Grid>
        </div>
      </Container>
    </>
  )
}

export default withGlobalStore(CarService)
