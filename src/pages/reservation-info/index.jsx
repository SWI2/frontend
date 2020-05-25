import React from 'react'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import DescriptionIcon from '@material-ui/icons/Description'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

import { withGlobalStore } from '../../store'
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
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

const ReservationInfo = props => {
  const styles = useStyles()
  const { reservationId } = useParams()
  const { store } = props

  if (store.reservations === null) return 'Loading'

  const reservation = store.reservations.find(
    element => element.id === Number(reservationId)
  )

  if (!reservation) return 'Reservation not found'

  const [customerOpen, setCustomerOpen] = React.useState(true)
  const onCustomerClick = () => {
    setCustomerOpen(!customerOpen)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Detail rezervace {reservationId}</h1>
      <List className={styles.root}>
        {/* Customer */}
        <ListItem button onClick={onCustomerClick}>
          <ListItemText
            primary={reservation.customer.name}
            secondary="Zákazník"
          />
          {customerOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={customerOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={styles.nested}>
              <ListItemText
                primary={reservation.customer.email}
                secondary="Email"
              />
            </ListItem>
            <ListItem className={styles.nested}>
              <ListItemText
                primary={reservation.customer.phone}
                secondary="Telefón"
              />
            </ListItem>
          </List>
        </Collapse>
        {/* Reservation info */}
        <ListItem>
          <ListItemText primary={reservation.rent_date} secondary="Datum od" />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={reservation.return_date}
            secondary="Datum do"
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="Not implemented" secondary="Půjčil" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Nikto" secondary="Not implemented" />
        </ListItem>
        {/* Car */}
        <ListItem>
          <ListItemText primary={reservation.car.model.name} secondary="Auto" />
        </ListItem>
        {reservation.files.map(file => (
          <ListItem button key={file.id}>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary={file.name} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default withGlobalStore(ReservationInfo)
