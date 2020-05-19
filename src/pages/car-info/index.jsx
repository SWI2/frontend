import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import PersonIcon from '@material-ui/icons/Person'
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation'
import SettingsIcon from '@material-ui/icons/Settings'
import SpeedIcon from '@material-ui/icons/Speed'
import { useParams } from 'react-router-dom'

import { withGlobalStore } from '../../store'
import ReservationForm from '../../components/reservation-form'
import Jumbotron from '../../components/jumbotron'
import IconWithText from '../../components/icon-with-text'

const useStyles = makeStyles(theme => ({
  carGrid: {
    paddingTop: theme.spacing(5),
  },
  filtersContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  carFeatures: {
    'justifyContent': 'center',
    'alignItems': 'center',
    'display': 'flex',
    '& > *:not(:first-child)': {
      marginLeft: '1rem',
    },
  },
}))

const CarInfo = ({ store }) => {
  const styles = useStyles()
  const { carId } = useParams()

  if (store.cars === null) return 'Loading'

  const car = store.cars.find(el => el.id === Number(carId))

  if (!car) return 'car not found'

  return (
    <>
      <Jumbotron>
        <Typography component="h1" variant="h2">
          {car.model.name}
        </Typography>
        <div className={styles.carFeatures}>
          <IconWithText
            text={car.model.number_of_seats}
            icon={<PersonIcon />}
          />
          <IconWithText text={car.model.fuel} icon={<LocalGasStationIcon />} />
          <IconWithText text={car.model.gear} icon={<SettingsIcon />} />
          <IconWithText text={`${car.model.power} kW`} icon={<SpeedIcon />} />
        </div>
        <Typography component="p" variant="h6">
          {car.pricing_per_day} Kč / 24 hod
        </Typography>
      </Jumbotron>

      <ReservationForm images={[car.thumbnail_url]} carId={carId} />
    </>
  )
}

export default withGlobalStore(CarInfo)
