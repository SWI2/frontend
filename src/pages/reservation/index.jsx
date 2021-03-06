import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'

import { withGlobalStore } from '../../store'
import ReservationListItem from '../../components/reservation-list-item'
import { drawerWidth } from '../../components/car-rental-drawer'

const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: drawerWidth,
    },
  },
  title: {
    padding: '10px',
  },
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}))

const ReservationList = ({ store }) => {
  const styles = useStyles()

  useEffect(() => {
    async function loadReservations() {
      store.loadReservations()
    }
    loadReservations()
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Reservations</h1>
      <div>
        {store.reservations ? (
          <List className={styles.root}>
            {store.reservations.map(reservation => (
              <ReservationListItem
                key={reservation.id}
                reservation={reservation}
              />
            ))}
          </List>
        ) : (
          'Loading data'
        )}
      </div>
    </div>
  )
}

export default withGlobalStore(ReservationList)
