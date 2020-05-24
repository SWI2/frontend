import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: drawerWidth,
    },
  },
}))

const ReservationList = () => {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <h1>Reservations</h1>
    </div>
  )
}

export default ReservationList
