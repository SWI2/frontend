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

const ReservationInfo = ({ store }) => {
  const styles = useStyles()
  const { reservationId } = useParams()

  console.log('Tesr')

  return (
    <p>Reservation {reservationId}</p>
  )
}

export default withGlobalStore(ReservationInfo)
